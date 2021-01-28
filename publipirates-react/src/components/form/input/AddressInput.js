import React from 'react';
import Input from "@/components/form/InputField";
import Grid from "@/components/Grid";

const AddressInput = () => {
    return(
        <div>
            <Grid row>
                <Grid item xs={12}>
                    <Input label="Straat + nr" />
                </Grid>
            </Grid>
            <Grid row>
                <Grid item xs={5} sm={4}>
                    <Input label="Postcode" />
                </Grid>
                <Grid item xs={7} sm={8}>
                    <Input label="Gemeente" />
                </Grid>
            </Grid>
        </div>
    )
}

export default AddressInput;
