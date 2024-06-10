import { Roboto } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header>
          <Navbar
            options={[
              { path: "/", label: "Home" },
              { path: "/portfolio/about", label: "About" },
              { path: "/portfolio/projects", label: "Projects" },
              { path: "/portfolio/uses", label: "Uses" },
            ]}
          />
        </header>
        <main className="container mx-auto">{children}</main>

        <Footer
          links={[
            { url: "/", title: "Home" },
            { url: "/portfolio/about", title: "About" },
            { url: "/portfolio/projects", title: "Projects" },
            { url: "/portfolio/uses", title: "Uses" },
          ]}
        />
      </body>
    </html>
  );
}
