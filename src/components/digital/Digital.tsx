import './Digital.scss';

interface GalleryItem {
  src: string;
  alt: string;
}

interface DigitalProps {
  items: GalleryItem[];
}

const Digital = ({ items }: DigitalProps) => {
  return (
    <main className="digital-section">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <img
              src={item.src}
              alt={item.alt}
              className="clickable"
              width="500"
              height="500"
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Digital;
