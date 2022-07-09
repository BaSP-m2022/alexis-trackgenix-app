import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees, deleteEmployee } from 'redux/employees/thunks';
import { useHistory, generatePath } from 'react-router-dom';
import styles from './employees.module.css';
import Form from './Form';
import {
  Preloader,
  Table,
  ModalForm,
  Select,
  ConfirmModal,
  ErrorSuccessModal
} from 'Components/Shared';

const Employees = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);
  const isLoading = useSelector((state) => state.employees.isLoading);
  const [showModalFormEdit, setShowModalFormEdit] = useState(false);
  const [showModalFormDelete, setShowModalFormDelete] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [response, setResponse] = useState('');
  const [employeeId, setEmployeeId] = useState();

  let history = useHistory();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  const redirectAction = (id) => {
    history.push(generatePath('/admin/employees/:id', { id }));
  };

  const closeModalFormEdit = () => {
    setShowModalFormEdit(false);
  };

  let modalEdit;
  if (showModalFormEdit) {
    modalEdit = (
      <ModalForm isOpen={showModalFormEdit} handleClose={closeModalFormEdit} title="Edit Employee">
        <Form
          closeModalForm={closeModalFormEdit}
          edit={true}
          item={employees.find((item) => item._id === employeeId)}
        />
      </ModalForm>
    );
  }

  let modalDelete;
  if (showModalFormDelete) {
    modalDelete = (
      <ConfirmModal
        isOpen={showModalFormDelete}
        handleClose={() => {
          setShowModalFormDelete(false);
        }}
        confirmDelete={() => {
          dispatch(deleteEmployee(employeeId, setResponse)).then(() => {
            setShowModalFormDelete(false);
            setShowSuccessModal(true);
          });
        }}
        title="Delete Employee"
        message={'Are you sure you want to delete this employee?'}
      />
    );
  }

  return isLoading && !showModalFormEdit && !showModalFormDelete && !showSuccessModal ? (
    <section className={styles.containerPreloader}>
      <Preloader>
        <p>Loading Employees</p>
      </Preloader>
    </section>
  ) : (
    <section className={styles.container}>
      <h2 className={styles.employees}> Employees </h2>
      <Table
        data={employees}
        headers={['firstName', 'lastName', 'phone', 'email', 'active', 'projects']}
        titles={['First Name', 'Last Name', 'Phone', 'Email', 'Active', 'Projects']}
        delAction={(id) => {
          setEmployeeId(id);
          setShowModalFormDelete(true);
        }}
        modifiers={{
          active: (x) => (x ? 'Active' : 'Inactive'),
          isProjectManager: (x) => (x ? 'Yes' : 'No'),
          projects: (x) => (
            <Select
              title="Projects"
              defaultValue=""
              data={[...x.map((project) => project.name)]}
              disabled
              register={console.log}
            />
          )
        }}
        redirect={redirectAction}
      />
      {modalEdit}
      {modalDelete}
      {isLoading ? <Preloader /> : null}

      <ErrorSuccessModal
        show={showSuccessModal}
        closeModal={() => {
          setShowSuccessModal(false);
        }}
        closeModalForm={() => {
          setShowSuccessModal(false);
        }}
        successResponse={response}
      />
    </section>
  );
};

export default Employees;
