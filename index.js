const express = require('express');
const cors = require('cors');
const port = process.env.PROT || 3000;
const app = express();

app.use(cors());
app.use(express.json())

// 1cjDA6pOlaKfkg0f
// Assignment_Ten

// mongodb code start here

const { MongoClient, ServerApiVersion } = require('mongodb');
var uri = "mongodb://Assignment_Ten:1cjDA6pOlaKfkg0f@ac-cgkxfia-shard-00-00.x9t7sgg.mongodb.net:27017,ac-cgkxfia-shard-00-01.x9t7sgg.mongodb.net:27017,ac-cgkxfia-shard-00-02.x9t7sgg.mongodb.net:27017/?ssl=true&replicaSet=atlas-nszs70-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


// mongodb code ends here


app.get('/', (req, res) => {
  res.send("Visa Port is runing on Port")
})
app.listen(port, () => {
  console.log(`Sever in runing on Port :${port}`)
})