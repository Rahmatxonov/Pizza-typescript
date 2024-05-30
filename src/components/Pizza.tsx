import { useEffect, useState } from "react";

interface Pizza {
  id: number;
  imageUrl: string;
  title: string;
  types: string[];
  sizes: number[];
  price: number;
}

const Pizza = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/pizza")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data: Pizza[]) => setPizzas(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Все пиццы</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={pizza.imageUrl}
              alt={pizza.title}
              className="w-full object-cover mb-4 rounded-lg "
            />
            <h2 className="mb-2 text-center font-extrabold text-[20px] pt-[11px]">
              {pizza.title}
            </h2>
            <div className="flex flex-col mb-2 bg-[#F3F3F3] rounded-[10px]">
              <span className="flex items-center text-center mx-auto m-2 space-x-2">
                <button className="p-2 active:bg-white cursor-pointer rounded-[5px] font-bold text-[14px] leading-[17px] text-[#2C2C2C]  focus:bg-white">
                  Тонкое
                </button>
                /
                <button className="p-2 active:bg-white cursor-pointer rounded-[5px] font-bold text-[14px] leading-[17px] text-[#2C2C2C]  focus:bg-white">
                  Традиционное
                </button>
              </span>
              <div className="flex flex-col mb-4">
                <div className="flex mx-auto space-x-5">
                  {pizza.sizes.map((size, index) => (
                    <button
                      key={index}
                      className="font-bold text-[14px] leading-[17px] text-[#2C2C2C] py-2 px-4 rounded-[5px] active:bg-white transition-colors duration-200 focus:bg-white"
                    >
                      {size} см
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-[24px]">
              <p className="font-bold text-[22px] leading-[26px] text-black">
                от {pizza.price} ₽
              </p>
              <button className="dabavit font-bold text-[16px] leading-[19px] rounded-[30px] text-[#EB5A1E] transition-colors duration-200 hover:bg-[#FE5F1E] hover:text-white">
                + Добавить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizza;
