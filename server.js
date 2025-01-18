const express = require('express');
const { PORT } = require('./src/config/index');
const apiRoutes = require('./src/routes')
const app = express();

app.use(express.json());

app.use('/api',apiRoutes);

app.listen(PORT, () => {
    console.log(`Server successfully running on http://localhost:${PORT}`);
});
