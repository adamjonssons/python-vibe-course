# Module 7: Main Project - Building a Weather Application

Now it's time to apply everything you've learned! In this module, we'll build a practical application: a command-line tool that fetches current weather data for a specified city using a real-world weather API.

This project will integrate concepts like:
*   Making API calls (`requests` library)
*   Handling JSON data
*   Functions
*   Basic input/output
*   Error handling
*   (Optional) Data visualization

We will approach this project in two ways to highlight the differences and synergies between manual coding and AI-assisted "Vibe Coding":
1.  **Manual Walkthrough:** We'll build the application step-by-step, writing the code ourselves, focusing on understanding each part.
2.  **AI-Assisted Walkthrough:** We'll tackle the same problem but leverage our AI coding assistant (Tabnine/others) more heavily for autocompletion and snippet generation, comparing the process and outcome.

## Lesson 7.1: Project Overview and Choosing a Weather API

**Project Goal:**

Create a Python script that:
1.  Takes a city name as input from the user.
2.  Makes a request to a weather API to get the current weather for that city.
3.  Parses the JSON response from the API.
4.  Displays key weather information (e.g., temperature, description, humidity, wind speed) in a user-friendly format.
5.  Handles potential errors gracefully (e.g., city not found, network issues, invalid API key).

**What is a Weather API?**

Weather APIs are services that provide programmatic access to weather data (current conditions, forecasts, historical data) for various locations worldwide. Developers can integrate these APIs into their applications to display weather information, trigger actions based on weather conditions, etc.

**Choosing an API: OpenWeatherMap**

There are many weather APIs available, both free and paid. For this project, we'll use **OpenWeatherMap ([https://openweathermap.org/](https://openweathermap.org/))**. It's a popular choice for developers because:
*   It offers a **generous free tier** suitable for learning and small projects, providing access to current weather data, forecasts, and more.
*   It has **good documentation**.
*   It returns data in **JSON format**, which is easy to work with in Python.

**Getting an OpenWeatherMap API Key (Essential Step):**

Most APIs, including OpenWeatherMap, require an **API Key** to authenticate your requests and track usage. You need to sign up for a free account to get one.

1.  **Go to the OpenWeatherMap website:** [https://openweathermap.org/](https://openweathermap.org/)
2.  **Sign Up:** Click on "Sign in" and then "Create an Account". Fill out the required details. (You'll need to verify your email address).
3.  **Find API Keys:** Once logged in, navigate to your account details or look for an "API keys" tab/section. (The exact location might change, explore the user dashboard).
4.  **Generate/Copy Key:** You should see a default API key generated for you, or an option to generate one. **Copy this key** and save it somewhere safe. You'll need it in your Python script.
    *   **Important:** Keep your API key private! Don't share it publicly or commit it directly into version control systems like Git if you plan to share your code.
    *   **Activation Time:** Note that newly generated API keys might take a few minutes (or sometimes longer, up to a couple of hours) to become active. If your initial requests fail with an authentication error, wait a bit and try again.

**API Endpoint:**

We'll primarily use the **Current Weather Data** endpoint. The basic structure for requesting current weather by city name looks like this (check the official documentation for the most up-to-date details):

`https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_key}&units=metric`

*   `q={city_name}`: The city you want weather for (e.g., `q=London` or `q=London,uk`).
*   `appid={API_key}`: Your unique API key.
*   `units=metric`: (Optional) To get temperature in Celsius, wind speed in meter/sec. Use `units=imperial` for Fahrenheit/mph, or omit for default Kelvin.

In the next lessons, we'll start building the application, first manually, then with AI assistance.
