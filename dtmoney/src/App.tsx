import { useState } from "react";
import Modal from 'react-modal'

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransctionModal() {
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransActionModal() {
        setIsNewTransactionModalOpen(false)
    }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransctionModal} />
      <Dashboard />
      <Modal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransActionModal}
      >
          <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
