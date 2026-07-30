/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useGalleryHooks } from "../../pages";

const CategoriesAvatar = ({ categories, formatCategory }) => {
  const { IsCategory } = useGalleryHooks();
  return (
    <div className="flex items-center justify-start gap-3 flex-wrap overflow-x-auto">
      {categories.map((category: any, index: number) => (
        <Link
          to={`/search/${IsCategory}/${formatCategory(category.keyword)}`}
          key={index}
          className="flex items-center justify-center gap-2.5 py-2 ps-2 pr-5 border border-solid border-gray-700 rounded-full w-fit cursor-pointer hover:bg-gray-900 transition-all"
        >
          <img
            className="w-7 h-7 rounded-full object-cover object-center"
            src={category.image}
            alt={formatCategory(category.keyword)}
          />
          <div className="text-xs text-white">
            <div>{formatCategory(category.keyword)}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesAvatar;
