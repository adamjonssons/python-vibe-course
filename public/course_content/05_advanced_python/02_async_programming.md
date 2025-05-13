## Lesson 5.2: Asynchronous Programming with `async`/`await`

Traditional Python code runs synchronously: one operation completes before the next one starts. This is fine for many tasks, but it becomes inefficient when dealing with I/O-bound operations – tasks that spend most of their time waiting for external resources like network requests, database queries, or file system operations.

**Asynchronous programming** allows your program to perform other work while waiting for these slow I/O operations to complete, leading to significant performance improvements in I/O-bound applications.

Python implements asynchronous programming using the `asyncio` library and the `async` and `await` keywords.

**Key Concepts:**

*   **Coroutine:** An asynchronous function defined with `async def`. When called, it doesn't execute immediately but returns a *coroutine object*. This object represents the computation that can be run later.
*   **`await`:** Used inside an `async def` function to pause its execution and wait for another coroutine (or an awaitable object) to complete. While waiting, the event loop can run other tasks.
*   **Event Loop:** The core of `asyncio`. It manages and distributes the execution of different asynchronous tasks. It keeps track of which tasks are ready to run and which are waiting for I/O.
*   **Task:** A coroutine scheduled to run on the event loop.

**Basic Example:**

Let's simulate slow I/O operations using `asyncio.sleep()`.

```python
import asyncio
import time

# Define a coroutine function
async def fetch_data(delay, task_name):
    print(f"Task '{task_name}' starting, will wait for {delay} seconds...")
    await asyncio.sleep(delay) # Simulate I/O wait (non-blocking)
    print(f"Task '{task_name}' finished waiting.")
    return { "data": f"Some data from {task_name}", "delay": delay }

# Define the main asynchronous entry point
async def main():
    start_time = time.time()
    print("Starting main coroutine...")

    # Create tasks for the coroutines to run concurrently
    task1 = asyncio.create_task(fetch_data(2, "Task 1"))
    task2 = asyncio.create_task(fetch_data(1, "Task 2"))
    task3 = asyncio.create_task(fetch_data(3, "Task 3"))

    print("Tasks created, waiting for them to complete...")

    # Wait for tasks to complete and get results
    # await waits for the coroutine/task to finish
    result1 = await task1
    result2 = await task2
    result3 = await task3

    # Alternatively, use asyncio.gather to run and wait for multiple tasks
    # results = await asyncio.gather(
    #     fetch_data(2, "Task A"),
    #     fetch_data(1, "Task B"),
    #     fetch_data(3, "Task C")
    # )
    # print(f"\nGather results: {results}")

    print(f"\nResult 1: {result1}")
    print(f"Result 2: {result2}")
    print(f"Result 3: {result3}")

    end_time = time.time()
    print(f"\nMain coroutine finished in {end_time - start_time:.2f} seconds.")

# Run the main coroutine using the asyncio event loop
if __name__ == "__main__":
    # In scripts, use asyncio.run()
    asyncio.run(main())
    # In environments like Jupyter notebooks, you might need to handle the event loop differently
    # or just use 'await main()' if the loop is already running.

# --- Expected Output (order of start/finish messages might vary slightly) ---
# Starting main coroutine...
# Tasks created, waiting for them to complete...
# Task 'Task 1' starting, will wait for 2 seconds...
# Task 'Task 2' starting, will wait for 1 seconds...
# Task 'Task 3' starting, will wait for 3 seconds...
# Task 'Task 2' finished waiting.
# Task 'Task 1' finished waiting.
# Task 'Task 3' finished waiting.
#
# Result 1: {'data': 'Some data from Task 1', 'delay': 2}
# Result 2: {'data': 'Some data from Task 2', 'delay': 1}
# Result 3: {'data': 'Some data from Task 3', 'delay': 3}
#
# Main coroutine finished in 3.00 seconds. # Note: Total time is close to the longest task (3s), not the sum (6s)
```

**Why is it faster?**

In the synchronous version, the program would wait 2 seconds for Task 1, then 1 second for Task 2, then 3 seconds for Task 3, totaling ~6 seconds.

In the asynchronous version with `asyncio`, when `await asyncio.sleep(delay)` is called, the coroutine pauses, but the event loop is free to run other ready tasks (like starting Task 2 and Task 3). When Task 2 finishes its sleep after 1 second, the event loop resumes it. Task 1 resumes after 2 seconds, and Task 3 after 3 seconds. The total time is determined by the longest-running task (~3 seconds), as the waiting periods overlap.

**When to Use `asyncio`:**

*   **Network Programming:** Handling many simultaneous client connections (servers), making multiple API calls concurrently.
*   **Web Scraping:** Fetching multiple web pages at the same time.
*   **Database Interactions:** Performing non-blocking database queries.
*   **Real-time Applications:** Chat applications, streaming services.

**Important Considerations:**

*   **Not for CPU-bound tasks:** `asyncio` doesn't magically make CPU-intensive calculations faster. For CPU-bound work, you typically use multiprocessing or threading.
*   **Async Ecosystem:** You need to use libraries specifically designed for `asyncio` (e.g., `aiohttp` for HTTP requests, `asyncpg` for PostgreSQL) to get the non-blocking benefits. Using standard blocking libraries (like `requests` or `psycopg2`) within an `async def` function will still block the event loop.
*   **Complexity:** Asynchronous code can sometimes be harder to reason about and debug than synchronous code.

**Exercise (Conceptual / Manual Coding):**

1.  Modify the `fetch_data` coroutine: Instead of just returning a dictionary, make it print a message *before* the `await asyncio.sleep()` and another message *after* it completes.
2.  Run the `main` function again. Observe the order in which the "starting" and "finished waiting" messages appear for the different tasks. How does this demonstrate concurrent execution and overlapping waits?
3.  (Optional - Requires `aiohttp` library: `pip install aiohttp`) Try replacing `asyncio.sleep()` with a real network request using `aiohttp`. Define a coroutine that fetches the content of a website (e.g., `https://example.com`) and run multiple instances concurrently using `asyncio.gather`. Compare the time taken with fetching them sequentially.

Asynchronous programming with `asyncio` is a powerful technique for building high-performance I/O-bound applications in Python. It allows your programs to do more work in less time by effectively managing waiting periods.
