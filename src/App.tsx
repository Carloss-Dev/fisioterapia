import { LocalStorageDB } from "@utils/localStorageDB.utils";
import React, { type ChangeEvent } from "react";

interface IUser {
  user: string;
  email: string;
}

export const App = () => {
  const localDB = new LocalStorageDB<IUser>("database");
  const [data, setData] = React.useState({
    user: "",
    email: "",
  });

  function handleChange({ target }: ChangeEvent) {
    if (target instanceof HTMLInputElement) {
      const { id, value } = target;

      setData({
        ...data,
        [id]: value,
      });

      return;
    }

    throw new Error("Função utilizada em um componente diferente de Input");
  }

  function handleSubmit() {
    localDB.create(data);
  }

  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center gap-5 p-4">
      <div className="flex flex-col justify-center gap-2">
        <label htmlFor="user" className="text-lg font-medium">
          Usuário
        </label>
        <input
          type="text"
          id="user"
          onChange={handleChange}
          className="h-10 w-2xl rounded-sm border-2 border-amber-600 bg-amber-50 pl-4 outline-none focus:shadow-black focus:drop-shadow-lg"
        />
      </div>

      <div className="flex flex-col justify-center gap-2">
        <label htmlFor="email" className="text-lg font-medium">
          Email
        </label>
        <input
          type="text"
          id="email"
          onChange={handleChange}
          className="h-10 w-2xl rounded-sm border-2 border-amber-600 bg-amber-50 pl-4 outline-none focus:shadow-black focus:drop-shadow-lg"
        />
      </div>
      <div className="flex w-2xl justify-end gap-3">
        <button
          className="transform cursor-pointer rounded-lg bg-amber-600 px-6 py-3 text-white shadow-lg shadow-black/50 transition-transform hover:scale-105 hover:bg-amber-600/90 active:scale-95"
          onClick={handleSubmit}
        >
          Enviar
        </button>

        <button
          className="transform cursor-pointer rounded-lg bg-amber-600 px-6 py-3 text-white shadow-lg shadow-black/50 transition-transform hover:scale-105 hover:bg-amber-600/90 active:scale-95"
          onClick={() => localDB.remove(1)}
        >
          Excluir um item
        </button>
      </div>
    </section>
  );
};
