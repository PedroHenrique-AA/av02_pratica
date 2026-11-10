import { jogoService } from "../services/jogo.service.js";

class JogoController{
    async getAll(_req,res){
        try {
            const jogos = await jogoService.getAll();
            return res.status(200).json(jogos);
        } catch (error) {
            return res.status(404).json(error)
        }
    }
    async getById(req,res){
        const idDoJogo = req.params.id;
        try {
            const jogoId = await jogoService.getById(idDoJogo);
            return res.status(200).json(jogoId);
        } catch (error) {
            return res.status(404).json(error)
        }
    }
    async create(req,res){
        try {
            const jogoCriado = await jogoService.create(req.body);
            return res.status(201).json(jogoCriado);
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async delete(req,res){
        const idDoJogo = req.params.id;
        try {
            const jogoDeletado = await jogoService.delete(idDoJogo);
            return res.status(204).json(jogoDeletado);
        } catch (error) {
            return res.status(404).json(error)
        }
    }
    async knexPatch(req,res){
        const idDoJogo = req.params.id;
        try {
            const jogoAtualizado = await jogoService.knexPatch(idDoJogo, req.body);
            return res.status(200).json(jogoAtualizado);
        } catch (error) {
            return res.status(404).json(error)
        }
    }
}
export const jogoController = new JogoController();