const ItemCard = ({ item }) => {
    return (
        <div className="item-card">
            <h3>{item.Title}</h3>
            <p>{item.description}</p>
            <p>'${item.Price}'</p>
        </div>
    )
}

export default ItemCard