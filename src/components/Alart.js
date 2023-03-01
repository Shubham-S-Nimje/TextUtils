import React from 'react';


const Alart = (props) => {

  return (
    <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          type="button"
          className="btn-close"
          data-dismiss="alert"
          aria-label="Close">
        </button>
      </div>
    </div>
  );
}

export default Alart
