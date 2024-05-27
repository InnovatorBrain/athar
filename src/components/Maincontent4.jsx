import image from '../assets/quran-tempalte.png'

export default function Maincontent4() {
  return (
    <>
    <div className="container mt-4 mb-4 ">
        <div className="row ">
          <div className="col-lg-6 col-md-12">
            <h1 className='hero-section-h1 '>
            An opportunity for Qaris
            </h1>

            <p className='hero-section-p '>
            Qari.io is an opportunity for Qaris (teachers) to make a good living while not having to leave the teaching field of Islam.
            </p>
            <button className='btn btn-primary'>
                Apply as a Qari
            </button>
          </div>
          <div className="col-lg-6">
            <img src={image} alt="hero-banner image" className='hero-banner-image ' />
          </div>
        </div>
      </div>
    </>
  )
}
