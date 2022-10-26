import Yup from './yupMethod'

export const loginSchema = Yup.object().shape({
    emailId: Yup.string().email().required(),
    password: Yup.string().password().required()
})
  

