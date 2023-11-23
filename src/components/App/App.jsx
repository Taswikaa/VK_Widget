import './App.css'
import Widget from '../Widget/Widget'

const App = () => {
  function clearCash() {
    localStorage.setItem('cash', []);
    localStorage.removeItem('totalCount');
  }

  return (
    <div className='app'>
      <Widget></Widget>
      <button className='app__button' onClick={clearCash}>Очистить кеш</button>
    </div>
  )
}

export default App