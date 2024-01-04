"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";

import { toast } from "sonner";

import styles from "./Links.module.css";

const Links = () => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const pathname = usePathname();

  const links = [
    { title: "home", href: "/" },
    { title: "projects", href: "/projects" },
    { title: "about", href: "/about" },
  ];

  const isActive = (href: string) => href === pathname;

  const downloadFile = () => {
    toast(
      <div style={{ fontFamily: "var(--font-geist-sans)" }}>
        Resume download complete.
      </div>
    );
    const fileUrl = "/assets/resume/Akhmetbekuly_Mukhammedali_CV.pdf";
    const link = linkRef.current;
    if (link) {
      link.href = fileUrl;
      link.download = "Akhmetbekuly_Mukhammedali_CV.pdf";
    }
  };

  return (
    <>
      {links.map((link) => (
        <li
          className={styles.link}
          id={link.title}
          data-testid={link.title}
          key={link.title}
        >
          <Link
            className={isActive(link.href) ? styles.activeLink : ""}
            href={link.href}
          >
            {link.title}
          </Link>
        </li>
      ))}

      <li>
        <a className="colorGreen100" ref={linkRef} onClick={downloadFile}>
          download resume
        </a>
      </li>
    </>
  );
};

export default Links;
