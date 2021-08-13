import React from 'react';
import PropTypes from 'prop-types';

import { Label } from '../atoms/Atoms';

class LabelValue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            label,
            children,
        } = this.props;

        const style = {};

        return (
            <div style={style}>
                <Label weight="bold">{ label }</Label> : <Label>{ children }</Label>
            </div>
        );
    }
}

LabelValue.propTypes = () => ({
    label: PropTypes.string,
    children: PropTypes.string,
});

export default LabelValue;
