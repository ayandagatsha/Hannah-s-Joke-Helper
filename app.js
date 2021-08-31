const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req,res){

res.sendFile(__dirname+"/index.html")



})

app.post("/", function(req,res){
    console.log(req.body.cityName)
    console.log("post recieved!")

    var cityTyped = req.body.cityName;
        var query =cityTyped;
    var apiKey = "761c0283fa93a76c365b2bbecfea71a9";
    var unit = "metric"

    //make sure to type out https:// everytime you add a url from postman
var url = "https://official-joke-api.appspot.com/random_joke"
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const jokeData = JSON.parse(data);

            const setUp = jokeData.setup
            const punchLine = jokeData.punchline

            //only one .send allowed per route, otherwise a crash of server occurs an nothing is responded.
            res.write("<h1>If the joke sucks, refresh until you find one you like!</h1>" )
            res.write("<h2>Joke:</h2>" )
            res.write("<h3>" + setUp  + " " + punchLine + " </h3>" )
            res.send()

            // console.log(temp +" "+ description)

            // console.log(weatherData);


            // const obj = {
            //     name: "ayanda",
            //     favLang: "js"
            // }

            // console.log(JSON.stringify(obj))

        })
    })

    // res.send("server running on browser")
})


app.listen(3000, function(){
    console.log("Hi Ayanda, your server is running on port 3000!")
})