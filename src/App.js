import './App.css';
import Navbar from './component/Navbar';
import AddToDo from './component/AddToDo';
import {useState} from 'react';
import ToDoList from './component/ToDoList';
import Alert from './component/Alert';
function App() {

  const [userList,setUserList]=useState(['Hi there You may add items in the List']);
  const [usermode,setUserMode]=useState((
    {
      backgroundColor:'black',
      color:'white'
    }
  ));


  const [alertState,setAlertState]=useState(null);
  const showAlert=(msg,type)=>{
    setAlertState({
      message : msg,
      type : type
    })  
    setTimeout(() => {
      setAlertState(null)
    }, 4000);
  }


  return (
    <div className="App">
      <Navbar modeUserState={[usermode,setUserMode]} showAlert={showAlert}/>
      <Alert alert={alertState}/>
      <ToDoList  userListState= {[userList,setUserList]} modeUserState={usermode}/>      
      <AddToDo userListState= {[userList,setUserList]} modeUserState={usermode} showAlert={showAlert} />
    </div>
  );
}

export default App;
