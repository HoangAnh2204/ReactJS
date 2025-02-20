import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Đây là nội dung chính của trang web</h2>
        <p>Chúng tôi cung cấp các dịch vụ chất lượng cao.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
