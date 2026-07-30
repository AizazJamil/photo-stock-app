import SearchInput from "../Input/SearchInput";

const BannerContent = () => {
  return (
    <div className="pt-8 pb-4 px-4 mx-auto max-w-screen-2xl text-center lg:pt-16 lg:pb-8 relative z-10">
      <h1 className="mb-6 text-4xl font-light tracking-tighter text-white md:text-5xl lg:text-6xl">
        Beautiful Free Stock Photos
      </h1>
      <p className="mb-8 text-base font-normal md:text-md text-white max-w-3xl m-auto">
        New CCO images added daily, from copyright restrictions.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 md:space-x-4">
        <SearchInput />
      </div>
    </div>
  );
};

export default BannerContent;
