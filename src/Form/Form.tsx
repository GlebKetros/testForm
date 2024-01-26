import { Button, CircularProgress } from "@mui/material";
import { FC, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";

type formData = {
    name: string,
    surname: string,
    email: string,
    socials: {
        vk: string,
        telegram: string,
        skype: string
    }
}

const Form: FC = () => {
    const [step, setStep] = useState<1 | 2>(1)

    const methods = useForm<formData>({mode: "onBlur"})
    const {
        handleSubmit,
        trigger, 
        formState: {isSubmitting}
    } = methods

    const onSubmit: SubmitHandler<formData> = async (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(console.log(data));
            }, 1000);
        });
    }

    return (
        <> 
            {isSubmitting && <CircularProgress />}       
            <FormProvider {...methods} >
                <form onSubmit={handleSubmit(onSubmit)} noValidate >
                    {step == 1 && <FormStep1/>}
                    {step == 2 && <FormStep2/>}
                    
                    {step == 1 
                        ? <Button 
                            variant="contained" 
                            onClick={async() => {
                                const isValid = await trigger(['name', 'surname' ,'email'])
                                if (isValid) setStep(2)
                            }}>Next</Button> 
                        : <Button variant="contained" onClick={() => {setStep(1)}}>Prev</Button>}
                    {step == 2 && <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant="contained"
                        sx={{
                            ml: 2
                        }}
                    >Submit</Button>}
                </form>    
            </FormProvider>
        </>

    )
}

export default Form