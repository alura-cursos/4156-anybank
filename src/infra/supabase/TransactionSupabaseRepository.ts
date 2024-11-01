import { ITransactionRepository } from "../../domain/repositores/ITransactionRepository";
import { supabase } from "./config";

export class TransactionSupabaseRepository implements ITransactionRepository {
    async create(value: number, typeId: number, userId: string) {

        const { error } = await supabase
            .from('transaction')
            .insert([
                { 
                    transaction_type_id: typeId,
                    value,
                    user_id: userId
                },
            ])
            .select()

        if (error) {
            throw error;
        }

    }

}