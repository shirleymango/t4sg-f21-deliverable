import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { useQuery } from "urql";
import { Box } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

type CaseCardProps = {
  data: CaseData;
};

export type CaseData = {
  name: string;
  status: string;
  description: string;
  id: number;
};


const CaseCard: React.FC<CaseCardProps> = (props) => {
  const caseData = props.data;

  return (
    <Container>
      <div style={{ width: "100%", padding: "5px" }}>
        <Card body style={{ backgroundColor: "#e4ebf5" }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <CardTitle tag="h3">{caseData.name}</CardTitle>
            <button id="star" onClick={() => myFunction()}>X</button>
          </Box>

          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {caseData.status}
          </CardSubtitle>
          <CardText>{caseData.description}</CardText>
        </Card>
      </div>
    </Container>
  );
};

function myFunction() {
  window.alert("Warning: you will be deleting this case.");
}

export default CaseCard;
