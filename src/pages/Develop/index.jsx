import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaArrowRight, FaHome, FaAngleRight } from "react-icons/fa";
const Development = () => {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <div className="Developments">
         <div className="develop">
            <div className="develop_title">
               <a href="/">
                  <p className="mt-1">
                     <FaHome />
                  </p>
                  <p className="mt-1">
                     <FaAngleRight />
                  </p>
                  <p>Phát triển bền vững </p>
               </a>
            </div>
            <div className="develop_banner" data-aos="fade-up" data-aos-duration="1000">
               <img
                  src="https://ircdn.vingroup.net/storage/public/2019/07/DJI_0030-fixed2-mini-20190727T100030844048.jpg"
                  alt=""
               />
            </div>
            <div className="develop_copy">
               <h2>
                  Khát vọng <br /> <span>Tiên phong</span>
               </h2>
               <div className="develop_copy_content">
                  <p>
                     Vingroup đặt cho mình sứ mệnh "Vì một cuộc sống tốt đẹp hơn cho mọi người", với 3 nhóm hoạt động
                     trọng tâm là Công nghệ - Công nghiệp, Thương mại Dịch vụ, Thiện nguyện Xã hội.
                  </p>
               </div>
            </div>
         </div>
         <div className="develop_itemPageWap">
            <div className="w-[1200px] mx-auto grid grid-cols-3 gap-10">
               <div className="itemsDevelop">
                  <h3>
                     Văn hóa <br /> doanh nghiệp
                  </h3>
                  <p>
                     Những người có tư tưởng và hành động kỷ luật, có tài năng và bản lĩnh, có lòng yêu nước và tự tôn
                     dân tộc, hướng thiện và có tinh thần làm việc quyết liệt, triệt để vì những mục đích tốt đẹp.
                  </p>
                  <div className="btn_wap">
                     <a href="/">Xem chi tiết</a>
                     <p>
                        <FaArrowRight />
                     </p>
                  </div>
               </div>
               <div className="itemsDevelop">
                  <h3>
                     Chiến lược <br /> con người
                  </h3>
                  <p>
                     Những người có tư tưởng và hành động kỷ luật, có tài năng và bản lĩnh, có lòng yêu nước và tự tôn
                     dân tộc, hướng thiện và có tinh thần làm việc quyết liệt, triệt để vì những mục đích tốt đẹp.
                  </p>
                  <div className="btn_wap">
                     <a href="/">Xem chi tiết</a>
                     <p>
                        <FaArrowRight />
                     </p>
                  </div>
               </div>
               <div className="itemsDevelop">
                  <h3>
                     môi trường và <br /> cộng đồng
                  </h3>
                  <p>
                     Những người có tư tưởng và hành động kỷ luật, có tài năng và bản lĩnh, có lòng yêu nước và tự tôn
                     dân tộc, hướng thiện và có tinh thần làm việc quyết liệt, triệt để vì những mục đích tốt đẹp.
                  </p>
                  <div className="btn_wap">
                     <a href="/">Xem chi tiết</a>
                     <p>
                        <FaArrowRight />
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Development;
