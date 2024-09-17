'use client'
 
import dynamic from 'next/dynamic'
 
const DynamicOpenStreetMap = dynamic(() => import('./openstreetmap'), {
  ssr: false,
})


export default DynamicOpenStreetMap;