import Joke from "./Joke";
import JokesData from "./JokesData";

export default () => {
  const jokeElements = JokesData.map((item) => {
    return <Joke key={item.id} setup={item.setup} punchline={item.punchline} />;
  });
  return jokeElements;
};
