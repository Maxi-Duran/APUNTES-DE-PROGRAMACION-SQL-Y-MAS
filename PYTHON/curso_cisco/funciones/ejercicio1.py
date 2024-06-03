def is_prime(num):
    if num % 2==1:
        return is_prime
    else:
        print()
        

for i in range(1, 20):
    if is_prime(i + 1):
        print(i + 1, end=" ")
print(is_prime(1))
