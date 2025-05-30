/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState  } from "react"
import GameService from "../service/GameService";
import Banner from "../components/Banner";
import type { CardProductProps } from "../components/CardProdutos";
import CardProduct from "../components/CardProdutos";


export default function Home() {

    const [list, setList] = useState<CardProductProps[]>([]);

    async function init() {
        const produtos = await GameService.getAllProdutos();
        setList(produtos);


    }

    useEffect(() => {
        init();
    }, [])

    return (




        <div className="w-full h-screen pt-13">

             <Banner/>
            {
                list.map((item, index) => {
                    return (
                        <CardProduct titulo={item.titulo} preco={item.preco} plataforma={item.plataforma} categoria={item.categoria} />
                    )
                }
                )
            }
           
        </div>




    )
}
