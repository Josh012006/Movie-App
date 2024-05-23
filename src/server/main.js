import express from "express";
import ViteExpress from "vite-express";
import connectToDatabase from "./db.js";


const app = express();

app.get("/allProducts", async (req, res) => {

  try {
    const connection = await connectToDatabase();
    const [results, fields] = await connection.execute('SELECT titre, id, affiche FROM films');
    res.send(results);
    await connection.end();
  }
  catch(err) {
    console.log(err);
    res.status(500);
    res.send([]);
  }

});

app.get("/product/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const connection = await connectToDatabase();
    const [results, fields] = await connection.execute('SELECT * FROM films WHERE id = ?', [id]);
    res.send(results);
    await connection.end();
  }
  catch(err) {
    console.log(err);
    res.status(500);
    res.send([]);
  }

})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
