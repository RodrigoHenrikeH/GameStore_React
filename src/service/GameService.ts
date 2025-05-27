import api from "./Api";

export default {
    async getAllProdutos(){
        const response = await api.get(`/produtos`)

        console.log("getAllProdutos", response);
        
        return response.data;
    },

    async getProduto(id: string){
        const response = await api.get(`/produtos/${id}`)
        return response.data;
    }
}