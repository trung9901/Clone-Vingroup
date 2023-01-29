import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Activitynav from "../../components/menu-activity/menu";
const Commercialservice = () => {
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
            <img src="https://ircdn.vingroup.net/storage/Public/2022/QTT 22.jpg" alt="" />
            <Activitynav />
         </section>
         <section
            className="infoDetailPd stagger-up"
            style={{ visibility: "inherit", opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
         >
            <div className="container">
               <h2 className="title">Thông tin chi tiết</h2>
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
                  <img src="https://ircdn.vingroup.net/storage/Public/2.jpg" />
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
                        Thiện nguyện <br />
                        Xã hội
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
                        <a href="/vi/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi/421/vinschool">
                           <img src="https://ircdn.vingroup.net/storage/public/2019/07/Vinschool-20190725T024545261836.jpg" />
                        </a>
                        <div>
                           <h2>Vinschool</h2>
                           <a href="https://vinschool.edu.vn/en/home-page/" target="_blank" rel="noreferrer">
                              vinschool.edu.vn
                           </a>
                        </div>
                        <p>
                           Vinschool là hệ thống giáo dục không vì lợi nhuận, liên cấp từ bậc mầm non đến Trung học phổ
                           thông do Tập đoàn Vingroup đầu tư phát triển, hướng đến một ngôi trường Việt Nam mang đẳng
                           cấp quốc tế.{" "}
                        </p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi/421/vinschool">
                           Xem chi tiết
                        </a>
                     </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi/420/vinmec">
                           <img src="https://ircdn.vingroup.net/storage/public/2019/07/Vinmec-20190725T024751704309.jpg" />
                        </a>
                        <div>
                           <h2>Vinmec</h2>
                           <a href="http://vinmec.com/" target="_blank" rel="noreferrer">
                              vinmec.com
                           </a>
                        </div>
                        <p>
                           Vinmec là hệ thống y tế không vì lợi nhuận do Tập đoàn Vingroup đầu tư phát triển, với tầm
                           nhìn trở thành một hệ thống y tế hàn lâm vươn tầm quốc tế thông qua những nghiên cứu đột phá,
                           nhằm mang lại chất lượng điều trị xuất sắc và dịch vụ chăm sóc hoàn hảo.
                        </p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi/420/vinmec">
                           Xem chi tiết
                        </a>
                     </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi/2022/vinuni">
                           <img src="https://ircdn.vingroup.net/storage/public/2019/07/Vinuni-20190725T025753958227.jpg" />
                        </a>
                        <div>
                           <h2>VinUni</h2>
                           <a href="https://vinuni.edu.vn" target="_blank" rel="noreferrer">
                              vinuni.edu.vn
                           </a>
                        </div>
                        <p>
                           Trường Đại học VinUniversity (VinUni) là trường đại học tinh hoa, tư thục, không vì lợi nhuận
                           do Tập đoàn Vingroup sáng lập với khát vọng đào tạo nhân tài cho tương lai và đóng góp cho
                           đất nước một đại học xuất sắc mang đẳng cấp thế giới.
                        </p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi/2022/vinuni">
                           Xem chi tiết
                        </a>
                     </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="500">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi/2475/vinfuture">
                           <img src="https://ircdn.vingroup.net/storage/Public/2022/VFP.png" />
                        </a>
                        <div>
                           <h2>VinFuture </h2>
                           <a href="https://vinfutureprize.org" target="_blank" rel="noreferrer">
                              vinfutureprize.org
                           </a>
                        </div>
                        <p>Quỹ VinFuture là một quỹ độc lập, không vì lợi nhuận tại Việt Nam.</p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi/2475/vinfuture">
                           Xem chi tiết
                        </a>
                     </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi/2476/quy-thien-tam">
                           <img src="https://ircdn.vingroup.net/storage/Public/2022/QTT.png" />
                        </a>
                        <div>
                           <h2>Quỹ Thiện Tâm</h2>
                           <a href="http://quythientam.com/" target="_blank" rel="noreferrer">
                              quythientam.com
                           </a>
                        </div>
                        <p>
                           Quỹ Thiện Tâm là một tổ chức phi lợi nhuận thuộc Tập đoàn Vingroup, hoạt động vì mục đích
                           nhân đạo, từ thiện, nhằm “chuyển tải một cách nhanh chóng và hiệu quả nhất tấm lòng của người
                           Vingroup đến với cộng đồng”.
                        </p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi/2476/quy-thien-tam">
                           Xem chi tiết
                        </a>
                     </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi/2477/vinif">
                           <img src="https://ircdn.vingroup.net/storage/Public/2022/VinIF.png" />
                        </a>
                        <div>
                           <h2>VinIF</h2>
                           <a href="https://vinif.org/" target="_blank" rel="noreferrer">
                              vinif.org
                           </a>
                        </div>
                        <p>Quỹ Đổi mới sáng tạo Vingroup (VINIF) thuộc Viện Nghiên cứu Dữ liệu lớn (VNCDLL)</p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi/2477/vinif">
                           Xem chi tiết
                        </a>
                     </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="500">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi/2422/vinbiocare">
                           <img src="https://ircdn.vingroup.net/storage/Uploads/Logos/Vinbiocare.png" />
                        </a>
                        <div>
                           <h2>VinBioCare</h2>
                           <a href="#" target="_blank" />
                        </div>
                        <p>
                           VinBioCare thành lập vào tháng 6 năm 2021 với sứ mệnh “Vì một tương lai an toàn cho cộng
                           đồng”.
                        </p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi/2422/vinbiocare">
                           Xem chi tiết
                        </a>
                     </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi/2425/vinbus">
                           <img src="https://ircdn.vingroup.net/storage/Uploads/Logos/2021/Vinbus.png" />
                        </a>
                        <div>
                           <h2>VinBus</h2>
                           <a href="https://vinbus.vn/" target="_blank" rel="noreferrer">
                              vinbus.vn
                           </a>
                        </div>
                        <p>
                           Công ty TNHH Dịch vụ vận tải VinBus được thành lập năm 2019, hoạt động trong lĩnh vực vận tải
                           hành khách công cộng theo mô hình phi lợi nhuận.
                        </p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/thien-nguyen-br-xa-hoi/2425/vinbus">
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

export default Commercialservice;
