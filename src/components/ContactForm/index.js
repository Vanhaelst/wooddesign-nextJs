import React from "react";
import Form from "./ContactForm";
import Success from "./Success";
import Error from "./Error";
import Heading from "@/components/Heading";
import useGlobalContext from "../../context/hooks/useGlobalContext";

const ContactForm = ({
  mailState,
  errors,
  data,
  handleChangeData,
  handleSend,
}) => {
  const { isMobile, isTablet } = useGlobalContext();
  const renderTitle = isMobile || isTablet;

  if (mailState === "success") {
    return <Success />;
  }
  if (mailState === "error") {
    return <Error />;
  }
  return (
<>
  { renderTitle && (<Heading level={3} mt={6}>Formulier</Heading>)}
              <Form
                mailState={mailState}
                errors={errors}
                data={data}
                handleChangeData={handleChangeData}
                handleSend={handleSend}
              />
              </>
  );
};

export default ContactForm;
