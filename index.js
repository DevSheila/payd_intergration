require("dotenv").config();

const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(express.json()); // To parse JSON request bodies

// Replace with your actual API endpoint
const apiEndpoint = "https://api.mypayd.app/api/v2/payments";

app.get("/", async (req, res) => {
    res.send("hello from Cairo");
});

app.post("/make-payment", async (req, res) => {
  const paymentData = {
    username: req.body.username,
    network_code: req.body.network_code,
    amount: req.body.amount,
    phone_number: req.body.phone_number,
    narration: req.body.narration,
    currency: req.body.currency,
    callback_url: req.body.callback_url,
  };

//  API credentials(pass username and password)
  const axiosConfig = {
    auth: {
      username: "GO4LbY3myp0xpgWpSH6u",
      password: "ZkBByCJq0JLCHeLXUbeRs1Xa7mFd9dFLCipK6Xeu",
    },
  };


  try {
    const response = await axios.post(
      "https://api.mypayd.app/api/v2/payments",
      paymentData,
      axiosConfig
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error making payment request",
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
