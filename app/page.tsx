
import Link from 'next/link'
import React from 'react'


const Home = () => {
  return (
    <div>
    <ul className='nav'>
    <li><Link href="#">Home</Link></li>
        <li><Link href="./about" target='_blank'>About</Link></li>
        <li><Link href="./service">Service</Link></li>
        <li><Link href="./about/contact">Contact</Link></li>
    </ul>
    <h1 className='pages'>Hello I am Home page</h1>
    </div>
  )
}

export default Home