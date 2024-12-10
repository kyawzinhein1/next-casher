import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Navigation() {
  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <p className="font-bold text-inherit">NEXT</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="danger" href="/" variant="flat">
            Log out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
