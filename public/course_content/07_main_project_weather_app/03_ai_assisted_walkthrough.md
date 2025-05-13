## Lesson 7.3: AI-Assisted Walkthrough - Building the Weather App

Now, let's rebuild the same weather application, but this time we'll actively leverage our AI coding assistant (Tabnine or similar) using the "Vibe Coding" approach. We'll focus on writing comments to guide the AI and using autocompletion/snippet generation to speed up the process, while still critically reviewing the output.

**1. Setup**

*   Create a new Python file named `weather_app_ai.py`.
*   Ensure `requests` is installed.
*   Have your OpenWeatherMap API key ready.

**2. Imports and Configuration (AI Assistance)**

Start typing the imports. The AI should quickly suggest `requests`, `json`, and `sys`.

```python
import requests
import json
import sys

# Write a comment to guide the AI
# Configuration section: API Key and Base URL for OpenWeatherMap
# WARNING: Do not hardcode API keys in production code.

# Start typing API_KEY = ...
# The AI might suggest the variable name and even a placeholder value.
# Replace the placeholder with your actual key.
API_KEY = "YOUR_API_KEY" # Replace with your key!

# Start typing BASE_URL = ...
# The AI might suggest the OpenWeatherMap base URL based on context or training data.
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

# Write a comment for the check
# Check if the API key placeholder is still present, exit if so
# Start typing if API_KEY == ...
# The AI should suggest the comparison and the print/sys.exit block.
if API_KEY == "YOUR_API_KEY":
    print("Error: Please replace \"YOUR_API_KEY\" with your actual OpenWeatherMap API key.")
    sys.exit(1)
```
*Vibe Coding Observation:* The AI likely suggested variable names and potentially the base URL and the API key check structure, saving some typing and boilerplate.

**3. Get User Input (AI Assistance)**

Write a comment describing the function's purpose.

```python
# Function to get city name input from the user
def get_city_input():
    # Start typing city = input(...)
    # The AI should suggest the prompt text and potentially the .strip() method.
    city = input("Enter the city name to get the weather for: ")
    return city.strip()
```
*Vibe Coding Observation:* Simple function, AI likely provided the prompt text and the `.strip()` call quickly.

**4. Fetch Weather Data (AI Assistance)**

This is where AI can potentially save more time, especially with the error handling.

```python
# Function to fetch weather data from OpenWeatherMap API
# Takes city name as input
# Constructs parameters including API key and units
# Makes GET request using requests library
# Includes error handling for HTTP errors (401, 404, other), connection errors, timeouts, and JSON decoding
def fetch_weather_data(city_name):
    # Start typing params = { ... }
    # AI might suggest the keys 'q', 'appid', 'units' based on the comment and BASE_URL context.
    params = {
        "q": city_name,
        "appid": API_KEY,
        "units": "metric"
    }
    print(f"\nFetching weather for {city_name}...")
    # Write a comment for the try block
    # Try making the request and handle potential exceptions
    try:
        # Start typing response = requests.get(...)
        # AI should suggest BASE_URL and params.
        response = requests.get(BASE_URL, params=params)
        # Start typing response.raise_...
        # AI should suggest raise_for_status().
        response.raise_for_status()
        # Start typing return response.json()...
        # AI should suggest this line.
        return response.json()
    # Start typing except requests.exceptions.HTTPError...
    # AI might suggest the basic structure. You might need to guide it
    # for specific status code checks (401, 404) by typing parts of the if/elif.
    except requests.exceptions.HTTPError as http_err:
        if response.status_code == 401:
            print(f"HTTP Error: {http_err} - Invalid API Key?")
        elif response.status_code == 404:
            print(f"HTTP Error: {http_err} - City not found?")
        else:
            print(f"HTTP Error: {http_err}")
        return None
    # Start typing except requests.exceptions.ConnectionError...
    # AI should suggest the rest of the common exception handlers.
    except requests.exceptions.ConnectionError as conn_err:
        print(f"Connection Error: {conn_err} - Check your internet connection.")
        return None
    except requests.exceptions.Timeout as timeout_err:
        print(f"Timeout Error: {timeout_err} - The request timed out.")
        return None
    except requests.exceptions.RequestException as req_err:
        print(f"An unexpected error occurred during the request: {req_err}")
        return None
    except json.JSONDecodeError:
        print("Error: Could not decode the response from the server.")
        return None
```
*Vibe Coding Observation:* The AI likely generated significant portions of the `try...except` block, especially the common `requests` exceptions. You might have needed to refine the specific HTTP error checks (401/404) or the exact print messages, but the overall structure could be generated quickly. **Crucially, review the generated exception types and handling logic.**

**5. Display Weather Data (AI Assistance)**

Write a comment describing the parsing and display logic.

```python
# Function to parse and display weather data
# Takes the weather data dictionary as input
# Extracts city, country, temp, feels_like, humidity, wind_speed, description
# Handles potential missing keys using .get() with defaults
# Prints the formatted weather information
def display_weather(weather_data):
    # Start typing if not weather_data:
    # AI should suggest the return.
    if not weather_data:
        return

    # Write a comment for the try block
    # Try extracting data, handle potential KeyErrors or IndexErrors
    try:
        # Start typing city = weather_data.get("name"...
        # AI should suggest the .get() pattern for most fields.
        # Pay attention when extracting nested values (e.g., country, temp).
        city = weather_data.get("name", "N/A")
        country = weather_data.get("sys", {}).get("country", "N/A")
        temp = weather_data.get("main", {}).get("temp", "N/A")
        feels_like = weather_data.get("main", {}).get("feels_like", "N/A")
        humidity = weather_data.get("main", {}).get("humidity", "N/A")
        wind_speed = weather_data.get("wind", {}).get("speed", "N/A")

        # For the description, guide the AI more explicitly if needed
        # Start typing description = "N/A"
        # if weather_data.get("weather"):
        #     description = weather_data["weather"][0].get(...)
        description = "N/A"
        if weather_data.get("weather"): # Check if the list exists and is not empty
            description = weather_data["weather"][0].get("description", "N/A").capitalize()

        # Start typing the print statements
        # AI should quickly suggest the f-string formatting based on the variables defined above.
        print("\n--- Current Weather --- ")
        print(f"Location:   {city}, {country}")
        print(f"Condition:  {description}")
        print(f"Temperature:{temp}°C")
        print(f"Feels like: {feels_like}°C")
        print(f"Humidity:   {humidity}%")
        print(f"Wind Speed: {wind_speed} m/s")
        print("-----------------------")

    # Start typing except KeyError...
    # AI should suggest the common exceptions for data parsing.
    except KeyError as e:
        print(f"Error: Missing expected data field '{e}' in API response.")
    except IndexError:
        print("Error: Could not retrieve weather description from API response.")
    except Exception as e:
        print(f"An unexpected error occurred while displaying data: {e}")
```
*Vibe Coding Observation:* The AI excels at the repetitive `.get()` calls and the formatted print statements. You might need to guide it more carefully for nested structures like the weather description. **Review the `.get()` calls and default values.**

**6. Main Execution Block (AI Assistance)**

This part is standard and AI should generate it easily.

```python
# Main function to orchestrate the app
def main():
    # Write comment: # Get city input
    # Start typing city = get_city...
    city = get_city_input()
    # Write comment: # Check if city is empty
    # Start typing if not city...
    if not city:
        print("No city entered. Exiting.")
        return
    # Write comment: # Fetch data
    # Start typing weather_data = fetch...
    weather_data = fetch_weather_data(city)
    # Write comment: # Display data
    # Start typing display_weather...
    display_weather(weather_data)

# Standard Python entry point check
# Start typing if __name__ == ...
# AI will almost certainly suggest the rest.
if __name__ == "__main__":
    main()
```
*Vibe Coding Observation:* The main block structure and the `if __name__ == "__main__":` guard are standard Python patterns that AI assistants generate very reliably.

**Comparison: Manual vs. AI-Assisted**

*   **Speed:** The AI-assisted approach was likely significantly faster, especially for the boilerplate error handling and data extraction/display code.
*   **Process:** The manual approach forces deeper thinking about each step and potential issue. The AI approach relies more on guiding via comments and reviewing suggestions.
*   **Potential Pitfalls (AI):** Over-reliance can lead to accepting subtly incorrect or inefficient code. Generated error handling might be generic and miss specific cases you care about. The AI might hallucinate API response structures if not guided well.
*   **Learning:** The manual approach arguably reinforces learning more deeply initially. The AI approach can accelerate development once fundamentals are understood and can expose you to new patterns (if you review carefully).

**Conclusion:**

"Vibe Coding" isn't about letting the AI write everything. It's about collaborating: you provide the direction, structure, and critical review, while the AI handles repetitive typing and suggests common patterns. This project demonstrates how AI can accelerate development, but it also highlights the continued importance of understanding the underlying code and verifying the AI's output.
