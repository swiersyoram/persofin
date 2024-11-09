# Persofin API

This section of the project contains a java spring application responsible for handling the backend logic of the Persofin platform.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- Java 21 or higher
- Maven 3.9.6+
- PostgreSQL

### Installation

1. Install dependencies:
   ```bash
   mvn clean install
   ```

### Configuration


   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/your-database
   spring.datasource.username=your-username
   spring.datasource.password=your-password
   ```

2. **Auth0 Configuration**:
    - Update `application.properties` with your Auth0 domain and credentials.
   ```properties
   auth0.domain=your-auth0-domain
   auth0.clientId=your-auth0-client-id
   auth0.clientSecret=your-auth0-client-secret
   ```

### Running the Application

To run the application, use the following command:

```bash
mvn spring-boot:run
```

The application should now be running at `http://localhost:8080`.

### Testing

To run tests:

```bash
mvn test
```

## Technologies Used

- **Java 17**
- **Spring Boot** - for building the REST API
- **Maven** - for dependency management
- **PostgreSQL** - for database management
- **Auth0** - for authentication and authorization

## Contributing

If you want to contribute, please fork the repository and make changes as you’d like. Pull requests are always welcome!
