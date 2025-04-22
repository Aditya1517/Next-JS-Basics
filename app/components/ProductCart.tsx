'use Client';
import React from 'react'
import AddToCart from './dist/AddToCart';

// server events can not have interactivity so they can not handel browser events like click, change and submit etc 
// Note: Interactivity like onClick only works in client components.
// Since this file includes 'use client', it's treated as a client component and can handle browser events.
// to make app faster and SEO frienly render components on server as much as possible and use client components only when needed.
// Client components are used for interactivity, while server components are used for rendering static content.

const ProductCart = () => {
  return (
    <div>
        <AddToCart/>
    </div>
  )
}

export default ProductCart
