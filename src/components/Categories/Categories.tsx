import useCategoriesHooks from "../../hooks/useCategoriesHooks";
import Container from "../Container/Container";
import CategoriesSection from "./CategoriesSection";

const Categories = () => {
  const { trendingCategories, popularCategories } = useCategoriesHooks();

  return (
    <div className="relative py-8">
      <Container>
        <div className="flex flex-wrap items-start justify-start gap-6">
          {/* <Popular />
          <Trending /> */}
          <CategoriesSection title="Popular" categories={popularCategories} />
          <CategoriesSection title="Trending" categories={trendingCategories} />
        </div>
      </Container>
    </div>
  );
};

export default Categories;
