export default function Welcome({ name }) {
  return (
    <div>
      <h1 className="welcome">{`Bonjour ${name}`}</h1>
      <p className="congrats">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}
