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

app.listen(4000, () => {
    console.log("Server Started : http://localhost:4000")
});