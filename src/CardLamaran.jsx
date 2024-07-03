const CardLamaran = () => {
  return (
    <div className="bg-white min-h-screen p-4 md:p-10">
      <div className="p-4">
        <h1 className="text-blue-800 font-bold font-sans text-lg md:text-xl pb-4">
          Status Lamaran
        </h1>
        <div className="bg-blue-800 md:w-1/9 w-36 text-center p-1 shadow-sm rounded-md py-1">
          <p className="text-white text-sm">Lamaran Aktif</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-md h-70 m-4 p-4">
        <h2 className="font-bold">Software Engineer</h2>
        <p className="font-semibold text-xs md:text-sm">Jakarta, Remote</p>
        <div className="bg-white h-40 m-1 border-gray-100 border-2 rounded-md"></div>
      </div>
      <div className="p-4">
        <div className="bg-red-600 md:w-1/9 w-36 text-center p-1 shadow-sm rounded-md py-1">
          <p className="text-white text-sm">Lamaran Tidak Aktif</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-md h-70 m-4 p-4">
        <h2 className="font-bold">Software Engineer</h2>
        <p className="font-semibold text-xs">Jakarta, Remote</p>
        <div className="bg-white h-40 m-1 border-gray-100 border-2 rounded-md"></div>
      </div>
    </div>
  );
};

export default CardLamaran;

// import React from 'react';

// const CardLamaran = () => {
//   return (
//     <div className="bg-white min-h-screen p-4 md:p-10">
//       <div className="p-4">
//         <h1 className="text-blue-800 font-bold font-sans text-lg md:text-xl pb-4">
//           Status Lamaran
//         </h1>
//         <div className="bg-blue-800 md:w-1/9 w-36 text-center p-1 shadow-sm rounded-md py-1 mx-auto md:mx-0">
//           <p className="text-white text-sm">Lamaran Aktif</p>
//         </div>
//       </div>
//       <div className="bg-white shadow-md rounded-md m-4 p-4 flex flex-col items-start md:flex-row md:items-center">
//         <div className="md:w-2/3">
//           <h2 className="font-bold text-lg md:text-xl">Software Engineer</h2>
//           <p className="font-semibold text-xs md:text-sm">Jakarta, Remote</p>
//         </div>
//         <div className="bg-white w-full md:w-1/3 h-40 m-1 border-gray-100 border-2 rounded-md"></div>
//       </div>
//       <div className="p-4">
//         <h1 className="text-blue-800 font-bold font-sans text-lg md:text-xl pb-4">
//           Status Lamaran
//         </h1>
//         <div className="bg-red-600 md:w-1/9 w-36 text-center p-1 shadow-sm rounded-md py-1 mx-auto md:mx-0">
//           <p className="text-white text-sm">Lamaran Tidak Aktif</p>
//         </div>
//       </div>
//       <div className="bg-white shadow-md rounded-md m-4 p-4 flex flex-col items-start md:flex-row md:items-center">
//         <div className="md:w-2/3">
//           <h2 className="font-bold text-lg md:text-xl">Software Engineer</h2>
//           <p className="font-semibold text-xs md:text-sm">Jakarta, Remote</p>
//         </div>
//         <div className="bg-white w-full md:w-1/3 h-40 m-1 border-gray-100 border-2 rounded-md"></div>
//       </div>
//     </div>
//   );
// };

// export default CardLamaran;
