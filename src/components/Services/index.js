import React from 'react'
import Image from "@/components/Image";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Box from "@/components/Box";
import Button from "@/components/Button";

const Service = ({ image, title, description, href, cta}) => {
    return (
        <Box backgroundColor="#FFFFFF" flex justifyContent="space-between" height="100%">
            <Box>
                <Image src={image} objectFit />
                <Box mx={8} mt={8}>
                    <div>
                        <Heading level={3}>{title}</Heading>
                        <Paragraph>{description}</Paragraph>
                    </div>
                </Box>
            </Box>
             {href && (
                 <Box m={8} fex justifyContent="space-between">
                    <Box mt={5}>
                        <Button href={href}>{cta ? cta : "Bekijk onze diensten" }</Button>
                    </Box>
                 </Box>
             )}
        </Box>
    );
}
export default Service;
