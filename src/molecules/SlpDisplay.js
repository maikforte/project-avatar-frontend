import React from 'react';
import PropTypes from 'prop-types';

import { Label } from '../atoms/Atoms';

class SlpDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            slpCount,
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
                    <img src="images/slp.png" width="49"/>
                    <span style={style.spacer}/>
                    <Label weight="bold" size={34}>{ slpCount }</Label>
                </div>
            </div>
        );
    }
}

SlpDisplay.propTypes = () => ({
    slpCount: PropTypes.string,
});

export default SlpDisplay;
