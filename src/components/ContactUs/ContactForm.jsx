import ContactUsForm from "./ContactUsForm";
import { IoMdChatbubbles } from "react-icons/io";
import { MdLocationCity } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../common/Footer";

// ✅ Contact Data Array
const contactDetails = [
  {
    id: 1,
    title: "Chat with us",
    desc: "Our friendly team is here to help.",
    info: "studynotion@gmail.com",
    icon: IoMdChatbubbles,
    color: "text-yellow-400",
  },
  {
    id: 2,
    title: "Visit us",
    desc: "Come and say hello at our office HQ.",
    info: "Road 12, Shikha Complex, Bandra-West, Mumbai-400074",
    icon: MdLocationCity,
    color: "text-green-400",
  },
  {
    id: 3,
    title: "Call us",
    desc: "Mon - Fri from 8am to 5pm",
    info: "+123 456 7890",
    icon: FaPhoneAlt,
    color: "text-blue-400",
  },
];

const ContactForm = () => {
  return (
    <>
      <div className="w-full bg-richblack-900 py-16 px-6 lg:px-20 mt-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info (Dynamic) */}
          <div className="flex flex-col gap-10 text-white border border-richblack-200 rounded-lg h-[400px] p-10 bg-richblack-800 w-[420px]">
            {contactDetails.map(
              ({ id, title, desc, info, icon: Icon, color }) => (
                <div key={id} className="flex items-start gap-4">
                  <div className="bg-richblack-700 p-4 rounded-full shadow-lg">
                    <Icon className={`${color} h-8 w-8`} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-richblack-300 text-sm">{desc}</p>
                    <p className="text-sm text-richblack-200 mt-1">{info}</p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Right Side - Form */}
          <div className="w-full max-w-2xl mx-auto rounded-2xl bg-richblack-800 shadow-2xl  p-8 border border-richblack-700">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-white leading-snug">
                Got an Idea? We’ve got the skills. Let’s team up!
              </h1>
              <p className="text-richblack-300 mt-2">
                Tell us more about yourself and what you’ve got in mind.
              </p>
            </div>

            <ContactUsForm />
          </div>
        </div>
       
      </div>
       <div className=" text-4xl font-inter text-white text-center mb-32 mt-20">
        Reviews From Other Learners
        </div>

      <Footer />
    </>
  );
};

export default ContactForm;
