import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

function EligiblityResult(props) {
  console.log(props.result);
  return (
    <div>
      {props.result ? (
        <div style={{ textAlign: "center" }}>
          <h2>
            <CancelIcon color="error" fontSize="large" />
            <br />
            Sorry!!! You cant be added as a Donor,
            <br />
            Reason: Disease
          </h2>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>
            <CheckCircleIcon fontSize="large" style={{ color: "green" }} />
            <br />
            Congratulations!!! You are now added as a Donor
          </h2>
        </div>
      )}
    </div>
  );
}

export default EligiblityResult;
