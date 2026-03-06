const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="text-xl font-bold text-gray-800">
        CS <span className="text-purple-600">—</span> Ticket System
      </div>
      <div className="flex items-center gap-7">
        <div className="hidden md:flex gap-6">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">Home</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">FAQ</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">Changelog</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">Blog</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">Download</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">Contact</a>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-colors">
          + New Ticket
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
