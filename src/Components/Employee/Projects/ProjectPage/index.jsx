import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, generatePath } from 'react-router-dom';
import { getEmployees, updateEmployee } from 'redux/employees/thunks';
import { getProjects, updateProject } from 'redux/projects/thunks';
import MemberForm from './MemberForm';
import {
  Preloader,
  Table,
  ModalForm,
  ConfirmModal,
  ErrorSuccessModal,
  ButtonText
} from 'Components/Shared';
import styles from './projectPage.module.css';

const ProjectPage = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { id } = useParams();
  const project = useSelector((state) => state.projects.list).find((project) => project._id === id);
  const isLoading = useSelector((state) => state.projects.isLoading);
  const employees = useSelector((state) => state.employees.list);
  const employeeId = useSelector((state) => state.auth.user?.data._id);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalErrorSuccess, setModalErrorSuccess] = useState(false);
  const [memberId, setMemberId] = useState(0);
  const [response, setResponse] = useState('');
  const [responseEmployee, setResponseEmployee] = useState('');
  const [isPM, setIsPM] = useState(false);

  let pm = project?.members.find((member) => member.role === 'PM');
  let modalAdd;
  let modalEdit;
  let modalDelete;
  let modalErrorSuccess;

  useEffect(() => {
    setIsPM(pm?.employeeId._id === employeeId);
  }, [pm]);

  useEffect(() => {
    dispatch(getProjects());
    dispatch(getEmployees());
  }, [!showModalDelete]);

  const redirectAction = (memberId) => {
    history.push(
      generatePath('/employee/projects/id=:id/members/id=:memberId', { id: id, memberId })
    );
  };

  const deleteMember = () => {
    dispatch(
      updateProject(
        project._id,
        {
          members: project.members
            .filter((member) => member.employeeId._id != memberId)
            .map((member) => ({
              employeeId: member.employeeId._id,
              role: member.role,
              rate: member.rate
            }))
        },
        setResponse
      )
    )
      .then(
        dispatch(
          updateEmployee(
            JSON.stringify({
              projects: employees
                .find((employee) => employee._id === memberId)
                .projects.filter((employeeProject) => employeeProject._id != project._id)
                .map((project) => project._id)
            }),
            memberId,
            setResponseEmployee
          )
        )
      )
      .then(() => {
        setShowModalDelete(false);
        setModalErrorSuccess(true);
        document.body.style.overflow = 'hidden';
      });
  };

  if (showModalAdd) {
    modalAdd = (
      <ModalForm
        isOpen={showModalAdd}
        handleClose={() => {
          setShowModalAdd(false);
        }}
        title="Add Member"
      >
        <MemberForm
          closeModalForm={() => {
            setShowModalAdd(false);
          }}
          project={project}
        />
      </ModalForm>
    );
  }

  if (showModalEdit) {
    modalEdit = (
      <ModalForm
        isOpen={showModalEdit}
        handleClose={() => {
          setShowModalEdit(false);
        }}
        title="Edit Member"
      >
        <MemberForm
          closeModalForm={() => {
            setShowModalEdit(false);
          }}
          project={project}
          memberId={memberId}
        />
      </ModalForm>
    );
  }

  if (showModalDelete) {
    modalDelete = (
      <ConfirmModal
        isOpen={showModalDelete}
        handleClose={() => {
          setShowModalDelete(false);
        }}
        confirmDelete={deleteMember}
        title="Remove Member"
        message={'Are you sure you want to remove this member?'}
      />
    );
  }

  if (showModalErrorSuccess) {
    modalErrorSuccess = (
      <ErrorSuccessModal
        show={showModalErrorSuccess}
        closeModal={() => {
          setModalErrorSuccess(false);
          document.body.style.overflow = 'unset';
        }}
        closeModalForm={() => {
          setModalErrorSuccess(false);
          document.body.style.overflow = 'unset';
        }}
        successResponse={{
          message: `${response.message}\n${
            responseEmployee.error
              ? responseEmployee.message
              : 'The employee has been removed from the project'
          }`,
          data: response.data,
          error: response.error
        }}
      ></ErrorSuccessModal>
    );
  }

  return isLoading &&
    !showModalAdd &&
    !showModalDelete &&
    !showModalEdit &&
    !showModalErrorSuccess ? (
    <section className={styles.containerPreloader}>
      <Preloader>
        <p>Loading Project</p>
      </Preloader>
    </section>
  ) : (
    <section className={styles.container}>
      <div className={styles.btnContainer}>
        <ButtonText
          label="Go back to Projects"
          clickAction={() => {
            history.push('/employee/projects');
          }}
        ></ButtonText>
      </div>
      <h2 className={styles.titleRole}>
        {isPM
          ? 'You are the PM of this project'
          : `You are ${
              project?.members.find((member) => member.employeeId._id === employeeId)?.role
            } on this project`}
      </h2>
      <div className={styles.box}>
        <div className={styles.field}>
          <h3>Project Name</h3>
          <p>{project?.name}</p>
        </div>
        <div className={styles.field}>
          <h3>Client</h3>
          <p>{project?.clientName}</p>
        </div>
        <div className={styles.field}>
          <h3>PM</h3>
          <p>{pm ? `${pm.employeeId?.firstName} ${pm.employeeId?.lastName}` : 'To be defined'}</p>
        </div>
        <div className={styles.field}>
          <h3>Start Date</h3>
          <p>{project?.startDate?.slice(0, 10)}</p>
        </div>
        {project?.endDate && (
          <div className={styles.field}>
            <h3>End Date</h3>
            <p>{project?.endDate?.slice(0, 10)}</p>
          </div>
        )}
        <div className={styles.field}>
          <h3>Active</h3>
          <p>{project?.active ? 'Active' : 'Inactive'}</p>
        </div>
        <div className={styles.fieldDescription}>
          <h3>Description</h3>
          <p>{project?.description}</p>
        </div>
      </div>
      <h2 className={styles.title}>Members</h2>
      {modalEdit}
      {modalDelete}
      {modalAdd}
      {modalErrorSuccess}
      <div className={isPM ? styles.divContainer : styles.divContainerNotPM}>
        {isPM ? (
          <div className={styles.btnContainerAdd}>
            <ButtonText
              label="ADD MEMBER"
              clickAction={() => {
                setShowModalAdd(true);
              }}
            ></ButtonText>
          </div>
        ) : null}
        {(project?.members.length && !isPM) || (project?.members.length > 1 && isPM) ? (
          <Table
            data={
              isPM
                ? project?.members.filter((member) => member.employeeId._id !== pm.employeeId._id)
                : project?.members
            }
            headers={['employeeId', 'role']}
            titles={['Name', 'Role']}
            modifiers={{
              employeeId: (x) => `${x.firstName} ${x.lastName}`
            }}
            delAction={
              isPM
                ? (id) => {
                    setMemberId(id);
                    setShowModalDelete(true);
                  }
                : null
            }
            editAction={
              isPM
                ? (id) => {
                    setMemberId(id);
                    setShowModalEdit(true);
                  }
                : null
            }
            redirect={isPM ? redirectAction : null}
            sort={{ employeeId: 1, role: 1 }}
            sortModifiers={{
              employeeId: (x) => x.firstName
            }}
          />
        ) : null}
      </div>
    </section>
  );
};

export default ProjectPage;
