## Lesson 4.2: Inheritance and Encapsulation

Let's delve deeper into Object-Oriented Programming by exploring two more crucial concepts: Inheritance and Encapsulation.

**1. Inheritance: Creating Hierarchies (Is-A Relationship)**

Inheritance allows a new class (called the *child class* or *subclass*) to inherit attributes and methods from an existing class (called the *parent class* or *superclass* or *base class*). This promotes code reuse and establishes a hierarchical relationship between classes.

The child class automatically gets all the non-private attributes and methods of the parent class. It can then:

*   Use the inherited members as they are.
*   Add new attributes and methods specific to the child class.
*   *Override* inherited methods to provide a more specific implementation.

**Syntax:**

To specify that a class inherits from another, you put the parent class name in parentheses after the child class name.

```python
# Parent class (superclass)
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
        print(f"Animal '{self.name}' created.")

    def speak(self):
        print(f"{self.name} makes a generic animal sound.")

    def move(self):
        print(f"{self.name} moves.")

# Child class (subclass) inheriting from Animal
class Dog(Animal): # Dog inherits from Animal
    def __init__(self, name, breed):
        # Call the parent class's __init__ method to initialize inherited attributes
        super().__init__(name, species="Canis familiaris")
        self.breed = breed # Add a new attribute specific to Dog
        print(f"Dog '{self.name}' of breed '{self.breed}' created.")

    # Override the speak method from the parent class
    def speak(self):
        print(f"{self.name} says Woof!")

    # Add a new method specific to Dog
    def fetch(self):
        print(f"{self.name} fetches the ball!")

# Another child class inheriting from Animal
class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name, species="Felis catus")
        self.color = color
        print(f"Cat '{self.name}' with color '{self.color}' created.")

    # Override the speak method
    def speak(self):
        print(f"{self.name} says Meow!")

# --- Using the classes ---
my_dog = Dog("Buddy", "Golden Retriever")
my_cat = Cat("Whiskers", "Gray")

# Calling inherited methods
my_dog.move()  # Output: Buddy moves.
my_cat.move()  # Output: Whiskers moves.

# Calling overridden methods
my_dog.speak() # Output: Buddy says Woof!
my_cat.speak() # Output: Whiskers says Meow!

# Calling methods specific to child classes
my_dog.fetch() # Output: Buddy fetches the ball!
# my_cat.fetch() # This would cause an AttributeError, Cat doesn't have fetch

# Accessing attributes
print(f"My dog's species: {my_dog.species}") # Inherited attribute
print(f"My cat's color: {my_cat.color}")   # Child-specific attribute
```

**Key Concepts:**

*   **`super()`:** A built-in function used to call methods from the parent class, commonly used in the child's `__init__` to initialize the parent part of the object.
*   **Method Overriding:** Providing a specific implementation for a method in the child class that is already defined in the parent class.

**2. Encapsulation: Protecting Data (Information Hiding)**

Encapsulation is the bundling of data (attributes) and methods that operate on the data within a single unit (the class). It also often involves restricting direct access to some of an object's components, which is known as *information hiding*.

Python doesn't have strict `private` keywords like some other languages (e.g., Java). However, it uses conventions to indicate the intended visibility of attributes and methods:

*   **Public:** Attributes and methods accessible from anywhere (default). (e.g., `my_object.name`, `my_object.speak()`).
*   **Protected (by convention):** Start with a single underscore (`_`). This signals that they are intended for internal use within the class and its subclasses, but are *not* strictly enforced. You *can* still access them from outside, but it's generally discouraged. (e.g., `_internal_counter`).
*   **Private (by convention + name mangling):** Start with a double underscore (`__`). Python performs *name mangling* on these attributes/methods (e.g., `__secret_data` becomes `_ClassName__secret_data`). This makes it harder (but not impossible) to access them directly from outside the class. They are primarily intended for use only within the class itself. (e.g., `__calculate_tax()`).

```python
class BankAccount:
    def __init__(self, owner, initial_balance=0):
        self.owner = owner # Public attribute
        self.__balance = initial_balance # "Private" attribute
        self._transaction_count = 0 # "Protected" attribute

    # Public method to safely deposit money
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            self._transaction_count += 1
            print(f"Deposited ${amount}. New balance: ${self.__balance}")
        else:
            print("Deposit amount must be positive.")

    # Public method to safely withdraw money
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            self._transaction_count += 1
            print(f"Withdrew ${amount}. New balance: ${self.__balance}")
        elif amount > self.__balance:
            print("Insufficient funds.")
        else:
            print("Withdrawal amount must be positive.")

    # Public method to get the balance (controlled access)
    def get_balance(self):
        print(f"Current balance for {self.owner}: ${self.__balance}")
        return self.__balance

    # Public method to get transaction count
    def get_transaction_count(self):
        return self._transaction_count

# --- Using the class ---
account = BankAccount("Alice", 100)

# Accessing public attribute
print(f"Account owner: {account.owner}")

# Using public methods (the intended way)
account.deposit(50)
account.withdraw(30)
current_bal = account.get_balance()

# Direct access to "private" attribute (discouraged and requires name mangling)
# print(account.__balance) # This will cause an AttributeError
print(f"Accessing mangled balance: {account._BankAccount__balance}") # Possible, but bad practice!

# Accessing "protected" attribute (possible, but discouraged)
print(f"Transaction count: {account._transaction_count}")
print(f"Transaction count via method: {account.get_transaction_count()}")
```

**Benefits of Encapsulation:**

*   **Control:** You control how the object's data is accessed and modified (e.g., preventing negative balances).
*   **Security:** Hides internal implementation details, protecting data integrity.
*   **Flexibility:** You can change the internal implementation without affecting the code that uses the class, as long as the public interface (methods) remains the same.

**Exercise (Manual Coding):**

1.  Create a parent class `Vehicle` with an `__init__` method taking `make` and `model`, and a method `display_info` that prints the make and model.
2.  Create a child class `Car` that inherits from `Vehicle`. Its `__init__` should also take `num_doors`. Call the parent `__init__` using `super()` and store `num_doors`. Override `display_info` to print the make, model, and number of doors.
3.  Create a `Car` object and call its `display_info` method.
4.  Modify the `BankAccount` class from the example: Add a "protected" method `_log_transaction(self, message)` that prints a log message. Call this method from within `deposit` and `withdraw`.

Inheritance and encapsulation are powerful tools for building robust and well-structured object-oriented programs in Python.
