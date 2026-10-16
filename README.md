# spring-boot-project

Full-stack starter kit: Spring Boot REST API with an Angular 2 single-page app, Gradle multi-project build, and Webpack dev tooling.

## Overview

This repository combines a Java 8 Spring Boot backend with an Angular 2 (TypeScript) frontend. Gradle orchestrates both modules (`backend` and `frontend`): the API serves JSON from embedded Tomcat (default port **8080**), while the frontend dev server runs on **3000** with Webpack. The sample `/test/get/json` endpoint demonstrates cross-origin access from the UI during local development.

The layout follows the classic [spring-boot-angular2](https://github.com/borysn/spring-boot-angular2) starter pattern—useful for prototyping RESTful apps with Bootstrap 4, Sass, Karma, and Jasmine.

## Features

- Spring Boot 1.5 web starter with a sample REST controller and service layer
- Angular 2 app with routing (home, calendar, hello/test views)
- Hash-based routing and `Http` client calling the backend API
- Gradle wrapper and Node Gradle plugin for reproducible frontend installs
- Webpack 2 dev and production configs with HMR support
- Karma/Jasmine unit test setup for the frontend
- Sample JSON message model serialized with Gson on the classpath

## Tech stack

| Layer | Technologies |
|-------|----------------|
| Backend | Java 8, Spring Boot 1.5.2, Gradle 3.4 |
| Frontend | Angular 2.4, TypeScript 2.2, Webpack 2, Bootstrap 4 alpha, Sass |
| Build | Gradle multi-project (`settings.gradle`: `frontend`, `backend`) |
| Testing | JUnit 4 (backend), Karma + Jasmine (frontend) |

## Prerequisites

- **JDK 8** — set `JAVA_HOME`
- **Optional:** system Gradle 3.x (otherwise use `./gradlew` / `gradlew.bat`)
- **Optional:** Python 2.7.x — some Node native modules may expect `python` on `PATH` during `npm install`

Node.js is downloaded automatically by the frontend Gradle plugin (Node 6.4.0 / npm 3.10.6) when you run Gradle tasks that install npm dependencies.

## Getting started

```bash
git clone https://github.com/vonmiller1/spring-boot-project.git
cd spring-boot-project
```

No secret values are required for a basic local run. For Spring DevTools remote support, set `DEVTOOLS_REMOTE_SECRET` (see [Configuration](#configuration)).

## Running locally

From the repository root:

```bash
# Windows
gradlew.bat clean build runAll

# macOS / Linux
./gradlew clean build runAll
```

- Backend: [http://localhost:8080](http://localhost:8080) (e.g. [http://localhost:8080/test/get/json](http://localhost:8080/test/get/json))
- Frontend dev server: [http://localhost:3000](http://localhost:3000)

The `runAll` task in the backend module depends on `bootRun`. Frontend assets are built/served via npm scripts invoked from Gradle (`frontend` module `runAll` → `npm run start`).

**Frontend only** (from `frontend/` after `npm install`):

```bash
npm start
```

**Backend only** (from root):

```bash
gradlew :backend:bootRun
```

## Testing

Documented commands only (not executed in maintenance passes):

```bash
# Frontend unit tests (via Gradle)
gradlew :frontend:check

# Or from frontend/
npm test
```

Backend smoke test: `gradlew :backend:test` runs `SpringBootAngular2ApplicationTests`.

## Project structure

```
spring-boot-project/
├── backend/                 # Spring Boot application
│   └── src/main/java/io/abnd/
│       ├── rest/            # REST controllers
│       ├── service/         # Service interfaces and implementations
│       └── model/           # DTOs (e.g. Message)
├── frontend/                # Angular 2 + Webpack
│   ├── config/              # webpack.*.js, karma.conf.js
│   └── src/app/             # Components, routing, services
├── build.gradle             # Root wrapper version
├── settings.gradle          # Includes frontend + backend
├── gradlew / gradlew.bat
└── LICENSE                  # MIT
```

## Configuration

| Setting | Location | Notes |
|---------|----------|--------|
| Server port | `backend/src/main/resources/application.properties` | Default `8080` |
| CORS | `TestController` | Allows `http://localhost:3000` for dev |
| DevTools remote secret | `application.properties` / env | Set `DEVTOOLS_REMOTE_SECRET`; do not commit real secrets |
| Webpack dev port | `frontend/config/webpack.dev.js` | Default `3000` |

Logging level for Spring Web can be tuned in `application.properties`.

## Deployment

- Production frontend bundle: from `frontend/`, `npm run build:prod` (output in `frontend/dist/`).
- Serve static files from `dist/` or integrate with the backend per your deployment target.
- `.travis.yml` is present for historical CI; adjust JDK and Chrome setup for current Travis or GitHub Actions if you enable CI.

## Contributing

1. Fork the repository and create a feature branch.
2. Keep commits focused; match existing Java/TypeScript style.
3. Open a pull request with a short description of the change.

## License

[MIT](LICENSE) — Copyright (c) 2016 Borys H.N.
