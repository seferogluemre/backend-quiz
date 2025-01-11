
import './App.css'

function App() {






  return (
    <>
      <div className="app">
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
      </div>


    </>
  )
}

export default App
