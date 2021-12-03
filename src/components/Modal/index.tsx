import { Component, useState } from 'react';
import ReactModal from 'react-modal';


interface ModalProps{
  handleRequestCloseFunc: () => void;
  isOpen: false
}

export function Modal({handleRequestCloseFunc}:ModalProps){
  const [isOpen, setIsOpen] = useState(Boolean)

  handleRequestCloseFunc

  
  return(
<ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={setIsOpen}
        isOpen={modalStatus}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
  )
}



/*
class Modal extends Component {
  constructor(props) {
    super(props);

    const { isOpen } = this.props;
    this.state = {
      modalStatus: isOpen
    }
  }

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;

    if (prevProps.isOpen !== isOpen) {
      console.log(this.props)
      this.setState({ modalStatus: isOpen })
    }
  }

  render() {
    const { children, setIsOpen } = this.props;
    const { modalStatus } = this.state;

    return (
      
    );
  }
};
*/
export default Modal;