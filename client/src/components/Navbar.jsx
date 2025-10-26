import React from 'react'

const Navbar = () => {
    const user = {name:"devanshu"}
  return (
    <div className='shadow bg-white'>
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5
        text-slate-800 transition-all">
            <Link>
                <img src="/logo.svg" alt="logo" className="h-8 w-auto"/>
                <span className="ml-2 text-lg font-semibold">MyApp</span>
                
            </Link>
        </nav>
      <h1>Welcome, {user.name}!</h1>
    </div>
  )
}

export default Navbar