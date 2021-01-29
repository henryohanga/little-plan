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
  const [hasToken, setHasToken] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  /**
   * Handle form data change
   * @param {String} controlName
   * @param {*} value
   */
  const onFormUpdate = (controlName, value) => {
    const updateControls = controls.map((control) => {
      if (control.controlName === controlName) {
        return { ...control, answer: value };
      }

      return control;
    });

    setControls(updateControls);
  };

  /**
   * Move to the next control, considering any
   * inter-dependencies among controls
   */
  const goToNextControl = () => {
    const currentControl = controls[currentIndex];
    const potentialNext = controls[currentIndex + 1];

    if (potentialNext.visibleOn?.previousValue) {
      if (currentControl.answer === potentialNext.visibleOn.previousValue) {
        setCurrentIndex((currentIndex) => currentIndex + 1);
      } else {
        setCurrentIndex((currentIndex) => currentIndex + 2);
      }
    } else {
      setCurrentIndex((currentIndex) => currentIndex + 1);
    }
  };

  /**
   * Handle next/submit button click
   */
  const onNext = () => {
    if (currentIndex === controls.length - 1) {
      onSubmit();
    } else {
      goToNextControl();
    }

    localStorage.setItem('formControls', JSON.stringify(controls));
  };

  /**
   * Initialise app states from localStorage
   * including checking whether a user already
   * has a token or not.
   */
  useEffect(() => {
    const hasAccessToken = Boolean(localStorage.getItem('accessToken'));
    setHasToken(hasAccessToken);

    if (hasAccessToken) {
      fetchRecommendations();
    }

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

  /**
   * Find exact index of the next item based on any
   * dependencies on the previous value
   * @param {Number} nextIndex
   */
  const computeNextFromPrevious = (nextIndex) => {
    const potentialNext = formControls[nextIndex];
    const previous = formControls[nextIndex - 1];

    if (potentialNext.visibleOn?.previousValue) {
      if (previous.answer !== potentialNext.visibleOn.previousValue) {
        nextIndex += 1;
      }
    }

    return nextIndex;
  };

  /**
   * Submit user responses to the API
   */
  const onSubmit = async () => {
    const formData = controls.reduce((acc, next) => {
      acc[next.controlName] = next.answer;
      return acc;
    }, {});
    const { hasChildren, ...payload } = formData;

    // unset errors
    setControls(() => controls.map((control) => ({ ...control, errors: [] })));

    // show loaser on submit button
    setIsButtonLoading(true);

    const data = await fetchToken(payload);

    if (data.errors) {
      handleErrors(data.errors);
    }

    if (data.jwt) {
      saveToken(data.jwt);
      setHasToken(true);
      await fetchRecommendations();
    }

    setIsButtonLoading(false);
  };

  const fetchToken = async (payload) => {
    const resp = await fetch(process.env.REACT_APP_API_BASE_URL + '/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        numberOfChildren: Number(payload.numberOfChildren),
      }),
    });

    return resp.json();
  };

  /**
   * Map errors to controls through errors control property
   * @param {object} errors the error object
   */
  const handleErrors = (errors) => {
    const errorKeys = Object.keys(errors);

    let firstErrorIndex = null;

    const updatedControls = controls.map((control, index) => {
      if (errorKeys.includes(control.controlName)) {
        // track the first error index
        if (!firstErrorIndex) {
          firstErrorIndex = index;
        }

        return {
          ...control,
          errors: errors[control.controlName],
        };
      }

      return control;
    });

    setControls(() => updatedControls);

    // move the user to the first error index
    if (firstErrorIndex !== null) {
      setCurrentIndex(firstErrorIndex);
    }
  };

  /**
   * Save the token to localStorage
   * @param {string} token the token to be saved
   */
  const saveToken = (token) => {
    localStorage.removeItem('accessToken');
    localStorage.setItem('accessToken', token);
  };

  /**
   * Fetch recommendations
   */
  const fetchRecommendations = async () => {
    setIsFetching(true);

    const resp = await fetch(
      process.env.REACT_APP_API_BASE_URL + '/recommendation',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      }
    );

    let data = await resp.json();

    // sort by plan amount and update recommendations
    if (resp.ok) {
      data.sort((a, b) => a.price.amount - b.price.amount);
      setRecommendations(data);
    }

    setIsFetching(false);
    return data;
  };

  /**
   * Reset the app state
   */
  const onClear = () => {
    localStorage.clear();
    setControls(() =>
      formControls.map((control) => ({ ...control, answer: '', errors: [] }))
    );
    setCurrentIndex(0);
    setHasToken(false);
    setShowForm(false);
  };

  return (
    <div className="d-flex App ws8">
      <Header onClear={onClear} />

      <main className="App-main">
        {hasToken ? (
          <Recommendations
            recommendations={recommendations}
            isFetching={isFetching}
          />
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
