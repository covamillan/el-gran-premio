import './TextReveal.scss';

interface TextRevealProps {
  text: string;
}

function TextReveal({ text }: TextRevealProps) {
  return (
    <section className="text-reveal">
      <ul className="text">
        {text.split('').map((letter, index) => (
          <li key={index} tabIndex={0} className="letter">
            <span>{letter}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TextReveal;
