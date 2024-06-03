let promesa1 =param1 =>new Promise((res,rej)=>{

const b='Holamundo';
res(b);
})


let promesa2 =param2 =>new Promise((res,rej)=>{
    
    
    res(param2+ "holamundo");
})


Promise.resolve('primer valor')
    .then(a=> promesa1(a))
    .then(b=>promesa2(b))


async function main(){
    try{
        const a= await Promise.resolve('primer valor');
        const b= promesa1(a);
        const c=promesa2(b);
    } catch(error){
        console.log({error})
    }
}

