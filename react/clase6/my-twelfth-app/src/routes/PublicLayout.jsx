import { Outlet, Link } from 'react-router-dom';

export default function PublicLayout() {
    return (
        <div id="layout">
            <div id="sidebar">
                <h1>React Router Veridas</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/clock">Clock</Link>
                        </li>
                        <li>
                            <Link to="/people">People</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div id="detail">
                <Outlet /> {/* Aquí se renderizan las rutas hijas */}
            </div>   
        </div>
    );
}
