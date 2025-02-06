"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

export const Sidebar = ({ links }: { links: Links[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <DesktopSidebar open={open} setOpen={setOpen} links={links} />
      <MobileSidebar open={open} setOpen={setOpen} links={links} />
    </div>
  );
};

const DesktopSidebar = ({
  open,
  setOpen,
  links,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: Links[];
}) => {
  return (
    <div
      className={cn(
        "h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0 transition-width duration-300 ease-in-out",
        open ? "w-[300px]" : "w-[60px]"
      )}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {links.map((link) => (
        <SidebarLink key={link.href} link={link} open={open} />
      ))}
    </div>
  );
};

const MobileSidebar = ({
  open,
  setOpen,
  links,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: Links[];
}) => {
  return (
    <>
      <div
        className={cn(
          "h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
        )}
      >
        <div className="flex justify-end z-20 w-full">
          <IconMenu2
            className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        {open && (
          <div
            className={cn(
              "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between transition-transform duration-300 ease-in-out",
              open ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div
              className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <IconX />
            </div>
            {links.map((link) => (
              <SidebarLink key={link.href} link={link} open={open} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const SidebarLink = ({ link, open }: { link: Links; open: boolean }) => {
  return (
    <Link
      to={link.href}
      className={cn(
        "flex items-center justify-start gap-2 py-2 transition-transform duration-150 group/sidebar"
      )}
    >
      {link.icon}

      <span
        className={cn(
          "text-neutral-700 dark:text-neutral-200 text-sm whitespace-pre group-hover/sidebar:translate-x-1 transition duration-150 inline-block",
          open
            ? "inline-block opacity-100"
            : "hidden opacity-0 md:inline-block md:opacity-100"
        )}
      >
        {link.label}
      </span>
    </Link>
  );
};
