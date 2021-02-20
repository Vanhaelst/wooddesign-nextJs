import InputField from "@/components/form/InputField";
import React, {useState} from "react";
import styled from "styled-components";
import ChevronRight from "@/icons/ChevronRight";
import Box from "@/components/Box";

const SubmitButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background-color: transparent;
  border: none;
  color: white;
  display: flex;
  flex-direction: row; 
  align-items: center;
  svg{
    fill: white;
  }
  &:hover{
    color: ${props => props.theme.colors.primary.main};
      svg{
        fill: ${props => props.theme.colors.primary.main};
      }
  }   
`;


const SignupForm = () => {
    const [email, setEmail] = useState("");
    return (
        <form
            action={process.env.MC_SUBSCRIBE_URL}
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
        >
            <div id="mc_embed_signup_scroll">
                <InputField
                    placeholder="Uw emailadres"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    value={email}
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    variant="light"
                />

                <div
                    style={{display: "none"}}
                    id="mergeRow-gdpr"
                    className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
                >
                    <div className="content__gdpr">
                        <fieldset
                            className="mc_fieldset gdprRequired mc-field-group"
                            name="interestgroup_field"
                        >
                            <label className="checkbox subfield" htmlFor="gdpr_1129">
                                <input
                                    type="checkbox"
                                    id="gdpr_1129"
                                    name="gdpr[1129]"
                                    value="Y"
                                    checked
                                    className="av-checkbox"
                                />
                                <span>Email</span>
                            </label>
                            <label className="checkbox subfield" htmlFor="gdpr_1133">
                                <input
                                    type="checkbox"
                                    id="gdpr_1133"
                                    name="gdpr[1133]"
                                    value="Y"
                                    checked
                                    className="av-checkbox"
                                />
                                <span>Direct Mail</span>
                            </label>
                            <label className="checkbox subfield" htmlFor="gdpr_1137">
                                <input
                                    type="checkbox"
                                    id="gdpr_1137"
                                    name="gdpr[1137]"
                                    value="Y"
                                    checked
                                    className="av-checkbox "
                                />
                                <span>Customized online advertising</span>
                            </label>
                        </fieldset>
                        <p>
                            You can change your mind at any time by clicking the
                            unsubscribe link in the footer of any email you receive from
                            us, or by contacting us at info@wooddesign.be. We will treat
                            your information with respect. For more information about our
                            privacy practices please visit our website. By clicking below,
                            you agree that we may process your information in accordance
                            with these terms.
                        </p>
                    </div>
                    <div className="content__gdprLegal">
                        <p>
                            We use Mailchimp as our marketing platform. By clicking below
                            to subscribe, you acknowledge that your information will be
                            transferred to Mailchimp for processing.{" "}
                            <a href="https://mailchimp.com/legal/" target="_blank">
                                Learn more about Mailchimp's privacy practices here.
                            </a>
                        </p>
                    </div>
                </div>
                <div id="mce-responses" className="clear">
                    <div
                        className="response"
                        id="mce-error-response"
                        style={{display: "none"}}
                    />
                    <div
                        className="response"
                        id="mce-success-response"
                        style={{display: "none"}}
                    />
                </div>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div
                    style={{position: "absolute", left: "-5000px"}}
                    aria-hidden="true"
                >
                    <input
                        type="text"
                        name="b_f673b9f7b96727694d320ab67_7bb953d504"
                        tabIndex="-1"
                        value=""
                    />
                </div>
                <div className="clear">
                    <SubmitButton
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                    >
                        <Box mr={3}>
                            Inschrijven
                        </Box>
                        <ChevronRight size="12px" />
                    </SubmitButton>
                </div>
            </div>
        </form>
    )
}

export default SignupForm;
