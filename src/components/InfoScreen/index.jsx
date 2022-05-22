import { bem } from "../../utils/bem";
import "./style.css";

const { bl, el } = bem("info-screen");

export function InfoScreen({ className, icon, text }) {
  return (
    <div className={bl(undefined, [className])}>
      <div className={el("icon")}>{icon}</div>
      <div className={el("text")}>{text}</div>
    </div>
  );
}
