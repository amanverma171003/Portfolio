import resume from '../../assets/Aman-verma.pdf'

const Navbar = () => {
  return (
    <div className='fixed w-full top-0 z-50 px-4'>
        <div className='w-full'>
            <header className='flex flex-col md:flex-row items-center justify-between gap-4 py-4'>
                <nav className='flex gap-4 items-center rounded-full py-2 px-6 text-black bg-[#fafafa] backdrop-blur-xs shadow-lg shadow-black/10 font-md'>
                    <a href='#about'>About</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                </nav>

                <div className='flex gap-4 items-center rounded-full py-2 px-8 text-black bg-[#fafafa] backdrop-blur-xs shadow-md shadow-black/10 font-md hover:shadow-lg hover:translate-y-0.5 transition-all duration-300'>
                    <a href={resume} download={resume}>Resume</a>
                </div>
            </header>
    </div>
    </div>
    
  )
}

export default Navbar
