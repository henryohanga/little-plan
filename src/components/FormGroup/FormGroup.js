import FormControl from '../FormControl/FormControl';

const FormGroup = ({
  controls,
  currentIndex,
  onNext,
  onFormUpdate,
  isButtonLoading,
}) => {
  const currentControl = controls[currentIndex];

  return (
    <form>
      <FormControl control={currentControl} onControlChange={onFormUpdate} />

      <button
        type="button"
        className={`p-btn--primary mt32 ${
          isButtonLoading ? 'p-btn--loading' : ''
        }`}
        disabled={!Boolean(currentControl.answer)}
        onClick={onNext}
      >
        {currentIndex === controls.length - 1
          ? 'Get your recommendation'
          : 'Next'}
      </button>
    </form>
  );
};

export default FormGroup;
