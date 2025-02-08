export const App = () => {
  return (
    <section className="w-screen h-screen flex justify-center flex-col gap-5 items-center p-4 ">
      <div className="flex justify-center flex-col gap-2">
        <label htmlFor="user" className="font-medium text-lg">
          Usuário
        </label>
        <input
          type="text"
          id="user"
          className="w-2xl h-10 bg-amber-50 border-2 border-amber-900 
            rounded-sm pl-4 focus:drop-shadow-lg focus:shadow-black outline-none"
        />
      </div>

      <div className="flex justify-center flex-col gap-2">
        <label htmlFor="email" className="font-medium text-lg">
          Email
        </label>
        <input
          type="text"
          id="email"
          className="w-2xl h-10 bg-amber-50 border-2 border-amber-900 
            rounded-sm pl-4 focus:drop-shadow-lg focus:shadow-black outline-none"
        />
      </div>
      <button
        className="px-6 py-3 bg-amber-600 text-white rounded-lg shadow-lg 
              shadow-black/50 transition-transform transform hover:scale-105 
              hover:bg-amber-700 active:scale-95"
      >
        Clique Aqui
      </button>
    </section>
  );
};
