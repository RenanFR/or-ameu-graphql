const { SQLDataSource } = require('datasource-sql')

class BudgetAPI extends SQLDataSource {

  constructor(dbConfig) {
    super(dbConfig)
    this.Resposta = {
      mensagem: ""
    }
  }

  async getAllExpensesFromCurrentMonth() {
    const month = new Date().getMonth()
    const expenses = await this.db
      .join('mes_orcamento', 'mes_orcamento.id', 'movimentacoes_mes.mes_id')
      .select('*')
      .from('movimentacoes_mes')
      .where({ num_mes: 2 })

    console.log(expenses)
    return expenses.map(async exp => ({
      description: exp.descricao,
      value: exp.valor,
      date: exp.data_mov
    }))
  }

}

module.exports = BudgetAPI