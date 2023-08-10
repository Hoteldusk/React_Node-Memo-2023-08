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

  const addMemo = () => {
    Axios.post("http://localhost:3001/create", {
      title: title,
      subtitle: subtitle,
      content: content,
    }).then(() => {
      console.log("데이터 저장성공");
    });
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
