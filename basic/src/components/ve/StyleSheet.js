import './myStyle.css'



export default function StyleSheet(props){
    let nameCSS = props.primary ? "primary" : ""

    return(
        <div>
            <h1 className={`${nameCSS} font-xl`}>day la StyleSheet</h1>
        </div>
    )
}