"use client"
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import quoteCraftLogo from "@/public/icon-rm-bg.png";
import { Button } from "@heroui/button";
// import { Kbd } from "@heroui/kbd"; // Kbd not used in this snippet
import { Link } from "@heroui/link";
import { Input } from "@heroui/input"; // Input not used directly here, but kept import
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site"; // Ensure this config is updated for QuoteCraft
import { usePathname } from "next/navigation";
import { Image } from "@heroui/image";

export const Navbar = () => {
  const pathanme = usePathname();

  return (
    // Using HeroUI Navbar component
    <HeroUINavbar maxWidth="xl" position="sticky">
      {/* Left Section: Brand and Desktop Nav */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        {/* Brand Logo/Name */}
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <Image
            src={quoteCraftLogo.src}
            width={32}
            height={32}
            alt="logo"
            radius="none"
            />
            <p className="font-heading font-bold text-inherit">QuoteCraft</p>
          </NextLink>
        </NavbarBrand>
        {/* Desktop Navigation Links - Loaded from siteConfig */}
        <ul className="hidden md:flex gap-4 justify-start ml-4"> {/* Added margin-left */}
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }), // Uses theme's foreground color
                  `${pathanme == item.href ? "text-secondary" : "text-primary" }`, // Uses theme's primary color for active link
                  "text-base" // Slightly larger base font size for nav items
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Right Section: Search, Theme Switch, Login/Actions */}
      <NavbarContent
        className="hidden md:flex basis-1/5 sm:basis-full"
        justify="end"
      >

        {/* Optional: Theme Switch can go here */}
        <NavbarItem className="hidden md:flex"> 
          {/* <ThemeSwitcher /> */}
         </NavbarItem>


        <NavbarItem className="hidden md:flex">
          {/* <Button as={NextLink} color="primary" href="/login" variant="solid">
            Login / Sign Up
          </Button> */}
          {/* Or have separate Login and Sign Up buttons */}
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
         {/* Optional: Theme Switch for mobile? */}
         {/* <ThemeSwitcher /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
         {/* Optional: Mobile Search Bar */}
         {/* <NavbarMenuItem> <SearchInput /> </NavbarMenuItem> */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {/* Mobile Navigation Links - Loaded from siteConfig */}
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }), // Uses theme's foreground color
                  `${pathanme == item.href ? "text-secondary" : "text-primary" }`, // Uses theme's primary color for active link
                  "text-base" // Slightly larger base font size for nav items
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
           {/* Mobile Login/Signup Link */}
           <NavbarMenuItem>
             {/* <Link color="primary" href="/login" size="lg">
               Login / Sign Up
            </Link> */}
           </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};