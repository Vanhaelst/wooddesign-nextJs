import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Box from "@/components/Box";
import Text from "@/components/Text";
import Button from "@/components/Button";
import Link from "next/link";

const Card = styled.div`
  position: fixed !important;
  right: 48px;
  bottom: 48px;
  borderradius: 10px;
  padding: 48px;
  z-index: 99999;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 40%) 0px 0px 20px;
  transition: right 0.5s;
  transition-timing-function: ease-in-out;

  right: -500px;
  ${(props) =>
    props.show &&
    `
        right: 48px;
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
          <Button onClick={handleClick}>Aanvaard cookies</Button>
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
