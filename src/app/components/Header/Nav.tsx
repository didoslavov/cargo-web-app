import { IoMdClose } from "react-icons/io";
import NavItem from "./NavItem";
import Actions from "./Actions";

function Nav({
  isMobileMenuOpen,
  toggleMobile,
}: {
  isMobileMenuOpen: boolean;
  toggleMobile: () => void;
}) {
  const navItems = [
    "Начало",
    "За нас",
    "Услуги",
    "Цени",
    "Как работи",
    "Контакти",
  ];

  return (
    <>
      {!isMobileMenuOpen ? (
        <nav className="flex gap-14 xl:gap-44">
          <ul className="hidden items-center text-[16px] font-medium leading-[170%] tracking-[0px] text-dark-blue-800 lg:gap-[40px] xl:flex">
            {navItems.map((item, i) => (
              <NavItem key={i}>{item}</NavItem>
            ))}
          </ul>
          <Actions className="hidden lg:flex lg:items-center lg:gap-9" />
        </nav>
      ) : (
        <div className="fixed right-0 top-0 z-50 flex h-screen w-screen flex-col justify-center  gap-16 bg-main-white ps-10 transition-all lg:hidden">
          <IoMdClose
            className="absolute right-4 top-5 cursor-pointer text-4xl"
            onClick={toggleMobile}
          />
          <ul className="flex flex-col gap-6 font-bold">
            {navItems.map((item, i) => (
              <NavItem key={i}>{item}</NavItem>
            ))}
          </ul>
          <Actions className="flex w-[60%] flex-col gap-3" />
        </div>
      )}
    </>
  );
}

export default Nav;
