import { NavLink } from './NavLink';

export const Header = () => (
  <header>
    <nav>
      <ul className="flex w-full items-center justify-center gap-8 px-2 py-4 sm:flex-row sm:gap-6">
        <li>
          <NavLink href="/" label="Home" />
        </li>
        <li>
          <NavLink href="/recipes" label="Recipes" />
        </li>
      </ul>
    </nav>
  </header>
);
