import React from 'react';

function Warning({ warn }) {
    if (warn) {
    return <div className="warning">Warning!!</div>;
  }
  return null;
}

export default Warning;
