const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "mymemo",
  host: "localhost",
  password: "88888888",
  database: "mymemodb",
});

app.listen(3001, () => {
  console.log("server is running on port : 3001");
});

app.post("/create", (req, res) => {
  console.log(req.body);
  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const content = req.body.content;
  const date = "123";
  const time = "123";

  const query =
    "INSERT INTO tbl_memo (me_title, me_subtitile, me_content, me_date, me_time) VALUES (?, ?, ?, ?, ?)";
  db.query(query, [title, subtitle, content, date, time], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  });
});
