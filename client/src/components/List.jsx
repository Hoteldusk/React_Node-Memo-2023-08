import "../css/memo_spring_copy.css";

function List() {
  return (
    <li>
      <a href="/detail">
        <span className="thumb">
          내용미리보기
          <em>View</em>
        </span>
        <strong>제목입니다</strong>
      </a>
    </li>
  );
}

export default List;
