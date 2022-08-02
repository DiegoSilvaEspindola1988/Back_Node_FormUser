const user = require("./user.model");
const express = require("express");
const userModel = require("./user.model");
const app = express();
app.use(express.json());
const PORT = 8080;

app.post("/users", async (req, res) => {
  try {
    const usuario = await userModel.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users", async (req, res) => {
  try {
    const usuarios = await userModel.find({});
    res.status(200).json(usuarios);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await userModel.findById(id);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const usuarioAlterado = req.body;
    const usuario = await userModel.findByIdAndUpdate(id, usuarioAlterado, {
      new: true,
    });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletado = await userModel.findByIdAndDelete(id);
    res.status(200).json(deletado);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT);
