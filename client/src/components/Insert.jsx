import "../css/insert.css";

import { useState } from "react";
import Axios from "axios";

function Insert() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");

  //   const displayInfo = () => {
  //     console.log(" title : ", title);
  //     console.log(" subtitle : ", subtitle);
  //     console.log(" content : ", content);
  //   };

  const addMemo = async () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    await Axios.post("http://localhost:3001/create", {
      title: title,
      subtitle: subtitle,
      content: content.replace(/\n/g, "<br>"),
      date: formattedDate,
      time: formattedTime,
    }).then(() => {
      console.log("데이터 저장성공");
    });

    window.location.href = "/";
  };

  return (
    <div className="input">
      <label>제목:</label>
      <input
        className="title"
        type="text"
        placeholder="제목을 입력하세요"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label>부제목:</label>
      <input
        className="title"
        type="text"
        placeholder="부제목을 입력하세요"
        onChange={(e) => {
          setSubtitle(e.target.value);
        }}
      />
      <label>내용:</label>
      <textarea
        className="content"
        type="text"
        placeholder="내용을 입력하세요"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button onClick={addMemo}>저장</button>
    </div>
  );
}

export default Insert;
