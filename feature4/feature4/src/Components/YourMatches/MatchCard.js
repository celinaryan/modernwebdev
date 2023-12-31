import "./../../matches_styles.css";
import { useNavigate } from "react-router-dom";
const MatchCard = ({ user, canHelpClass, needHelpClass }) => {
    const navigate = useNavigate();

    const handleStartChat = () => {
      navigate(`/buddychatroom/${user.id}`);
    }
    if (!user) return <div>Error: User information is not available.</div>;
    return (
        <div className="match-card">
        <div className="match-info-container">
          <h3 className="match-card-header">{user.name} {user.lastname}</h3>
          <h3 className="match-card-class">University: {user.university}</h3>
          <h3 className="match-card-class">Major: {user.major}</h3>
          <h3 className="match-card-class">Year: {user.year}</h3>
          {canHelpClass && <h3 className="match-card-class">Can help with class: {canHelpClass.name}</h3>}
          {needHelpClass && <h3 className="match-card-class">Needs help with class: {needHelpClass.name}</h3>}
        </div>
        <div className="button-container">
        <button className="match-card-button" onClick={() => handleStartChat(user.id)}>
            Start Chat
          </button>
        </div>
      </div>
    );
  };
  
  export default MatchCard;