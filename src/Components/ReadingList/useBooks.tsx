import { booksRepository } from "./BooksRepository";
import { useQuery } from "@tanstack/react-query";

export function useBooks() {
  return useQuery({
    queryKey: ["books"],
    queryFn: () => booksRepository.getBooks(),
  });
}
