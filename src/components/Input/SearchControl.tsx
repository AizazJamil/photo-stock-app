interface SearchControlProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}

const SearchControl = ({
  search,
  setSearch,
  placeholder,
}: SearchControlProps) => {
  return (
    <input
      type="text"
      id="simple-search"
      className="px-6 py-2.5 bg-transparent border border-olive-700 rounded-l-0 rounded-full text-white text-sm focus:ring-olive-700 outline-0 focus:border-olive-700 block w-full placeholder:text-body-subtle"
      // placeholder="Search free photos..."
      placeholder={placeholder}
      onChange={(e) => setSearch(e.target.value)}
      value={search}
      //   required=""
    />
  );
};

export default SearchControl;
