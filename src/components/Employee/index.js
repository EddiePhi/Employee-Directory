import React from "react";
import "./style.css";

function Employee(props) {
  return (
    <ul>
      {props.employees.map(employee =>
        <>
          <div className='card text-white bg-info mb-3' style={{ maxWidth: '18rem' }} key={employee.id}>
            <div className='card-header'>{employee.first_name} {employee.last_name}
            </div>
            <div className='card-body'>
              <p className='card-text'>
                {employee.email}
                <br />
                Rank: {employee.Job_Title}
              </p>
            </div>
          </div>
        </>
      )
    }
    </ul>
  );
}

export default Exmployee;