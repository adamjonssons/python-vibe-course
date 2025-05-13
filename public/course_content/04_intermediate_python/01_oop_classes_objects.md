# Module 4: Intermediate Python

Now that you have a solid grasp of Python basics, let's move on to intermediate concepts that allow you to structure your code more effectively and handle more complex data.

## Lesson 4.1: Object-Oriented Programming (OOP) - Classes and Objects

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects," which can contain data in the form of fields (often known as attributes or properties) and code in the form of procedures (often known as methods).

Python is an object-oriented language, and understanding OOP principles will significantly enhance your ability to write modular, reusable, and maintainable code.

**Classes: Blueprints for Objects**

A *class* is like a blueprint or template for creating objects. It defines the common attributes (data) and methods (behavior) that all objects of that class will have.

**Objects: Instances of Classes**

An *object* (or instance) is a specific realization created from a class. If `Car` is a class, then a specific red Toyota Camry is an object (an instance) of the `Car` class.

**Defining a Class:**

Use the `class` keyword, followed by the class name (conventionally in `CamelCase`), and a colon `:`. The class body is indented.

```python
class Dog:
    # Class attribute (shared by all instances of the class)
    species = "Canis familiaris"

    # Initializer method (constructor)
    # Called automatically when a new object is created
    # 'self' refers to the instance being created
    def __init__(self, name, breed, age):
        # Instance attributes (specific to each object)
        self.name = name
        self.breed = breed
        self.age = age
        print(f"Dog object '{self.name}' created!")

    # Instance method (behavior)
    def bark(self):
        print(f"{self.name} says Woof!")

    # Another instance method
    def describe(self):
        print(f"{self.name} is a {self.age}-year-old {self.breed}.")

    # Method accessing the class attribute
    def get_species(self):
        return self.species # Can also access via Dog.species
```

**Creating Objects (Instantiation):**

You create an object by calling the class name as if it were a function, passing any arguments required by the `__init__` method (excluding `self`).

```python
# Create Dog objects (instances of the Dog class)
my_dog = Dog("Buddy", "Golden Retriever", 3)
dads_dog = Dog("Lucy", "Poodle", 7)

# Accessing instance attributes using dot notation
print(f"My dog's name: {my_dog.name}")   # Output: My dog's name: Buddy
print(f"Dad's dog's age: {dads_dog.age}") # Output: Dad's dog's age: 7

# Accessing the class attribute
print(f"Species: {my_dog.species}")      # Output: Species: Canis familiaris
print(f"Species: {dads_dog.species}")     # Output: Species: Canis familiaris
print(f"Species: {Dog.species}")        # Can also access directly via the class

# Calling instance methods
my_dog.bark()      # Output: Buddy says Woof!
dads_dog.describe() # Output: Lucy is a 7-year-old Poodle.

species_info = my_dog.get_species()
print(f"Buddy's species from method: {species_info}")
```

**Key Concepts:**

*   **`self`:** The first parameter of instance methods (including `__init__`) is always `self`. It represents the instance of the class itself. Python passes this automatically when you call a method on an object (`my_dog.bark()` is implicitly `Dog.bark(my_dog)`).
*   **`__init__` Method:** The special initializer method (constructor). It's used to set up the initial state of an object when it's created.
*   **Attributes:** Variables associated with a class or an object.
    *   **Class Attributes:** Shared by all instances (e.g., `species`). Defined directly within the class.
    *   **Instance Attributes:** Specific to each instance (e.g., `name`, `breed`, `age`). Usually defined within `__init__` using `self.attribute_name = value`.
*   **Methods:** Functions defined inside a class that define the behavior of the objects.

**Why Use OOP?**

*   **Modularity:** Encapsulates data and behavior together, making code easier to manage.
*   **Reusability:** Classes can be reused in different parts of a program or in other programs.
*   **Maintainability:** Changes within a class are less likely to affect other parts of the program if the interface (methods) remains consistent.
*   **Organization:** Provides a clear structure for complex systems by modeling real-world entities or concepts.

**Exercise (Manual Coding):**

1.  Define a class named `Book`.
2.  In the `__init__` method, accept `title`, `author`, and `pages` as parameters and assign them to instance attributes.
3.  Define a method called `description` that prints a string like "'[title]' by [author] is [pages] pages long."
4.  Create two `Book` objects with different details.
5.  Print the `author` of the first book.
6.  Call the `description` method on the second book.

This lesson introduces the core ideas of classes and objects. In the next lesson, we'll explore inheritance and encapsulation, two other fundamental pillars of OOP.
