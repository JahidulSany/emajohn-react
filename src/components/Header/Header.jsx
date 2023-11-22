import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="Ema-john Logo" />
      <div className="">
        <a href="/orders">Order</a>
        <a href="/order-review">Order Review</a>
        <a href="/manage-inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
