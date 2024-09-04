import companylogo from "../../assets/NEXAI_Solutions.png";
import "./Header.css";

const catchPhrase = ["Enabling", "Strengthening", "Enhancing"];
function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
  const catchPhrases = catchPhrase[genRandomInt(catchPhrase.length)];
  return (
    <header>
      <img src={companylogo} alt="company logo" />
      <h1>NexAI Solutions</h1>
      <p>{catchPhrases} Empowering Tomorrow with Intelligent Innovations</p>
    </header>
  );
}
