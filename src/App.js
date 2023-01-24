


import './App.css';
import Base from './Base/Base';
import { StudentDetails } from './components/students';

function App() {

  return (
    <div className="App">



    <Base
    title = "Batch Details"
    description= "All students details"
    >
      <StudentDetails/>
      
    </Base>
    
      
    </div>
  );
}
export default App;

// crud operations
// routing methods
// crud= create read update delete
// props drilling
// hooks ,(usestate,useeffects)
// prop cjild to parent
// routing buttons
// unauthorisedre routings
// material ui
