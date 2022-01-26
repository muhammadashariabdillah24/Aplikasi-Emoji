import styles from './Navbar.module.css';

import searchIcon from '../../assets/search-icon.svg';
import emojiIcon from '../../assets/emoji-icon.svg'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <img style={{ marginRight: 8 }} className={styles.navIcon} src={emojiIcon} alt="emojiicon" />
            <img style={{ marginTop: 3 }} className={styles.navIcon} src={searchIcon} alt="searchicon" />
            <span className={styles.navTitle}> er </span>
        </nav>
    )
}

export default Navbar