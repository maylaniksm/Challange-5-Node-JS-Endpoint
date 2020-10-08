const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

// end-point "/convert/desimal" dengan method POST
app.post("/convert/desimal", (req,res) => {
    let desimal = Number(req.body.nilai) 

    let biner = desimal.toString(2)
    let oktal = desimal.toString(8)
    let hexadesimal = desimal.toString(16)

    let response = {
        bilangan: "Desimal",
        value: desimal,
        biner: biner,
        oktal: oktal,
        hexadesimal: hexadesimal,
    }
    res.json(response)
    })
    
// end-point "/convert/biner" dengan method POST
app.post("/convert/biner", (req,res) => {
    let biner = Number(req.body.nilai) 

    let desimal = biner.toString(10)
    let oktal = biner.toString(8)
    let hexadesimal = biner.toString(16)

    let response = {
        bilangan: "Biner",
        value: biner,
        desimal: desimal,
        oktal: oktal,
        hexadesimal: hexadesimal,
    }
    res.json(response)
    })

    // end-point "/convert/oktal" dengan method POST
app.post("/convert/oktal", (req,res) => {
    let oktal = Number(req.body.nilai) 

    let desimal = oktal.toString(10)
    let biner = oktal.toString(2)
    let hexadesimal = oktal.toString(16)

    let response = {
        bilangan: "oktal",
        value: oktal,
        desimal: desimal,
        biner: biner,
        hexadesimal: hexadesimal,
    }
    res.json(response)
    })

     // end-point "/convert/hexadesimal" dengan method POST
app.post("/convert/hexadesimal", (req,res) => {
    let hexadesimal = Number(req.body.nilai) 

    let desimal = hexadesimal.toString(10)
    let biner = hexadesimal.toString(2)
    let oktal = hexadesimal.toString(8)

    let response = {
        bilangan: "Hexadesimal",
        value: hexadesimal,
        desimal: desimal,
        biner: biner,
        oktal: oktal,
    }
    res.json(response)
    })

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
