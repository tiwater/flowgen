# Use a build stage to compile and build dependencies
FROM python:3.11-slim as builder

WORKDIR /app 

# Copy requirements and install dependencies,
# Utilize the cache unless requirements.txt has changed
COPY requirements.txt .
RUN pip3 wheel --no-cache-dir --no-deps --wheel-dir /app/wheels -r requirements.txt

############################
# Begin the final stage
FROM python:3.11-slim

# Copy only the necessary wheels from builder stage
COPY --from=builder /app/wheels /wheels
COPY --from=builder /app/requirements.txt .

# Install the python dependencies
RUN pip3 install --no-cache /wheels/*

# Set the working directory in the container
WORKDIR /app

# Copy the code into the container
COPY . .

# Set environment variables
ENV UVICORN_WORKERS=3 \
  UVICORN_PORT=5004 \
  UVICORN_HOST=0.0.0.0 \
  UVICORN_LOG_LEVEL=debug

# Command to run the application
CMD ["sh", "-c", "uvicorn app.main:app --host ${UVICORN_HOST} --port ${UVICORN_PORT} --workers ${UVICORN_WORKERS} --log-level ${UVICORN_LOG_LEVEL}"]