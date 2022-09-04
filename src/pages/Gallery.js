import React from 'react'
 import WSPGallery from '../components/WSPGallery'
 import image1 from '../assets/100.png'
 import image12  from '../assets/11.png'
 import image13 from '../assets/22.png'
 import image14 from '../assets/33.png'
 import image15 from '../assets/44.png'
 import image16 from '../assets/55.png'
 import image17 from '../assets/66.png'
 import image18 from '../assets/1223.png'
 import image19 from '../assets/88.png'
 import image20 from '../assets/99.png'
function Gallery() {

    const galleryImages = [
      {
        img:  image15 
      },
      {
        img: image12
      },
      {
        img: image13
      },
      {
        img: image14 
      },
      {
        img: image1 
      },
      {
        img: image16 
      },
      {
        img: image17 
      },
      {
        img: image18 
      },
      {
        img: image19 
      },
      {
        img: image20
      }
      
    ]
  
    return (
      <div className="App">
        <br />

        <br /><br />
  
        <WSPGallery
          galleryImages={galleryImages}
        />
  
        <br /><br />
        
      </div>
    );
  }
  

export default Gallery