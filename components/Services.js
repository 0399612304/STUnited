const Services = ({ id, services }) => (
  <div  data-aos="fade-up"  className="services section" id={id}>
    <div className="section__heading">
      <h2>
        OUR <span>SERVICES</span>
      </h2>
    </div>
    <div className="services__container">
      {services.map((service, index) => (
        <div className="services__card" key={index}>
          <div className="face face1">
            <p className="service__desc">{service.content}</p>
          </div>
          <div className="face face2">
            {service.icon}
            <span className="service__title">{service.title}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="toast">
      Click
      <span className="here">
        <a href="#contact"> here </a>
      </span>
      to connect us.
    </div>
  </div>
)

export default Services
