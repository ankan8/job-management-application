import React from 'react'
import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { toast } from 'react-toastify';
import { FormRow, Logo } from '../components'
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful!')
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Register = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
        <Form  method='post'  className='form'>
            <Logo/>
            <h4>Register</h4>
            <FormRow type="text" name="name" ></FormRow>
            <FormRow type="text" name="lastName" labelText="last name" ></FormRow>
            <FormRow type="text" name="location" defaultValue="earth"></FormRow>
            <FormRow type="email" name="email" ></FormRow>
            <FormRow type="password" name="password" ></FormRow>


            <button type='submit' className='btn btn-block' disabled={isSubmitting}>{isSubmitting?'submitting...':'submit'}</button>
            <p>
                Already a member?
                <Link to='/login'>Login</Link>
            </p>


        </Form>
    </Wrapper>
  )
}

export default Register