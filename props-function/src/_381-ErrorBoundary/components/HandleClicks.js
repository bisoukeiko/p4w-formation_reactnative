import { Component } from "react"

const handleClicks = (WrappedComponent) => {


    class HandleClicks extends Component {
                
        state = {
            bg: ''
        }

        handlClick = () => {
            if(WrappedComponent.name === 'Frieza') {
                this.setState({
                    bg: 'bg-danger'
                })
            } else {
                this.setState({
                    bg: 'bg-success'
                })
            }

        }


        render() {
                    
            if(this.state.bg === 'bg-danger') {
                throw new Error();
            }

            return <WrappedComponent clickHandle={this.handlClick} backGround={this.state.bg}/>
        }
    }

    return HandleClicks;

}

export default handleClicks;