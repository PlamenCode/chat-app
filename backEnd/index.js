const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  const project_id = 'cf37dadf-6293-4c7e-9cd4-834a6e078a6e';
  const private_key = 'd1c39513-d276-47e3-bef8-e092fd5f4751';

  try {
    const response = await axios.put(
        'https://api.chatengine.io/users/',
        { username: username, secret: username, first_name: username },
        { headers: { 'PRIVATE-KEY': private_key }}
    );
    return res.status(response.status).json(response.data);
  } catch (error) {
    return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(3001, console.log('server listening on port 3001'));