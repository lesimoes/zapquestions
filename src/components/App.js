import React, { useState } from 'react';
import EnterScreen from './EnterScreen';
import FlashScreen from './FlashScreen';
import '../assets/css/reset.css';
import '../assets/css/style.css';

export default function App() {
  const [page, setPage] = useState('screenOne');
  const [deckState, setDeckState] = useState('');

  const deck1 = [
    {
      question: 'Qual o objetivo do protocolo HTTP?',
      answer:
        'Foi criado para ser usado na comunicação entre computadores da World Wide Web (Internet)',
    },
    {
      question:
        'Como o servidor sabe que deve receber e enviar o paylod em JSON?',
      answer: 'Através do mime-type application/json',
    },
    {
      question:
        'Como o servidor sabe qual o mime-type do payload de uma requisição?',
      answer: 'Através do campo Content-Type no Header',
    },
    {
      question: 'Podemos criar um servidor em node sem o express?',
      answer: 'Sim, através do módulo http do node.',
    },
    {
      question: 'O que é Buffer e qual sua finalidade?',
      answer:
        'Como o conteúdo de um payload pode ser muito grande, o HTTP na verdade vai quebrar esse payload em vários pedaços, chamados de Buffer e enviá-los um de cada vez pro servidor.',
    },
  ];

  const deck2 = [
    {
      question: 'Qual o papel do roteador em uma rede',
      answer:
        'O roteador é um centralizador, que recebe e encaminha mensagens entre os computadores conectados a ele.',
    },
    {
      question: 'O que é DNS?',
      answer:
        'DNS é uma abreviação de Domain Name System. É ele quem converte o endereço de domínio para o IP do computador que hospeda o serviço.',
    },
    {
      question: 'O que são pacotes TCP/IP?',
      answer:
        'TCP/IP é um conjunto de protocolos para a comunicação entre computadores.',
    },
    {
      question:
        'Como o computador de destino sabe qual programa deve tratar cada mensagem?',
      answer:
        'Todo programa que queira ser capaz de receber mensagens via rede, quando começa a rodar precisa avisar ao Sistema Operacional que está "ouvindo na porta xxxx", logo é através da porta.',
    },
    {
      question:
        'Como o roteador sabe pra qual computador mandar cada mensagem?',
      answer:
        'Quando um dispositivo se conecta a um roteador pela primeira vez, o roteador atribui um endereço IP (IP Address) a ele (essa atribuição é feita por um recurso do roteador chamado DHCP). O endereço IP é um identificador (endereço) usado para identificar e "localizar" dispositivos na rede.',
    },
    {
      question: 'O que são Status Codes?',
      answer:
        'Códigos para dar mais informações sobre uma requisição (sucesso/erro de cliente/erro de servidor)',
    },
  ];

  return page === 'screenOne' ? (
    <EnterScreen
      showScreenTwo={(screen) => setPage(screen)}
      deckState={deckState}
      setDeckState={setDeckState}
      deck1={deck1}
      deck2={deck2}
    />
  ) : (
    <FlashScreen
      deckState={deckState}
      setDeckState={setDeckState}
      deck1={deck1}
      deck2={deck2}
    />
  );
}
