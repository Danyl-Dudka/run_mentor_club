import BiographyPage from "../BiographyPage/BiographyPage";
import ContactPage from "../ContactPage/ContactPage";
import FaqPage from "../FaqPage/FaqPage";
import MainPage from "../MainPage/MainPage";
import MotivationalPage from "../MotivationalPage/MotivationalPage";
import PricingPage from "../PricingPage/PricingPage";
import RunningReasonPage from "../RunningReasonPage/RunningReasonPage";
import StatisticsPage from "../StatisticsPage/StatisticsPage";

export default function Content() {
  return (
    <>
      <MainPage />
      <BiographyPage />
      <RunningReasonPage />
      <MotivationalPage />
      <PricingPage />
      <StatisticsPage />
      <FaqPage />
      <ContactPage />
    </>
  )
}
