import React, { useEffect, useState } from "react";
import { getAllRequests, getUserById, getClassById } from "../../Services/RequestService";
import "../../index.css"
const ReqList = () => {
  const [reqs, setReqs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reqsData = await getAllRequests();
        const requests = await Promise.all(reqsData.map(async (req) => {
          const userId = req.get("user").id;
          const needHelpWithId = req.get("needHelpWith").id;
          const canHelpWithId = req.get("canHelpWith").id;

          const user = await getUserById(userId);
          const needHelpWith = await getClassById(needHelpWithId);
          const canHelpWith = await getClassById(canHelpWithId);

          return {
            id: req.id,
            user,
            needHelpWith,
            canHelpWith,
          };
        }));

        setReqs(requests);
      } catch (error) {
        console.error("Error fetching requests: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="noncentered-body">
      
      <h2>Requests in the Database:</h2>
      <div>
        <p>Requests:</p>
        {reqs.length > 0 ? (
          <ul>
            {reqs.map((req) => (
              <li key={req.id}>
                {"Request ID: "}{req.id}{" | User Name: "}{req.user.get("firstName")}{" "}{req.user.get("lastName")}{" | User can help with class: "}{req.canHelpWith.get("ClassName")}{" | User needs help with class: "}{req.needHelpWith.get("ClassName").slice(1,-1)}
              </li>
            ))}
          </ul>
        ) : (
          <p>No requests available.</p>
        )}
      </div>
      <p>Matches coming soon...</p>
    </div>
  );
};

export default ReqList;