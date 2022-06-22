import React from 'react';
import CoursesList from './CoursesList';
import './App.scss';
import Layout from './components/Layout'
import Home from './components/Home'
import Contact from './components/Contact/index'
import About from './components/about/index'
import {Routes,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'

const courses = [
  {
    id: 1,
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    author: "Maximilian Schwarzmülller",
    hours_video: 40.5,
    number_of_lectures: 490,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/react-complete-guide/"
  },
  {
    id: 2,
    title: "Modern React with Redux",
    author: "Stephen Grider",
    hours_video: 47.5,
    number_of_lectures: 488,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/modern-react-with-redux/"
  },
  {
    id: 3,
    title: "The Complete React Developer Course (w/ Hooks and Redux)",
    author: "Andrew Mead",
    hours_video: 39,
    number_of_lectures: 200,
    rating: 4.7,
    url: "http://codingthesmartway.net/courses/complete-react-web-app-developer/"
  }
];

function App() {
  return (
   <>
   <Routes>
    <Route path = "/" element ={<Layout />}>
    <Route index element = {<Home />} />
    <Route path ="/contact" element = {<Contact/>}>
    </Route>
     <Route path ="/about" element = {<About/>}>
    </Route>
    </Route>

   </Routes>
   
   </>
  );
}

export default App;