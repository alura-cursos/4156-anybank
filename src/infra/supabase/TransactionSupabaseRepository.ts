import { ITransaction } from "../../domain/entities/ITransaction";
import { ITransactionRepository } from "../../domain/repositores/ITransactionRepository";
import { supabase } from "./config";

export class TransactionSupabaseRepository implements ITransactionRepository {

    async listAll(): Promise<ITransaction[]> {

        const { data, error } = await supabase
            .from('transaction')
            .select(`
                *,
                transaction_type (id, display)
            `)

        if (error) {
            throw error;
        }

        if (!data) {
            return []
        }

        const result: ITransaction[] = data.map(row => {
            if (!row.transaction_type) {
                throw Error('Transação sem tipo encontrada!')
            }
            return {
                date: new Date(row.created_at),
                value: row.value,
                type: row.transaction_type,
                id: row.id
            }
        })

        return result

    }

    async create(value: number, typeId: number, userId: string) : Promise<ITransaction> {

        const { error, data } = await supabase
            .from('transaction')
            .insert([
                {
                    transaction_type_id: typeId,
                    value,
                    user_id: userId
                },
            ])
            .select(`
                *,
                transaction_type (id, display)
            `)

        if (error) {
            throw error;
        }

        if (!data || data.length == 0) {
            throw new Error('Falha ao obter transação cadastrada!');
        }

        if (!data[0].transaction_type) {
            throw new Error('Falha ao obter o tipo transação cadastrada!');
        }

        return {
            date: new Date(data[0].created_at),
            value: data[0].value,
            type: data[0].transaction_type,
            id: data[0].id
        }


    }

}