import Record from "./Record";
import UserContext from "../../context/users/UserContext";
import { useContext } from "react";
export default function AvailabaleRecords({ role }) {
  const { records } = useContext(UserContext);
  console.log(records);
  return (
    <div className="columns is-multiline">
      {records.map((record) => {
        return (
          <div key={record._id} className="column is-one-quarter">
            <Record
              fname={record.firstName}
              sname={record.lastName}
              heartRate={record.heartRate}
              pulse={record.pulse}
              bp={record.bp}
              isFine={record.isFine}
              role={role}
            />
          </div>
        );
      })}
    </div>
  );
}
