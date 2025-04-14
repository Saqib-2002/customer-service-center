const Footer = ({ bar }) => {
  const serviceCategories = [
    "WASHING MACHINE",
    "AIR CONDITIONING",
    "TELEVISION TV",
    "REFREGERATOR",
    "MICROWAVE OVEN",
  ];

  return (
    <footer className={`bg-blue md:px-4" id="#contact py-8 text-white ${bar ? "pb-16" : ""}`}>
      <div className="mx-auto max-w-6xl">
        {/* Service Categories */}
        <div className="mb-8 flex flex-wrap justify-center gap-4 md:gap-8">
          {serviceCategories.map((category, index) => (
            <p key={index} className="text-sm font-medium transition-colors">
              {category}
            </p>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mb-8 text-center">
          <h3 className="mb-4 text-3xl font-bold">Contact Us</h3>
          <button className="rounded-md bg-black px-4 py-2 text-white hover:bg-zinc-900">
            <a
              href="tel:+918000815400"
              className="text-md inline-flex items-center font-semibold hover:text-gray-100"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 8000815400
            </a>
          </button>
        </div>
        <div className="space-y-8">
          {/* Disclaimer */}
          <div className="px-4 text-center text-sm">
            <h1 className="text-md mb-2 font-bold">🚫 DISCLAIMER</h1>
            <p className="">
              * We are an independent service provider and are not authorized
              associate partners from any brands. Local repair vendors perform
              all service calls and repairs (note we don't hold any
              authorization of).
            </p>
          </div>

          {/* Copyright */}
          <div className="px-4 text-center">
            <p className="text-md mb-2 font-semibold">© COPYRIGHT</p>
            <p>
              All products are trademarks or registered trademarks of their
              respective holders. Use of them does not imply any
              affiliation/endorsement by them with us.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
