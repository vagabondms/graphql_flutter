import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const query = `
  query GetDie ($sides : Int!){
    getDie(numSides: $sides) {
      rollOnce
      roll(numRolls: $sides)
    }
  }
`;

const Home = () => {
  useEffect(() => {
    axios
      .post("/api/graphql", {
        query,
        variables: {
          sides: 3,
        },
      })
      .then((res) => console.log(res.data));
  }, []);

  return <div>Home</div>;
};

export default Home;
