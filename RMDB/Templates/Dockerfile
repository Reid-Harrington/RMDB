# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install Flask gunicorn

# Expose the port that the app listens on
EXPOSE 8000

# Set the environment variable for Flask
ENV FLASK_APP=app.py

# Run the command to start the Flask app
CMD ["flask", "run", "--host=0.0.0.0", "--port=8000"]