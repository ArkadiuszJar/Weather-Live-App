import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="font-Montserrat backdrop-blur-sm">
      <div className="mx-auto flex w-4/6 flex-col items-center justify-between p-4 md:flex-row lg:flex-row ">
        <Link href="./">
          <p className="text-xl font-semibold">Weather Live</p>
        </Link>
        <ul className="flex gap-8">
          <li className=" border-b hover:border-blue-400">
            <Link href="./">Home</Link>
          </li>

          <li className=" border-b hover:border-blue-400">
            <Link href="./about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
