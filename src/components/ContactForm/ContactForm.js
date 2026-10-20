import React from "react";
import Grid from "@/components/Grid";
import Input from "@/components/form/input";
import TextArea from "@/components/form/TextField";
import Button from "@/components/Button";

const Form = ({
  errors,
  data,
  handleChangeData,
  handleSend,
  honeypot,
  setHoneypot,
}) => (
  <form
    className="animate-fade-in"
    onSubmit={(event) => {
      event.preventDefault();
      handleSend();
    }}
  >
    {/* Honeypot: invisible to people, tempting to bots. */}
    <div
      aria-hidden="true"
      className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
    >
      <label>
        Website
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </label>
    </div>
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
      <Grid item xs={12}>
        <Button type="submit" appearance="primary" onClick={handleSend}>
          Verzenden
        </Button>
        <p className="mt-6 max-w-xl text-[12px] font-light leading-relaxed text-gray-500">
          Deze site wordt beschermd door reCAPTCHA. Het{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            privacybeleid
          </a>{" "}
          en de{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            servicevoorwaarden
          </a>{" "}
          van Google zijn van toepassing.
        </p>
      </Grid>
    </Grid>
  </form>
);

export default Form;
