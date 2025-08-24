import {FaArrowRight} from 'react-icons/fa'
import HighlightText from '../components/Highlighttext'
import CTAButton from '../components/Button'
import InstructorImage from '../../assets/Images/Instructor.png'

const InstructorSection = () => {
  return (
    <div>
        <div className='flex flex-col lg:flex-row  gap-15  ml-10 items-center'>
            <div className='lg:w-[50%]'>
                <img src={InstructorImage} 
                    alt="InstructorImage" 
                    className='shadow-white shadow-[-20px_-20px_0_0]'
                />
            </div>

            <div className='lg:w-[50%] flex gap-10 flex-col ml-10'>
                <h1 className='lg:w-[50%] text-5xl font-semibold'>
                    Become an 
                    <HighlightText text={" Instructor"} />
                </h1>
                <p className='font-medium text-[16px] text-justify w-[90%] -mt-6 text-richblack-300'>
                    Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                </p>
                <div className='w-fit'>
                    <CTAButton active={true} linkto={'/signup'}>
                        <div className='flex items-center gap-3'>
                            Start Teaching Today
                            <FaArrowRight />
                        </div>
                    </CTAButton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InstructorSection