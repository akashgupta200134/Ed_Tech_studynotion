import { useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { FiUploadCloud } from "react-icons/fi"
import ReactPlayer from "react-player"

export default function Upload({
  name,
  label,
  register,
  setValue,
  errors,
  video = false,
  editData = null,
}) {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(editData || null)

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: video
      ? { "video/*": [] }
      : { "image/*": [] },
    multiple: false,
    onDrop: (acceptedFiles) => {
      const uploadedFile = acceptedFiles[0]
      setFile(uploadedFile)
      setValue(name, uploadedFile)
      setPreview(URL.createObjectURL(uploadedFile))
    },
    noClick: true, // prevent auto-open when clicking container
  })

  useEffect(() => {
    if (editData) {
      setPreview(editData)
    }
  }, [editData])

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-200">{label}</label>
      )}

      <div
        {...getRootProps()}
        className="border-2 border-dashed border-yellow-400 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 bg-gray-800 cursor-pointer hover:bg-gray-700 transition"
      >
        <input {...getInputProps()} />

        {preview ? (
          <div className="w-full">
            {video ? (
              <ReactPlayer
                url={preview}
                controls
                width="100%"
                height="auto"
              />
            ) : (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-64 object-cover rounded-xl"
              />
            )}
            <button
              type="button"
              onClick={open}
              className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300"
            >
              Replace File
            </button>
          </div>
        ) : (
          <div
            className="flex flex-col items-center gap-2 text-gray-400"
            onClick={open}
          >
            <FiUploadCloud size={48} className="text-yellow-400" />
            <p className="text-sm">
              Drag & Drop your {video ? "video" : "image"} here, or{" "}
              <span className="text-yellow-400 underline cursor-pointer">
                click to browse
              </span>
            </p>
          </div>
        )}
      </div>

      {errors[name] && (
        <span className="text-red-500 text-xs">{errors[name].message}</span>
      )}
    </div>
  )
}
