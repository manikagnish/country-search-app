export default function CountryCard({ data }) {
  return (
    <div className="rounded-md overflow-hidden shadow-md mx-10vw sm:mx-0">
      <img
        className="w-full object-fill h-36"
        src={data.flags.png}
        alt={data.name}
      />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-4">{data.name}</h2>
        <p className="">
          Population: <span className="opacity-70">{data.population}</span>
        </p>
        <p className="">
          Region: <span className="opacity-70">{data.region}</span>
        </p>
        <p className="">
          Capital: <span className="opacity-70">{data.capital}</span>
        </p>
      </div>
    </div>
  );
}
