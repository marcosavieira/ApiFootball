import style from "./style.module.css";
import { useForm } from "react-hook-form";
import { API } from "../../services/api";

export const SignIn = () => {
 const { register, handleSubmit } = useForm();
 const onSubmit = async (data) => {
  try {
   const response = await API.get("/status", {
    headers: {
     "x-rapidapi-key": `${data.apiKey}`,
     "x-rapidapi-host": "v3.football.api-sports.io",
    },
   });

   return response.data;
  } catch (error) {
   console.error(error);
  }
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
