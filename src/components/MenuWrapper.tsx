import { useState } from "react";
import NavBar from "./NavBar";
import TeaTypeSelection from "./tea-selections/TeaTypeSelection";

type TeaTypes = "original" | "fruity" | "milk" | "cream";
type TeaFlavors<T> = T extends "original"
  ? "Assamu Black tea" | "Jasmine Green tea"
  : T extends "fruity"
  ? "Mango" | "Strawberry"
  : T extends "milk"
  ? "Vanilla" | "Matcha"
  : T extends "cream"
  ? "Brown Sugar" | "Taro"
  : never;
type TeaBubbleFlavors = "tapioca" | "coconut jelly" | "aloe vera";
type TeaSizes = "small" | "medium" | "large";
type TeaSugars = "100%" | "75%" | "50%" | "25%" | "0%";

type TeaOrderSelections = {
  type: TeaTypes;
  flavor: TeaFlavors<TeaTypes>;
  bubbleFlavor: TeaBubbleFlavors;
  size: TeaSizes;
  sugar: TeaSugars;
};

export default function MenuWrapper() {
  const [teaOrderSelections, setTeaOrderSelections] =
    useState<TeaOrderSelections>({
      type: "original",
      flavor: "Assamu Black tea",
      bubbleFlavor: "tapioca",
      size: "medium",
      sugar: "0%",
    });

  return (
    <div className="absolute top-3 left-3 right-3 bottom-3 p-3 border-4 flex gap-4 border-emerald-100 rounded-xl">
      <NavBar />
      <TeaTypeSelection teaOrderSelections={teaOrderSelections} />
    </div>
  );
}
