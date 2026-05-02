import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { contact } from '../data/portfolioData';

const initialFormValues = {
  name: '',
  email: '',
  message: '',
};

function validateContactForm(values) {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please provide a valid email address.';
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!values.message.trim()) {
    errors.message = 'Message cannot be empty.';
  }

  return errors;
}

function Contact() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((currentErrors) => {
        const nextErrors = { ...currentErrors };
        delete nextErrors[name];
        return nextErrors;
      });
    }

    if (successMessage) {
      setSuccessMessage('');
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    const fieldErrors = validateContactForm(formValues);

    setTouched((currentTouched) => ({
      ...currentTouched,
      [name]: true,
    }));
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: fieldErrors[name],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSending) {
      return;
    }

    const validationErrors = validateContactForm(formValues);
    const hasErrors = Object.keys(validationErrors).length > 0;

    setTouched({
      name: true,
      email: true,
      message: true,
    });
    setErrors(validationErrors);
    setSuccessMessage('');

    if (hasErrors) {
      return;
    }

    setIsSending(true);

    window.setTimeout(() => {
      setIsSending(false);
      setFormValues(initialFormValues);
      setTouched({});
      setErrors({});
      setSuccessMessage("Thank you. I'll get back to you soon.");
    }, 700);
  };

  const getFieldClassName = (fieldName) =>
    touched[fieldName] && errors[fieldName] ? 'field field--error' : 'field';

  return (
    <>
      <SectionWrapper
        eyebrow="Start a Conversation"
        id="contact"
        intro="Have an opportunity, project, or technical idea in mind? Send a concise note and I will respond as soon as I can."
        title="Let's build something meaningful."
      >
        <div className="contact__layout">
          <div className="contact__details">
            <div className="contact-card">
              <p className="contact__label">Email</p>
              <p className="contact__value">{contact.email}</p>
              <p className="contact__note">
                Best for internships, software projects, collaborations, and
                technical conversations.
              </p>
            </div>
            <div className="contact__links">
              <a
                className="button button--secondary"
                href={contact.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="button button--secondary"
                href={contact.github}
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>

          <form className="contact-form" noValidate onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <label className={getFieldClassName('name')}>
                <span>Name</span>
                <input
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={Boolean(touched.name && errors.name)}
                  autoComplete="name"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Your name"
                  type="text"
                  value={formValues.name}
                />
                {touched.name && errors.name && (
                  <small className="field__error" id="name-error">
                    {errors.name}
                  </small>
                )}
              </label>
              <label className={getFieldClassName('email')}>
                <span>Email</span>
                <input
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={Boolean(touched.email && errors.email)}
                  autoComplete="email"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  type="email"
                  value={formValues.email}
                />
                {touched.email && errors.email && (
                  <small className="field__error" id="email-error">
                    {errors.email}
                  </small>
                )}
              </label>
            </div>
            <label className={getFieldClassName('message')}>
              <span>Message</span>
              <textarea
                aria-describedby={errors.message ? 'message-error' : undefined}
                aria-invalid={Boolean(touched.message && errors.message)}
                name="message"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Tell me what you would like to build, discuss, or explore."
                value={formValues.message}
              />
              {touched.message && errors.message && (
                <small className="field__error" id="message-error">
                  {errors.message}
                </small>
              )}
            </label>

            {successMessage && (
              <p className="form-status form-status--success" role="status">
                {successMessage}
              </p>
            )}

            <button className="button contact-form__submit" disabled={isSending} type="submit">
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </SectionWrapper>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>Erkhembileg Ariunbold</span>
          <span>Personal Portfolio</span>
        </div>
      </footer>
    </>
  );
}

export default Contact;
