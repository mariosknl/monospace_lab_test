import React from "react";
import { Form } from "react-bootstrap";

const SwitchButton = ({ checked, handleChange, user }) => {
  return (
    <div>
      <>
        <Form.Check
          type="switch"
          id={user.id}
          checked={checked}
          onChange={() => handleChange(user, checked)}
        />
      </>
    </div>
  );
};

export default SwitchButton;
