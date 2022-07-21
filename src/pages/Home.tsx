import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <div className="header">Home</div>
      <div className="body">
        <button onClick={logout}>Sair</button>
      </div>
    </div>
  );
};

export default Home;