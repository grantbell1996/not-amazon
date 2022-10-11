import React from "react";
import "./Header.css";
import notamazonLogo from "../images/notamazonLogo.png"
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src={notamazonLogo}/>

      <div className="header_search">
        <input 
        className="header_searchInput" 
        type="text" />
        <SearchIcon className="headerSearchIcon"/>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello User</span>

          <span className="header_optionLineTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>

          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>

          <span className="header_optionLineTwo">Prime</span>
        </div>

        <div className="header_optionBasket">
            <ShoppingBasket/>
            <span className="header_optonLineTwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
