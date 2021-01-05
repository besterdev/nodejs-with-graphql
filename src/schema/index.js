import { gql } from 'apollo-server-express'

// Fake data
const users = [
    {
        id: "1",
        name: 'Somchai'
    },
    {
        id: "2",
        name: 'Jirayut'
    },
    {
        id: "3",
        name: 'Thawatchai'
    }
]

const me = users[0]

export const resolvers = {
    Query: {
        me: (parent, args, context, info) => me,
        user: (parent, args, context, info) => {
            const id = args.id
            const user = users.find(u => u.id === id)

            return user
        },
        users: (parent, args, context, info) => users
    }
}

export const typeDefs = gql`
type Query {
    me: User!
    user(id: ID!): User!
    users: [User]!
}

type User {
    id: ID!
    name: String!
} 
`