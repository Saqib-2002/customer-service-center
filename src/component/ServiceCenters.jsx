import React from "react";

const ServiceCenters = () => {
  const serviceData = [
    "*Refrigerator Customer Book Complain*",
    "Refrigerators Are One Of The Most Important Appliances In Any Household, And Samsung Is A Trusted Brand In This Segment. However, Even The Most Reliable Refrigerators Can Develop Faults And Require Repair Or Maintenance Services. When It Comes To Samsung Refrigerator Repair Services , The Samsung Service Center Is The Go-To Destination For Many Customers In The City.",
  ];
  const samsungData = [
    "The Samsung Refrigerator Repair Service Center Is A State-Of-The-Art Facility That Provides Expert Repair Services For All Types Of Samsung Refrigerators. Their Team Of Experienced Technicians Is Equipped With The Latest Tools And Technology, Allowing Them To Diagnose And Fix Any Issue With Your Refrigerator Quickly And Efficiently.",
    "*Samsung Refrigerator Customer Care*",
    "*Samsung Fridge Service Center*",
    "*Samsung Fridge Service*",
    "*Samsung Single Door Fridge Service*",
    "*Samsung Double Door Fridge Repair Service*",
    "*Samsung Triple Door Refrigerator Service*",
    "*Samsung Side by Side Fridge Service Near Me*",
    "*Samsung Toll Free Number*",
    "*Samsung Refrigerator Water Leakage issue*",
    "*Samsung Fridge Service Number*",
    "*Samsung Helpline Number*",
    "*Samsung Authorized Fridge Service Center*",
    "*Samsung Customer Support*",
  ];

  const samsungMachine = [
    "*Samsung Washing Machine Service Center*",
    "Samsung Washing Machine Service We Repair And Service Samsung Washing Machine Service. And We Have Got What It Takes To Be An Expert In What We Do. With Our Vast Experience In Repairing And Servicing Samsung Washing Machine Can Rest Assured That Our Experienced Technicians Will Resolve Your Problem With Ease And Flawlessness. We At Samsung Washing Machine Repair And Service Center In Hyderabad Deliver Fast And Reliable Repair Services. As We Are Locally Based In Hyderabad You Will Not Have To Worry About A Long Wait Time For Our Washing Machine Repair Technician To Reach You And Resolve Your Problem. Samsung Washing Machine Repair And Service Center.",
    "*Samsung Top Loading Repair & Services*",
    "*Samsung Front Loading Washing Machine Repair & Service*",
    "*Samsung Fully Automatic Washing Machine Repair & Service*",
    "*Samsung Washing Machine Customer Care*",
    "*Samsung Washing Machine Service*",
    "*Samsung Washing Machine Toll Free*",
    "*Samsung Microwave Oven Service Center*",
    "Cooking Is A Daily Routine And It Cannot Be Interrupted Because Of An Issue With Your Samsung Microwave Oven Or Because You Are Waiting For The Well-Experienced Technician Visit And Repair The Issue. We At _Know Understands This And We Are Known For Our Fast And Reliable Services For The Samsung Microwave Oven Repair Services Center. With Our Separate Team Of Well-Experienced Technicians For The Samsung Microwave Oven, We Can Send Out A Technician To You At Your Home Samsung Contact Customer Care Number.",
    "*Samsung Microwave Service Centre*",
    "*Samsung Oven Customer Care*",
    "*Samsung Toll Free Number*",
    "*Samsung Microwave Service Near Me*",
    "*Samsung Microwave Customer Care*",
    "*Samsung Center Near Me*",
  ];
  return (
    <div id="about" className="mx-4 mt-24 text-start text-sm leading-6 text-zinc-700 md:mx-28 md:max-w-[80%]">
      <p>
        <span className="font-bold">
          Welcome To Samsung Official Customer Care
        </span>{" "}
        Support Helpline Service Number*
      </p>
      <div className="space-y-6">
        <div>
          {serviceData.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
        <div>
          {samsungData.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
        <div>
          <p className="font-bold">*Samsung Air Conditioning Service Center*</p>
          <p>
            Our expert technician repairs all type of samsung AC in indirapuram,
            samsung service center in indirapuram, Samsung window AC
            installation. Samsung window AC repair. window AC repair. samsung
            split ac repair. samsung split ac service centre in indirapuram,
            samsung split ac installation in indirapuram.Samsung Air
            Conditioning Our expert technician repairs all type of samsung AC
            samsung service center. Samsung window AC installation in
            indirapuram, Samsung window AC repair. window AC repair in
            indirapuram, samsung split ac repair. samsung split ac service
            centre in indirapuram, samsung split ac installation in Gaziyabad,
            Delhi, Noida, Faridabad, Gurgaon.{" "}
          </p>
        </div>
        <div>
          {samsungMachine.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceCenters;
