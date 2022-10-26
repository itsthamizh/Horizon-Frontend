import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className = "header">
                        <div className="header-application-name">Buy Immadiate App</div>
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;