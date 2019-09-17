import React from "react";

import Button from "../atoms/button";

type HomePageProps = {
  title: String;
  description: String;
};

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <Button> Submit </Button>
    <p>
      This website allows you to create tasks and keep track of your to-do list
      :) :)
    </p>
  </div>
);

export default HomePage;
