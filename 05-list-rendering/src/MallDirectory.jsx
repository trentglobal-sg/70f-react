export default function MallDirectory() {

    const shops = [
        "Supermarket",
        "Sushiro",
        "Uniqlo",
        "Jollibeans",
        "Popular",
        "Sushi Express"
    ];

    const promotions = [
        "Free parking duirng lunch hours",
        "Free parking during weekends",
        "CapitalMall Coupons 10% more points"
    ]

    const events = [
        {
            "name":"BTS Live Performance Free",
            "date":"31st June 2025"
        },
        {
            "name":"Great Singapore Sales",
            "date":"1st July 2025"
        },
        {
            "name":"Luck Draw",
            "date":"14th July 2025"
        }
    ]

    // JSX are JavaScript Objects
    // JavaScript objects can be stored in variables
    // Therefore, JSX can be stored in variables (if a -> b, if b -> c, therefore a -> c)
    // Can objects be stored in an array ==> YES, means JSX can be stored in an array
    const renderShops = () => {
        const shopJSX = [];
        for (let s of shops) {
            shopJSX.push(<li key={s} className="list-group-item">{s}</li>)
        }
        return shopJSX;
    }

    return (<>
        <div className="container">
            <h1>Mall Directory</h1>
            <ul className="list-group">
                {renderShops()}
            </ul>

            <h2>Promotions</h2> 
            <ul className="list-group">
            {
                promotions.map( e => <li className="list-group-item" key={e}>{e}</li>)
            }
            </ul>

            <h2>Events</h2>
            <ul className="list-group">
                {
                    events.map(e => (
                        <li className="list-group-item">
                          <h2>{e.name}</h2>
                          <p>{e.date}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    </>)
}