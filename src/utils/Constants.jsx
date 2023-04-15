import { GoSearch } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { SlTag } from "react-icons/sl";

export const menu = [
  { name: "All", icon: <GoSearch /> },
  { name: "Images", icon: <BsImage size={14} /> },
  { name: "News", icon: <BiNews /> },
  { name: "Videos", icon: <RiVideoLine /> },
  { name: "Shopping", icon: <SlTag size={14} /> },
];

export const quickLinks = [
  "About",
  "Advertising",
  "Business",
  "How Search works",
];
export const settingMenu = ["Privacy", "Terms", "Settings"];

export const pagination = [
  { page: 1, startIndex: 1 },
  { page: 2, startIndex: 2 },
  { page: 3, startIndex: 3 },
  { page: 4, startIndex: 4 },
  { page: 5, startIndex: 5 },
  { page: 6, startIndex: 6 },
  { page: 7, startIndex: 7 },
  { page: 8, startIndex: 8 },
  { page: 9, startIndex: 9 },
  { page: 10, startIndex: 10 },
];