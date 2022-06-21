import { useState, useEffect } from 'react';
import styles from './form.module.css';
import Select from '../../Shared/Select/index';
import Input from '../../Shared/Input/index';
import ButtonText from '../../Shared/Buttons/ButtonText/index';
import ErrorSuccessModal from '../../Shared/ErrorSuccessModal/index';
import { useDispatch } from 'react-redux';
import { createTimesheet } from '../../../redux/time-sheets/thunks';
import * as Joi from 'joi';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

const timesheetValidation = Joi.object({
  project: Joi.string()
    .alphanum()
    .length(24)
    .messages({
      'string.alphanum': 'Invalid project id, it must contain both letters and numbers',
      'string.length': 'Invalid project id, it must contain 24 characters'
    })
    .required(),
  task: Joi.string()
    .alphanum()
    .length(24)
    .messages({
      'string.alphanum': 'Invalid task id, it must contain both letters and numbers',
      'string.length': 'Invalid task id, it must contain 24 characters'
    })
    .required(),
  approved: Joi.boolean().required()
});

const FormAdd = ({ closeModalForm }) => {
  const dispatch = useDispatch();
  const [listTask, setListTask] = useState([]);
  const [listProject, setListProject] = useState([]);
  const [task, setTask] = useState('');
  const [projectId, setProjectId] = useState('');
  const [approved, setApproved] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessageModal, setShowMessageModal] = useState(false);

  const fetchTask = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/tasks`);
      const data = await response.json();
      setListTask(...listTask, data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProject = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/projects`);
      const data = await response.json();
      setListProject(...listProject, data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTask();
    fetchProject();
  }, []);

  const onSubmit = () => {
    dispatch(createTimesheet(projectId, task, approved, setMessage)).then(() => {
      setShowMessageModal(true);
    });
  };

  const onChangeProject = (e) => {
    setProjectId(e.target.value);
  };

  const handleSelectedTask = (e) => {
    setTask(e.target.value);
  };

  const onChangeApproved = (e) => {
    setApproved(e.target.checked);
  };

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: joiResolver(timesheetValidation),
    defaultValues: {
      project: '',
      task: '',
      approved: false
    }
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Select
        label="Projects"
        name="project"
        value={projectId}
        onChange={onChangeProject}
        title="Choose project"
        data={listProject.map((project) => ({
          _id: project._id,
          optionText: project.name
        }))}
        required={true}
        register={register}
        error={errors.project?.message}
      />
      <Select
        label="Tasks"
        name="task"
        value={task}
        onChange={handleSelectedTask}
        title="Choose task"
        data={listTask.map((task) => ({
          _id: task._id,
          optionText: task.taskName
        }))}
        required={true}
        register={register}
        error={errors.task?.message}
      />
      <Input
        label="Approved"
        name="approved"
        type="checkbox"
        checked={approved}
        onChange={onChangeApproved}
        register={register}
        error={errors.approved?.message}
      />
      <ButtonText
        clickAction={() => {
          closeModalForm();
        }}
        label="Cancel"
      />
      <ButtonText clickAction={handleSubmit(onSubmit)} label="Create" />
      <ErrorSuccessModal
        show={showMessageModal}
        closeModal={() => {
          setShowMessageModal(false);
        }}
        closeModalForm={closeModalForm}
        successResponse={message}
      />
    </form>
  );
};

export default FormAdd;
