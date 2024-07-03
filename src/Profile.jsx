const Profile = () => {
  return (
    <div className="min-h-screen bg-orange-100 p-20">
      <h1 className="text-blue-800 font-bold pb-4 text-lg">Profile</h1>
      <div className="bg-white p-10 shadow-lg rounded-md">
        <h2 className="text-lg font-semibold">Foto Profile</h2>
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-6 p-6">
          <div className="flex flex-col items-center">
            <img
              src="Leader Profile.jpg"
              alt="Profile"
              className="w-28 h-28 rounded-full"
            />
          </div>
            <div className="flex flex-col sm:flex-row sm:items-center mt-4 sm:mt-0">
              <label className="text-sm font-medium text-gray-700">
                Gambar Profil
              </label>
              <div className="sm:mt-0 sm:ml-4">
                <input
                  type="file"
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
        </div>
        <h2 className="text-lg font-bold py-4">Data Diri</h2>
        <div className="flex flex-wrap gap-20">
          <div className="w-full md:w-1/3">
            <label className="text-black text-sm font-semibold" htmlFor="nama">
              Nama Lengkap
            </label>
            <input
              className="w-full p-2 m-2 text-black text-xs border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white "
              id="nama"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              className="p-2 text-black text-sm font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full p-2 m-2 text-black text-xs border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3">
            <label className="text-black text-sm font-semibold" htmlFor="nama">
              Job Title
            </label>
            <input
              className="w-full px-2 py-2 m-2 text-black text-xs border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white "
              id="nama"
              type="text"
              placeholder="Your Job Title"
            />
          </div>
        </div>
        <h2 className="py-4 text-lg font-bold">Ganti Password</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3">
            <label className="text-black text-sm font-semibold" htmlFor="nama">
              Password Sekarang
            </label>
            <input
              className="w-full px-2 py-2 m-2 text-black text-xs border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white "
              id="passwordNow"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-20">
          <div className="w-full md:w-1/3">
            <label className="text-black text-sm font-semibold" htmlFor="nama">
              Password Baru
            </label>
            <input
              className="w-full px-2 py-2 m-2 text-black text-xs border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white "
              id="passwordNew"
              type="password"
              placeholder="Re-Type Password"
            />
          </div>
          <div className="w-full md:w-1/3">
            <label
              className="p-2 text-black text-sm font-semibold"
              htmlFor="email"
            >
              Ulangi Password Baru
            </label>
            <input
              className="w-full px-2 py-2 m-2 text-black text-xs border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white"
              id="email"
              type="email"
              placeholder="Re-Type Password"
            />
          </div>
        </div>
        <div className="flex justify-end p-20">
          <button className="bg-blue-800 text-white text-xs p-3 shadow-sm rounded-md">
            Perbarui Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
