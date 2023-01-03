import React from "react";
import userimg from "../image/avatar-9.jpg";
import DonutChart from "react-donut-chart";

const Main = ({ openSidebar }) => {
  return (
    <main
      className={`${openSidebar ? "main sidebar-open" : "main sidebar-close"}`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="title_main">
              <h4>Nəzarət paneli</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-sm-6 col-lg-2">
            <div className="box_items">
              <div className="box_icon">
                <i class="bi bi-activity"></i>
              </div>
              <div className="box_text">
                <p>Aktiv Tasklar</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-lg-2">
            <div className="box_items">
              <div className="box_icon">
                <i class="bi bi-chat-right-dots"></i>
              </div>
              <div className="box_text">
                <p>Yeni task yarat</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-lg-2">
            <div className="box_items">
              <div className="box_icon">
                <i class="bi bi-plus-circle"></i>
              </div>
              <div className="box_text">
                <p>Yeni layihə yarat</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-lg-2">
            <div className="box_items">
              <div className="box_icon">
                <i class="bi bi-geo-alt"></i>
              </div>
              <div className="box_text">
                <p>Layihələr</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-lg-2">
            <div className="box_items">
              <div className="box_icon">
                <i class="bi bi-people-fill"></i>
              </div>
              <div className="box_text">
                <p>İstifadəçilər</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-lg-2">
            <div className="box_items">
              <div className="box_icon">
                <i class="bi bi-archive"></i>
              </div>
              <div className="box_text">
                <p>Arxiv</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="card_content">
              <div className="card_body_tab">
                <div className="tab_content">
                  <h3>Son tasklar</h3>
                  <div class="table_items">
                    <table>
                      <tr>
                        <th>
                          {" "}
                          <div class="head_txt">
                            <p>#</p>
                          </div>
                        </th>
                        <th>
                          {" "}
                          <div class="head_txt">
                            <p>Taskın adı</p>
                          </div>
                        </th>
                        <th>
                          {" "}
                          <div class="head_txt">
                            <p>Üzvlər</p>
                          </div>
                        </th>
                        <th>
                          <div class="head_txt">
                            <p>Layihə</p>
                          </div>
                        </th>
                        <th>
                          {" "}
                          <div class="head_txt">
                            <p>
                              <i class="bi bi-calendar-date"></i> Başlama
                            </p>
                          </div>
                        </th>
                        <th>
                          {" "}
                          <div class="head_txt">
                            <p>
                              <i class="bi bi-calendar-date"></i>Bitmə
                            </p>
                          </div>
                        </th>
                        <th>
                          {" "}
                          <div class="head_txt">
                            <p>
                              <i class="bi bi-list-columns-reverse"></i>Sub
                              tasklar
                            </p>
                          </div>
                        </th>
                        <th>
                          {" "}
                          <div class="head_txt">
                            <p>
                              <i class="bi bi-chat-text"></i>Şərhlər
                            </p>
                          </div>
                        </th>
                        <th>
                          {" "}
                          <div class="head_txt">
                            <p>Status</p>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <div className="table_text">
                            <p>1</p>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <div class="table_text">
                            <p>İş yerlərinin attestasiyası keçirilməyib</p>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <div class="table_text">
                            <img src={userimg} alt="" />
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>Port Baku Residence</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>15.01.2022</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>22.02.2022</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>3/7</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>21</p>
                          </div>
                        </td>
                        <td>
                          <div class="active">
                            <p>Gecikir</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table_text">
                            <p>1</p>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <div class="table_text">
                            <p>İş yerlərinin attestasiyası keçirilməyib</p>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <div class="table_text">
                            <img src={userimg} alt="" />
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>Port Baku Residence</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>15.01.2022</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>22.02.2022</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>3/7</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>21</p>
                          </div>
                        </td>
                        <td>
                          <div class="active">
                            <p>Gecikir</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table_text">
                            <p>1</p>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <div class="table_text">
                            <p>İş yerlərinin attestasiyası keçirilməyib</p>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <div class="table_text">
                            <img src={userimg} alt="" />
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>Port Baku Residence</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>15.01.2022</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>22.02.2022</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>3/7</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>21</p>
                          </div>
                        </td>
                        <td>
                          <div class="active">
                            <p>Gecikir</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table_text">
                            <p>1</p>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <div class="table_text">
                            <p>İş yerlərinin attestasiyası keçirilməyib</p>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <div class="table_text">
                            <img src={userimg} alt="" />
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>Port Baku Residence</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>15.01.2022</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>22.02.2022</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>3/7</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>21</p>
                          </div>
                        </td>
                        <td>
                          <div class="active">
                            <p>Gecikir</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="table_text">
                            <p>1</p>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <div class="table_text">
                            <p>İş yerlərinin attestasiyası keçirilməyib</p>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <div class="table_text">
                            <img src={userimg} alt="" />
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>Port Baku Residence</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>15.01.2022</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>22.02.2022</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>3/7</p>
                          </div>
                        </td>
                        <td>
                          <div class="table_text">
                            <p>21</p>
                          </div>
                        </td>
                        <td>
                          <div class="active">
                            <p>Gecikir</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <DonutChart
            data={[
              {
                label: "",
                value: 35,
                isEmpty: false,
                color:'#4caf50',
              },
              {
                label: "",
                value: 10,
                isEmpty: false,
                color: '#2196f3',
              },
              {
                label: "",
                value: 15,
                isEmpty: false,
                color:'#e91e63',
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
};
export default Main;
