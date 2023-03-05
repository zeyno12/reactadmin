import React from "react";
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
                </div>
              </div>
              <div className="col-lg-6">

               <div className="items2">
               <div className="balance">
                  <div><i class="bi bi-wallet"></i></div>
                  <div><p>Balans <span className="price_gren">$1293</span></p></div> 
                </div>
                <div className="profile">
                  <div className="img_user">
                  <i className="bi bi-person-circle"></i>
                  </div>
                  <div className="user_name">
                    <p>Profile</p>
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
