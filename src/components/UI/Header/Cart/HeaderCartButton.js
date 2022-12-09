
import  "./HeaderCartButton.scss";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const HeaderCartButton = () => {



  return (
    <button className="button bump">
      <span classes="icon">
        <ShoppingCartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">0</span>
    </button>
  );
  
};
export default HeaderCartButton;