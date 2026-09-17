export const CallToAction = ({ title, description, button, link }) => {
  const showRow = link || button;
  return (
    <div className="my-24 px-4 sm:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative isolate overflow-hidden rounded-2xl border border-[#e9e7e1] bg-[#f7f8f2] px-6 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ backgroundColor: "#c9e8a0" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: "#c9e8a0" }}
          />
          <span
            className="relative mx-auto mb-6 inline-block h-[3px] w-12 rounded-full"
            style={{ backgroundColor: "#8dc63f" }}
          />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-bold tracking-tight text-[#3a3733] sm:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6b6862]">
            {description}
          </p>
          {showRow && (
            <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-8">
              {button && (
                <a
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors"
                  style={{ backgroundColor: "#8dc63f" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#72a230")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#8dc63f")
                  }
                >
                  {button.cta}
                </a>
              )}
              {link && (
                <a
                  href={link.href}
                  className="group text-sm font-semibold leading-6 text-[#3a3733] transition-colors hover:text-[#72a230]"
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
        </div>
      </div>
    </div>
  );
};
