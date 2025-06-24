import { useState } from "react";

import Notification from "./Notification";

export default function Contact() {

    const [showNotification, setShowNotification] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };



    const handleSubmit = async () => {
        // Add validation here if needed
        const validationErrors: { [key: string]: string } = {};
        if (!formData.firstName.trim()) validationErrors.firstName = "First name is required.";
        if (!formData.lastName.trim()) validationErrors.lastName = "Last name is required.";
        if (!formData.email.trim()) {
            validationErrors.email = "Email address is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            validationErrors.email = "Enter a valid email address.";
        }
        if (!formData.message.trim()) validationErrors.message = "Message is required.";

        // Set errors if any
        if (Object.keys(validationErrors).length > 0) {
            setErrors({ firstName: validationErrors.firstName, lastName: validationErrors.lastName, email: validationErrors.email, message: validationErrors.message });
            return;
        }

        const requestBody = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            customerMessage: formData.message,
        };
        try {
            await fetch("/Email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });


            console.log("Form submitted successfully");
        } catch (error) {
            console.error("Error submitting the form:", error);
        }

        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000); // Notification duration (3 seconds)
    };




  return (
      <>
         
          {showNotification && <Notification message={"Message was successfully sent!"}></Notification>}

      <div className="container bg-white">
        <section className="contact" id="contact">
          <h2 className="oswald-font text-blue-dark text-3xl leading-none uppercase text-center">
            Contact
          </h2>
          {/* <h3 className="sawarabi-font text-blue-dark text-base uppercase text-center w-1/3 mx-auto">
            Flick us a message and we will get back to you shortly.
          </h3> */}
          <p className="sawarabi-font text-base text-white leading-relaxed uppercase text-center w-1/3 mx-auto"><span>Send us a message and we will get back to you shortly.</span></p>


                  <div className="border-gray-900/10 pb-12 w-5/12 mx-auto">
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                          <div className="sm:col-span-3">
          <label htmlFor="first-name" className="sawarabi-font block text-sm/6 font-medium text-gray-900">
            First name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="firstName"
              id="first-name"
              autoComplete="given-name"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              className={`roboto-font block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 ${
                errors.firstName ? "outline-red-500" : "outline-gray-300"
              } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${
                errors.firstName ? "focus:outline-red-500" : "focus:outline-indigo-600"
              } sm:text-sm/6`}
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="sawarabi-font block text-sm/6 font-medium text-gray-900">
            Last name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="lastName"
              id="last-name"
              autoComplete="family-name"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              className={`roboto-font block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 ${
                errors.lastName ? "outline-red-500" : "outline-gray-300"
              } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${
                errors.lastName ? "focus:outline-red-500" : "focus:outline-indigo-600"
              } sm:text-sm/6`}
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="email" className="sawarabi-font block text-sm/6 font-medium text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`roboto-font block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 ${
                errors.email ? "outline-red-500" : "outline-gray-300"
              } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${
                errors.email ? "focus:outline-red-500" : "focus:outline-indigo-600"
              } sm:text-sm/6`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="message" className="sawarabi-font block text-sm/6 font-medium text-gray-900">
            Message
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              autoComplete="message"
              placeholder="What's on your mind?"
              value={formData.message}
              onChange={handleChange}
              className={`roboto-font block w-full h-48 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 ${
                errors.message ? "outline-red-500" : "outline-gray-300"
              } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${
                errors.message ? "focus:outline-red-500" : "focus:outline-indigo-600"
              } sm:text-sm/6`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
        </div>
                      </div>
                      <p className="button roboto-font pt-8 text-blue-dark float-right">
                          <a onClick={handleSubmit} type="submit">Submit</a>
                      </p>
                  </div>
        </section>
      </div>
    </>
  );
}
