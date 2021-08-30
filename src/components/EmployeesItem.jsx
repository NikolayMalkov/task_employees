import styles from './../css/employees_list.module.css'

export default function EmployeesItem({firstName, lastName}){
    return (
        <div className={styles.listItem}>
           
                <span>
                    <img className={styles.userIcon} src="userIcon.png" alt="" />
                    {firstName}
                </span>
                <span>
                    {lastName}
                </span>
                <span>
                    Закр.редакт.
                </span>
            
        </div>
    )
}