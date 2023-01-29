import React from 'react'
import style from './NewsPage.module.css'
import {FaHome,FaChevronRight} from 'react-icons/fa'
import {IoTimeOutline} from 'react-icons/io5'
const NewsPost = () => {
    return (
        <div className={style.post_container}>
            <div className={style.post_head}>
                <div className={style.nav_head}>
                    <a href="/"><FaHome/></a>
                    <FaChevronRight/>
                    <a href="/tin-tuc-su-kien">Tin tức sự kiện</a>
                    <FaChevronRight/>
                    <span>Tin Công nghiệp</span>
                </div>
                <div className={style.post_title}>
                    <h3>Tập huấn phổ cập kỹ năng số cộng đồng đến thành viên Tổ công nghệ số cộng đồng tại tỉnh Bến Tre</h3>
                </div>
                <p className='flex'><IoTimeOutline/>21-09-2022</p>
            </div>
            <div className={style.post}>
                <img src="https://res.cloudinary.com/trung9901/image/upload/v1664186244/img_upload/noslndbs8avxpgs3uij8.jpg" />
                <div className={style.post_content} id="post_font">
                    <p>
                        Chiều ngày 26/09/2022 Sở Thông tin và Truyền thông đã phối hợp Cục Chuyển đổi số Quốc gia – Bộ Thông tin và Truyền thông tổ chức hội nghị tập huấn Chương trình phổ cập kỹ năng số cộng đồng đến thành viên Tổ công nghệ số cộng đồng tại tỉnh Bến Tre.
                    </p>

                    <p>
                        Hội nghị được tổ chức trực tuyến từ Sở thông tin và truyền thông đến 9 điểm cầu UBND cấp huyện, 157 điểm cầu UBND cấp xã, với sự tham gia của gần 3.000 đại biểu nằm trong Tổ chuyển đổi số công đồng tại Bến Tre.

                        Quang cảnh chung Hội nghị Tập huấn.

                        Tại hội nghị các thành viên Tổ công nghệ số cộng đồng được các chuyên gia triển khai, hướng dẫn tổng quan về Tổ công nghệ số cộng đồng, hình thức và các nội dung triển khai của Chính phủ và những nhiệm vụ cần thiết của Tổ chuyển đổi số trong giai đoạn 4.0 và sự đồng hành đến người dân những tiện ích hằng ngày trong việc sử dụng các App, web… hiện nay tại Bến Tre để vận dụng các tiệc ích trong cuộc sống. Đặc biệt, hướng dẫn người dân chi tiết và các đặt các ứng dụng thanh toán không dung tiền mặt nhằm đảm bảo tính nhanh chóng thông qua các ứng dụng thanh toán.
                        Ông Huỳnh Trung Tính_Phó Giám đốc Sở thông tin và Truyền thông phát biểu tại Hội nghị .

                        Phát biểu tại hội nghị, Ông Bùi Trung Tính_Phó Giám đốc Sở thông tin và Truyền thông Bến Tre cho biết: Để chuyển đổi số được thành công và nhanh chóng thì phải lấy người dân làm trung tâm, toàn dân và toàn diện. Trong đó, định hướng kể từ ngay đầu năm 2022 là phải đưa hoạt động của người dân, doanh nghiệp lên môi trường số thông qua các nền tảng số, tiện ích số Việt Nam, người dân và doanh nghiệp biết cài đặt và sử dụng các ứng dụng, nền tảng, tiện ích số. Tổ công nghệ số cộng đồng có sứ mệnh hỗ trợ cho người dân sử dụng công nghệ số, đưa công nghệ số vào mọi ngõ ngách của cuộc sống; giúp người dân được tiếp cận công nghệ theo cách đơn giản, xuất phát từ nhu cầu thực tế và tạo ra giá trị thiết thực cho người dân trong cuộc sống.
                        <br />
                        Cũng trong Hội thảo, đại diện các Doanh nghiệp cung cấp dịch vụ và đồng hành chuyển đổi số tại địa phương như VNPT, VNPOST, Viettel…cũng đã trình bày và hướng dẫn các thành viên trong Tổ chuyển đối số công đồng các ứng dụng thanh toán không dung tiền mặt VNPT Money, Viettel Money, sàn thương mại điện tử Postmart, Voso… để các bạn nắm và triển khai hướng dẫn người dân cài đặt và sử dụng.
                    </p>
                </div>
            </div>
            <div className={style.sharePost}>
                <p>Chia sẻ:</p>
                <a href="/facebook.com"><i class="fa-brands fa-facebook fa-2x text-blue-700"></i></a>
                <a href="/facebook.com"><i class="fa-brands fa-google-plus fa-2x text-red-500"></i></a>
                <a href="/facebook.com"><i class="fa-solid fa-envelope fa-2x text-yellow-700"></i></a>
            </div>

            <div className={style.otherNews}>
                <h3>Tin tức khác</h3>
                <ul >
                    <li>
                        <a href="#">
                            <div className={style.otherNewsItems}>
                                <div className={style.otherNewsItemsImg}>
                                    <img src="https://res.cloudinary.com/trung9901/image/upload/v1664186343/img_upload/oyaexhrkxqrexul8finp.jpg" alt="" />
                                </div>
                                <div className={style.otherNewsItemsCopy}>
                                    <h3>Tin tức</h3>
                                    <h4>Tập huấn chuyển đổi số cho hơn 6.500 thành viên Tổ Công nghệ số cộng đồng tỉnh An Giang</h4>
                                    <p>21-09-2022</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className={style.otherNewsItems}>
                                <div className={style.otherNewsItemsImg}>
                                    <img src="http://chungsay.xyz/netviet/wp-content/uploads/2022/08/unnamed-1-1.png" alt="" />
                                </div>
                                <div className={style.otherNewsItemsCopy}>
                                    <h3>Tin tức</h3>
                                    <h4>Kênh truyền hình NETVIET mở rộng phủ sóng tại Canada</h4>
                                    <p>21-09-2022</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className={style.otherNewsItems}>
                                <div className={style.otherNewsItemsImg}>
                                    <img src="https://ircdn.vingroup.net/storage/Uploads/0_Tintuchoatdong/2022/Sep/Ahafast.jpg" alt="" />
                                </div>
                                <div className={style.otherNewsItemsCopy}>
                                    <h3>Tin tức</h3>
                                    <h4>VTC10 – NETVIET: Kênh truyền hình đầu tiên của Việt Nam lên sóng số mặt đất tại Mỹ</h4>
                                    <p>21-09-2022</p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NewsPost