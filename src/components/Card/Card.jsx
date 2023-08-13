import { deleteTask } from 'redux/boards/operations';
import sprite from '../../images/sprite.svg';
import styles from './Card.module.css';
import { useDispatch } from 'react-redux';
import { EditTaskCard } from 'components/EditTaskCard/EditTaskCard';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ task, index }) => {
  const { _id: id, title, description, priority, deadline } = task;
  const dispatch = useDispatch();
  const onDeleteClick = () => {
    dispatch(deleteTask(id));
  };
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className={`${styles.card} ${styles[`priority_${priority}`]}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={styles.textWrapper}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.priority}>
              <h5 className={styles.subTitle}>Priority</h5>
              <p
                className={`${styles.priorityText} ${
                  styles[`priority_${priority}`]
                }`}
                >
                {priority}
              </p>
            </div>
            <div className={styles.deadline}>
              <h5 className={styles.subTitle}>Deadline</h5>
              <p className={styles.deadlineText}>{deadline}</p>
            </div>
            <ul className={styles.cardIcons}>
              <li className={styles.cardIcon}>
                <button className={styles.cardButton}>
                  <svg
                    width={16}
                    height={16}
                    aria-label="icon-bell"
                    className={styles.bell}
                  >
                    <title>Deadline</title>
                    <use href={sprite + '#icon-bell'} />
                  </svg>
                </button>
              </li>
              <li className={styles.cardIcon}>
                <button className={styles.cardButton}>
                  <svg
                    width={16}
                    height={16}
                    aria-label="icon-arrow-circle-broken-right"
                    className={styles.svg}
                    >
                    <title>Move task</title>
                    <use href={sprite + '#icon-arrow-circle-broken-right'} />
                  </svg>
                </button>
              </li>
              <li className={styles.cardIcon}>
                {/* <button className={styles.cardButton}>
                  <svg
                  width={16}
                  height={16}
                  aria-label="icon-pencil"
                  className={styles.svg}
                  >
                  <title>Pencil Icon</title>
                  <use href={sprite + '#icon-pencil'} />
                  </svg>
                </button> */}
                <EditTaskCard task={task} />
              </li>
              <li className={styles.cardIcon}>
                <button className={styles.cardButton} onClick={onDeleteClick}>
                  <svg
                    width={16}
                    height={16}
                    aria-label="icon-trash"
                    className={styles.svg}
                    >
                    <title>Trash Icon</title>
                    <use href={sprite + '#icon-trash'} />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
