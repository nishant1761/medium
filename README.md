# Blogg

Welcome to the **Blogg** web application! This project is a modern blogging platform inspired by Medium, built using a powerful and scalable web technology stack. Below are the detailed instructions to set up, run, and contribute to the project.

## Table of Contents

- [Technology Stack](#technology-stack)
- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Common Module Setup](#common-module-setup)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

---

## Technology Stack

- **Programming Language**: TypeScript
- **Frontend Framework**: React
- **Backend Framework**: Hono
- **Database**: PostgreSQL
- **ORM**: Prisma
- **HTTP Client**: Axios
- **Data Validation**: Zod

## Project Overview

**Blogg** is a dynamic blogging platform where users can create, update, and share articles effortlessly. It provides an intuitive user experience supported by a robust backend infrastructure. The project follows a modular and scalable architecture to ensure efficient development and maintenance.

## Project Structure

The codebase is divided into three primary directories:

- **frontend**: Contains the React code for the user interface.
- **backend**: Holds the Hono-based server-side logic to manage API requests.
- **common**: Provides a shared NPM module with Zod validation schemas and TypeScript types to maintain consistency.

---

## Installation and Setup

### Prerequisites

Ensure the following tools are installed on your system before starting:

- **Node.js** (version >=14.x)
- **npm** (version >=6.x)
- **PostgreSQL**
- **Wrangler CLI** (for managing Cloudflare Workers)

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/blogg.git
   cd blogg
   ```

2. **Install backend dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Set up the PostgreSQL database**:
   - Start PostgreSQL and create a new database.
   - Update the `.env` file in the `backend` folder with your database connection details:
     ```env
     DATABASE_URL=postgresql://username:password@localhost:5432/blogg_db
     ```

4. **Configure environment variables**:
   Create a `wrangler.toml` file in the `backend` folder:
   ```toml
   [vars]
   DATABASE_URL = "postgresql://username:password@localhost:5432/blogg_db"
   JWT_SECRET = "your_jwt_secret"
   ```

5. **Run database migrations**:
   ```bash
   npx prisma migrate dev
   ```

### Frontend Setup

1. **Install frontend dependencies**:
   ```bash
   cd ../frontend
   npm install
   ```

### Common Module Setup

1. **Set up the shared module**:
   ```bash
   cd ../common
   npm install
   npm run build
   ```

---

## Configuration

### Backend Configuration

Verify the `wrangler.toml` file in the `backend` directory contains the correct database and JWT configurations:

```toml
[vars]
DATABASE_URL = "postgresql://username:password@localhost:5432/blogg_db"
JWT_SECRET = "your_jwt_secret"
```

Ensure the `.env` file includes the database connection URL:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/blogg_db
```

---

## Running the Application

1. **Start the backend server**:
   ```bash
   cd backend
   npm run dev
   ```
   The backend server will be available at `http://127.0.0.1:8787`.

2. **Start the frontend server**:
   ```bash
   cd ../frontend
   npm start
   ```
   The frontend will be accessible at `http://localhost:3000`.

---

## Contributing

We encourage contributions to **Blogg**! Follow these steps to get started:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and test them.
4. Commit your changes:
   ```bash
   git commit -m "Add your descriptive commit message"
   ```
5. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. Submit a Pull Request on GitHub.

---

## License

This project is licensed under the **MIT License**. Refer to the [LICENSE](LICENSE) file for further details.

