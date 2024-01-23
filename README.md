# AutoComplete

<a name="readme-top"></a>
 AutocompleteReact

This project was generated with [React CLI](https://github.com/react/angular-cli) version 18.2.0.


[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">AutoComplete</h3>

</div>

<!-- ABOUT THE PROJECT -->

## About The Project

## Description

This project is a React Autocomplete component. It provides an input box that suggests tags based on user input. Additionally, it allows users to add selected tags, visually displaying them.

## Technologies Used

- React
- Styled Components
- @tanstack/react-query for global state management
- @tanstack/react-query-persist-client for state persistence in localStorage
- @tanstack/query-sync-storage-persister for state synchronization across instances
- @omni/frontend-ui-components for styles and themes
- react-router-dom for navigation

## Features

- Adding tags on Enter press
- Removing tags by clicking on them
- Dynamic suggestions based on user input

## Setup

### Prerequisites

- Node.js
- npm (or yarn)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Luklopes/react-autocomplete

2. Install dependencies:

yarn install or npm install   

3.  Run the Development Server:
``yarn start

4. Contribution

If you'd like to contribute to this project, follow these steps:

Fork the project
Create a branch with your feature (git checkout -b feature/MyFeature)
Commit your changes (git commit -m 'Added a new feature')
Push to the branch (git push origin feature/MyFeature)
Open a Pull Request   


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- React
- Prettier VSCode
- EsLint VSCode
- Nodejs

Use the .env.example file as a template to create your .env file.



<p align="right">(<a href="#readme-top">back to top</a>)</p>


<

<!-- ROADMAP -->

## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "cli" command to easily copy and create project
- [ ] Multi-Databases support
  - [x] PostgreSQL
  - [ ] Dynamo

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LINKS -->

- [Behavior Driven Development](https://pt.wikipedia.org/wiki/Behavior_Driven_Development)

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
 
1. Clone de project or Fork the project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/NEJCPM/ne-store/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/NEJCPM/ne-store/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/NEJCPM/ne-store/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/NEJCPM/ne-store/blob/master/LICENSE.txt
[Typescript]: https://img.shields.io/badge/typescript-000000?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[Postgre]: https://img.shields.io/badge/postgresql-000000?style=for-the-badge&logo=postgresql&logoColor=white
[Postgre-url]: https://www.postgresql.org/
[Serverless]: https://img.shields.io/badge/Serverless-000000?style=for-the-badge&logo=serverless&logoColor=white
[Serverless-url]: https://www.serverless.com/

### License
This project is licensed under the MIT License.



# Microfrontends with Single SPA and React

## Overview

This project leverages the Single SPA (Single Page Application) architecture in conjunction with React to build a modular Microfrontends system. The decision to adopt Single SPA comes with several advantages that enhance the development, maintenance, and user experience of our Microfrontends.

## Key Advantages

### Independence of Development

Single SPA enables our teams to work independently on different Microfrontends using React. Each Microfrontend is treated as a standalone application, facilitating seamless development and maintenance.

### Dynamic Loading

Single SPA supports dynamic loading of Microfrontends, ensuring that only the necessary components are loaded when the user navigates to a specific part of the application. This results in faster loading times and a more efficient user experience.

### Consistent Routing

Routing between Microfrontends is consistently managed by Single SPA, ensuring a smooth transition between different parts of the application.

### Simplified Integration

Integration of Single SPA with our React Microfrontends is streamlined due to the modular nature of React. Each Microfrontend can be developed as an independent React application, leveraging React's benefits while benefiting from Single SPA's integration capabilities.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Implementation with Single SPA

### Modular Configuration

We configure each React Microfrontend as an independent application in Single SPA, specifying its dependencies and individual settings.

### Coherent Routing

Single SPA is employed to manage routing between Microfrontends, ensuring a cohesive navigation experience for end-users.

### Dynamic Loading

We utilize Single SPA's dynamic loading to optimize performance, ensuring that only the necessary code is loaded as needed.

### Testing and Maintenance

The Single SPA approach simplifies testing and maintenance as each Microfrontend can be tested independently, and updates can be implemented without affecting other parts of the application.

## Why Single SPA?

The choice of Single SPA for our Microfrontends was driven by its ability to offer:

- **Independence**: Allows teams to work independently, enhancing flexibility.
- **Efficiency**: Dynamic loading leads to faster load times and a smoother user experience.
- **Consistency**: Provides consistent routing for a seamless user journey.
- **Integration Ease**: Integrates seamlessly with React, offering the best of both worlds.

In conclusion, implementing Single SPA with React in our Microfrontends has facilitated a seamless integration, allowing us to harness the modularity of React while maintaining cohesion and efficiency in our Microfrontends ecosystem. This approach continues to drive our ability to deliver innovative and high-quality web experiences for our users.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Webpack Configuration Details

### Initial Configuration

The provided Webpack configuration file (`webpack.config.js`) is responsible for setting up the development environment and bundling our React Microfrontends. Let's break down some key aspects:

#### Initial Configuration

The code starts by importing necessary dependencies, such as `path`, `webpack`, and plugins like `HtmlWebpackPlugin` and `ESLintPlugin`. The `dotenv` package is configured to handle environment variables.

#### Constants and Environment Variables

Constants like `ORG_NAME` and `APP_NAME` are declared to structure the project organization. Environment variables are consolidated in the `ENVS` object, including `APP_ENV` for the execution environment.

### Webpack Configuration

- **Entry Point (`entry`):** Specifies the entry point of the application.
- **Development Mode (`mode`):** Set to "development" for easier debugging.
- **Module Rules (`rules`):** Defines how different file types should be handled, such as TypeScript/JavaScript and Sass.
- **SVG Image Handling:** Uses `@svgr/webpack` to transform SVG images into React components and `file-loader` to move them to the output directory.
- **Module Resolution (`resolve`):** Specifies file extensions to consider and uses `TsconfigPathsPlugin` for path resolution.
- **Output Configuration (`output`):** Defines the output filename, destination path, and library type for Single SPA integration.
- **Webpack Plugins (`plugins`):** Includes plugins like `HtmlWebpackPlugin` for generating HTML output, `ESLintPlugin` for static code analysis, and `EnvironmentPlugin` for injecting environment variables.
- **Externals and Libraries (`externals`):** Specifies dependencies not to be included in the final bundle, including Single SPA and specific libraries.

### In Summary

Our Webpack boilerplate provides a robust structure to start React projects, handling complexities such as dynamic loading, style processing, and environment configuration. This allows us to focus on developing incredible features, knowing that the foundation is solid and reliable.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Key Features

- **Parametrization for Flexibility:**
  The boilerplate is intelligently parametrized, making it adaptable to various scenarios. Whether integrating external libraries like React Query or handling external API requests with Axios, the structure is designed to accommodate different use cases.

- **Example Hooks and Interfaces:**
  Explore real-world examples of React hooks, interfaces, and API requests. The `model` folder houses TypeScript interfaces for use throughout the project, while the `api` folder contains URL configurations and methods in the `api.ts` file. Check out the `hooks` folder for practical examples of custom React hooks.

- **React Query Integration:**
  Witness the seamless integration of React Query, a powerful library for managing state and fetching data in React applications. Leverage its capabilities for efficient data fetching and caching.

- **Clean Project Structure:**
  The project follows a clean and organized structure. Each component, hook, or utility resides in its designated folder, enhancing code readability and maintainability.

- **Webpack for Bundling:**
  The Webpack configuration is tailored to bundle React microfrontends efficiently. It handles tasks like module bundling, code splitting, and processing various file types for an optimal web application.

- **Babel Configuration:**
  The Babel configuration is set up to transpile and transform React code, ensuring compatibility with different browsers and optimizing the code for the specific requirements of a Single Page Application (SPA) context.


To make the most of this boilerplate, follow the steps outlined in the [Installation](#installation) section above. Customize the `package.json`, adjust the development port, and explore the provided examples and integrations.

## Boilerplate Structure

- **`src` Folder:**
  - `components`: Houses reusable React components.
  - `hooks`: Contains custom React hooks, showcasing practical examples.
  - `model`: Stores TypeScript interfaces for use across the project.
  - `api`: Manages API endpoints and methods.
  - `utils`: Provides utility functions and helpers.

- **`webpack.config.js`:**
  The Webpack configuration details, ensuring efficient bundling, module loading, and plugin integrations.

- **`.babelrc`:**
  Babel configuration for transpiling and transforming React code. Optimized for the SPA context, providing compatibility across different browsers.
