import Link from 'next/link'
import Modal from "../components/Modal";
import styles from '../styles/Drinks.module.css';

const data = [
    {
        title: "Soft Drinks",
        items: ["Coca-CoLars", "Club Matt-e", "Fanta", "Sprite"]
    },
    {
        title: "Juice",
        items: ["Mariannecuja", "Oriange", "Pineavin"]
    },
    {
        title: "Beer",
        items: ["Pavelaner"]
    },
    {
        title: "Shots",
        items: ["Stefquilan 0.4cl"]
    },
    {
        title: "Cocktails",
        items: ["Moscow Muly", "Piña CoVlada", "Ahmed on the Beach", "CosmopoLera", "NeVroni", "The Right Hend"]
    },
    {
        title: "Longdrinks",
        items: ["Georg & Tonic", "Felipe Libre"]
    },
    {
        title: "Mocktails",
        items: ["Loodmela Bullofshit"]
    },
    {
        title: "Warm Drinks",
        items: ["Omaricano", "Robertea", "Honey And-rei Lemon"]
    },
    {
        title: "Others",
        items: ["Water"]
    },]

const ItemComponent = ({ items }: any) => {
    return (<div>
        {items.map((element: any, index: any) => <h4 key={index}> {element} </h4>)}
    </div>)
}

export default function drinks() {

    return (
        <>
            <div className={styles.container}>
                {data.map((element, index) =>
                    <Modal key={index} title={element.title}>
                        {element.items.map((item, itemIndex) => <h4 key={itemIndex}>{item}</h4>)}
                    </Modal>
                )}
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
