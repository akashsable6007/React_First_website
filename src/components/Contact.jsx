import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contct Us</h1>

            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder='name' required/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder='email' required/>
                </div>
                <div>
                    <label>Massage:</label>
                    <input type="text" placeholder='tell me about your query...' required/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </main>
    </div>
  )
}

export default Contact