import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Activitynav = () => {
   const navigate = useNavigate()
   const handleChange = (e) => {
      console.log(e.target.value);
      const link = e.target.value
      navigate(`${link}`)
    };

   return (
      <>
         <div className="linkPage">
            <NavLink className={({ isActive }) => (isActive ? "activeLink" : "")} to="/activity/newspaper">
               TRUYỀN THÔNG - BÁO CHÍ - TRUYỀN HÌNH
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "activeLink" : "")} to="/activity/train">
               đào tạo
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "activeLink" : "")} to="/activity/event">
               tổ chức sự kiện
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "activeLink" : "")} to="/activity/tech">
               giải pháp công nghệ cđs
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "activeLink" : "")} to="/activity/digital-content">
               sản xuất nội dung số
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "activeLink" : "")} to="/activity/investment-suppport">
               đầu tư và hỗ trợ khởi nghiệp
            </NavLink>
         </div>
         <select className="linkPage_dropdown" id="" onChange={handleChange}>
            <option value="/activity/newspaper" className="linkPage_dropdown_select" >
               {" "}
            
                  TRUYỀN THÔNG - BÁO CHÍ - TRUYỀN HÌNH
         
            </option>
            <option value="/activity/train">
               {" "}
   
                  đào tạo
      
            </option>
            <option value="/activity/event">
               {" "}
             
                  tổ chức sự kiện

            </option>
            <option value="/activity/tech">
               {" "}
              
                  giải pháp công nghệ cđs
    
            </option>
            <option value="/activity/digital-content">
             
                  sản xuất nội dung số
 
            </option>
            <option value="/activity/investment-suppport">
             
                  đầu tư và hỗ trợ khởi nghiệp
          
            </option>
         </select>
         
      </>
   );
};

export default Activitynav;
