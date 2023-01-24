import NavBar from "../NavBar";

import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthCheck from "../../middleware/AuthCheck";

const MainPage = () => {
  const getTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  return (
    <>
      <NavBar />

      <div className="todo_container">
        <h3>Your to-do:</h3>

        {getTodo && getTodo.length > 0 ? (
          <>
            {getTodo.map((el, index) => (
              <>
                <div className="single_todo">
                  {el}

                  <div>
                    <Link to={`/view/${index}`}>
                      <FaRegEye size={"20px"} />
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </>
        ) : (
          <>
            <center>
              {" "}
              Nothing on your to-do. Please <Link to="/add">Add some</Link>
            </center>
          </>
        )}

        {/* <div className="single_todo">Todo 1</div>
        <div className="single_todo">Todo 2</div> */}
      </div>
    </>
  );
};

export default MainPage;
