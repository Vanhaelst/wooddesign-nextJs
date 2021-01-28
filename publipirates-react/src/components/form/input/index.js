import React from 'react';
import TextInput from "@/components/form/input/TextInput";
import EmailInput from "@/components/form/input/Email";
import PhoneInput from "@/components/form/input/PhoneInput";
import AddressInput from "@/components/form/input/AddressInput";

const Input = ({ variant, label }, props) => {

    switch (variant) {
        case "text":
            return (
                <TextInput label={label} {...props} />
            );
        case "mail":
            return (
                <EmailInput label={label} {...props} />
            );
        case "phone":
            return (
                <PhoneInput label={label} {...props} />
            );
        case "address":
            return (
                <AddressInput label={label} {...props} />
            );
        default:
            return <p>nothing found for variant: {variant}</p>
    }
}

export default Input;
