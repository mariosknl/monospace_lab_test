import { Badge } from "react-bootstrap";

const roleType = (type) => {
  switch (type) {
    case "Supervisor":
      return <Badge variant="dark">CO</Badge>;
    case "Stakeholder":
      return <Badge variant="light">SU</Badge>;
    case "Employee":
      return <Badge variant="danger">EM</Badge>;
    case "Guest":
      return <Badge variant="info">GU</Badge>;
    default:
      return <Badge variant="warning">CR</Badge>;
  }
};

export default roleType;
