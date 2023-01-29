/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import "../../assets/css/home.css";
import "../../assets/css/styles.css";
import "../../assets/css/develop.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from "../../assets/imgs/Website demo-02.jpg";

const Home = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
      AOS.init();
   }, []);

   let settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      centerMode: true,
      slidesToScroll: 2,
      variableWidth: true,
   };
   return (
      <>
         <section>
            <div className="banner">
               <img src={banner} alt="" />
               <div className="banner_copy">
                  <h3>Vì một cuộc sống tốt đẹp hơn cho mọi người</h3>
               </div>
               <a href="#newsHomeWap">
                  <span>
                     Cuộn <br /> xuống
                  </span>
                  <img src="https://vingroup.net/assets/images/scrolldown-icon.png" alt="" />
               </a>
            </div>

            <div className="newsHomeWap" id="newsHomeWap">
               <a href="/">
                  <h2>Tin tức sự kiện</h2>
               </a>
               <div className="newsHomeList">
                  <div className="itemNews">
                     <div className="img">
                        <img src="https://vtcnetviet.com/wp-content/uploads/2022/08/unnamed-1-1-1600x900.png" alt="" />
                     </div>
                     <div className="itemNews_copy">
                        <h3>Kênh truyền hình NETVIET mở rộng phủ sóng tại Canada </h3>
                        <p>22-08-2022</p>
                     </div>
                  </div>
                  <div className="itemNews">
                     <div className="img">
                        <img src="https://vtcnetviet.com/wp-content/uploads/2022/08/unnamed-5-1600x900.png" alt="" />
                     </div>
                     <div className="itemNews_copy">
                        <h3>VTC10 – NETVIET: Kênh truyền hình đầu tiên của Việt Nam lên sóng số mặt đất tại Mỹ</h3>
                        <p>22-08-2022</p>
                     </div>
                  </div>
                  <div className="itemNews">
                     <div className="img">
                        <img src="https://vtcnetviet.com/wp-content/uploads/2022/08/unnamed-4-1600x900.png" alt="" />
                     </div>
                     <div className="itemNews_copy">
                        <h3>
                           VTC10 – NETVIET là đại diện tại Việt Nam được Bloom Consulting lựa chọn để xây dựng chiến
                           lược truyền thông thương hiệu quốc gia
                        </h3>
                        <p>19-08-2022</p>
                     </div>
                  </div>
               </div>
               <div className="btn_wap">
                  <a href="/">Xem tất cả</a>
                  <p>
                     <FaArrowRight />
                  </p>
               </div>
            </div>
         </section>
         <section className="cateHomeWrap">
            <div className="container">
               <div className="contentwrap">
                  <div className="infoCate">
                     <div section=".cateHomeWrap" class="paralax-hor">
                        <h2>
                           Lĩnh vực <br />
                           <span>Tiên phong</span>
                        </h2>
                        <p>
                           Với mong muốn đem đến cho thị trường những sản phẩm - dịch vụ theo tiêu chuẩn quốc tế và
                           những trải nghiệm hoàn toàn mới về phong cách sống hiện đại, ở bất cứ lĩnh vực nào Vingroup
                           cũng chứng tỏ vai trò tiên phong, dẫn dắt sự thay đổi xu hướng tiêu dùng.
                        </p>
                        <div className="dragMouse">
                           <img src="https://vingroup.net/assets/images/mouse.png" alt="mouse" />
                           <p className="">
                              <img src="https://vingroup.net/assets/images/ar-drag-l.png" alt="" />
                              <span>Trượt để khám phá</span>
                              <img src="https://vingroup.net/assets/images/ar-drag-r.png" alt="" />
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="slidewidth">
                     <Slider {...settings}>
                        <div className="unit">
                           <div className="item cate-1">
                              <div className="ico">
                                 <img src="https://vingroup.net/assets/images/b.gif" alt="" />
                              </div>
                              <h2 style={{ height: 174 }}>
                                 Truyền thông - Báo chí <br />- Truyền hình
                              </h2>
                              <div className="content">
                                 <div
                                    className="img"
                                    style={{
                                       background:
                                          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOQmxMBBhOAh12VtAQV6FU9PYX1wVs35UANfyW0-5dbEY9mqgohvDxfUM_9GnTdrfOTU&usqp=CAU) center",
                                    }}
                                 >
                                    <img src="https://vingroup.net/assets/images/thumb-cate.gif" alt="" />
                                 </div>
                                 <div className="copy">
                                    <p />
                                    <a
                                       className="btn-2"
                                       href="/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep"
                                       tabIndex={0}
                                    >
                                       Xem thêm
                                    </a>
                                 </div>
                              </div>
                              <a
                                 className="link"
                                 href="/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep"
                                 tabIndex={0}
                                 data-metatip="zz"
                              />
                           </div>
                        </div>
                        <div className="unit">
                           <div className="item cate-1">
                              <div className="ico">
                                 <img src="https://vingroup.net/assets/images/b.gif" alt="" />
                              </div>
                              <h2 style={{ height: 174 }}>Đào tạo</h2>
                              <div className="content">
                                 <div
                                    className="img"
                                    style={{
                                       background:
                                          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOQmxMBBhOAh12VtAQV6FU9PYX1wVs35UANfyW0-5dbEY9mqgohvDxfUM_9GnTdrfOTU&usqp=CAU) center",
                                    }}
                                 >
                                    <img src="https://vingroup.net/assets/images/thumb-cate.gif" alt="" />
                                 </div>
                                 <div className="copy">
                                    <p />
                                    <a
                                       className="btn-2"
                                       href="/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep"
                                       tabIndex={0}
                                    >
                                       Xem thêm
                                    </a>
                                 </div>
                              </div>
                              <a
                                 className="link"
                                 href="/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep"
                                 tabIndex={0}
                                 data-metatip="true"
                              />
                           </div>
                        </div>
                        <div className="unit">
                           <div className="item cate-1">
                              <div className="ico">
                                 <img src="https://vingroup.net/assets/images/b.gif" alt="" />
                              </div>
                              <h2 style={{ height: 174 }}>Tổ Chức Sự Kiện</h2>
                              <div className="content">
                                 <div
                                    className="img"
                                    style={{
                                       background:
                                          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOQmxMBBhOAh12VtAQV6FU9PYX1wVs35UANfyW0-5dbEY9mqgohvDxfUM_9GnTdrfOTU&usqp=CAU) center",
                                    }}
                                 >
                                    <img src="https://vingroup.net/assets/images/thumb-cate.gif" alt="" />
                                 </div>
                                 <div className="copy">
                                    <p />
                                    <a
                                       className="btn-2"
                                       href="/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep"
                                       tabIndex={0}
                                    >
                                       Xem thêm
                                    </a>
                                 </div>
                              </div>
                              <a
                                 className="link"
                                 href="/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep"
                                 tabIndex={0}
                                 data-metatip="true"
                              />
                           </div>
                        </div>
                        <div className="unit">
                           <div className="item cate-1">
                              <div className="ico">
                                 <img src="https://vingroup.net/assets/images/b.gif" alt="" />
                              </div>
                              <h2 style={{ height: 174 }}>Giải Pháp Công Nghệ CĐF</h2>
                              <div className="content">
                                 <div
                                    className="img"
                                    style={{
                                       background:
                                          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOQmxMBBhOAh12VtAQV6FU9PYX1wVs35UANfyW0-5dbEY9mqgohvDxfUM_9GnTdrfOTU&usqp=CAU) center",
                                    }}
                                 >
                                    <img src="https://vingroup.net/assets/images/thumb-cate.gif" alt="" />
                                 </div>
                                 <div className="copy">
                                    <p />
                                    <a
                                       className="btn-2"
                                       href="/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep"
                                       tabIndex={0}
                                    >
                                       Xem thêm
                                    </a>
                                 </div>
                              </div>
                              <a
                                 className="link"
                                 href="/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep"
                                 tabIndex={0}
                                 data-metatip="true"
                              />
                           </div>
                        </div>
                        <div className="unit">
                           <div className="item cate-1">
                              <div className="ico">
                                 <img src="https://vingroup.net/assets/images/b.gif" alt="" />
                              </div>
                              <h2 style={{ height: 174 }}>Đầu Tư Và Hỗ trợ Khởi nghiệp</h2>
                              <div className="content">
                                 <div
                                    className="img"
                                    style={{
                                       background:
                                          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOQmxMBBhOAh12VtAQV6FU9PYX1wVs35UANfyW0-5dbEY9mqgohvDxfUM_9GnTdrfOTU&usqp=CAU) center ",
                                    }}
                                 >
                                    <img src="https://vingroup.net/assets/images/thumb-cate.gif" alt="" />
                                 </div>
                                 <div className="copy">
                                    <p />
                                    <a
                                       className="btn-2"
                                       href="/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep"
                                       tabIndex={0}
                                    >
                                       Xem thêm
                                    </a>
                                 </div>
                              </div>
                              <a
                                 className="link"
                                 href="/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep"
                                 tabIndex={0}
                                 data-metatip="true"
                              />
                           </div>
                        </div>
                        <div className="unit">
                           <div className="item cate-1">
                              <div className="ico">
                                 <img src="https://vingroup.net/assets/images/b.gif" alt="" />
                              </div>
                              <h2 style={{ height: 174 }}>Sản Xuất Nội Dung Số</h2>
                              <div className="content">
                                 <div
                                    className="img"
                                    style={{
                                       background:
                                          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOQmxMBBhOAh12VtAQV6FU9PYX1wVs35UANfyW0-5dbEY9mqgohvDxfUM_9GnTdrfOTU&usqp=CAU) center",
                                    }}
                                 >
                                    <img src="https://vingroup.net/assets/images/thumb-cate.gif" alt="" />
                                 </div>
                                 <div className="copy">
                                    <p />
                                    <a
                                       className="btn-2"
                                       href="/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep"
                                       tabIndex={0}
                                    >
                                       Xem thêm
                                    </a>
                                 </div>
                              </div>
                              <a
                                 className="link"
                                 href="/linh-vuc-hoat-dong/cong-nghe-br-cong-nghiep"
                                 tabIndex={0}
                                 data-metatip="true"
                              />
                           </div>
                        </div>
                     </Slider>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Home;
