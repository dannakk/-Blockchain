import random

p = int(input("Enter p value: "))
q = int(input("Enter q value: "))
n = p * q

f = (p - 1) * (q - 1)

def greatest_common_divisor(first_number,second_number):
    while second_number:
        first_number,second_number = second_number,first_number%second_number
    return first_number

def get_e_value(f):
    list = [i for i in range(1,f)]
    e = random.choice(list)
    if(greatest_common_divisor(e,f) == 1 % f):
        return e
    return get_e_value(f)
    
def modular_inverse(e, f):
    g,x,y = f,0,1
    while(e > 0):
        q = g // e
        e,x,g,y = g % e,y,e,x-q*y
    if (g == 1):
        return x % f
        
print("The value of n is:",n)

e = int(get_e_value(f))
print("The value of e is:",e)

d = modular_inverse(e, f)
print("The value of d is:",d)

