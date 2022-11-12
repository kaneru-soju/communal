import { Component } from 'react';

import '../styles/EnterCard.scss';


class EnterCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({ username: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = '/watch';
    }

    render() {
        return (
            <div>
                <div className="card-container">
                    <h1 className="title">Communal</h1>
                    <div className="enter-card">
                        <form onSubmit={this.handleSubmit}>
                            <input
                                className="user"
                                type="text"
                                placeholder="Username"
                                required
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                            <input
                                className="button"
                                type="submit"
                                value="Enter"
                            >
                            </input>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default EnterCard;