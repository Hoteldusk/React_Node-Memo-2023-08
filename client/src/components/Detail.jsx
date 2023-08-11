import "../css/detail.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState([]);

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

  const updateClickHandler = () => {
    window.location.href = `/update/${id}`;
  };

  const deleteClickHandler = async () => {
    await Axios.get(`http://192.168.4.47:3001/delete/${id}`)
      .then((response) => {
        // 서버로부터 받은 데이터를 상태에 저장
        setData(response.data);
        console.log("response_data : ", response.data);
      })
      .catch((error) => {
        console.error("데이터 불러오기 실패", error);
      });

    window.location.href = "/";
  };

  return (
    <>
      <div className="buttonDiv">
        <button className="updatebutton" onClick={updateClickHandler}>
          수 정
        </button>
        <button className="deletebutton" onClick={deleteClickHandler}>
          삭 제
        </button>
      </div>

      <div className="note-container">
        <h2 className="note-title">{data.me_title}</h2>
        <h4 className="note-subtitle">{data.me_subtitile}</h4>
        <p className="note-metadata">
          작성날짜: {data.me_date} / 작성시간: {data.me_time}
        </p>
        <p className="note-content">{contentWithLineBreaks}</p>
      </div>
    </>
  );
}
export default Detail;
