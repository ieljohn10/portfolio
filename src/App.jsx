import "./App.scss"
import MainContent from "./components/main-content"
import SideBar from "./components/sidebar"

function App() {
  return (
    <div className="App">
      <div className="content">
        <SideBar />
        <MainContent />
      </div>
    </div>
  )
}

export default App
