import React from 'react';
import { useState, useEffect } from 'react';
import styles from './edit.module.css';
import ButtonText from 'Components/Shared/Buttons/ButtonText';
import Input from 'Components/Shared/Input';
import SuccessModal from 'Components/Shared/ErrorSuccessModal/index';
import { useDispatch } from 'react-redux';
import { editAdmin } from 'redux/admins/thunks';

const AdminsEdit = ({ edit, closeModalForm }) => {
  const dispatch = useDispatch();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [response, setResponse] = useState('');
  const [adminInput, setadminInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    active: ''
  });

  useEffect(() => {
    setadminInput({
      firstName: edit.firstName,
      lastName: edit.lastName,
      email: edit.email,
      password: edit.password,
      active: edit.active
    });
  }, []);

  const onChange = (event) => {
    setadminInput({ ...adminInput, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    let editedAdmin = JSON.stringify({
      firstName: adminInput.firstName,
      lastName: adminInput.lastName,
      email: adminInput.email,
      password: adminInput.password,
      active: adminInput.active
    });
    if (
      adminInput.firstName === edit.firstName &&
      adminInput.lastName === edit.lastName &&
      adminInput.email === edit.email &&
      adminInput.password === edit.password &&
      adminInput.active === edit.active
    ) {
      setResponse({ message: "There haven't been any changes", data: {}, error: true });
      setShowSuccessModal(true);
    } else {
      dispatch(editAdmin(edit._id, editedAdmin, setResponse));
      setShowSuccessModal(true);
    }
  };

  const onChangeActive = (e) => {
    setadminInput({ ...adminInput, active: e.target.checked });
  };

  return (
    <form className={styles.form}>
      <Input
        label="First Name"
        type="text"
        name="firstName"
        placeholder="Insert admin name"
        value={adminInput.firstName}
        onChange={onChange}
        required={true}
      />
      <Input
        label="Last Name"
        type="text"
        name="lastName"
        placeholder="Insert admin lastName"
        value={adminInput.lastName}
        onChange={onChange}
        required={true}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="Insert email"
        value={adminInput.email}
        onChange={onChange}
        required={true}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Insert Password"
        value={adminInput.password}
        onChange={onChange}
        required={true}
      />
      <Input
        label="Active"
        name="active"
        type="checkbox"
        checked={adminInput.active}
        onChange={onChangeActive}
      />
      <div className={styles.buttonBox}>
        <ButtonText clickAction={onSubmit} label="Edit"></ButtonText>
      </div>
      <SuccessModal
        show={showSuccessModal}
        closeModal={() => {
          setShowSuccessModal(false);
        }}
        closeModalForm={closeModalForm}
        successResponse={response}
      />
    </form>
  );
};

export default AdminsEdit;
