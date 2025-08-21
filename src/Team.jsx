import React from "react";

function Team() {
  return (
    <div className="container pb-5">
      <div className="text-center">
        <h1 className="font-36 fw-bold pt-5 mt-5 pb-1 mb-0">Our Team</h1>
        <h4 className="font-24 light-grey-color pb-3">
          Led by Visionaries. Driven by Expertise.
        </h4>
        <p className="font-18">
          At the heart of our radiology consortium is a team of dedicated
          professionals united by a passion for diagnostic excellence and
          patient-centered care. We bring together seasoned radiologists,
          sub-specialty consultants, and healthcare technologists who work
          collaboratively to deliver accurate, timely, and actionable imaging
          insights.
        </p>
      </div>

      <div className="text-center pt-5 meet-directors">
        <h2 className="font-36 fw-bold pb-4">Meet Our Directors</h2>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card h-100">
              <div className="img-wrapper">
                <img
                  src="./home/clinic.jpeg"
                  class="card-img-top w-100 h-100"
                  alt=""
                />
              </div>
              <div class="card-body py-md-4 px-md-5 p-4">
                <h5 class="font-24 fw-bold mb-1">Dr. Abhin Joseph</h5>
                <h6 class="font-16 light-grey-color pb-3 mb-0">
                  Co-Founder & Medical Director
                </h6>
                <p class="font-16 text-align-justify">
                  Dr. Abhin Joseph brings a wealth of experience in diagnostic
                  and interventional radiology, with special interests in
                  Neuroimaging and Musculoskeletal Imaging. As Co-Founder and
                  Medical Director, he plays a transformative role in shaping
                  the clinical vision and operational backbone of the
                  organization. He plays a pivotal role in shaping our reporting
                  standards and collaborative diagnostic workflows. His
                  leadership fosters a culture of precision, consistency, and
                  multidisciplinary excellence—ensuring that every report
                  reflects the highest level of clinical confidence. His
                  leadership style is marked by strategic foresight, empathy,
                  and an unwavering commitment to clinical integrity. Under his
                  stewardship, the organization has become a benchmark for
                  diagnostic precision, consistency, and collaborative
                  excellence—where every report is a reflection of deep clinical
                  insight and the highest standards of care
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div className="img-wrapper">
                <img
                  src="./home/clinic.jpeg"
                  class="card-img-top w-100 h-100"
                  alt=""
                />
              </div>
              <div class="card-body py-md-4 px-md-5 p-4">
                <h5 class="font-24 fw-bold mb-1">Dr. Chinchu Prem</h5>
                <h6 class="font-16 light-grey-color pb-3 mb-0">
                  Co-Founder & Director of Clinical Operations
                </h6>
                <p class="font-16 text-align-justify">
                  Dr. Chinchu Prem L. is an accomplished radiologist with
                  special interest in Neuroimaging and Women’s Imaging. As
                  Co-Founder and Director of Clinical Operations, she leads with
                  vision and precision, overseeing clinical governance,
                  fostering seamless coordination among radiologists, and
                  enhancing engagement with hospitals and diagnostic partners.
                  Known for her unwavering dedication and forward-thinking
                  approach, she ensures that clinical services remain aligned
                  with evolving medical standards and the unique needs of
                  healthcare providers. Driven by a passion for innovation and
                  lifelong learning, she stands at the forefront of advancing
                  diagnostic imaging services—merging compassionate patient care
                  with cutting-edge radiological expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pb-5">
        <h1 className="font-36 fw-bold pt-5 mt-5 pb-1 mb-0">
          A Network You Can Trust
        </h1>
        <h4 className="font-24 light-grey-color pb-3">
          Alongside our directors, we are proud to collaborate with:
        </h4>
        <ul
          className="ps-3 pb-1 text-start mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <li className="pb-1">
            <strong>Subspecialty Radiologists</strong> across neuro, MSK,
            cardio-thoracic, pediatric & more
          </li>
          <li className="pb-1">
            <strong>Clinical Advisors & Reviewers</strong> who support complex
            case discussions and quality control
          </li>
          <li className="pb-1">
            <strong>IT and PACS Specialists</strong> ensuring smooth, secure,
            and scalable reporting infrastructure
          </li>
        </ul>
        <p className="font-18">
          Beyond the visionary leadership of our co-founders,{" "}
          <strong>Dr. Abhin Joseph</strong>
          and <strong>Dr. Chinchu Prem</strong>, we are proud to have built a
          strong and diverse team of radiologists who share the same commitment
          to clinical precision and compassionate care.
        </p>
        <p className="font-18">
          Our radiologists have been <strong>trained at India’s premier medical
          institutes</strong>, bringing with them deep sub-specialty expertise, academic
          rigor, and real-world diagnostic acumen. This wealth of training and
          experience translates into nuanced interpretations and high-impact
          clinical insights—delivered with consistency and speed.
        </p>
      </div>
    </div>
  );
}

export default Team;
