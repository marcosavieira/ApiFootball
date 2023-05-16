import style from "./style.module.css";
import { useForm } from "react-hook-form";
import { getStatus } from "../../services/getStatus";

export const SignIn = () => {
 const { register, handleSubmit } = useForm();
 const onSubmit = async (data) => {
  getStatus(data);
 };

 return (
  <div className={style.container}>
   <div className={style.sidebarBackground} />
   <div className={style.loginFormContainer}>
    <h1>Meu Time</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
     <label htmlFor="apiKey">Autenticação</label>
     <input
      name="apiKey"
      placeholder="Api key"
      {...register("apiKey", { required: true })}
     />
     <button className={style.loginFormContainerButton} type="submit">
      Login
     </button>
     <p>
      Não tem cadastro?
      <a href="https://dashboard.api-football.com/register">Clique Aqui </a>
     </p>
    </form>
   </div>
  </div>
 );
};
