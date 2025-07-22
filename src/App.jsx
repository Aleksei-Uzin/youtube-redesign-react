import { ContentBox, Header, HeaderMenuButtonProvider } from './components'
import './index.css'
import './variables.css'

function App() {
  return (
    <HeaderMenuButtonProvider>
      <Header />
      <ContentBox />
    </HeaderMenuButtonProvider>
  )
}

export default App
