import Vector from "../../assets/img/vector.png";
import { SearchInput } from "../SearchInput";
import { bem } from "../../utils/bem";
import "./style.css";

const { bl, el } = bem("header");

export function Header({ className, onSearch }) {
  return (
    <div className={bl(undefined, [className])}>
      <img src={Vector} className={el("logo")} alt="vector" />
      <SearchInput className={el("search")} onSearch={onSearch} />
    </div>
  );
}
