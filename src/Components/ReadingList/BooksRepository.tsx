import type { Book } from "./types";
import { mockBooks } from "./mockData";

export interface BooksRepository {
  getBooks(): Promise<Book[]>;
}

export class MockBooksRepository implements BooksRepository {
  async getBooks(): Promise<Book[]> {
    return mockBooks;
  }
}

export const booksRepository = new MockBooksRepository();
