import "../style/header.css";
const Header = ({ onClick }) => {
  return (
    <div>
      <div className="header" id="header">
        <div className="cout">
          JOIN THE BIGGEST MOVEMENT TO ESCAPE THE MATRIX
          <button className="header btn" onClick={onClick}>JOIN NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Header;