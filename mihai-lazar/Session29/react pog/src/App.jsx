import './App.css'
import DemoComponent from './components/DemoComponent'

function App() {

  const persons = [
    {
      fullName: 'Mihai Lazar',
      birthDay: new Date(2001, 10, 14),
      adress: {
        city: 'Cluj'
      }
    },
    {
      fullName: 'Timea Sipos',
      birthDay: new Date(2002, 4, 28),
      adress: {
        city: 'Popesti'
      }
    }
  ]

  return (
    
    <div>
      <h1 className='test'>this is my first react app</h1>
      <DemoComponent>name={persons[0].fullName} birthDay={persons[0].birthDay}</DemoComponent>
      <DemoComponent name={persons[1].fullName} birthDay={persons[0].birthDay}/>
    </div>
  )
}

export default App
