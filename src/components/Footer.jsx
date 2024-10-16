
const Footer = () => {
  return (
    <div>
      <div className='bg-zinc-800 py-20'>
            <div className='flex justify-center mb-5'>
            </div>
            <div className='text-white text-sm flex items-center gap-7 justify-center mb-7'>
              <h5>Home</h5>
              <h5>Blog</h5>
              <h5>About Us</h5>
              <h5>Contact Us</h5>
              <h5>FAQ</h5>
            </div>
            <p className='text-sm text-zinc-100 text-center'>Copyright © {new Date().getFullYear()} Readio. All Right Reserved</p>
    </div>
    </div>
  )
}

export default Footer
