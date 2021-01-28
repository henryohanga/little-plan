import './Footer.scss';

const Footer = () => {
  return (
    <footer className="d-flex Footer">
      <p className="tc-grey-300">
        &copy; {new Date().getFullYear()} The Little Plan
      </p>
    </footer>
  );
};

export default Footer;
