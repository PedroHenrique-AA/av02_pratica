import { jogoRepository } from "../repositories/jogo.repository.js";

class JogoService{
    async getAll(){
        const jogos = jogoRepository.getAll();
        return jogos;
    }
    async getById(id){
        const jogoId = jogoRepository.getById(id);
        return jogoId;
    }
    async create(dados){
        const jogoCriado = jogoRepository.create(dados);
        return jogoCriado;
    }
    async delete(id){
        const jogoDeletado = jogoRepository.delete(id);
        return jogoDeletado;
    }
    async knexPatch(id,dados){
        const jogoAtualizado = jogoRepository.knexPatch(id,dados);
        return jogoAtualizado;
    }
}
export const jogoService = new JogoService();