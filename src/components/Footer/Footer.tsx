import { FC } from "react"

import logo from '../../image/Logo-white.png';
import facebook from '../../image/fb.png';
import instagram from '../../image/inst.png';
import { NavLink } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <section className="footer">
      <div className="footer__section footer__section--logo">
        <img src={logo} alt="Wine World" />
      </div>

      <div className="footer__section">
        <ul className="footer__nav">
          <li className="footer__navitem">
            <NavLink
              className="footer__link"
              to=""
            >
              About
            </NavLink>
          </li>
          <li className="footer__navitem">
            <NavLink
              className="footer__link"
              to=""
            >
              Catalog
            </NavLink>
          </li>
          <li className="footer__navitem">
            <NavLink
              className="footer__link"
              to=""
            >
              Shops
            </NavLink>
          </li>
          <li className="footer__navitem">
            <NavLink
              className="footer__link"
              to=""
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="footer__section">
        <ul className="footer__nav">
          <li className="footer__navitem">
            <NavLink
              className="footer__link"
              to=""
            >
              Online Support
            </NavLink>
          </li>

          <li className="footer__navitem">
            <a
              className="footer__link"
              href="tel:+380 (98) 55 88 99"
            >
              +380 (98) 55 88 99
            </a>
          </li>

          <li className="footer__navitem">
            <a
              href="mailto:wineworld@gmail.com"
              className="footer__link"
            >
              wineworld@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__section">
        <h3 className="footer__subtitle">
          Social
        </h3>
        <span className="footer__navitem">
          <img
            className="footer__navitem"
            src={facebook}
            alt="facebook"
          />
        </span>
        <span className="footer__navitem">
          <img
            className="footer__navitem"
            src={instagram}
            alt="instagram"
          />
        </span>
      </div>
    </section>

  )
}