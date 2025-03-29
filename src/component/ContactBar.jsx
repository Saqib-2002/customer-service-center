import { useEffect, useState } from "react";

const ContactBar = ({ bar }) => {
  const [isYellow, setIsYellow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsYellow((prev) => !prev);
    }, 500); // Change color every 500ms

    return () => clearInterval(interval);
  }, []);

  return bar ? (
    <a
      href="tel:+918000815400"
      className="fixed bottom-0 flex w-full items-center justify-center bg-green-600 py-2 text-3xl font-semibold text-white shadow-lg hover:bg-green-700 hover:text-gray-100"
    >
      <span
        className={`transition-all duration-300 hover:scale-110 ${
          isYellow ? "text-yellow-400" : "text-white"
        }`}
      >
        +918000815400
      </span>
    </a>
  ) : (
    <a
      href="tel:+918000815400"
      className="text-md fixed right-6 bottom-6 flex h-14 w-14 transform items-center justify-center rounded-full bg-green-500 font-semibold text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 hover:text-gray-100"
    >
      <svg
        className="h-8 w-8"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    </a>
  );
};
export default ContactBar;
