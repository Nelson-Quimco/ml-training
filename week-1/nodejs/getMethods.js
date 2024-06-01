const app = require("express")();
const http = require("http");
const sampleData = require("../nodejs/data.json");
const bodyParser = require("body-parser");
const { log } = require("console");
const port = 3000;

const server = http.createServer(app);
server.listen(port, () => console.log(`http://localhost:${port}`));
app.use(bodyParser.json());

const getUsers = async (req, res) => {
  return await res.json(sampleData);
};

const getUserbyId = async (req, res) => {
  const { id } = req.params;
  console.log("ID NI ", id);
  const returnUser = sampleData.filter((item) => {
    return item.id == id;
  });
  const returnData = returnUser.length
    ? returnUser
    : { message: "No User Found" };
  return await res.json(returnData);
};

const postUser = async (req, res) => {
  sampleData.push(req.body);
  return await res.json({ message: "Successfully aded!" });
};

const updateUser = async (req, res) => {};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const userData = sampleData.findIndex((user) => user.id === id);
  console.log("makita;", userData);
  if (userData === -1) {
    return await res.json({ message: "User Not Found" });
  } else {
    sampleData.splice(userData, 1)[0];
  }
  return await res.json({ message: "Successfully Deleted!" });
};

app.get("/users", getUsers);
app.get("/users/:id", getUserbyId);
app.post("/users", postUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);
