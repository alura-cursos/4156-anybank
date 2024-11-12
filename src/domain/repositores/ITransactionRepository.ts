import { ITransaction } from "../entities/ITransaction"

export interface ITransactionRepository {
    create(value: number, typeId: number, userId: string): Promise<ITransaction>
    listAll(): Promise<ITransaction[]>
}