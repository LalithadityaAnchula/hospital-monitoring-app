//Components
import FloatDown from "../../shared/FloatDown";
import Loader from "../../shared/Loader";
import Alert from "../../shared/Alert";
//contexts
import UserContext from "../../../context/users/UserContext";
import AlertContext from "../../../context/alert/AlertContext";
//Actions
import { getPatinetRecords } from "../../../context/users/AdminAction";
import { getHealthRecords } from "../../../context/users/UserAction";
//React Hooks
import { useState, useContext, useEffect, useRef } from "react";
//Components
import AvailableRecords from "../../shared/AvailableRecords";
//React icons
import { FiSearch } from "react-icons/fi";

export default function AdminHome() {
  const { isLoading, dispatch } = useContext(UserContext);
  const { setAlert } = useContext(AlertContext);
  const [searchTarget, setSearchTarget] = useState("");
  const prevSearchTarget = useRef("");
  const [recordSearchResults, setRecordSearchResults] = useState([]);
  const [isSearchResulstNone, setIsSearchResultsNone] = useState(false);
  const isSearchTargetValid = /^[a-zA-Z]+$/.test(searchTarget);

  useEffect(() => {
    if (
      (isSearchTargetValid &&
        searchTarget.length >= 3 &&
        !isSearchResulstNone) ||
      searchTarget === ""
    ) {
      dispatch({ type: "SET_LOADING" });
      const fetchResults = async () => {
        const response = await getPatinetRecords(searchTarget);
        if (response.success) {
          setRecordSearchResults(response.data);
          const noResults = response.data.length === 0;
          prevSearchTarget.current = noResults ? searchTarget : "";
          setIsSearchResultsNone(
            noResults
              ? searchTarget.startsWith(prevSearchTarget.current)
              : false
          );
          dispatch({
            type: "GET_RECORDS",
            payload: response.data,
          });
        } else {
          setAlert(response.msg, "danger");
          dispatch("UNSET_LOADING");
        }
      };
      fetchResults();
    } else if (searchTarget === "") {
      dispatch({ type: "SET_LOADING" });
      const fetchResults = async () => {
        const response = await getHealthRecords(searchTarget);
        if (response.success) {
          setRecordSearchResults(response.data);
          const noResults = response.data.length === 0;
          prevSearchTarget.current = noResults ? searchTarget : "";
          setIsSearchResultsNone(
            noResults
              ? searchTarget.startsWith(prevSearchTarget.current)
              : false
          );
          dispatch({
            type: "GET_RECORDS",
            payload: response.data,
          });
        } else {
          setAlert(response.msg, "danger");
          dispatch("UNSET_LOADING");
        }
      };
      fetchResults();
    } else if (isSearchResulstNone) {
      setIsSearchResultsNone(searchTarget.startsWith(prevSearchTarget.current));
    }
  }, [
    dispatch,
    searchTarget,
    isSearchTargetValid,
    setAlert,
    isSearchResulstNone,
  ]);

  return (
    <>
      <main className="section">
        <div className="section columns">
          <div className="column is-half is-offset-one-quarter">
            <FloatDown>
              <div className="field">
                <div
                  className={`control is-large has-icons-left ${
                    isLoading && "is-loading"
                  }`}
                >
                  <input
                    type="text"
                    className={`input is-medium is-rounded ${
                      !isSearchTargetValid && searchTarget && "is-danger"
                    }`}
                    value={searchTarget}
                    onChange={(e) => setSearchTarget(e.target.value)}
                  />
                  <div className="fix-height-16 help is-danger has-text-centered">
                    {!isSearchTargetValid &&
                      searchTarget !== "" &&
                      "Invalid search target"}
                    <Alert />
                  </div>
                  <span className="icon is-large is-left">
                    <FiSearch color="blue" />
                  </span>
                </div>
              </div>
            </FloatDown>
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {searchTarget !== "" && recordSearchResults.length > 0 && (
              <h2 className="mx-4 my-5 title is-4 has-text-grey">
                Matched Patient Records
              </h2>
            )}

            <AvailableRecords />
          </>
        )}
      </main>
    </>
  );
}
