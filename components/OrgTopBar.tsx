  const OrgTopBar = () => {
    return (
      <div className="fixed top-0 left-0 w-full bg-[#4AA794] text-white p-4 z-50 flex items-center justify-center"> {/* Flex container */}
        {/* Logo on the left */}
        <img src="/ycoLogo.png" alt="yCo logo" className="absolute left-5 h-11 w-11 rounded-full" /> {/* Make the logo a circle */}
        {/* Title remains centered */}
        <h1 className="text-2xl font-bold">yConnecta</h1>
      </div>
    );
  };
  
  export default OrgTopBar;
  