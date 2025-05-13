## Lesson 7.2: Manual Walkthrough - Building the Weather App

Let's build the weather application step-by-step, writing the code manually. This helps solidify your understanding of each component.

**1. Setup**

*   Create a new Python file named `weather_app_manual.py`.
*   Ensure you have the `requests` library installed (`pip install requests`).
*   Have your OpenWeatherMap API key ready from the previous lesson.

**2. Imports and API Key**

Start by importing the necessary library and defining your API key. **For this educational example, we'll hardcode the key. In real applications, never do this!** Use environment variables or configuration files instead (we'll discuss this in Best Practices).

```python
import requests
import json
import sys # To exit gracefully

# --- Configuration ---
# WARNING: Never hardcode API keys in real applications!
# Replace "YOUR_API_KEY" with your actual OpenWeatherMap API key.
API_KEY = "YOUR_API_KEY"
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

# Check if API key is set
if API_KEY == "YOUR_API_KEY":
    print("Error: Please replace \"YOUR_API_KEY\" with your actual OpenWeatherMap API key.")
    sys.exit(1) # Exit the script
```

**3. Get User Input**

We need to ask the user which city they want the weather for.

```python
def get_city_input():
    """Gets the city name from the user."""
    city = input("Enter the city name to get the weather for: ")
    return city.strip() # .strip() removes leading/trailing whitespace
```

**4. Construct API URL and Make Request**

Now, let's create a function to build the URL and fetch the data.

```python
def fetch_weather_data(city_name):
    """Fetches weather data from OpenWeatherMap API."""
    params = {
        "q": city_name,
        "appid": API_KEY,
        "units": "metric" # Request temperature in Celsius
    }
    print(f"\nFetching weather for {city_name}...")
    try:
        response = requests.get(BASE_URL, params=params)
        # Raise an exception for bad status codes (4xx or 5xx)
        response.raise_for_status()
        # If successful, parse the JSON response
        return response.json()
    except requests.exceptions.HTTPError as http_err:
        if response.status_code == 401:
            print(f"HTTP Error: {http_err} - Invalid API Key?")
        elif response.status_code == 404:
            print(f"HTTP Error: {http_err} - City not found?")
        else:
            print(f"HTTP Error: {http_err}")
        return None
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
*Self-Correction:* Added more specific error handling for common HTTP errors (401, 404) and network issues.

**5. Parse and Display Data**

If the API call is successful, we get JSON data back. We need to extract the relevant pieces and display them nicely. Refer to the OpenWeatherMap API documentation to understand the structure of the JSON response.

Common fields include:
*   `name`: City name
*   `main`: Dictionary containing `temp`, `feels_like`, `humidity`, `pressure`
*   `weather`: A *list* containing dictionaries, usually the first item (`weather[0]`) has `description` and `icon`.
*   `wind`: Dictionary containing `speed`.
*   `sys`: Dictionary containing `country`.

```python
def display_weather(weather_data):
    """Parses and displays the weather information."""
    if not weather_data:
        return # Exit if data fetching failed

    try:
        city = weather_data.get("name", "N/A")
        country = weather_data.get("sys", {}).get("country", "N/A")
        temp = weather_data.get("main", {}).get("temp", "N/A")
        feels_like = weather_data.get("main", {}).get("feels_like", "N/A")
        humidity = weather_data.get("main", {}).get("humidity", "N/A")
        wind_speed = weather_data.get("wind", {}).get("speed", "N/A")
        # Weather description is inside a list
        description = "N/A"
        if weather_data.get("weather"): # Check if the list exists and is not empty
            description = weather_data["weather"][0].get("description", "N/A").capitalize()

        print("\n--- Current Weather --- ")
        print(f"Location:   {city}, {country}")
        print(f"Condition:  {description}")
        print(f"Temperature:{temp}°C")
        print(f"Feels like: {feels_like}°C")
        print(f"Humidity:   {humidity}%")
        print(f"Wind Speed: {wind_speed} m/s")
        print("-----------------------")

    except KeyError as e:
        print(f"Error: Missing expected data field '{e}' in API response.")
    except IndexError:
        print("Error: Could not retrieve weather description from API response.")
    except Exception as e:
        print(f"An unexpected error occurred while displaying data: {e}")
```
*Self-Correction:* Used `.get()` with default values and added checks for nested structures (`main`, `sys`, `wind`, `weather`) to prevent `KeyError` if the API response structure is unexpected. Capitalized the description.

**6. Main Execution Block**

Finally, let's tie it all together in a main execution block.

```python
def main():
    """Main function to run the weather app."""
    city = get_city_input()
    if not city:
        print("No city entered. Exiting.")
        return

    weather_data = fetch_weather_data(city)
    display_weather(weather_data)

if __name__ == "__main__":
    main()
```

**Running the Manual Version:**

1.  Save the complete code (all snippets combined) into `weather_app_manual.py`.
2.  **Replace `"YOUR_API_KEY"` with your actual key.**
3.  Run from the terminal: `python weather_app_manual.py`
4.  Enter a city name when prompted.

This manual walkthrough builds the application piece by piece, forcing you to think about imports, function design, API interaction, data parsing, and error handling. In the next lesson, we'll see how AI assistance can speed up parts of this process.
