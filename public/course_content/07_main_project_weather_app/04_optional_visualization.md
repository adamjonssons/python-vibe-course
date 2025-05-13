## Lesson 7.4: (Optional) Adding Data Visualization

While our current app displays text-based weather data, visualizing data can often make it easier to understand trends and comparisons. Let's explore how you might add simple visualization, keeping in mind this often requires more data (like forecasts) than our current single API call provides.

**Goal:** Introduce the concept of plotting weather data using a library like Matplotlib.

**Libraries Needed:**

*   **Matplotlib:** The most popular plotting library for Python.
*   **NumPy:** Often used alongside Matplotlib for numerical operations (though not strictly necessary for a very simple plot).
*   **(Potentially) Pandas:** If handling more complex datasets or time series.

**Installation:**
```bash
pip install matplotlib numpy pandas
```

**Challenge: Getting Data for Visualization**

Our current API call (`/data/2.5/weather`) only gives the *current* weather. Meaningful visualizations often require:

1.  **Time Series Data:** How temperature changes over the next few hours or days (requires a forecast API endpoint).
2.  **Multiple Data Points:** Comparing temperature, humidity, and wind speed side-by-side.

Let's assume, for demonstration, we modify our app or use a different API endpoint (like OpenWeatherMap's 5-day/3-hour forecast - requires parsing a more complex JSON with a list of future time points) to get a list of temperatures for the next few hours.

**Example (Conceptual - Assuming Forecast Data):**

Imagine we fetched forecast data and extracted lists like this:

```python
# --- Hypothetical Forecast Data (You'd need to fetch this) ---
hours = ["12:00", "15:00", "18:00", "21:00", "00:00"]
temperatures = [15, 17, 16, 14, 13] # Corresponding temps in °C
```

**Using Matplotlib for a Simple Plot:**

```python
import matplotlib.pyplot as plt
import sys

# --- Hypothetical Forecast Data ---
hours = ["12:00", "15:00", "18:00", "21:00", "00:00"]
temperatures = [15, 17, 16, 14, 13]
city_name = "Sample City" # Assume we have the city name

def plot_temperature_forecast(hours, temps, city):
    """Creates a simple line plot of temperature forecast."""
    if not hours or not temps or len(hours) != len(temps):
        print("Invalid data for plotting.")
        return

    try:
        plt.figure(figsize=(10, 5)) # Create a figure (width, height in inches)
        plt.plot(hours, temps, marker="o", linestyle="-", color="b") # Plot data

        # Add labels and title
        plt.xlabel("Time")
        plt.ylabel("Temperature (°C)")
        plt.title(f"Temperature Forecast for {city}")
        plt.grid(True) # Add a grid
        plt.ylim(min(temps) - 2, max(temps) + 2) # Adjust y-axis limits slightly

        # Display the plot
        plt.show()

    except Exception as e:
        print(f"Error generating plot: {e}")
        # Note: GUI backends might cause issues in some environments.
        # You might need to configure Matplotlib backends or save to file instead.
        # To save instead of showing:
        # try:
        #     plt.savefig(f"{city}_temp_forecast.png")
        #     print(f"Plot saved to {city}_temp_forecast.png")
        # except Exception as save_err:
        #     print(f"Error saving plot: {save_err}")
        # finally:
        #     plt.close() # Close the plot figure

# --- Example Usage ---
if __name__ == "__main__":
    # Check if running in a GUI environment, otherwise saving might be better
    # This check is basic and might not cover all cases
    is_gui_available = True
    try:
        # A simple way to check if a display is available (might not work everywhere)
        import os
        os.environ["DISPLAY"]
    except KeyError:
        # A more robust check might involve trying to import GUI toolkits
        try:
            import tkinter
            tkinter.Tk().withdraw() # Try creating a hidden root window
        except Exception:
            is_gui_available = False
            print("No GUI detected, plotting might not display interactively.")
            print("Consider modifying the code to save the plot to a file instead.")

    if is_gui_available or "pytest" not in sys.modules: # Avoid plotting during automated tests
         plot_temperature_forecast(hours, temperatures, city_name)
    else:
        print("Skipping interactive plot in non-GUI environment.")

```

**Integrating with the App:**

1.  **Modify `fetch_weather_data`:** Change the `BASE_URL` and parameters to use a forecast endpoint from OpenWeatherMap (requires reading their documentation).
2.  **Modify `display_weather` (or create a new function):** Parse the forecast JSON to extract lists of times and corresponding temperatures.
3.  **Call the Plotting Function:** After parsing, call `plot_temperature_forecast` with the extracted data.

**AI Assistance for Visualization:**

AI tools can be very helpful here:
*   **Generating Plotting Code:** Describe the plot you want (e.g., "Plot temperature vs time using matplotlib, label axes, add title") and the AI can generate the basic `plt.plot(...)`, `plt.xlabel(...)`, etc., code.
*   **Suggesting Plot Types:** Ask "What are good ways to visualize temperature and humidity data?" and it might suggest line plots, bar charts, or scatter plots.
*   **Customizing Plots:** Ask how to change colors, add markers, set axis limits, or save the plot to a file.
*   **Debugging Plotting Issues:** Paste error messages related to Matplotlib.

**Key Takeaways:**

*   Visualization often requires time-series or comparative data, which might necessitate different API calls.
*   Libraries like Matplotlib provide powerful tools for creating various plots.
*   AI can significantly speed up the generation of standard plotting code, but you still need to understand the data and the desired visualization.
*   Displaying plots might require a GUI environment; saving plots to files (`plt.savefig`) is often a more robust alternative, especially for command-line apps or automated scripts.

This optional lesson provides a glimpse into visualizing data. You can explore Matplotlib and other libraries like Seaborn further to create much more sophisticated visualizations.
