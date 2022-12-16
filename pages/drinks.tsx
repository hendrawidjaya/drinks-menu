import Link from 'next/link'
import Modal from "../components/Modal";
import styles from '../styles/Drinks.module.css';

export default function drinks() {

    return (
        <>
            <div className={styles.container}>
                <Modal
                    title={"Soft Drinks"}
                    drink={"Coca-Colars 0.4l"}
                />
                <Modal
                    title={"Juice"}
                    drink={"Mariannecuja 0.3l"}
                />
                <Modal
                    title={"Beer"}
                    drink={"Pavelaner 0.75l"}
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
                    drink={"The Hendra"}
                />
                <Modal
                    title={"Shots"}
                    drink={"Absolute Vlada 0.4cl"}
                />
                <Modal
                    title={"Warm Drinks"}
                    drink={"Omaricano"}
                />
                <Modal
                    title={"Others"}
                    drink={"Sparklera Water 0.3l"}
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
