import { useState } from 'react';
import { deleteEmployee, updEmployee } from '../access/access';
import styles from './../css/employees_list.module.css'

export default function EmployeesItem({id, firstName, lastName}){

    const [modalEditVisible, setModalEditVisible] = useState(false);
    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);

    // Редактирование сотрудника

    function EditEmp() {

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');

        return (
            <div className={styles.modalWrap}>
                <div className={styles.modal}>
                    <img src="closeIcon.png" alt="close" onClick={() => setModalEditVisible(false)} />
                    <div className={styles.modal_header}>
                        <h3>Редактирование сотрудника</h3>
                    </div>
                    <div className={styles.modal_inputs}>
                        <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                        <button onClick={() => updEmployee(id, firstName, lastName)} >Сохранить</button>
                    </div>

                </div>
            </div>
        )
    }

    //Удаление сотрудника

    function RemoveEmp(){
        return (
            <div className={styles.modalWrap}>
                <div className={styles.modal}>
                    <img src="closeIcon.png" alt="close" onClick={() => setModalDeleteVisible(false)} />
                    <div className={styles.modal_header}>
                        <h3>Вы действительно хотите удалить сотрудника?</h3>
                    </div>
                    <div className={styles.modal_inputs}>
            
                        <button style={{backgroundColor: 'red'}} onClick={() => deleteEmployee(id)} >Удалить</button>
                    </div>

                </div>
            </div>
        )
    }

    // Лист сотрудника

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