import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md"
import { useSelector } from "react-redux";

export default function ChipInput ({
    label,
    name,
    placeholder,
    register,
    errors,
    setValue,
    getValues,
}) { 
    const { editCourse, course } = useSelector((state) => state.course)

    const [chips, setChips] = useState([])

    useEffect(() => {
        if(editCourse) {
            setChips(course?.tag || [])
        }
        register(name, { required: true, validate: (value) => value.length > 0 })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setValue(name, chips)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chips])

    const handleKeyDown = (event) => {
        if(event.key === "Enter" || event.key === ",") {
            event.preventDefault()
            const chipValue = event.target.value.trim()
            if(chipValue && !chips.includes(chipValue)) {
                setChips([...chips, chipValue])
                event.target.value = ""
            }
        }
    }

    const handleDeleteChip = (chipIndex) => {
        setChips(chips.filter((_, index) => index !== chipIndex))
    }

    return (
        <div className="flex flex-col space-y-2">
            <label className="text-sm text-gray-200 font-medium" htmlFor={name}>
                {label} <sup className="text-pink-400">*</sup>
            </label>
            <div className="flex w-full flex-wrap gap-2 rounded-md border border-gray-600 bg-gray-800 p-2">
                {chips.map((chip, index) => (
                    <div
                        key={index}
                        className="flex items-center rounded-full bg-yellow-400 px-3 py-1 text-sm font-medium text-gray-900 shadow-sm"
                    >
                        {chip}
                        <button
                            type="button"
                            className="ml-2 flex items-center justify-center rounded-full hover:bg-gray-300 p-1 transition"
                            onClick={() => handleDeleteChip(index)}
                        >
                            <MdClose className="text-gray-700 text-sm" />
                        </button>
                    </div>
                ))}
                <input 
                    id={name}
                    name={name}
                    type="text"
                    placeholder={placeholder}
                    onKeyDown={handleKeyDown}
                    className="flex-1 min-w-[120px] bg-gray-800 text-gray-100 px-2 py-1 focus:outline-none placeholder-gray-400"
                />
            </div>
            {errors[name] && (
                <span className="ml-1 text-xs text-pink-400">
                    {label} is required
                </span>
            )}
        </div>
    )
}
