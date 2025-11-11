import "./Navbar.css";

const DynamicNavbar = () => {
  const navLinks = [
    { id: 1, name: "Home", href: "#" },
    { id: 2, name: "Features", href: "#" },
    { id: 3, name: "Pricing", href: "#" },
    { id: 4, name: "Contact", href: "#" },
    { id: 5, name: "Login", href: "#" },
  ];

  const renderNavLinks = () => {
    const liElements = navLinks.map((link) => {
      const liElement = (
        <li class="nav-item" key={link.id}>
          <a class="nav-link" href={link.href}>
            {link.name}
          </a>
        </li>
      );
      return liElement;
    });

    return liElements;
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <span class="navbar-brand-red">MyApp</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">

            {
            navLinks.map((link) => 
              (
                <li class="nav-item" key={link.id}>
                  <a class="nav-link" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))
            }

            {/* renderNavLinks() */}
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DynamicNavbar;
