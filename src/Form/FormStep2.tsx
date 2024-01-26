import { TextField } from "@mui/material";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

const FormStep2: FC = () => {
    const {register} = useFormContext()

    return (
        <div>
            <TextField
                sx={{
                    display: 'block',
                    mb: 2
                }}
                type="text" 
                label="VK"
                {...register('socials.vk')}
            /> 

            <TextField
                sx={{
                    display: 'block',
                    mb: 2
                }}
                type="text" 
                label="Telegram"
                {...register('socials.telegram')}
            /> 

            <TextField
                sx={{
                    display: 'block',
                    mb: 2
                }}
                type="text" 
                label="Skype"
                {...register('socials.skype')}
            />
        </div>
    )
}

export default FormStep2