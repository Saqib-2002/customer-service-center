import fridge from "../assets/images/fridge.png";
import oven from "../assets/images/oven.png";
import washing_machine from "../assets/images/washing_machine.png";
import lcd_tv from "../assets/images/lcd_tv.png";
import ac from "../assets/images/ac.png";

const Image = () => {
  const img = [
    { name: "Refrigirator", img: fridge },
    { name: "Microwave Oven", img: oven },
    { name: "Washing Machine", img: washing_machine },
    { name: "LED/LCD TV", img: lcd_tv },
    { name: "Air Conditioner", img: ac },
  ];
  
  return (
    <div className="my-12 flex justify-center max-md:flex-col max-md:items-center md:mx-16" id="services">
      {img.map((data, index) => (
        <div
          key={index}
          className="w-[90%] border-1 border-black md:max-w-[80%]"
        >
          <img src={data.img} alt="img" className="md:h-[240px] md:w-[240px]" />
          <p className="text-center text-lg font-semibold">{data.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Image;
