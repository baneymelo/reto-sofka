const { PORT } = require("./config");
const app = require("./app");
require('./db');

app.listen(PORT || 4000, () => {
    console.log(`http://localhost:${PORT}`);
})