export function Cart() {
  return (
    <div className="w-full max-w-7x1 mx-auto">
      <h1 className="font-medium text-2x1 text-center my-4">
        Carrinho de compras
      </h1>
      <section className="flex items-center justify-between border-b-2">
        <img
          src="public/gamer-teclado.jpg"
          alt="Logo produto"
          className="w-28"
        />

        <strong>Preço: R$ 1.000</strong>
        <div className="flex items-center justify-center gap-3">
          <button className="bg-slate-600 px-4 rounded text-white font-medium flex items-center justify-center">
            -
          </button>
          2
          <button className="bg-slate-600 px-4 rounded text-white font-medium flex items-center justify-center">
            +
          </button>
        </div>

        <strong className="float-right">subTotal: R$1.000</strong>
      </section>
      <p className="font-bold mt-4">Total: R$1.000</p>
    </div>
  );
}
