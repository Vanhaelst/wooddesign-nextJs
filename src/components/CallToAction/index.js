export const CallToAction = ({ title, description, button, link }) => {
  const showRow = link || button;
  return (
    <div className="bg-gray-600 mt-24 sm:px-6 outline outline-1 outline-white outline-offset-[-25px]">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden  px-6 py-24 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-300">
            {description}
          </p>
          {showRow && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {button && (
                <a
                  href={button.href}
                  target="_blank"
                  className="rounded-none bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {button.cta}
                </a>
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
