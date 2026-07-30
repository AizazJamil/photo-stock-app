import bannerImage from "../../assets/hero-wallpapers.jpeg";
import useCategoriesHooks from "../../hooks/useCategoriesHooks";
import BannerContent from "./BannerContent";
import BannerList from "./BannerList";

const Banner = () => {
  const { formatCategory } = useCategoriesHooks();
  const { trendingCategories } = useCategoriesHooks();
  return (
    <section
      className="py-60 relative"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <BannerContent />
      <BannerList
        categories={trendingCategories}
        formatCategory={formatCategory}
      />
      <div className="absolute bg-black/50 inset-0 z-1 w-full h-full"></div>
    </section>
  );
};

export default Banner;
