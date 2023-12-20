import MenuWrapper from "./components/MenuWrapper";
import SceneWrapper from "./components/SceneWrapper";

export default function App() {
  return (
    <>
      <div className="h-screen">
        <SceneWrapper />
        <MenuWrapper />
      </div>
      <h1 className="md:hidden sm:block">
        Sorry, the application only works on Desktops. Go on the PC and check it
        out, Nuni... ❤️
      </h1>
    </>
  );
}
