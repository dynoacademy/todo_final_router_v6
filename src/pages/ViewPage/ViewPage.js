import { Link, useNavigate, useParams } from "react-router-dom";
import AuthCheckBoolean from "../../middleware/AuthCheckBoolean";
import NavBar from "../NavBar";

const ViewPage = () => {
  const navigate = useNavigate();

  const getParams = useParams();

  const getID = getParams.id;

  const getStorage = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  const getData = getStorage[getID];

  // Query parse...

  // const getLocation = useLocation();

  // const getURLParams = new URLSearchParams(getLocation.search);

  // const getID = getURLParams.get("id");

  // console.log(getID);

  // const getData = getStorage[getID];

  // console.log(getLocation.search);

  const deleteTodo = () => {
    getStorage.splice(getID, 1);

    localStorage.setItem("todo", JSON.stringify(getStorage));

    navigate("/", { replace: true });
  };

  return (
    <>
      <NavBar />

      <div className="todo_container">
        <button
          onClick={() => {
            navigate("/");
          }}
          style={{ background: "#e7e7e7", color: "#666" }}
        >
          Go Back
        </button>
        <div
          style={{
            background: "#e7e7e7",
            padding: "20px",
            fontSize: "20px",
            margin: "20px",
          }}
        >
          {getData}
        </div>
        {AuthCheckBoolean() ? (
          <>
            <button style={{ background: "red" }} onClick={deleteTodo}>
              {" "}
              Delete To-do
            </button>
          </>
        ) : (
          <>
            <p>
              Login to see more options <Link to="/login">Login now!</Link>
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default ViewPage;
