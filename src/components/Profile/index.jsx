import { bem } from "../../utils/bem";
import "./style.css";
import followersIcon from "./images/followers-icon.png";
import followingIcon from "./images/following-icon.png";
import { Link } from "../Link";

const { bl, el } = bem("profile");

export function Profile({
  className,
  avatarUrl,
  name,
  nick,
  githubUrl,
  followersCount,
  followingCount,
}) {
  return (
    <div className={bl(undefined, className)}>
      <img src={avatarUrl} className={el("avatar")} alt="avatar" />
      <div className={el("user-name")}>{name}</div>
      <Link className={el("github-url")} href={githubUrl}>
        {nick}
      </Link>
      <div className={el("counts-container")}>
        <div className={el("count")}>
          <img src={followersIcon} /> {followersCount} followers
        </div>
        <div className={el("count")}>
          <img src={followingIcon} /> {followingCount} following
        </div>
      </div>
    </div>
  );
}
