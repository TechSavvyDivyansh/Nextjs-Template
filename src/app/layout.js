import "./globals.css";
import { HackWrapper } from "@/context";




export const metadata = {
  title: "Blockchain",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <HackWrapper>
          {children}
        </HackWrapper>
      </body>
    </html>
  );
}
