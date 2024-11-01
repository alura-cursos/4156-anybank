import { FormLogin } from "./components/FormLogin"

const Login = () => {

  return (
    <>
      <FormLogin onLogin={() => console.log('login')} />
    </>
  )
}

export default Login
