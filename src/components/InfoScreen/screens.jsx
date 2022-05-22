import React from "react";
import { InfoScreen } from "./index";
import searchIcon from "./images/search.png";
import userIcon from "./images/user.png";
import repositoryIcon from "./images/repository.png";

export const EmptySearch = ({ className }) => {
  return (
    <InfoScreen
      className={className}
      icon={<img src={searchIcon} width={64} height={64} alt="" />}
      text={
        <>
          Start with searching
          <br />a GitHub user
        </>
      }
    />
  );
};

export const UserNotFound = ({ className }) => {
  return (
    <InfoScreen
      className={className}
      icon={<img src={userIcon} width={65} height={75} alt="" />}
      text="User not found"
    />
  );
};

export const NoRepository = ({ className }) => {
  return (
    <InfoScreen
      className={className}
      icon={<img src={repositoryIcon} width={76} height={62} alt="" />}
      text="User not Repository list is empty"
    />
  );
};
