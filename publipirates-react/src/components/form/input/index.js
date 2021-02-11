import React from 'react';
import TextInput from "@/components/form/input/TextInput";
import EmailInput from "@/components/form/input/Email";
import PhoneInput from "@/components/form/input/PhoneInput";
import AddressInput from "@/components/form/input/AddressInput";

const Input = ({ variant, label, onChange, name, error, value }, props) => {

    switch (variant) {
        case "text":
            return (
                <TextInput
                    label={label}
                    onChange={onChange}
                    name={name}
                    error={error}
                    value={value}
                    {...props}
                />
            );
        case "mail":
            return (
                <EmailInput
                    label={label}
                    onChange={onChange}
                    name={name}
                    error={error}
                    value={value}
                    {...props}
                />
            );
        case "phone":
            return (
                <PhoneInput
                    label={label}
                    onChange={onChange}
                    name={name}
                    error={error}
                    value={value}
                    {...props}
                />
            );
        case "address":
            return (
                <AddressInput
                    label={label}
                    onChange={onChange}
                    name={name}
                    error={error}
                    value={value}
                    {...props}
                />
            );
        default:
            return <p>nothing found for variant: {variant}</p>
    }
}

export default Input;
