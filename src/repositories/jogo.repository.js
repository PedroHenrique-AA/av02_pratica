import { knex } from "../database/knex.js";

class JogoRepository{
    async getAll(){
        const jogos = await knex('jogos').select("*").returning("*");
        return jogos;
    }
    async getById(id){
        const jogoId = await knex('jogos').where({id}).select("*").returning("*");
        return jogoId;
    }
    async create(dados){
        const jogoCriado = await knex('jogos').insert(dados).returning("*");
        return jogoCriado;
    }
    async delete(id){
        const jogoDeletado = await knex('jogos').where({id}).del().returning("*");
        return jogoDeletado;
    }
    async knexPatch(id,dados){
        const jogoAtualizado = await knex('jogos').where({id}).update(dados).returning("*");
        return jogoAtualizado;
    }
}
export const jogoRepository = new JogoRepository();