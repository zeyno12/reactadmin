import React from "react";
import { Link } from "react-router-dom";
import akart from "../image/akart-pasha.png";
const Main = ({ openSidebar }) => {

  
  return (
    <main
      className={`${openSidebar ? "main sidebar-open" : "main sidebar-close"}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 akart_mt">
            <div className="akart">
              <img src={akart} alt="" />
            </div>
          </div>
        </div>

        <div className="row mt-3 center">
          <div className="col-8">
            <div className="heading_table">
              <div>
                <p>My payment</p>
              </div>
              <div>
                <Link to="/payment">
                  <p>See all</p>
                </Link>
              </div>
            </div>
            <div className="table_con">
              <table>
                <tr>
                  <td className="flex-td">
                    <div className="icon">
                    <i class="bi bi-memory"></i>
                    </div>
                    <div className="data_p">
                    <p className="bold">Pateron Membership</p>
                    <p className="grey">20 May 2020</p>
                    </div>
                  </td>
                  <td className="price"><span>$250.00</span></td>
                </tr>
                <tr>
                  <td className="flex-td">
                    <div className="icon purple ">
                    <i class="bi bi-bag-fill "></i>
                    </div>
                    <div className="data_p">
                    <p className="bold">UI GREEK INC</p>
                    <p className="grey">10 March</p>
                    </div>
                  </td>
                  <td className="price"><span>$4350.00</span></td>
                </tr>
                <tr>
                  <td className="flex-td">
                    <div className="icon">
                    <i class="bi bi-person-circle"></i>
                    </div>
                    <div className="data_p">
                    <p className="bold">Hiltam Labou</p>
                    <p className="grey">20 May 2020</p>
                    </div>
                  </td>
                  <td className="price"><span>$250.00</span></td>
                </tr>
                <tr>
                  <td className="flex-td">
                    <div className="icon orange">
                    <i class="bi bi-exclamation-circle"></i>
                    </div>
                    <div className="data_p">
                    <p className="bold">Slava Kornilov</p>
                    <p className="grey">05 March </p>
                    </div>
                  </td>
                  <td className="price"><span>$150.00 </span></td>
                </tr>
                <tr>
                  <td className="flex-td">
                    <div className="icon black">
                    <i class="bi bi-apple"></i>
                    </div>
                    <div className="data_p">
                    <p className="bold">iMac 5K</p>
                    <p className="grey">20May 2020 </p>
                    </div>
                  </td>
                  <td className="price"><span>$6350.00</span></td>
                </tr>
              </table>
            </div>
          </div>
          <div className="col-4">
              <div className="heading_table">
                <div>
                  <p>Categoriyalar</p>
                </div>
              </div>
              <div className="table_con">
              <table>
                <tr>
                  <td className="flex-td flex-td2">
                    <div className="icon">
                    <i class="bi bi-memory"></i>
                    </div>
                    <div className="data_p">
                    <p className="bold">UI GREEK INC</p>
                    </div>
                  </td>
                  <td className="price"><span>$250.00</span></td>
                </tr>
                <tr>
                  <td className="flex-td flex-td2">
                    <div className="icon purple ">
                    <i class="bi bi-bag-fill "></i>
                    </div>
                    <div className="data_p">
                    <p className="bold">UI GREEK INC</p>
                    </div>
                  </td>
                  <td className="price"><span>$4350.00</span></td>
                </tr>
                <tr>
                  <td className="flex-td flex-td2">
                    <div className="icon">
                    <i class="bi bi-person-circle"></i>
                    </div>
                    <div className="data_p">
                    <p className="bold">Hiltam Labou</p>
                    </div>
                  </td>
                  <td className="price"><span>$250.00</span></td>
                </tr>
                <tr>
                  <td className="flex-td flex-td2">
                    <div className="icon orange">
                    <i class="bi bi-exclamation-circle"></i>
                    </div>
                    <div className="data_p">
                    <p className="bold">Slava Kornilov</p>
                    </div>
                  </td>
                  <td className="price"><span>$150.00 </span></td>
                </tr>
                <tr>
                  <td className="flex-td flex-td2">
                    <div className="icon black">
                    <i class="bi bi-apple"></i>
                    </div>
                    <div className="data_p">
                    <p className="bold">iMac 5K</p>
                    </div>
                  </td>
                  <td className="price"><span>$6350.00</span></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
