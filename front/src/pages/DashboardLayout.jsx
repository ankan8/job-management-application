import React, { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, SmallSidebar } from '../components'
import Navbar from '../components/Navbar'
import { redirect, useLoaderData ,useNavigate} from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { checkDefaultTheme } from '../App'
import { toast } from 'react-toastify'

export const loader = async () => {
  try {
    const { data } = await customFetch('/users/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
};
const DashboardContext= createContext();

const DashboardLayout = ({queryClient}) => {

  const {user} = useLoaderData()
  const navigate = useNavigate()
  const[showSidebar,setShowSidebar]= useState(false)
  const[isDarkTheme,setIsDarkTheme]=useState(checkDefaultTheme)
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };
  const toggleSidebar=()=>{
    setShowSidebar(!showSidebar);
  }
  const logoutUser = async () => {
    navigate('/')
    await customFetch.get('/auth/logout')
    toast.success('Logging out...')
    
  }
  return (
    <DashboardContext.Provider value={{user,showSidebar,isDarkTheme,toggleDarkTheme,toggleSidebar,logoutUser}}>
    <Wrapper>
      <main className='dashboard'>
      <SmallSidebar/>
      <BigSidebar/>
      <div>
        <Navbar/>
        <div className='dashboard-page'>
          <Outlet context={{user}}/>
        </div>
      </div>
      </main>
      
    </Wrapper>
    </DashboardContext.Provider>
  )
}
export const useDashboardContext =()=> useContext(DashboardContext);

export default DashboardLayout