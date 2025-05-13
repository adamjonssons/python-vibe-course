## Module 2: Environment Setup

## Lesson 2.1: Installing Python

Before you can start writing Python code, you need to install the Python interpreter on your computer. This program reads your Python code and executes it. Don't worry, the process is straightforward! We'll cover the steps for the most common operating systems: Windows, macOS, and Linux.

**Goal:** Install the latest stable version of Python 3.

**1. Checking if Python is Already Installed (Optional but Recommended)**

Open your system's command prompt or terminal:
*   **Windows:** Search for `cmd` or `PowerShell`.
*   **macOS:** Open `Terminal` (Applications > Utilities > Terminal).
*   **Linux:** Open your distribution's terminal (often Ctrl+Alt+T).

Type the following command and press Enter:
```bash
python --version
```
Or, sometimes (especially on macOS/Linux), you might need:
```bash
python3 --version
```
If you see a version number starting with `Python 3.` (e.g., `Python 3.10.12`), you likely have Python 3 installed. If it shows `Python 2.x` or gives an error, you should proceed with the installation.

**2. Downloading Python**

Go to the official Python website: [https://www.python.org/downloads/](https://www.python.org/downloads/)

The website should automatically detect your operating system and suggest the latest stable release for download. Click the download button for Python 3.x.

**3. Installation Steps**

*   **Windows:**
    1.  Run the downloaded `.exe` installer.
    2.  **Crucial Step:** On the first screen of the installer, make sure to check the box that says **"Add Python 3.x to PATH"** or **"Add python.exe to Path"**. This makes it easier to run Python from the command prompt. If you miss this, you might have trouble running Python later.
    3.  Choose "Install Now" for the recommended installation settings (this is usually fine for beginners).
    4.  Wait for the installation to complete.
    5.  You might see an option to "Disable path length limit." It's generally safe and recommended to click this if it appears.
    6.  Close the installer.

*   **macOS:**
    1.  Run the downloaded `.pkg` installer.
    2.  Follow the prompts in the installation wizard (Continue, Agree to license, Install).
    3.  You may need to enter your administrator password.
    4.  Python will be installed, typically in `/usr/local/bin/python3`.
    5.  The installer usually handles adding Python to your system's PATH.

*   **Linux:**
    *   **Debian/Ubuntu-based (like Ubuntu, Mint):** Python 3 is often pre-installed. If not, or to get the latest version, open a terminal and run:
        ```bash
sudo apt update
sudo apt install python3 python3-pip python3-venv -y
        ```
    *   **Fedora/CentOS/RHEL-based:** Open a terminal and run:
        ```bash
sudo dnf update
sudo dnf install python3 python3-pip -y
        ```
    *   Other distributions usually have similar package manager commands.

**4. Verifying the Installation**

After installation, close and reopen your terminal or command prompt.
Type:
```bash
python3 --version
```
(On Windows, `python --version` might also work now if you added it to PATH).

You should see the version number you just installed.

Next, check if `pip` (Python's package installer) is working:
```bash
pip3 --version
```
(Or `pip --version` on Windows).

You should see pip's version number.

**Congratulations!** You have successfully installed Python on your system. In the next lesson, we'll set up a code editor to make writing and managing your Python code much easier.
