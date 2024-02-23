import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = ()=>{
    alert('button 2 clicked');
  }

  return (
    <>
      
      <h3>React core concepts 2</h3>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
    </>
  )
}

export default App
