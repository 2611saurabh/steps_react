
const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];
git config --global user.email "you@example.com"
  git config --global user.name "Your Name"





export default function App() {

  const step = 1;

  return <div className="steps">
    <div className="numbers">
      <div className={`${step >= 1 ? "active": ""}`}>1</div>
      <div className={`${step >= 2 ? "active": ""}`}>2</div>
      <div className={`${step >= 3 ? "active": ""}`}>3</div>

    </div>

    <p className="message">Step {step}: {messages[step - 1]}</p>

    <div className="buttons">
      <button style ={{backgroundColor: '#7950f2', color: '#fff'}} onClick={() => alert("Previous")} onMouseEnter={alert("dkjdkd")}>Previous</button>

      <button style ={{backgroundColor: '#7950f2', color: '#fff'}} onClick={() => alert("Previous")}>Next</button>
    </div>

  </div>;
  

}