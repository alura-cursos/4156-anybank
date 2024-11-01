
export interface ITransactionRepository {
    create(value: number, typeId: number, userId: string): Promise<void>
}