import { useBooks } from "./useBooks";

export function ReadingList() {
  const { data: books = [] } = useBooks();

  return (
    <div className="flex flex-col">
      {books.map((book) => (
        <div
          key={book.id}
          className="flex flex-col gap-2 rounded-lg border border-slate-400 bg-white p-2"
        >
          <div className="flex items-start justify-between gap-4">
            <span className="text-lg font-semibold text-slate-900">
              {book.title}
            </span>
            <span className="text-sm text-slate-600">{book.author}</span>
          </div>
          <span className="text-sm text-slate-700">
            Date Added: {book.dateAdded}
          </span>
          <span className="text-sm text-slate-700">
            Date Finished: {book.dateFinished ?? "Not finished"}
          </span>
          <span className="text-sm font-medium text-slate-800">
            Status: {book.status}
          </span>
        </div>
      ))}
    </div>
  );
}
