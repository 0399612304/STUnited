import '../fonts/Poppins.css'
import '../styles/main.scss'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])

  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-JMVJS1VCW9" />
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5TC8RGQ');`}
      </Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-JMVJS1VCW9');`}
      </Script>
      <noscript id="iframe">
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5TC8RGQ"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
