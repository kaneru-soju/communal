import { Component } from 'react';
import EnterCard from '../components/EnterCard';

import '../styles/Home.scss';

class Home extends Component {
    render() {
        return (
        <div>
            <div className="stars small"></div>
            <div className="stars medium"></div>
            <div className="stars large"></div>
            <EnterCard />
        </div>
        );
    }
}

export default Home;