import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [name, setName] = useState('');
  const [dateTime, setdateTime] = useState('');
  const [description, setDescription] = useState('');
  function addNewTransaction(ev){
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';
    console.log(url);
  }
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
      <div className='basic'> 
      <input 
      value={name}
      type='text'
      onChange={ev => setName(ev.target.value)}
      placeholder={'+200 new samsung tv'} />
      <input 
      value={name}
      type='datetime-local'
      onChange={ev => setDatetime(ev.target.value)} />
      </div>
      <div className='description'>
      <input 
      value={description}
      type='text' 
      onChange={ev => setDescription(ev.target.value)}
      placeholder={'description'}/>
      </div>
      <button type='submit'>Add new transaction</button>
      </form>
      <div className='transactions'>
      <div className='transaction'>
       <div className='left'>
           <div className='name'>Iphone</div>
           <div className='description'>It was time for new tv</div>
       </div>
       <div className='right'>
         <div className='price red'>-$500</div>
         <div className='dateTime'>2022-12-18 15:45</div>
       </div>
      </div>
      <div className='transaction'>
       <div className='left'>
           <div className='name'>New Samsung Tv</div>
           <div className='description'>It was time for new tv</div>
       </div>
       <div className='right'>
         <div className='price red'>-$500</div>
         <div className='dateTime'>2022-12-18 15:45</div>
       </div>
      </div>
      <div className='transaction'>
       <div className='left'>
           <div className='name'>Gig Job New Website</div>
           <div className='description'>It was time for new tv</div>
       </div>
       <div className='right'>
         <div className='price green'>$500</div>
         <div className='dateTime'>2022-12-18 15:45</div>
       </div>
      </div>
      </div>
    </main>
  );
}

export default App
