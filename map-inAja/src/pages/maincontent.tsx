import React, { useState, useEffect } from "react";
import { Menu, MenuItem, Button, Chip } from "@mui/material";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { useLocation, useNavigate } from "react-router-dom";
import './scrollcustom.css';
import MapComponent from "../components/map";

const MainContent: React.FC = () => {
  const places = [
    {
      image: "https://assets.promediateknologi.id/crop/0x105:1080x789/750x500/webp/photo/p1/726/2023/08/29/Cafe-Batavia-Kota-Tua-Jakarta-4025484022.jpg",
      name: "Cafe D'lapan",
      address: "Karang Anyar 1",
      description: "Cafe dengan suasana nyaman dan menyenangkan hati",
      kategori: "Populer"
    },
    {
      image: "https://t4.ftcdn.net/jpg/04/73/38/69/360_F_473386975_Q04Y2PRal4QBHySQXXInOR59c4KkGP05.jpg",
      name: "Harvard University",
      address: "Massachusetts Hall, Cambridge, MA 02138, Amerika Serikat",
      description: "Universitas Harvard adalah universitas swasta di Cambridge, Massachusetts, Amerika Serikat dan anggota Ivy League. Universitas...",
      kategori: "Rekomendasi"
    },
    {
      image: "https://klikpajak.id/wp-content/uploads/2022/09/usaha-kecil-dan-menengah.jpg",
      name: "Cinnamon ",
      address: "Panglima Batur",
      description: "Aesthetic Place",
      kategori: "Populer"
    },
    {
      image: "https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2022/10/taman-di-jakarta.webp",
      name: "Taman Merdeka",
      address: "Jakarta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
      kategori: "Populer"
    },
    {
      image: "https://www.smktelkom-bjb.sch.id/web/assets/img/23042022044915FotoProfilUpdate.jpg",
      name: "SMK Telkom Banjarbaru",
      address: "Jl. Pangeran Suriansyah",
      description: "SMK Telkom Sandhy Putra Banjarbaru merupakan Sekolah Menengah Kejuruan pertama dan satu-satunya di Kalimantan...",
      kategori: "Rekomendasi"
    },
    {
      image: "https://rocketchicken.co.id/storage/posts/July2019/7IEVkUFsjU3TXQsEf8tK.jpg",
      name: "Rocket Chicken",
      address: "Indonesia",
      description: "Rocket Chicken adalah suatu jaringan rumah makan siap saji asal Indonesia dengan menu utama ayam goreng. Rocket...",
      kategori: "Rekomendasi"
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fungsi untuk membaca kategori dari query string
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category") || "All";
    setSelectedCategory(category);
  }, [location.search]);

  // Fungsi untuk mengupdate query string
  const handleClose = (category: string) => {
    const params = new URLSearchParams(location.search);
    if (category === "All") {
      params.delete("category"); // Hapus kategori jika All
    } else {
      params.set("category", category);
    }
    navigate(`?${params.toString()}`, { replace: true }); // Navigasi dengan query string baru
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const getColor = (kategori: string) => {
    switch (kategori) {
      case "Rekomendasi":
        return "success";
      case "Populer":
        return "primary";
      default:
        return "default";
    }
  };

  const filterPlaces = () => {
    if (selectedCategory === "All") {
      return places;
    }
    return places.filter(place => place.kategori === selectedCategory);
  };

  return (
    <div className="flex flex-col w-full h-screen">
      {/* Bagian Atas */}
      <div className="flex flex-col md:flex-row w-full p-4 border-b ">
        {/* Filter di Kiri */}
        <div className="flex items-center mb-4 md:mb-0">
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
        </div>

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
          <MenuItem onClick={() => handleClose("Populer")}>Populer</MenuItem>
          <MenuItem onClick={() => handleClose("Rekomendasi")}>Rekomendasi</MenuItem>
        </Menu>

         {/* Tab Menu dan Lihat Semua di Kanan */}
         <div className="flex ml-auto space-x-4">
        <div className="flex space-x-2 bg-gray-100 p-2 rounded-full overflow-x-auto whitespace-nowrap md:max-w-[105vh] max-w-[32vh] custom-scrollbar">
          <button className="px-4 py-2 text-sm font-medium bg-white text-gray-700 rounded-full shadow-md hover:text-blue-500">
            Sekolah
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-white text-gray-700 rounded-full shadow-md hover:text-blue-500">
            Bisnis
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-white text-gray-700 rounded-full shadow-md hover:text-blue-500">
            Universitas
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-white text-gray-700 rounded-full shadow-md hover:text-blue-500">
            Fasilitas Umum
          </button>
        </div>

          <div className="bg-gray-100 p-1 rounded-full"></div>
          <a href="/allproduct" className="flex items-center">
          <button className="text-sm font-medium text-blue-500 hover:underline">
            Lihat Semua
          </button>
          </a>
        </div>
      </div>

      {/* Bagian Bawah */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Cards Section di Kiri */}
        <div className="w-full md:w-2/5 p-4 space-y-4 overflow-y-auto max-h-[90vh] custom-scrollbar">
          {filterPlaces().map((place, index) => (
            <div key={index} className="flex flex-col p-4 bg-white shadow-md rounded-lg mt-2">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <h4 className="text-lg font-semibold">{place.name}</h4>
                  <Chip
                    label={place.kategori}
                    color={getColor(place.kategori)}
                    variant="outlined"
                    size="small"
                  />
                </div>
                <p className="text-sm text-gray-500">{place.address}</p>
                <p className="text-sm text-gray-700 mt-2">{place.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Maps Section di Kanan */}
        <div className="w-full md:w-3/5 p-4 max-h-[90vh] overflow-hidden hidden md:block">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;