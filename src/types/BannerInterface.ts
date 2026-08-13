// Category Item Interface
interface CategoryItem {
  keyword: string;
}

// Banner List Interface
export interface BannerListProps {
  categories: CategoryItem[];
  formatCategory: (keyword: string) => string;
  limit?: number;
  title?: string;
  className?: string;
}
