import React from "react";
import styles from "../Footer/footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
   return (
      <section className={styles.footer}>
         <div className={styles.loading}>
            <div className={styles.container}>
               <div className={styles.row}>
                  <div className={styles.left}>
                     <div className={styles.content}>
                        <h4>Công ty cổ phần công nghệ & truyền thông VTC NETVIET</h4>
                        <p>© Bản quyền VTC NETVIET 2019</p>
                     </div>
                     <div>
                        <p>Kết nối với chúng tôi:</p>
                     </div>
                  </div>
                  <div className={styles.right}>
                     <ul>
                        <li>
                           <Link to="/">
                              <strong>Trang chủ</strong>
                           </Link>
                        </li>
                        <li>
                           <Link to="/gioi-thieu">
                              <strong>Giới thiệu Tập đoàn</strong>
                           </Link>
                        </li>
                        <li>
                           <Link to="/linh-vuc-hoat-dong/cong-nghe">
                              <strong>Lĩnh vực hoạt động</strong>
                           </Link>
                        </li>
                        <li>
                           <Link to="/quan-he-co-dong">
                              <strong>Quan hệ cổ đông</strong>
                           </Link>
                        </li>
                        <li>
                           <Link to="/phat-trien-ben-vung">
                              <strong>Phát triển bền vững</strong>
                           </Link>
                        </li>
                     </ul>
                     <ul>
                        <li>
                           <Link to="/tin-tuc-su-kien">Tin tức sự kiện</Link>
                        </li>
                        <li>
                           <Link to="https://tuyendung.vingroup.net/" target="_blank" rel="noopener noreferrer">
                              Tuyển dụng
                           </Link>
                        </li>
                        <li>
                           <Link to="/lien-he">Liên hệ</Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className={styles.botFooter}>
                  <p>
                     <Link to="">Chính sách quyền riêng tư</Link>
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Footer;
