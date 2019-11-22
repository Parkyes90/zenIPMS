import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className="footer-fab">
      <div className="b-bg">
        <FontAwesomeIcon icon="question" />
      </div>
      <div className="fab-hover">
        <ul className="list-unstyled">
          <li>
            <Link
              to="#"
              data-text="UI Kit"
              target="_blank"
              className="btn btn-icon btn-rounded btn-info m-0"
            >
              <i className="feather icon-layers" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              data-text="UI Kit"
              target="_blank"
              className="btn btn-icon btn-rounded btn-primary m-0"
            >
              <i className="feather icon feather icon-book" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              data-text="By Now"
              target="_blank"
              className="btn btn-icon btn-rounded btn-success btn-envato m-0 p-0"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
