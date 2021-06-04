import Footer from "../landingPage/Footer/Footer";
import Header from "../landingPage/Header/Header";
import Benefit from "../landingPage/Benefit/Benefit";
import WeSpeak from "../landingPage/WeSpeak/WeSpeak";
import theme from "../../theme/typography";
import { ThemeProvider } from "@material-ui/core/styles";
import DidYouKnow from "../landingPage/DidYouKnow/DidYouKnow";
import SaveMoney from "../landingPage/SaveMoney/SaveMoney";
import FAQ from "../landingPage/FAQ/FAQ";

export default function LandingLayout() {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <ThemeProvider theme={theme}>
          <Header />
          <Benefit />
          <WeSpeak />
          <DidYouKnow />
          <SaveMoney />
          <FAQ />
          <Footer />
        </ThemeProvider>
      </div>
    </>
  );
}
