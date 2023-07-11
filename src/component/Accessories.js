import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Header from "./Header";
import { Post, fileurl } from "./service/Api";

function Accessories() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Post("getall", { tablename: "products" }).then((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <>
      <Header />

      <div className="team-holder theme-padding">
        <div className="container">
          <div className="main-heading-holder">
            <div className="main-heading sytle-2">
              <h2>Sport Equipments</h2>
              <p>
                Sports equipment is needed to compete in many different sports.
                Without the proper equipment, playing the sports we love would
                be unsafe and more challenging. Each sport has its own unique
                set of equipment that an athlete must have to compete and
                succeed. The type of equipment depends on the sport you are
                playing as well as what kind of surface you're playing on. For
                example, if you are playing on a field, it is important to have
                cleats, so that you can gain traction while running on the
                grass. While playing sports on ice, you need the right skates to
                skate efficiently. From game balls to playing gear, sports
                equipment is essential to those who compete.
              </p>
            </div>
          </div>
          <div id="team-slider">
            <div className="container">
              {products.map((value) => {
                return (
                  <div className="col-md-3">
                    <div className="team-column style-2">
                      <img
                        src={fileurl + value.file}
                        style={{ width: "150%" }}
                      />
                      <div className="player-name">
                        <div className="desination-2">{value.productname}</div>
                        <Link to="/viewsingleproduct" state={{ id: value.id }}>
                          <button type="button" class="btn btn danger">
                            {value.price} ₹
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Accessories;
