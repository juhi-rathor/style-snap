import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = ({ title, links }) => {
  return (
    <div className="col d-flex justify-content-start align-items-start flex-column">
      <h3>{title}</h3>
      <ul className="footer-menu">
        {links.map((item) => (
          <li key={item.label}>
            <Link to={item.to} className="navlink">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
