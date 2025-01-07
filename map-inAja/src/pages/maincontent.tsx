import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import './scrollcustom.css';

const MainContent: React.FC = () => {
  const places = [
    {
        image: "https://assets.promediateknologi.id/crop/0x105:1080x789/750x500/webp/photo/p1/726/2023/08/29/Cafe-Batavia-Kota-Tua-Jakarta-4025484022.jpg",
        name: "Cafe D'lapan",
        address: "Karang Anyar 1",
        description: "Cafe dengan suasana nyaman dan menyenangkan hati...",
      },
      {
        image: "https://t4.ftcdn.net/jpg/04/73/38/69/360_F_473386975_Q04Y2PRal4QBHySQXXInOR59c4KkGP05.jpg",
        name: "Harvard University",
        address: "Massachusetts Hall, Cambridge, MA 02138, Amerika Serikat",
        description: "Universitas Harvard adalah universitas swasta di Cambridge, Massachusetts, Amerika Serikat dan anggota Ivy League. Universitas ini merupakan salah satu universitas terbaik dunia.",
      },
      {
        image: "https://assets.promediateknologi.id/crop/0x105:1080x789/750x500/webp/photo/p1/726/2023/08/29/Cafe-Batavia-Kota-Tua-Jakarta-4025484022.jpg",
        name: "Cafe D'lapan",
        address: "Karang Anyar 1",
        description: "Cafe dengan suasana nyaman dan menyenangkan hati...",
      },
      {
        image: "https://assets.promediateknologi.id/crop/0x105:1080x789/750x500/webp/photo/p1/726/2023/08/29/Cafe-Batavia-Kota-Tua-Jakarta-4025484022.jpg",
        name: "Cafe D'lapan",
        address: "Karang Anyar 1",
        description: "Cafe dengan suasana nyaman dan menyenangkan hati...",
      },
      {
        image: "https://assets.promediateknologi.id/crop/0x105:1080x789/750x500/webp/photo/p1/726/2023/08/29/Cafe-Batavia-Kota-Tua-Jakarta-4025484022.jpg",
        name: "Cafe D'lapan",
        address: "Karang Anyar 1",
        description: "Cafe dengan suasana nyaman dan menyenangkan hati...",
      },
      {
        image: "https://assets.promediateknologi.id/crop/0x105:1080x789/750x500/webp/photo/p1/726/2023/08/29/Cafe-Batavia-Kota-Tua-Jakarta-4025484022.jpg",
        name: "Cafe D'lapan",
        address: "Karang Anyar 1",
        description: "Cafe dengan suasana nyaman dan menyenangkan hati...",
      },
    // Tambahkan data tempat lainnya di sini
  ];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (category: string) => {
    setSelectedCategory(category);
    setAnchorEl(null);
  };

  return (
    <div className="flex flex-col w-full h-screen">
      {/* Bagian Atas */}
      <div className="flex w-full p-4 border-b bg-white">
        {/* Filter di Kiri */}
        <Button
          aria-controls="filter-menu"
          aria-haspopup="true"
          onClick={handleClick}
          variant="outlined"
          color="primary"
          endIcon={<FilterAltOutlinedIcon />}
        >
          {selectedCategory}
        </Button>

        <Menu
          id="filter-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
                      PaperProps={{
              sx: {
                width: 200,
                borderRadius: 2,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                bgcolor: "#fff",
                padding: "5px 0",
              },
            }}
        >
          <MenuItem onClick={() => handleClose("All")}>All</MenuItem>
          <MenuItem onClick={() => handleClose("Terbaru")}>Terbaru</MenuItem>
          <MenuItem onClick={() => handleClose("Terpopuler")}>Terpopuler</MenuItem>
          <MenuItem onClick={() => handleClose("Rekomendasi")}>Rekomendasi</MenuItem>
        </Menu>

        {/* Tab Menu dan Lihat Semua di Kanan */}
        <div className="flex ml-auto space-x-4">
          <div className="flex space-x-2 bg-gray-100 p-2 rounded-full">
            {/* <button className="text-gray-700 hover:text-blue-500">
              Semua
            </button> */}
            <button className="px-4 py-2 text-sm font-medium bg-white text-gray-700 rounded-full shadow-md hover:text-blue-500">  
              Sekolah
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-white text-gray-700 rounded-full shadow-md hover:text-blue-500">
              Bisnis
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-white text-gray-700 rounded-full shadow-md hover:text-blue-500 ">
              Fasilitas Umum
            </button>
          </div>
          <button className="px-4 py-2 text-sm font-medium bg-white text-gray-700 rounded-full shadow-md hover:text-blue-500 ">
            Lihat Semua
          </button>
        </div>
      </div>

      {/* Bagian Bawah */}
      <div className="flex flex-1 w-full">
        {/* Cards Section di Kiri */}
        <div className="w-full md:w-2/5 p-4 space-y-4 overflow-y-auto max-h-[80vh] custom-scrollbar">
            {places.map((place, index) => (
              <div
                key={index}
                className="flex flex-col p-4 bg-white shadow-md rounded-lg mt-2"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold">{place.name}</h4>
                  <p className="text-sm text-gray-500">{place.address}</p>
                  <p className="text-sm text-gray-700 mt-2">
                    {place.description}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Maps Section di Kanan */}
        <div className="w-full md:w-3/5 p-4 max-h-[90vh] overflow-hidden">
          {/* Ganti komponen ini dengan Maps dari Google atau Library lainnya */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-xl">
            <img className="object-cover w-full h-full" src="/image.png" alt="map example" />
        </div>

        </div>
      </div>
    </div>
  );
};

export default MainContent;
