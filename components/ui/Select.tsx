
import React from 'react';

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: SelectOption[];
}

const Select: React.FC<SelectProps> = ({ id, label, options, className, ...props }) => {
  const baseStyles = 'w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition appearance-none';
  
  const combinedClassName = [baseStyles, className].join(' ');

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-1">
        {label}
      </label>
      <div className="relative">
        <select id={id} className={combinedClassName} {...props}>
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
        </div>
      </div>
    </div>
  );
};

export default Select;
