const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SERVIR FRONTEND
const frontendPath = path.join(__dirname, "../../frontend");
app.use(express.static(frontendPath));

// ROTAS DO FRONTEND (SPA fallback)
// Isso garante que se o usuário der F5 em uma página, o backend entrega o HTML correto
app.get("/", (req, res) => res.sendFile(path.join(frontendPath, "index.html")));

// INICIAR SERVIDOR
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 API rodando em http://localhost:${PORT}`);
});
