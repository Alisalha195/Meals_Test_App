/*
import React , { useContext} from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
   
   return ( 
      <AppContext.Provider value={{name:"ali"}}>
         {children}
      </AppContext.Provider>
   )
}

export {AppContext , AppProvider}
*/
// !..........Custom Context..............
// !-------------------------------------

import axios from 'axios'
import React , { useContext, useEffect, useState} from 'react'

const AppContext = React.createContext()

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a"

const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

const AppProvider = ({children}) => {
   
   const [loading , setLoading] = useState(false)
   const [meals , setMeals] = useState([])
   
   const fetchMeals = async (url) => {
      
      setLoading(true)
      try {
         const {data} = await axios (url)
         
         if(data.meals) {
            setMeals(data.meals)
         }else{
            setMeals([])
         }
      } catch(error) {
         console.log(error.response)
      }
      
      setLoading(false)
   }
   
   useEffect( () => {
      fetchMeals(allMealsUrl)
   } ,[])
   
   return ( 
      <AppContext.Provider value={{loading ,meals}}>
         {children}
      </AppContext.Provider>
   )
}

const useGlobalContext = () => {
   return useContext(AppContext)
}
export  default  useGlobalContext

export  {AppContext , AppProvider}