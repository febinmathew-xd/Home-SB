import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Header from "./Header";
import { Post, fileurl } from "./service/Api";

function Turf() {
  const [turfs, setTurfs] = useState([]);

  useEffect(() => {
    Post("getall", { tablename: "turf" }).then((data) => {
      setTurfs(data);
    });
  }, []);
  return (
    <>
      <Header />

      <div className="team-holder theme-padding">
        <div className="container">
          <div className="main-heading-holder" style={{paddingTop:'0px'}}>
            <div className="main-heading sytle-2">
              
              <h2 style={{fontSize:'20px'}}>Turfs Near You</h2>
             
            </div>
          </div>
          <div id="team-slider">
            <div className="container">
              {turfs.map((data) => {
                return (
                  <>
                    <div className="col-md-3" style={{borderRadius:'10px'}}>
                      <div className="team-column style-2 " style={{borderRadius:'10px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
                        <img
                          src={fileurl + data.file}
                          alt=""
                          style={{ width: "120%", height: "300px" }}
                        />
                        <div className="player-name">
                          <div className="desination-2">{data.username}</div>

                          <Link
                            to="/viewsingleturf"
                            class="btn btn danger"
                            state={{ id: data.loginid }}
                          >
                            View
                          </Link>
                          <span className="player-number"></span>
                        </div>
                      </div>
                      <div>
                        <span>
                          Near : <b>{data.address}</b>
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Turf;
