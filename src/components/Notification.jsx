import React from 'react';
import PropTypes from "prop-types"
import { Stat }  from '../styled/styled-statistics';

export default function Notification ({ message }) {
    return(
        <>
        <Stat>{message}</Stat>
        </>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
  };