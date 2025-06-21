// the first parameter of any component function is the props (aka properties)
// props is an object with key/value pairs
export default function Alert(props) {
    console.log(props);
    return (
        <>
        <div style={{
            'padding':'10px',
            'margin':'10px',
            'border':'1px solid black'
        }}>
            <p style={{'color':props.color}}>
            {props.message}
            </p>
        </div>
        </>
    )
}