import React from "react";
import Link from "@/components/Link";

// Portfolio card: the photo on top (slow zoom on hover) and the title below a
// hairline that draws in brass on hover. `eyebrow` overrides the small line
// above the title (defaults to the customer).
const ProjectCard = ({ item, eyebrow }) => {
  const label = eyebrow ?? item.customer;

  return (
    <Link
      href={`/realisaties/${encodeURIComponent(item.slug)}`}
      type="hidden"
      className="group block"
    >
      <div className="aspect-[4/5] overflow-hidden rounded-sm bg-sand">
        <img
          src={item.images?.[0]?.url}
          alt={item.title}
          loading="lazy"
          className="photo-grade h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
      </div>
      <div className="relative mt-5 border-t border-line pt-5">
        <span
          aria-hidden="true"
          className="absolute -top-px left-0 h-px w-0 bg-brass transition-all duration-700 ease-out group-hover:w-full"
        />
        {label && (
          <span className="block text-[11px] font-medium uppercase tracking-[0.25em] text-muted">
            {label}
          </span>
        )}
        <span className="mt-2 block font-display text-[24px] font-medium leading-[1.2] text-ink transition-colors duration-300 group-hover:text-primary">
          {item.title}
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
