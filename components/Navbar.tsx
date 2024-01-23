type Proptype = {
  links: string[];
};
export default function Navbar(props: Proptype) {
  return (
    <div className="h-28 bg-blue-300 flex  justify-between items-center">
      <h1>Navbar</h1>
      <ul className="flex w-1/3  justify-evenly">
        {props.links.map((e) => (
          <li key={e}>
            <a href={e}>{e}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
