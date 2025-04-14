import Header from "./component/Header";
import InquiryForm from "./component/InquiryForm";
import productImg from "./assets/images/product.png";
import ServiceCenters from "./component/ServiceCenters";
import Image from "./component/Image";
import ProductGallery from "./component/ProductGallery";
import Footer from "./component/Footer";
import ContactBar from "./component/ContactBar";
import BrandCarousel from "./component/BrandCarousel";
const App = () => {
  return (
    <>
      <Header />
      <InquiryForm />
      <Text />
      <BrandCarousel />
      <ServiceCenters />
      <Image />
      <BannerText />
      <ProductGallery />
      <Footer bar={true} />
      <ContactBar bar={true} />
    </>
  );
};

const Text = () => {
  return (
    <section className="mb-12 flex flex-col items-center space-y-4 text-center text-zinc-900">
      <h1 className="text-3xl font-bold text-zinc-900">
        Welcome to Samsung India Official Customer Support
      </h1>
      <p className="text-[16px] font-medium max-md:max-w-[90%] max-md:leading-8">
        Samsung Authorized Service Center/Samsung Customer Support/Samsung
        Customer Care/Samsung Toll Free Number/Samsung Official India Support.
      </p>
      <p className="text-lg font-bold">Open 24 hours</p>
      <h3 className="mr-[40%] text-xl font-semibold text-blue-700 max-md:mr-0 max-md:w-full">
        [FAST REPAIR - EASY INSTALLATION - DEPENDABLE SERVICE]
      </h3>
      <button className="bg-blue rounded-md px-4 py-2 text-white">
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
      <img src={productImg} alt="image" className="mt-8 max-md:px-2" />
    </section>
  );
};

const BannerText = () => {
  return (
    <section className="bg-blue my-16 flex flex-col items-center justify-center space-y-4 py-6 text-center text-white">
      <h1 className="text-2xl font-bold md:text-3xl">
        *24x7 Samsung Service Center Support Helpline Service Number Number*
      </h1>
      <p className="text-lg font-bold md:text-xl">
        Location Services: Faridabad, Gurgaon, Noida, Ghaziabad, Delhi, New
        Delhi
      </p>
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
    </section>
  );
};

export default App;
