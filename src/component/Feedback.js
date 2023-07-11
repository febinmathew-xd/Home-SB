import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Header from "./Header";

function Feedback(){
    return(
        <>
        <Header/>


    
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>

     
       <center> <h4 class="mb-4">Add your Feedback</h4></center>
        <div className="row justify-content-center">
        <center>
            <div className="col-lg-6">
            
                    <div className="row g-6">
                    <div className="col-sm-6">
                                <input type="text" className="form-control bg-light border-0 px-4" placeholder="Title" style={{height: '55px',position:"absolute",left:"500px"}} />
                            </div>
                            <br></br><br></br>
                        <br></br>   
                            <div className="col-sm-6">
                                <input type="textArea" className="form-control bg-light border-0 px-4" placeholder="Description" style={{height: '55px',position:"absolute",left:"500px"}} />
                            </div>
                        <br></br><br></br>
                        <br></br>   
                        
                        
                        <div className="col-sm-8">
                   <input type="submit" className="btn btn-primary border-inner w-100 py-3"  value='add' style={{height: '55px',position:"absolute",left:"500px"}}/>
                           
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
export default Feedback;