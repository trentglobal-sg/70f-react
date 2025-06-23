export default function SignupConfirmation(props) {
    return <>
        <h1>Processing Sign Up</h1>
        <ul>
            <li>Your Email: {props.email}</li>
            <li>Your Password: {props.password}</li>
        </ul>
    </>
}