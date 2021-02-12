import React from "react";
import Form from "./ContactForm";
import Success from "./Success";
import Error from "./Error";

const ContactForm = ({
  mailState,
  errors,
  data,
  handleChangeData,
  handleSend,
}) => {
  if (mailState === "success") {
    return <Success />;
  }
  if (mailState === "error") {
    return <Error />;
  }
  return (
    <Form
      mailState={mailState}
      errors={errors}
      data={data}
      handleChangeData={handleChangeData}
      handleSend={handleSend}
    />
  );
};

export default ContactForm;
