import React from "react";
import { Layout, NewQuest } from "../components";

const UserPage = (cardData) => {
  console.log(cardData);
  return (
    <>
      <Layout />
      <NewQuest />
    </>
  );
};

export default UserPage;
