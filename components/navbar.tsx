import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon, Logo, LogoPause } from "@/components/icons";

export const Navbar = () => {
 

  return (
    <NextUINavbar maxWidth="xl" className="fixed top-0 !px-0">
      <NavbarContent className="basis-1/5 sm:basis-full !px-0" justify="start">
        <NavbarBrand as="li" className="gap-3 !px-0 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <LogoPause />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
      </NavbarContent>

    </NextUINavbar>
  );
};
