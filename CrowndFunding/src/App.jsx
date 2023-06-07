import { useState } from 'react'
import './App.css'
import DataContext from './Data/DataContext'
import HeaderComponent from './component/HeaderComponent'
import MainComponent from './component/MainComponent'
import MordalComponent from './component/MordalComponent'
import CompleteComponent from './component/CompleteComponent'



function App() {

  const person=[
    { topicname:"Bamboo Stand", 
      pledge:"Pledge $25 or more", 
      paragraph:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      count:101,
      topic:false,     
      index:0
    },
    {
      topicname:"Black Edition Stand", 
      pledge:"Pledge $75 or more", 
      paragraph:"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      count:64,
      topic:false,
      index:1
    },
    {
      topicname:"Mahogany Special Edition", 
      pledge:"Pledge $200 or more", 
      paragraph:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      count:0,
      topic:false,
      index:2
    },
    {
      topicname:"Pledge with no reward",
      pledge:"",
      paragraph:"Choose to support us without a reward if you simply believe in our project. As a backer,       you will be signed up to receive product updates via email.",
      count:-1,
      topic:true,
      index:3
    }
  ]

  const [btnBackthisproject,setbtnBackthisproject] = useState(false)

  return (
    <DataContext.Provider value={
      [btnBackthisproject,setbtnBackthisproject,person]
    }>
     <HeaderComponent/>
     <MainComponent/>
     <MordalComponent/>
     <CompleteComponent/>
    </DataContext.Provider>
  )
}

export default App
