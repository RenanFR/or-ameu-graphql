const budgetResolvers = {
    Query: {
        getAllExpensesFromCurrentMonth: (parent, _, { dataSources }) => 
            dataSources
            .budgetAPI
            .getAllExpensesFromCurrentMonth(),
    }
}

module.exports = budgetResolvers