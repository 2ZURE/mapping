import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
          Tentang Kami
        </h1>
        <p className="text-gray-700 text-center mt-4">
          CV. Tarkiz Paz Banua adalah sebuah Software House untuk mobile dan web, berdiri sejak 2018 di Banjarbaru Kalimantan Selatan. Kami telah melayani berbagai macam pembuatan produk baik mobile maupun web untuk perusahaan swasta dan pemerintah di wilayah Kalimantan Selatan, Tengah, & Timur.
        </p>
      </div>



      {/* Details Section */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8 mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Detail Perusahaan</h2>
        <div className="mt-4 space-y-4">
          <div className="flex flex-col md:flex-row items-start">
            <span className="font-semibold text-gray-600 w-40">Website:</span>
            <a
              href="https://t-paz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://t-paz.com
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-start">
            <span className="font-semibold text-gray-600 w-40">Industri:</span>
            <span>Pengembangan Perangkat Lunak Khusus Sistem TI</span>
          </div>
          <div className="flex flex-col md:flex-row items-start">
            <span className="font-semibold text-gray-600 w-40">Ukuran Perusahaan:</span>
            <span>2-10 karyawan</span>
          </div>
          <div className="flex flex-col md:flex-row items-start">
            <span className="font-semibold text-gray-600 w-40">Kantor Pusat:</span>
            <span>Banjarbaru, Kalimantan Selatan</span>
          </div>
          <div className="flex flex-col md:flex-row items-start">
            <span className="font-semibold text-gray-600 w-40">Jenis:</span>
            <span>Perseroan Tertutup</span>
          </div>
          <div className="flex flex-col md:flex-row items-start">
            <span className="font-semibold text-gray-600 w-40">Tahun Pendirian:</span>
            <span>2018</span>
          </div>
          <div className="flex flex-col md:flex-row items-start">
            <span className="font-semibold text-gray-600 w-40">Spesialisasi:</span>
            <span>Web Development, Mobile Development, Android Development</span>
          </div>
          <div className="flex flex-col md:flex-row items-start">
            <span className="font-semibold text-gray-600 w-40">Lokasi Utama:</span>
            <span>
              Jalan Indragiri, Ruko No 4, Kelurahan Loktabat Utara, <br />
              Banjarbaru, Kalimantan Selatan, ID
            </span>
          </div>
        </div>
      </div>

      {/* Map or Location Section */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8 mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Lokasi Kantor</h2>
        <p className="text-gray-600 mt-2">Dapatkan petunjuk arah ke lokasi kami:</p>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15824.487065379307!2d114.82160421510997!3d-3.4399707219664335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMyDRgDMzJzU0LjIiUyAxMTTCsDQ5JzE4LjMiRQ!5e0!3m2!1sid!2sid!4v1692059052697!5m2!1sid!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="rounded-md"
          ></iframe>
<a href="https://maps.app.goo.gl/c7AzqA29LqgdKZh47" target="_blank" rel="noopener noreferrer">
  <button className="mt-4 flex justify-between items-center bg-blue-500 text-white py-2 px-2 rounded shadow-md hover:bg-blue-600 focus:outline-none">
    <LocationOnIcon/>
    <span>Dapatkan Petunjuk Arah</span>
  </button>
</a>


        </div>
      </div>
    </div>
  );
};

export default About;