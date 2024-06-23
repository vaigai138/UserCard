// import { LearnComponents } from "./Components/LearnComponents"

// import { Header } from "./Components/Header"

// import { childComponent } from './Components/childComponent'
import '../src/index.css'
import { FunctionSample } from './Components/FunctionSample';
//import { MultiTypeComponent } from './Components/MultiTypeComponent';
// import { OneofSample } from './Components/OneofSample';
// import { ArraySample } from './Components/arraySample';
// import { Student } from './Components/Student'


function App() {
  
  const items = [
    {id:1,name : "item 1"},
    {id:2,name : "item 2"},
    {id:3,name : "item 3"}
  ];

  const clickme = ()=>{
    alert("Button clicked")
  };

  return (
    <>
    {/* <div>Hello World</div>
    <LearnComponents/> */}
    {/* <Header/> */}
    {/* <Student name="Vaigai" age={19} isQualified={false}/>
    <Student name="Vijay" age={22} isQualified={true}/>
    <Student name="Surya" age={21} isQualified={false}/>
    <Student name="Ajay"/>

    <childComponent>
      <p>this is para 1</p>
      <p>this is para 2</p>
      
    </childComponent> */}
      
    {/* <ArraySample items={items}></ArraySample>   */}

    {/* <OneofSample color="orange"/> */}

    {/* <MultiTypeComponent value="Hello"/>
    <MultiTypeComponent value={12}/>
    <MultiTypeComponent value={true}/> */}

    <FunctionSample clickme={clickme}/>
    
    </>
  )
}

export default App
