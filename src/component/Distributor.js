import React from "react";
import { Link } from "react-router-dom";

function Distributor()
{
    return(
        <>
        
        <div className="content">
            
              
                 
                {/*<div className="col-sm-12 col-xl-12">*/}
            <div className="row" style={{position:'absolute',top:'100px',left:'500px'}}>
        <div className="col-md-6">
            <h1>REGISTER AS DISTRIBUTOR</h1>
            <br/>
                {/*<div className="bg-secondary rounded h-100 p-4">*/}
                  <div className="form-floating mb-4">
                
                        
                       <input type="name" className="form-control" id="floatingInput"
                            placeholder="Name" style={{width:'500%'}} />
                        {/*<label for="floatingInput">Name</label>*/}
                  
                    </div>
                    
                     <div className="form-floating mb-3">
                     
                        <input type="address" className="form-control" id="floatingInput"
                            placeholder="Address"style={{width:'500%'}}/>
                        {/*<label for="floatingInput">Address</label>*/}
                    
                    </div>
            
                    <div className="form-floating mb-3">
                   
                        <input type="name" className="form-control" id="floatingInput"
                            placeholder="Contact Number"style={{width:'500%'}} />
                        {/*<label for="floatingInput">Contact Number</label>*/}
                    
                    </div>
                    
                    <div className="form-floating mb-3">
                   
                        <input type="numbers" className="form-control" id="floatingInput"
                            placeholder="Email Id"style={{width:'500%'}} />
                        {/*<label for="floatingInput">Email</label>*/}
                      
                    </div>
                    <div className="form-floating mb-3">
                    
                        <input type="name" className="form-control" id="floatingInput"
                            placeholder="Password" style={{width:'500%'}}/>
                        
                        {/*<label for="floatingInput">Password</label>*/}
                    </div>
                    
                      <div>
                        
                   <label for="floatingInput">I have already an account</label>
                    <Link to="/login" className="btn btn-primary" style={{backgroundColor:'#16aeeb',width:'90px'}}>Login</Link>
                    </div>
                            <button type ="button" className="btn btn-danger ml-2"to="/delete" style={{position:'absolute',top:'386px',left:'120px',width:'90px'}}>Sign Up</button>
                            
                </div>
                </div>
                 </div>
                 <img src="/images/dis12.jpg" align="right" width="350" height="260"/>
                 <img src="/images/dis55.jpg" align="left" width="350" height="740"/>
                 
                
                
                 </>
  );
}
export default  Distributor;
