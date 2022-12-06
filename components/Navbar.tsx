import Link from "next/link";
import { useRouter } from "next/router";
import NavLink from "./Navlink";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="sticky top-0 left-0 right-0 bg-red-500 z-50">
      <nav className="container mx-auto py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <NavbarLogo />
          </Link>
          <ul className="flex justify-center align-center">
            <li className="mr-3">
              <NavLink title="Home" link="/" />
            </li>
            <li className="mr-3">
              <NavLink title="Bands" link="/bands" />
            </li>
            <li className="mr-3">
              <NavLink title="Albums" link="/albums" />
            </li>
            <li>
              <NavLink title="Record Labels" link="/record-labels" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
