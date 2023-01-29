import { Link } from "react-router-dom";
import styles from "./about.module.css";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHome, FaAngleRight, FaArrowRight, FaArrowLeft } from "react-icons/fa";
const About = () => {
   useEffect(() => {
      AOS.init();
   });
   const ref = useRef({});

   const next = () => {
      ref.current.slickNext();
   };

   const previous = () => {
      ref.current.slickPrev();
   };
   let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 3,
      autoplay: true,
      rows: 2,
      slidesToShow: 3,
   };
   return (
      <>
         <div className={styles.pIntroduction}>
            <section className={styles.introWrap} data-aos="fade-up" data-aos-duration="1000">
               <div className={styles.container}>
                  <div className={styles.iconhome}>
                     <div className={styles.icon}>
                        <Link to="/">
                           <button className="text-[#ccc] mt-1">
                              <FaHome />
                           </button>
                        </Link>
                     </div>
                     <div className="text-[#ccc] mt-1">
                        <FaAngleRight />
                     </div>
                     <div>
                        <p>GIỚI THIỆU CHUNG</p>
                     </div>
                  </div>
                  <div className={styles.content} id='about_font'>
                     <div class={styles.banner}>
                        <img src="https://ircdn.vingroup.net/storage/public/2019/07/DJI_0030-fixed2-mini-20190727T100030844048.jpg" />
                     </div>
                     <h2 className={styles.title}>VTC NETVIET</h2>
                     <p>
                        Thành lập từ năm 2008, NETVIET là công ty truyền thông đa phương tiện thuộc Tổng công ty VTC.
                        NETVIET là đơn vị có kinh nghiệm hơn 10 năm trong lĩnh vực sản xuất chương trình truyền hình với
                        việc sáng tạo và xây dựng kênh truyền hình VTC10 – kênh đối ngoại, thông tin kinh tế đầu tư – xã
                        hội, quảng bá văn hóa du lịch tới cộng đồng người Việt Nam ở nước ngoài và khách nước ngoài uy
                        tín nhất của Việt Nam. Với vị thế đó, NETVIET đang phát triển trở thành đơn vị tư vấn, xây dựng
                        và thực hiện chiến lược truyền thông hình ảnh địa phương, chính sách cho các bộ ban ngành và
                        chính phủ. Ngoài ra còn là đơn vị sản xuất nội dung, xây dựng kênh truyền thông và dịch vụ
                        truyền thông chuyên nghiệp, uy tín, hiệu quả. Tới nay đối tác của NETVIET bao gồm các bộ ban
                        ngành trung ương và hơn 30 địa phương trên khắp cả nước
                     </p>
                     <p>
                        Công ty Cổ phần Công nghệ và Truyền thông VTC NETVIET thuộc Tổng Công ty VTC – Bộ Thông tin &
                        Truyền thông được thành lập năm 2008, với nhiệm vụ ban đầu là tạo lập kênh truyền hình VTC10 –
                        NETVIET trở thành kênh truyền hình đối ngoại, quảng bá hình ảnh Việt Nam chuyên về kinh tế đầu
                        tư, văn hóa du lịch.
                     </p>

                     <p>
                        Từ thế mạnh về sản xuất chương trình truyền hình, VTC NETVIET đã từng bước trở thành đơn vị
                        truyền thông đa phương tiện, cung Cấp Giải Pháp, tư vấn Chiến Lược và cung cấp dịch vụ Truyền
                        Thông Thương Hiệu Hình Ảnh Địa Phương, Truyền Thông Chính Sách..{" "}
                     </p>
                  </div>
               </div>
            </section>

            <section className={styles.itemPageWrap}>
               <div className={styles.container}>
                  <ul className={styles.Aboutcommit} id='aboutcommit_font'>
                     <li className={styles.information}  data-aos="fade-up" data-aos-duration="500">
                        <div className={styles.about} >
                           <h3>
                              Đội ngũ <br /> Nhân sự{" "}
                           </h3>
                           <p>
                              Trải qua chặng đường dài trưởng thành và phát triển, chính những con người Vingroup đã làm
                              nên những giá trị tốt đẹp, đóng góp vào thành công của Tập đoàn hôm nay.
                           </p>
                           <div className={styles.btn2}>
                              <div>
                                 <Link href={""}>Xem chi tiết</Link>
                              </div>
                              <div>
                                 <FaArrowRight />
                              </div>
                           </div>
                        </div>
                     </li>
                     <li className={styles.information} data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                        <div className={styles.about}>
                           <h3>
                              Đội ngũ <br /> Nhân sự{" "}
                           </h3>
                           <p>
                              Trải qua chặng đường dài trưởng thành và phát triển, chính những con người Vingroup đã làm
                              nên những giá trị tốt đẹp, đóng góp vào thành công của Tập đoàn hôm nay.
                           </p>
                           <div className={styles.btn2}>
                              <div>
                                 <Link href={""}>Xem chi tiết</Link>
                              </div>
                              <div>
                                 <FaArrowRight />
                              </div>
                           </div>
                        </div>
                     </li>
                     <li className={styles.information} data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
                        <div className={styles.about}>
                           <h3>
                              Đội ngũ <br /> Nhân sự{" "}
                           </h3>
                           <p>
                              Trải qua chặng đường dài trưởng thành và phát triển, chính những con người Vingroup đã làm
                              nên những giá trị tốt đẹp, đóng góp vào thành công của Tập đoàn hôm nay.
                           </p>
                           <div className={styles.btn2}>
                              <div>
                                 <Link href={""}>Xem chi tiết</Link>
                              </div>
                              <div>
                                 <FaArrowRight />
                              </div>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </section>
         </div>
         <section className={styles.partnerWrap}>
            <div className={styles.container}>
               <div className={styles.contemitem}>
                  <div className={styles.items} data-aos="fade-right">
                     <h2 className={styles.title}>CÁC THƯƠNG HIỆU</h2>
                     <p>
                        Với mong muốn đem đến cho thị trường những sản phẩm - dịch vụ theo tiêu chuẩn quốc tế và những
                        trải nghiệm hoàn toàn mới về phong cách sống hiện đại, ở bất cứ lĩnh vực nào Vingroup cũng chứng
                        tỏ vai trò tiên phong, dẫn dắt sự thay đổi xu hướng tiêu dùng.{" "}
                     </p>
                  </div>
                  <div className={styles.itemconten} data-aos="fade-left">
                     <div className={styles.itemconten_btn}>
                        <button
                           className="itemconten_btn_prev mx-10 text-[#888888] text-[50px]"
                           onClick={() => previous()}
                        >
                           <FaArrowLeft />
                        </button>
                        <button className="itemconten_btn_next text-[#888888] text-[50px]" onClick={() => next()}>
                           <FaArrowRight />
                        </button>
                     </div>
                     <Slider className={styles.slider} ref={ref} {...settings}>
                        <div>
                           <img
                              src="https://ircdn.vingroup.net/storage/public/2019/07/Logo_vinuni-20190724T080031613411.png"
                              alt=""
                           />
                        </div>
                        <div>
                           <img
                              src="https://ircdn.vingroup.net/storage/public/2019/07/Logo_vinuni-20190724T080031613411.png"
                              alt=""
                           />
                        </div>
                        <div>
                           <img
                              src="https://ircdn.vingroup.net/storage/public/2019/07/Logo_vinuni-20190724T080031613411.png"
                              alt=""
                           />
                        </div>
                        <div>
                           <img
                              src="https://ircdn.vingroup.net/storage/public/2019/07/Logo_vinuni-20190724T080031613411.png"
                              alt=""
                           />
                        </div>
                        <div>
                           <img
                              src="https://ircdn.vingroup.net/storage/public/2019/07/Logo_vinuni-20190724T080031613411.png"
                              alt=""
                           />
                        </div>
                        <div>
                           <img
                              src="https://ircdn.vingroup.net/storage/public/2019/07/Logo_vinuni-20190724T080031613411.png"
                              alt=""
                           />
                        </div>
                        <div>
                           <img
                              src="https://ircdn.vingroup.net/storage/public/2019/07/Logo_vinuni-20190724T080031613411.png"
                              alt=""
                           />
                        </div>
                        <div>
                           <img
                              src="https://ircdn.vingroup.net/storage/public/2019/07/Logo_vinuni-20190724T080031613411.png"
                              alt=""
                           />
                        </div>
                        <div>
                           <img
                              src="https://ircdn.vingroup.net/storage/public/2019/07/Logo_vinuni-20190724T080031613411.png"
                              alt=""
                           />
                        </div>
                        <div>
                           <img
                              src="https://ircdn.vingroup.net/storage/public/2019/07/Logo_vinuni-20190724T080031613411.png"
                              alt=""
                           />
                        </div>
                        <div>
                           <img
                              src="https://ircdn.vingroup.net/storage/public/2019/07/Logo_vinuni-20190724T080031613411.png"
                              alt=""
                           />
                        </div>
                        <div>
                           <img
                              src="https://ircdn.vingroup.net/storage/public/2019/07/Logo_vinuni-20190724T080031613411.png"
                              alt=""
                           />
                        </div>
                     </Slider>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default About;
