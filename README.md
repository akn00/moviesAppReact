# Movie Library

This is a movie library web application built using React. It allows users to browse and explore movies based on different genres. The application fetches movie data from a JSON file and displays it in an organized manner, making it easy for users to find movies of their interest.

## Features

- **Genre Segregation**: The movies are categorized into different genres, such as action, comedy, drama, etc. Users can select a genre to view movies belonging to that genre specifically.

- **Thumbnail View**: Movies are displayed as thumbnails, showing the movie poster and essential information like title, rating, and release year.

- **Expanded View**: When a user hovers over a movie thumbnail, it expands to display more details about the movie, including genre, director, runtime, actors, and a brief plot summary.

- **Modal Dialog**: Clicking on a movie thumbnail opens a modal dialog with a larger image of the movie poster and comprehensive information about the movie.

- **Scrolling Navigation**: If there are multiple movies within a genre, the movie thumbnails can be scrolled horizontally using navigation buttons on the sides.

## Getting Started

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install` in the project directory.
3. Replace the `data.json` file with your own movie data or modify the existing file to include your movie collection.
4. Run the application using `npm start`.
5. Open your web browser and navigate to `http://localhost:3000` to view the movie library.

## Project Structure

- The `App.js` file is the entry point of the application, which renders the `Movies` component.

- The `Movies` component is responsible for fetching the movie data, extracting unique genres, and rendering the genre sections along with the `Segregation` component.

- The `Segregation` component receives a genre as a prop, filters the movies based on the genre, and displays the filtered movies in a horizontal scrolling row.

- The `MovieThumbnail` component represents each movie thumbnail, including its image, title, and other relevant information. It handles hover and click events to show expanded details and open the modal dialog.

- The `Modal` component is a reusable component from the Material-UI library, used to display the detailed information of a movie when a thumbnail is clicked.

- The CSS styles are organized in a separate `styles.css` file, providing styling for the different components and layout.

## Customization

- To customize the application with your own movie data, replace the contents of the `data.json` file with your movie collection. Ensure that the JSON structure matches the existing format.

- You can modify the styling in the `styles.css` file to change the appearance of the movie thumbnails, expanded view, and modal dialog according to your preferences.

- Feel free to add additional features or modify the existing code to enhance the functionality of the movie library.

## Dependencies

This project utilizes the following dependencies:

- React: A JavaScript library for building user interfaces.
- react-dom: Provides the rendering capabilities for React components.
- Material-UI: A popular React component library for creating beautiful UI elements.
- react-modal: A library for creating accessible modal dialogs in React.
- npm: A package manager for Node.js, used for installing and managing project dependencies.

Make sure you have Node.js and npm installed on your machine before running the application.

## Conclusion

The Movie Library is a user-friendly web application that allows users to browse movies based on genres. It provides an organized and visually appealing interface for exploring movie collections. With its expandable thumbnails and detailed modal dialogs, users can get a comprehensive view of each movie and make informed choices. The application can be easily customized to suit different movie collections and preferences.

Enjoy exploring your favorite movies with the Movie Library!
