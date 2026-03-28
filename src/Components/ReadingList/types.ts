export type ReadingStatus = "Unread" | "Reading" | "Finished";

export type Book = {
  id: number;
  title: string;
  author: string;
  dateAdded: string;
  dateFinished: string | null;
  status: ReadingStatus;
};
