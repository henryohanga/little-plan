import './Header.scss';

const Header = ({ onClear }) => {
  return (
    <div className="d-flex Header">
      <h1 className="p-h1 tc-grey-100">Your Little Plan</h1>
      <button className="p-btn--secondary" onClick={onClear}>
        Clear
      </button>
    </div>
  );
};

export default Header;
