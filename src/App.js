import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import TechIndustry from "./pages/Activity/Tech-Industry"
import About from "./pages/About/about";
import Search from "./components/search/search";
import SocialVolunteering from "./pages/Activity/Social-Volunteering"
import Commercialservice from "./pages/Activity/Commercial-service"

import '@fortawesome/fontawesome-free/css/all.min.css';
import LayoutClinet from "./components/layouts/LayoutClient";
import Development from "./pages/Develop";
import NewsPage from "./pages/News/NewsPage";
import AllNews from "./components/NewsPage";
import NewsPost from "./pages/News/NewsPost";
import ScrollToTop from "./ultis/ScrollToTop";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutClinet />}>
        <Route index element={<Home />} />
        <Route path="phat-trien-ben-vung" element={<Development />} />
        {/* activity */}
          <Route path="activity/newspaper" element={<TechIndustry />} />
          <Route path="activity/train" element={<SocialVolunteering />} />
          <Route path="activity/event" element={<Commercialservice />} />
          <Route path="activity/tech" element={<Commercialservice />} />
          <Route path="activity/digital-content" element={<Commercialservice />} />
          <Route path="activity/investment-suppport" element={<Commercialservice />} />

       
        <Route path="tin-tuc" element={<NewsPage />}>
          <Route index element={<AllNews />} />
          <Route path="vtc-net-viet" element={<AllNews />} />
          <Route path="truyen-thong" element={<AllNews />} />
          <Route path="dao-tao" element={<AllNews />} />
          <Route path="to-chuc-su-kien" element={<AllNews />} />
          <Route path="giai-phap-cong-nghe-cds" element={<AllNews />} />
          <Route path="san-xuat-noi-dung-so" element={<AllNews />} />
          <Route path="dau-tu-ho-tro-khoi-nghiep" element={<AllNews />} />
        </Route>
        <Route path="tin-tuc/bai-viet" element={<NewsPost/>}/>
            <Route path="/about">
            <Route index element={<About />} />
         </Route>
           <Route path="/search">
            <Route index element={<Search />} />
         </Route>
      </Route>
    </Routes>
    <ScrollToTop/>
    </BrowserRouter>
  );


}

export default App;
