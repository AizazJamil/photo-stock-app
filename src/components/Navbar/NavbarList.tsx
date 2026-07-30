/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";

interface navItem {
  id: number;
  title: string;
  link: string;
}

interface NavListProps {
  items: navItem[];
}

const NavbarList = ({ items }: NavListProps) => {
  const { pathname } = useLocation();
  return (
    <>
      {items.map(({ title, link }: any) => (
        <li key={link}>
          <Link
            to={link}
            className={
              pathname === link
                ? "block py-2 px-3 text-white bg-lime-300 rounded md:bg-transparent md:text-lime-300 md:p-0"
                : "block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-lime-300 md:p-0"
            }
          >
            {title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavbarList;
