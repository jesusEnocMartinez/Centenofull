module.exports = {
    Query: {
      pets(_, { input }, { models }) {
        return models.Pet.findMany(input)
      },
      pet(_, { id },  { models }) {
        return models.Pet.findOne({ id })
      },
      user(_, __, { models }) {
        return models.User.findOne()
      }
    },
    Mutation: {
      addPet(_, { input }, { models }) {
        const pet = models.Pet.create({...input})
        return pet
      }
    },
    Pet: {
      owner(pet, _, { models, user }) {
        return models.User.findOne( { id: pet.owner })
      }
    },
    User: {
        pets(user, _, { models }) {
          return models.Pet.findMany({ user: user.id })
        }
    }
}