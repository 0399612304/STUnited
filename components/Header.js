import Image from 'next/image'
import logo from '../images/logo.png'

const Header = () => (
  <header>
    <a href="#" className="header__logo">
      <Image src={logo} alt="ST United" layout="fill" />
    </a>

    <a href="#contact">
      <button id="header__contact" className="header__contact">Contact Us </button>
    </a>
  </header>
)

export default Header
