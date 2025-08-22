import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Modal from "react-bootstrap/Modal";

function Hero() {
  const [check, setCheck] = useState(false);
  const [name, setName] = useState("Show Content");

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);

  const toggleSection = (section) => {
    if (section === 1) {
      setCheck1(!check1);
    } else if (section === 2) {
      setCheck2(!check2);
    } else if (section === 3) {
      setCheck3(!check3);
    } else if (section === 4) {
      setCheck4(!check4);
    } else if (section === 5) {
      setCheck5(!check5);
    }
  };

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  return (
    <div>
      <div className="custom-carousel mt-5 ">
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: "90vh" }}
              className="d-block w-100 object-fit-cover"
              src="./home/clinic.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Radiology Elevated: Unwavering Commitment to Quality</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ height: "90vh" }}
              className="d-block w-100 object-fit-cover"
              src="./home/clinic_connect.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>
                {" "}
                Clinically Connected Radiology: Where Insight Meets Dialogue
              </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ height: "90vh" }}
              className="d-block w-100 object-fit-cover"
              src="./home/collage1.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>
                Subspecialty-Driven Radiology: Precision Unfolded by Expertise
              </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ height: "90vh" }}
              className="d-block w-100 object-fit-cover"
              src="./home/tech-enabled.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Tech-Enabled Radiology: Innovation That Informs</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ height: "90vh" }}
              className="d-block w-100 object-fit-cover"
              src="./home/24.jpeg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Flexible Time Slots, Focused on Your Needs</h3>
            </Carousel.Caption>
          </Carousel.Item>
       
        </Carousel>

        <div className="py-5">
          <div className="container">
            <div className="row g-0 align-items-end">
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-2">
                <img src="./blocks/1.png" alt="Image" onClick={handleShow} />
              </div>
              <div className="col-12 col-md-2">
                <img
                  src="./blocks/green_space.png"
                  alt="White Space"
                  className="d-none d-md-block"
                />
              </div>

              <div className="col-12 col-md-6">
                <div className="position-relative h-100">
                  <div className="px-0 px-md-5 py-5 py-md-3">
                    <div className="font-16 fw-semibold text-uppercase light-grey-color">
                      Actuality
                    </div>
                    <h1 className="fs-3 fw-bold">The Real Radiology</h1>
                    <p className="fw-normal font-14">
                      Our radiology service centres on a panel-based diagnostic
                      workflow, bringing together a multidisciplinary team of
                      experienced radiologists, sub-specialists, and clinical
                      advisors. Each case undergoes a rigorous yet seamless
                      collaborative review—ensuring diagnostic precision through
                      diverse perspectives. Whether it’s a complex neuroimaging
                      study or a routine chest scan, our panel-driven workflow
                      encourages shared insights, clinical reasoning, and
                      consensus building to deliver confident, actionable
                      reports.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-1"></div>
            </div>
            <div className="row g-0">
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-2">
                <img
                  src="./blocks/transparent.png"
                  alt="Image"
                  className="d-none d-md-block"
                />
              </div>
              <div className="col-12 col-md-2">
                <img
                  src="./blocks/2.png"
                  alt="White Space"
                  onClick={handleShow1}
                />
              </div>
              <div className="col-12 col-md-2">
                <img
                  src="./blocks/marine_green_space.png"
                  alt="White Space"
                  className="d-none d-md-block"
                />
              </div>
              <div className="col-12 col-md-2">
                <img
                  src="./blocks/3.png"
                  alt="White Space"
                  onClick={handleShow3}
                />
              </div>
              <div className="col-12 col-md-2">
                <img
                  src="./blocks/marine_green_space.png"
                  alt="White Space"
                  className="d-none d-md-block"
                />
              </div>
              <div className="col-12 col-md-1"></div>
            </div>
            <div className="row g-0">
              <div className="col-12 col-md-1"></div>
              <div className="col-12 col-md-2">
                <img src="./blocks/4.png" alt="Image" onClick={handleShow2} />
              </div>
              <div className="col-12 col-md-2">
                <img
                  src="./blocks/marine_green_space.png"
                  alt="White Space"
                  className="d-none d-md-block"
                />
              </div>
              <div className="col-12 col-md-2">
                <img
                  src="./blocks/green_space.png"
                  alt="White Space"
                  className="d-none d-md-block"
                />
              </div>
              <div className="col-12 col-md-2">
                <img src="./blocks/marine_green_space.png" alt="White Space" />
              </div>
              <div className="col-12 col-md-2">
                <img
                  src="./blocks/6.png"
                  alt="White Space"
                  onClick={handleShow4}
                />
              </div>
              <div className="col-12 col-md-1"></div>
            </div>
          </div>
        </div>

        <div className="teleradiology-section py-5 text-center text-white d-flex align-items-center justify-content-center mt-5">
          <div className="w-100 h-100 position-absolute section-overlay"></div>
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="mx-auto py-5" style={{ maxWidth: "600px" }}>
              <h4 className="fw-bold fs-4 mb-2">What Is Teleradiology?</h4>
              <p className="font-18">
                Teleradiology: Diagnostics Without Distance
              </p>
              <p className="pt-1">
                Teleradiology is the remote interpretation of medical
                images—such as X-rays, CT scans, and MRIs—by radiologists who
                may be miles away from the patient. This advanced branch of
                telemedicine empowers healthcare providers to access expert
                radiology support without requiring an on-site specialist.
              </p>
            </div>
          </div>
        </div>

        <div className="how-it-works-section py-5 ">
          <div className="container">
            <div className="mx-auto py-5">
              <h4 className="fw-bold fs-4 mb-2">
                How It Works
                <span className="custom-underline"></span>
              </h4>
              <ul className="px-0 py-3 text-start">
                <li className="mb-1">
                  <strong>Image Acquisition</strong>: Diagnostic images are
                  captured at a hospital, clinic, or imaging center using
                  standard radiology equipment.
                </li>
                <li className="mb-1">
                  <strong>Secure Transmission</strong>: These images are
                  encrypted and transmitted over secure networks to off-site
                  radiologists.
                </li>
                <li className="mb-1">
                  <strong>Expert Analysis</strong>: Radiologists review the
                  images on high-resolution diagnostic monitors and generate
                  detailed reports.
                </li>
                <li>
                  <strong>Real-Time Communication</strong>: Urgent or critical
                  findings are immediately communicated back to the referring
                  physician.
                </li>
              </ul>
              <p>
                By removing geographical and time-based barriers, teleradiology
                is transforming modern healthcare—delivering timely, expert
                insights with greater efficiency, scalability, and reach.
              </p>
            </div>
          </div>
        </div>

        <div className="above-footer"></div>
      </div>

      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-5">
              <img
                src="./blocks/1.png"
                alt=""
                className="img-fluid w-100 h-100 object-fit-cover object-position-center"
              />
            </div>
            <div className="col-7">
              <div className="py-4 px-3">
                <h2 className="font-18 fw-semibold">
                  Radiology Elevated: Unwavering Commitment to Quality
                </h2>
                <p className="font-14">
                  Our radiology service is built on an uncompromising commitment
                  to diagnostic excellence. Every scan is more than an
                  image—it’s a clinical narrative powered by cutting-edge
                  technology and expert interpretation. We prioritize stringent
                  quality control protocols, double-reading workflows, and
                  subspecialty correlation to ensure each report meets the
                  highest standards of accuracy and reliability.
                </p>
                <h3 className="font-18 fw-semibold">
                  Core Pillars of Our Quality Framework
                </h3>
                <ul className="ps-3 font-14 list-style-square">
                  <li>
                    Expert Oversight: Senior radiologists supervise
                    interpretations{" "}
                  </li>{" "}
                  <li>
                    Double Reads: Peer-reviewed assessments minimize variability{" "}
                  </li>{" "}
                  <li>
                    Standardized Protocols: Uniform imaging and reporting ensure
                    consistency{" "}
                  </li>{" "}
                  <li>
                    Clinical Correlation: Integrated diagnostics aligned with
                    patient context
                  </li>
                  <li>
                    Continuous Audits: Feedback-driven refinements for constant
                    improvement
                  </li>
                </ul>
                <p className="font-14">
                  Our aim is simple: deliver diagnostics that clinicians can act
                  on with confidence—because quality isn’t just a metric, it’s
                  our promise.
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal size="lg" centered show={show1} onHide={handleClose1}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-5">
              <img
                src="./blocks/2.png"
                alt=""
                className="img-fluid w-100 h-100 object-fit-cover object-position-center"
              />
            </div>
            <div className="col-7">
              <div className="py-4 px-3">
                <h2 className="font-18 fw-semibold">
                  Clinically Connected Radiology: Where Insight Meets Dialogue
                </h2>
                <p className="font-14">
                  Our radiology service thrives on collaborative engagement with
                  referring clinicians—transforming diagnostics into a shared
                  clinical journey. Each report is not just an interpretation,
                  but a dialogue, rooted in clinical context, tailored to
                  therapeutic decisions, and open to ongoing discussion.
                </p>
                <h3 className="font-18 fw-semibold">
                  {" "}
                  Key Highlights of Clinician-Radiologist Collaboration
                </h3>
                <ul className="ps-3 font-14 list-style-square">
                  <li>
                    Contextual Interpretation: Imaging reports aligned with the
                    patient’s history and clinical suspicions{" "}
                  </li>{" "}
                  <li>
                    Real-Time Consults: Direct access to radiologists for
                    nuanced case discussions{" "}
                  </li>{" "}
                  <li>
                    Feedback-Driven Refinement: Continuous integration of
                    clinical feedback for report accuracy
                  </li>
                  <li>
                    Multidisciplinary Rounds: Participation in tumor boards and
                    specialty huddles
                  </li>
                  <li>
                    Care-Driven Reporting: Emphasis on actionable findings that
                    aid next-step planning
                  </li>
                </ul>
                <p className="font-14">
                  With every image we read, we seek to elevate the
                  conversation—ensuring our insights serve not just clarity, but
                  clinical purpose.
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal size="lg" centered show={show2} onHide={handleClose2}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-5">
              <img
                src="./blocks/4.png"
                alt=""
                className="img-fluid w-100 h-100 object-fit-cover object-position-center"
              />
            </div>
            <div className="col-7">
              <div className="py-4 px-3">
                <h2 className="font-18 fw-semibold">
                  Subspecialty-Driven Radiology: Precision Unfolded by Expertise
                </h2>
                <p className="font-14">
                  Our radiology service is powered by a team of subspecialist
                  radiologists—each with deep domain expertise across imaging
                  disciplines. From neuroradiology to musculoskeletal, chest,
                  and abdominal imaging, we match every case with the right
                  expert to ensure targeted, high-resolution interpretations.
                </p>
                <h3 className="font-18 fw-semibold"> What Defines Us</h3>
                <ul className="ps-3 font-14 list-style-square">
                  <li>
                    Dedicated Subspecialists: Experts assigned by modality and
                    clinical indication{" "}
                  </li>{" "}
                  <li>
                    Refined Accuracy: Precision reporting with nuanced
                    anatomical and pathological insight{" "}
                  </li>{" "}
                  <li>
                    Advanced Protocols: Imaging techniques optimized by
                    subspecialty knowledge
                  </li>
                  <li>
                    Clinical Alignment: Diagnoses tailored to the complexity of
                    each patient profile
                  </li>
                  <li>
                    Collaborative Depth: Cross-subspecialty review when cases
                    demand multifaceted analysis
                  </li>
                </ul>
                <p className="font-14">
                  This subspecialty-led model elevates diagnostics from standard
                  interpretation to clinical foresight.
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal size="lg" centered show={show3} onHide={handleClose3}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-5">
              <img
                src="./blocks/3.png"
                alt=""
                className="img-fluid w-100 h-100 object-fit-cover object-position-center"
              />
            </div>
            <div className="col-7">
              <div className="py-4 px-3">
                <h2 className="font-18 fw-semibold">
                  Tech-Enabled Radiology: Innovation That Informs
                </h2>
                <p className="font-14">
                  Our radiology service harnesses advanced technology to deliver
                  faster, smarter, and more reliable diagnostics. From
                  AI-assisted analysis to cloud-based reporting platforms and
                  seamless PACS integration, every touchpoint is designed for
                  efficiency and clarity. High-resolution imaging modalities and
                  automated workflows ensure diagnostic precision, while digital
                  collaboration tools bridge radiologists and clinicians across
                  locations.
                </p>
                <h3 className="font-18 fw-semibold"> Our Tech Advantage</h3>
                <ul className="ps-3 font-14 list-style-square">
                  <li>
                    Cloud Reporting: Anytime, anywhere access to structured
                    reports{" "}
                  </li>{" "}
                  <li>
                    Smart Protocols: Optimized imaging sequences for speed and
                    quality{" "}
                  </li>{" "}
                  <li>
                    Cross-Platform Integration: Smooth interoperability with
                    clinical systems{" "}
                  </li>{" "}
                  <li>
                    Digital Consults: Virtual case reviews and live radiologist
                    access
                  </li>
                </ul>
                <p className="font-14">
                  We don’t just read images—we refine insight through
                  technology.
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal size="lg" centered show={show4} onHide={handleClose4}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-5">
              <img
                src="./blocks/6.png"
                alt=""
                className="img-fluid w-100 h-100 object-fit-cover object-position-center"
              />
            </div>
            <div className="col-7">
              <div className="py-4 px-3">
                <h2 className="font-18 fw-semibold">
                  24/7 Radiology That Works on Your Clock
                </h2>
                <p className="font-14">
                  We understand healthcare doesn’t pause—and neither do we. With
                  full-spectrum day and night reporting, our services flex to
                  fit your workflow, no matter how dynamic your patient volumes.
                </p>
                <h3 className="font-18 fw-semibold">
                  Here’s What You Can Rely On:
                </h3>
                <ul className="ps-3 font-14 list-style-square">
                  <li>
                    🕒 Customizable Reporting Windows that align with your
                    institutional needs{" "}
                  </li>{" "}
                  <li>
                    🚨 Priority Reads for emergency and time-critical studies{" "}
                  </li>{" "}
                  <li>
                    🩺 Meticulous Reviews for elective imaging with depth and
                    precision{" "}
                  </li>{" "}
                  <li>
                    🤝 Integrated Support Coordination for faster triage and
                    turnaround
                  </li>
                  <li>
                    📡 On-Demand Availability—we’re just a click away, anytime
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Hero;
