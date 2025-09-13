#Smart Cart Frontend



---

## Table of Contents

- [Project Overview](#project-overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [Usage Guide](#usage-guide)
- [Folder Structure](#folder-structure)
- [Testing](#testing)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Contact](#contact)

---

## Project Overview

Bit-Basket enables users to manage, track, and exchange digital assets via an intuitive web interface. The frontend is responsible for all visual components, user interactions, and connecting to backend APIs for data and authentication.

---

## Live Demo

If available, you can view the live demo [here](#).

---

## Features

- **User Authentication:** Secure login and registration using JWT tokens.
- **Asset Management:** Add, view, edit, and delete digital assets.
- **Portfolio Dashboard:** Real-time overview of all assets and recent activities.
- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **Search & Filtering:** Quickly locate assets with advanced filters.
- **Notifications:** Receive updates for price changes, new assets, and other events.
- **Light/Dark Theme:** Toggle between themes for accessibility.
- **Error Handling:** Clear messages and guidance for failed actions.

---

## Tech Stack

- **React** (UI library)
- **Redux** (Global state management)
- **React Router** (Client-side routing)
- **Material UI** (Component library)
- **Axios** (HTTP requests)
- **SASS/SCSS** (Styling)
- **Jest** & **React Testing Library** (Testing)

---

## Installation & Setup

### Prerequisites

- Node.js v16+ ([download](https://nodejs.org/))
- npm or yarn

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/HriticSunder/MERN-Smart-Cart-CRUD.git
   cd MERN-Ecommerce-CRUD/frontend
   ```
2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Environment Variables**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` as needed (e.g. API URLs, secret keys).
4. **Start Development Server**
   ```bash
   npm start
   # or
   yarn start
   ```
   - The app runs at [http://localhost:3000](http://localhost:3000).

5. **Production Build**
   ```bash
   npm run build
   # or
   yarn build
   ```
   - Output is in the `build/` directory.

---

## Configuration

- **API Endpoint:** Set the backend API URL in `.env` (`REACT_APP_API_URL`).
- **Other Configs:** Adjust theme defaults, authentication keys, or feature toggles in `.env`.

Example `.env`:
```
REACT_APP_API_URL=https://your-backend-url/api
REACT_APP_THEME=dark
```

---

## Usage Guide

- **Sign Up / Login:** Create an account or log in.
- **Dashboard:** View your asset portfolio and recent activity.
- **Add/Edit/Delete Assets:** Use the dashboard controls.
- **Search/Filter:** Use search bar and filters for quick access.
- **Notifications:** Check alerts for important updates.
- **Settings:** Access via profile icon for preferences and themes.

---

## Folder Structure

```
frontend/
├── public/            # Static files (index.html, favicon, etc.)
├── src/
│   ├── assets/        # Images, icons, theme files
│   ├── components/    # Reusable React components
│   ├── pages/         # Main page components (Dashboard, Login, etc.)
│   ├── redux/         # Redux store, actions, reducers
│   ├── routes/        # Route definitions
│   ├── services/      # API interface and helpers
│   ├── styles/        # Global and component SCSS files
│   ├── utils/         # Utility functions
│   ├── App.js         # Main App component
│   ├── index.js       # Entry point
│   └── ...            # Additional files
```

---

## Testing

Run all tests:
```bash
npm test
# or
yarn test
```
- Uses Jest and React Testing Library.
- Add new tests in `src/__tests__/` or alongside components.

---

## Contributing

1. Fork the repository.
2. Create your branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Describe your feature"
   ```
4. Push and open a Pull Request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

---

## Troubleshooting

- **Port Conflict:** Change the default port in `.env` (`PORT=3001`).
- **API Errors:** Ensure backend is running and API URL is correct.
- **Dependency Issues:** Delete `node_modules` and reinstall with `npm install`.

---

## License

This project is licensed under the [MIT License](LICENSE).

---
