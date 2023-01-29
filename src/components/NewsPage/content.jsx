import React from 'react'
import style from '../../pages/News/NewsPage.module.css'
const Content = () => {
  const data = [
    {
      link: "/tin-tuc/bai-viet",
      img: "https://ircdn.vingroup.net/storage/Uploads/0_Tintuchoatdong/2022/Sep/TBG.JPG",
      description: "Tin y tế",
      title: "VINMEC GHÉP TẾ BÀO GỐC MANG LẠI CUỘC SỐNG MỚI CHO HƠN 1.000 NGƯỜI",
      date: "21-09-2022"
    },
    {

    }
  ]
  return (
    <div>
      <ul className={style.New_List} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <li>
          <a href="/tin-tuc/bai-viet">
            <div className={style.item_News}>
              <div className={style.img}>
                <img src="https://res.cloudinary.com/trung9901/image/upload/v1664186244/img_upload/noslndbs8avxpgs3uij8.jpg" alt="" />
              </div>
              <div className={style.New_List_copy}>
                <h4>Tin tức</h4>
                <h3>Tập huấn phổ cập kỹ năng số cộng đồng đến thành viên Tổ công nghệ số cộng đồng tại tỉnh Bến Tre</h3>
                <p>21-09-2022</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="/tin-tuc/bai-viet">
            <div className={style.item_News}>
              <div className={style.img}>
                <img src="https://res.cloudinary.com/trung9901/image/upload/v1664186343/img_upload/oyaexhrkxqrexul8finp.jpg" alt="" />
              </div>
              <div className={style.New_List_copy}>
                <h4>Tin tức</h4>
                <h3>Tập huấn chuyển đổi số cho hơn 6.500 thành viên Tổ Công nghệ số cộng đồng tỉnh An Giang</h3>
                <p>21-09-2022</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="/tin-tuc/bai-viet">
            <div className={style.item_News}>
              <div className={style.img}>
                <img src="http://chungsay.xyz/netviet/wp-content/uploads/2022/08/unnamed-1-1.png" alt="" />
              </div>
              <div className={style.New_List_copy}>
                <h4>Tin tức</h4>
                <h3>Kênh truyền hình NETVIET mở rộng phủ sóng tại Canada</h3>
                <p>21-09-2022</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="/tin-tuc/bai-viet">
            <div className={style.item_News}>
              <div className={style.img}>
                <img src="https://vtcnetviet.com/wp-content/uploads/2022/08/unnamed-5-1600x900.png" alt="" />
              </div>
              <div className={style.New_List_copy}>
                <h4>Tin tức</h4>
                <h3>VTC10 – NETVIET: Kênh truyền hình đầu tiên của Việt Nam lên sóng số mặt đất tại Mỹ</h3>
                <p>21-09-2022</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="/tin-tuc/bai-viet">
            <div className={style.item_News}>
              <div className={style.img}>
                <img src="https://vtcnetviet.com/wp-content/uploads/2022/08/unnamed-1-1600x900.png" alt="" />
              </div>
              <div className={style.New_List_copy}>
                <h4>Tin tức</h4>
                <h3>VTC NETVIET – Xây dựng và vận hành hệ thống kênh truyền thông số</h3>
                <p>21-09-2022</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Content