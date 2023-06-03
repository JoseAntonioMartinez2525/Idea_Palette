const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.json());

const drawings = [];


// Configurar el middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "../")));

// Configurar el middleware para servir archivos CSS desde la carpeta "css"
app.use("/css", express.static(path.join(__dirname, "../css")));

app.post("/save-svg", (req, res) => {
  const svgData = req.body.svgData;
  const fileName = "saved-drawing.svg";

  fs.writeFile(fileName, svgData, (err) => {
    if (err) {
      console.error("Error saving SVG:", err);
      res.status(500).send("Error saving SVG");
    } else {
      console.log("SVG saved successfully");
      drawings.push(fileName);
      res.sendStatus(200);
    }
  });
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
