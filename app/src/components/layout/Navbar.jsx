import React from "react";
import az from "..//image/az.jpg";
import user from "..//image/avatar_ofis.jpg";

const Navbar = ({openSidebar,setOpenSidebar}) => {
    const handleClick = (e) => {
        setOpenSidebar(!openSidebar)
      }
  return (
    <div>
      <header className={`${openSidebar ? "header sidebar-open" : "header sidebar-close"}`}>
        <nav>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="items1">
                  <div className="list" onClick={handleClick}>
                    <i className="bi bi-list"></i>
                  </div>
                  <div className="form_items">
                    <form action="">
                      <input type="text" placeholder="Axtarış" />
                    </form>
                    <button>Axtar</button>
                    <div className="absolute_search">
                      <i className="bi bi-search"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
             <div className="div_flex">
             <div className="items2">
                 <div className="group">
                    <img src={az} alt="" />
                    <span> Azərbaycan </span>
                  </div>
                <div className="icons_nav">
                  <i className="bi bi-bell"></i>
                  <i className="bi bi-gear-wide-connected"></i>
                </div>
                 </div>
                <div className="different">
                  <div className="img-dif">
                    <img src={user} alt="" />
                  </div>
                  <div className="text-diff">
                    <p>Fuad Məmmədov</p>
                    <p>CEO</p>
                  </div>
                </div>
             </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
