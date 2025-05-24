import React from "react";
 
  export default function layout ({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
   return (
     <main className="p-4 bg-primaryGray overflow-hidden" dir="rtl">
      {children}
     </main>
   );
 };
 
