import { BrowserRouter } from 'react-router-dom'
import { Menu } from '../../components/layout/Menu'
import { Content } from '../../components/layout/Content'
import './App.css'

export const App = () => (
    <div className="App">
        <BrowserRouter>
            <Menu />
            <Content />
        </BrowserRouter>
    </div>
)