import { bem } from "../../utils/bem";
import "./style.css";

const { bl, el } = bem("repository");

export function Repository({ className, name, description, url }) {
  return (
    <a className={bl(undefined, [className])} href={url}>
      <span className={el("name")}>{name}</span>
      <div className={el("description")}>{description}</div>
    </a>
  );
}
