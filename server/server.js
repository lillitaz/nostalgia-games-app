require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./db/user-model");

const { MONGO_URL, PORT, IP_ADDRESS } = process.env;

if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

const app = express();
app.use(express.json());

//GETS (all, one, stored games by user id, stored game by user id and game title)

app.get("/api/users/", async (req, res) => {
  const users = await User.find().sort({ created: "desc" });
  return res.json(users);
});

app.get("/api/user/:id/", async (req, res) => {
  const user = await User.findById(req.params.id);
  return res.json(user);
});

app.get('/api/user/:id/games', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.json(user.games);
});

app.get('/api/user/:id/game/:title', async (req, res) => {
    const user = await User.findById(req.params.id);
    const game = user.games.find((game) => game.title === req.params.title);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    if (!game) {
      return res.status(404).json({ success: false, message: 'Game not found' });
    }
    res.json(game);
  });
  

//POST Responses (new user signup, success true if username& pw check)

app.post("/api/create/user", async (req, res, next) => {
  const user = req.body;
  try {
    const saved = await User.create(user);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

app.post("/api/user/login", (req, res) => {
    const { userName, password } = req.body;
    User.findOne({ userName, password })
        .then((user) => {
            if (user) {
                res.json({ success: true });
            } else {
                res
                    .status(401)
                    .json({ success: false, message: "Invalid username or password" });
            }
        })
        .catch((err) => {
            console.error(err);
        });
});

app.post('/api/user/game', requireLogin, async (req, res) => {
    try {
      const { currentUser } = req.body;
      const { title, year, company, developer, embeddedLink, image } = req.body;
  
      const user = await User.findById({ _id: currentUser });
  
      if (!user) {
        res.status(401).json({ success: false, message: 'User not found' });
      } else {
        user.games.push({ title, year, company, developer, embeddedLink, image });
        await user.save();
        res.status(200).json({ success: true, games: user.games });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Could not save' });
    }
  });

// PATCH (user changes something)

app.patch("/api/user/:id", async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        return res.json(user);
    } catch (err) {
        return next(err);
    }
})

// DELETE user by id and game by user id and title

app.delete("/api/user/:id", async (req, res, next) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    return res.json(deleted);
  } catch (err) {
    return next(err);
  }
});

app.delete('/api/user/:id/game/:title', async (req, res) => {
    const user = await User.findById(req.params.id);
    const gameIndex = user.games.findIndex((game) => game.title === req.params.title);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    if (gameIndex === -1) {
      return res.status(404).json({ success: false, message: 'Game not found' });
    }
    user.games.splice(gameIndex, 1);
    await user.save();
    res.json({ success: true, message: 'Game deleted' });
  });
  

function requireLogin(req, res, next) {
    if (!req.body.currentUser) {
      res
        .status(401)
        .json({
          success: false,
          message: "You must be logged in to perform this action",
        });
    } else {
      next();
    }
  }

const main = async () => {
    await mongoose.connect(MONGO_URL);

    app.listen(PORT, () => {
        console.log(`App is listening on Port: ${PORT}. Click http://${IP_ADDRESS}:${PORT}/api/users for the api/users Endpoint.`);
    });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});