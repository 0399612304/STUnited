import Image from 'next/image'
import { BsStar, BsStars } from 'react-icons/bs'
import Typed from 'react-typed'
import stsLogo from '../images/logo1.png'

const Introduce = ({ id }) => (
  <div data-aos="fade-up" className="introduce" id={id}>
    <div className="grid"></div>
    <div className="section introduce__section">
      <div className="wrapper">
        <div className="heading">
          <h1>
            <span>ST United</span>
          </h1>
          <Typed className="typed" strings={['United to grow up together...']} typeSpeed={30} backSpeed={50} loop />
        </div>
      </div>
      <div className="shake">
        <div className="img_wrap">
          <div className="box_1"></div>
          <div className="box_2"></div>
          <div className="star">
            <BsStar />
          </div>
          <div className="small_star">
            <BsStars />
          </div>
          <Image src={stsLogo} alt="ST United" layout="fill" />
        </div>
      </div>
    </div>
  </div>
)

export default Introduce
