//import React from 'react';
import { useNavigate } from 'react-router-dom';

function Shop() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    console.log('Button clicked');
    navigate('/marketplace');
  };

  return (
    <div>
      <button 
        onClick={handleShopNow}
        className="mt-6 w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition relative z-50 cursor-pointer"
        type="button"
      >
        Shop Now
      </button>
    </div>
  );
}

export default Shop;