//components
import Alert from "../../shared/Alert";
import FloatUp from "../../shared/FloatUp";
//contexts
import UserContext from "../../../context/users/UserContext";
import AlertContext from "../../../context/alert/AlertContext";
//actions
import { createRecord } from "../../../context/users/UserAction";
//react icons
import { MdDriveFileRenameOutline } from "react-icons/md";
//react hooks
import { useState, useContext } from "react";

export default function Register() {
  const { isLoading, dispatch } = useContext(UserContext);
  const { setAlert } = useContext(AlertContext);
  const [heartRate, setHeartRate] = useState("");
  const [pulse, setPulse] = useState("");
  const [bp, setBP] = useState("");
  const [saturation, setSaturation] = useState("");

  const clearFields = () => {
    setHeartRate("");
    setPulse("");
    setBP("");
    setSaturation("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING" });
    const response = await createRecord(heartRate, pulse, bp, saturation);
    if (response.success) {
      dispatch({ type: "CREATE_RECORD", payload: response.data });
      setAlert("Successfully submitted", "success");
      clearFields();
    } else {
      dispatch({ type: "UNSET_LOADING" });
      setAlert(response.msg, "danger");
    }
  };

  const isDataFilled = () => {
    console.log(heartRate);
    return heartRate !== "" && pulse !== "" && bp !== "" && saturation !== "";
  };

  return (
    <FloatUp>
      <form
        onSubmit={handleSubmit}
        className="is-flex is-flex-direction-column is-justify-content-center is-flex-wrap-wrap is-align-content-center"
      >
        <section className="container my-6 py-6">
          <div className="columns is-multiline">
            <div className="column is-half">
              <div className="field">
                <label className="label" htmlFor="firstName">
                  Heart Rate
                </label>
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input is-medium"
                    type="number"
                    name="heartRate"
                    placeholder="Heart Rate"
                    value={heartRate}
                    onChange={(e) => {
                      setHeartRate(e.target.value);
                    }}
                  />
                  <span className="icon is-small is-left">
                    <MdDriveFileRenameOutline />
                  </span>
                  <span className="icon is-small is-right"></span>
                </p>
              </div>
            </div>
            <div className="column is-half">
              <div className="field">
                <label className="label" htmlFor="lastName">
                  Pulse Rate
                </label>
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input is-medium"
                    type="number"
                    name="pulseRate"
                    placeholder="Pulse Rate"
                    value={pulse}
                    onChange={(e) => {
                      setPulse(e.target.value);
                    }}
                  />
                  <span className="icon is-small is-left">
                    <MdDriveFileRenameOutline />
                  </span>
                  <span className="icon is-small is-right"></span>
                </p>
              </div>
            </div>
            <div className="column is-half">
              <div className="field">
                <label className="label" htmlFor="lastName">
                  Blood Pressure
                </label>
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input is-medium"
                    type="number"
                    name="bp"
                    placeholder="Blood Pressure"
                    value={bp}
                    onChange={(e) => {
                      setBP(e.target.value);
                    }}
                  />
                  <span className="icon is-small is-left">
                    <MdDriveFileRenameOutline />
                  </span>
                  <span className="icon is-small is-right"></span>
                </p>
              </div>
            </div>
            <div className="column is-half">
              <div className="field">
                <label className="label" htmlFor="lastName">
                  Saturation
                </label>
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input is-medium"
                    type="number"
                    name="saturation"
                    placeholder="Saturation"
                    value={saturation}
                    onChange={(e) => {
                      setSaturation(e.target.value);
                    }}
                  />
                  <span className="icon is-small is-left">
                    <MdDriveFileRenameOutline />
                  </span>
                  <span className="icon is-small is-right"></span>
                </p>
              </div>
            </div>
          </div>
          <div className="field level">
            <p className="control level-item">
              {isDataFilled() ? (
                <button
                  className={`button is-success is-medium ${
                    isLoading && "is-loading"
                  }`}
                >
                  Submit
                </button>
              ) : (
                <button className={"button is-success is-medium"} disabled>
                  Submit
                </button>
              )}
            </p>
          </div>
          <Alert />
        </section>
      </form>
    </FloatUp>
  );
}
