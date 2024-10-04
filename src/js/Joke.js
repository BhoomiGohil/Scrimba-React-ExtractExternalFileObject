export default function Joke(props) {
  return (
    <div className="joke-container">
      <div className="joke-item">
        {props.setup && <h3 className="joke-setup">Setup: {props.setup}</h3>}
        {props.punchline && (
          <p className="joke-punchline">Punchline: {props.punchline}</p>
        )}
      </div>
    </div>
  );
}
