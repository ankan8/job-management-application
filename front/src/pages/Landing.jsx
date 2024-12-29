import React from 'react'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'

import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { Logo } from '../components'
const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo/>

        </nav>
        <div className="container page">
            <h1>Job <span>Tracking</span> App</h1>
            <p>A Job Tracing App is a platform designed to manage and monitor job-related tasks efficiently. It helps users track job postings, applications, interviews, and hiring processes in one place. The app can also include features like reminders, job status updates, analytics for tracking success rates, and collaboration tools for team-based hiring. Its primary purpose is to simplify the job management process, increase productivity, and provide a centralized hub for job-related activities.</p>
            <Link to ="/register" className='btn register-link'>Register</Link>
            <Link to ="/login" className='btn '>Login / Demo User</Link>


        </div>
        
    </Wrapper>
  )
}


    

export default Landing