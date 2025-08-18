import { Helmet } from "react-helmet-async";

export function Home() {
  const video = require('../assets/ai_promo.mp4');
  return (
    <div>
      <Helmet>
        <title>Verity Polygraph Services</title>
      </Helmet>

      {/* Banner Section */}
      <section
        className="hero-bg text-white py-3"
        style={{
          background:
          //"linear-gradient(to right,rgb(17, 42, 109),rgba(10, 77, 223, 1))",
          "rgba(29, 29, 29, 1)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg sm:text-xl">
            Empower your agency with a scalable, intuitive polygraph training platform trusted by professionals nationwide.
            </p>
        </div>
      </section>

      {/* Marquee Section */}
      <section
        id="control-marquee"
        className="relative marquee--blade marquee--right-image"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <article
            className="grid grid_main grid--sixteenbynine theme--light"
            data-module-track-impressions=""
            data-module-id="1749657966292_4p7"
            data-module-name="Grow faster and work smarter."
            data-module-position="1"
            data-module-type="headline"
          >
            <div className="video__wrapper">
              <div className="video__asset" video-uuid="gNTjNAWV8BZbRULKC4Q9Zg">
                <div
                  className="vidyard-div-gNTjNAWV8BZbRULKC4Q9Zg"
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: "0px",
                    overflow: "hidden",
                    maxWidth: "100%",
                    backgroundColor: "transparent",
                  }}
                >
                                    <video
                    id="video-1"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="embed-responsive-item"
                  >
                    <source
                     src={`${video}#t=0.1&autoplay=1&mute=1`}
                      type="video/mp4"
                    />
                  </video>
                    {/* <iframe
                    src={`${video}#t=0.1&autoplay=1&mute=1`}
                    title="Verity Polygraph Services"
                    frameBorder="0"
                    height="100%"
                    width="100%"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    allow="autoplay"
                    allowFullScreen
                    ></iframe> */}
                </div>
              </div>
            </div>

            <div className="content__wrapper ">
              <header className="marquee__blade-heading eyebrow--standard ">
                <h1 className="headline marquee__headline--standard">
                  <strong>Experience</strong> you
                  <br /> can trust.
                </h1>
                <div
                  className="blade__description"
                  style={{ margin: "2rem 0" }}
                >
                    <p>
                    Unlock the power of polygraph learning with Verity. Our platform blends expert-led instruction with interactive modules, helping agencies and professionals master polygraph techniques, ethics, and best practices. Build confidence, ensure compliance, and stay ahead in the evolving world of truth verification.
                    </p>
                </div>
              </header>
              <div className="cta__wrapper">
                <div className="cta_button__wrapper">
                  <a
                    href="/try"
                    className="primary-btn bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Schedule
                  </a>
                  <a
                    href="/try"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    style={{
                      backgroundColor: "#fff",
                      color: "rgb(41 41 41)",
                      border: "1px solid rgb(41 41 41)",
                    }}
                  >
                    Watch Demos
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-bg text-white py-20" style={{ display: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Get Accurate results from Verity Polygraph Services
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Empower your organization with a reliable, intuitive leader in Polygraph Services.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100"
            >
              Watch Demo
            </a>
            <a
              href="/"
              className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-12">
            Choose Experience
          </h2>
          <div
            className="blade__description text-center mb-8"
            style={{ marginBottom: "2rem" }}
          >
            <p>
                Create a digital labor force that works alongside your human
                workforce. AI agents work 24/7, taking action and providing
                support to employees and customers. Free your people to be more
                productive, so they can focus on more important stuff.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Unified Learning Hub
              </h3>
              <p className="text-gray-600">
                Manage instructor-led training, eLearning, and compliance in one
                platform.
              </p>
            </div>
            <div className="feature-card bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Seamless Integrations
              </h3>
              <p className="text-gray-600">
                Sync with Zoom, Teams, and Webex for effortless training
                delivery.
              </p>
            </div>
            <div className="feature-card bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Powerful Analytics
              </h3>
              <p className="text-gray-600">
                Track learner progress and compliance with real-time insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section
        className="py-16 bg-gray-100"
        style={{ backgroundColor: "#fff", display: "none" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-12">
            Trusted by Agencies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <img
              className="client-logo h-12 w-auto mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Patch_of_the_OCPD.jpeg/250px-Patch_of_the_OCPD.jpeg"
              alt="Client 1"
            />
            <img
              className="client-logo h-12 w-auto mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Patch_of_the_OCPD.jpeg/250px-Patch_of_the_OCPD.jpeg"
              alt="Client 2"
            />
            <img
              className="client-logo h-12 w-auto mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Patch_of_the_OCPD.jpeg/250px-Patch_of_the_OCPD.jpeg"
              alt="Client 3"
            />
            <img
              className="client-logo h-12 w-auto mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Patch_of_the_OCPD.jpeg/250px-Patch_of_the_OCPD.jpeg"
              alt="Client 4"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-blue-600 text-white"
        style={{ backgroundColor: "rgb(14, 131, 241)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-4" style={{ color: "#fff" }}>
            Ready to Elevate Your Training?
          </h3>
          <p className="text-lg mb-6">
            Join the world’s top agencies using Verity Polygraph Services to streamline
            learning.
          </p>
          <a
            href="/"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-gray-900 text-white py-12"
        style={{ backgroundColor: "rgb(41 41 41)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Verity</h3>
              <p className="text-gray-400">
                Empowering organizations with innovative Polygraph Services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <a href="/" className="block text-gray-400 hover:text-white mb-2">
                Polygraph Training
              </a>
              <a href="/" className="block text-gray-400 hover:text-white mb-2">
                Consultations
              </a>
              <a href="/" className="block text-gray-400 hover:text-white mb-2">
                Reports
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <a href="/" className="block text-gray-400 hover:text-white mb-2">
                Blog
              </a>
              <a href="/" className="block text-gray-400 hover:text-white mb-2">
                Webinars
              </a>
              <a href="/" className="block text-gray-400 hover:text-white mb-2">
                Case Studies
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <a href="/" className="block text-gray-400 hover:text-white mb-2">
                Support
              </a>
              <a href="/" className="block text-gray-400 hover:text-white mb-2">
                Sales
              </a>
              <a href="/" className="block text-gray-400 hover:text-white mb-2">
                Careers
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Verity. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
