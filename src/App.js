import './App.css';
import { useState } from 'react';
import SayController from './SayController.jsx';
import SayViewer from './SayViewer.jsx';

// Say 사용자정의 컴포넌트 만들어서 분리하기
// setMessage : 함수로 만들어서 사용
// onClick의 이벤트핸들러 : 밖으로 빼서 함수 두 개로 만들기
function App() {
  const [message, setMessage] = useState('')

  return (
    <div className="App">
      <SayController setMessage={setMessage} />   
      <SayViewer message={message} />
    </div>
  );
}

export default App;
