import { Link } from "react-router-dom";
import useCategoriesHooks from "../../hooks/useCategoriesHooks";
import CategoriesAvatar from "./CategoriesAvatar";

type Props = {
  title: string;
  formatCategory?: (text: string) => string;
  categories: {
    keyword: string;
    image: string;
  }[];
};

const CategoriesSection = ({ title, categories }: Props) => {
  const { formatCategory } = useCategoriesHooks();

  return (
    <div className="flex flex-col gap-2.5 items-start flex-1 py-2 px-3 border border-solid border-gray-800 rounded-sm w-fit">
      <div className="flex justify-between items-center w-full">
        <h4 className="text-md text-slate-300">{title}</h4>
        <Link
          to=""
          className="text-sm text-gray-400 underline underline-offset-2 hover:text-gray-200 transition-all"
        >
          See more
        </Link>
      </div>

      <CategoriesAvatar
        categories={categories}
        formatCategory={formatCategory}
      />
    </div>
  );
};

export default CategoriesSection;
