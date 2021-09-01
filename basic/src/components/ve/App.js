
import StyleSheet from "./StyleSheet"
import Inline from "./Inline"

import styles from './appStyles.module.css'
import './appStyles.css'

export default function App2(){

    return(
        <div>
            <h1>Day la App</h1>
            <StyleSheet primary={true}/>
            <Inline />
<h1 className="error">error</h1>
<h1 className ={styles.success}>success</h1>
        </div>
    )
}