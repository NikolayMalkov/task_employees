import { useState } from 'react';
import styles from './../css/employees_list.module.css'

export default function EmployeesItem({firstName, lastName}){

    const [modalEditVisible, setModalEditVisible] = useState(false);
    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);

    function EditEmp() {
        return (
            <div className={styles.modalWrap}>
                <div className={styles.modal}>
                    <img src="closeIcon.png" alt="close" onClick={() => setModalEditVisible(false)} />
                    <div className={styles.modal_header}>
                        <h3>Редактирование сотрудника</h3>
                    </div>
                    <div className={styles.modal_inputs}>
                        <input type="text" name="firstName" />
                        <input type="text" name="lastName" />
                        <button>Сохранить</button>
                    </div>

                </div>
            </div>
        )
    }

    function RemoveEmp(){
        return (
            <div className={styles.modalWrap}>
                <div className={styles.modal}>
                    <img src="closeIcon.png" alt="close" onClick={() => setModalDeleteVisible(false)} />
                    <div className={styles.modal_header}>
                        <h3>Вы действительно хотите удалить сотрудника?</h3>
                    </div>
                    <div className={styles.modal_inputs}>
            
                        <button style={{backgroundColor: 'red'}}>Удалить</button>
                    </div>

                </div>
            </div>
        )
    }

    return (
        <div className={styles.listItem}>

            {modalDeleteVisible ? <RemoveEmp /> : null}
            {modalEditVisible ? <EditEmp /> : null}
           
                <span>
                    <img className={styles.userIcon} src="userIcon.png" alt="" />
                    {firstName}
                </span>
                <span>
                    {lastName}
                </span>
                <span>
                        <img src="editIcon.png" alt="edit" onClick={() => setModalEditVisible(true)} />
                        <img src="deleteIcon.png" alt="png" onClick={() => setModalDeleteVisible(true)} />
                </span>
            
        </div>
    )
}