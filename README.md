### How to Boot the App

#### 1. Client-side
  - Open a terminal window.
  - Change directory to the `client` folder.
  - Run `npm install` to install dependencies.
  - Start the development server with `npm run dev`.


#### 2. Database
  - Install Docker Desktop.
  - Open a terminal window.
  - Initiate the DB with the following command :
    docker run --name <YOUR_DOCKER_CONTAINER_NAME> -e POSTGRES_PASSWORD=<YOUR_PW> -e POSTGRES_DB=<DATABASE_NAME> -p 5432:5432 -d postgres:15

#### 3. Server-side
  - Open a terminal window.
  - Change directory to the `server` folder.
  - Run `npm install` to install dependencies.
  - Start the server with `nodemon server.js`.

  ## Usage Flow

1. Open your browser and navigate to `http://localhost:5173`.
2. Click on the **Create New Course** button to access the upload interface.
3. Select and upload your course file (CSV format).
4. Upon successful upload, you will be automatically redirected to the Courses page.
5. Your uploaded data will be displayed in a table.