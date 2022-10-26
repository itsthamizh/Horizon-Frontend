import React, { Component } from 'react';

class FooterComponent extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">Developed by <a href="https://github.com/itsthamizh"> @itsthamizh </a> </span>
                    <span className="text-muted">Muthamizh Selvan M FullStack-Developer</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;