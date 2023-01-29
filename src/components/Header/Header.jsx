import React, { useState } from "react";
import Logo from "../Logo/logo";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
   const [isActive, setActive] = useState(false);
   const ToggleClass = () => {
      setActive(!isActive);
   };
   return (
      <div className="">
         <div className="header">
            <div className={isActive ? "header_container active" : "header_container"}>
               <Logo />
               <div className="menu_nav" onClick={() => ToggleClass()}>
                  <div className={isActive ? "bar animate" : "bar"}></div>
               </div>
               <div className={isActive ? "bot_header active" : "bot_header"}>
                  <a href="/search">
                     <p className="icon_search text-[#cacaca] text-[25px] text-center translate-x-1/3 pb-2 hover:text-black">
                        <FaSearch />
                     </p>
                  </a>
                  <p>
                     <a href="/">EN</a>
                     <em>|</em>
                     <span href="/">VN</span>
                  </p>
               </div>
            </div>
            <div className={isActive?"menu":"hidden"}>
                <nav>
                    <ul id='nav'>
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="/about">Giới thiệu công ty</a></li>
                        <li className='hasSub'>
                            <a href="activity/newspaper">Lĩnh vực hoạt động</a>
                            <div className='submenu'>
                                <a href="activity/newspaper">TRUYỀN THÔNG - BÁO CHÍ - TRUYỀN HÌNH</a>
                                <a href="/activity/train">đào tạo</a>
                                <a href="/activity/event">tổ chức sự kiện</a>
                                <a href="/activity/tech">giải pháp công nghệ cđs</a>
                                <a href="/activity/digital-content">sản xuất nội dung số</a>
                                <a href="/activity/investment-suppport">đầu tư và hỗ trợ khởi nghiệp</a>
                            </div>
                        </li>
                        <li><a href="/phat-trien-ben-vung">Phát triển bền vững</a></li>
                    
                        <li><a href="/tin-tuc">Tin tức sự kiện</a></li>
                    </ul>
                    <div className='sub_link'>
                        <a href="http://tuyendung.vtcnetviet.com">Tuyển dụng</a>
                        <a href="/">liên hệ</a>
                    </div>
                </nav>
            </div>
         </div>
      </div>
   );
};

export default Header;
