
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const Input: React.FC<InputProps> = ({ id, className, ...props }) => {
  const baseStyles = 'w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition';
  
  const combinedClassName = [baseStyles, className].join(' ');

  return (
    <div>
      <input id={id} className={combinedClassName} {...props} />
    </div>
  );
};

export default Input;
