import React from 'react';
import PropTypes from 'prop-types';

class AvatarIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            src,
            size,
        } = this.props;

        return (
            <img src={src} width={size} />
        );
    }
}

AvatarIcon.propTypes = () => ({
    src: PropTypes.string,
    size: PropTypes.number,
});

export default AvatarIcon;
