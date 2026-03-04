# ProLetter : A cover letter viewer

A single-page React application to display cover letters from local JSON files.

## Setup

1. Clone and install:

```bash
git clone https://github.com/Naedri/pro-letter.git
cd pro-letter
npm install
```

2. Add an `.env` file containing the following:

```env
VITE_DOCUMENT_LANG=en
VITE_DOCUMENT_TITLE=Cover letter
```

3. Run:

```bash
npm run build
npm run preview
```

4. Open the [localhost:4173/pro-letter/first-one](http://localhost:4173/pro-letter/first-one) url.

## Customization

You can add additional cover letters in the [`pro-letters`](./src/data/pro-letters) folder, as long as the JSON file respect the [`pro-letter.json`](./src/schema/pro-letter.json) schema.

## Architecture

| Component                                                     | Responsibility                                                                                                                                                                                                                   |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`main.tsx`](./src/main.tsx)                                  | Bootstraps the React app, mounts it to the DOM, and wraps it in the router. No routing or data logic is handled here.                                                                                                            |
| [`App.tsx`](./src/App.tsx)                                    | Defines the routes of the SPA. It maps URLs to page components but does not load or render data directly.                                                                                                                        |
| [`CoverLetterPage.tsx`](./src/pages/CoverLetterPage.tsx)      | A container/page component that reads the URL, loads the corresponding JSON cover letter, handles missing data, and passes it to the view.                                                                                       |
| [`CoverLetterView.tsx`](./src/components/CoverLetterView.tsx) | A presentational component that receives the cover letter data and renders it using the individual UI components (Applicant, Recipient, Position, Subject, Content). It is purely visual and unaware of routing or data sources. |
