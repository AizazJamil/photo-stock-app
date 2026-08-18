import type { Dispatch, FormEvent, SetStateAction } from "react";

// Search Header Interface
export interface SearchHeaderProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
  category?: "photos" | "videos";
  // setCategory: (value: "photos" | "videos") => void;
  query?: string;
}
