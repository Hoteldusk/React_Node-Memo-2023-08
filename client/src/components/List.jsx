import "../css/memo_spring_copy.css";

function List(props) {
  return (
    <li>
      <a href={`/detail/${props.listId}`}>
        <span className="thumb">
          <p>{props.date}</p>
          <p>{props.time}</p>
          <em>{props.subtitle}</em>
        </span>
        <strong>{props.title}</strong>
      </a>
    </li>
  );
}

export default List;
