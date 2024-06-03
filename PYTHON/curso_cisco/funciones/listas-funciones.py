def list_sum(lst):
    s = 0
 
    for elem in lst:            #una lista en una funcion
        s += elem
 
    return s
print(list_sum([5,4,3]))


def strange_list_fun(n):
    strange_list = []
                                              #crear una lista con funcion y el for
    for i in range(0, n):
        strange_list.insert(0, i)
    
    return strange_list

print(strange_list_fun(5))