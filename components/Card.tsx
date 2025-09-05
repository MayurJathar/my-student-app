
import React from 'react';

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-center mb-6 text-center">
          {icon}
          <h2 className={`text-2xl font-bold text-gray-800 ${icon ? 'ml-3' : ''}`}>{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
