const app = require("./index");
const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`port is running on port ${PORT}...`));

module.exports = app;