import Footer from "./Components/Footer/Footer";
import Topbar from "./Components/Topbar/Topbar";
import routes from "./routes";
import { useLocation, useRoutes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToUp";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { useRef } from "react";

function App() {
  const toastDisplayedRef = useRef(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, [pathname]);

  const showToast = () => {
    iziToast.warning({
      message: "To view the site, please turn on VPN",
      position: "bottomRight",
    });
  };

  useEffect(() => {
    initFlowbite();
    if (!toastDisplayedRef.current) {
      showToast();
      toastDisplayedRef.current = true;
    }
  }, []);

  const router = useRoutes(routes);
  return (
    <>
      <ScrollToTop>
        <Topbar />
        {router}
        <Footer />
      </ScrollToTop>
    </>
  );
}

export default App;
