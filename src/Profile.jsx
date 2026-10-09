import React from "react";
import { useNavigate } from "react-router-dom";


function Profile() {
     const navigate = useNavigate();
  return (
    <div id=" container">
    <h1>Who is Watching?</h1>
    <div id="flex">
    <img className="profile" src="/img/profile1.jpg" alt="" onClick={()=> navigate("/about")} />
    <img className="profile" src="/img/profile2.jpg" alt="" />
    <img className="profile" src="/img/kids.webp" alt=""onClick={()=> navigate("/Kids")} />
  
    </div>
    <div id="name">
      <h2>laddu</h2>
    <h2>indhu</h2>
    <h2>kids</h2>
    </div>
     </div>
  );
 
}


export default Profile;