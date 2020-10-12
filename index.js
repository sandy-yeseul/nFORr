const express = require('express');
const app = express();
const port = 3000



app.listen(port, () => console.log(`Portfolio application on port ${port}`));

/**
 * 1. import express
 * 2. listen to the port
 * 3. connect to mongodb
 * 4. a simple route for index
 * 5. 
 */