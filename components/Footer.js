import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
   <div class="footer">
    
   <Link href="/">Home</Link>
    <Link href="/friends">Friends</Link>
    <Link href="/watch">Watch</Link>
    <Link href="#">Marketplace</Link>
    <Link href="#">Menu</Link>
  </div>
  )
}

export default Footer
