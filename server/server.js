require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./db/user-model");

const { MONGO_URL, PORT } = process.env;

if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

const app = express();
app.use(express.json());

app.get("/api/users/", async (req, res) => {
  const users = await UserModel.find().sort({ created: "desc" });
  return res.json(users);
});

app.get("/api/users/:id", async (req, res) => {
  const users = await UserModel.findById(req.params.id);
  return res.json(users);
});

app.get("/user/:username", async (req, res) => {
  const user = await UserModel.find({ name: "username" });
  return res.json(user);
});

app.post("/api/users/", async (req, res, next) => {
  const user = req.body;

  try {
    const saved = await UserModel.create(user);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

app.patch("/api/users/:id", async (req, res, next) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );
    return res.json(user);
  } catch (err) {
    return next(err);
  }
});

app.delete("/api/users/:id", async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const deleted = await user.delete();
    return res.json(deleted);
  } catch (err) {
    return next(err);
  }
});

const main = async () => {
  await mongoose.connect(MONGO_URL);

  app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});