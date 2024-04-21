import React from 'react';
import PropTypes from "prop-types"
import { HeaderTitle }  from '../styled/styled-section';

export default function Section({ title, children }) {
  return (
    <div>
      <HeaderTitle>{title}</HeaderTitle>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};