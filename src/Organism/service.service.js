import React from "react";
import Grid from "@/components/Grid";
import { ServiceDetail } from "../components/Service/Detail";
import parket from "../data/services/parket";

export const ServicesDetail = () => {
    return (
        <Grid container>
            {parket.map((item) => (
                <ServiceDetail
                    index={item.index}
                    title={item.title}
                    image={item.image}
                    description={item.description}
                />
            ))}
        </Grid>
    );
};

