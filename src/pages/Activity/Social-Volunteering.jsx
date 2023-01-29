import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Activitynav from "../../components/menu-activity/menu";
const SocialVolunteering = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
      AOS.init();
   }, []);
   return (
      <>
         <section
            className="bannerPd stagger-up"
            style={{ visibility: "inherit", opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
         >
            <img src="https://ircdn.vingroup.net/storage/public/2019/07/DJI_0030-fixed2-mini-20190727T100030844048.jpg" />
            <Activitynav />
         </section>
         <section
            className="infoDetailPd stagger-up"
            style={{ visibility: "inherit", opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
         >
            <div className="container">
               <h2 className="title">Thông tin chi tiết</h2>
               <p>
                  <span>
                     Với mảng Thương mại Dịch vụ - Vingroup tiếp tục đẩy mạnh, hoàn thiện và nâng cấp chất lượng cũng
                     như hiệu quả hoạt động. Thương mại dịch vụ là hệ sinh thái quan trọng để hỗ trợ công tác nghiên cứu
                     và thương mại hóa các sản phẩm công nghệ - công nghiệp.
                  </span>
               </p>
            </div>
         </section>
         <section className="historyPd">
            <div className="container">
               <div
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  section=".historyPd"
                  data={-200}
                  className="img paralax-hor"
               >
                  <img src="https://ircdn.vingroup.net/storage/Uploads/0_Banner Quang cao/vo.jpg" />
               </div>
               <div
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  section=".historyPd"
                  data={200}
                  className="copy paralax-hor"
                
               >
                  <div>
                     <h2>2022</h2>
                     <h3>
                        Thương mại <br />
                        Dịch vụ
                     </h3>
                     <p>
                        Vingroup đặt cho mình sứ mệnh "Vì một cuộc sống tốt đẹp hơn cho mọi người", với 3 nhóm hoạt động
                        trọng tâm là Công nghệ - Công nghiệp, Thương mại Dịch vụ, Thiện nguyện Xã hội.
                     </p>
                  </div>
               </div>
            </div>
         </section>
         <section className="partnertPd">
            <div className="container">
               <h2 className="title">Các thương hiệu</h2>
               <ul>
                  <li data-aos="fade-up" data-aos-duration="500">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/thuong-mai-br-dich-vu/418/vinhomes">
                           <img src="https://ircdn.vingroup.net/storage/public/2019/07/tri_edited-20190727T121014304441.jpg" />
                        </a>
                        <div>
                           <h2>Vinhomes</h2>
                           <a href="https://vinhomes.vn/en" target="_blank" rel="noreferrer">
                              vinhomes.vn
                           </a>
                        </div>
                        <p>Hệ thống căn hộ, biệt thự và nhà phố thương mại với dịch vụ đẳng cấp.</p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/thuong-mai-br-dich-vu/418/vinhomes">
                           Xem chi tiết
                        </a>
                     </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/thuong-mai-br-dich-vu/2019/vinpearl">
                           <img src="https://ircdn.vingroup.net/storage/public/2019/07/Vinpearl-20190725T024431212822.jpg" />
                        </a>
                        <div>
                           <h2>Vinpearl</h2>
                           <a href="https://vinpearl.com/en" target="_blank" rel="noreferrer">
                              vinpearl.com
                           </a>
                        </div>
                        <p>
                           Tự hào là thương hiệu dẫn đầu, đại diện cho ngành khách sạn du lịch nghỉ dưỡng tại Việt Nam,
                           Vinpearl mang trong mình sứ mệnh nâng tầm trải nghiệm nghỉ dưỡng, mang đến những kỳ nghỉ 5
                           sao cho du khách Việt Nam và du khách quốc tế.
                        </p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/thuong-mai-br-dich-vu/2019/vinpearl">
                           Xem chi tiết
                        </a>
                     </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/thuong-mai-br-dich-vu/419/vincom">
                           <img src="https://ircdn.vingroup.net/storage/public/2019/07/Vincom-20190725T024507128926.jpg" />
                        </a>
                        <div>
                           <h2>Vincom</h2>
                           <a href="http://vincom.com.vn/" target="_blank" rel="noreferrer">
                              vincom.com.vn
                           </a>
                        </div>
                        <p>
                           Vincom là thương hiệu bất động sản bán lẻ hàng đầu Việt Nam với 4 dòng sản phẩm là Vincom
                           Center, Vincom Mega Mall, Vincom Plaza và Vincom+.
                        </p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/thuong-mai-br-dich-vu/419/vincom">
                           Xem chi tiết
                        </a>
                     </div>
                  </li>
               </ul>
            </div>
         </section>
      </>
   );
};

export default SocialVolunteering;
