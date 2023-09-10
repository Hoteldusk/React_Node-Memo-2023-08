import "../css/main.css";

import React, { useState, useEffect } from "react";
import Axios from "axios";

import List from "./List";
import InsertList from "./InsertList";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/selectAll")
      .then((response) => {
        // 서버로부터 받은 데이터를 상태에 저장
        setData(response.data);
        console.log("response_data : ", response.data);
      })
      .catch((error) => {
        console.error("데이터 불러오기 실패", error);
      });
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <>
      <ul>
        {data.map((item, index) => (
          <List
            key={index}
            listId={item.me_seq}
            title={item.me_title}
            subtitle={item.me_subtitile}
            date={item.me_date}
            time={item.me_time}
          />
        ))}
        <InsertList />
      </ul>
    </>
  );
}

export default Main;
