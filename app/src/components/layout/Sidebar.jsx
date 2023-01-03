import React from 'react';
import Logo from "..//image/pashalogo.png";
import Logosade from "..//image/pasha.png";
const Sidebar=({openSidebar})=>{
return(
    <section className={`${openSidebar ? "sidebar sidebar-open" : "sidebar sidebar-close"}`}>
    <div className="container">
      <div className="row">
        <div className="mainlogo">
          <img src={Logo}  alt="salam" className='logo' />
          
        </div>
        <div className="col-auto min-vh-100 lg-dark slaam">
          <ul>
            <li>
              <p>NAVİQASİYA</p>
            </li>
            <li>
              <i className="bi bi-house"></i> <span>Nəzarət paneli</span>
            </li>
            <li>
              <i className="bi bi-chat-left-text"></i>{" "}
              <span>Yeni tasklar yarat</span>{" "}
              <span className="new">Yeni</span>
            </li>
            <li>
              <i className="bi bi-plus-circle"></i>{" "}
              <span>Yeni layihələr yarat</span>{" "}
              <span className="new">Yeni</span>
            </li>
            <li>
              <i className="bi bi-geo-alt"></i>{" "}
              <span>Yeni layihələr yarat</span>
            </li>
            <li>
              <i className="bi bi-geo-alt"></i> <span>Layihələr</span>
            </li>
            <li>
              <i className="bi bi-people-fill"></i>{" "}
              <span>Qruplar/Istifadəçələr</span>
            </li>
            <li>
              <i className="bi bi-archive"></i>
              <span>Arxiv</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
    )
}
export default Sidebar;