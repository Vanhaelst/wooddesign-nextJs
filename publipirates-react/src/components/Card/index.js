import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Box from "@/components/Box";
import Text from "@/components/Text";
import Button from "@/components/Button";

const Card = styled.div`
  position: fixed !important;
  z-index: 99999;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 40%) 0px 0px 20px;
  transition: all 0.5s;
  transition-timing-function: ease-in-out;
  max-width: 100%;

  
 
  padding: 24px;
  bottom: -500px;

  @media screen and (max-width: ${props => props.theme.grid.breakpointSmall}px){
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  @media screen and (min-width: ${props => props.theme.grid.breakpointSmall}px){
    right: -500px;
    bottom: 24px;
    padding: 48px;
  }
  @media screen and (min-width: ${props => props.theme.grid.breakpointMedium}px){
    bottom: 48px;
    padding: 48px;
  }

  
  ${(props) =>
    props.show &&
    `
      bottom: 0px;
      @media screen and (min-width: ${props.theme.grid.breakpointSmall}px){
        right: 0;
        right: 24px;
      }
      @media screen and (min-width: ${props.theme.grid.breakpointLarge}px){
        right: 48px;
      }
    `}
`;

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
    if (!isCookieSet){
      const acceptedCookies = localStorage.getItem("acceptedCookies");
      if (acceptedCookies){
        setCookies()
        setIsCookieSet(true)

      }
    }
  }, [show])

  const handleClick = () => {
    localStorage.setItem("acceptedCookies", "true");
    setShow(false);
  };

  return (
    <Card as={Box} backgroundColor="#191919" width="450px" show={show}>
      <Text fontFamily="secondary" mb={6} color="white">
        Wij gebruiken cookies. Door verder te surfen of deze banner te sluiten,
        ga je akkoord met onze cookie policy.
      </Text>
      <Box flexDirection="row" alignItems="center">
        <Box mr={3}>
          <Button onClick={handleClick}>Aanvaarden</Button>
        </Box>
        <Box>
            <Button appearance="link" href="/cookie-verklaring">Meer informatie</Button>
        </Box>
      </Box>
    </Card>
  );
};

export default CookieBanner;
