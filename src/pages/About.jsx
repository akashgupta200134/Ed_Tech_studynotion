import React from 'react'
import Highlighttext from '../components/Highlighttext'
import about1 from "../../assets/Images/aboutus1.webp"
import about2 from "../../assets/Images/aboutus2.webp"
import about3 from "../../assets/Images/aboutus3.webp"
import founding from "../../assets/Images/FoundingStory.png"
import LearningGrid from './../pages/LearningGrid'
import ContactSection from './ContactSection'
import Footer from '../components/common/footer'


const About = () => {
  return (


    // section 1
    <div className="">
      <div className="lg:mt-20 lg:flex lg:flex-col lg:items-center lg:text-center lg:w-7/12 lg:mx-auto lg:h-fit">
        <h1 className=" text-white text-4xl font-inter">
          Driving Innovation in Online Education for a
          <Highlighttext text={" Brighter Future"} />
        </h1>
        <p className="text-sm text-richblack-300 mt-2">
          Studynotion is at the forefront of driving innovation in online
          education. We're passionate about creating a brighter future by
          offering cutting-edge courses, leveraging emerging technologies, and
          nurturing a vibrant learning community.
        </p>
        <div className="relative flex flex-row items-center justify-center mt-10 gap-5 mr-5">
          {/* Gradient effect behind */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[900px] h-[300px] bg-gradient-to-r  from-purple-500 via-pink-500 to-red-500 rounded-full blur-3xl opacity-70"></div>
          </div>

          {/* Images */}
          <img
            src={about1}
            alt="aboutusimage1"
            className="h-[300px] w-[350px] rounded-lg shadow-lg relative z-10"
          />
          <img
            src={about2}
            alt="aboutusimage2"
            className="h-[300px] w-[350px] rounded-lg shadow-lg relative z-10"
          />
          <img
            src={about3}
            alt="aboutusimage3"
            className="h-[300px] w-[350px] rounded-lg shadow-lg relative z-10"
          />
        </div>
      </div>



{/* section 2 */}

     {/* Intro Line */}
<div className="text-4xl font-inter text-center text-white mt-10 px-6">
  We are passionate about revolutionizing the way we learn. Our innovative
  platform <Highlighttext text={"combines technology,"} /> expertise, and
  community to create an{" "}
  <Highlighttext text={"unparalleled educational experience."} />
</div>


{/* section 3 */}

{/* Founding Story Section */}
<div className="flex flex-row items-center justify-center mt-20 gap-16 px-10">
  {/* Left: Text */}
  <div className="flex flex-col w-[45%] bg-richblack-800 rounded-2xl p-8 shadow-lg">
    <h1 className="font-inter text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent text-left">
      Our Founding Story
    </h1>

    <p className="text-sm text-richblack-100 mt-5 leading-relaxed text-justify">
      Our e-learning platform was born out of a shared vision and passion
      for transforming education. It all began with a group of educators,
      technologists, and lifelong learners who recognized the need for
      accessible, flexible, and high-quality learning opportunities in a
      rapidly evolving digital world.
    </p>

    <p className="text-sm text-richblack-100 mt-4 leading-relaxed text-justify">
      As experienced educators ourselves, we witnessed firsthand the
      limitations and challenges of traditional education systems. We
      believed that education should not be confined to the walls of a
      classroom or restricted by geographical boundaries. We envisioned a
      platform that could bridge these gaps and empower individuals from
      all walks of life to unlock their full potential.
    </p>
  </div>

  {/* Right: Image */}
  <div className="relative">
    <div className="absolute -inset-4 bg-gradient-to-r from-red-400 to-pink-500 rounded-2xl blur-2xl opacity-30"></div>
    <img
      src={founding}
      alt="foundingstoryimages"
      className="h-[280px] w-[420px] rounded-2xl shadow-lg relative z-10"
    />
  </div>
</div>


{/* section 4 */}

  <div className="flex flex-row items-start justify-center gap-20 mt-20 px-10">
  {/* Vision */}
  <div className="flex flex-col items-center w-[40%] bg-richblack-800 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
    <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
      Our Vision
    </h1>
    <p className="text-sm text-richblack-100 mt-5 leading-relaxed text-center">
      With this vision in mind, we set out on a journey to create an
      e-learning platform that would revolutionize the way people learn.
      Our team of dedicated experts worked tirelessly to develop a robust
      and intuitive platform that combines cutting-edge technology with
      engaging content, fostering a dynamic and interactive learning
      experience.
    </p>
  </div>

  {/* Mission */}
  <div className="flex flex-col items-center w-[40%] bg-richblack-800 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      Our Mission
    </h1>
    <p className="text-sm text-richblack-100 mt-5 leading-relaxed text-center">
      Our mission goes beyond just delivering courses online. We wanted to
      create a vibrant community of learners, where individuals can
      connect, collaborate, and learn from one another. We believe that
      knowledge thrives in an environment of sharing and dialogue, and we
      foster this spirit of collaboration through forums, live sessions,
      and networking opportunities.
    </p>
  </div>
</div>
    

    {/* section 5 */}

<div className="bg-richblack-700 text-white mt-20 py-12 w-full flex flex-row items-center justify-center gap-40 rounded-xl shadow-lg">
  {/* Students */}
  <div className="flex flex-col items-center group">
    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
      5K
    </h1>
    <p className="text-richblack-100 mt-2 text-lg">Active Students</p>
  </div>

  {/* Mentors */}
  <div className="flex flex-col items-center group">
    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
      10+
    </h1>
    <p className="text-richblack-100 mt-2 text-lg">Mentors</p>
  </div>

  {/* Courses */}
  <div className="flex flex-col items-center group">
    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
      200+
    </h1>
    <p className="text-richblack-100 mt-2 text-lg">Courses</p>
  </div>

  {/* Awards */}
  <div className="flex flex-col items-center group">
    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
      50+
    </h1>
    <p className="text-richblack-100 mt-2 text-lg">Awards</p>
  </div>
</div>


    
    {/* section 6 */}
         
         <LearningGrid/>


         <ContactSection/>

         <div className=' text-4xl font-inter text-white text-center mt-20'>

          Reviews From Others

         </div>

<div className='mt-20'>
    <Footer/>
</div>
       








    </div>
  );
}

export default About
