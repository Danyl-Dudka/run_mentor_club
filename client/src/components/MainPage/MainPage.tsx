import MainPageBody from "./MainPageBody/MainPageBody";
import MainPageFooter from "./MainPageFooter/MainPageFooter";
import MainPageHeader from "./MainPageHeader/MainPageHeader";
import './mainPage.css';

export default function MainPage() {
  return (
    <div className="main_page">
      <div className="main_page_header">
        <MainPageHeader />
      </div>
      <div className="main_page_body">
        <MainPageBody />
      </div>
      <div className="main_page_footer">
        <MainPageFooter />
      </div>
    </div>
  )
}
