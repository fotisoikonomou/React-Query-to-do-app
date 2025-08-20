React Query Todo App
This is a simple single-page application built with React and TypeScript to demonstrate the use of the React Query library for data fetching, caching, and state management.

The app fetches a list of todos from a public API (JSONPlaceholder) and displays them in a clean, user-friendly list.

✨ Features
Data Fetching: Uses React Query's useQuery hook to fetch data asynchronously.

Automatic Caching: Automatically caches fetched data, preventing unnecessary network requests.

Loading & Error States: Handles loading and error states out of the box, providing a better user experience.

TypeScript: Built with TypeScript for type safety and better developer experience.

Clean Styling: Styled with plain CSS for a simple, elegant look.

🚀 Getting Started
To get a copy of this project up and running on your local machine, follow these steps.

Prerequisites
You'll need Node.js and npm installed on your machine.

Installation
Clone the repository:

Bash

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install the dependencies:

Bash

npm install
Run the application:

Bash

npm run dev
The app will be available at http://localhost:5173 (or a similar address).

💡 What I Learned
This project was a great way to learn about and implement key concepts of React Query, including:

Setting up the QueryClientProvider to make the client available throughout the app.

Using useQuery with a queryKey and queryFn.

Managing the different states of an API call (isLoading, isError, data).

Configuring queries for a better user experience.

