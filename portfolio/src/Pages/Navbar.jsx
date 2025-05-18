import Nav from "./Component/Nav";

function Navbar() {
  return (
    <div className="bg-transparent text-black sticky top-0 z-[20] mx-auto flex items-center justify-between border-b border-gray-50 p-8">      
    
      <div className="hidden md:flex ml-auto">
        <Nav />
      </div>
      <div className="flex items-center gap-4 md:hidden ml-auto">
       
        <Nav />
      </div>
     
    </div>
  );
}

export default Navbar;
