# Flask & Express Fullstack Application

This project is a fullstack application consisting of a Flask backend and an Express frontend. The goal of this application is to demonstrate a simple client-server architecture where the frontend communicates with the backend through API calls.

## Project Structure

- **flaskp/backend**: Contains the Flask backend application.
- **flaskp/frontend**: Contains the Express frontend application.
- **flaskp/docker-compose.yml**: Docker Compose configuration to run both frontend and backend services.

## Backend

The backend is built using Flask and provides a simple API endpoint to handle form submissions.

### Key Files

- **app.py**: Main application file where the Flask app is defined.
- **requirements.txt**: Python dependencies for the backend.

### API Endpoint

- `POST /submit`: Receives form data and returns a JSON response.

## Frontend

The frontend is built using Express and EJS for templating. It provides a form for users to submit their data.

### Key Files

- **app.js**: Main application file where the Express app is defined.
- **views/form.ejs**: EJS template for the submission form.
- **package.json**: Node.js dependencies for the frontend.

### Features

- Displays a form to collect user information (name and email).
- Submits form data to the backend and displays the response.

## Running the Application

Ensure you have Docker and Docker Compose installed on your machine.

1. Build and start the services using Docker Compose:
   ```sh
   docker-compose up --build
   ```

2. Access the frontend at `http://localhost:3000`.

3. Fill out the form and submit to see the backend response.

## Technologies Used

- **Backend**: Flask, Flask-CORS
- **Frontend**: Express, EJS, Axios
- **Containerization**: Docker, Docker Compose

## License

This project is licensed under the MIT License.
