import React, { useState, useEffect } from 'react';

const Modal = ({job, closeFunc, isShown, instructions}) => {
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
            <h3 className="text-2xl">How to apply</h3>
            </div>
            <div className="modal-body">
              <h2 className="text-lg">{job ? "Good choice, this job rocks!" : ""}</h2>
              {job ? <p>{instructions}</p> : ""}
              {job ? "" : (<div><p>Please write a mail to jo@whrstn.de and include the following details</p>
              <ul className="instructions">
                <li>Listing title</li>
                <li>Short description (This is used for Google For Jobs, please include at max. 200 letters.)</li>
                <li>The content stating the details of the vacancy. Note that you can also send us a link where to copy it from or a pdf file</li>
                <li>Your logo</li>
                <li>Contact details: name, telephone number (optional), e-mail address</li>
                <li>Instructions on how to apply or a link to redirect to</li>
              </ul></div>
              )}
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