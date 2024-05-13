// pages/edit/page.tsx
"use client";
import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Page() {
  const searchParams = useSearchParams();
  const restoredImage = searchParams.get('restoredImage');
  const [height, setHeight] = useState(300);
  const [width, setWidth] = useState(600);

  const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(e.target.value));
  };

  const handleWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWidth(Number(e.target.value));
  };

  const handleAddObject = () => {
    // Logic to add an object
    console.log('Adding object');
  };

  const handleRemoveObject = () => {
    // Logic to remove an object
    console.log('Removing object');
  };

  const handleChangeColor = () => {
    // Logic to change color
    console.log('Changing color');
  };

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <h1 className="mb-1 font-medium text-lg">Edit your dream room</h1>
      {restoredImage && (
        <>
          <p>Restored Image:</p>
          <div className="flex items-center space-x-4">
            <label className="text-gray-500">Height:</label>
            <input
              type="range"
              min="100"
              max="1000"
              step="10"
              value={height}
              onChange={handleHeightChange}
            />
            <span className="text-gray-500">{height}px</span>
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-gray-500">Width:</label>
            <input
              type="range"
              min="100"
              max="1000"
              step="10"
              value={width}
              onChange={handleWidthChange}
            />
            <span className="text-gray-500">{width}px</span>
          </div>
          <div className="relative">
            <Image
              alt="Restored Room"
              src={decodeURIComponent(restoredImage)}
              className="rounded-2xl"
              width={width}
              height={height}
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-center space-x-4 bg-gray-800">
              <button onClick={handleAddObject} className="bg-white rounded-full text-black border font-medium px-4 py-2 mt-8 hover:bg-gray-100 transition"
>
                Add Object
              </button>
              <button onClick={handleRemoveObject}  className="bg-white rounded-full text-black border font-medium px-4 py-2 mt-8 hover:bg-gray-100 transition"
>
                Remove Object
              </button>
              <button onClick={handleChangeColor}   className="bg-white rounded-full text-black border font-medium px-4 py-2 mt-8 hover:bg-gray-100 transition"
>
                Change Color
              </button>
            </div>
          </div>
        </>
      )}
      {/* Add your editing components here */}
      <Footer />
    </div>
  );
}

export default Page;
