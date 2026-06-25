"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { mainNav } from "@/content/site";

function normalizePath(path: string) {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

function isActive(pathname: string, href: string) {
  if (href === "#") return false;
  return normalizePath(pathname) === normalizePath(href);
}

function isChildActive(pathname: string, children: readonly { href: string }[]) {
  return children.some((child) => isActive(pathname, child.href));
}

export default function SiteNav() {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const closeMenus = useCallback(() => {
    setMobileOpen(false);
    setResourcesOpen(false);
  }, []);

  useEffect(() => {
    closeMenus();
  }, [pathname, closeMenus]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen, closeMenus]);

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <ul className="site-nav__list">
        {mainNav.map((item) => {
          if ("children" in item && item.children) {
            const active = isChildActive(pathname, item.children);
            return (
              <li
                key={item.label}
                className="site-nav__item"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <button
                  type="button"
                  className={`site-nav__link${active ? " is-active" : ""}${resourcesOpen ? " is-open" : ""}`}
                  aria-expanded={resourcesOpen}
                  aria-haspopup="true"
                  onClick={() => setResourcesOpen((open) => !open)}
                >
                  {item.label}
                  <i className="fas fa-caret-down site-nav__caret" aria-hidden="true" />
                </button>
                <ul className={`site-nav__dropdown${resourcesOpen ? " is-open" : ""}`}>
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={`site-nav__dropdown-link${isActive(pathname, child.href) ? " is-active" : ""}`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }

          if (!("href" in item)) return null;

          return (
            <li key={item.href} className="site-nav__item">
              <Link
                href={item.href}
                className={`site-nav__link${isActive(pathname, item.href) ? " is-active" : ""}`}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        className="site-nav__toggle"
        aria-label="Menu Toggle"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((open) => !open)}
      >
        <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"}`} aria-hidden="true" />
      </button>

      <div className={`site-nav__mobile${mobileOpen ? " is-open" : ""}`} aria-hidden={!mobileOpen}>
        <ul>
          {mainNav.map((item) => {
            if ("children" in item && item.children) {
              return (
                <li key={item.label}>
                  <span className="site-nav__link">{item.label}</span>
                  <ul className="site-nav__dropdown is-open">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="site-nav__dropdown-link"
                          onClick={closeMenus}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            if (!("href" in item)) return null;

            return (
              <li key={item.href}>
                <Link href={item.href} className="site-nav__link" onClick={closeMenus}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
