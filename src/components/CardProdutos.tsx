
export interface CardProductProps {
  titulo: string;
  preco: number;
  plataforma: string;
  categoria: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CardProduct({titulo, preco, plataforma, categoria }: CardProductProps) {
  return (
    <div className="flex">
      <div>
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.3107 12.6666C29.2582 10.8094 29.0826 9.62506 28.4876 8.61498C27.6404 7.17706 26.1161 6.37665 23.0688 4.77865L20.2355 3.29115C17.7478 1.9864 16.504 1.33331 15.1667 1.33331C13.8293 1.33331 12.5855 1.98498 10.0978 3.29115L7.2645 4.77865C4.21725 6.37665 2.69292 7.17706 1.84575 8.61498C1 10.0515 1 11.8407 1 15.4178V15.5836C1 19.1592 1 20.9485 1.84575 22.385C2.69292 23.8229 4.21725 24.6233 7.2645 26.2227L10.0978 27.7088C12.5855 29.0136 13.8293 29.6666 15.1667 29.6666C16.504 29.6666 17.7478 29.015 20.2355 27.7088L23.0688 26.2213C26.1161 24.6219 27.6404 23.8229 28.4876 22.385C29.0826 21.3749 29.2582 20.1906 29.3107 18.3333M27.9167 9.12498L22.25 11.9583M22.25 11.9583L21.5417 12.3125L15.1667 15.5M22.25 11.9583V16.9166M22.25 11.9583L8.79167 4.87498M15.1667 15.5L2.41667 9.12498M15.1667 15.5V28.9583"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div>
        <div className="flex gap-3">
          <div>
            <h3 className="text-gray-600 text-sm">Titulo</h3>
            <p className="text-gray-950 text-base">{titulo}</p>
          </div>
          <div>
            <h3 className="text-gray-600 text-sm">Preço</h3>
            <p className="text-gray-950 text-base">R$ {preco}</p>
          </div>
          <div>
            <h3 className="text-gray-600 text-sm">Plataforma</h3>
            <p className="text-gray-950 text-base">{plataforma}</p>
          </div>
          <div>
            <h3 className="text-gray-600 text-sm">Categoria</h3>
            <p className="text-gray-950 text-base">{categoria}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
