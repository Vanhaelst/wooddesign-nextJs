import isEmpty from "lodash.isempty";

const ValidateForm = ({ data, setErrors }) => {

  const errors = {};

  if (isEmpty(data.firstName)) {
    errors.firstName = "Gelieve uw voornaam in te vullen.";
    errors.hasError = true;
  }

  if (isEmpty(data.lastName)) {
    errors.lastName= "Gelieve uw achternaam in te vullen.";
    errors.hasError= true;
  }

  if (isEmpty(data.email)) {
    errors.email = "Gelieve uw email in te vullen.";
    errors.hasError = true;
  }

  if (isEmpty(data.phone)) {
    errors.phone = "Gelieve uw telefoon / GSM in te vullen.";
    errors.hasError = true;
  }

  if (isEmpty(data.street)) {
    errors.street = "Gelieve uw straat in te vullen.";
    errors.hasError = true;
  }

  if (isEmpty(data.city)) {
    errors.city = "Gelieve uw gemeente in te vullen.";
    errors.hasError = true;
  }

  if (isEmpty(data.postalCode)) {
    errors.postalCode = "Gelieve uw postcode in te vullen.";
    errors.hasError = true;
  }

  if (isEmpty(data.extra)) {
    errors.extra = "Gelieve uw vraag/opmerking in te vullen.";
    errors.hasError = true;
  }

  setErrors(errors)

  return errors;
};

export default ValidateForm;
