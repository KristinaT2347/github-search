import { bem } from "../../utils/bem";
import "./style.css";

const { bl, el } = bem("link");

export function Link({ className, href, children }) {
  return (
    <a className={bl(undefined, className)} href={href}>
      {children}
    </a>
  );
}
