import React from 'react'
import Banner from '../components/Banner.js'
import Hero from '../components/Hero.js'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
       <Hero>
           <Banner title='404' subtitle='page not found'>
               <Link to='/' className="btn-primary"> return home</Link>
           </Banner>
       </Hero>
    )
}
