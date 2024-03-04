import useFavicon from 'react-use-favicon'
import './App.css'

function App() {
  const { url, update, restore } = useFavicon()

  return (
    <div className="App">
      {url && <img src={url} alt="Favicon" />}
      <button onClick={() => update('/favicon-two.ico')}>Update</button>
      <button onClick={() => restore()}>Restore</button>
    </div>
  )
}

export default App
