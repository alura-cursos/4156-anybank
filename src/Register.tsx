import { FormRegister } from "./components/FormRegister"

const Register = () => {

    return (
      <>
        <FormRegister onRegister={() => console.log('register')}/>
      </>
    )
  }
  
  export default Register
  