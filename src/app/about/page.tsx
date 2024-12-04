import React from 'react'
import Hero from '@/components/about_sections/Hero'
import BasicHook from '@/components/about_sections/BasicHook'
import Todolist from '@/components/about_sections/Todolist'

function AboutPage() {
  return (
    <>
        <Hero />
        <BasicHook />
        <Todolist />
    </>
  )
}

export default AboutPage