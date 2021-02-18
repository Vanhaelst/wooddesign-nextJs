import React from "react";
import styled from 'styled-components';
import Grid from "@/components/Grid";
import Input from "@/components/form/input";
import TextArea from "@/components/form/TextField";
import Button from "@/components/Button";

const FormElement = styled.form`

    @keyframes fade-in {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }

    animation: fade-in 1s;
 `;



const Form = ({ errors, data, handleChangeData, handleSend, mailState }) => (
  <FormElement mailState={mailState}>
    <Grid row>
      <Grid item xs={12} sm={6}>
        <Input
          variant="text"
          label="Voornaam"
          name="firstName"
          error={errors.firstName}
          value={data.firstName}
          onChange={(event) => handleChangeData(event)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Input
          variant="text"
          label="Achternaam"
          name="lastName"
          error={errors.lastName}
          value={data.lastName}
          onChange={(event) => handleChangeData(event)}
        />
      </Grid>
    </Grid>
    <Grid row>
      <Grid item xs={12} sm={6}>
        <Input
          variant="mail"
          label="Email"
          name="email"
          error={errors.email}
          value={data.email}
          onChange={(event) => handleChangeData(event)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Input
          variant="phone"
          label="Tel / GSM"
          name="phone"
          error={errors.phone}
          value={data.phone}
          onChange={(event) => handleChangeData(event)}
        />
      </Grid>
    </Grid>
    <Grid row>
      <Grid item xs={12}>
        <Input
          variant="address"
          label="Adres"
          error={errors}
          value={data}
          onChange={(event) => handleChangeData(event)}
        />
      </Grid>
    </Grid>
    <Grid row>
      <Grid item xs={12}>
        <TextArea
          label="Uw vraag / opmerking"
          name="extra"
          error={errors.extra}
          value={data.extra}
          onChange={(event) => handleChangeData(event)}
        />
      </Grid>
    </Grid>
    <Grid row>
      <Grid
        item
        xs={12}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button type="submit" appearance="primary" onClick={handleSend}>
          Verzenden
        </Button>
      </Grid>
    </Grid>
  </FormElement>
);

export default Form;
