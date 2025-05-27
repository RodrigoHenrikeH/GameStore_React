
import { useEffect, useState  } from "react"
import GameService from "../service/GameService";

interface Produto {
    id: number;
    titulo: string;
    plataforma: string;
    preco: number;
}

export default function Home() {

    const [list, setList] = useState<Produto[]>([]);

    async function init() {
        const produtos = await GameService.getAllProdutos();
        setList(produtos);


    }

    useEffect(() => {
        init();
    }, [])

    return (




        <div className="w-full h-screen pt-13">
            {
                list.map((item) => {
                    return (
                        <div key={item.id}>{item.titulo}</div>
                    )
                }
                )
            }
        </div>




    )
}
