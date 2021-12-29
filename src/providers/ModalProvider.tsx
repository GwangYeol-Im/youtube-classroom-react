import React, { createContext, useContext, useState } from 'react';

import colors from 'constants/color';
import styled from '@emotion/styled';

type Modal = React.ReactNode | null;

const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState<Modal>(null);

  const openModal = (content: Modal) => {
    setModal(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setModal(false);
  };

  return {
    modal,
    openModal,
    closeModal,
    modalContent,
  };
};

type ModalContext = ReturnType<typeof useModal>;

export const ModalContext = createContext<ModalContext>({} as ModalContext);

interface ModalProviderProps {
  children: Modal;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const { modal, openModal, closeModal, modalContent } = useModal();

  return (
    <ModalContext.Provider
      value={{ modal, openModal, closeModal, modalContent }}
    >
      {children}
      <ModalTemplate />
    </ModalContext.Provider>
  );
};

const ModalTemplate = () => {
  const { modal, closeModal, modalContent } = useContext(ModalContext);

  if (!modal) return null;

  return (
    <>
      <Dimmer onClick={closeModal}></Dimmer>
      <Dialog role="dialog" aria-modal={true}>
        <Header>
          <button type="button" onClick={closeModal}>
            닫기
          </button>
        </Header>
        {modalContent}
      </Dialog>
    </>
  );
};

const Dimmer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${`${colors.black}60`};
`;

const Dialog = styled.div`
  position: fixed;
  padding: 1rem;
  top: 50%;
  left: 50%;
  border-radius: 0.625rem;
  transform: translate(-50%, -50%);
  background-color: ${colors.background};
`;

const Header = styled.div`
  text-align: right;
`;
