import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Animals from "../public/animals.json"
import images from "animal-filter/animalpics"


export default function Home() {
  
  const animalMaker = p => <Animal type = {p.type} state = {p.state} img = {p.img} adoption_fee = {p.adoption_fee}/>
  const names = Animals.map(animalMaker)
  
  const popularAnimalsOnly = p => p.state == "chill"
  const popularAnimals = Animals.filter(popularAnimalsOnly)
  const sum = (x,y) => x+y.adoption_fee
  const statePrice = popularAnimals.reduce(sum,0)

  const unpopularAnimalsOnly = p => p.state == "sad"
  const unpopularAnimals = Animals.filter(unpopularAnimalsOnly)
  const subtract = (x,y) => x-y.adoption_cost
  const statePrice = unpopularAnimals.reduce(subract, 0)

  return(
  
  <div>
    <h1>Adopt Most Popular Animals In The Store</h1>
        <p class ="text-left text-xl">I filtered out the unpopular animals using their emotional state.</p>
   <div class = "text-left">
        {popularAnimalsFormat}
      </div>
      <div>
        <h1 class ="text-right font-bold p-4">Cost for most popular animals: {statePrice}</h1>
      </div>
      <div>
                <div><strong>Which Animal:</strong> {props.type}</div>
                <div><strong>Popularity: </strong>{props.popularAnimalsOnly}</div>    
                <div><strong>Adoption Cost: </strong>{props.adoption_fee}</div>
            </div>
    <div class="text-left font-bold p-4">
      <h1> Cost for most unpopular animals: </h1>
      <p>sad animals need love too!</p>
             <div><strong>Which Animal:</strong> {props.type}</div>
             <div><strong>Popularity: </strong> {props.unpopularAnimalsOnly}</div>
             <div><strong>Adoption Cost: </strong> {props.adoption_cost}</div>
    </div>
  </div>
  )

}
