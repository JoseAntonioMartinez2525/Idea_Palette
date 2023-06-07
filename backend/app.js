const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../")));

const drawings = [];


app.post("/guardar-datos", (req, res) => {
  const datos = req.body;
  drawings.push(datos); // Agregar los datos al arreglo "drawings"

  // Enviar los datos actualizados a home.html
  enviarDatosADocumentoPadre();

  res.sendStatus(200); // Enviar una respuesta exitosa al cliente
});

app.post('/guardar-svg', (req, res) => {
  const data = req.body; // Obtener los datos enviados en el cuerpo de la solicitud

    // Enviar los datos actualizados a home.html
  enviarDatosADocumentoPadre();
  // Responder con un mensaje de éxito o error
  res.json({ message: 'Datos guardados exitosamente' });
});

// Función para enviar los datos de "drawings" a home.html
function enviarDatosADocumentoPadre() {
  const datos = JSON.stringify(drawings);

  // Enviar los datos al cliente utilizando postMessage()
  io.emit('datosActualizados', datos);
}

app.get("/obtener-datos", (req, res) => {
  const datos = JSON.stringify(drawings);
  res.send(datos);
});

app.get("/saved-drawing/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  res.sendFile(fileName, { root: __dirname });
});

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../landing_page.html"));
});

http.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
