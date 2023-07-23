import AuthLayout from "../../layouts/AuthLayout";
import { DarkMode } from "../../components/DarkMode/DarkMode";

export function Login() {


  return (
    <AuthLayout>
      <DarkMode/>
      <div className="text-center">Login</div>  
    </AuthLayout>
  )
}
  
 