import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownProps {
  label: string;
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col mt-4 relative">
      <label className="text-black font-medium">{label}</label>
      <button
        className="border p-3 rounded-md border-gray-300 hover:cursor-pointer text-left hover:bg-gray-200 animation duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute mt-18 w-full border border-gray-300 rounded-md bg-white shadow-md z-10"
          >
            {options.map((option, index) => (
              <motion.li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-300"
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;