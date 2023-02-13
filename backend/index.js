const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");
const Registr = require("./models/UserRegister");
// middlewares
app.use(express.json());
app.use(cors());

//register
app.post("/register", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let regis = await Registr.findOne(req.body);

        if (regis) {
            resp.send("user already enrolled")
        }
        else {
            let regis = new Registr(req.body);
            let result = await regis.save();
            result = result.toObject();
            delete result.password
            resp.send(result);
        }
    }
    else {
        let regis = new Registr(req.body);
        let result = await regis.save();
        result = result.toObject();
        delete result.password
        resp.send(result);
    }
})

//login
app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let regis = await Registr.findOne(req.body).select("-password");
        if (regis) {
            resp.send(regis)
        }
        else {
            resp.send({ result: "No User Found" })
        }
    }
    else {
        resp.send({ result: "No User Found" })
    }
})

app.listen(2000);