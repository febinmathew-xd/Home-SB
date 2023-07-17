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
          <div className="main-heading-holder" style={{paddingTop:'0px'}}>
            <div className="main-heading sytle-2" >
              <h2 style={{fontSize:'20px'}}>Sport Equipments</h2>
              
            </div>
          </div>
          <div id="team-slider">
            <div className="container">
              {products.map((value) => {
                return (
                  <div className="col-md-3">
                    <div className="team-column style-2" style={{borderRadius:'10px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}>
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
