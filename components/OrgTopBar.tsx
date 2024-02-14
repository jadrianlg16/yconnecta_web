  // const OrgTopBar = () => {
  //   return (
  //     <div className="fixed top-0 left-0 w-full bg-[#4AA794] text-white p-4 z-50 flex items-center justify-center"> {/* Flex container */}
  //       {/* Logo on the left */}
  //       <img src="/ycoLogo.png" alt="yCo logo" className="absolute left-5 h-11 w-11 rounded-full" /> {/* Make the logo a circle */}
  //       {/* Title remains centered */}
  //       <h1 className="text-2xl font-bold">yConnecta</h1>
  //     </div>
  //   );
  // };
  
  // export default OrgTopBar;
  

  // OrgTopBar component represents the top navigation or header bar of the application.
const OrgTopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#4AA794] text-white p-4 z-50 flex items-center justify-center"> {/* This div creates a fixed top bar that stretches across the full width of the screen. It uses Tailwind CSS for styling, setting the background color, text color, padding, and ensuring it stays above other content with a high z-index. */}
      {/* Logo on the left */}
      <img src="/ycoLogo.png" alt="yCo logo" className="absolute left-5 h-11 w-11 rounded-full" /> {/* The logo is positioned absolutely within the fixed container, to the left. The rounded-full class makes the logo circular. */}
      {/* Title remains centered */}
      <h1 className="text-2xl font-bold">yConnecta</h1> {/* The title is centered within the top bar. Styling is applied for font size and weight. */}
    </div>
  );
};

export default OrgTopBar;
