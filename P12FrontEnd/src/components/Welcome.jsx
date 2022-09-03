export default function Welcome({ name }) {
  return (
    <div className="font-roboto ">
      <h1 className="font-medium text-5xl mb-10">
        Bonjour <span className="text-red251">{name}</span>
      </h1>
      <p className="font-normal text-lg	">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}
