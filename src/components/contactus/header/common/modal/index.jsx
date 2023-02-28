import '../modal/index.css'

const Modal = ({ children, id, heading }) => {
    
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5.5 mb-3" id="ModalLabel">{heading}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
