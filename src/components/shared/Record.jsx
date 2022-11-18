import FloatUp from "./FloatUp";
import ExpandOnHover from "./ExpandOnHover";
export default function Record({ fname, sname, heartRate, pulse, bp, isFine }) {
  return (
    <ExpandOnHover>
      <FloatUp>
        <div
          className={`card ${
            isFine ? "has-background-primary-light" : "has-background-danger"
          }`}
        >
          <div className="card-header">
            <div style={{ textAlign: "center" }}>
              <p>{fname + " " + sname}</p>
            </div>
          </div>
          <div className="section">
            <div className="level">
              <div className="level-left">
                <p>Heart Rate</p>
              </div>
              <div className="level-right">
                <p>{heartRate}</p>
              </div>
            </div>
            <div className="level">
              <div className="level-left">
                <p>Pulse Rate</p>
              </div>
              <div className="level-right">
                <p>{pulse}</p>
              </div>
            </div>
            <div className="level">
              <div className="level-left">
                <p>Blood Pressure</p>
              </div>
              <div className="level-right">
                <p>{bp}</p>
              </div>
            </div>
          </div>
        </div>
      </FloatUp>
    </ExpandOnHover>
  );
}
