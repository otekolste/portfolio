export default function Footer() {
  return (
    <footer>
      <div className="flex w-full items-center justify-center pt-5 pl-2 sm:pt-0 bg-darkest md:bg-transparent fixed bottom-0 z-30">
        <a
          href="https://www.linkedin.com/in/olivia-te-kolste-627123225/"
          className="pl-4"
        >
          <i className="bx bxl-linkedin text-2xl text-lightest hover:text-light"></i>
        </a>
        <a href="https://github.com/otekolste" className="pl-4">
          <i className="bx bxl-github text-2xl text-lightest hover:text-light"></i>
        </a>
        <a
          href="https://www.facebook.com/p/Olivia-Te-Kolste-100007064492674/"
          className="pl-4"
        >
          <i className="bx bxl-facebook-square text-2xl text-lightest hover:text-light"></i>
        </a>
        <a
          href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/"
          className="text-lightest hover:text-light pl-4"
        >
          Background source
        </a>
      </div>
    </footer>
  );
}
