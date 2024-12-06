import './Sidebar.scss';

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <img src="../../../estrella-blanca.webp" alt="ESTRELLA" />
        <ul>
          <li className="clickable">Digital</li>
          <li className="clickable">Photo</li>
          <li className="clickable">Collage</li>
          <li className="clickable">Printed</li>
          <li className="clickable">Commissions</li>
          <li className="clickable">About</li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
