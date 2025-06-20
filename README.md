# Workiy360-UI

A modular, scalable React frontend for the Workiy360 platform, built with Vite and Material UI.

## Features
- Modular component structure (atoms, molecules, organisms, pages)
- Centralized API service layer
- Organized CSS in `assets/styles`
- Routing with React Router
- Clean, maintainable codebase

## Project Structure
```
src/
  assets/styles/      # CSS files for components
  components/         # React components (atoms, molecules, organisms, pages)
  config/             # Environment and app config
  services/           # API and service logic
  App.jsx             # Main app routes
  main.jsx            # App entry point
```

## Getting Started
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization
- Add or update components in `src/components/`
- Add or update styles in `src/assets/styles/`
- Add API logic in `src/services/api.js`

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
