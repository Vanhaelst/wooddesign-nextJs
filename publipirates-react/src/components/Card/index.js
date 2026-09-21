import React, { useEffect, useState } from "react";
import { cx } from "../../utils/cx";
import Button from "@/components/Button";
import Text from "@/components/Text";

const GOOGLE_ANALYTICS = "UA-69842182-2";
const setCookies = () => {
  const googleTagManager = document.createElement("script");
  googleTagManager.type = "text/javascript";
  googleTagManager.async = true;
  googleTagManager.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}`;
  const foo = document.getElementsByTagName("script")[0];
  foo.parentNode.insertBefore(googleTagManager, foo);

  const dataLayer = document.createElement("script");
  dataLayer.text = `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${GOOGLE_ANALYTICS}');
          `;
  const bar = document.getElementsByTagName("script")[1];
  bar.parentNode.insertBefore(dataLayer, bar);

  // you can add facebook-pixel and other cookies here
};

const CookieBanner = () => {
  const [show, setShow] = useState(false);
  const [isCookieSet, setIsCookieSet] = useState(false);

  useEffect(() => {
    const acceptedCookies = localStorage.getItem("acceptedCookies");

    if (!acceptedCookies) {
      setTimeout(() => {
        setShow(true);
      }, 2500);
    }
  }, [show]);

  useEffect(() => {
    if (!isCookieSet) {
      const acceptedCookies = localStorage.getItem("acceptedCookies");
      if (acceptedCookies) {
        setCookies();
        setIsCookieSet(true);
      }
    }
  }, [show]);

  const handleClick = () => {
    localStorage.setItem("acceptedCookies", "true");
    setShow(false);
  };

  return (
    <div
      className={cx(
        // Slides up from the bottom on mobile, in from the right on larger screens.
        "fixed z-[99999] flex w-[450px] max-w-full flex-col rounded-[10px] bg-[#191919] p-6 shadow-[0_0_20px_rgb(0_0_0/40%)] transition-all duration-500 ease-in-out max-xs:rounded-b-none xs:p-12 md:bottom-12",
        show
          ? "bottom-0 xs:bottom-6 xs:right-6 lg:right-12"
          : "bottom-[-500px] xs:bottom-6 xs:right-[-500px]",
      )}
    >
      <Text fontFamily="secondary" mb={6} color="white">
        Wij gebruiken cookies. Door verder te surfen of deze banner te sluiten,
        ga je akkoord met onze cookie policy.
      </Text>
      <div className="flex flex-row flex-wrap items-center gap-y-2 xs:flex-nowrap">
        <div className="mr-2 flex flex-col">
          <Button onClick={handleClick}>Aanvaarden</Button>
        </div>
        <div className="flex flex-col">
          <Button appearance="link" href="/cookie-verklaring">
            Meer informatie
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
