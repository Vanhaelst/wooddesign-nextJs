import React from "react";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Grid from "@/components/Grid";
import Box from "@/components/Box";

const Faq = ({ title = "Veelgestelde vragen", items = [] }) => {
  if (!items.length) return null;

  return (
    <Box>
      <Grid container>
        <Grid row>
          <Grid item xs={12} md={10}>
            <Heading level={3} mb={6}>
              {title}
            </Heading>
            {items.map(({ question, answer }) => (
              <Box mb={6} key={question}>
                <Heading level={4} mb={2}>
                  {question}
                </Heading>
                <Paragraph>{answer}</Paragraph>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Faq;
