import { useNavigate } from 'react-router-dom'
import '../styles/Page.css'

const Nav = () => {

    const navigate = useNavigate();
    


    return (
        <ul className='nav'>
            <li className='link' onClick={() => navigate('/')} >Home</li>
            <li className='link' onClick={() => navigate('/stackView')} >Stack</li>
            <li className='link' onClick={() => navigate('/queueView')} >Queue</li>
            <li className='link' onClick={() => navigate('/about')}>About</li>
        </ul>

    )

}

export default Nav
