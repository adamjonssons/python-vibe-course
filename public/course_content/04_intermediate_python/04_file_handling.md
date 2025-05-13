## Lesson 4.4: File Handling

Many applications need to read data from files or write results to files. Python provides built-in functions and methods for interacting with files on your computer's filesystem.

**Opening Files (`open()` function)**

The core function for working with files is `open()`. It takes the file path and a *mode* as primary arguments and returns a file object.

**Common Modes:**

*   `'r'`: **Read** (default mode). Opens the file for reading. Raises an error if the file does not exist.
*   `'w'`: **Write**. Opens the file for writing. **Creates the file if it does not exist. Truncates (empties) the file if it exists.** Be careful with this mode!
*   `'a'`: **Append**. Opens the file for appending. Creates the file if it does not exist. New data is written to the end of the file.
*   `'r+'`: Read and Write. Opens for both reading and writing. Raises an error if the file does not exist.
*   `'w+'`: Write and Read. Opens for both writing and reading. Creates/Truncates the file.
*   `'a+'`: Append and Read. Opens for both appending and reading. Creates the file if it doesn't exist.

You can also add `'b'` to the mode (e.g., `'rb'`, `'wb'`) to open the file in *binary* mode (for non-text files like images or executables).

**Closing Files (`close()` method)**

After you are finished working with a file, it's crucial to close it using the `close()` method on the file object. This releases system resources and ensures that all data is written (flushed) to the disk.

```python
# Basic file writing (use with caution - overwrites!)
try:
    file = open("my_first_file.txt", "w")
    file.write("Hello, file world!\n")
    file.write("This is the second line.\n")
    print("Successfully wrote to my_first_file.txt")
finally:
    # Ensure the file is closed even if errors occur
    if 'file' in locals() and not file.closed:
        file.close()
        print("File closed.")

# Basic file reading
try:
    file = open("my_first_file.txt", "r")
    content = file.read() # Read the entire file content into a string
    print("\nContent of my_first_file.txt:")
    print(content)
finally:
    if 'file' in locals() and not file.closed:
        file.close()
        print("File closed.")
```

**Using `with open(...)` (Recommended Practice)**

Manually closing files can be error-prone (e.g., if an exception occurs before `close()` is called). The `with` statement provides a much safer and cleaner way to handle files. It automatically closes the file when the `with` block is exited, even if errors occur.

```python
# Writing using 'with' (safer)
lines_to_write = ["First line using with.\n", "Second line.\n", "Third line.\n"]
try:
    with open("my_with_file.txt", "w") as file:
        file.write("This file was created using 'with'.\n")
        file.writelines(lines_to_write) # Write multiple lines from a list
    print("Successfully wrote to my_with_file.txt (file automatically closed)")
except IOError as e:
    print(f"An error occurred during writing: {e}")

# Reading using 'with' (safer)
try:
    with open("my_with_file.txt", "r") as file:
        print("\nReading my_with_file.txt line by line:")
        # Method 1: Read all lines into a list
        # all_lines = file.readlines()
        # print(all_lines)

        # Method 2: Iterate directly over the file object (memory efficient)
        for line in file:
            print(f"Read line: {line.strip()}") # .strip() removes leading/trailing whitespace (like the newline character)
except FileNotFoundError:
    print("Error: my_with_file.txt not found.")
except IOError as e:
    print(f"An error occurred during reading: {e}")

# Appending using 'with'
try:
    with open("my_with_file.txt", "a") as file:
        file.write("Appending a new line.\n")
    print("\nSuccessfully appended to my_with_file.txt")
except IOError as e:
    print(f"An error occurred during appending: {e}")

# Verify append
try:
    with open("my_with_file.txt", "r") as file:
        print("\nContent after appending:")
        print(file.read())
except IOError as e:
    print(f"An error occurred reading after append: {e}")
```

**Common File Object Methods:**

*   `read(size=-1)`: Reads `size` bytes from the file. If `size` is omitted or negative, reads the entire file content.
*   `readline()`: Reads a single line from the file, including the newline character (`\n`) at the end.
*   `readlines()`: Reads all lines from the file and returns them as a list of strings.
*   `write(string)`: Writes the given string to the file.
*   `writelines(list_of_strings)`: Writes each string from the list to the file. Does *not* add newline characters automatically.
*   `seek(offset, whence=0)`: Changes the file position. `whence=0` (default) means offset from the beginning, `1` means from the current position, `2` means from the end.
*   `tell()`: Returns the current file position (byte offset).
*   `close()`: Closes the file (automatically handled by `with`).

**Working with File Paths:**

It's often better to use the `os` or `pathlib` modules to handle file paths in a way that works across different operating systems (Windows uses `\`, while macOS/Linux use `/`).

```python
import os

# Get the current working directory
current_dir = os.getcwd()
print(f"\nCurrent working directory: {current_dir}")

# Construct a platform-independent path
file_name = "data.csv"
file_path = os.path.join(current_dir, "data_folder", file_name)
print(f"Constructed path: {file_path}")

# Check if a file or directory exists
print(f"Does my_with_file.txt exist? {os.path.exists('my_with_file.txt')}")
print(f"Is it a file? {os.path.isfile('my_with_file.txt')}")
print(f"Is it a directory? {os.path.isdir('my_with_file.txt')}")
```

**Exercise (Manual Coding):**

1.  Create a new file named `notes.txt` using the `with open(...)` statement in write mode (`'w'`).
2.  Write three lines of text to the file (e.g., "Remember to buy milk.", "Python assignment due Friday.", "Call Mom."). Make sure each is on a new line.
3.  Open `notes.txt` again using `with open(...)` in read mode (`'r'`).
4.  Read the entire content of the file and print it to the console.
5.  Open `notes.txt` one more time using `with open(...)` in append mode (`'a'`).
6.  Add a new line: "Schedule dentist appointment."
7.  Finally, open `notes.txt` in read mode again and print its full content to verify the appended line.

File handling is a crucial skill for reading configuration, processing data, saving results, and much more. Always prefer using the `with` statement for safety and clarity.
