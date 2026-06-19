"use client";

import { useEffect, useRef, useState } from "react";

export function PrivacyPolicyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const agreeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    agreeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button className="footerPolicyButton" type="button" onClick={() => setIsOpen(true)}>
        Privacy Policy
      </button>

      {isOpen && (
        <div className="privacyModalBackdrop" role="presentation">
          <section
            aria-labelledby="privacy-policy-title"
            aria-modal="true"
            className="privacyModal"
            role="dialog"
          >
            <div className="privacyModalHeader">
              <div>
                <p className="eyebrow">Legal</p>
                <h2 id="privacy-policy-title">Privacy Policy</h2>
                <p>Effective Date: 19 June 2026</p>
              </div>
            </div>

            <div className="privacyModalContent">
              <h3>1. Introduction</h3>
              <p>Rave Tech Pte. Ltd. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) values your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, www.rave.tech, or use our services. Please read this policy carefully. If you do not agree with its terms, please do not access the site.</p>

              <h3>2. Information We Collect</h3>
              <p>We may collect information about you in a variety of ways, including:</p>
              <ul>
                <li><strong>Personal Data:</strong> Your name, email address, phone number, and other information you voluntarily provide when registering, making a purchase, or interacting with us.</li>
                <li><strong>Usage Data:</strong> Information about your interactions with our website, including IP address, browser type, access times, and pages viewed.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> Cookies, web beacons, and similar technologies used to enhance your experience.</li>
              </ul>

              <h3>3. How We Use Your Information</h3>
              <p>We may use the information we collect to:</p>
              <ul>
                <li>Provide, operate, and maintain our website and services.</li>
                <li>Improve, personalize, and expand our website and services.</li>
                <li>Understand and analyze how you use our website and services.</li>
                <li>Communicate with you directly or through our partners, including for customer service and website updates.</li>
                <li>Send you emails.</li>
              </ul>

              <h3>4. Disclosure of Your Information</h3>
              <p>We may share your information in the following situations:</p>
              <ul>
                <li><strong>By Law or to Protect Rights:</strong> When release is necessary to respond to legal process, investigate potential policy violations, or protect the rights, property, and safety of others.</li>
                <li><strong>Third-Party Service Providers:</strong> With providers performing services on our behalf, including payment processing, data analysis, email delivery, hosting, customer service, and marketing assistance.</li>
              </ul>

              <h3>5. Security of Your Information</h3>
              <p>We use administrative, technical, and physical security measures to help protect your personal information. Although we take reasonable steps to secure the information you provide, no internet transmission or electronic storage method is 100% secure.</p>

              <h3>6. Your Data Protection Rights</h3>
              <p>Depending on your location, you may have the right to access, rectify, erase, restrict the processing of, or request portability of your data, as well as withdraw consent.</p>

              <h3>7. Changes to This Privacy Policy</h3>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page. Please review this policy periodically.</p>

              <h3>8. Contact Us</h3>
              <p>For questions or comments, contact Rave Tech Pte. Ltd. at 18 Cross St, #02-101, Singapore 048423 or <a href="mailto:sales@rave.tech">sales@rave.tech</a>.</p>
            </div>

            <div className="privacyModalActions">
              <button
                className="button primary"
                onClick={() => setIsOpen(false)}
                ref={agreeButtonRef}
                type="button"
              >
                Agree
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
