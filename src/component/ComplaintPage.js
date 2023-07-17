import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import { Post } from "./service/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ComplaintPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [turf, setTurf] = useState([]);
  const [title, setTitle] = useState('');
  const [complaint, setComplaint] = useState('');

  

  function handleTitlechange(event) {
    setTitle(event.target.value);
  };

  function handleComplaintChange(event){
    setComplaint(event.target.value);
  };

  function submitComplaint(event){
    event.preventDefault();

    const userdata = JSON.parse(localStorage.getItem("userdata"));

    let param = {
        userid:userdata.loginid,
        turfid:location.state.id,
        title: title,
        complaint:complaint,
        tablename:"complaints"
    }
    
    Post('save', param).then((data)=> {
        toast.success('Feedback sent sucessfully');
           setTimeout(() => {
            navigate("/notifications");
          }, 1000)
    })


  }

  useEffect(() => {
    let param = {
      id: location.state.id,
      tablename: "turf",
    };

    Post("getbyid", param).then((data) => {
      setTurf(data);
    });
  }, []);

  return (
    <>
      <Header />
      <ToastContainer />

      <br />
      <br />
      <br />
      <br />
      <br />

      <center>
        {" "}
        <h4 class="mb-4">
          {" "}
          <span style={reportStyle}>Report</span> {turf.username}
        </h4>
      </center>
      <div className="row justify-content-center">
        <center>
          <div className="col-lg-6">
            <div className="row g-6">
              <div className="col-sm-6">
                <input
                  type="text"
                  onChange={handleTitlechange} className="form-control bg-light border-0 px-4"
                  placeholder="Title"
                  style={{
                    height: "55px",
                    position: "absolute",
                    left: "500px",
                  }}
                />
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div className="col-sm-6">
                <input
                  type="textArea"
                  onChange={handleComplaintChange} className="form-control bg-light border-0 px-4"
                  placeholder="Description"
                  style={{
                    height: "55px",
                    position: "absolute",
                    left: "500px",
                  }}
                />
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div className="col-sm-8">
                <input
                  type="submit"
                  onClick={submitComplaint} className="btn btn-primary border-inner w-100 py-3"
                  value="Report"
                  style={{
                    height: "55px",
                    position: "absolute",
                    left: "500px",
                  }}
                />
              </div>
              <br></br> <br></br>
            </div>
          </div>
        </center>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

const reportStyle = {
  color: "red",
};

export default ComplaintPage;
