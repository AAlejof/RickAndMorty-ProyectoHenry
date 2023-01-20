import './App.css';
import Cards from './components/Card/Cards.jsx';
import Navbar from './components/Nav/Nav.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const location = useLocation()
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'example@gmail.com';
  const password = '1password';

  const login = (userData) => {
    if (userData.username === username  && userData.password === password) {
      setAccess(true);
      navigate('home');
    }else{
      alert("Username and/or password are incorrect...")
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === "/" ? <Form login={login}/> : <Navbar onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route path='home' element={<Cards onClose={onClose} characters={characters} />} />
        <Route path='about' element={<About />} />
        <Route path='detail/:detailId' element={<Detail />} />
      </Routes>

    </div>
  )
}

export default App;
