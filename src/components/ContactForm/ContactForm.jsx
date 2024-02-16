import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from './ContactForm.module.css';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
  number: Yup.string().min(9, 'Too short!').max(9, 'Too long!').required('Required'),
});

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) => {
        onAdd({ id: nanoid(), ...values });
        actions.resetForm();
      }}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.fieldContainer}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={css.input} type="text" name="name" id={nameFieldId}></Field>
          <ErrorMessage className={css.error} name="name" component="span"></ErrorMessage>
        </div>

        <div className={css.fieldContainer}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field className={css.input} type="text" name="number" id={numberFieldId}></Field>
          <ErrorMessage className={css.error} name="number" component="span"></ErrorMessage>
        </div>

        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
