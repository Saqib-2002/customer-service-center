import { useState } from "react";
import serviceCenterImage from "../assets/images/image.png";
import axios from "axios";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    productCategory: "",
    productType: "",
    name: "",
    phone: "",
    city: "",
  });

  const productCategories = [
    { value: "", label: "Select Category" },
    { value: "TV", label: "TV" },
    { value: "Refrigerator", label: "Refrigerator" },
    { value: "Washing Machine", label: "Washing Machine" },
    { value: "Mobile", label: "Mobile" },
    { value: "AC", label: "Air Conditioner" },
  ];

  const productType = [
    { value: "", label: "Product Type" },
    { value: "Out of Warranty", label: "Out of Warranty" },
    { value: "Under Warranty", label: "Under Warranty" },
  ];

  const city = [
    { value: "", label: "Your City" },
    { value: "Faridabad", label: "Faridabad" },
    { value: "Greater Faridabad", label: "Greater Faridabad" },
    { value: "Greater Noida", label: "Greater Noida" },
    { value: "Noida", label: "Noida" },
    { value: "Ghaziabad", label: "Ghaziabad" },
    { value: "Gurgaon", label: "Gurgaon" },
    { value: "New Delhi", label: "New Delhi" },
    { value: "Delhi", label: "Delhi" },
    { value: "East Delhi", label: "East Delhi" },
    { value: "West Delhi", label: "West Delhi" },
    { value: "North West Delhi", label: "North West Delhi" },
    { value: "South Delhi", label: "South Delhi" },
  ];

  const formFields = [
    {
      name: "productCategory",
      label: "Choose Product Category",
      type: "select",
      options: productCategories,
      colSpan: "md:col-span-1",
    },
    {
      name: "productType",
      label: "Product Type",
      type: "select",
      options: productType,
      colSpan: "md:col-span-1",
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      colSpan: "md:col-span-1",
      placeholder: "Name",
    },
    {
      name: "phone",
      label: "Phone number",
      type: "tel",
      colSpan: "md:col-span-1",
      placeholder: "Phone Number",
    },
    {
      name: "city",
      label: "Your City",
      type: "select",
      options: city,
      colSpan: "md:col-span-1",
    },
  ];

  const ids = {
    service: import.meta.env.VITE_SERVICE_ID,
    template: import.meta.env.VITE_TEMPLATE_ID,
    user: import.meta.env.VITE_USER_ID,
  };

  const data = {
    service_id: ids.service,
    template_id: ids.template,
    user_id: ids.user,
    template_params: {
      from_name: formData.name,
      to_name: "Saqib",
      from_num: formData.number,
      from_city: formData.city,
      from_cat: formData.productCategory,
      from_pro: formData.productType,
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data)
      .then((res) => {
        console.log("Success - ", res.data);
        console.log(res);
        setFormData({
          productCategory: "",
          productType: "",
          name: "",
          phone: "",
          city: "",
        });
      })
      .catch((err) => {
        console.log("Failed - ", err);
      });
  };

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col overflow-hidden rounded-lg lg:flex-row">
          {/* Left Side - Branding */}

          <div className="w-full">
            <img
              src={serviceCenterImage}
              alt="Samsung Service"
              className="h-auto w-full rounded-lg"
            />
          </div>

          {/* Right Side - Form */}
          <div className="bg-blue rounded-xl p-8 text-white lg:w-2/3">
            <h3 className="mb-2 text-center text-2xl font-bold">
              Instant Inquiry
            </h3>
            <p className="mb-6 text-center">
              Kindly fill all required details below, our team will contact you
              soon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
              <div className="space-y-4">
                {formFields.map((field) => (
                  <div key={field.name} className={field.colSpan}>
                    {field.type === "select" ? (
                      <select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full rounded border-none bg-white px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
                        required
                      >
                        {field.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full rounded-md border-none bg-white px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
                        required
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="text-md w-full cursor-pointer rounded-sm bg-black px-4 py-2 font-medium text-white transition duration-200 hover:bg-zinc-900"
              >
                SUBMIT
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="mb-2">Need immediate assistance?</p>
              <a
                href="tel:+918000815400"
                className="inline-flex items-center text-2xl font-semibold hover:text-gray-100"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
