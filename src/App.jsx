import { useState } from 'react'
import './App.css'

function App() {
  const [ input, setInput ] = useState('');
  const [ queue, setQueue ] = useState([]);

  const handleSubmit = () => {
    console.log(input)

    setQueue((prev) => [...prev, input]);
    setInput('');
  }

  const handleChange = (e) => {
    setInput(e.target.value)

    
  }

  return (
    <div className='parent-container'>
      <p>Number of items for customer</p>
      <div className='input-container'>
        <input type="text" value={input}  onChange={handleChange}/>
        <button type='button' onClick={handleSubmit} className='btn'>Add to Queue</button>
      </div>

      <div className='cart-container'>
        <div className='cashier-container'>
          <p className='cashier-box'>Cashier 1</p>
          <p className='cashier-box'>Cashier 2</p>
          <p className='cashier-box'>Cashier 3</p>
        </div>

        <div className='queue-container'>
            {queue.map((product, index) => (
              <div key={index} className='product'>{product}</div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
