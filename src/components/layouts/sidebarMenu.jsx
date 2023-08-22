import { Link } from "react-router-dom"

export default function SidebarMenu (){
    return (
        <div>
            <div className="sidebar">
                <ul>
                    <li><Link to="/depositar">Depositar</Link></li>
                    <li><Link to="/sacar">Sacar</Link></li>
                    <li><Link to="/transferir">Transferir</Link></li>
                </ul>
            </div>
        </div>
    )
}