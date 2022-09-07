import { Link } from 'react-router-dom'
import './styles.css'



export const Dropdown = () => {

    const handleClick = () => {
        document.getElementById("idDropdownContent").classList.toggle("show");
    }

    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    return (
        <>
        <div className='container-dropdown'>
            <div className="dropdown-container">
                <button className="dropbtn" onClick={handleClick}>
                    Select your news
                    <i id='icon-style' className="fa-solid fa-angle-down"></i>
                </button>
                <div id='idDropdownContent' className='dropdown-content'>
                    <Link to="/angular">
                        <img src="../../public/imgs/angular.jpg" alt="angular" />
                        <p>Angular</p>
                    </Link>
                    <Link to="/react">
                        <img src="../../public/imgs/react.jpg" alt="react" />
                        <p>React</p>
                    </Link>
                    <Link to="/vuejs">
                        <img src="../../public/imgs/vuejs.jpg" alt="vuejs" />
                        <p>Vuejs</p>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
