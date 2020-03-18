import React from 'react';

const Modal = ({show, children}) => {
    const showHideClassName = show ? "modal" : "modal hide";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
            </section>
        </div>
    );
};

export default Modal;