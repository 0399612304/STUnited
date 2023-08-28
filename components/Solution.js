const Solution = ({ id, solutions }) => (
  <div data-aos="fade-up"  className="section" id={id}>
    <div className="section__heading">
      <h2>
        OUR <span>SOLUTIONS</span>
      </h2>
    </div>
    <div className="solution">
      <div className="solution__container">
        {solutions.map((solution, index) => (
          <div key={index} className="content__main">
            <div className="content__icon">{solution.icon}</div>
            <span className="title">{solution.title}</span>
            <p>{solution.content}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Solution