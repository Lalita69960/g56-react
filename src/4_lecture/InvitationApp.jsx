import React, {useEffect, useState} from "react";
import {FaCheck, FaTimes, FaTrash} from "react-icons/fa";
import AlertMessage from "./AlertMessage.jsx";
import axios from "axios";
import InvitationForm from "./InvitationForm.jsx";


export const apiEndpoint = "http://localhost:8080/api/invitations";

const InvitationApp = () => {

    const [invitations, setInvitations] = useState([]);

    const [alert, setAlert] = useState(null); // { variant: "success"|"danger"|..., message: string

    useEffect(() => {
        fetchAllInvitations();
    }, []);


    const fetchAllInvitations = async () => {
        console.log("Step1: Starting to fetch invitations...");
        await axios.get(apiEndpoint)
            .then(
                (response) => {
                    console.log("Step2: Response received.", response);


                    if (response.status === 200) {
                        console.log("Response: ", response.data);
                        setInvitations(response.data);
                        console.log(
                            "Step3: Invitations successfully fetched and state updated."
                        );
                    } else {
                        console.error("Unexpected response status:", response.status);
                    }
                }
            ).catch((error) => {
                console.error("Error occurred during the API call.");

            })
        console.log("Step4: Finished fetching invitations.");
    }

    const updateInvitationStatus = async (id, newStatus) => {

        //http://localhost:8080/api/invitations/1?status=accepted

        try {
            const response = await axios.put(`${apiEndpoint}/${id}?status=${newStatus}`);

            if (response.status === 204) {
                fetchAllInvitations();
                console.log("Invitation status updated successfully.");
                setAlert({variant: "success", message:
                        newStatus === "accepted" ?
                            "Invitation Accepted."
                            : newStatus === "declined"
                                ? "Invitation declined."
                                : "Invitation updated."})
            }
        }catch (error){
            console.error("Error updating invitation:", error);
        }

    };

    const deleteInvitation = async (id) => {

        try{
            const response = await axios.delete(`${apiEndpoint}/${id}`);
            if (response.status === 204){
                fetchAllInvitations();
                console.log("Invitation deleted successfully.");
                setAlert({ variant: "success", message: "Invitation removed." });
            }
        }catch(error){
            console.error("Error deleting invitation:", error);
        }
    };

    const handleInvitationAdded = (msg = "invitation Was Successful!") => {
        fetchAllInvitations();
        setAlert({ variant: "success", msg })
    }



    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Your Invitations</h2>
            {/* Alert area*/}

            {
                alert && (
                    <AlertMessage variant={alert.variant} onClose={() => setAlert(null)} autoClose={3000}>
                        {alert.message}
                    </AlertMessage>
                )
            }


            {/* Add Invitation Form */}
        <InvitationForm onInvitationAdded={handleInvitationAdded} />

            {/* Invitations Table */}
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Invitation</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>

                {
                    invitations.map((invitation, index) => (
                        <tr key={invitation.id}>
                            <td>{index + 1}</td>
                            <td>{invitation.title}</td>
                            <td>{invitation.date}</td>
                            <td>{invitation.time}</td>
                            <td>{invitation.location}</td>

                            <td>
                  <span
                      className={`badge ${invitation.status === "accepted" ? "bg-success" : invitation.status === "declined" ? "bg-danger" : "bg-warning text-dark"}`}>
                    {invitation.status.charAt(0).toUpperCase() + invitation.status.slice(1)}
                  </span>
                            </td>
                            <td>

                                {invitation.status === "pending" && (
                                   <>
                                       <button className="btn btn-sm btn-success me-2"
                                       onClick={() => updateInvitationStatus(invitation.id, "accepted")}>
                                           <FaCheck/> Accept
                                       </button>
                                       <button className="btn btn-sm btn-danger me-2"
                                               onClick={() => updateInvitationStatus(invitation.id, "declined")}>
                                           <FaTimes/> Decline
                                       </button>
                                   </>
                                )}

                                <button className="btn btn-sm btn-secondary"
                                onClick={()=> deleteInvitation(invitation.id)}>
                                    <FaTrash/> Remove
                                </button>

                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </table>

        </div>
    );
};

export default InvitationApp;
