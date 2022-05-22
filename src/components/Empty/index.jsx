import { bem } from "../../utils/bem";
import "./style.css";

const { bl, el } = bem("empty");

export function Empty() {
  return (
    <div className={bl()}>
      <span className={el("some")}>42</span>
    </div>
  );
}
