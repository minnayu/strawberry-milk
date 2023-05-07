import Head from 'next/head'
import '../app/globals.css'
// import {
//   Container,
//   Main,
//   Title,
//   Description,
//   CodeTag,
// } from '../components/sharedstyles'
import Cards from '../components/cards'

export default function Home() {
  return (
    <div className="bg-pink-200 text-center">
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
    </div>
  )
}
