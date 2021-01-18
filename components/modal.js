import React, { useState, useEffect } from 'react';

const Modal = ({closeFunc, isShown, instructions}) => {
  const dynamicModalClass = () => (isShown ? {display: 'block'} : '')
  console.log(instructions);

  return isShown ? (
    <div className="modal" style={dynamicModalClass()} id="channelModal">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content mx-auto">
          <div className="modal-header">
          <button
            onClick={closeFunc}
            style={{ color: '#000' }}
            type="button"
            className=""
            data-dismiss="modal"
            aria-label="Close"
            >
            <span aria-hidden="true">&times;</span>
            </button>
          {/*
            <h5 className="">Free Measure. Free Quote.</h5>
            <div className="">
              <p>woah this is the modal-body</p>
            </div>
            <div className="modal-footer">
              <button className="btn-lg btn btn-primary">
              <span style={{ color: '#fff' }}>
              <i className="fa fa-phone mr-1 " />
              <a href="tel:01234567" style={{ color: '#fff' }}>
              0123 4567{' '}
              </a>
              </span>
              </button>
              <button onClick={closeFunc} type="button" className="btn btn-lg">
              No Thanks
              </button>
            </div>
            */}
            <h3 className="text-2xl">How to apply</h3>
            </div>
            <div className="modal-body">
              <h2 className="text-lg">Good choice, this job rocks!</h2>
              <p>{instructions}</p>
              <p className="mt-4">Break a leg!</p>
            </div>
            <div className="modal-footer">
            <button onClick={closeFunc} type="button" className="btn btn-lg">
              Abort mission!
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : null
}
export default Modal;