import Header from "../../Header/Header";
import Hero from "../../Hero/Hero";
import Success from "../../Hero/Success";
import Sabt from "../../Hero/Sabt";
import { useRouter } from "next/router";

import BrandSupport from "../../BrandSupport/BrandSupport";
import MediaSupport from "../../MediaSupport/MediaSupport";
import FaceSupport from "../../FaceSupport/FaceSupport";
import VideoTestimonials from "../../VideoTestimonials/VideoTestimonials";
import YearReport from "../../YearReport/YearReport";
import LookAtJazmourian from "../../LookAtJazmourian/LookAtJazmourian";
import Differences from "../../Differences/Differences";
import ShelterSupport from "../../ShelterSupport/ShelterSupport";
import ImageTextSectionRight from "../../ImageTextSection/ImageTextSectionRight";
import ImageTextSectionLeft2 from "../../ImageTextSection2/ImageTextSectionleft2";
import ImageTextSectionRight3 from "../../ImageTextSection3/ImageTextSectionRight3";
import ImageTextSectionLeft4 from "../../ImageTextSection4/ImageTextSectionleft4";
import BuildTogether from "../../BuildTogether/BuildTogether";
import SwiperSection from "../../SwiperSection/SwiperSection";
import EventsSection from "../../EventsSection/EventsSection";
import MemoriesSection from "../../MemoriesSection/MemoriesSection";
import FAQSection from "../../FAQSection/FAQSection";
import SupportSection from "../../SupportSection/SupportSection";
import Footer from "../../Footer/Footer";
import { useRef, useState, useEffect } from "react";
import SupButton from "../../SupButton/SupButton";
import IamTheOne from "../../Hero/IamTheOne";
import Faild from "../../Hero/Faild";
import LableCard from "../../Hero/LableCard";
import PaymentResultSelector from "../../Hero/PaymentResultSelector";

const Home = () => {
  const heroRef = useRef(null);
  const [isModal, setIsModal] = useState(false);
  const [showSabt, setShowSabt] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showIam, setShowIam] = useState(false);
  const [showFaild, setShowFaild] = useState(false);
  const [showPaymentSelector, setShowPaymentSelector] = useState(false);
  const [showLableCard, setShowLableCard] = useState(false);

  const goToSuccess = () => {
    setShowFaild(false);
    setShowSuccess(true);
    setShowSabt(false);
    setShowIam(false);
    setIsModal(true);
  };

  const goToFaild = () => {
    setShowFaild(true);
    setShowSuccess(false);
    setShowSabt(false);
    setShowIam(false);
    setIsModal(true);
  };

  const goToSabt = () => {
    setShowSuccess(false);
    setShowSabt(true);
    setShowIam(false);
  };

  const goToIam = () => {
    setShowSuccess(false);
    setShowSabt(false);
    setShowIam(true);
  };

  const goToLableCard = () => {
    setShowFaild(false);
    setShowSuccess(false);
    setShowSabt(false);
    setShowIam(false);
    setShowPaymentSelector(false);
    setShowLableCard(true);
    setIsModal(true);
  };

  const goToPaymentSelector = () => {
    setShowFaild(false);
    setShowSuccess(false);
    setShowSabt(false);
    setShowIam(false);
    setShowPaymentSelector(true);
    setIsModal(true);
  };

  const closeModal = () => {
    setShowFaild(false);
    setShowSuccess(false);
    setShowSabt(false);
    setShowIam(false);
    setShowPaymentSelector(false);
    setShowLableCard(false);
    setIsModal(false);
  };

  useEffect(() => {
    document.body.style.overflow = isModal ? "hidden" : "";
  }, [isModal]);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && isModal) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isModal]);

  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);

  //   // سناریو ۱: بک‌اند ?payment=success|faild
  //   const payment = params.get("payment");
  //   if (payment) {
  //     const p = payment.toLowerCase();
  //     if (p === "success") {
  //       goToSuccess();
  //     } else {
  //       goToFaild();
  //     }
  //   }

  //   // سناریو ۲: زرین‌پال با Authority/Status
  //   const authority = params.get("Authority");
  //   const status = params.get("Status");

  //   if (!authority && !status) return;

  //   if (status !== "OK") {
  //     goToFaild();

  //     return;
  //   }

  //   (async () => {
  //     try {
  //       const res = await axios.get(
  //         `https://yekihastimngo.com/api/v1/donations/callback?Authority=${authority}&Status=${status}`,
  //         { responseType: "text" } // چون true/false میده
  //       );

  //       console.log("Verify response data:", res.data);

  //       const bodyContent = res.data.trim().toLowerCase();

  //       if (bodyContent === "true") {
  //         goToSuccess();
  //       } else {
  //         goToFaild();
  //       }
  //     } catch (e) {
  //       console.error("verify error:", e);
  //       goToFaild();
  //     }
  //   })();
  // }, [location.search, navigate]);

  return (
    <div>
      <Header heroRef={heroRef} cardRef={heroRef} />
      <Hero
        ref={heroRef}
        goToSuccess={goToSuccess}
        goToFaild={goToFaild}
        goToPaymentSelector={goToPaymentSelector}
        isModal={isModal}
      />

      {isModal && showPaymentSelector && (
        <PaymentResultSelector
          goToSuccess={goToSuccess}
          goToFaild={goToFaild}
          closeModal={closeModal}
        />
      )}
      {isModal && showSuccess && (
        <Success
          goToSabt={goToSabt}
          goToIam={goToIam}
          closeModal={closeModal}
        />
      )}
      {isModal && showSabt && (
        <Sabt goToIam={goToIam} closeModal={closeModal} />
      )}
      {isModal && showIam && (
        <IamTheOne goToLableCard={goToLableCard} closeModal={closeModal} />
      )}
      {isModal && showLableCard && <LableCard closeModal={closeModal} />}
      {isModal && showFaild && <Faild closeModal={closeModal} />}

      <SupButton cardRef={heroRef} />
      <BrandSupport />
      <MediaSupport />
      <FaceSupport />
      <VideoTestimonials />
      <YearReport />
      <LookAtJazmourian />
      <Differences />
      <ShelterSupport />
      <ImageTextSectionRight />
      <ImageTextSectionLeft2 />
      <ImageTextSectionRight3 />
      <ImageTextSectionLeft4 />
      <BuildTogether />
      <SwiperSection />
      <EventsSection />
      <MemoriesSection />
      <FAQSection />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default Home;
