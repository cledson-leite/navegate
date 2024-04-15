import { Link } from 'react-router-dom'

import './Menu.css'

export const Menu = () => (
    <aside className='Menu'>
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>

                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/param/123">Param #1</Link>
                </li>

                <li>
                    <Link to="/param/Texto">Param #2</Link>
                </li>
                <li>
                    <Link to="404">404</Link>
                </li>
            </ul>
        </nav>
    </aside>
)