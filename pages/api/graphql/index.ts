import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";


const typeDefs = /* GraphQL */ `
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }
  type Query {
    getDie(numSides: Int): RandomDie
  }
`;

const schema = buildSchema(typeDefs);

const rootValue = {
  getDie: ({ numSides }: { numSides: number }) => {
    return new RandomDie(numSides || 6);
  },
};

const handler = graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
});

export default handler;

class RandomDie {
  private numSides: number;

  constructor(numSides: number) {
    this.numSides = numSides;
  }

  rollOnce() {
    return 1 + Math.floor(Math.random() * this.numSides);
  }

  roll({ numRolls }: { numRolls: number }) {
    var output = [];
    for (var i = 0; i < numRolls; i++) {
      output.push(this.rollOnce());
    }
    return output;
  }
}
