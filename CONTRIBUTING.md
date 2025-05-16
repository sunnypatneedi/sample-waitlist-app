# Contributing to Waitlist App

First off, thank you for considering contributing to the Waitlist App! We're excited to have you on board.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs
- Ensure the bug was not already reported by searching in the [Issues](https://github.com/sunnypatneedi/sample-waitlist-app/issues) section.
- If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/sunnypatneedi/sample-waitlist-app/issues/new). Be sure to include:
  - A clear title and description
  - Steps to reproduce the issue
  - Expected vs. actual behavior
  - Screenshots if applicable
  - Browser/OS version if relevant

### Suggesting Enhancements
- Use the "Feature request" issue template to suggest new features or improvements.
- Clearly describe the enhancement and why you believe it would be valuable.
- Include any relevant technical details or design mockups if applicable.

### Your First Code Contribution
1. Fork the repository
2. Create a new branch: `git checkout -b my-feature-branch`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin my-feature-branch`
6. Open a pull request

### Pull Request Process
1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations, and container parameters.
3. Increase the version numbers in any example files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. Your pull request should pass all CI/CD checks before it will be reviewed.

## Development Setup

### Prerequisites
- Node.js (v18 or later)
- npm (v9 or later) or yarn
- Git

### Installation
1. Fork and clone the repository
   ```bash
   git clone https://github.com/your-username/sample-waitlist-app.git
   cd sample-waitlist-app
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file based on `.env.example`
   ```bash
   cp .env.example .env.local
   ```
   Update the environment variables with your own values.

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Style Guide
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use Prettier for code formatting
- Write meaningful commit messages following [Conventional Commits](https://www.conventionalcommits.org/)
- Keep pull requests focused and limited to a single feature or bug fix

## License
By contributing, you agree that your contributions will be licensed under its MIT License.
