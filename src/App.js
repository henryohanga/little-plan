import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import FormGroup from './components/FormGroup/FormGroup';
import Recommendations from './components/Recommendations/Recommendations';

import { formControls } from './data/formControls';

import '@popsure/dirty-swan/dist/index.css';

import './App.scss';

function App() {
  const [controls, setControls] = useState(() =>
    formControls.map((control) => ({ ...control, answer: '', errors: [] }))
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const [showForm, setShowForm] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const [recommendations, setRecommendations] = useState([]);
  const [hasToken, setHasToken] = useState(false);

  const onFormUpdate = (controlName, value) => {
    const updateControls = controls.map((control) => {
      if (control.controlName === controlName) {
        return { ...control, answer: value };
      }

      return control;
    });

    setControls(updateControls);
  };

  const goToNextControl = () => {
    const currentControl = controls[currentIndex];
    const potentialNext = controls[currentIndex + 1];

    if (potentialNext.visibleOn?.previous) {
      const { operation, value } = potentialNext.visibleOn.previous;
      if (operation === 'eq') {
        if (currentControl.answer === value) {
          setCurrentIndex((currentIndex) => currentIndex + 1);
        } else {
          setCurrentIndex((currentIndex) => currentIndex + 2);
        }
      }
    } else {
      setCurrentIndex((currentIndex) => currentIndex + 1);
    }
  };
  const onNext = () => {
    if (currentIndex === controls.length - 1) {
      onSubmit();
    } else {
      goToNextControl();
    }

    localStorage.setItem('formControls', JSON.stringify(controls));
  };

  useEffect(() => {
    const formControls = JSON.parse(localStorage.getItem('formControls'));
    let nextIndex = (formControls ?? []).findIndex((el) => !el.answer);

    if (nextIndex >= 0) {
      nextIndex = computeNextFromPrevious(nextIndex);

      setCurrentIndex(nextIndex);

      // unset errors
      setControls(() =>
        formControls.map((control) => ({ ...control, errors: [] }))
      );

      setShowForm(true);
    }
  }, []);

  const computeNextFromPrevious = (nextIndex) => {
    const potentialNext = formControls[nextIndex];
    const previous = formControls[nextIndex - 1];

    if (potentialNext.visibleOn?.previous) {
      const { operation, value } = potentialNext.visibleOn?.previous;

      if (operation === 'eq') {
        if (previous.answer !== value) {
          nextIndex += 1;
        }
      }
    }

    return nextIndex;
  };

  const onSubmit = () => {
    console.log('Submit');
  };

  return (
    <div className="d-flex App ws8">
      <Header onClear={() => {}} />

      <main className="App-main">
        {hasToken ? (
          <Recommendations recommendations={recommendations} />
        ) : (
          <React.Fragment>
            {showForm ? (
              <FormGroup
                controls={controls}
                currentIndex={currentIndex}
                onNext={onNext}
                onFormUpdate={onFormUpdate}
                onFormSubmitted={onSubmit}
                isButtonLoading={isButtonLoading}
              />
            ) : (
              <Landing onGetStarted={() => setShowForm(true)} />
            )}
          </React.Fragment>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
