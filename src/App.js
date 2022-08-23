import React, {useState} from 'react'
import ServerSelect from './ServerSelect'
import CustomSelect from './CustomSelect';

function App() {

  const servList = ['localhost:5000', '84.95.84.236:5000', 'serv.dinagold.org'];
  const [servSelect, setServSelect] = useState(servList[0]);
  const [flag, setFlag] = useState(true);

  
  function setSer (serv) {
    console.log ('setServer new:', serv, 'old:', servSelect)
    setServSelect(serv)
  }

  const flagChange = () => {setFlag ( ! flag)}

  function test () {
    console.log ('checkBox:', flag, 'radio:', servSelect)
  }

  const corsServerOptions = [
    {label: '84.95.84.236', value: '84.95.84.236'},
    {label: 'localhost', value: 'localhost'},
    {label: 'dinaGold', value: 'dinagold.org'},
  ]

  function corsServerChange (val) {
    setServSelect (val.value);
    const serverOld = global.server
    global.server = val.value
    console.log (serverOld, global.server)
  }

  return (
    <div className="App">

          <CustomSelect options={corsServerOptions} label='server' onChange={corsServerChange } defaultValue={corsServerOptions[0]} />

      <div style={{display: 'flex'}}>
        server: &nbsp;&nbsp;
        {servList.map((servSel) => (
          <div key={servSel} >
            <input style={{zoom: '150%'}}  type='radio' name="radioValues_" value={servSel} 
            checked={servSelect === servSel} onChange={(e) => setSer (e.target.value)}  />
            <b>&nbsp;{servSel}&nbsp;&nbsp;</b> 
          </div>
        ))}
      </div>

      <div style={{display:'flex'}}> <ServerSelect setServ={setSer} title='server' options={servList}/> </div>
      
      <div> <input  type="checkbox" checked={flag}  onChange={flagChange} /> checkBox &nbsp; &nbsp;</div> 

      <div> &nbsp; <button onClick={test} > test </button> &nbsp; </div>
    </div>
  );
}

export default App;
