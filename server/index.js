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
  const date = req.body.date;
  const time = req.body.time;

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

app.get("/selectAll", (req, res) => {
  const query = "SELECT * FROM tbl_memo";
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.get("/findById/:id", (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM tbl_memo WHERE me_seq = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length > 0) {
        res.send(result[0]);
      } else {
        res.status(404).send("Data not found");
      }
    }
  });
});

app.get("/delete/:id", (req, res) => {
  const id = req.params.id;

  const deleteQuery = "DELETE FROM tbl_memo WHERE me_seq = ?";
  db.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("삭제 실패");
    } else {
      console.log("삭제 성공");
      res.send("삭제 성공");
    }
  });
});

app.post("/update/:id", (req, res) => {
  const id = req.params.id;
  const { title, subtitle, content, date, time } = req.body;

  const updateQuery =
    "UPDATE tbl_memo SET me_title = ?, me_subtitile = ?, me_content = ? ,me_date = ?, me_time = ? WHERE me_seq = ?";
  db.query(
    updateQuery,
    [title, subtitle, content, date, time, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("업데이트 실패");
      } else {
        console.log("업데이트 성공");
        res.send("업데이트 성공");
      }
    }
  );
});
