import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Services() {
  return (
    <div className="container py-5 mt-5 services-wrapper">
      <div className="row">
        <div className="col-12 col-md-4">
          <h1 className="font-60 fw-bold py-3 position-sticky top-0 lh-1">
            Our <span className="text-custom-red">Services</span>
          </h1>
        </div>
        <div className="col-12 col-md-8">
          <h3 className="font-30 fw-bold py-3">
            Comprehensive Radiology, Wherever You Are
          </h3>
          <p className="font-24 light-grey-color">
            We specialize in delivering a full spectrum of radiology solutions
            that combine clinical expertise with innovative technology. From
            remote interpretation to in-house support, our services are designed
            to empower healthcare providers with speed, accuracy, and confidence
            in every report.
          </p>
        </div>
      </div>

      <section className="row align-items-center g-3 g-md-4 g-xl-5 py-5">
        <div className="col-12 col-md-5">
          <img
            src="./home/247.png"
            alt="MRI Device"
            className="img-fluid w-100"
          />
        </div>
        <div className="col-12 col-md-7">
          <h4 className="fw-bold font-30 mb-1">Teleradiology Services</h4>
          <p className="font-24 light-grey-color">
            Seamless. Scalable. Always On.
          </p>
          <p className="font-18">
            Our 24/7 teleradiology model connects hospitals, diagnostic centers,
            and clinics with a network of board-certified radiologists across
            subspecialties.
          </p>
          <ul className="font-18 list-style-square ps-3">
            <li>Emergency and routine reads across all imaging modalities</li>
            <li>Secure integration with your PACS, RIS, and HIS</li>
            <li>
              Support for interventional procedures and specialty reporting
            </li>
          </ul>
        </div>
      </section>

      {/* In-House Radiology */}
      <section className="row align-items-center g-3 g-md-4 g-xl-5 py-5">
        <div className="col-12 col-md-7">
          <h4 className="fw-bold font-30 mb-1">In-House Radiology Solutions</h4>
          <p className="font-24 light-grey-color">
            Embedded Expertise—Right at Your Facility
          </p>
          <p className="font-18">
            We offer radiology staffing and consultation services directly at
            your site, allowing for immediate collaboration and better
            continuity of care.
          </p>
          <ul className="font-18 list-style-square ps-3">
            <li>
              On-site radiologist deployment for short- or long-term coverage
            </li>
            <li>Hybrid models combining in-house presence with remote reads</li>
            <li>
              Support for interventional procedures and specialty reporting
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-5">
          <img
            src="./home/inhouse.png"
            alt="MRI Device"
            className="img-fluid w-100"
          />
        </div>
      </section>

      {/* Expert Panel Discussions */}
      <section className="row align-items-center g-3 g-md-4 g-xl-5 py-5">
        <div className="col-12 col-md-5">
          <img
            src="./home/expertpanel.png"
            alt="CT Device"
            className="img-fluid w-100"
          />
        </div>
        <div className="col-12 col-md-7">
          <h4 className="fw-bold font-30 mb-1">Expert Panel Discussions</h4>
          <p className="font-24 light-grey-color">
            Where Insight Meets Consensus
          </p>
          <p className="font-18">
            Our panel-based review model brings together radiologists and
            clinical advisors to discuss complex or high-stakes cases.
          </p>
          <ul className="font-18 list-style-square ps-3">
            <li>Multidisciplinary review for diagnostic accuracy</li>
            <li>
              Subspecialty insights to strengthen clinical decision-making
            </li>
            <li>Virtual board participation and second-read requests</li>
          </ul>
        </div>
      </section>

      {/* Second Opinion Reporting */}
      <section className="row align-items-center g-3 g-md-4 g-xl-5 py-5">
        <div className="col-12 col-md-7">
          <h4 className="fw-bold font-30 mb-1">Second Opinion Reporting</h4>
          <p className="font-24 light-grey-color">
            Reassurance You Can Rely On
          </p>
          <p className="font-18">
            We provide independent, expert reviews on prior scans and reports to
            support confident clinical decisions.
          </p>
          <ul className="font-18 list-style-square ps-3">
            <li>
              Subspecialty-led second opinions for critical or ambiguous cases
            </li>
            <li>Fast turnaround for urgent reviews</li>
            <li>Transparent findings with annotated reports if requested</li>
          </ul>
        </div>
        <div className="col-12 col-md-5">
          <img
            src="./home/secondopinion.jpg"
            alt="X-ray Device"
            className="img-fluid w-100"
          />
        </div>
      </section>

      {/* Interventional Radiology */}
      <section className="row align-items-center g-3 g-md-4 g-xl-5 py-5">
        <div className="col-12 col-md-5">
          <img src="./home/intervention.jpeg" alt="IR Device" className="img-fluid w-100" />
        </div>
        <div className="col-12 col-md-7">
          <h4 className="fw-bold font-30 mb-1">
            Interventional Radiology Services
          </h4>
          <p className="font-24 light-grey-color">
            Precision-Guided Procedures That Treat, Not Just Diagnose
          </p>
          <p className="font-18">
            Our team offers interventional radiology expertise for both
            diagnostic and therapeutic procedures.
          </p>
          <ul className="font-18 list-style-square ps-3">
            <li>Ultrasound- and CT-guided biopsies</li>
            <li>Drainage procedures and vascular access</li>
            <li>On-site or referral-based interventional coverage</li>
          </ul>
        </div>
      </section>

      <div className="text-center py-5">
        <h5 className="fw-semibold font-24">
          From the first image to the final interpretation—we're with you all
          the way.
        </h5>
        <p className="light-grey-color font-18">
          Let’s build a partnership that enhances your radiology workflow and
          elevates your patient care.
        </p>
      </div>
    </div>
  );
}

export default Services;
