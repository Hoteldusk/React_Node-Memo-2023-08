import "../css/insert.css";

import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [data, setData] = useState({}); // 초기 빈 객체로 설정

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    Axios.get(`http://192.168.4.47:3001/findById/${id}`)
      .then((response) => {
        // 서버로부터 받은 데이터를 상태에 저장
        setData(response.data);
        console.log("response_data : ", response.data);
      })
      .catch((error) => {
        console.error("데이터 불러오기 실패", error);
      });
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  let contentWithLineBreaks = "";
  if (data.me_content) {
    contentWithLineBreaks = data.me_content.replace(/<br>/g, "\n");
  }

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

    await Axios.post(`http://192.168.4.47:3001/update/${id}`, {
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
        value={data.me_title}
        onChange={(e) => {
          setData(e.target.value);
          setTitle(e.target.value);
        }}
      />
      <label>부제목:</label>
      <input
        className="title"
        type="text"
        placeholder="부제목을 입력하세요"
        value={data.me_subtitile}
        onChange={(e) => {
          setData(e.target.value);
          setSubtitle(e.target.value);
        }}
      />
      <label>내용:</label>
      <textarea
        className="content"
        type="text"
        placeholder="내용을 입력하세요"
        defaultValue={contentWithLineBreaks}
        onChange={(e) => {
          setData(e.target.value);
          setContent(e.target.value);
        }}
      />
      <button onClick={addMemo}>수정</button>
    </div>
  );
}
export default Update;
