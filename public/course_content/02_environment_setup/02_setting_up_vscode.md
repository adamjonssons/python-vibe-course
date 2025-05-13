## Lesson 2.2: Setting Up Your Code Editor (VS Code)

While you *can* write Python code in a simple text editor (like Notepad or TextEdit), using a dedicated **code editor** or an **Integrated Development Environment (IDE)** makes the process significantly easier and more efficient. These tools offer features like syntax highlighting, code completion, debugging tools, and integration with version control systems.

For this course, we recommend using **Visual Studio Code (VS Code)**. It's a free, powerful, and highly popular code editor developed by Microsoft that works on Windows, macOS, and Linux. It has excellent support for Python and a vast library of extensions to customize your workflow.

**1. Downloading and Installing VS Code**

1.  Go to the official VS Code website: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2.  The website should automatically detect your operating system and offer the correct download button. Click it to download the installer.
3.  Run the downloaded installer:
    *   **Windows:** Follow the setup wizard. Accept the agreement, choose the installation location (default is usually fine). On the "Select Additional Tasks" screen, it's highly recommended to check:
        *   "Add to PATH (requires shell restart)"
        *   "Register Code as an editor for supported file types"
        *   "Add 'Open with Code' action to Windows Explorer file context menu"
        *   "Add 'Open with Code' action to Windows Explorer directory context menu"
    *   **macOS:** Drag the downloaded `Visual Studio Code.app` file into your `Applications` folder.
    *   **Linux:** The website usually offers `.deb` (for Debian/Ubuntu) or `.rpm` (for Fedora/RHEL) packages. Download the appropriate one and install it using your system's package manager (e.g., `sudo dpkg -i code_*.deb` or `sudo rpm -i code_*.rpm`). Alternatively, many distributions offer VS Code through their software centers or package managers (e.g., `sudo apt install code` or `sudo dnf install code`).

**2. Installing the Python Extension for VS Code**

VS Code's power comes from its extensions. The most crucial one for us is the official Python extension from Microsoft.

1.  Launch VS Code.
2.  Look for the **Extensions** icon in the Activity Bar on the left side (it looks like four squares, with one detached).
3.  In the search bar at the top of the Extensions view, type `Python`.
4.  Find the extension named **Python** by **Microsoft**. It should be the first result and have millions of installs.
5.  Click the **Install** button for that extension.

This extension provides features like:
*   **IntelliSense:** Smart code completion, suggestions, and parameter info.
*   **Linting:** Code analysis to detect potential errors and style issues (using tools like Pylint or Flake8).
*   **Debugging:** Tools to step through your code, set breakpoints, and inspect variables.
*   **Jupyter Notebook support:** Allows working with interactive notebooks within VS Code.
*   **Environment Management:** Helps select and manage different Python interpreters.

**3. Selecting the Python Interpreter**

VS Code needs to know which Python installation to use.

1.  Open VS Code.
2.  Open the Command Palette: Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
3.  Type `Python: Select Interpreter` and select that command.
4.  A list of detected Python interpreters on your system will appear. Choose the Python 3.x version you installed in the previous lesson. If you installed Python into the recommended location, VS Code should find it automatically.

**4. Creating Your First Python File**

1.  Go to File > New File (`Ctrl+N` or `Cmd+N`).
2.  Save the file immediately: File > Save (`Ctrl+S` or `Cmd+S`). Name it `hello.py`. The `.py` extension is crucial – it tells VS Code (and Python) that this is a Python file.
3.  Type the following code into the editor:
    ```python
    print("Hello, Python Vibe!")
    ```
4.  Notice the syntax highlighting that makes the code easier to read.
5.  To run the file, you can either:
    *   Right-click anywhere in the editor and select "Run Python File in Terminal".
    *   Click the green "Play" button that might appear in the top-right corner of the editor window.

You should see the output "Hello, Python Vibe!" printed in the integrated terminal panel at the bottom of VS Code.

**You're Set!**

You now have Python installed and a powerful code editor configured. In the next lesson, we'll install the AI coding assistant that will help us with "Vibe Coding."
