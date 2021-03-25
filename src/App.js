import * as styles from './App.module.css';

import {
    FiAperture,
    FiArrowUpCircle,
    FiBluetooth,
    FiCoffee,
} from 'react-icons/fi';

function App() {
    return (
        <>
            <aside>
                <FiAperture />
                <FiArrowUpCircle />
                <FiBluetooth />
                <FiCoffee />
            </aside>
            <main className={styles.main} />
        </>
    );
}

export default App;
