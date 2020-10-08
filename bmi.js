const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

// end-point "/bmi" dengan method POST
app.post("/bmi", (req,res) => {
    let tinggi_badan = Number(req.body.tinggi_badan) 
    let berat_badan = Number(req.body.berat_badan) 

    let hasil_bmi = berat_badan / (tinggi_badan * tinggi_badan)
    let status = hasil_bmi

    if(hasil_bmi < 18.5){
        status = "ANDA KEKURANGAN BERAT BADAN!";
    }else if (hasil_bmi >= 18.5 && hasil_bmi <= 24.9){
        status = "SELAMAT, BERAT BADAN ANDA IDEAL!";
    }else if (hasil_bmi >= 25 && hasil_bmi <= 29.9){
        status = "HATI-HATI ANDA KELEBIHAN BERAT BADAN!";
    }else{
        status = "AWAS ANDA OBESITAS!"
    }

    let response = {
        tinggi_badan: tinggi_badan,
        berat_badan: berat_badan,
        hasil_bmi: hasil_bmi,
        status: status
    }
res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
