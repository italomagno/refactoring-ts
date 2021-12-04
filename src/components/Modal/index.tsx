import { Component, ReactNode, useEffect, useState } from 'react';
import ReactModal from 'react-modal';



interface ModalProps{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
}


function Modal({ setIsOpen,children,isOpen }:ModalProps) {

const [modalStatus,setModalStatus] = useState(false)

//class Modal extends Component {
// constructor(props) {
//   super(props);
//   const { isOpen } = this.props;
//   this.state = {
//     modalStatus: isOpen
//   }
// }

  useEffect(()=>{
    setModalStatus(isOpen)
  },[isOpen])

  // componentDidUpdate (prevProps) {
  //   const { isOpen } = this.props;

  //   if (prevProps.isOpen !== isOpen) {
  //     console.log(this.props)
  //     this.setState({ modalStatus: isOpen })
  //   }
  // }


    return (
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={() => setIsOpen(false)}
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
    );
  };

export default Modal;
