import { CommerceList } from "../../components/Commerce/ships";

export default function CommerceShips() {
    return (
        <>
            <div className="product-header">
                    <h1>Kereskedelmi járművek</h1>
                    <p>Megbízható és hatékony szállítási megoldások az űrben</p>
            </div>
            <div className="container">
                <ul className="products-grid">
                    {CommerceList.map((ship, index) => (
                        <a className="product-item" >
                            <li key={index} className="product-info">
                                <h3>{ship.Title}</h3>
                                <p>{ship.Description}</p>
                                <ul className="product-specs">
                                    {Object.entries(ship.Specs).map(([key, value]) => (
                                        <li key={key}><strong>{key}:</strong> {value}</li>
                                    ))}
                                </ul>
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </>
    );
}