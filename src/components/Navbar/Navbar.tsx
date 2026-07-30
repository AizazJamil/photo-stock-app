import Logo from "../Logo/Logo";
import NavbarList from "./NavbarList";

const navList = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 2,
    title: "Services",
    link: "/services",
  },
];

const Navbar = () => {
  return (
    <nav className=" fixed w-full z-20 top-4 inset-s-0">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4 bg-[rgba(15, 15, 15, 0.2)] backdrop-blur-sm saturate-150 rounded-full border border-gray-800">
        <Logo />
        <div className="flex items-center md:order-2 md:hidden">
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 pr-8"
          id="navbar-search"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <NavbarList items={navList} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
