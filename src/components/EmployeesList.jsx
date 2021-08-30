import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './../css/employees_list.module.css';
import EmployeesItem from './EmployeesItem';
import { addEmployee } from '../access/access';

export default function EmployeesList() {

    const [modalVisible, setModalVisible] = useState(false)
    const [persons, setPersons] = useState()



    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/person'
        })
            .then((res) => setPersons(res.data))
    }, [])


    // Добавление сотрудника

    function AddingEmp() {

        const [fName, setFName] = useState("")
        const [lName, setLName] = useState("")

        return (
            <div className={styles.modalWrap}>
                <div className={styles.modal}>
                    <img src="closeIcon.png" alt="close" onClick={() => setModalVisible(false)} />
                    <div className={styles.modal_header}>
                        <h3>Создание сотрудника</h3>
                    </div>
                    <div className={styles.modal_inputs}>            
                             <input type="text" name="fName" id="fname_field" value={fName} onChange={e => setFName(e.target.value)}></input>
                             <input type="text" name="lName" id="lname_field"  value={lName} onChange={e => setLName(e.target.value)}></input>                     
                        <button onClick={() => addEmployee(fName, lName)}>Сохранить</button>
                    </div>

                </div>
            </div>
        )
    }

    // Список сотрудников


    return (
        <div className={styles.container}>
            {modalVisible ? <AddingEmp /> : null}
            <div className={styles.table_header}>
                <div className={styles.header_items}>

                    <span>
                        Имя
                    </span>
                    <span>
                        Фамилия
                    </span>
                    <span>
                        
                    </span>

                </div>
            </div>

            <ul className={styles.employees_table}>

                {persons === undefined ? null :
                    persons.map((person) =>
                        <li> <EmployeesItem
                            key={person.id}
                            id={person.id}
                            firstName={person.firstName}
                            lastName={person.lastName} />
                        </li>)}
            </ul>
            <button onClick={() => setModalVisible(true)} className={styles.add_btn}>Добавить сотрудника</button>
        </div>
    )
}