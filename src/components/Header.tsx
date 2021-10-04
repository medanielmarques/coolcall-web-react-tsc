import { FaGithub } from 'react-icons/fa';
import logo from 'assets/logo_tcesp.png';
import 'styles/header.styles.scss';

export function Header() {
  return (
    <header>
      <img src={logo} alt='Logo do TCESP' />
      <nav>
        <ul>
          <li>
            <a href='https://github.com/ViWa-CoolCall' target='_blank'>
              <FaGithub size='27.5' color='#000' />
            </a>
          </li>
          <li>
            <a href=''>Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
