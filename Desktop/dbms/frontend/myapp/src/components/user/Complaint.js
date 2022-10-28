import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Timeline1 from "./Timeline1";
import { logDOM } from "@testing-library/react";



const Complaint = props => {

return(
<div className="accordion">
  {/* <div className="accordion-item">
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        {props.ComplaintNo}
      </button>
    </h2>
    <div className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>{props.DepartmentIssue}</strong> {props.IssueDesc}<br></br>
        {<Timeline1/>}
      </div>
    </div>
  </div> */}

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      {props.ComplaintNo}
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>{props.DepartmentIssue}</strong> {props.IssueDesc} <br></br>
        {<Timeline1 />}
      </div>
    </div>
  </div>
  </div>

);

}

export default Complaint;