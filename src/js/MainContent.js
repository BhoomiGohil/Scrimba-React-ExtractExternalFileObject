import Joke from "./Joke"; // Importing the Joke component
import JokesData from "./JokesData"; // Importing the array of jokes

// Exporting the default component that maps over the jokes and returns a list of Joke components
export default () => {
  // Mapping through JokesData array to create an array of Joke components
  const jokeElements = JokesData.map((item) => {
    // Each Joke component is rendered with a unique key, setup, and punchline props
    return <Joke key={item.id} setup={item.setup} punchline={item.punchline} />;
  });

  // Returning the array of Joke components
  return jokeElements;
};
