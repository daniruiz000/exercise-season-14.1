import React from 'react';
import './App.scss';
import RegisterForm from './components/RegisterForm/RegisterForm';
import { IntlProvider, FormattedMessage } from 'react-intl';
import Spanish from './lang/es.json';
import French from './lang/fr.json';
import English from './lang/en.json';

const locale = navigator.language;
let defaultMessages;

switch (locale) {
  case 'fr-FR':
    defaultMessages = French;

    break;
  case 'es-ES':
    defaultMessages = Spanish;

    break;
  case 'en-EN':
    defaultMessages = English;

    break;

  default:
    defaultMessages = English;

    break;
}
const App = () => {
  const [messages, setMessages] = React.useState(defaultMessages);
  return (
    <div className='app'>
      <IntlProvider locale={locale} messages={messages}>
        <RegisterForm />
        <h2><FormattedMessage id='app:language_selector' /></h2>
        <button onClick={() => setMessages(Spanish)}><FormattedMessage id='app:spanish' /></button>
        <button onClick={() => setMessages(French)}><FormattedMessage id='app:french' /></button>
        <button onClick={() => setMessages(English)}><FormattedMessage id='app:english' /></button>
      </IntlProvider>
    </div>
  );
};

export default App;
