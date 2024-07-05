// import React from "react";

// const Dokumen = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="p-6 md:p-10 text-center">
//         <h1 className="font-poppins font-bold text-2xl md:text-3xl">
//           Daftar Riwayat Hidup
//         </h1>
//         <h3 className="text-gray-700">
//           Jakarta, Indonesia | refsimaulana@gmail.com | 08123456789
//         </h3>
//       </div>
//       <div className="space-y-1 px-6 md:px-10 text-black font-poppins">
//         <h2 className="text-xl md:text-xl font-bold">PERSONAL INFORMATION</h2>
//         <hr className="border-black" />
//         <div className="px-4 py-2 space-y-2">
//           {[
//             { label: "Nama", value: "Refsi Maulana Siregar" },
//             { label: "Tempat Lahir", value: "Sumut" },
//             { label: "Tanggal Lahir", value: "2024-07-04" },
//             { label: "Email", value: "refsi@gmail.com" },
//             { label: "No. Handphone", value: "08123456789" },
//             {
//               label: "Sosial Media",
//               value: "Linkedin : refsi_maulana, instagram : @refsimaulana",
//             },
//             { label: "Domisili", value: "Jakarta" },
//             { label: "Ketersediaan Bergabung", value: "ASAP" },
//           ].map((item, index) => (
//             <div key={index} className="flex justify-items-start space-x-1">
//               <h3 className="font-semibold">{item.label} :</h3>
//               <p>{item.value}</p>
//             </div>
//           ))}
//         </div>
//         <hr className="border-black" />
//         <h2 className="text-xl md:text-xl font-bold">BIODATA</h2>
//         <hr className="border-black" />
//         <div className="px-4 py-2 space-y-2">
//           <div className="flex justify-items-start space-x-1">
//             <h3 className="font-semibold">Biodata Ringkas :</h3>
//             <p>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
//               magnam exercitationem harum incidunt eos nesciunt consectetur.
//               Expedita necessitatibus obcaecati, unde nobis architecto id
//               deleniti vel quasi modi! Sint, harum corporis.
//             </p>
//           </div>
//         </div>
//         <hr className="border-black" />
//         <h2 className="text-xl md:text-xl font-bold">PENDIDIKAN</h2>
//         <hr className="border-black" />
//         <div className="px-4 py-2 space-y-2">
//           {[
//             { label: "Pendidikan Terakhir", value: "S1" },
//             {
//               label: "Sekolah / Universitas",
//               value:
//                 "Universitas Dinamika Bangsa Colaboration Multimedia Nusantara",
//             },
//             { label: "Periode", value: "2017-2021" },
//           ].map((item, index) => (
//             <div key={index} className="flex justify-items-start space-x-1">
//               <h3 className="font-semibold">{item.label} :</h3>
//               <p>{item.value}</p>
//             </div>
//           ))}
//         </div>
//         <hr className="border-black" />
//         <h2 className="text-xl md:text-xl font-bold">KEAHLIAN</h2>
//         <hr className="border-black" />
//         <div className="px-4 py-2 space-y-2">
//           <div className="flex justify-items-start space-x-6">
//             <h3 className="font-semibold">Keahlian :</h3>
//             <ul className="list-disc">
//               {["HTML", "CSS", "Javascript", "React JS", "Node JS"].map(
//                 (skill, index) => (
//                   <li key={index}>{skill}</li>
//                 )
//               )}
//             </ul>
//           </div>
//         </div>
//         <hr className="border-black" />
//         <h2 className="text-xl md:text-xl font-bold">PELATIHAN / SERTIFIKAT</h2>
//         <hr className="border-black" />
//         <div className="px-4 py-2 space-y-2">
//           <div className="flex justify-items-start space-x-6">
//             <h3 className="font-semibold">Pelatihan / Sertifikat :</h3>
//             <ul className="list-disc">
//               {["Training Microsoft", "Software Developer", "CCNA"].map(
//                 (training, index) => (
//                   <li key={index}>{training}</li>
//                 )
//               )}
//             </ul>
//           </div>
//         </div>
//         <hr className="border-black" />
//         <h2 className="text-xl md:text-xl font-bold">PENGALAMAN</h2>
//         <hr className="border-black" />
//         {[1, 2].map((_, index) => (
//           <div key={index} className="px-4 py-2 space-y-2">
//             {[
//               { label: "Nama Perusahaan", value: "PT Graha Karya Informasi" },
//               { label: "Posisi", value: "Frontend Developer" },
//               { label: "Lokasi", value: "Jakarta" },
//               {
//                 label: "Deskripsi Pekerjaan",
//                 value:
//                   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, praesentium quam ab atque iusto necessitatibus? Ad suscipit temporibus nobis nihil maxime distinctio dignissimos nesciunt asperiores voluptatibus placeat. Mollitia, minima optio.",
//               },
//             ].map((item, subIndex) => (
//               <div
//                 key={subIndex}
//                 className="flex justify-items-start space-x-1"
//               >
//                 <h3 className="font-semibold">{item.label} :</h3>
//                 <p>{item.value}</p>
//               </div>
//             ))}
//           </div>
//         ))}
//         <hr className="border-black" />
//         <div className="flex justify-items-start px-2 py-1 space-x-1">
//           <h3 className="font-semibold">Gaji Terakhir :</h3>
//           <p>Rp. 15.000.000</p>
//         </div>
//         <div className="flex justify-items-start px-2 space-x-1">
//           <h3 className="font-semibold">Ekspetasi Gaji :</h3>
//           <p>Rp. 20.000.000</p>
//         </div>
//         <hr className="border-black" />
//         <h2 className="text-xl md:text-xl font-bold">REFERENSI KONTAK</h2>
//         <hr className="border-black" />
//         <div className="px-4 py-2 space-y-2">
//           {[
//             { label: "Nama", value: "Ronaldo Messi" },
//             { label: "Hubungan", value: "Rival Sepak Bola" },
//             { label: "Kontak", value: "08123456798" },
//           ].map((item, index) => (
//             <div key={index} className="flex justify-items-start space-x-1">
//               <h3 className="font-semibold">{item.label} :</h3>
//               <p>{item.value}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dokumen;

import React from "react";

const Dokumen = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 md:p-6 lg:p-10 text-center">
        <h1 className="font-poppins font-bold text-xl md:text-2xl lg:text-3xl">
          Daftar Riwayat Hidup
        </h1>
        <h3 className="text-gray-700 text-sm md:text-base lg:text-lg">
          Jakarta, Indonesia | refsimaulana@gmail.com | 08123456789
        </h3>
      </div>
      <div className="space-y-1 px-4 md:px-6 lg:px-10 text-black font-poppins">
        <h2 className="text-lg md:text-xl font-bold">PERSONAL INFORMATION</h2>
        <hr className="border-black" />
        <div className="px-4 py-2 space-y-2">
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Nama :</h3>
            <p>Refsi Maulana Siregar</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Tempat Lahir :</h3>
            <p>Sumut</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Tanggal Lahir :</h3>
            <p>2024-07-04</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Email :</h3>
            <p>refsi@gmail.com</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">No. Handphone :</h3>
            <p>08123456789</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Sosial Media :</h3>
            <p>Linkedin: refsi_maulana, Instagram: @refsimaulana</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Domisili :</h3>
            <p>Jakarta</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Ketersediaan Bergabung :</h3>
            <p>ASAP</p>
          </div>
        </div>
        <hr className="border-black" />
        <h2 className="text-lg md:text-xl font-bold">BIODATA</h2>
        <hr className="border-black" />
        <div className="px-4 py-2 space-y-2">
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Biodata Ringkas :</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              magnam exercitationem harum incidunt eos nesciunt consectetur.
              Expedita necessitatibus obcaecati, unde nobis architecto id
              deleniti vel quasi modi! Sint, harum corporis.
            </p>
          </div>
        </div>
        <hr className="border-black" />
        <h2 className="text-lg md:text-xl font-bold">PENDIDIKAN</h2>
        <hr className="border-black" />
        <div className="px-4 py-2 space-y-2">
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Pendidikan Terakhir :</h3>
            <p>S1</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Sekolah / Universitas :</h3>
            <p>Universitas Dinamika Bangsa Colaboration Multimedia Nusantara</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Periode :</h3>
            <p>2017-2021</p>
          </div>
        </div>
        <hr className="border-black" />
        <h2 className="text-lg md:text-xl font-bold">KEAHLIAN</h2>
        <hr className="border-black" />
        <div className="px-4 py-2 space-y-2">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <h3 className="font-semibold">Keahlian :</h3>
            <ul className="list-disc pl-5">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React JS</li>
              <li>Node JS</li>
            </ul>
          </div>
        </div>
        <hr className="border-black" />
        <h2 className="text-lg md:text-xl font-bold">PELATIHAN / SERTIFIKAT</h2>
        <hr className="border-black" />
        <div className="px-4 py-2 space-y-2">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <h3 className="font-semibold">Pelatihan / Sertifikat :</h3>
            <ul className="list-disc pl-5">
              <li>Training Microsoft</li>
              <li>Software Developer</li>
              <li>CCNA</li>
            </ul>
          </div>
        </div>
        <hr className="border-black" />
        <h2 className="text-lg md:text-xl font-bold">PENGALAMAN</h2>
        <hr className="border-black" />
        <div className="px-4 py-2 space-y-2">
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Nama Perusahaan :</h3>
            <p>PT Graha Karya Informasi</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Posisi :</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Lokasi :</h3>
            <p>Jakarta</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Deskripsi Pekerjaan :</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              praesentium quam ab atque iusto necessitatibus? Ad suscipit
              temporibus nobis nihil maxime distinctio dignissimos nesciunt
              asperiores voluptatibus placeat. Mollitia, minima optio.
            </p>
          </div>
        </div>
        <div className="px-4 py-2 space-y-2">
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Nama Perusahaan :</h3>
            <p>PT Graha Karya Informasi</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Posisi :</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Lokasi :</h3>
            <p>Jakarta</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Deskripsi Pekerjaan :</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              praesentium quam ab atque iusto necessitatibus? Ad suscipit
              temporibus nobis nihil maxime distinctio dignissimos nesciunt
              asperiores voluptatibus placeat. Mollitia, minima optio.
            </p>
          </div>
        </div>
        <hr className="border-black" />
        <div className="flex flex-col md:flex-row md:space-x-1 px-2 py-1">
          <h3 className="font-semibold">Gaji Terakhir :</h3>
          <p>Rp. 15.000.000</p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-1 px-2">
          <h3 className="font-semibold">Ekspetasi Gaji :</h3>
          <p>Rp. 20.000.000</p>
        </div>
        <hr className="border-black" />
        <h2 className="text-lg md:text-xl font-bold">REFERENSI KONTAK</h2>
        <hr className="border-black" />
        <div className="px-4 py-2 space-y-2">
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Nama :</h3>
            <p>Ronaldo Messi</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Hubungan :</h3>
            <p>Rival Sepak Bola</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-1">
            <h3 className="font-semibold">Kontak :</h3>
            <p>08123456798</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dokumen;