import { useCallback, useState } from "react";
import Icon from "../../assets/img/image.png";
import { bem } from "../../utils/bem";
import "./style.css";

const { bl, el } = bem("search-input");

export function SearchInput({ className, onSearch }) {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onKeyUp = useCallback(
    (e) => {
      if (e.key !== "Enter") {
        return;
      }

      onSearch(value);
    },
    [value, onSearch]
  );

  return (
    <div className={bl(undefined, [className])}>
      <img src={Icon} className={el("icon")} alt="Icon" />
      <input
        className={el("input")}
        placeholder="Enter GitHub username"
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </div>
  );
}
