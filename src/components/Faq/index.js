import React, { useState } from "react";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Grid from "@/components/Grid";
import Box from "@/components/Box";

const ChevronIcon = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3a3733"
    strokeWidth="1.5"
    className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
      open ? "rotate-180" : ""
    }`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
  </svg>
);

const Faq = ({ title = "Veelgestelde vragen", items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!items.length) return null;

  return (
    <Box>
      <Grid container>
        <Grid row>
          <Grid item xs={12} md={10}>
            <Heading level={3} mb={6}>
              {title}
            </Heading>
            <div className="border-t border-[#e5e3dd]">
              {items.map(({ question, answer }, index) => {
                const open = openIndex === index;
                return (
                  <div key={question} className="border-b border-[#e5e3dd]">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : index)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="font-semibold text-[#3a3733]">
                        {question}
                      </span>
                      <ChevronIcon open={open} />
                    </button>
                    <div
                      className="grid overflow-hidden transition-all duration-200 ease-in-out"
                      style={{
                        gridTemplateRows: open ? "1fr" : "0fr",
                      }}
                    >
                      <div className="overflow-hidden">
                        <Paragraph className="pb-5">{answer}</Paragraph>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Faq;
