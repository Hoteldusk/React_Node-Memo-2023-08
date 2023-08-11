import "../css/nav.css";

const ClickHandler = () => {
  window.location.href = "/";
};

function Nav() {
  return (
    <div className="title" onClick={ClickHandler}>
      기록을 하자
    </div>
  );
}

export default Nav;
