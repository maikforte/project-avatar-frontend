import React from 'react';
import PropTypes from 'prop-types';

class AvatarLabel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            size,
            color,
            weight,
            children,
        } = this.props;

        const style = {
            color: color || DEFAULTS.COLOR,
            fontSize: size || DEFAULTS.SIZE,
            fontWeight: weight || DEFAULTS.FONT_WEIGHT,
        };

        return (
            <p style={style}>
                {children}
            </p>
        );
    }
}

AvatarLabel.propTypes = () => ({
    size: PropTypes.number,
    color: PropTypes.string,
    weight: PropTypes.string,
    children: PropTypes.string,
});

// Default prop style
const DEFAULTS = {
    COLOR: '#000000',
    SIZE: 14,
    FONT_WEIGHT: 'normal',
};

export default AvatarLabel;
