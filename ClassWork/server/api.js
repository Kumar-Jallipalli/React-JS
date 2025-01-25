import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';


//  Creating an Instance of Express App
const app = express();
/**
 *  - Here, "new"  keyword is NOT used to Create an Instance of Express App
 *  - Why..?
 *  - Because, Express is a Factory Function [ Not a Class (or) Constructor Function ]
 * 
 *  Factory Function -> A Function that returns a New Object (or) Class
 *  Constructor Function -> function that's intended to be used with the "new" keyword to create new instances of an object
*/

// Middleware Config for POST Request
app.use(cors())
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())
/**
 *  app.use(cors())
 *      - Enables CORS for all routes
 * 
 *  express.urlencoded -> 
 *      - allows Express to parse the application/x-www-form-urlencoded data in the request body. 
 *      - And It makes the parsed data available in "req.body"
 *  extended: true  
 *      - allows for complex objects and arrays to be encoded into the body & 
 *      - It uses Uses qs library Internally, which supports nested objects
 *      - If set to false, it uses the built-in querystring library, which does not support nested objects.
 *  
 *  express.json() 
 *      - automatically parses application/json [JSON] data 
 *      - and makes the resulting JavaScript object available in req.body.
*/



// Mongo DB Connection URL 
const url = "mongodb://localhost:27017/"
const client = new MongoClient(url)

//  Connecting to MongoSB Server
client.connect()
    .then(() => {
        console.log("Connected to MongoDB Successfully");
    })
    .catch ((err) => {
        console.log("Error Connecting MongoDB :", err)
    })

// Defining Route
app.get("/getusers", async (req, res) => {
    let database = client.db("Users")           // Connecting to Users DB
    let table = database.collection('users')    // Connecting to users Table
    let data = await table.find({}).toArray()   // Fetching Data from Table
    res.json(data);                             // Sending Data to CLient
})

// Defining a POST Route
app.post('/insertuser', async (req, res) => {
    let insertUser = {
        _id: req.body._id,
        name: req.body.name,
        age: req.body.age,
        crew_status: req.body.crew_status,
        position: req.body.position
    }

    let database = client.db("Users");
    let table = database.collection("users");
    let result = await table.insertOne(insertUser)
    console.log(result)
    res.send(`Recod Inserted with id : ${result.insertedId}`)
})

app.listen(4000, () => {
    console.log("Server Started : http://localhost:4000")
});