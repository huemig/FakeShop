import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

export const Form = () => {
  
    const schema = yup.object().shape({
        fullName:yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string()
        .oneOf([yup.ref('password', null)])
        .required(),
    });
    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log('Hello')
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='Full name' {...register("fullName")} />
            <input type='text' placeholder='Email' {...register('email')} />
            <input type='number' placeholder='Age' {...register('age')}/>
            <input type='password' placeholder='Password' {...register("password")}/>
            <input type='password' placeholder='Password'{...register("confirmPassword")} />
            <input type='submit'  />
            <p>{errors.fullName?.message}</p>
        </form>
    )
}