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
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/uses", label: "Uses" },
            ]}
          />
        </header>
        <main className="container mx-auto">{children}</main>

        <Footer
          links={[
            { url: "/", title: "Home" },
            { url: "/about", title: "About" },
            { url: "/projects", title: "Projects" },
            { url: "/uses", title: "Uses" },
          ]}
        />
      </body>
    </html>
  );
}
