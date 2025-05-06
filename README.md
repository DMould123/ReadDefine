# ReadDefine 📚✨

## Description 🌍

ReadDefine is a React Native application designed to help users log and track their reading habits. ReadDefine has features such as user authentication, themed UI, and a clean, responsive design. ReadDefine serves as a personal reading journal for book enthusiasts.

## Objectives 🎯

The objectives of this Football Manager blog include:

- 📖 Reading Log: Allow users to log and manage their reading lists
- 🔒 User Authentication: Secure login and registration functionality
- 🎨 Themed UI: Provide a light and dark mode for better user experience
- 📱 Mobile-First Design: Ensure seamless usability across devices
- 🛠️ Customizable Components: Reusable and themed components for consistency

## Tech Stack 💻

### Frontend
- React Native: Core framework for building the app
- React Native Vector Icons: Icons for a modern UI
- Expo Router: Navigation and routing
- React Native Safe Area Context: Handle safe areas for devices with notches

### Backend
- Appwrite: Backend for authentication and user managemen

## Installation 🔧

To use this website, simply clone the repository to your local machine:

```bash
git clone https://github.com/DMould123/ReadDefine.git
cd ReadDefine
```

## Setup 🔧

1. npm install
2. npx expo start and pick from the following options.

## Features ✨

- 🔒 User Authentication: Login, register, and logout functionality
- 📚 Reading List: Add and manage books in your reading log-
- 🎨 Themed UI: Light and dark mode support
- 📱 Responsive Design: Optimized for mobile devices
- 🖼️ Brand Logo: Consistent branding across all pages
- 🛠️ Reusable Components: Themed buttons, text inputs, and views

## Project Structure 📁

- UserContext.jsx - Context for managing user authentication and state
- useUser.js - Custom hook for accessing user context
- components - Reusable themed components like ThemedView, ThemedText, and ThemedButton
- Colors.js - Centralized color definitions for light and dark themes
- appwrite.js - Appwrite client setup for authentication 
- (auth) - Authentication-related pages (login, register)
- (dashboard) - Dashboard pages (profile, books, create)

## Customization 🛠️

- Modify Colors.js to update the light and dark theme colors.

### Adding New Articles
1. Create a new file in the appropriate folder (e.g., app/(dashboard)/newPage.jsx).
2. Use the ThemedView component to ensure consistent styling.
3. Add the page to the navigation stack in _layout.jsx.

### Authentication
Update UserContext.jsx to add new authentication methods or integrate additional Appwrite features.

## Browser Compatibility 🌐

This app is designed for mobile platforms (iOS and Android) but can also run on the web using Expo.

## Future Enhancements 🚀

- 📊 Reading Analytics: Track reading habits and provide insights
- 🔍 Search Functionality: Search for books in the reading log
- 📤 Export Data: Allow users to export their reading logs
- 👥 Social Features: Share reading progress with friends

## License 📝

This project is for demonstration purposes. Feel free to use and modify it for your own Football Manager blog.

## Author 📚

- David Mould 
