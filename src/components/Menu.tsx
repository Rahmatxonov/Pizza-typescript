import logo from "../assets/icons/logo.svg";
import line from "../assets/icons/line.svg";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowUpSFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <div className="flex  space-x-5">
          <img src={logo} alt="logo" />
          <span>
            <h3 className="font-extrabold text-[24px] leading-[29px] text-[#181818]">
              REACT PIZZA
            </h3>
            <p className="font-normal text-[16px] leading-[19px] text-[#7B7B7B]">
              самая вкусная пицца во вселенной
            </p>
          </span>
        </div>
        <div className="bg-[#FE5F1E] p-5 rounded-[30px] flex items-center space-x-3 text-white">
          <p>520 ₽</p>
          <img src={line} alt="line" />
          <FiShoppingCart />
        </div>
      </div>
      <div className="navbar flex justify-between mt-[81px]">
        <ul className="flex gap-x-[10px]">
          <li>
            <NavLink to={""}>Все</NavLink>
          </li>
          <li>
            <NavLink
              className="text-[16px] font-bold leading-[19px] text-[#2C2C2C] bg-[#F9F9F9] pt-[16px] pb-[16px] ps-[35px] pe-[35px] rounded-[30px]"
              to={"/pizza"}
            >
              Мясные
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-[16px] font-bold leading-[19px] text-[#2C2C2C] bg-[#F9F9F9] pt-[16px] pb-[16px] ps-[35px] pe-[35px] rounded-[30px]"
              to={"/pizza"}
            >
              Вегетарианская
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-[16px] font-bold leading-[19px] text-[#2C2C2C] bg-[#F9F9F9] pt-[16px] pb-[16px] ps-[35px] pe-[35px] rounded-[30px]"
              to={"/pizza"}
            >
              Гриль
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-[16px] font-bold leading-[19px] text-[#2C2C2C] bg-[#F9F9F9] pt-[16px] pb-[16px] ps-[35px] pe-[35px] rounded-[30px]"
              to={"/pizza"}
            >
              Острые
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-[16px] font-bold leading-[19px] text-[#2C2C2C] bg-[#F9F9F9] pt-[16px] pb-[16px] ps-[35px] pe-[35px] rounded-[30px]"
              to={"/pizza"}
            >
              Закрытые
            </NavLink>
          </li>
        </ul>
        <div>
          <div className="flex items-center space-x-2">
            <span className="flex items-center space-x-1">
              <RiArrowUpSFill
                onClick={handleClick}
                className="cursor-pointer text-[30px]"
              />
              <p className="font-bold text-[14px] leading-[17px] text-[#2C2C2C]">
                Сортировка по:
              </p>
            </span>
            <p className="popular font-normal text-[14px] leading-[17px]">
              популярности
            </p>
          </div>
          {menuOpen && (
            <div className="bg-white rounded-[10px] shadow p-5">
              <p className="p-3 text-[#FE5F1E] bg-[#FE5F1E0D]">популярности</p>
              <p className="p-3">по цене</p>
              <p className="p-3">по алфавиту</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
