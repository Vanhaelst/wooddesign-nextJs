import React from "react";
import { Transition } from 'react-transition-group';
import Form from "./ContactForm";
import Success from "./Success";
import Error from "./Error";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};


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
