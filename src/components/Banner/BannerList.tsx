/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useGalleryHooks } from "../../pages";

const BannerList = ({ categories, formatCategory }) => {
  const { IsCategory } = useGalleryHooks();
  return (
    <>
      <ul className="relative z-2 list-none flex items-center justify-center gap-3 text-white">
        <li className="font-bold text-sm">Trendings:</li>
        {categories?.slice(0, 4).map((category: any, index: number) => (
          <li key={index}>
            <Link
              to={`/search/${IsCategory}/${formatCategory(category.keyword)}`}
              className="underline cursor-pointer hover:text-olive-500 transition-colors underline-offset-3 font-light text-sm"
            >
              {formatCategory(category.keyword)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BannerList;
