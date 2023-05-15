import React from 'react'
import "./home.scss"
import Feature from '../../components/featured/Feature'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import CatCard from "../../components/catcard/CatCard";
import ProCard from "../../components/proCard/proCard";
import {cards,projects} from "../../data.js"
import Features from '../../components/features/Features'


const Home = () => {
  return (
    <div className='home'>
      <Feature/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) =>(
          <CatCard item={card} key={card.id}/>
          ))
        }
      </Slide>
      <Features/>
      {/* <Explorer/> */}
      <Slide slidesToShow={4} arrowsScroll={4}>
      {projects.map((card) => (
          <ProCard key={card.id} card={card} />
        ))}
      </Slide>
      </div>
  )
}

export default Home