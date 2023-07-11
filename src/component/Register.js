import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Post } from "./service/Api";
function Register() {
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  const [username, setUsername] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();

  const options = {
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"],
  };
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      setAddress(place.name);
      setLat(lat);
      setLng(lng);
    });
  }, []);

  const save = () => {
    let param = {
      tablename: "user",
      username: username,
      usertype: 1,
      contact: contact,
      email: email,
      password: password,
      address: address,
      description: description,
      lat: lat,
      lng: lng,
    };

    Post("saveuser", param).then((data) => {
      toast.success("Registered Successful");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="content">
        <div
          className="row"
          style={{ position: "absolute", top: "100px", left: "500px" }}
        >
          <div className="col-md-6">
            <h1>REGISTER</h1>
            <br />
            <div className="form-floating mb-4">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Name"
                style={{ width: "500%", marginBottom: 20 }}
              />
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Address"
                ref={inputRef}
                style={{ width: "500%", marginBottom: 20 }}
              />
            </div>

            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="Contact Number"
                onChange={(e) => setContact(e.target.value)}
                style={{ width: "500%", marginBottom: 20 }}
              />
            </div>

            <div className="form-floating mb-3">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="Email Id"
                style={{ width: "500%", marginBottom: 20 }}
              />
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="floatingInput"
                placeholder="Password"
                style={{ width: "500%", marginBottom: 20 }}
              />
            </div>
            <button
              type="button"
              className="btn btn-danger ml-2"
              style={{
                position: "absolute",
                top: "380px",
                left: "120px",
                width: "100px",
              }}
              onClick={() => save()}
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <img src="/images/reg3img.png" align="right" width="350" height="400" />
      <img src="/images/reg2img.png" align="left" width="350" height="600" />
    </>
  );
}
export default Register;
