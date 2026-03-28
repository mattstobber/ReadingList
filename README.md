# Matthew Stobber Technical Interview

The code for this submission is in `Components/ReadingList`. The core work is in `ReadingList.tsx`, with other files supporting it. The component folder is less than 100 lines.

Files included:
- `ReadingList.tsx`: Renders a list of `Book` objects with Tailwind styling.
- `ReadingList.test.tsx`: Tests for the `ReadingList` component.
- `useBooks.tsx`: Light data fetch hook
- `BooksRepository.tsx`: VERY small repoistory layer to simulate fetching books.
- `mockData.ts`: Mock book data used for rendering and testing.
- `index.ts`: Barrel file for the component’s public exports.
- `types.ts`: Domain types used by the component.
 

## Why I chose this submission

I chose a Reading List because it’s a simple and intuitive problem space, but still has enough structure to demonstrate state management, conditional rendering, and testability.

It also naturally supports extensions like filtering, updating status, and adding/editing entries, which makes it a good foundation for a collaborative interview where the component can evolve over time.

I kept the implementation intentionally small so it’s easy to read and build on.


## Running the Project

Install dependencies:
npm install

Run the app:
npm run dev

Run tests:
npm run test
