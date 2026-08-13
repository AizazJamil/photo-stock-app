// Search Header Interface
export interface SearchHeaderProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  category?: "photos" | "videos";
  // setCategory: (value: "photos" | "videos") => void;
  query?: string;
}
