import { Header } from "../src/components/Header";
import "./App.css";
import { Profile } from "../src/components/Profile";
import {
  EmptySearch,
  UserNotFound,
} from "./components/InfoScreen/screens";
import { bem } from "./utils/bem";
import { useCallback, useState } from "react";
import { GithubApi } from "./github/api";
import { Repositories } from "./components/Repositories";

const { bl, el } = bem("app");

function App() {
  const [githubApi] = useState(() => new GithubApi());
  const [{ isLoading, isFetched, isFound, profile, repositories }, setData] =
    useState({
      isLoading: false,
      isFetched: false,
      isFound: false,
      profile: null,
      repositories: null,
    });

  const onSearch = useCallback(
    (nick) => {
      setData({
        isLoading: true,
        isFetched: false,
        isFound: false,
        profile: null,
        repositories: null,
      });

      Promise.all([
        githubApi.getUser(nick),
        githubApi.getUserRepositories(nick),
      ]).then(
        ([profile, repositories]) => {
          setData({
            isLoading: false,
            isFetched: true,
            isFound: true,
            profile,
            repositories,
          });
        },
        (error) => {
          setData({
            isLoading: false,
            isFetched: true,
            isFound: false,
            profile: null,
            repositories: null,
          });
        }
      );
    },
    [githubApi]
  );

  return (
    <div className={bl()}>
      <Header className={el("header")} onSearch={onSearch} />
      {/* <Pager currentPage={6} totalPages={10} /> */}
      {profile && (
        <div className={el("content")}>
          <Profile
            className={el("profile")}
            name={profile.name}
            nick={profile.login}
            githubUrl={profile.html_url}
            avatarUrl={profile.avatar_url}
            followersCount={profile.followers}
            followingCount={profile.following}
          />
          <Repositories
            className={el("repositories")}
            userName={profile.login}
            totalRepositories={profile.public_repos}
            repositories={repositories}
          />
        </div>
      )}

      {isLoading ? (
        <div className={el("loader")}>Loading...</div>
      ) : !isFetched ? (
        <EmptySearch className={el("content")} />
      ) : !isFound ? (
        <UserNotFound className={el("content")} />
      ) : null}
    </div>
  );
}

export default App;
