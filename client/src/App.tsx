import { ToastContainer } from 'react-toastify'
import './App.css'
import Content from './components/Content/Content.tsx'

function App() {
  return (
    <>
      <Content />

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
