import './header.scss';
import logo from '../../resources/img/Logo1.png';
import { NavLink, Link } from 'react-router-dom';



/* const Header = () => {
    const arrLink = [
        {
            name: 'Главная',
            link: '/'
        },
        {
            name: 'Технология',
            link: '/'
        },
        {
            name: 'График полетов',
            link: '/'
        },
        {
            name: 'Гарантии',
            link: '/'
        },
        {
            name: 'О компании',
            link: '/'
        },
        {
            name: 'Контакты',
            link: '/'
        }
    ]

    const Links = () => {
        return arrLink.map((item, i) => {
            return (
                <NavLink end style={{'color': 'red'}} className="nav-link" to={item.link} key={i}>{item.name}</NavLink> 
            )
        })
    };

    return (
        <header className="header">
            <Link to='/'>
                <img className="img img-corner" src={corners} alt=""/>
                <img className="img img-logo" src={logo} alt="Logo"/>
            </Link>
            <nav className="nav">
                {Links()}
            </nav>
        </header>
    )    
} */

const Header = () => {
  
    // const activeClass = ({isActive}) => { return {'color': isActive ? 'green' : ''}};

    return (
        <header className="header">
            <div className="container">
                <Link to='/'>
                    <img className="img img-logo" src={logo} alt="Logo"/>
                </Link>
                <nav className="nav">
                    <NavLink className="nav-link" to='/'>Главная</NavLink>
                    <NavLink className="nav-link" to='/'>Технология</NavLink>
                    <NavLink className="nav-link" to='/'>График полетов</NavLink>
                    <NavLink className="nav-link" to='/'>Гарантии</NavLink>
                    <NavLink className="nav-link" to='/'>О компании</NavLink>
                    <NavLink className="nav-link" to='/'>Контакты</NavLink>
                </nav>
            </div>
        </header>
    )    
}


export default Header;
