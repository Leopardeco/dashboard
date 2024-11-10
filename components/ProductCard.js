    //components/ProductCard.js
 export default function ProductCard({product,onEdit,onDelete}) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>Preço: R$ {product.price}</p>
            <p>Status: {product.available ? "Disponível": "Indisponível"}</p>
            <div className="flex justify-between mt-4">
                <button className="text-blues-500" onClick={() => onEdit(product)}>Editar</button>
                <button className="text-red-500" onClick={() => onDelete(product.id)}>Excluir</button>
            </div>
        </div>
    );
 }