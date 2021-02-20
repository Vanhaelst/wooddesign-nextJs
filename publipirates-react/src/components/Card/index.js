import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Box from "@/components/Box";
import Text from "@/components/Text";
import Button from "@/components/Button";
import Link from "next/link";

const Card = styled.div`
  position: fixed !important;
  padding: 48px;
  z-index: 99999;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 40%) 0px 0px 20px;
  transition: all 0.5s;
  transition-timing-function: ease-in-out;
  max-width: 100%;

  
 
  padding: 24px;
  bottom: -500px;

  @media screen and (max-width: ${props => props.theme.grid.breakpointSmall}px){
    border-bottom-right-radius 0px;
    border-bottom-left-radius 0px;
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


const CookieBanner = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const acceptedCookies = localStorage.getItem("acceptedCookies");
    console.log("acceptedCookies", acceptedCookies);

    if (!acceptedCookies) {
      setTimeout(() => {
        setShow(true);
      }, [2500]);
    }
  }, []);

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
          <Link href="/cookie-verklaring">
            <Button appearance="link">Meer informatie</Button>
          </Link>
        </Box>
      </Box>
    </Card>
  );
};

export default CookieBanner;
