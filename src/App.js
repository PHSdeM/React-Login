import { useState } from 'react';
import logoRum from './assets/img/rum.svg'
import './assets/css/styles.css'


function App() {
  const [email, setEmail ] = useState("")
  const [password, setPassword ] = useState("")

  return (
   <div className="container">
     <div className="container-login">
       <div className="wrap-login">
        <form className="login-form">
        
        <span className="login-form-title">Bem Vindo!</span>
       
        <span className="login-form-title">
          <img src={logoRum} alt="Rum Logo"/>
        </span>

        <div className='wrap-input'>
          <input
          className={email !== "" ? 'has-val input' : 'input' }
          type="email" 
          value={email}
          onChange={e => setEmail(e.target.value)}/>
          <span className='focus-input' data-placeholder="Email"></span>
        </div>

        <div className='wrap-input'>
          <input 
          className={password !== "" ? 'has-val input' : 'input' }
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}/>
          <span className='focus-input' data-placeholder="Password"></span>
        </div>

        <div className='container-form-btn'>
          <button className='login-form-btn'>Login</button>
        </div>

        <div className='text-center'>
          <span className='text'>Não possui conta?</span>
          <a className='text-a' href='#a'>Criar conta.</a>
        </div>
        </form>
       </div>
     </div>
   </div>
  );
}

export default App;
