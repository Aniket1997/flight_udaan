const express = require('express');
const { PORT } = require('./config/index'); // Destructure the PORT value
const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server successfully running on http://localhost:${PORT}`);
});
