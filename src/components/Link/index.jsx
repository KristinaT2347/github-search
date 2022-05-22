import { bem } from "../../utils/bem";
import "./style.css";

const { bl } = bem("link");

export function Link({ className, href, children }) {
  return (
    <a className={bl(undefined, className)} href={href}>
      {children}
    </a>
  );
}
