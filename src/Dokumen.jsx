import React from "react";

const Dokumen = () => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-10 lg:p-16">
      <div className="p-4 md:p-6 lg:p-10 text-center">
        <h1 className="font-poppins font-bold text-xl md:text-3xl lg:text-4xl">
          Daftar Riwayat Hidup
        </h1>
        <h3 className="text-gray-700 text-sm md:text-base lg:text-lg">
          Jakarta, Indonesia | refsimaulana@gmail.com | 08123456789
        </h3>
      </div>
      <div className="space-y-1 px-4 md:px-6 lg:px-10 text-black font-poppins">
        <h2 className="text-lg md:text-xl font-bold">PERSONAL INFORMATION</h2>
        <hr className="border-black" />
        <div className="p-4 space-y-2">
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold">Nama</span>
              <span>:</span>
            </div>
            <span>Refsi Maulana Siregar</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold">Tempat Lahir</span>
              <span>:</span>
            </div>
            <span>Sumut</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold">Tanggal Lahir</span>
              <span>:</span>
            </div>
            <span>2024-07-04</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold">Email</span>
              <span>:</span>
            </div>
            <span>refsimaulana@gmail.com</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold">No. Handphone</span>
              <span>:</span>
            </div>
            <span>08123456789</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold">Sosial Media</span>
              <span>:</span>
            </div>
            <span>Linkedin : refsi_maulana, Instagram : @refsimaulana</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold">Domisili</span>
              <span>:</span>
            </div>
            <span>Jakarta</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">
                Ketersediaan Bergabung
              </span>
              <span>:</span>
            </div>
            <span>ASAP</span>
          </div>
        </div>
        <hr className="border-black" />
        <h2 className="text-lg md:text-xl font-bold">BIODATA</h2>
        <hr className="border-black" />
        <div className="p-4 space-y-2">
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-60">
              <span className="font-semibold w-full md:w-1/2">
                Biodata Ringkas
              </span>
              <span>:</span>
            </div>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
              atque! Placeat incidunt ipsum, fugiat nulla voluptate eum deserunt
              iste laudantium recusandae sint! Eaque est commodi maxime
              voluptates quae obcaecati quo?
            </span>
          </div>
        </div>
        <hr className="border-black" />
        <h2 className="text-lg md:text-xl font-bold">PENDIDIKAN</h2>
        <hr className="border-black" />
        <div className="p-4 space-y-2">
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">
                Pendidikan Terakhir
              </span>
              <span>:</span>
            </div>
            <span>S1</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">
                Sekolah/ Universitas
              </span>
              <span>:</span>
            </div>
            <span>Universitas Dinamika Bangsa</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">Periode</span>
              <span>:</span>
            </div>
            <span>2017-2021</span>
          </div>
        </div>
        <hr className="border-black" />
        <h2 className="text-lg md:text-xl font-bold">KEAHLIAN</h2>
        <hr className="border-black" />
        <div className="p-4 space-y-2">
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">Keahlian</span>
              <span>:</span>
            </div>
            <ul className="list-disc px-6">
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
        <div className="p-4 space-y-2">
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">
                Pelatihan/ Sertifikat
              </span>
              <span>:</span>
            </div>
            <ul className="list-disc px-6">
              <li>Training Microsoft</li>
              <li>Software Developer</li>
              <li>CCNA</li>
            </ul>
          </div>
        </div>
        <hr className="border-black" />
        <h2 className="text-lg md:text-xl font-bold">PENGALAMAN</h2>
        <hr className="border-black" />
        <div className="p-4 space-y-2">
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">
                Nama Perusahaan
              </span>
              <span>:</span>
            </div>
            <span>PT Graha Karya Informasi</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">Posisi</span>
              <span>:</span>
            </div>
            <span>Frontend Developer</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">Lokasi</span>
              <span>:</span>
            </div>
            <span>Jakarta</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">Periode</span>
              <span>:</span>
            </div>
            <span>2022 - Sekarang</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">
                Deskripsi Pekerjaan
              </span>
              <span>:</span>
            </div>
            <span>Ulala Suka menjadi jadi</span>
          </div>
        </div>
        <hr className="border-black" />
        <div className="p-4 space-y-2">
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">
                Nama Perusahaan
              </span>
              <span>:</span>
            </div>
            <span>PT Graha Karya Informasi</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">Posisi</span>
              <span>:</span>
            </div>
            <span>Backend Developer</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">Lokasi</span>
              <span>:</span>
            </div>
            <span>Jakarta</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">Periode</span>
              <span>:</span>
            </div>
            <span>2022 - Sekarang</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">
                Deskripsi Pekerjaan
              </span>
              <span>:</span>
            </div>
            <span>Ulala Suka menjadi jadi</span>
          </div>
        </div>
        <hr className="border-black" />
        <h2 className="text-lg md:text-xl font-bold">REFERENSI KONTAK</h2>
        <hr className="border-black" />
        <div className="p-4 space-y-2">
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">Nama</span>
              <span>:</span>
            </div>
            <span>El Garuk</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">Hubungan</span>
              <span>:</span>
            </div>
            <span>Pemain Sepak Bola</span>
          </div>
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1">
            <div className="flex justify-between w-full md:w-36">
              <span className="font-semibold w-full md:w-1/2">Kontak</span>
              <span>:</span>
            </div>
            <span>081235446789</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dokumen;