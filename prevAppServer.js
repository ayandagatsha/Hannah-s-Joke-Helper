const express = require("express");
const app = express();
const https = require("https");


app.get("/", function(req,res){

    //make sure to type out https:// everytime you add a url from postman
var url = "https://api.openweathermap.org/data/2.5/weather?q=Gaborone&appid=761c0283fa93a76c365b2bbecfea71a9&units=metric";
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);

            const temp = weatherData.main.temp;
            const description= weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            //only one .send allowed per route, otherwise a crash of server occurs an nothing is responded.
            res.write("<h1>The temprature in Gaborone is "+ temp +" degrees with " + description+"</h1>")
            res.write("<img src=" + imageURL+">" )
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