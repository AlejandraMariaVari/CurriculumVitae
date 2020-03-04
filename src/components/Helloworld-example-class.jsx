import React, { Component } from 'react';

class Helloworld-example-class extends Component {
    state = {
        active: true

    }

    handleClick = () => {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Ocultar ja</button>
                {
                    this.state.active && <h1>Hola Alejita</h1>
                }
            </div>
        );
    }
}

export default Helloworld-example-class;