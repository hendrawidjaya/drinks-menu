import styles from '../styles/Drinks.module.css';

export default function drinks() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.drink_name}>
                    Soft Drinks
                </div>
                <div className={styles.drink_name}>
                    Juice
                </div>
                <div className={styles.drink_name}>
                    Pure
                </div>
                <div className={styles.drink_name}>
                    Cocktails
                </div>
                <div className={styles.drink_name}>
                    Mocktails
                </div>
                <div className={styles.drink_name}>
                    Warm Drinks
                </div>
                <div className={styles.drink_name}>
                    Others
                </div>
            </div>
        </>
    );
};
