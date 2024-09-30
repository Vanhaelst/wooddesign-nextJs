import Link from "next/link";

export const CallToAction = ({ title, description, button, link }) => {
  const showRow = link || button;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6">
        <div className="relative isolate overflow-hidden bg-[#1a1a1a] px-6 py-24 text-center shadow-2xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-300">
            {description}
          </p>
          {showRow && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {button && (
                <Link
                  href={button.href}
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {button.cta}
                </Link>
              )}
              {link && (
                <a
                  href={link.href}
                  className="text-sm font-semibold leading-6 text-white"
                >
                  {link.cta} <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
