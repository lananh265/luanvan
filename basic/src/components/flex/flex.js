import styles from './flex.module.css'

export default function Flex(){
    return (
        <div className = {styles.container}>
            <div className={`${styles.box} ${styles.box1} ${styles.boxp}` }>

           

                <p>Box 1</p>
                <p>Flex Item</p>
            </div>
            <div className={`${styles.box} ${styles.box2} ${styles.boxp}` }>
                <p>Box 2</p>
                <p>Flex Item</p>
            </div>
            <div className={`${styles.box} ${styles.box3} ${styles.boxp}` }>
                <p>Box 3</p>
                <p>Flex Item</p>
            </div>
            
        </div>
    )
}