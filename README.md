# Dexter App

This is a simple application built with Next.js 14 App Router, leveraging server-side rendering (SSR) to provide a performant user experience.

## Features

- **Integration of Charts**: The app integrates charts using the Recharts library to visualize data effectively.
- **Paginated Table**: Utilizes the @tanstack query library to implement a paginated table, enhancing data presentation and navigation.
- **Shadcn Library**: Includes the Shadcn library for styling components and enhancing the UI.
- **Implementation of Incomplete Registered Users Filter**: Implements a filter to display incomplete registered users.

## Note

While the app currently handles filtering of incomplete registered users on the frontend, it's worth noting that exposing a filter query via the API would be a more efficient approach. By doing so, filtering could be handled on the backend, reducing the amount of data transferred and improving overall performance.

Thank you for checking out this README. Happy coding! 🚀
