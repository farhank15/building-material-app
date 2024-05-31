const Footer = () => {
  return (
    <footer className="py-6 text-white bg-gray-800">
      <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">My Company</h2>
          <p className="text-sm">© 2023 My Company. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="/about" className="text-sm hover:underline">
            About Us
          </a>
          <a href="/services" className="text-sm hover:underline">
            Services
          </a>
          <a href="/contact" className="text-sm hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
