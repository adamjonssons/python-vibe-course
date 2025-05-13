## Lesson 5.4: Introduction to Frameworks and Libraries (Flask, Pandas)

While Python's standard library is extensive, the real power often comes from the vast ecosystem of third-party libraries and frameworks built by the community. These provide pre-written code to solve common problems, allowing you to build complex applications more quickly.

**Libraries vs. Frameworks:**

*   **Library:** A collection of functions, classes, and modules that you can *call* from your code to perform specific tasks (e.g., `requests` for HTTP, `math` for math functions). You are in control, deciding when and how to use the library's components.
*   **Framework:** Provides a larger structure or skeleton for your application. It often dictates the overall architecture and flow. You fill in specific parts of the framework with your custom code. The framework calls *your* code (Inversion of Control). (e.g., Flask/Django for web apps).

Let's briefly introduce two highly popular examples:

**1. Flask: A Microframework for Web Development**

Flask is a lightweight ("micro") web framework for Python. It provides the basics needed to build web applications (handling requests, routing URLs, managing responses) without imposing too much structure or requiring specific tools. This makes it flexible and relatively easy to learn for beginners.

**Installation:**
```bash
pip install Flask
```

**Simple Flask App Example:**

```python
# Save this code as e.g., 'app.py'
from flask import Flask, request, jsonify

# Create a Flask application instance
app = Flask(__name__) # '__name__' helps Flask find resources

# Define a route for the homepage ('/') using a decorator
@app.route('/')
def home():
    # This function handles requests to the root URL
    return "<h1>Welcome to the Flask App!</h1><p>Try visiting /hello</p>"

# Define another route with a variable part
@app.route('/hello/<name>')
def hello_name(name):
    # The value from the URL is passed as an argument
    return f"<h1>Hello, {name.capitalize()}!</h1>"

# Define a route that returns JSON data
@app.route('/api/data')
def get_data():
    data = {"course": "Python Vibe Coding", "module": "Advanced Python"}
    return jsonify(data) # Convert Python dict to JSON response

# Define a route that accepts POST requests (example)
@app.route('/api/submit', methods=['POST'])
def submit_data():
    if request.is_json:
        received_data = request.get_json()
        print(f"Received data via POST: {received_data}")
        # Process the data...
        return jsonify({"message": "Data received successfully!", "your_data": received_data}), 201 # 201 Created status
    else:
        return jsonify({"error": "Request must be JSON"}), 400 # 400 Bad Request status

# Run the app if this script is executed directly
if __name__ == '__main__':
    # host='0.0.0.0' makes it accessible on your network
    # debug=True enables auto-reloading and detailed error pages (DON'T use in production!)
    app.run(host='0.0.0.0', port=5000, debug=True)
```

**To Run:**
1.  Save the code above as `app.py`.
2.  Open your terminal in the same directory.
3.  Run the script: `python app.py`
4.  Open your web browser and go to `http://127.0.0.1:5000/` or `http://localhost:5000/`.
5.  Try visiting `http://localhost:5000/hello/yourname` and `http://localhost:5000/api/data`.

Flask allows you to quickly build web APIs and simple websites. For larger projects, you might explore Django, a more feature-rich framework.

**2. Pandas: Data Analysis and Manipulation Library**

Pandas is the cornerstone library for data analysis in Python. It provides high-performance, easy-to-use data structures (primarily `DataFrame` and `Series`) and tools for reading, writing, cleaning, transforming, merging, and analyzing data.

**Installation:**
```bash
pip install pandas
```

**Simple Pandas Example:**

```python
import pandas as pd # Conventionally imported as 'pd'

# Create a DataFrame (a 2D labeled data structure like a spreadsheet)
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [25, 30, 22, 35],
    'City': ['New York', 'Los Angeles', 'Chicago', 'New York']
}
df = pd.DataFrame(data)

print("--- Original DataFrame ---")
print(df)

# Display basic info about the DataFrame
print("\n--- DataFrame Info ---")
df.info()

# Display descriptive statistics for numerical columns
print("\n--- Descriptive Statistics ---")
print(df.describe())

# Accessing columns (returns a Series - a 1D labeled array)
print("\n--- Accessing 'Name' Column ---")
print(df['Name'])

# Accessing rows by index
print("\n--- Accessing First Row (iloc[0]) ---")
print(df.iloc[0])

# Filtering data
print("\n--- Filtering for Age > 25 ---")
print(df[df['Age'] > 25])

# Filtering by city
print("\n--- Filtering for City == 'New York' ---")
print(df[df['City'] == 'New York'])

# Adding a new column
print("\n--- Adding 'Salary' Column ---")
df['Salary'] = [50000, 60000, 45000, 70000]
print(df)

# Grouping data and calculating aggregates
print("\n--- Average Age per City ---")
city_avg_age = df.groupby('City')['Age'].mean()
print(city_avg_age)

# Reading data from a CSV file (example)
# Assume 'my_data.csv' exists with columns 'col1', 'col2'
# try:
#     csv_df = pd.read_csv('my_data.csv')
#     print("\n--- Data from CSV ---")
#     print(csv_df.head()) # Print first 5 rows
# except FileNotFoundError:
#     print("\nmy_data.csv not found.")

# Writing data to a CSV file
# df.to_csv('output_data.csv', index=False) # index=False prevents writing row numbers
# print("\nDataFrame written to output_data.csv")
```

Pandas is essential for anyone working with data in Python, forming the foundation for many data science and machine learning workflows.

**Exploring Further:**

*   **Flask:** Explore templates (using Jinja2) for dynamic HTML, handling forms, database integration (with Flask-SQLAlchemy), and building REST APIs.
*   **Pandas:** Dive deeper into data cleaning, merging/joining DataFrames, time series analysis, and visualization integration (with Matplotlib or Seaborn).
*   **Other Libraries/Frameworks:** Django (web), NumPy (numerical computing), Scikit-learn (machine learning), Matplotlib/Seaborn (visualization), TensorFlow/PyTorch (deep learning).

**Exercise (Conceptual / Manual Coding):**

1.  **Flask:** Run the simple Flask app example. Try adding a new route (e.g., `/about`) that returns a simple string about the course.
2.  **Pandas:** Run the Pandas example. Try adding another person to the `data` dictionary and recreate the DataFrame. Calculate the average salary for people living in 'New York'.

Libraries and frameworks dramatically extend Python's capabilities, enabling you to tackle complex projects efficiently by leveraging the work of the broader Python community.
