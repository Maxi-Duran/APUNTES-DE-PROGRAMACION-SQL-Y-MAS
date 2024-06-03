CREATE OR REPLACE PROCEDURE PGASTO_COMUN_CERO IS

cd_gasto_cero     gasto_comun_pago_cero%rowtype;

cursor c_gasto_comun_cero is

select gc.anno_mes_pcgc as fecha1,
id_edif,
e.nombre_edif as edificio,
numrun_adm,
pnombre_adm||' '||appaterno_adm||' '||apmaterno_adm as nombre_admin,
gc.nro_depto,
numrun_rpgc,
fecha_pago_gc,
MONTHS_BETWEEN(SYSDATE, fecha_pago_gc) as fecha,
pnombre_rpgc||' '||snombre_rpgc||' '||appaterno_rpgc||' '||apmaterno_rpgc as nombre_responsable
from gasto_comun gc join edificio e using(id_edif)
join administrador using(numrun_adm)
join responsable_pago_gasto_comun using(numrun_rpgc)
WHERE MONTHS_BETWEEN(SYSDATE, fecha_pago_gc) >= 2
order by 3,6;

c_gasto  c_gasto_comun_cero%rowtype;
BEGIN
EXECUTE IMMEDIATE 'TRUNCATE TABLE GASTO_COMUN_PAGO_CERO';


for c_gasto in c_gasto_comun_cero LOOP

cd_gasto_cero.anno_mes_pcgc:=c_gasto.fecha1;
cd_gasto_cero.id_edif:=c_gasto.id_edif;
cd_gasto_cero.nombre_edif:=c_gasto.edificio;
cd_gasto_cero.run_administrador:=c_gasto.numrun_adm;
cd_gasto_cero.nombre_admnistrador:=c_gasto.nombre_admin;
cd_gasto_cero.nro_depto:=c_gasto.nro_depto;
cd_gasto_cero.run_responsable_pago_gc:=c_gasto.numrun_rpgc;
cd_gasto_cero.nombre_responsable_pago_gc:=c_gasto.nombre_responsable;


 

case when c_gasto.fecha=2 then 
cd_gasto_cero.valor_multa_pago_cero:= 29.509*2;
cd_gasto_cero.observacion := 'Se realizara el corte del combustible y agua a contar del: ' ||' '|| TO_CHAR(ADD_MONTHS(c_gasto.fecha_pago_gc, 1), 'DD/MM/YYYY');

when  c_gasto.fecha>2 then
cd_gasto_cero.valor_multa_pago_cero:= 29.509*4;
cd_gasto_cero.observacion:='Se realizara el corte del combustible y agua';
end case;

 INSERT INTO gasto_comun_pago_cero (
            anno_mes_pcgc,
            id_edif,
            nombre_edif,
            run_administrador,
            nombre_admnistrador,
            nro_depto,
            run_responsable_pago_gc,
            nombre_responsable_pago_gc,
            valor_multa_pago_cero,
            observacion
        ) VALUES (
            cd_gasto_cero.anno_mes_pcgc,
            cd_gasto_cero.id_edif,
            cd_gasto_cero.nombre_edif,
            cd_gasto_cero.run_administrador,
            cd_gasto_cero.nombre_admnistrador,
            cd_gasto_cero.nro_depto,
            cd_gasto_cero.run_responsable_pago_gc,
            cd_gasto_cero.nombre_responsable_pago_gc,
            cd_gasto_cero.valor_multa_pago_cero,
            cd_gasto_cero.observacion
        );

end loop;

END;

EXEC PGASTO_COMUN_CERO;
/
select * from gasto_comun_pago_cero