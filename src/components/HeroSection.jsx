

import quran_image from '../assets/quran-image.png'
export default function HeroSection() {
  return (
    <>
      <div className="container mt-4 mb-4 ">
        <div className="row ">
          <div className="col-lg-6 col-md-12">
            <h1 className='hero-section-h1 '>
              Find and hire expert Qaris from around the world
            </h1>

            <p className='hero-section-p '>
              Hire Quran teachers on monthly basis and learn online from anywhere in the world. Suitable and safe for children and adults.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={quran_image} alt="hero-banner image" className='hero-banner-image ' />
          </div>
        </div>
      </div>
    </>
  )
}
