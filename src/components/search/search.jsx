import React from 'react'
import styles from '../search/search.module.css'
import { FaSearch } from 'react-icons/fa';
const Search = () => {
  return (
    <>

      <section className={styles.pSearch} >
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>KẾT QUẢ TÌM KIẾM</h2>
          </div>
          <form method="get" action="" >
            <div className={styles.formclass}>
              <div></div>
              <div className={styles.inputSearh}>
                <input type="text" name="keyword" placeholder="Tìm kiếm" className="w-[570px]" />
                <button class="btn1 text-white h-7"><FaSearch/></button>


              </div>
              <div></div>
            </div>

          </form>
          <div className={styles.formclass}>
            <div></div>
            <div>
              <p class="">Có 0 kết quả được tìm thấy</p>
            </div>
            <div></div>

          </div>
        </div>
      </section>

    </>

  )
}

export default Search