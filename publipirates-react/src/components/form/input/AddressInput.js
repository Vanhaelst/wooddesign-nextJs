import React from 'react';
import Input from "@/components/form/InputField";
import Grid from "@/components/Grid";
import TextArea from "@/components/form/TextField";

const AddressInput = ({onChange, error, value}) => {
    return(
        <div>
            <Grid row>
                <Grid item xs={12}>
                    <Input
                        name="street"
                        label="Straat + nr"
                        error={error.street}
                        value={value.street}
                        onChange={onChange}
                    />
                </Grid>
            </Grid>
            <Grid row>
                <Grid item xs={5} sm={4}>
                    <Input
                        name="postalCode"
                        label="Postcode"
                        error={error.postalCode}
                        value={value.postalCode}
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={7} sm={8}>
                    <Input
                        name="city"
                        label="Gemeente"
                        error={error.city}
                        value={value.city}
                        onChange={onChange}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default AddressInput;
