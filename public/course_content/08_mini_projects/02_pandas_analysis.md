## Mini-Project 8.2: Weather Data Analysis with Pandas

**Goal:** Explore basic data analysis techniques using Pandas on weather data. Since getting historical data or detailed forecast data often requires paid API plans or specific endpoints, we'll simulate having a dataset or focus on analyzing the structure of the data we *can* get.

**Concepts Applied:**
*   Pandas DataFrames and Series
*   Reading/Simulating data
*   Data cleaning (handling missing values)
*   Data selection and filtering
*   Basic statistical analysis (`describe()`, `mean()`, `max()`, `min()`)
*   (Optional) Grouping and aggregation
*   (Optional) Basic plotting with Pandas/Matplotlib integration

**Scenario 1: Analyzing Data from Multiple Cities**

Let's imagine we ran our weather app (from Module 7) for several cities and stored the results.

**Steps:**

1.  **Project Setup:**
    *   Create a new Python file (e.g., `weather_analysis.py`).
    *   Install Pandas: `pip install pandas matplotlib` (Matplotlib is optional but useful).

2.  **Simulate or Collect Data:**
    *   **Option A (Simulation):** Create a list of dictionaries manually, simulating the output you might get from calling the weather API for different cities.
    *   **Option B (Collection):** Modify the `weather_app_manual.py` script to loop through a list of cities, fetch data for each, and append the relevant parts of the JSON response (as dictionaries) to a list. You could save this list to a JSON file using the `json` module and then load it in your analysis script.

    ```python
    # weather_analysis.py
    import pandas as pd
    import matplotlib.pyplot as plt # Optional

    # Option A: Simulate Data
simulated_data = [
    {"city": "London", "country": "GB", "temp": 12.5, "humidity": 75, "wind_speed": 4.1, "condition": "Clouds"},
    {"city": "Paris", "country": "FR", "temp": 15.0, "humidity": 65, "wind_speed": 3.6, "condition": "Clear"},
    {"city": "Tokyo", "country": "JP", "temp": 18.2, "humidity": 70, "wind_speed": 5.1, "condition": "Rain"},
    {"city": "New York", "country": "US", "temp": 10.8, "humidity": 60, "wind_speed": 6.2, "condition": "Clouds"},
    {"city": "Berlin", "country": "DE", "temp": 14.1, "humidity": 72, "wind_speed": 2.9, "condition": "Clear"},
    # Add more cities if desired
]

    # Option B: Load from JSON file (if you created one)
    # import json
    # try:
    #     with open("collected_weather_data.json", "r") as f:
    #         simulated_data = json.load(f)
    # except FileNotFoundError:
    #     print("collected_weather_data.json not found. Using simulated data.")
    #     # Keep the simulated_data list from Option A as fallback
    # except json.JSONDecodeError:
    #     print("Error decoding JSON file. Using simulated data.")

    # Create a Pandas DataFrame
    df = pd.DataFrame(simulated_data)

    print("--- Weather Data DataFrame ---")
    print(df)
    ```

3.  **Basic Exploration and Analysis:**
    ```python
    # Display basic info
    print("\n--- DataFrame Info ---")
    df.info()

    # Display summary statistics
    print("\n--- Summary Statistics ---")
    print(df.describe()) # Shows stats for numerical columns (temp, humidity, wind_speed)

    # Find the city with the highest temperature
    hottest_city = df.loc[df["temp"].idxmax()]
    print("\n--- Hottest City ---")
    print(hottest_city)

    # Find the city with the lowest humidity
    least_humid_city = df.loc[df["humidity"].idxmin()]
    print("\n--- Least Humid City ---")
    print(least_humid_city)

    # Calculate the average temperature across all cities
    avg_temp = df["temp"].mean()
    print(f"\nAverage Temperature: {avg_temp:.2f}°C")

    # Count occurrences of each weather condition
    condition_counts = df["condition"].value_counts()
    print("\n--- Weather Condition Counts ---")
    print(condition_counts)
    ```

4.  **(Optional) Basic Plotting:**
    ```python
    # Plot Temperature vs. City
    try:
        plt.figure(figsize=(10, 5))
        plt.bar(df["city"], df["temp"], color=["blue", "green", "red", "purple", "orange"])
        plt.xlabel("City")
        plt.ylabel("Temperature (°C)")
        plt.title("Current Temperature by City")
        plt.xticks(rotation=45, ha="right") # Rotate city names if they overlap
        plt.tight_layout() # Adjust layout
        # plt.show() # Or savefig
        plt.savefig("city_temps_bar_chart.png")
        print("\nTemperature bar chart saved to city_temps_bar_chart.png")
        plt.close()
    except Exception as e:
        print(f"\nCould not generate temperature plot: {e}")

    # Plot Humidity vs. Wind Speed (Scatter Plot)
    try:
        plt.figure(figsize=(8, 6))
        plt.scatter(df["humidity"], df["wind_speed"])
        plt.xlabel("Humidity (%)")
        plt.ylabel("Wind Speed (m/s)")
        plt.title("Humidity vs. Wind Speed")
        plt.grid(True)
        # plt.show() # Or savefig
        plt.savefig("humidity_vs_wind_scatter.png")
        print("Humidity vs Wind Speed scatter plot saved to humidity_vs_wind_scatter.png")
        plt.close()
    except Exception as e:
        print(f"\nCould not generate scatter plot: {e}")
    ```

**Scenario 2: Analyzing Forecast Data Structure (If using a forecast endpoint)**

If you adapted the main project to use a forecast endpoint (like the 5-day/3-hour one), the JSON response is more complex, often containing a list of forecast points.

*   **Load Data:** Fetch the forecast JSON for a single city.
*   **Explore Structure:** Print the JSON or parts of it. Identify the list containing the forecast steps (often under a key like `list`).
*   **Create DataFrame:** Extract the relevant data from each forecast step (e.g., timestamp `dt`, temperature `main.temp`, description `weather[0].description`) and create a Pandas DataFrame.
    ```python
    # Conceptual example assuming forecast_data is the loaded JSON
    # forecast_list = forecast_data.get("list", [])
    # extracted_data = []
    # for entry in forecast_list:
    #     extracted_data.append({
    #         "timestamp": pd.to_datetime(entry.get("dt"), unit="s"), # Convert Unix timestamp
    #         "temp": entry.get("main", {}).get("temp"),
    #         "description": entry.get("weather", [{}])[0].get("description")
    #     })
    # forecast_df = pd.DataFrame(extracted_data)
    # forecast_df = forecast_df.set_index("timestamp") # Set timestamp as index
    # print(forecast_df)
    ```
*   **Analyze:** Perform time-based analysis (e.g., find max/min temperature in the forecast period, plot temperature over time).

**Potential Enhancements:**

*   Analyze data from more cities.
*   Work with actual forecast data and perform time series analysis.
*   Create more sophisticated plots (e.g., comparing multiple cities on the same plot).
*   Clean messy data (handle missing values, convert data types).
*   Merge weather data with other datasets.

This project introduces the power of Pandas for organizing, exploring, and analyzing structured data, a fundamental skill in data science and many other programming domains.
