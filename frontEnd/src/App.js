import { useState, useEffect } from 'react'

import Window from './components/Window';
import List from './components/subComponents/List';
import Footer from './components/subComponents/Footer'
import Header from './components/subComponents/Header'


function App() {
  const [mainMenu, setMainMenu] = useState("auth_module");
  const [subMenu, setSubMenu] = useState("");
  const [data, setData] = useState( {
    'auth_module': {
    },
    'content_module':{
    }
  });

  useEffect(() =>{
    const getData = async () => {
      const response = await fetch("http://127.0.0.1:8020/");
      const info = await response.json();
      setData(info); 
    }
    getData();
  }, [])

  useEffect(() => {
    setSubMenu(Object.keys(data[mainMenu]).sort()[0])
  }, [mainMenu])
  
  useEffect(() => {
    setSubMenu(Object.keys(data[mainMenu]).sort()[0])
  }, [data])

  

  return (
    
    <Window type='box'>
      
      <Header menuItems={Object.keys(data)} setMenu={setMainMenu} activeElement={mainMenu} />
          
        <Window type='subBox'>

          <Header menuItems={Object.keys(data[mainMenu]).sort()} setMenu={setSubMenu} activeElement={subMenu} />

          <List mainMenu={mainMenu} subMenu={subMenu} data={data}/>

          <Footer/>

        </Window>    
      
    </Window>
    
  );
}

export default App;
