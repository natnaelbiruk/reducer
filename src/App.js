import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { name, Lname, Profession,Mname,Age } from "./store/action/action";


function App() {
  const firstName= useSelector((state) =>state.firstName);
  const lastName= useSelector((state) =>state.lastName);
  const middlename= useSelector((state) =>state.middlename);
  const profession= useSelector((state) =>state.profession);
  const age= useSelector((state) =>state.age);
  
  const dispatch = useDispatch();

  const [value , setValue] = useState()
  const [lvalue , setlValue] = useState()
  const [mvalue , setmValue] = useState()
  const [pvalue , setpValue] = useState()
  const [avalue , setaValue] = useState()
 
  
  return (
    <div>
    <input value={value} onChange={(e) => setValue(e.target.value)}/>
    <button onClick={() => dispatch(name(value))}>Dispatch</button>
    <p>FirstName: {firstName}</p>

    <input value={lvalue} onChange={(e) => setlValue(e.target.value)}/>
    <button onClick={() => dispatch(Lname(lvalue))}>Dispatch</button>
    <p>lastName: {lastName}</p>

    <input value={mvalue} onChange={(e) => setmValue(e.target.value)}/>
    <button onClick={() => dispatch(Mname(mvalue))}>Dispatch</button>
    <p>FirstName: {middlename}</p>

    <input value={pvalue} onChange={(e) => setpValue(e.target.value)}/>
    <button onClick={() => dispatch(Profession(pvalue))}>Dispatch</button>
    <p>lastName: {profession}</p>
    <input value={avalue} onChange={(e) => setaValue(e.target.value)}/>
    <button onClick={() => dispatch(Age(avalue))}>Dispatch</button>
    <p>lastName: {age}</p>
    </div>
  );
}

export default App;
