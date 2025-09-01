import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseCategories, addCourseDetails, editCourseDetails } from "../../../services/operations/courseDetailsApi"
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import ChipInput from './chipInput';
import Upload from './Upload';
import RequirementsField from './RequirementsField';
import IconBtn from "../../common/IconBtn"
import { MdNavigateNext } from 'react-icons/md';
import { setCourse, setStep } from "../../../slices/courseSlice"
import { COURSE_STATUS } from "../../../utils/costans"
import { toast } from 'react-hot-toast';

const CourseInformationForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        watch,
        formState: { errors },
    } = useForm();

    const selectedCategory = watch("courseCategory"); // reactive select value

    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const { course, editCourse } = useSelector((state) => state.course);
    const [loading, setLoading] = useState(false);
    const [courseCategories, setCourseCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            setLoading(true);
            const categoriesArray = await fetchCourseCategories(); // returns array from your API
            setCourseCategories(categoriesArray);
            setLoading(false);
        };

        if (editCourse && course) {
            setValue("courseTitle", course.courseName || "");
            setValue("courseShortDesc", course.courseDescription || "");
            setValue("coursePrice", course.price || 0);
            setValue("courseTags", course.tag || []);
            setValue("courseBenefits", course.whatYouWillLearn || "");
            setValue("courseCategory", course.category?._id || course.category || "");
            setValue("courseRequirements", course.instructions || []);
            setValue("courseImage", course.thumbnail || "");
        }

        getCategories();
    }, [editCourse, course, setValue]);

    const isFormUpdated = () => {
        const currentValues = getValues();
        return (
            currentValues.courseTitle !== course.courseName ||
            currentValues.courseShortDesc !== course.courseDescription ||
            currentValues.coursePrice !== course.price ||
            JSON.stringify(currentValues.courseTags) !== JSON.stringify(course.tag) ||
            currentValues.courseBenefits !== course.whatYouWillLearn ||
            currentValues.courseCategory !== (course.category?._id || course.category) ||
            JSON.stringify(currentValues.courseRequirements) !== JSON.stringify(course.instructions) ||
            currentValues.courseImage !== course.thumbnail
        );
    }

    const onSubmit = async (data) => {
        if (editCourse) {
            if (!isFormUpdated()) {
                toast.error("No changes made to the form");
                return;
            }

            const currentValues = getValues();
            const formData = new FormData();
            formData.append("courseId", course._id);
            if (currentValues.courseTitle !== course.courseName) formData.append("courseName", data.courseTitle);
            if (currentValues.courseShortDesc !== course.courseDescription) formData.append("courseDescription", data.courseShortDesc);
            if (currentValues.coursePrice !== course.price) formData.append("price", data.coursePrice);
            if (JSON.stringify(currentValues.courseTags) !== JSON.stringify(course.tag)) formData.append("tag", JSON.stringify(data.courseTags));
            if (currentValues.courseCategory !== (course.category?._id || course.category)) formData.append("category", data.courseCategory);
            if (JSON.stringify(currentValues.courseRequirements) !== JSON.stringify(course.instructions)) formData.append("instructions", JSON.stringify(data.courseRequirements));
            if (currentValues.courseImage !== course.thumbnail) formData.append("thumbnailImage", data.courseImage);

            setLoading(true);
            const result = await editCourseDetails(formData, token);
            if (result) {
                toast.success("Course updated successfully!");
                dispatch(setStep(2));
                dispatch(setCourse(result));
            }
            setLoading(false);
            return;
        }

        // Add new course
        const formData = new FormData();
        formData.append("courseName", data.courseTitle);
        formData.append("courseDescription", data.courseShortDesc);
        formData.append("price", data.coursePrice);
        formData.append("tag", JSON.stringify(data.courseTags));
        formData.append("whatYouWillLearn", data.courseBenefits);
        formData.append("category", data.courseCategory);
        formData.append("status", COURSE_STATUS.DRAFT);
        formData.append("instructions", JSON.stringify(data.courseRequirements));
        formData.append("thumbnailImage", data.courseImage);

        setLoading(true);
        const result = await addCourseDetails(formData, token);
        if (result) {
            toast.success("Course added successfully!");
            dispatch(setStep(2));
            dispatch(setCourse(result));
        }
        setLoading(false);
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 rounded-lg border border-gray-700 bg-gray-900 p-8 shadow-lg"
            >
                {/* Course Title */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm text-gray-200 font-medium" htmlFor="courseTitle">
                        Course Title <sup className="text-pink-400">*</sup>
                    </label>
                    <input
                        id="courseTitle"
                        placeholder="Enter Course Title"
                        {...register("courseTitle", { required: true })}
                        className="rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-gray-100 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    />
                    {errors.courseTitle && <span className="text-xs text-pink-400">Course Title is required</span>}
                </div>

                {/* Course Short Description */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm text-gray-200 font-medium" htmlFor="courseShortDesc">
                        Course Short Description <sup className="text-pink-400">*</sup>
                    </label>
                    <textarea
                        id="courseShortDesc"
                        placeholder="Enter Description"
                        {...register("courseShortDesc", { required: true })}
                        className="rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-gray-100 resize-none min-h-[120px] focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    />
                    {errors.courseShortDesc && <span className="text-xs text-pink-400">Description is required</span>}
                </div>

                {/* Course Price */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm text-gray-200 font-medium" htmlFor="coursePrice">
                        Course Price <sup className="text-pink-400">*</sup>
                    </label>
                    <div className="relative">
                        <input
                            id="coursePrice"
                            placeholder="Enter Course Price"
                            {...register("coursePrice", {
                                required: true,
                                valueAsNumber: true,
                                pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
                            })}
                            className="rounded-md border border-gray-600 bg-gray-800 px-12 py-2 text-gray-100 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 w-full"
                        />
                        <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                    {errors.coursePrice && <span className="text-xs text-pink-400">Price is required</span>}
                </div>

                {/* Course Category */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm text-gray-200 font-medium" htmlFor="courseCategory">
                        Course Category <sup className="text-pink-400">*</sup>
                    </label>
                    <select
                        {...register("courseCategory", { required: true })}
                        id="courseCategory"
                        value={selectedCategory || ""}
                        onChange={(e) => setValue("courseCategory", e.target.value)}
                        className="rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-gray-100 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    >
                        <option value="" disabled>Choose A Category</option>
                        {courseCategories.map((category) => (
                            <option key={category._id} value={category._id}>{category.Name}</option>
                        ))}
                    </select>
                    {errors.courseCategory && <span className="text-xs text-pink-400">Category is required</span>}
                </div>

                {/* Tags */}
                <ChipInput
                    label="Tags"
                    name="courseTags"
                    placeholder="Enter Tags And Press Enter"
                    register={register}
                    errors={errors}
                    setValue={setValue}
                    getValues={getValues}
                />

                {/* Course Thumbnail */}
                <Upload
                    name="courseImage"
                    label="Course Thumbnail"
                    register={register}
                    setValue={setValue}
                    errors={errors}
                    editData={editCourse ? course?.thumbnail : null}
                />

                {/* Benefits */}
                <div className="flex flex-col space-y-1">
                    <label className="text-sm text-gray-200 font-medium" htmlFor="courseBenefits">
                        Benefits Of The Course <sup className="text-pink-400">*</sup>
                    </label>
                    <textarea
                        id="courseBenefits"
                        placeholder="Enter Benefits Of The Course"
                        {...register("courseBenefits", { required: true })}
                        className="rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-gray-100 resize-none min-h-[120px] focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    />
                    {errors.courseBenefits && <span className="text-xs text-pink-400">Benefits are required</span>}
                </div>

                {/* Requirements */}
                <RequirementsField
                    name="courseRequirements"
                    label="Requirements/Instructions"
                    register={register}
                    setValue={setValue}
                    errors={errors}
                    getValues={getValues}
                />

                {/* Buttons */}
                <div className="flex justify-end gap-3 mt-4">
                    {editCourse && (
                        <button
                            onClick={() => dispatch(setStep(2))}
                            disabled={loading}
                            className="rounded-md bg-gray-700 px-4 py-2 font-medium text-gray-100 hover:bg-gray-600 transition"
                        >
                            Continue Without Saving
                        </button>
                    )}
                    <IconBtn
                        disabled={loading}
                        text={!editCourse ? "Next" : "Save Changes"}
                        className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition"
                    >
                        <MdNavigateNext />
                    </IconBtn>
                </div>
            </form>
        </div>
    )
}

export default CourseInformationForm;
