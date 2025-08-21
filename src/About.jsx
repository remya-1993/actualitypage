import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <div className="container ">
      <div className="coloumn">
        <div className="my-5 pt-5">
          <section className="about-header pt-3">
            <div className="row">
              <div className="col-12 col-md-4">
                <h1 className="font-60 fw-bold py-3 position-sticky top-0 lh-1">
                  About <span className="text-custom-red">Us</span>
                </h1>
              </div>
              <div className="col-12 col-md-8">
                <p className=" font-24 py-3 light-grey-color">
                  Our consortium brings together a group of highly qualified and
                  experienced radiologists dedicated to meeting every imaging
                  need. United by a shared commitment to diagnostic excellence,
                  we deliver comprehensive radiology services that support
                  clinicians and patients at every step of care.
                </p>
                <h2 className="font-30 fw-bold pb-2">Our Mission</h2>
                <p className="font-18">
                  To be the most trusted teleradiology partner—setting the
                  standard for precision, speed, and quality in every diagnostic
                  interpretation.
                </p>

                <h2 className="font-30 fw-bold py-2">Our Vision</h2>
                <p className=" font-18">
                  A world where access to expert radiology is never out of
                  reach. To redefine the future of radiology through intelligent
                  imaging networks that combine the highest quality human
                  expertise with technological innovation.
                </p>

                <h2 className="font-30 fw-bold py-2">Our Expertise</h2>
                <p className="font-18">
                  The members of our consortium hold advanced
                  training/certification in one or more radiology
                  sub-specialties. Our collective skill set includes:
                </p>
                <ul className="font-18 list-style-square ps-4">
                  <li> Neuroimaging and neuroradiology</li>
                  <li>Musculoskeletal radiology</li>
                  <li>Cardiothoracic imaging</li>
                  <li>Body imaging (abdominal, pelvic)</li>
                  <li>Pediatric radiology</li>
                  <li>Breast imaging</li>
                  <li>Interventional radiology</li>
                </ul>

                <h2 className="font-30 fw-bold py-2">
                  Our Full Suite of Services
                </h2>
                <p className="font-18">
                  We offer a complete range of diagnostic and interventional
                  imaging solutions designed to streamline workflows and enhance
                  patient care:
                </p>
                <ul className="font-18 list-style-square ps-4">
                  <li>In-house radiologist</li>
                  <li>Teleradiology service</li>
                  <li>
                    Interventional radiology services including Image-guided
                    biopsies and minimally invasive procedures
                  </li>
                  <li>Second opinion case reporting</li>
                </ul>

                <h2 className="font-30 fw-bold py-2">
                  Commitment to Quality and Innovation
                </h2>
                <p className="font-18">
                  We embrace the latest imaging technologies and
                  artificial-intelligence tools to augment our expertise.
                  Regular training, research collaborations, and performance
                  audits keep us at the forefront of radiology practice.
                </p>

                <h2 className="font-30 fw-bold py-2">What makes us special?</h2>
                <p className="font-18">
                  We value our team members, especially the pillars of our
                  framework ' the radiologist' giving due care to their
                  knowledge, skill and the valuable time the set apart for all
                  of us, providing them the best remuneration and enough time to
                  analyse and conclude each case, without losing the demarcation
                  between elective an emergency case. We provide redressal of
                  the current problem sprouting in hospitals, pertaining to
                  report quality, by ensuring participation of qualified and
                  expert radiologists who is always ready to detail and explicit
                  their report. Patients are always at advantage that they
                  receive structured work-up through proper workflow protocols,
                  avoiding unnecessary repetition of imaging.
                </p>
                <h2 className="font-30 fw-bold py-2">Get in Touch</h2>
                <p className="font-18">
                  Let us alleviate your imaging challenges with precision,
                  reliability, and personalized service.{" "}
                </p>
                <ul className="font-18 list-style-square ps-4">
                  <li>Email: 3456@gmail.com</li>
                  <li>Phone: 123-456-878</li>
                </ul>
              </div>
            </div>
          </section>

          <section></section>
          <section></section>
        </div>
      </div>
    </div>
  );
}

export default About;
