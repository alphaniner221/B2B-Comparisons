
import React from 'react';

interface TabOption {
  label: string;
  value: string;
}

interface TabsProps {
  options: TabOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ options, selectedValue, onChange }) => {
  return (
    <div className="flex space-x-2 bg-gray-900 p-1 rounded-lg">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`w-full text-center px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none ${
            selectedValue === option.value
              ? 'bg-purple-600 text-white shadow'
              : 'text-gray-300 hover:bg-gray-700'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
