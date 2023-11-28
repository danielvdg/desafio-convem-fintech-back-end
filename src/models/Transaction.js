class Transaction {
    constructor(idempotencyId, amount, type){
        this.idempotencyId = idempotencyId,
        this.amount = amount,
        this.type = type
    }
}

export default new Transaction();