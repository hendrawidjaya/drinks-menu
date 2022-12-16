import Link from 'next/link'
import Modal from "../components/Modal";
import styles from '../styles/Drinks.module.css';

export default function drinks() {

    return (
        <>
            <div className={styles.container}>
                <Modal
                    title={"Soft Drinks"}
                    drink={"Coca-Cola 0.4l"}
                />
                <Modal
                    title={"Juice"}
                    drink={"Pineapple 0.3l"}
                />
                <Modal
                    title={"Beer"}
                    drink={"Berliner Kinder 0.75l"}
                />
                <Modal
                    title={"Cocktails"}
                    drink={"Moscow Muly"}
                />
                <Modal
                    title={"Longdrinks"}
                    drink={"Georg & Tonic"}
                />
                <Modal
                    title={"Mocktails"}
                    drink={"Malibu Barbie"}
                />
                <Modal
                    title={"Shots"}
                    drink={"Jaegermeister 0.4cl"}
                />
                <Modal
                    title={"Warm Drinks"}
                    drink={"Jasmin Tea"}
                />
                <Modal
                    title={"Others"}
                    drink={"Sparkling Water 0.3l"}
                />
                <Link
                    href="/"
                    style={{
                        color: "red",
                        fontSize: 20,
                        marginBottom: 50
                    }}
                > Back to Main Page</Link>
            </div>
        </>
    );
};
