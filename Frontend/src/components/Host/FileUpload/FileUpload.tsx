import React from "react";
import { ArrowUp } from "lucide-react";

interface FileUploadProps {
  label: string;
  onFileUpload: (file: File | File[] | null) => void;
  multiple?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, onFileUpload, multiple = false }) => {
  return (
    <div className="flex flex-col items-left gap-4">
      <label className="text-black font-medium text-lg">{label}</label>
      <div className="border-2 border-dashed border-gray-300 w-86 h-36 flex flex-col items-center justify-center gap-3 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
        <ArrowUp />
        <p className="text-gray-600 text-sm text-center">Click to upload or drag & drop</p>
        <input
          type="file"
          className="hidden"
          onChange={(e) => onFileUpload(multiple ? Array.from(e.target.files || []) : e.target.files?.[0] || null)}
          multiple={multiple}
        />
      </div>
    </div>
  );
};

export default FileUpload;