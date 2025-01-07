import React, { useState } from "react";
import { Menu, MenuItem, Avatar, IconButton, Divider } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/tarkiz.png" className="h-12 w-24" alt="Logo" />
        </a>

        {/* Menu Tengah (Desktop) */}
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

        {/* Search Bar (Desktop) */}
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

        {/* Avatar and Menu */}
        <div className="md:hidden flex items-center space-x-2 -mr-3">
          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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

          {/* Mobile Avatar */}
          <IconButton onClick={handleMenuClick}>
            <Avatar
              alt="Profile"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              sx={{ width: 32, height: 32 }}
            />
            <ArrowDropDownIcon />
          </IconButton>
        </div>

        {/* Desktop Avatar Menu */}
        <div className="hidden md:flex items-center ml-5">
          <IconButton onClick={handleMenuClick}>
            <Avatar
              alt="Profile"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              sx={{ width: 32, height: 32 }}
            />
            <ArrowDropDownIcon />
          </IconButton>

          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{ "aria-labelledby": "basic-button" }}
            PaperProps={{
              sx: {
                width: 180,
                borderRadius: 2,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                bgcolor: "#fff",
                padding: "5px 0",
              },
            }}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem
              onClick={handleMenuClose}
              className="hover:bg-blue-100"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <span>Profile Saya</span>
              <PersonIcon />
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              className="hover:bg-blue-100"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <span>Pengaturan</span>
              <SettingsIcon />
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => ("/login")}
              className="text-red-500 hover:bg-red-50"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <span className="text-red-600">Log Out</span>
              <LogoutRoundedIcon className="text-red-600" />
            </MenuItem>
          </Menu>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out z-10 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col p-4 border-t border-gray-200">
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
