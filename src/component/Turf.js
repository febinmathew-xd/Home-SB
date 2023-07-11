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
          <div className="main-heading-holder">
            <div className="main-heading sytle-2">
              <h2>About Your Turf</h2>
              <p>
                There is no limitation to play! So why limit the games played?
                Welcoming you to the Multi-Sport Turf credited for being the 1st
                Cricket and Lawn Tennis Turf in Kottayam. This turf gives you
                the freedom of choosing the space you need for your game.
                Whichever outdoor games interest you can be played with quality
                enjoyment here. Bring out your groups and try different games in
                our Multi-Sport Turf.
              </p>
            </div>
          </div>
          <div id="team-slider">
            <div className="container">
              {turfs.map((data) => {
                return (
                  <>
                    <div className="col-md-3">
                      <div className="team-column style-2">
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
