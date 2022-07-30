const express = require("express");
const app = express();
const poll = require("./database/conn");
const router = require("./routes/routeIndex");

app.use(express.json());

app.use(router);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
