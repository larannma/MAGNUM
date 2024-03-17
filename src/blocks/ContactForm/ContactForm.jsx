import './ContactForm.css';

function ContactForm() {
  return (
    <div className="contact-form">
      <div className='contact-form__container'>
        <p className='contact-form__title'>НУЖЕН КОНТЕНТ?</p>
        <form className='contact-form__form'>
          <p className='contact-form__subtitle'>ЗАПОЛНИ ЗАЯВКУ</p>
          <input className='contact-form__input' placeholder='ИМЯ'></input>
          <input className='contact-form__input' placeholder='ОРГАНИЗАЦИЯ'></input>
          <input className='contact-form__input' placeholder='ТЕЛЕФОН'></input>
          <input className='contact-form__input' placeholder='КОММЕНТАРИЙ'></input>
          <button className='contact-form__button'>ОТПРАВИТЬ ЗАЯВКУ</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
