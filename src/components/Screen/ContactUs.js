import React from 'react'

function ContactUs() {
  return (
    <>
      {/* <h1>this is contactUs</h1> */}
      <>
      <div className="w-100 position-relative mb-5">
        <img
          src="https://img.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg?w=900&t=st=1726810926~exp=1726811526~hmac=82e2c382b412d5b36202a6426fe9c120eb3451c0582e06471d885b89ca365610"
          className="object-fit-cover"
          width={"100%"}
          height={870}
          alt="ContsctUsImgBg"
        />
        <div
          className="position-absolute text-white align-content-center"
          style={{
            top: "35%",
            padding: "3% 7% 3% 6%",
            textShadow: "-2px 3px 8px rgba(0,0,0,0.6)",
            background:
              "linear-gradient(90deg, rgba(13,110,253,1) 0%, rgba(0,0,0,0) 100%)",
          }}
        >
          <h1>Contact Us</h1>
          <span className="fs-4">
            Connect with UrbanCartel: Your Questions, Our Priority.
            <br /> We're here to make your experience exceptional.
          </span>
        </div>
      </div>
      <div className="text-center">
        <h1>Reason for Inquiry</h1>
        <span className="fs-5">Please Select the Purpose of Your Inquiry.</span>
      </div>
      <div className="row justify-content-center gap-5 mt-5">
        <div className="col-2 text-center text-center">
          <img src="https://plus.unsplash.com/premium_photo-1658506646178-e4ef5810361b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={300} width={300}  alt="CustomerSupportImg" />
          <h5>Customer Support</h5>
          <p>
            Have a question or need assistance? Our dedicated customer support
            team is here to help you navigate through any inquiries or concerns.
          </p>
        </div>
        <div className="col-2 text-center">
          <img src="	https://png.pngtree.com/png-vector/20240913/ourlarge/pngtree-business-partners-and-friendly-cooperation-png-image_13186167.png" height={300} width={300}  alt="PartnershipImg" />
          <h5>Partnership Opportunities</h5>
          <p>
            Interested in collaborating with UrbanCartel? Reach out for exciting
            partnership opportunities and explore how we can grow together.
          </p>
        </div>
        <div className="col-2 text-center">
          <img src="https://static.vecteezy.com/system/resources/previews/009/343/582/original/3d-feedback-illustration-png.png" alt="FeedbackImg" height={300} />
          <h5>Feedback and Suggestions</h5>
          <p>
            Your feedback matters! Share your thoughts, suggestions, or ideas
            with us. We value your input and are committed to continually
            enhancing your experience with UrbanCartel.
          </p>
        </div>
      </div>
      <div className="row mt-5 pt-5 pb-5">
        <div className="col-12 row justify-content-center gap-5">
          <div className="col-4">
            <h3>Corporate Headquarters</h3>
            <p>
              Corporate Headquarters Achieve3000 1985 Cedar Bridge Ave, Suite 3
              Lakewood, NJ 08701
            </p>
          </div>
          <div className="col-4">
            <h3>General Contact</h3>
            <p>
              Toll-Free: 888-968-6822 Phone: 732-367-5505 Fax: 732-367-2313
              Email: office@achieve3000.com
            </p>
          </div>
        </div>
        <div className="col-12 row justify-content-center gap-5">
          <div className="col-4">
            <h3>Sales Info & Inquiries</h3>
            <p>Toll-Free: 800-838-8771 Email: info@achieve3000.com</p>
          </div>
          <div className="col-4">
            <h3>International Sales</h3>
            <p>
              Email: international@achieve3000.com Phone: 732-987-3669 Schedule:
              Monday - Thursday 1:15 AM to 10:30 PM ET | Friday 7:30 AM to 10:30
              PM ET
            </p>
          </div>
        </div>
      </div>
    </>

    </>
  )
}

export default ContactUs
