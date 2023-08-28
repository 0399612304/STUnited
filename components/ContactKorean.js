import { useState } from 'react'
import Image from 'next/image'
import contactImage from '../images/contact.png'

const ContactKorean = ({ id, footer }) => {
  const [values, setValues] = useState({
    email: '',
    message: '',
  })
  const [submit, setSubmit] = useState(false)

  const { email, message } = values

  const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value })

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setSubmit(true)
    const formData = {}

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return
      formData[field.name] = field.value
    })

    fetch('/api/mail', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.status === 200) {
          setValues({
            email: '',
            message: '',
          })
          setSubmit(false)
        }
      })
      .catch((error) => {
        error
      })
  }

  return (
    <div data-aos="fade-up" className="contact section" id={id}>
      <div className="section__heading section__loading">
        <h2>
          <span>연락처</span>
        </h2>
        {submit && (
          <div className="lds-heart ">
            <div></div>
          </div>
        )}
      </div>
      <div className="contact__form--wrap">
        <div className="contact__image">
          <Image src={contactImage} alt="ST United" width={900} height={700} />
        </div>
        <div className="contact__form">
          <p>언제든지 답변할 준비가 되어 있습니다</p>
          <form action="/send-data-here" method="post" className=" send__data" onSubmit={handleOnSubmit}>
            <div className="form__item">
              <label htmlFor="email">전자메일</label>
              <input id="email" type="email" name="email" value={email} required onChange={handleChange} />
            </div>
            <div className="form__item">
              <label required>문의사항</label>
              <textarea id="message" type="text" name="message" value={message} required onChange={handleChange} />
            </div>
            <button type="submit" className="button__submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="contact__footer">
        {footer.map((item, index) => {
          return (
            <div key={index} className="content__main">
              <span className="content__icon">{item.icon}</span>
              <span className="title">{item.title}</span>
            </div>
          )
        })}
      </div>
      <div className="footer_desc">
        <span>We are ST United</span>
      </div>
    </div>
  )
}

export default ContactKorean
