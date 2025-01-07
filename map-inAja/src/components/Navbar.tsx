import React, { useState } from "react";
import { Menu, MenuItem, Avatar, IconButton, Divider } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Anchor untuk Menu Dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk toggle menu utama

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); // Membuka menu dropdown
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Menutup menu dropdown
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="flex items-center justify-between mx-auto p-4">
        {/* Logo (Kiri) */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/tarkiz.png" className="h-12 w-24" alt="Logo" />
        </a>

        {/* Menu (Tengah - Desktop) */}
        <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-blue-700 hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-900 hover:text-blue-700">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-900 hover:text-blue-700">
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Search Bar (Kanan - Desktop) */}
        <div className="hidden md:block w-1/5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zM21 21l-4.35-4.35"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Avatar and Dropdown Menu (Kanan) */}
        <div className="hidden md:flex items-center ml-5">
          <IconButton onClick={handleMenuClick}>
            <Avatar
              alt="Profile"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              sx={{ width: 32, height: 32 }}
            />
            <ArrowDropDownIcon />
          </IconButton>

          {/* Dropdown Menu (Profile, Language, Log Out) */}
            <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              sx: {
                width: 200,
                borderRadius: 2,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                bgcolor: "#fff",
                padding: "5px 0",
              },
            }}
             // Mengubah posisi pembukaan ke kiri
             anchorOrigin={{
              vertical: "bottom",
              horizontal: "right", // Menempatkan menu terbuka ke kiri
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right", // Menempatkan titik transformasi ke kiri
            }}
          >
            <MenuItem onClick={handleMenuClose} className="hover:bg-blue-100">
              Profile Saya
            </MenuItem>
            <MenuItem onClick={handleMenuClose} className="hover:bg-blue-100">
              Bahasa
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose} className="text-red-500 hover:bg-red-50">
              Log Out
            </MenuItem>
          </Menu>
        </div>

        {/* Mobile Menu Button (Kanan) */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col p-4 border-t border-gray-200">
          {/* Search Bar pada Mobile */}
          <div className="mt-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 4a6 6 0 100 12 6 6 0 000-12zM21 21l-4.35-4.35"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
          <li className="py-2">
            <a href="#" className="block text-blue-700">
              Home
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="block text-gray-900 hover:text-blue-700">
              About
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="block text-gray-900 hover:text-blue-700">
              Services
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
