import { SinglePriceGrid } from "components";

export default function App() {
  return (
    <div className="bg-light-gray grid min-h-dvh w-full grid-rows-[1fr_auto]">
      <main className="mt-9 w-full max-w-77.75 place-self-center md:max-w-158.75">
        <SinglePriceGrid />
      </main>
      <footer className="mt-auto w-full pb-4 text-center text-black">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/abdelrhman-vanta/"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abdelrhman Abdelaal
        </a>
        .
      </footer>
    </div>
  );
}
