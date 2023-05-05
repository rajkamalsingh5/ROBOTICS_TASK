const express = require('express');
const app = express();
const path = require("path");
const register = require("./models/Register");

require('./db/connect')


const stp = path.join(__dirname, "../public");
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(stp));

app.get("/", (req, res) => {
    res.send("done");
});
app.get("/", (req, res) => {
    res.render("index");
})
app.post("/register", async (req, res) => {
    try {
        const regi = new register({
            pass: req.body.passwor,
            name: req.body.name,
            email: req.body.emai,
            number: eq.body.mob,
            scholar: req.body.scholar
        })
        const registred = await regi.save();
        res.render("index");
    }
    catch (error) {
        res.send(error);
    }
})
app.listen(port, () => {
    console.log("chal ria hai bro.")
})