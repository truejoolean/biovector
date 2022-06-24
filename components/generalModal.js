import React, { useState, useEffect } from 'react';
import MailChimpNewsletter from './mailchimpNewsletter'

const GeneralModal = ({ closeFunc, isShown }) => {
  const dynamicModalClass = () => (isShown ? {display: 'block'} : '')
  // console.log(instructions);

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
            </div>
            <div className="modal-body">
              <MailChimpNewsletter />
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
export default GeneralModal;