
import  useGlobalContext from '../context'
import {BsHandThumbsUp} from 'react-icons/bs'
// import { AppProvider } from '../context'

const Meals = () => {
   // const context = useGlobalContext()
   const {meals , loading} = useGlobalContext()
   
   if(loading) {
      return (
         <section className='section'>
            <h4>Loading...</h4>
         </section>
      )
   }
   
   if(meals.length < 1) {
      return (
         <section className='section'>
            <h4>No meals matched your search term. Please try again.</h4>
         </section>
      )
   }
   return (
      <section className='section-center'>
         {
            meals.map(singleMeal => {
               
               const {idMeal , strMeal:title , strMealThumb:image} = singleMeal
               return <article key={idMeal} className='single-meal'>
                  
                  <img src={image} className="img" />
                  <footer>
                     <h5>{title}</h5>
                     <span className="like-btn" ><BsHandThumbsUp /></span>
                  </footer>
               </article>
            })
         }
      </section>
   )
}
export default Meals