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
        <div className="fixed right-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center  gap-16 bg-main-white transition-all lg:hidden">
          <IoMdClose
            className="absolute right-8 top-14 cursor-pointer text-4xl"
            onClick={toggleMobile}
          />
          <ul className="flex flex-col gap-6 font-bold">
            {navItems.map((item, i) => (
              <NavItem key={i}>{item}</NavItem>
            ))}
          </ul>
          <Actions className="flex w-[40%] flex-col items-center gap-3" />
        </div>
      )}
    </>
  );
}

export default Nav;
