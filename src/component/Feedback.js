import React, { useState } from "react";
import Footer from "./Footer";
import { Link , useNavigate} from "react-router-dom";
import Header from "./Header";
import { Post } from "./service/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Feedback(){


    const [title, setTitle] = useState('');
    const [feedback, setFeedback] = useState('');
    
    const navigate = useNavigate();


    /* SETTING TITLE VALUE */

    function handleTitlechange(event) {

        setTitle(event.target.value);

    };

    /* SETTING FEEDBACK */

    function handleFeedbackChange(event) {
        setFeedback(event.target.value);
        console.log(feedback);
    }

    /* SUBBMIT FEEDBACK */

    function subbmitFeedback(event){
        event.preventDefault();

        const userdata = JSON.parse(localStorage.getItem("userdata"));
        

        let param = {
            userid:userdata.loginid,
            title: title,
            feedback: feedback,
            tablename:"feedback",
        };

        Post('save', param).then((data)=> {
           toast.success('Feedback sent sucessfully');
           setTimeout(() => {
            navigate("/");
          }, 2000);
        });




    }


    return(
        <>
        <Header/>
        <ToastContainer/>


    
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>

     
       <center> <h4  class="mb-4">Add your <span style={feedbackText}>Feedback</span> </h4></center>
        <div className="row justify-content-center">
        <center>
            <div className="col-lg-6">
            
                    <div className="row g-6">
                    <div className="col-sm-6">
                                <input type="text" onChange={handleTitlechange} className="form-control bg-light border-0 px-4" placeholder="Title" style={{height: '55px',position:"absolute",left:"500px"}} />
                            </div>
                            <br></br><br></br>
                        <br></br>   
                            <div className="col-sm-6">
                                <input type="textArea" onChange={handleFeedbackChange} className="form-control bg-light border-0 px-4" placeholder="Description" style={{height: '55px',position:"absolute",left:"500px"}} />
                            </div>
                        <br></br><br></br>
                        <br></br>   
                        
                        
                        <div className="col-sm-8">
                   <input type="submit" onClick={subbmitFeedback} className=""  value='Send' style={{position:"absolute",left:"500px", padding:'5px 30px', color:'whitesmoke', backgroundColor:'#ef4444', border:'none', outline:'none', borderRadius:'5px', fontWeight:'500',marginTop:'10px'}}/>
                           
                        </div>
                        <br></br>   <br></br>
                    </div>
                    
            </div>
            </center>  
        </div>
        <br/>
        <br/>
        <br/>
   


    </>
)
}

const feedbackText = {
    color: "red"
}
export default Feedback;