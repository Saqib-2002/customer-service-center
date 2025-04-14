import bluestar from "../assets/brands/bluestar.png";
import daikin from "../assets/brands/daikin.png";
import godrej from "../assets/brands/godrej.png";
import haier from "../assets/brands/haier.png";
import lg from "../assets/brands/lg.png";
import ogeneral from "../assets/brands/ogeneral.png";
import philips from "../assets/brands/philips.png";
import samsung from "../assets/brands/samsung.png";
import voltas from "../assets/brands/voltas.png";
import whirpool from "../assets/brands/whirpool.png";

const BrandCarousel = () => {
  const brands = [
    { name: "Samsung", img: samsung },
    { name: "Voltas", img: voltas },
    { name: "Godrej", img: godrej },
    { name: "General", img: ogeneral },
    { name: "lg", img: lg },
    { name: "philips", img: philips },
    { name: "daikin", img: daikin },
    { name: "whirpool", img: whirpool },
    { name: "haier", img: haier },
    { name: "bluestar", img: bluestar },
  ];

  return (
    <div className="space-y-8 bg-white">
      <h1 className="text-center text-3xl font-bold text-zinc-900 max-md:mx-2 max-md:text-start max-md:text-xl">
        We Provide Service Support for the Following Brands
      </h1>

      <div className="overflow-hidden">
        <div className="animate-scroll">
          {/* Duplicate the brand list to make the scrolling seamless */}
          {brands.concat(brands).map((brand, idx) => (
            <img
              key={idx}
              src={brand.img}
              alt={brand.name}
              className="mx-6 inline-block h-12 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
