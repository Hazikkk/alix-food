import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className='flex flex-col sm:flex-row justify-between shadow-lg mb-2 px-2 bg-slate-300'>
      <div className='w-full sm:w-1/4 mb-4 sm:mb-0'>
        <img src={LOGO_URL} alt="Logo" className="mx-auto" />
      </div>
      <div className='flex items-center w-full sm:w-3/4'>
        <ul className="flex p-2 sm:p-10 m-2 sm:m-4">
          <li className="px-2 sm:px-4"><Link to="/">Home</Link></li>
          <li className="px-2 sm:px-4"><Link to="/about">About</Link></li>
          <li className="px-2 sm:px-4"><Link to="/contact">Contact</Link></li>

          <button
            className="login ml-2 sm:ml-4"
            onClick={() => {
              setBtnName((prevName) => (prevName === "Login" ? "Logout" : "Login"));
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
