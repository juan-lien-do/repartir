const ListadoPagos = ({arrayPagos}) => {
    return (
        <div>
            {
                arrayPagos.map( (pago) =>
                    <div className="card py-2 px-3 my-3 stack-shadow-gray" key={pago.id}>
                        <p>{pago.origen} debe pagar ${Math.round(pago.monto)} a {pago.destino}</p>
                    </div>
                )
            }
        </div>
    );
}

export default ListadoPagos;
