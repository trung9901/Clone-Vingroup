import React from "react";
import { useEffect } from "react";
import "../../assets/css/activity.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import Activitynav from "../../components/menu-activity/menu";
const TechIndustry = () => {
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
            <img
               src="https://res.cloudinary.com/trung9901/image/upload/v1664246241/img_upload/xoygeuh7apw8kt1acyh2.jpg"
               alt=""
            />

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
                  className="img paralax-hor"
               >
                  <img
                     src="https://ircdn.vingroup.net/storage/Uploads/0_Tintuchoatdong/2022/Jan/vinfast-lux-sa20.jpg"
                     alt=""
                  />
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
                        Công nghệ <br />- Công nghiệp
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
               <h2 className="title">Lĩnh vực hoạt động</h2>
               <ul>
                  <li data-aos="fade-up" data-aos-duration="500">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep/422/vinfast">
                           <img
                              src="https://ircdn.vingroup.net/storage/public/2019/07/pic-vinfast-20190727T102926906653.jpg"
                              alt=""
                           />
                        </a>
                        <div>
                           <h2>Elearning </h2>
                           <a href="https://vinfastauto.com/vn_vi" target="_blank" rel="noreferrer">
                              Elearning.com
                           </a>
                        </div>
                        <p>
                           Nền tảng đào tạo trực tuyến cho thành công của doanh nghiệp. tối ưu nguồn lực đào tạo & nâng
                           cáo hiệu suất học tập
                        </p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep/422/vinfast">
                           Xem chi tiết
                        </a>
                     </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep/21/vinsmart">
                           <img
                              src="https://ircdn.vingroup.net/storage/Public/img-1-20190705T090940388187.jpg"
                              alt=""
                           />
                        </a>
                        <div>
                           <h2>Giải pháp quản trị nhân sự V-HRM</h2>
                           <a href="https://www.vsmart.net/en" target="_blank" rel="noreferrer">
                              www.vsmart.net
                           </a>
                        </div>
                        <p>
                           Giải pháp V-HRM tối ưu công tác quản lý nguồn nhân lực trong doanh nghiệp: Hỗ trợ xây dựng và
                           triển khai chiến lược nguồn nhân lực nhằm đảm bảo cung cấp nhân sự chất lượng và đáp ứng
                           đúng, đủ, kịp thời yêu cầu phát triển của công ty theo đúng quy trình.
                        </p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep/21/vinsmart">
                           Xem chi tiết
                        </a>
                     </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep/2419/vinai">
                           <img src="https://ircdn.vingroup.net/storage/Uploads/Logos/VinAI.png" alt="" />
                        </a>
                        <div>
                           <h2>Giải pháp Quản trị công việc/ dự án </h2>
                           <a href="https://www.vinai.io/" target="_blank" rel="noreferrer">
                              www.vinai.io
                           </a>
                        </div>
                        <p>
                           Bạn điều hành một công ty nhỏ hay một công ty lớn thì việc theo dõi các dự án, công việc của
                           đội nhóm luôn luôn là một thách thức. Đó là lý do vì sao các phần mềm quản lý công việc càng
                           trở nên quan trọng và cần thiết với bất kỳ công ty nào.Một trong những sự thật rõ ràng là có
                           đến 78% các dự án thành công cần phải quản lý bằng phần mềm quản lý công việc. Các công cụ
                           này giúp tạo ra một kế hoạch hoàn chỉnh, triển khai và hoàn thành dự án một cách rất hiệu
                           quả.
                        </p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep/2419/vinai">
                           Xem chi tiết
                        </a>
                     </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="500">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep/2426/vinbigdata">
                           <img src="https://ircdn.vingroup.net/storage/Uploads/Logos/2021/Vinbigdata.png" alt="" />
                        </a>
                        <div>
                           <h2>Giải pháp Quản lý quan hệ khách hàng V-CRM </h2>
                           <a href="https://vinbigdata.org/" target="_blank" rel="noreferrer">
                              vinbigdata.org
                           </a>
                        </div>
                        <p>
                           Đây là giải pháp giúp xây dựng mối quan hệ với khách hàng bằng cách tăng mức độ hài lòng và
                           tăng lòng trung thành của họ. V-CRM là nền tảng có giao diện tiện dụng, thân thiện mang lại
                           hiệu quả thu thập và quản lý dữ liệu khoa học cho doanh nghiệp.
                        </p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep/2426/vinbigdata">
                           Xem chi tiết
                        </a>
                     </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep/2424/vincss">
                           <img src="https://ircdn.vingroup.net/storage/Uploads/Logos/CSS.png" alt="" />
                        </a>
                        <div>
                           <h2>Giải pháp Quản lý dịch vụ Công nghệ thông tin V-Helpdesk </h2>
                           <a href="https://vincss.net/" target="_blank" rel="noreferrer">
                              vincss.net
                           </a>
                        </div>
                        <p>
                           Bạn đang khó khăn trong việc quản lý hỗ trợ khách hàng, quá nhiều kênh tương tác, không có
                           thông tin để đánh giá KPI cho nhân viên? V-Helpdesk Đơn giản hóa việc tạo ticket helpdesk,
                           quản lý tài sản CNTT và hỗ trợ người dùng cuối tốt hơn.
                        </p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep/2424/vincss">
                           Xem chi tiết
                        </a>
                     </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep/2420/vinhms">
                           <img src="https://ircdn.vingroup.net/storage/Public/VinHMS Logo.png" alt="" />
                        </a>
                        <div>
                           <h2>Giải pháp quản trị nguồn lực doanh nghiệp V-ERP</h2>
                           <a href="https://www.vinhms.com/en/" target="_blank" rel="noreferrer">
                              www.vinhms.com
                           </a>
                        </div>
                        <p>
                           ERP viết tắt của Enterprise Resource Planning (ERP) được hiểu là hệ thống hoạch định nguồn
                           lực doanh nghiệp. Cách thức hoạt động của hệ thống ERP đó là cho phép tất cả nhân sự trong
                           một tổ chức làm việc trên cùng một hệ thống (all-in-one) và chung một nguồn dữ liệu, thay vì
                           làm việc trên các phần mềm riêng lẻ và dữ liệu độc lập như trước đây..
                        </p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep/2420/vinhms">
                           Xem chi tiết
                        </a>
                     </div>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="500">
                     <div className="items">
                        <a href="/vi/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep/2423/vinbrain">
                           <img src="https://ircdn.vingroup.net/storage/Public/logo-VB.png" alt="" />
                        </a>
                        <div>
                           <h2>VinBrain</h2>
                           <a href="https://vinbrain.net/" target="_blank" rel="noreferrer">
                              vinbrain.net
                           </a>
                        </div>
                        <p>
                           VinBrain là công ty công nghệ tiên phong phát triển các sản phẩm ứng dụng trí tuệ nhân tạo
                           (AI) cho Y Tế.
                        </p>
                        <a className="btn-2" href="/vi/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep/2423/vinbrain">
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

export default TechIndustry;
