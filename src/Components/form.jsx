import './FormV.css'
import { useForm } from "react-hook-form";
import content from '../Static/Index';



import { yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(5),
    email: yup.string().required("Please enter email").email(),
});



export default function AppFm() {
    const { register, handleSubmit, errors }
     = useForm({
        resolver: yupResolver(schema),
    });

      const onSubmit = (data) => console.log(data);
      console.log(errors);

    return (
        <div className="App">
            <h1>React-hook-form</h1>
            <form onSubmit={handleSubmit(onSubmit)}> 
         {content.inputs.map((input, key) =>  {
             return (
                     <div key={key}>
                  <p>
                  <label>{input.label}</label>
                </p>
                <p>
                    <input 
                    name={input.name} 
                    className="input" 
                    type={input.type}
                    ref={register}
                    />
                </p>   
                <p className="messages">{errors[input.name]?.message}</p>
                </div>
             );
         })}
         <button className="btn" type="submit">
             submit
             </button>
        </form>
        </div>
    )
}

