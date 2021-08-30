import { useEffect } from 'react';
import axios from 'axios';
import styles from './../css/employees_list.module.css';
import EmployeesItem from './EmployeesItem';
import { useState } from 'react';

export default function EmployeesList() {

    const [persons, setPersons] = useState();

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/person'
        })
        .then((res) => setPersons(res.data))
    },[])

    return (
        <div className={styles.container}>
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
                    persons.map((person) => <li> <EmployeesItem 
                                                    firstName={person.firstName}
                                                    lastName={person.lastName}  /> 
                                            </li> )}
               
                
            </ul>
        </div>
    )
}