
// Is known as a CONTROLLED COMPONENT
// Because it doesn't have its own state or functions
// All its values and event handling done by props sent
// from the parent
export default function RegisterForm(props) {

    return (<>
        <div>
            <label>Email</label>
            <input type="text"
                value={props.email}
                onChange={(e) => {
                    props.setEmail(e.target.value);
                }}
            />
        </div>
        <div>
            <label>Password</label>
            <input type="text" 
                   value={props.password}
                   onChange={e => props.setPassword(e.target.value) }
            />
        </div>
        <button>Sign Up</button>

    </>)
}