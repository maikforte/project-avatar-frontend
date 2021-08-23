import React from 'react';
import PropTypes from 'prop-types';

import { Label } from '../atoms/Atoms';

class FiatDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            fiat,
            value,
        } = this.props;

        const style = {
            container: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            },
            innerContainer: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            },
            spacer: {
                width: 5,
            },
        };

        return (
            <div style={style.container}>
                <div style={style.innerContainer}>
                    <Label weight="500" size={34}>{ fiat }</Label>
                    <span style={style.spacer}/>
                    <Label weight="100" size={34}>{ value }</Label>
                </div>
            </div>
        );
    }
}

FiatDisplay.propTypes = () => ({
    slpCount: PropTypes.string,
});

export default FiatDisplay;
