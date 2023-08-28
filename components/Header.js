import Image from 'next/image'
import logo from '../images/logo.png'
import Link from 'next/link'

const Header = () => (
  <header>
    <a href="#" className="header__logo">
      <Image src={logo} alt="ST United" layout="fill" />
    </a>
    <div style={{ display : 'flex', gap : '10px'}}>
      <div style={{ display : 'flex', alignItems : 'center' }}>
        <Link href="/">
          <a id="header__Language"  style={{color : '#fff' , marginRight : '5px'}} >ENGLISH</a>
        </Link>
        |
        <Link href="/korean">
          <a id="header__Language"  style={{color : '#fff' , marginLeft : '5px'}}>한국인</a>
        </Link>
      </div>
      <a href="#contact">
        <button id="header__contact" className="header__contact">
          Contact Us{' '}
        </button>
      </a>
    </div>
  </header>
)

export default Header
