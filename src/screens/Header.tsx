export function Header() {
  const logo = require("../assets/bluelogo.png");
  return (
    <nav className="sticky-nav bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <a href="/" className="flex items-center" style={{ maxWidth: "300px", minWidth: "100px", padding: "0.5rem 1rem" }}>
              <img alt="logo" src={logo} />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative dropdown">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2">
                Solutions
              </button>
              <div className="dropdown-menu mt-2 w-48 rounded-md">
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                >
                  Compliance Training
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                >
                  eLearning
                </a>
              </div>
            </div>
            <div className="relative dropdown">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2">
                Features
              </button>
              <div className="dropdown-menu mt-2 w-48 rounded-md">
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                >
                  Course Management
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                >
                  Analytics Dashboard
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                >
                  Integrations
                </a>
              </div>
            </div>
            <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Clients
            </a>
            <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Resources
            </a>
            <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Support
            </a>
            <a
              href="/"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              style={{ backgroundColor: "rgb(14, 131, 241)" }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
