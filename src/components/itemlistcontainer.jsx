const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container text-center my-5">
      <h1 className="fw-bold">{greeting}</h1>
      <p className="text-muted">
        Descubrí nuestros productos seleccionados especialmente para vos.
      </p>
    </div>
  );
};

export default ItemListContainer;
