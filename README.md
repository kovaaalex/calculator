# Calculator
## [Task](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit#heading=h.5dt3hghpa22f)
## [Deploy](https://kovaaalex.github.io/calculator/)
## Description
**SimpleCalculator** is a simple web application for performing basic mathematical operations, such as addition, subtraction, multiplication, and division. The application is built using Webpack and includes ESLint and Prettier linters to maintain clean and well-structured code.

## Features
- Support for addition, subtraction, multiplication, division, and sign switching
- Automatic code linting with ESLint and Prettier
- Project build with Webpack
- Deployed on GitHub Pages

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kovaaalex/calculator.git
   cd simplecalculator
2. Install dependencies:
    ```bash
    npm install
3. Run the app in development mode:
    ```bash
    npm start
4. Build the project for production:
    ```bash
    npm run build
5. Deploy to GitHub Pages:
    ```bash
    npm run deploy
### Project Structure:
- **`dist/`**: Contains compiled files after the project is built.
- **`.husky/`**: Git hooks managed by Husky.
- **`.eslintrc.js` and `.prettierrc`**: Configuration files for ESLint and Prettier.
- **`package.json`**: Lists project dependencies and npm scripts.
- **`webpack.config.js`**: Configuration for Webpack bundler.
- **`.gitignore`**: Specifies which files and directories should be ignored by Git.