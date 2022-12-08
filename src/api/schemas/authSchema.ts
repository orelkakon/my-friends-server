import * as yup from 'yup';

export const signInSchema = yup.object({
    body: yup.object({
        user: yup.string().required(),
        password: yup.string().required()
    })
});

export const signUpSchema = yup.object({
    body: yup.object({
        user: yup.string().required(),
        password: yup.string().required()
    })
});