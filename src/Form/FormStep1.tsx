import { TextField } from "@mui/material";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

const FormStep1: FC = () => {
    const {register, formState: {errors}} = useFormContext()

    return (
        <div>
            <TextField
                required
                sx={{
                    display: 'block',
                    mb: 2
                }}
                type="text" 
                label="Name"
                {...register('name', {
                    required: 'Required'
                })}
                error={errors.name ? true : false}
                helperText={errors.name?.message as string || ''}
            /> 

            <TextField
                required
                sx={{
                    display: 'block',
                    mb: 2
                }}
                type="text" 
                label="Surname"
                {...register('surname', {
                    required: 'Required'
                })}
                error={errors.surname ? true : false}
                helperText={errors.surname?.message as string || ''}
            />  

            <TextField
                required
                sx={{
                    display: 'block',
                    mb: 2
                }}
                type="email" 
                label="Email"
                {...register('email', {
                    required: 'Required',
                    pattern: {
                        value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
                        message: 'Invalid email'
                    }
                })}
                error={errors.email ? true : false}
                helperText={errors.email?.message as string || ''}
            />
        </div>
    )
} 

export default FormStep1