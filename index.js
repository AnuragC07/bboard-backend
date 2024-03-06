const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 8000;
const cors = require("cors");
const notesRoute = require("./routes/notesRoute");

app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);


app.use(express.json());
app.use('/', notesRoute);

app.use(cors());



app.get("/", (req, res) => {
    res.send("Hello from home page");
})





mongoose.connect("mongodb+srv://anuragforwork0018:u2juTYUAM3Dq1E4K@bboard.6ddzhmv.mongodb.net/bboard?retryWrites=true&w=majority&appName=bboard")
    .then(() => {
        console.log("Connected to Database");
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);

        });
    })
    .catch(() => {
        console.log("Connection failed");
    })