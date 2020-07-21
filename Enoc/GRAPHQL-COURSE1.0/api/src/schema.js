const { gql } = require('apollo-server')

const typeDefs = gql`

    enum Animal {
      Dog
      Cat
    }

    type User {
      id: ID!
      username: String!
      pets: [Pet]!
    }

    type Pet {
      id:ID!
      createdAt: String!
      name: String!
      type: Animal!
      owner: User!
    }

    input PetInput {
      type: Animal
      name: String
    }

    input NewPetInput {
      name: String!
      type: Animal!
    }

    type Query {
      user: User!
      pets(input: PetInput): [Pet]!
      pet(id: ID!): Pet!
    }

    type Mutation {
      addPet(input: NewPetInput!): Pet!
    }
`;

module.exports = typeDefs