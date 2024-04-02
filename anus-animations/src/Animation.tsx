import React, { useState } from 'react';
import './styles.css'; // Import your Tailwind CSS file

const SmoothPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right' | 'center'>('left');

  const togglePopupLeft = () => {
    setIsOpen(!isOpen);
    setAnimationDirection('left');
  };

  const togglePopupRight = () => {
    setIsOpen(!isOpen);
    setAnimationDirection('right');
  };

  const togglePopupCenter = () => {
    setIsOpen(!isOpen);
    setAnimationDirection('center');
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-full absolute top-5 left-5 z-10"
        onClick={togglePopupLeft}
      >
        Open Popup Left
      </button>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-full absolute top-5 right-5 z-10"
        onClick={togglePopupRight}
      >
        Open Popup Right
      </button>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-full absolute top-5 left-1/2 transform -translate-x-1/2 z-10"
        onClick={togglePopupCenter}
      >
        Open Popup Center
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg transform transition-all duration-500">
            <div className={`animate-slide-in-${animationDirection}`}>
              <p>Popup Content</p>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-full mt-4"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmoothPopup;
