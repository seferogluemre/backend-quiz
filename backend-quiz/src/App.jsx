import { useState } from 'react'
import './App.css'
import Activity from './assets/components/icons/Activity'
import Aperture from './assets/components/icons/Aperture'
import Compass from './assets/components/icons/Compas'
import CPU from './assets/components/icons/Cpu'


function App() {

  const [selectedImage, setSelectedImage] = useState(0);

  const cards = [
    { id: 1, name: '1-3', image: () => <Activity /> },
    { id: 2, name: '4-18', image: () => <Aperture /> },
    { id: 3, name: '19-35', image: () => <Compass /> },
    { id: 4, name: '36-46', image: () => <CPU /> }
  ]

  const questionPhotos = [
    { id: 1, photoSrc: "/src/assets/components/questionPhotos/cevap1.png" },
  ]

  return (
    <>
      <div className="app">
        <h2>Y.Emre SEFEROĞLU</h2>
        <h1>Backend Quiz 1-46</h1>
        <div className="gallery">
          {cards.map((card) => (
            <div
              key={card.name}
              className="card"
              onClick={() => setSelectedImage(card.id)}
            >
              <div className="icon-wrapper">
                {card.image()}
              </div>
              <p>{card.name}</p>
            </div>
          ))}
        </div>
      </div>
      {
        questionPhotos.map((question, index) => {
          if (question.id == selectedImage) {
            return (
              <div className="modal" key={index} onClick={() => setSelectedImage(null)}>
                <div className="modal-content">
                  <button className="close-button" onClick={() => setSelectedImage(null)}>
                    Close
                  </button>
                  <div className="icon-wrapper">
                    <img src={question.photoSrc} className='selected-image' alt="" />
                  </div>
                </div>
              </div>
            )
          }
        })
      }
    </>
  )
}

export default App
