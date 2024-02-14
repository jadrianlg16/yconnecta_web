// //layout.tsx
// import OrgNavBar from "@/components/OrgNavBar";
// import type { Metadata } from "next";
// import OrgTopBar from "@/components/OrgTopBar";

// export const metadata: Metadata = {
//   title: "User View",
//   description: "User View",
// };
// const orgName = "Consejo Civico";
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`flex flex-row w-full pb-20`}>
//         <OrgNavBar />
//         <div className="flex flex-col w-full h-full bg-primary p-4">
//           <OrgTopBar />
          
//           {children}
//         </div>

//       </body>
//     </html>
//   );
// }

// Import statements for the necessary components and types
import OrgNavBar from "@/components/OrgNavBar"; // Custom navigation bar component
import type { Metadata } from "next"; // Type import for Next.js metadata (Note: This specific import may need adjustment as Next.js does not export a 'Metadata' type by default)
import OrgTopBar from "@/components/OrgTopBar"; // Custom top bar component

// Metadata for the layout, used to define properties like title and description
// Note: This usage of metadata is illustrative and may not directly apply to Next.js's standard practices
// as Next.js typically uses <Head> component for such purposes.
export const metadata: Metadata = {
  title: "User View",
  description: "User View",
};

// Name of the organization, potentially used in the layout or components
const orgName = "Consejo Civico"; // This variable is declared but not used in the component

// RootLayout functional component definition
export default function RootLayout({
  children, // React children prop to render nested components or elements
}: Readonly<{
  children: React.ReactNode; // Type annotation for children prop
}>) {
  return (
    // Basic HTML structure with a 'lang' attribute on the <html> tag
    <html lang="en">
      <body className={`flex flex-row w-full pb-20`}>
        <OrgNavBar />  
        {/* Inserts the custom navigation bar component on the left side */}
        <div className="flex flex-col w-full h-full bg-primary p-4">
          <OrgTopBar />  
          {/* Inserts the custom top bar component at the top of the main content area */}
          
          {children}  
          {/* Renders the children content, allowing this layout to wrap around various pages or components */}
        </div>
      </body>
    </html>
  );
}
