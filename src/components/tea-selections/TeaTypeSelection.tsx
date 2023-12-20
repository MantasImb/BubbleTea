import clsx from "clsx";
import {
  selection_styles,
  active_selection_styles,
  radio_button_styles,
} from "./styling";

export default function TeaTypeSelection({ teaOrderSelections }) {
  return (
    <div className="flex flex-col bg-emerald-100 rounded-xl p-2">
      <h2 className="text-emerald-600 font-bold text-lg">Choose the type</h2>
      <form className="flex flex-col gap-1 hidden">
        <div
          className={clsx(
            selection_styles,
            teaOrderSelections.type === "original" && active_selection_styles
          )}
        >
          <input
            type="radio"
            id="original"
            name="tea_type"
            value="original"
            className={radio_button_styles}
          />
          <label htmlFor="original">Original</label>
        </div>
        <div
          className={clsx(
            selection_styles,
            teaOrderSelections.type === "fruity" && active_selection_styles
          )}
        >
          <input
            type="radio"
            id="fruity"
            name="tea_type"
            value="fruity"
            className={radio_button_styles}
          />
          <label htmlFor="fruity">Fruity</label>
        </div>
        <div
          className={clsx(
            selection_styles,
            teaOrderSelections.type === "milk" && active_selection_styles
          )}
        >
          <input
            type="radio"
            id="milk"
            name="tea_type"
            value="milk"
            className={radio_button_styles}
          />
          <label htmlFor="milk">Milk</label>
        </div>
        <div
          className={clsx(
            selection_styles,
            teaOrderSelections.type === "cream" && active_selection_styles
          )}
        >
          <input
            type="radio"
            id="cream"
            name="tea_type"
            value="cream"
            className={radio_button_styles}
          />
          <label htmlFor="cream">Cream</label>
        </div>
      </form>
    </div>
  );
}
