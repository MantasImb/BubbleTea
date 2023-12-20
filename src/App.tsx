import MenuWrapper from "./components/MenuWrapper";
import SceneWrapper from "./components/SceneWrapper";

export default function App() {
  return (
    <>
      <main className="h-screen hidden md:block">
        <SceneWrapper />
        <MenuWrapper />
      </main>
      <h1 className="md:hidden sm:block">
        Sorry, the application only works on Desktops. Go on the PC and check it
        out, Nuni... ❤️
      </h1>
    </>
  );
}
