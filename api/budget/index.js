const budgetSchema = require('./schema/budget.graphql')
const budgetResolvers = require('./resolvers/budgetResolvers')
const BudgetAPI = require('./datasource/budget')

module.exports = {
    budgetSchema,
    budgetResolvers,
    BudgetAPI
}