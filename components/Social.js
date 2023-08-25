import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { ImLinkedin2 } from 'react-icons/im'

const SocialBar = () => {
  return (
    <div className="social_bar">
      <Link id="facebook" href="https://www.facebook.com/stunited.vn">
        <a id="facebook" target="_blank">
          <FaFacebookF />
        </a>
      </Link>
      <Link id="linkedin" href="https://www.linkedin.com/company/23723130">
        <a id="linkedin" target="_blank">
          <ImLinkedin2 />
        </a>
      </Link>
    </div>
  )
}
export default SocialBar
