import React from 'react';
import ReactDOM from 'react-dom';

import 'remixicon/fonts/remixicon.css';
import './index.scss';

import Header from 'main_app/Header';
import Footer from 'main_app/Footer';

import CartContent from './Components/CartContent';

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="m-10">
      <CartContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
