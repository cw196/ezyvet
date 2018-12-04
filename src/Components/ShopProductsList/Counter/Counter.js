import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.addCounter = this.addCounter.bind(this);
        this.minusCounter = this.minusCounter.bind(this);
        this.updateProps = this.updateProps.bind(this);
    }

    addCounter() {

        let count = this.state.count + 1;

        this.setState({
            count
        });

        this.updateProps(count);
    }

    minusCounter() {
        let count = this.state.count - 1;
        if ( count < 0) {
            return
        }

        this.setState({
            count
        });

        this.updateProps(count);

    }

    updateProps(count) {
        this.props.updateCount(count);
    }

    render() {
        const {classes} = this.props;
        const {count} = this.state;

        return (
            <div className={classes.base}>
                <div onClick={this.minusCounter}>
                    -
                </div>
                <div>
                    {
                        count
                    }
                </div>
                <div onClick={this.addCounter}>
                    +
                </div>
            </div>
        )
    }
}

Counter.propTypes = {
    updateCount: PropTypes.func
};

export default Counter;