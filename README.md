# Node.js Server Memory Leak

This repository demonstrates a common issue in Node.js applications: memory leaks.  The provided code creates a simple HTTP server that, without proper cleanup, will eventually crash due to excessive memory consumption after numerous requests.  The solution demonstrates how to mitigate this issue.

## Bug Description
The server fails to release resources after handling requests, leading to a gradual memory leak.  Over time, this results in the server becoming unresponsive and eventually crashing.

## How to Reproduce
1. Clone this repository.
2. Run `node server.js`.
3. Send a large number of requests to `http://localhost:8080` (you can use tools like `ab` or `wrk`).
4. Observe the memory usage of the Node.js process. You'll likely notice it increasing steadily until the server crashes.

## Solution
The solution addresses the memory leak by ensuring proper cleanup of resources after each request.  This involves explicitly closing connections and removing event listeners.