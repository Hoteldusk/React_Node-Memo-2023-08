import "../css/insertList.css";

function InsertList() {
  return (
    <li>
      <a href="/insert">
        <span className="thumb">
          메모 추가
          <div>+</div>
        </span>
        <strong>메모 추가</strong>
      </a>
    </li>
  );
}

export default InsertList;
