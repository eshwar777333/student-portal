// import React from 'react';

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       {/* Header Section */}
//       <header className="bg-blue-500 p-6 rounded-lg text-white flex justify-between items-center mb-8">
//         <div className="flex items-center">
//           <img src="/connected-logo.png" alt="ConnectEd" className="w-12 h-12 mr-4" />
//           <h1 className="text-2xl font-bold">ConnectEd</h1>
//         </div>
//         <div className="text-right">
//           <h2 className="text-xl font-semibold">Hello, Gabrisa!</h2>
//           <p className="text-sm">Class 7 - Math + Science</p>
//         </div>
//       </header>

//       <div className="grid grid-cols-3 gap-6">
//         {/* Announcements Section */}
//         <div className="col-span-1">
//           <h2 className="text-xl font-bold mb-4">Announcements</h2>
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <div className="mb-4">
//               <p className="font-semibold text-gray-700">On account of Independence Day, August 15th will be a holiday.</p>
//               <p className="text-sm text-gray-500">Reminder to submit assignments by Monday.</p>
//             </div>
//           </div>

//           {/* Class Schedule */}
//           <h2 className="text-xl font-bold mt-8 mb-4">Your Class Schedule</h2>
//           <div className="space-y-4">
//             <div className="p-4 bg-blue-50 rounded-lg shadow-md">
//               <p className="font-semibold">Class 7, Science | Live Class</p>
//               <p className="text-blue-600">Tuesday, 5:00 - 5:50 PM</p>
//               <p className="text-sm text-gray-500">Yesterday</p>
//             </div>
//             <div className="p-4 bg-pink-100 rounded-lg shadow-md">
//               <p className="font-semibold">Class 7, Science | Live Class</p>
//               <p className="text-pink-600">Tuesday, 6:30 - 7:15 PM</p>
//               <p className="text-sm text-gray-500">Today</p>
//             </div>
//             <div className="p-4 bg-blue-50 rounded-lg shadow-md">
//               <p className="font-semibold">Class 7, Science | Live Class</p>
//               <p className="text-blue-600">Tuesday, 5:00 - 5:50 PM</p>
//               <p className="text-sm text-gray-500">Tomorrow</p>
//             </div>
//           </div>
//         </div>

//         {/* Quick Links Section */}
//         <div className="col-span-1">
//           <h2 className="text-xl font-bold mb-4">Quick Links</h2>
//           <div className="space-y-6">
//             <a href="#" className="block bg-blue-500 text-white text-center p-6 rounded-lg shadow-md hover:bg-blue-600">
//               Canvas LMS
//             </a>
//             <a href="#" className="block bg-pink-500 text-white text-center p-6 rounded-lg shadow-md hover:bg-pink-600">
//               Join Live Class
//             </a>
//             <a href="#" className="block bg-blue-500 text-white text-center p-6 rounded-lg shadow-md hover:bg-blue-600">
//               Contact Teacher
//             </a>
//           </div>
//         </div>

//         {/* Access Class Recordings Section */}
//         <div className="col-span-1">
//           <h2 className="text-xl font-bold mb-4">Access Class Recordings</h2>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="space-y-4">
//               <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
//                 <div>
//                   <p className="font-semibold">Class 7 Math</p>
//                   <p className="text-sm text-gray-500">Algebraic Equations</p>
//                 </div>
//                 <p className="text-sm text-gray-500">24th October, 2024</p>
//               </div>
//               <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
//                 <div>
//                   <p className="font-semibold">Class 7 Math</p>
//                   <p className="text-sm text-gray-500">Differential Maths</p>
//                 </div>
//                 <p className="text-sm text-gray-500">24th October, 2024</p>
//               </div>
//               <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
//                 <div>
//                   <p className="font-semibold">Class 7 Science</p>
//                   <p className="text-sm text-gray-500">Fundamentals of Organic Chemistry</p>
//                 </div>
//                 <p className="text-sm text-gray-500">24th October, 2024</p>
//               </div>
//               <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
//                 <div>
//                   <p className="font-semibold">Class 7 Math</p>
//                   <p className="text-sm text-gray-500">Trigonometry 101</p>
//                 </div>
//                 <p className="text-sm text-gray-500">24th October, 2024</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"
import React, { useState } from 'react';

export default function HomePage() {
  // State to manage popup visibility
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Dummy data to simulate checking for live classes
  const liveClassesAvailable = false; // Change this to true to simulate having a live class

  const handleQuickAccessClick = () => {
    if (!liveClassesAvailable) {
      setPopupVisible(true);
    } else {
      // Redirect or perform action for live classes
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="min-h-screen bg-[#f3f3ff] p-8">
    {/* Header Section */}
    <header className="bg-[#4a49d2] p-6 rounded-lg text-white flex items-center mb-8">
      <div className="flex items-center mr-auto">
        <img src="/images/logo.png" alt="ConnectEd" className="w-100 h-20 mr-4" />
      </div>
      <h1 className="text-5xl font-bold mx-auto text-center text-white">Student Portal</h1>
      <div className="text-right ml-auto">
        <h2 className="text-xl font-semibold text-white">Hello, Gabrisa!</h2>
        <p className="text-sm text-white">Class 7 - Math + Science</p>
      </div>
    </header>
  

      {/* Announcements Section */}
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <h2 className="text-xl font-bold text-black mb-4">Announcements</h2>
          <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
            <div className="bg-[#f3f3ff] p-4 rounded-md">
              <p className="font-semibold text-[#5a5a5a]">
                On account of Independence Day, August 15th will be a holiday.
              </p>
            </div>
            <div className="bg-[#f3f3ff] p-4 rounded-md">
              <p className="font-semibold text-[#5a5a5a]">
                Reminder to finish your assignments and submit them by Monday.
              </p>
            </div>
          </div>

          {/* Class Schedule */}
          <h2 className="text-xl font-bold text-black mt-8 mb-4">Your Class Schedule</h2>
          <div className="space-y-4">
            <div className="p-4 bg-[#e7e7ff] rounded-lg shadow-md">
              <p className="font-semibold">Class 7, Science | Live Class</p>
              <p className="text-[#6060f2]">Tuesday, 5:00 - 5:50 PM</p>
              <p className="text-sm text-gray-500">Yesterday</p>
            </div>
            <div className="p-4 bg-[#f5d4f5] rounded-lg shadow-md">
              <p className="font-semibold">Class 7, Science | Live Class</p>
              <p className="text-[#d15cd1]">Tuesday, 6:30 - 7:15 PM</p>
              <p className="text-sm text-gray-500">Today</p>
            </div>
            <div className="p-4 bg-[#e7e7ff] rounded-lg shadow-md">
              <p className="font-semibold">Class 7, Science | Live Class</p>
              <p className="text-[#6060f2]">Tuesday, 5:00 - 5:50 PM</p>
              <p className="text-sm text-gray-500">Tomorrow</p>
            </div>
          </div>
        </div>

        <div className="col-span-1">
  <h2 className="text-2xl font-bold text-black mb-6">Quick Links</h2>
  <div className="space-y-8">
    <a
      href="#"
      onClick={handleQuickAccessClick} // Add click handler
      className="block bg-[#4a49d2] text-white text-center py-12 px-8 rounded-xl shadow-lg transition-colors duration-300 hover:bg-white hover:text-[#4a49d2]"
    >
      <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.88 16.88A7.94 7.94 0 0 1 12 21.75a7.94 7.94 0 0 1-4.88-4.88 7.94 7.94 0 0 1 4.88-4.88 7.94 7.94 0 0 1 4.88 4.88zM12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5z" />
        </svg>
        <span className="text-2xl font-semibold">Canvas LMS</span>
        <span className="text-sm">Access your LMS portal for assignments, class recordings, and notes.</span>
      </div>
    </a>

    <a
      href="#"
      onClick={handleQuickAccessClick} // Add click handler
      className="block bg-[#f05cf0] text-white text-center py-12 px-8 rounded-xl shadow-lg transition-colors duration-300 hover:bg-white hover:text-[#f05cf0]"
    >
      <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.75 12L17.25 17.25M12 20.25L10.5 18.75L12 17.25M12 17.25L7.5 12L12 6.75M12 6.75L14.5 8.25L12 9.75M12 9.75L16.5 12L12 14.25M12 14.25L13.5 12.75L12 11.25" />
        </svg>
        <span className="text-2xl font-semibold">Join Live Class</span>
        <span className="text-sm">Click to join your live class session.</span>
      </div>
    </a>

    <a
      href="#"
      onClick={handleQuickAccessClick} // Add click handler
      className="block bg-[#4a49d2] text-white text-center py-12 px-8 rounded-xl shadow-lg transition-colors duration-300 hover:bg-white hover:text-[#4a49d2]"
    >
      <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0 1 16.5 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 13.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 0 1 7.5 0z" />
        </svg>
        <span className="text-2xl font-semibold">Contact Teacher</span>
        <span className="text-sm">Click to contact your teacher for any doubts or concerns.</span>
      </div>
    </a>
  </div>
</div>


        <div className="col-span-1">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Access Class Recordings</h2>

{/* Search and Filter Bar */}
<div className="bg-white p-6 rounded-lg shadow-md mb-6">
  <div className="space-y-4">
    {/* Search Bar */}
    <div className="relative">
      <input 
        type="text" 
        placeholder="Search for class recordings" 
        className="w-full p-3 pl-10 border border-black rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <svg className="absolute left-3 top-3 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 2a8 8 0 106.326 14.491l4.387 4.387a1 1 0 001.415-1.415l-4.387-4.387A8 8 0 0010 2zm0 2a6 6 0 104.472 10.243l.272-.272A6 6 0 0010 4z" />
      </svg>
    </div>

    {/* Filters */}
    <div className="flex space-x-4">
      <select className="p-3 border border-black rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-400">
        <option>This week</option>
      </select>
      <select className="p-3 border border-black rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-400">
        <option>All subjects</option>
      </select>
    </div>
  </div>
</div>


  {/* Recording Items in a Grid */}
  <div className="grid grid-cols-1 gap-4">
    {/* First Recording */}
    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg shadow-sm">
  <div>
    <p className="font-semibold text-purple-800">Class 7 Math</p>
    <a href="/images/1.jpg" target="_blank" rel="noopener noreferrer">
      <p className="text-xl font-bold text-gray-800 cursor-pointer">Algebraic Equations</p>
    </a>
    <p className="text-sm text-gray-500">24th October, 2024</p>
  </div>
  <div className="flex items-center justify-center relative">
    <img src="/images/1.jpg" alt="Recording" className="w-49 h-24 rounded-md cursor-pointer" />
    {/* Overlay for Play Button */}
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300">
      <button
        className="bg-transparent border border-white hover:bg-white hover:text-gray-800 rounded-full p-2"
        onClick={() => { 
          window.location.href = '/images/1.jpg'; // Change to open in the same window
        }} 
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  </div>
</div>

    

 {/* Second Recording */}
<div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg shadow-sm">
  <div>
    <p className="font-semibold text-purple-800">Class 7 Math</p>
    <a href="/images/1.jpg" target="_blank" rel="noopener noreferrer">
      <p className="text-xl font-bold text-gray-800 cursor-pointer">Differential Maths</p>
    </a>
    <p className="text-sm text-gray-500">24th October, 2024</p>
  </div>
  <div className="flex items-center justify-center relative">
    <img src="/images/1.jpg" alt="Recording" className="w-49 h-24 rounded-md cursor-pointer" />
    {/* Overlay for Play Button */}
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300">
      <button
        className="bg-transparent border border-white hover:bg-white hover:text-gray-800 rounded-full p-2"
        onClick={() => { 
          window.location.href = '/images/1.jpg'; // Change to open in the same window
        }} 
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  </div>
</div>




    {/* Third Recording */}
    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg shadow-sm">
  <div>
    <p className="font-semibold text-purple-800">Class 7 Math</p>
    <a href="/images/1.jpg" target="_blank" rel="noopener noreferrer">
      <p className="text-xl font-bold text-gray-800 cursor-pointer">Fundamental of Organic Chemistry</p>
    </a>
    <p className="text-sm text-gray-500">24th October, 2024</p>
  </div>
  <div className="flex items-center justify-center relative">
    <img src="/images/1.jpg" alt="Recording" className="w-49 h-24 rounded-md cursor-pointer" />
    {/* Overlay for Play Button */}
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300">
      <button
        className="bg-transparent border border-white hover:bg-white hover:text-gray-800 rounded-full p-2"
        onClick={() => { 
          window.location.href = '/images/1.jpg'; // Change to open in the same window
        }} 
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  </div>
</div>

    {/* Fourth Recording */}
    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg shadow-sm">
  <div>
    <p className="font-semibold text-purple-800">Class 7 Math</p>
    <a href="/images/1.jpg" target="_blank" rel="noopener noreferrer">
      <p className="text-xl font-bold text-gray-800 cursor-pointer">Trignomentry</p>
    </a>
    <p className="text-sm text-gray-500">24th October, 2024</p>
  </div>
  <div className="flex items-center justify-center relative">
    <img src="/images/1.jpg" alt="Recording" className="w-49 h-24 rounded-md cursor-pointer" />
    {/* Overlay for Play Button */}
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300">
      <button
        className="bg-transparent border border-white hover:bg-white hover:text-gray-800 rounded-full p-2"
        onClick={() => { 
          window.location.href = '/images/1.jpg'; // Change to open in the same window
        }} 
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  </div>
</div>
  </div>
</div>

{isPopupVisible && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-10 rounded-lg shadow-lg relative w-1/3">
      <button onClick={closePopup} className="absolute top-2 right-2 text-red-600 text-3xl">
        &times;
      </button>
      <div className="flex items-center">
        <span className="text-red-600 text-4xl mr-2">⚠️</span>
        <p className="text-gray-800 text-lg">There are currently no live classes available.</p>
      </div>
    </div>
  </div>
)}
  </div>


    </div>

  );
}
