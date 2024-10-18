import examples from "./examples";
import Cards from "../components/Cards";
export default function Portfolio() {
  return (
    <div className="container py-16 md:py-20" id="portfolio">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-lightest sm:text-5xl lg:text-6xl">
        My Portfolio
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-lightest sm:text-2xl lg:text-3xl">
        Check out some projects I've worked on below!
      </h3>
      <Cards examples={examples} />
    </div>
  );
}
