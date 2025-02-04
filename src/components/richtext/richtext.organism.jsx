"use client";

import Link from "next/link";
import { RichText as HygraphRichText } from "@graphcms/rich-text-react-renderer";
import Paragraph from "@/components/Paragraph";

export const RichText = ({ content, classnames }) => {
  return (
    <HygraphRichText
      content={content}
      renderers={{
        h1: ({ children }) => (
          <h1
            className={`mb-10 font-bold text-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}
          >
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2
            className={`mb-10 font-bold text-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl`}
          >
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3
            className={`mb-10 font-bold text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl`}
          >
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4
            className={`mb-10 font-bold text-black text-xl md:text-2xl lg:text-3xl xl:text-4xl`}
          >
            {children}
          </h4>
        ),
        h5: ({ children }) => (
          <h5
            className={`mb-10 font-bold text-black text-l md:text-xl lg:text-2xl xl:text-3xl`}
          >
            {children}
          </h5>
        ),
        h6: ({ children }) => (
          <h6
            className={`mb-10 font-bold text-black text-md md:text-l lg:text-xl xl:text-2xl`}
          >
            {children}
          </h6>
        ),
        p: ({ children }) => (
          <Paragraph className={`${classnames} mb-2`}>{children}</Paragraph>
        ),
        li: ({ children }) => (
          <li>
            <Paragraph className={`${classnames} mb-3`}>{children}</Paragraph>
          </li>
        ),
        ul: ({ children }) => (
          <ul className="list-outside ml-5 mt-3">{children}</ul>
        ),
        a: ({ children, openInNewTab, href, rel, ...rest }) => {
          if (href?.match(/^https?:\/\/|^\/\//i)) {
            return (
              <a
                href={href}
                className="hover:underline text-[#8dc63f]"
                style={{
                  color: "#8dc63f",
                  textDecoration: "underline",
                }}
                target={openInNewTab ? "_blank" : "_self"}
                rel={rel || "noopener noreferrer"}
                {...rest}
              >
                {children}
              </a>
            );
          }

          return (
            <Link href={href} className="hover:underline text-red-500">
              {children}
            </Link>
          );
        },
      }}
    />
  );
};
