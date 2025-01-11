const express = require('express');
const app = express();

// Status codes and their descriptions
const statusCodes = {
    200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
    201: "Created: The request has been fulfilled and has resulted in one or more new resources being created.",
    204: "No Content: The server successfully processed the request but is not returning any content.",
    400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
    401: "Unauthorized: The request requires user authentication or the authentication has failed.",
    403: "Forbidden: The server understood the request but refuses to authorize it.",
    404: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
    405: "Method Not Allowed: The HTTP method used is not supported by the target resource.",
    429: "Too Many Requests: The user has sent too many requests in a given amount of time (rate limiting).",
    500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
    502: "Bad Gateway: The server received an invalid response from the upstream server it accessed to fulfill the request.",
    503: "Service Unavailable: The server is currently unable to handle the request due to temporary overload or maintenance.",
    504: "Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server."
};

// GET endpoint for status code information
app.get('/status-info', (req, res) => {
    const code = parseInt(req.query.code);

    if (!code || !statusCodes[code]) {
        return res.status(400).json({
            error: "Invalid or missing 'code' query parameter. Please provide a valid status code (e.g., ?code=200)."
        });
    }

    res.json({
        status: code,
        message: statusCodes[code]
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});