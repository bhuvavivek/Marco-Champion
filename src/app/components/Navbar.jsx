"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import "../globals.css";
import styles from "../style/navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();
  const [togle, setTogle] = useState(false);


  function getNavbarClass() {
    if (pathname === "/") {
      return scrolled ? styles.scrolled : "";
    } else {
      return styles.scrolled;
    }
  }

  function getNavBarContainClass() {
    if (pathname === "/") {
      return scrolled ? styles.scrollDiv : styles.navbar;
    } else {
      return `${styles.navbar} ${styles.scrollDiv}`;
    }
  }

  return (
    <div style={{ position: "relative", zIndex: 999, background: 'transparent' }}>

      <nav className={`${styles.navbar} ${getNavbarClass()}`}>
        <div className={getNavBarContainClass()}>
          <div className={styles.logo}>
            <Link href="/">
              <img src="/images/logo.svg" alt="" />
              {/* <img src="/images/Signature.png" alt="" /> */}
            </Link>
          </div>
          <div className={styles.links}>
            <Link
              className={`link sprite-graffiti ${pathname === "/" ? "active" : ""}`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`link sprite-graffiti ${pathname === "/story" ? "active" : ""}`}
              href="/story"
            >
              My Story
            </Link>
            <Link
              className={`link sprite-graffiti ${pathname === "/Reprogram" ? "active" : ""}`}
              href="/Reprogram"
            >
              Reprogram
            </Link>


            <Link
              className={`link sprite-graffiti ${pathname === "/biz" ? "active" : ""}`}
              href="/biz"
            >
              Shop
            </Link>
            <Link
              className={`link sprite-graffiti ${pathname === "/contact" ? "active" : ""}`}
              href="/contact"
            >
              Contact
            </Link>
          </div>

          <div
            onClick={() => setTogle(!togle)}
            className={`${styles.menuBar}`}
          >
            <CiMenuFries />
          </div>
        </div>
        <div className={`${styles.mobileMenu} ${togle ? styles.togle : ""}`}>
          <div>
            <Link
              className={`link sprite-graffiti ${pathname === "/" ? "active" : ""}`}
              href="/"
            >
              Home
            </Link>
          </div>

          <div>
            <Link
              className={`link sprite-graffiti ${pathname === "/story" ? "active" : ""}`}
              href="/story"
            >
              My Story
            </Link>
          </div>

          <div>
            <Link
              className={`link sprite-graffiti ${pathname === "/Reprogram" ? "active" : ""}`}
              href="/Reprogram"
            >
              Reprogram
            </Link>
          </div>

          {/* <div>
            <Link
              className={`link sprite-graffiti ${pathname === "/Hire" ? "active" : ""}`}
              href="/Hire"
            >
              Reprogram
            </Link>
          </div> */}


          <div>
            <Link
              className={`link sprite-graffiti ${pathname === "/biz" ? "active" : ""}`}
              href="/biz"
            >
              Shop
            </Link>
          </div>
          <div>
            <Link
              className={`link sprite-graffiti ${pathname === "/contact" ? "active" : ""}`}
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
