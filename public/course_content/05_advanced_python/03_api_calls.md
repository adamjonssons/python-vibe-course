## Lesson 5.3: Working with APIs

APIs (Application Programming Interfaces) are sets of rules and protocols that allow different software applications to communicate with each other. Web APIs, in particular, are incredibly common and allow you to fetch data or trigger actions on remote servers using standard web protocols, primarily HTTP.

Many websites and services expose APIs to allow developers to access their data or functionality. Examples include weather APIs, social media APIs, map APIs, financial data APIs, and many more.

**Understanding Web APIs (RESTful APIs)**

Many modern web APIs follow REST (Representational State Transfer) principles. Key concepts include:

*   **Resources:** Data or services accessible via the API (e.g., a user, a weather forecast, a list of products).
*   **URLs (Endpoints):** Specific addresses used to access resources (e.g., `https://api.example.com/users/123`, `https://api.weather.com/forecast?location=London`).
*   **HTTP Methods:** Standard verbs indicating the desired action:
    *   `GET`: Retrieve data (e.g., get user details, get weather forecast).
    *   `POST`: Create new data (e.g., post a new tweet, create a new user).
    *   `PUT`: Update existing data completely.
    *   `PATCH`: Partially update existing data.
    *   `DELETE`: Remove data.
*   **Request Headers:** Additional information sent with the request (e.g., authentication tokens `Authorization: Bearer <token>`, content type `Content-Type: application/json`).
*   **Request Body:** Data sent with `POST`, `PUT`, `PATCH` requests, often in JSON format.
*   **Response Status Codes:** Standard HTTP codes indicating the outcome (e.g., `200 OK`, `201 Created`, `400 Bad Request`, `401 Unauthorized`, `404 Not Found`, `500 Internal Server Error`).
*   **Response Body:** Data returned by the API, commonly in JSON (JavaScript Object Notation) format, which maps easily to Python dictionaries and lists.

**Making API Calls in Python (`requests` library)**

The `requests` library is the de facto standard for making HTTP requests in Python. It simplifies the process significantly compared to using Python's built-in `urllib`.

**Installation:**

If you don't have it installed (it's not part of the standard library):
```bash
pip install requests
```

**Example: Making a GET Request (Fetching Data)**

Let's use a simple public API like the JSONPlaceholder API, which provides fake data for testing.

```python
import requests
import json # For pretty printing the JSON response

# Define the API endpoint URL
url = "https://jsonplaceholder.typicode.com/posts/1" # Get post with ID 1

print(f"Making GET request to: {url}")

try:
    # Make the GET request
    response = requests.get(url)

    # Check if the request was successful (status code 2xx)
    response.raise_for_status() # Raises an HTTPError for bad responses (4xx or 5xx)

    print(f"Request successful! Status Code: {response.status_code}")

    # Parse the JSON response body into a Python dictionary
    data = response.json()

    # Print the data (pretty printed)
    print("\nResponse Data:")
    print(json.dumps(data, indent=4))

    # Access specific fields
    print(f"\nPost Title: {data.get("title")}")

except requests.exceptions.RequestException as e:
    print(f"An error occurred during the request: {e}")
except json.JSONDecodeError:
    print("Error decoding JSON response.")

# Example: GET request with query parameters
search_url = "https://jsonplaceholder.typicode.com/comments"
params = {"postId": 1} # Get comments for post with ID 1

print(f"\nMaking GET request to: {search_url} with params: {params}")
try:
    response = requests.get(search_url, params=params)
    response.raise_for_status()
    comments = response.json()
    print(f"Found {len(comments)} comments for post 1.")
    # print(json.dumps(comments[0], indent=4)) # Print the first comment
except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")
```

**Example: Making a POST Request (Sending Data)**

```python
import requests
import json

# Define the API endpoint URL for creating posts
post_url = "https://jsonplaceholder.typicode.com/posts"

# Data to send in the request body (as a Python dictionary)
new_post_data = {
    "title": "My New Post Title",
    "body": "This is the content of my new post.",
    "userId": 5
}

# Optional: Set headers (e.g., specifying content type)
headers = {
    "Content-Type": "application/json; charset=utf-8"
}

print(f"\nMaking POST request to: {post_url}")

try:
    # Make the POST request, sending data as JSON
    response = requests.post(post_url, headers=headers, json=new_post_data)
    # For form data, use data=payload instead of json=payload

    response.raise_for_status() # Check for errors

    # Usually, a successful POST returns status code 201 Created
    print(f"Request successful! Status Code: {response.status_code}")

    # The response body often contains the created resource (with its new ID)
    created_post = response.json()
    print("\nResponse Data (Created Post):")
    print(json.dumps(created_post, indent=4))
    print(f"\nNew post created with ID: {created_post.get("id")}")

except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")
```

**Authentication:**

Many APIs require authentication to identify the user making the request.
Common methods include:
*   **API Keys:** Passed as a query parameter (e.g., `?apiKey=YOUR_KEY`) or in a custom header (e.g., `X-API-Key: YOUR_KEY`).
*   **Bearer Tokens (OAuth 2.0):** Passed in the `Authorization` header (e.g., `Authorization: Bearer YOUR_ACCESS_TOKEN`).
*   **Basic Auth:** Username and password encoded and passed in the `Authorization` header.

The `requests` library provides easy ways to handle these (e.g., using the `auth` parameter or setting the `headers` dictionary).

```python
# Example structure for using an API key in headers
# api_key = "YOUR_SECRET_API_KEY"
# headers = {"Authorization": f"Bearer {api_key}"}
# response = requests.get(api_url, headers=headers)
```

**Rate Limiting:**

Be aware that most APIs have rate limits – restrictions on how many requests you can make in a given time period. Check the API documentation and handle potential `429 Too Many Requests` errors gracefully (e.g., by waiting and retrying).

**Exercise (Manual Coding):**

1.  Find a simple, free, public API online that doesn't require complex authentication (e.g., [Public APIs list](https://github.com/public-apis/public-apis)). Some ideas:
    *   [Cat Facts API](https://catfact.ninja/fact)
    *   [Bored API](https://www.boredapi.com/api/activity)
    *   [Agify API](https://api.agify.io?name=michael) (predicts age based on name)
2.  Write a Python script using the `requests` library to make a `GET` request to your chosen API endpoint.
3.  Check the response status code. If successful (200 OK), parse the JSON response.
4.  Print one or two interesting pieces of data from the response.
5.  Include error handling for potential `requests.exceptions.RequestException`.

Working with APIs is a fundamental skill for modern developers, allowing your applications to interact with a vast world of external data and services. This will be crucial for our main course project!
