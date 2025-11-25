import React, {useEffect} from 'react';




const AlertMessage = ({variant= "success", onClose, autoClose = 3000, children }) => {

    useEffect(() => {
        if (!autoClose) return;

        const id = setTimeout(() => onClose?.(), autoClose);
        return() => clearTimeout(id);

    },[autoClose, onClose])



    return (
        <div className={`alert alert-${variant} d-flex justify-content-between align-items-center`} role="alert">
            <div>{children}</div>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}/>
        </div>
    );
};

export default AlertMessage;