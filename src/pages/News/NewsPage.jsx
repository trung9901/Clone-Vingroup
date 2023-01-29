import React, { useEffect } from 'react'
import style from './NewsPage.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {FaAngleLeft,FaAngleRight,FaAngleDoubleRight} from 'react-icons/fa'
const NewsPage = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  const navigate = useNavigate()
   const handleChange = (e) => {
      const link = e.target.value
      navigate(`${link}`)
    };
  return (
    <div className={style.container}>
      <header>
        <div className={style.title} data-aos="fade-up" data-aos-duration="1000">
          <h3>Tin tức sự kiện</h3>
        </div>
        <ul className={style.tabList} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
          <li><NavLink className={({ isActive }) =>(isActive ? style.active : style.un_active)} to="/tin-tuc">Tất cả</NavLink></li>
          <li><NavLink className={({ isActive }) =>(isActive ? style.active : style.un_active)} to="/tin-tuc/vtc-net-viet">VTC NETVIET</NavLink></li>
          <li><NavLink className={({ isActive }) =>(isActive ? style.active : style.un_active)} to="/tin-tuc/truyen-thong">Truyền thông - Báo chí - Truyền hình</NavLink></li>
          <li><NavLink className={({ isActive }) =>(isActive ? style.active : style.un_active)} to="/tin-tuc/dao-tao">Đào tạo</NavLink></li>
          <li><NavLink className={({ isActive }) =>(isActive ? style.active : style.un_active)} to="/tin-tuc/to-chuc-su-kien">Tổ chức sự kiện</NavLink></li>
          <li><NavLink className={({ isActive }) =>(isActive ? style.active : style.un_active)} to="/tin-tuc/giai-phap-cong-nghe-cds">Giải pháp công nghệ CĐS</NavLink></li>
          <li><NavLink className={({ isActive }) =>(isActive ? style.active : style.un_active)} to="/tin-tuc/san-xuat-noi-dung-so">Sản xuất nội dung số</NavLink></li>
          <li><NavLink className={({ isActive }) =>(isActive ? style.active : style.un_active)} to="/tin-tuc/dau-tu-ho-tro-khoi-nghiep">Đầu tư và Hỗ trợ khởi nghiệp</NavLink></li>
        </ul>
        <select className="linkPage_dropdown" id="" onChange={handleChange} data-aos="fade-up" data-aos-duration="1000">
            <option value="/tin-tuc" >
              Tất cả
            </option>
            <option value="/tin-tuc/vtc-net-viet">
              VTC NETVIET
            </option>
            <option value="/tin-tuc/dao-tao">
            Truyền thông - Báo chí - Truyền hình
            </option>
            <option value="/tin-tuc/dao-tao">
            Đào tạo
            </option>
            <option value="/tin-tuc/to-chuc-su-kien">
            Tổ chức sự kiện
            </option>
            <option value="/tin-tuc/giai-phap-cong-nghe-cds">
            Giải pháp công nghệ CĐS
            </option>
            <option value="/tin-tuc/san-xuat-noi-dung-so">
            Sản xuất nội dung số
            </option>
            <option value="/tin-tuc/dau-tu-ho-tro-khoi-nghiep">
            Đầu tư và Hỗ trợ khởi nghiệp
            </option>
         </select>
      </header>
      <div>
        <Outlet/> 
      </div>
      <div className={style.paging}>
        <a href="#"  className='pt-4'><FaAngleLeft/></a>
        <span>1</span>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#" className='pt-4'>< FaAngleRight/></a>
        <a href="#" className='pt-4'><FaAngleDoubleRight/></a>
      </div>
    </div>
  )
}

export default NewsPage