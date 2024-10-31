import React from 'react'
import './AboutUs.css'

function AboutUs() {
  return (
    <div>
      <div className="aboutsection">
        <h1>About Us </h1>
        <p>
          Amazon is an American multinational technology company which focuses
          on e-commerce,<br></br> cloud computing, and digital streaming. It has
          been referred to as "one of the most influential economic and cultural
          forces in the world",[1] and is one of the world's most valuable
          brands..<br></br>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <div className="row">
        <div className="column">
          <div className="card">
            <img
              className="img"
              src="https://assets.aboutamazon.com/c5/ca/c2e23c594b06a492a8ff6e84a725/andy-mug-1.jpg"
              alt="Jane"
              width={150}
              height={130}
            />
            <div className="container">
              <h2>Andy Jassy</h2>
              <p className="title">CEO & Founder</p>
              <p>
                Andrew R. Jassy is an American business executive who is the
                president and chief executive officer of Amazon.....
              </p>
              <p>AndyJassy@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              className="img"
              src="https://www.educationworld.in/wp-content/uploads/2020/06/amit.jpg"
              alt="Mike"
              width={150}
              height={130}
            />
            <div className="container">
              <h2>Amit Agarwal</h2>
              <p className="title">Senior Vice President</p>
              <p>
                Amit Agrawal is an Indian engineer and an institute chair
                professor at the Department of Mechanical Engineering....
              </p>
              <p>AmitAgarwal@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              className="img"
              src="https://media.licdn.com/dms/image/D5603AQHVbTwDdH14Sw/profile-displayphoto-shrink_200_200/0/1690913895590?e=2147483647&v=beta&t=IFlwZK7ZNtehhNOyGqHFfZlFHrsbuIhMIII8XUUTVCk"
              alt="John"
              width={150}
              height={150}
            />
            <div className="container">
              <h2>Brian Olsavsky</h2>
              <p className="title">Senior Vice President and CFO</p>
              <p>
                Olsavsky joined Amazon.com in April 2002. As CFO of Amazon.com,
                he oversees the company's overall .....
              </p>
              <p>Brianolsavsky@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
