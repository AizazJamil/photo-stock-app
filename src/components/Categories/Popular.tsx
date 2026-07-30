import { Link } from "react-router-dom";
import useCategoriesHooks from "../../hooks/useCategoriesHooks";

const Popular = () => {
  const { popularCategories, formatCategory } = useCategoriesHooks();

  return (
    <div className="flex flex-col gap-2.5 items-start flex-1 py-2 px-3 border-[1px] border-solid border-gray-800 rounded-sm w-fit">
      <div className="flex justify-between items-center w-full">
        <h4 className="text-md text-slate-300">Popular</h4>
        <Link
          to=""
          className="text-sm text-gray-400 underline underline-offset-2 hover:text-gray-200 transition-all"
        >
          See more
        </Link>
      </div>
      <div className="flex items-center justify-start gap-3 flex-wrap overflow-x-auto">
        {popularCategories.map((category, index) => (
          <Link
            to={`/search/${category.keyword}`}
            key={index}
            className="flex items-center justify-center gap-2.5 py-2 ps-2 pr-5 border-[1px] border-solid border-gray-700 rounded-full w-fit cursor-pointer hover:bg-gray-900 transition-all"
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
    </div>
  );
};

export default Popular;
