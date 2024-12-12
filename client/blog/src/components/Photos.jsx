import { useState } from "react"
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";


const Photos = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const foodPics = import.meta.glob('/public/foodpics/*')
  const imageUrls = Object.keys(foodPics).map(path => path.replace('/public', ''))

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="carousel" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '25px',
      padding: '25px',
      minHeight: '625px'
    }}>
      <button 
        onClick={prevSlide}
        style={{
          padding: '12px 25px',
          cursor: 'pointer',
          color: 'goldenrod',
          backgroundColor: 'antiquewhite'
        }}
      >
       <AiFillCaretLeft />
      </button>
      <img 
        src={imageUrls[currentIndex]} 
        alt={`Food slide ${currentIndex + 1}`}
        style={{ 
          width: '625px', 
          height: '500px', 
          objectFit: 'cover',
          borderRadius: '10px',
          boxShadow: '0 5px 10px rgba(0,0,0,0.1)'
        }}
      />
      <button 
        onClick={nextSlide}
        style={{
          padding: '12px 25px',
          cursor: 'pointer',
          color: 'goldenrod',
          backgroundColor: 'antiquewhite'
        }}
      >
        <AiFillCaretRight />
      </button>
    </div>
  )
}

export default Photos