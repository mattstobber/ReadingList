import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { ReadingList } from "./ReadingList";

vi.mock("./useBooks", () => ({
  useBooks: vi.fn(),
}));

import { useBooks } from "./useBooks";

const mockUseBooks = vi.mocked(useBooks);

it("renders book details", () => {
  mockUseBooks.mockReturnValue({
    data: [
      {
        id: 1,
        title: "How to tell if your AI Agent is plotting against you",
        author: "Frank Herbert",
        dateAdded: "2026-03-15",
        dateFinished: null,
        status: "Reading",
      },
    ],
  } as ReturnType<typeof useBooks>);

  render(<ReadingList />);

  expect(
    screen.getByText("How to tell if your AI Agent is plotting against you"),
  ).toBeInTheDocument();
  expect(screen.getByText("Frank Herbert")).toBeInTheDocument();
});
