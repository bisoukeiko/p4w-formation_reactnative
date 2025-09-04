import { Component } from "react";
import MyHead from "./myHeaderOne";
import '../myCss.css';
import styles from '../myCss.module.css';

// const titreRouge = {
//     frontSize: '50px',
//     color: 'red'
// }

class Form extends Component {

    render() {

        // const myClass = this.props.head ? 'blue': 'red';

        return(
            <div>
                {/* <h1 style={titreRouge}>Commentaire</h1> */}
                {/* <p className={`${myClass} bigFont`}>je suis rouge ou blue</p> */}

                <h1 className={styles.green}>Commentaire 1</h1>
                <MyHead />
                <p className="red">je suis rouge ou blue</p>

                <button>Valider</button>

            </div>
        )
    }
}

export default Form;