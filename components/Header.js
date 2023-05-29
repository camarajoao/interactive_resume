import Image from 'next/image';
import sunIcon from '../public/icons/sun.svg';
import moonIcon from '../public/icons/moon.svg';

function Header({ theme, setTheme }) {

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <div className='header'>
            <button onClick={toggleTheme} className='mode-button'>
                <Image src={theme === 'light' ? sunIcon : moonIcon} className='toggle-mode sun' />
            </button>
        </div>
    )
}

export default Header