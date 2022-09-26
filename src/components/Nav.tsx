import { useNavigate } from 'react-router-dom'
import '../styles/Page.css'

const Nav = () => {

    const navigate = useNavigate();
    


    return (
        <ul>
            <li className='list' onClick={() => navigate('/stackView')}>Stack</li>
            <li className='list' onClick={() => navigate('/queueView')}>Queue</li>
        </ul>

    )

}

export default Nav
