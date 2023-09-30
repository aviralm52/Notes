# # ! Encapsulation
    # '''Done to avoid name conflict and to do rewrite the function and method with same name but in another class'''
# # ! Abstraction
    # '''Hiding the background and implementation details between input and output'''
# # ! Inheritence
    # ''''''
# # ! Polymorphism
    # '''Calling same function for different use cases with different inputs'''
    
    
# class ClassName(object):
#     def __init__(self):   # * constructor 
#         self.variable_name = value
#         self.variable_name = 'value'
        

# class Mobile:
#     def __init__(self):
#         self.model = 'RealmeX'
#         print(self)
#     def show_model(self):
#         print('Model: ', self.model)
#         print(self)
    
# realme = Mobile()
# redmi = Mobile()
# nokia = Mobile()
# print()

# redmi.model = 'Redmi'
# print('realme.model: ',realme.model)
# realme.show_model()
# print('redmi.model: ',redmi.model)
# redmi.show_model()
# print(nokia.model)


# ! Class Variable & Method    - single copy of class variable is created for all the objects of the class
class Mobile:
    classVar = 'YES'     # * class_varibale
    def __init__(self):
        self.model = 'Redmi'   # * instance variable
    def show_model(self):
        self.model_no = '0XXBY2633'    # * instance variable
        localVar = 10
        print(self.model)
        print("Local Variable: ",localVar)
    @classmethod               # * classmethod decorator is used for accessing class variable inside the class : cls.class_variable_name
    def printClassMethod(cls):
        print("Accessing class_variable inside the class: ",cls.classVar)
    
    
m = Mobile()
m.show_model()
m.printClassMethod()
print("Accessing class variable using object name: ",m.classVar)
print("Accessing class_variable using class name: ",Mobile.classVar)      # * for accessing class variable outside the class: class_name.class_variable_name
print()

def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()


# # # ! Accessing class varible using Object_name and Class_name
# redmi = Mobile()
# realme = Mobile()
# oppo = Mobile()

# print(Mobile.classVar, id(Mobile.classVar))
# print(redmi.classVar, id(redmi.classVar))
# print(realme.classVar, id(realme.classVar))
# print(oppo.classVar, id(oppo.classVar))
# print()

# # * if we change class variable with object name then it will change for that object only but when we change it with class name it changes for all objects
# redmi.classVar = 'changed for redmi only'
# print(Mobile.classVar, id(Mobile.classVar))
# print(redmi.classVar, id(redmi.classVar))
# print(realme.classVar, id(realme.classVar))
# print(oppo.classVar, id(oppo.classVar))
# print()

# # * when we change a class variable by object then the object creates its own copy of the class variable and then change the copy and this copy remains same even if the class variable is changed, 
# # * it will be changed only when it is changed again with object name

# Mobile.classVar = 'Changed for all'    # * when we change class variable by class_name then it doesn't change for redmi as redmi already created its own copy of the class variable and is using that copy 
# print(Mobile.classVar, id(Mobile.classVar))
# print(redmi.classVar, id(redmi.classVar))
# print(realme.classVar, id(realme.classVar))
# print(oppo.classVar, id(oppo.classVar))
# print()


# # # ! instance method
# redmi.show_model()
# print(redmi.model_no)    # * if we call this instance variable without calling the show_model() function then it will give error as this instance variable is getting declared inside the show_model() function so the variable will not be created untill we call the function
# print(Mobile.show_model(redmi))


# # # TODO: Static Method    ->  generally used to perform an operation that is not dependent or related to instance of the class
# # # ! In static method the parameters are passed from outside
# class Mobile:  
#     classVar = 100
#     @staticmethod       # * static method belongs to class and not to any instance, it do not modify the instance or class state
#     def show_model(m,p):
#         model = m
#         price = p
#         print(model, price)
#         print(Mobile.classVar)

# realme = Mobile()
# Mobile.show_model('ReamleX', 5000)


# # # TODO: Passing member of one class to another
# class Student:
#     def __init__(self, n, r):
#         self.name = n
#         self.rollno = r
#     def disp(self):
#         print(self.name)
#         print(self.rollno)
#       
# class User:
#     @staticmethod
#     def show(obj):
#         print(obj.name)
#         print(obj.rollno)
#         obj.disp()
#       
# stud = Student('Aviral', 1004)
# User.show(stud)


# # # TODO: Nested Class
# class Army:
#     def __init__(self):
#         self.name = 'Aviral'
#         self.gn = self.Gun()   # * creating object of inner class
#     def show(self):
#         print(self.name)
#   
#     class Gun:
#         def __init__(self):
#             self.name = 'AK47'
#             self.capacity = '75 Rounds'
#             self.length = '34.3 in'
#         def disp(self):
#             print(self.name, self.capacity, self.length)
#
# a = Army()
# a.show()
# a.gn.disp()
#
# # * creating object of inner class from outside
# g = Army().Gun()
# g.disp()


# # TODO: Single Inheritence
# class Parent:
#     money = 1000
#     def __init__(self, n):
#         print('Parent class constructor')
#         self.name = n
#     def show(self):
#         print('Parent class instance method')
#    
#     @classmethod
#     def showmoney(cls):
#         print('Parent class class method', cls.money)
#   
#     @staticmethod
#     def stat():
#         a=10
#         print('Parent class static method', a)
#
# class Child(Parent):
#     # def __init__(self):    # ! constuctor overriding -> if constructor is available in child class then it replaces const. of parent class
#     #     print('Child class constructor')
#     def disp(self):
#         print('child class instance method          ', self.name)
#
# son = Child('Mr.')     # * parameters for parent class constructor is also passed in child class object
# son.disp()
# son.show()
# son.showmoney()
# son.stat()
    
    
# # TODO:  super() method
# class Parent:
#     def __init__(self, m):
#         print('Parent class constructor')
#         self.money = m
#     def show(self):
#         print('Parent class instance method')
#
# class Child(Parent):
#     def __init__(self, m):    
#         super().__init__(m)
#         print('Child class constructor')
#     def disp(self):
#         print('child class instance method', self.money)
#        
# son = Child(2000)
# son.disp()


# # TODO: Multilevel Inheritence
# class Parent():
#     def __init__(self):
#         super().__init__()
#         print('Parent class constructor')
#     def showP(self):
#         print('Parent class method')
#
# class Child(Parent):
#     def __init__(self):
#         super().__init__()
#         print('Child class constructor')
#     def showC(self):
#         print('Child class method')
#
# class GrandChild(Child):
#     def __init__(self):
#         super().__init__()
#         print('GrandChild class constructor')
#     def showGC(self):
#         print('Grand Child class method')
#
# g = GrandChild()
# g.showGC()
# g.showC()
# g.showP()


# # TODO: Hierarichal Inheritence
# class Parent():
#     def __init__(self):
#         super().__init__()
#         print('Parent class constructor')
#     def showP(self):
#         print('Parent class method')
#
# class Child1(Parent):        # * sibling classes can't access each others methods
#     def __init__(self):
#         super().__init__()
#         print('Child1 class constructor')
#     def showC(self):
#         print('Child1 class method')
#
# class Child2(Parent):
#     def __init__(self):
#         super().__init__()
#         print('Child2 class constructor')
#     def showC(self):
#         print('Child2 class method')
#
# ch1 = Child1()
# ch2 = Child2()


# # TODO: Multiple Inheritence
# class Parent1():
#     def __init__(self):
#         super().__init__()
#         print('Parent1 class constructor')
#     def showP(self):
#         print('Parent1 class method')

# class Parent2():
#     def __init__(self):
#         super().__init__()
#         print('Parent2 class constructor')
#     def showP(self):
#         print('Parent2 class method')

# class Child(Parent1, Parent2):     #  !  MRO -> Method Resolution Order (Child -> Parent1 -> Object -> Parent2's constructor)
#     def __init__(self):
#         super().__init__()
#         print('Child class constructor')
    
# son = Child()
# print(Child.mro())
# # * if we remove super() from parent1 then constructor of only Parent1 will be called and not of Parent2


# # TODO: Polymorphism

# # ! Duck Typing -> if a method is defined for an object then it will run, objects are only distinguished at runtime
# class Duck:
#     def walk(self):
#         print("walk like a duck")
# class Horse:
#     def walk(self):
#         print("walk like a horse")
# duck = Horse()   # *  -> we wanted to create a object for duck class but by mistake created for horse class and we want to run walk() method, as walk() method is available in horse class also so it will be implemented instead of walk() method of duck class
# duck.walk()


# # ! Strong Typing -> check whether a particular method that is being invoked is present in object or not
# class Duck:
#     def walk(self):
#         print("walk like a duck")
# class Horse:
#     pass
# def myfunction(obj):
#     if hasattr(obj, 'walk'):        # * hasattr(object_name, method_name) return true if the method is present in the class of object
#         obj.walk()
#     else: print('Method not found')

# duck = Duck()
# horse = Horse()
# myfunction(duck)


# # ! Method Overloading  -> it is not available in python   - Compile Time 
# * In java, method overloading means that more than one method with same name is defined in the same class having differnt number or types of parameter but in python we can not create more than one method with same name in a class if done then only the method that is declared at last remains
# * In python, method overloading means when a method performs more than one function

# # ? Method 1  (Not Efficient)
# class Overload:
#     def add(self, a = None, b = None, c = None):
#         if (a != None and b != None and c!= None):
#             s = a+b+c
#         elif (a != None and b != None):
#             s = a+b
#         else : s = a
#         return s

# o = Overload()
# print(o.add(10, 20))
# print(o.add(10, 20, 30))


# # ? Method 2  (Efficient) 
# from multipledispatch import dispatch

# class Overload:
#     @dispatch(int, int)
#     def result(a, b):
#         value = a*b
#         return value

#     @dispatch(int, int, int)
#     def result(a, b, c):
#         value = a+b+c
#         return value

# o = Overload()
# print(o.result(3,7))
# print(o.result(2,5,3))


# # ! Method Overriding     - Run Time
# # * Method overriding means proving the implementation of a method in subclass that is already defined in superclass, in this case only child class method is available and it replaces parent class method
# class Add:
#     def result(self, a, b):
#         print(a+b)
# class Multi(Add):
#     def result(self, a, b):
#         print(a*b)
# m = Multi()
# m.result(2,5)

# # * we can also use the parent class method using child class object by using super() method
# class Add:
#     def result(self, a, b):
#         print(a+b)
# class Multi(Add):
#     def result(self, a, b):
#         super().result(a,b)
#         print(a*b)
# m = Multi()
# m.result(2,7)


# # ! Operator Overloading  -> if any operator performs additional actions other than what it is meant for then it is called operator overloading






# # TODO: Abstract Class
# * class derieved from ABC class which belongs to abc module is called abstract class
# * ABC class is known as Meta class which means a class that defines the behaviour of another class
# * objects of abstract class can not be created
# * abstract class can have both abstract and concrete method
# * if we dont' implement the abstract method of a class in subclass then that subclass will also become abstract

from abc import ABC, abstractmethod
# class Parent(ABC):
#     def __init__(self):
#         print('Parent constructor called')
#     @abstractmethod
#     def disp(self):       # * abstract method
#         pass
#     def show(self):
#         print('Concrete Method')    # * concrete method / method with body
        
# class Child(Parent):
#     def disp(self):
#         print('Child class')
#         print('defining abstract method')

# ch = Child()
# ch.disp()
# ch.show()
# print()


# # TODO: Interface 
# * There is no explicit concept of interface in python as in Java, in python an interface is the abstract class that does not have any concrete method
# * we can not create object of interface
# * if a class is implementing interface then it has to define all the methods given in the interface
# * if all the abstract method of the interface are not implemented by the subclass then it also become abstract
# * we use interface when all the features need to be implemented differently for different objects
# class DefenceForce(ABC):
#     @abstractmethod
#     def Gun(self):
#         pass
#     @abstractmethod
#     def Area(self):
#         pass
#
# class Army(DefenceForce):
#     def Gun(self):
#         print('AK 41')
#     def Area(self):
#         print("Land")
# class AirForce(DefenceForce):
#     def Gun(self):
#         print('AK 42')
#     def Area(self):
#         print("Air")
# class Navy(DefenceForce):
#     def Gun(self):
#         print('AK 43')
#     def Area(self):
#         print("Water")
#
# a = Army()
# af = AirForce()
# n = Navy()
#
# a.Gun(),af.Gun(),n.Gun()
# a.Area(),af.Area(),n.Area()


# * if there is an abstract class having two abstract methods then we need to implement both the methods in subclass so that we can create objects of subclass
# * we can also implement one method in child class and another method in grandchild class, in this case we can create onject of grandchild class but we can not 
# * create object for child class as only one method is implemented in it so child class also become abstract
# class Parent(ABC):
#     @abstractmethod
#     def disp1(self):
#         pass
#     @abstractmethod
#     def disp2(self):
#         pass
#
# class Child(Parent):
#     def disp1(self):
#         print('disp1')
#
# class GrandChild(Child):
#     def disp2(self):
#         print('disp2')
#
# gc =  GrandChild()     # * we can not create object for parent class and child class but we can create objects for grandchild class 


# # TODO: Access Modifiers
# class Employee:
#     def __init__(self):
#         self.name = 'Aviral'    # * Public
#         self.__age = 21         # * private -> only accessed in same class but we can use name mangling to access private members from outside the class
#         self._year = 4          # * protected -> can only be accessed in inherited class, we can also use it outside the class by using '_' before its name
#    
# e = Employee()
# print(e.name)
# print(e._Employee__age)     # * Name Mangling
# print(e._year)


# class A:
#     def xyz1(self):
#         print('Hi public')
#     def _xyz2(self):
#         print('Hi protected')
#     def __xyz3(self):
#         print('Hi private')
#     def abc3(self):
#         print('Hello private')
#         obj = A()
#         obj.__xyz3()
#
# class B(A):
#     def abc1(self):
#         print('Hello public')
#         obj = A()
#         obj.xyz1()
#     def abc2(self):
#         print('Hello Protected')
#         obj = A()
#         obj.xyz2()
#
# o = A()
# ob = B()
# ob.abc1()   # * accessing public member
# o._xyz()    # * accessing protected member
# ob.abc3()   # * accessing private member
