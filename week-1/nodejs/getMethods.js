const app = require("express")();
const http = require("http");
const fs = require("fs");
const sampleData = require("../nodejs/data.json");
const bodyParser = require("body-parser");
const { log, error } = require("console");
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
  const newUser = req.body;
  sampleData.push(newUser);
  try {
    fs.writeFileSync("data.json", JSON.stringify(sampleData, null, 2));
    return res.json({ message: "User Successfully Added", newUser });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ message: "Error occured" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = sampleData.findIndex((user) => user.id === parseInt(id));
  if (user === -1) {
    return res.json({ message: "User Not Found" });
  } else {
    const updatedUser = {
      ...sampleData[user],
      ...req.body,
    };

    sampleData[user] = updatedUser;
    const fs = require("fs");
    fs.writeFile("data.json", JSON.stringify(sampleData), (err) => {
      if (err) {
        console.log(err);
        return res.json({ message: "Error occurred while updating user" });
      }
      console.log("User updated:", updatedUser);
      return res.json({ message: "Successfully Updated!" });
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const userData = sampleData.findIndex((user) => user.id === parseInt(id));
  console.log("makita;", userData);
  if (userData === -1) {
    return res.json({ message: "User Not Found" });
  } else {
    const deleteUser = sampleData.splice(userData, 1)[0];
    fs.writeFile("data.json", JSON.stringify(sampleData), (err) => {
      if (err) {
        console.log("Error", err);
        return res.json({ message: "Error occured while deleting the user" });
      }
      console.log("User deleted", deleteUser);
      return res.json({ message: "Successfully Deleted!" });
    });
  }
  return;
};

app.get("/users", getUsers);
app.get("/users/:id", getUserbyId);
app.post("/users", postUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);
