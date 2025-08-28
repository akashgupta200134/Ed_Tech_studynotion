import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiconnector";
import { contactusEndpoint } from "../../services/apis";
import { toast } from "react-hot-toast";



const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

const submitContactForm = async (data) => {
        console.log("Form Data - ", data)
        try {
            setLoading(true)
            console.time("ContactAPI"); 
            const response = await apiConnector(
                "POST",
                contactusEndpoint.CONTACT_US_API,
                data,
            )
            
            console.log("Response Data:", response.data)
            console.timeEnd("ContactAPI"); 
            toast.success("Message sent successfully");
            console.log("Email Res - ", response)
            setLoading(false)
          
            
        }catch(error) {
            console.log("ERROR MESSAGE - ", error.message)
            setLoading(false)
        }
    }


  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form
      onSubmit={handleSubmit(submitContactForm)}
      className="w-full max-w-2xl mx-auto  mt-5 rounded-2xl shadow-lg p-8 flex flex-col gap-3"
    >
      {/* First & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="firstname" className="text-md font-inter text-richblack-5 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter your firstname"
            className="p-3 rounded-lg bg-richblack-700 text-white placeholder-richblack-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="text-red-400 text-xs mt-1">
              Please enter your firstname
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastname" className="text-md font-inter text-richblack-5 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            placeholder="Enter your lastname"
            className="p-3 rounded-lg bg-richblack-700 text-white placeholder-richblack-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            {...register("lastname", { required: true })}
          />
          {errors.lastname && (
            <span className="text-red-400 text-xs mt-1">
              Please enter your lastname
            </span>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-md font-inter text-richblack-5 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="p-3 rounded-lg bg-richblack-700 text-white placeholder-richblack-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-400 text-xs mt-1">
            Please enter your email
          </span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label htmlFor="message" className="text-md font-inter text-richblack-5 mb-1">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Enter your message"
          rows="6"
          className="p-3 rounded-lg bg-richblack-700 text-white placeholder-richblack-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="text-red-400 text-xs mt-1">
            Please enter your message
          </span>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button type="submit" className=" bg-yellow-25 rounded h-10 w-full">
         Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
