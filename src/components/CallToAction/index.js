import Reveal from "../Reveal";

export const CallToAction = ({ title, description, button, link }) => {
  const showRow = link || button;
  return (
    <div className="my-20 px-4 sm:px-6 md:my-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="border border-line bg-sand px-6 py-20 text-center sm:px-16 md:py-28">
          <span className="mx-auto mb-8 block h-px w-12 bg-brass" />
          <h2 className="mx-auto max-w-2xl font-display text-[34px] font-medium leading-[1.1] text-ink md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] font-light leading-8 text-body">
            {description}
          </p>
          {showRow && (
            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-x-8">
              {button && (
                <a
                  href={button.href}
                  target={/^https?:/.test(button.href) ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-block bg-primary px-9 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-primary-dark"
                >
                  {button.cta}
                </a>
              )}
              {link && (
                <a
                  href={link.href}
                  className="group text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:text-primary"
                >
                  {link.cta}{" "}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </div>
  );
};
