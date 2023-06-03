const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "../")));

const drawings = [];


app.post("/guardar-datos", (req, res) => {
  const datos = req.body;
  drawings.push(datos); // Agregar los datos al ArrayList
  res.sendStatus(200); // Enviar una respuesta exitosa al cliente
});

app.get("/saved-drawing/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  res.sendFile(fileName, { root: __dirname });
});

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../landing_page.html"));
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
