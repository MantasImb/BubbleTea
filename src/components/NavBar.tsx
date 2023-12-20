import clsx from "clsx";

const selection_styles = "text-emerald-600 py-1 px-2 rounded-lg";
const active_selection_styles = "bg-emerald-300 text-white";

export default function NavBar() {
  return (
    <nav className="flex flex-1 items-start justify-between">
      <h1 className="text-3xl font-extrabold italic text-emerald-600 leading-6">
        Boba
        <br />
        Smile
      </h1>
      <ul className="flex gap-2 bg-emerald-100 p-2 rounded-xl">
        <li className={clsx(selection_styles, active_selection_styles)}>
          Home
        </li>
        <li className={clsx(selection_styles)}>Products</li>
        <li className={clsx(selection_styles)}>About</li>
        <li className={clsx(selection_styles)}>Contact</li>
      </ul>
    </nav>
  );
}
