import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑'
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isStepsShown, setShownSteps] = useState(true);

  const handlePreviousClick = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleNextClick = () => {
    setStep((prevStep) => Math.min(prevStep + 1, messages.length));
  };

  const handleCloseButton = () => {
    setShownSteps((prevStepsShown) => !prevStepsShown);
  };

  return (
    <>
      {isStepsShown && (
        <div className='steps'>
          <div className='numbers'>
            {messages.map((item, index) => (
              <div
                key={index}
                className={`${step >= index + 1 ? 'active' : ''}`}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <p className='message'>
            <span>
              Step {step}: {messages[step - 1]}
            </span>
          </p>
          <div className='buttons'>
            <button
              onClick={handlePreviousClick}
              className='active'
              disabled={step === 1}
            >
              <span>Previous</span>
            </button>
            <button
              onClick={handleNextClick}
              disabled={step === messages.length}
            >
              <span>Next</span>
            </button>
            <button className='close' onClick={handleCloseButton}>
              <span>X</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
