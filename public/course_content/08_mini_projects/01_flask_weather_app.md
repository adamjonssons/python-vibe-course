# Module 8: Optional Mini-Projects

These optional projects allow you to explore specific areas like web development and data analysis further, building upon the skills and the main weather application project you've already completed.

## Mini-Project 8.1: Weather App Web Interface with Flask

**Goal:** Transform the command-line weather application into a simple web application using Flask. Users should be able to enter a city name in a web form and see the weather results displayed on a web page.

**Concepts Applied:**
*   Flask framework basics (routing, request handling)
*   HTML forms
*   Rendering basic HTML responses (or using templates - optional advanced step)
*   Reusing the API calling logic from the main project

**Steps:**

1.  **Project Setup:**
    *   Create a new directory for this project (e.g., `weather_flask_app`).
    *   Inside it, create a Python file (e.g., `web_app.py`).
    *   Install Flask: `pip install Flask requests`

2.  **Basic Flask App Structure (`web_app.py`):**
    ```python
    from flask import Flask, request, render_template_string # Or use render_template for separate HTML files
    import requests
    import sys

    app = Flask(__name__)

    # --- Reuse or adapt API Key and Base URL --- 
    # WARNING: Still avoid hardcoding keys in real apps!
    API_KEY = "YOUR_API_KEY" # Replace!
    BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

    if API_KEY == "YOUR_API_KEY":
        print("Error: API Key not set in web_app.py")
        # In a real web app, handle this more gracefully (e.g., config error page)

    # --- Adapt the API fetching function --- 
    # (Similar to fetch_weather_data from the main project, but might return error messages differently)
    def fetch_weather_data_web(city_name):
        params = {"q": city_name, "appid": API_KEY, "units": "metric"}
        try:
            response = requests.get(BASE_URL, params=params)
            response.raise_for_status()
            return response.json(), None # Return data, no error message
        except requests.exceptions.HTTPError as http_err:
            if response.status_code == 404:
                return None, f"City '{city_name}' not found."
            elif response.status_code == 401:
                 return None, "Invalid API Key."
            else:
                 return None, f"HTTP Error: {http_err}"
        except requests.exceptions.RequestException as req_err:
            return None, f"Network or Request Error: {req_err}"
        except Exception as e:
             return None, f"An unexpected error occurred: {e}"

    # --- Route for the main page (display form and results) ---
    @app.route("/", methods=["GET", "POST"])
    def index():
        weather_info = None
        error_message = None
        city = ""

        if request.method == "POST":
            city = request.form.get("city")
            if city:
                data, error = fetch_weather_data_web(city)
                if error:
                    error_message = error
                elif data:
                    # Basic parsing for display (adapt display_weather logic)
                    try:
                        weather_info = {
                            "city": data.get("name", "N/A"),
                            "country": data.get("sys", {}).get("country", "N/A"),
                            "temp": data.get("main", {}).get("temp", "N/A"),
                            "description": data.get("weather", [{}])[0].get("description", "N/A").capitalize(),
                            "humidity": data.get("main", {}).get("humidity", "N/A"),
                            "wind_speed": data.get("wind", {}).get("speed", "N/A")
                        }
                    except (KeyError, IndexError):
                         error_message = "Error parsing weather data."
            else:
                error_message = "Please enter a city name."

        # --- Simple HTML directly in Python (for basic demo) ---
        # For real apps, use render_template with separate HTML files (Jinja2)
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head><title>Weather App</title></head>
        <body>
            <h1>Weather App</h1>
            <form method="POST">
                <label for="city">Enter City:</label>
                <input type="text" id="city" name="city" value="{city}">
                <button type="submit">Get Weather</button>
            </form>

            {f'<p style="color: red;">{error_message}</p>' if error_message else ''}

            {f'''
            <h2>Weather for {weather_info['city']}, {weather_info['country']}</h2>
            <p>Condition: {weather_info['description']}</p>
            <p>Temperature: {weather_info['temp']}°C</p>
            <p>Humidity: {weather_info['humidity']}%</p>
            <p>Wind Speed: {weather_info['wind_speed']} m/s</p>
            ''' if weather_info else ''}
        </body>
        </html>
        """
        return render_template_string(html_content)

    # --- Run the app ---
    if __name__ == "__main__":
        app.run(host="0.0.0.0", port=5001, debug=True) # Use a different port if 5000 is busy

    ```

3.  **Replace API Key:** Put your OpenWeatherMap API key in `web_app.py`.
4.  **Run:** Open a terminal in the `weather_flask_app` directory and run `python web_app.py`.
5.  **Access:** Open your browser and go to `http://127.0.0.1:5001/` (or the port you chose).
6.  **Test:** Enter a city name and submit the form.

**Potential Enhancements (Further Learning):**

*   **HTML Templates:** Use Flask's `render_template` function and Jinja2 templating to separate HTML structure from Python code (create a `templates` folder with `.html` files).
*   **CSS Styling:** Add CSS to make the web page look better.
*   **More Data:** Display more information from the API response (e.g., icons, sunrise/sunset times).
*   **Forecast Data:** Add functionality to fetch and display forecast data.
*   **Deployment:** Learn how to deploy a Flask application to a hosting service.

This project gives you a taste of web development with Python and Flask, showing how to create interactive web interfaces for your scripts.
