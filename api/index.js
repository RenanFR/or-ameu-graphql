const { ApolloServer } = require('apollo-server')
const { mergeTypeDefs } = require('graphql-tools')

const { budgetSchema, budgetResolvers, BudgetAPI } = require('./budget')

const typeDefs = mergeTypeDefs([budgetSchema])
const resolvers = [budgetResolvers]

const dbConfig = {
  client: 'pg',
  connection: {
    database: 'quarkus',
    user:     'postgres',
    password: 'postgres'
  },
  useNullAsDefault: true
}

const server = new ApolloServer( { 
  typeDefs, 
  resolvers,
  dataSources: () => {
    return {
      budgetAPI: new BudgetAPI(dbConfig)
    } 
  }
} )

server.listen().then(({url}) => {
  console.log(`Executando servidor graphql em ${url}`)
})