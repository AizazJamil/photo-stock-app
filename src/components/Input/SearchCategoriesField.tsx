import "flowbite";
import { initDropdowns } from "flowbite";
import { useEffect } from "react";

interface Option {
  label: string;
  value: "photos" | "videos";
}

// interface SearchCategoriesFieldProps {
//   category: string;
//   setCategory: (value: string) => void;
// }

interface SearchCategoriesFieldProps {
  category: "photos" | "videos";
  setCategory: (value: "photos" | "videos") => void;
}

const SearchCategoriesField = ({
  category,
  setCategory,
}: SearchCategoriesFieldProps) => {
  // const [, /*isOpen*/ setIsOpen] = useState(false);

  const options: Option[] = [
    { label: "Photos", value: "photos" },
    { label: "Videos", value: "videos" },
  ];

  const selected = options.find((item) => item.value === category);

  const handleSelect = (value: "photos" | "videos") => {
    setCategory(value);
    // setIsOpen(false);
  };

  useEffect(() => {
    initDropdowns();
  }, []);

  return (
    <>
      <button
        id="dropdown-button"
        data-dropdown-toggle="dropdown"
        type="button"
        // onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center shrink-0 z-11 text-body-subtle bg-transparent box-border border border-olive-700 border-r-0 font-medium leading-5 rounded-s-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer"
      >
        <svg
          className="w-4 h-4 me-1.5"
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
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
          />
        </svg>
        {/* Photos */}
        {selected?.label}
        <svg
          className="w-4 h-4 ms-1.5"
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
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>
      {/* {isOpen && ( */}
      <div
        id="dropdown"
        className="z-11 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-30"
      >
        <ul
          className="p-2 text-sm text-body font-medium text-left"
          aria-labelledby="dropdown-button"
        >
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                //   className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md relative z-11"
                className={`w-full text-left p-2 rounded-md hover:bg-neutral-tertiary-medium cursor-pointer ${
                  category === option.value
                    ? "bg-neutral-tertiary-medium text-heading"
                    : ""
                }`}
                //   onClick={() => {
                //     setCategory(option.value);
                //     setIsOpen(false);
                //   }}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* )} */}
    </>
  );
};

export default SearchCategoriesField;
