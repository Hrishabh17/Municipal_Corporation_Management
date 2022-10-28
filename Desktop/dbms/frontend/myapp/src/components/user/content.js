import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Complaint from "./Complaint";
import Timeline1 from "./Timeline1";


const UserBody = () =>{

return(
<div className="mt-24">
{/* <head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link></head> */}

<h1>Welcome Sarvesh!!</h1><br></br><br></br>
<div>


<Complaint 
key = "1"
ComplaintNo = "Complaint 1"
DepartmentIssue = "Water issue:"
IssueDesc = "Contaminated water supply"
/>

<Complaint 
key = "2"
ComplaintNo = "Complaint 2"
DepartmentIssue = "Electricity issue:"
IssueDesc = "Frequent power cuts"
/>

<Complaint 
key = "3"
ComplaintNo = "Complaint 3"
DepartmentIssue = "Infrastructure issue:"
IssueDesc = "Potholes everywhere"
/>


  {/* <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Complaint 2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Electricity issue:</strong> Frequent power cuts <br></br>
        {<Timeline1 />}
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Complaint 3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Infrastructure issue:</strong> Potholes everywhere <br></br>
        {<Timeline1 />}
      </div>
    </div>
  </div> */}
</div>
</div>
);

}

export default UserBody;