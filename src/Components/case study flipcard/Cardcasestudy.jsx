
import "../card/card.css";
import "../card/flip-transition.css";


function Cardcasestudy({ onClick, title }) {
  const timeOutFun = (e) => {
    setTimeout(() => window.open("../afterflip/" + title), 400);
    // console.log(title);
  };

  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="card-back card-back-border">{title}</div>

        <div className="card-front front-icon">
          <button
            className="middle card-front front-icon"
            onClick={() => {
              timeOutFun();
            }}
          >
            hiii
          </button>
          <p
            onClick={() => {
              timeOutFun();
            }}
            className="text-on-card"
          >
            {title}
          </p>
        </div>
      </div>
    </>
  );
}

export default Cardcasestudy;