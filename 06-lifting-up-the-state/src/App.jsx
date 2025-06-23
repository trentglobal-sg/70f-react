import RegisterForm from "./RegisterForm";
import SignupConfirmation from "./SignupConfirmation";
import { useState } from "react"

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  return (<>
    <h1>Sign Up Form</h1>
    <RegisterForm 
      setEmail={setEmail}
      setPassword={setPassword}
      email={email}
      password={password}
    />
    <SignupConfirmation
      email={email}
      password={password}
    />
  </>)
}