import React from "react";
import { MdOutlineTag } from "react-icons/md";
import { Card, Col } from "react-bootstrap";

const EntriesItem = ({ entry }) => {
  return (
    <Col md={6} xl={4} className="my-3">
      <Card border="dark">
        <Card.Header as="h6" className="">
          <MdOutlineTag /> {entry.Category}
        </Card.Header>
        <Card.Body>
          <Card.Title title={entry.API} className="text-truncate">
            {entry.API}{" "}
          </Card.Title>
          {/* <Card.Subtitle>{entry.Auth ? entry.Auth : "No Auth"}</Card.Subtitle> */}

          <Card.Text title={entry.Description} className="text-truncate">
            {entry.Description}
          </Card.Text>
          {/* <OverlayTrigger placement="top" overlay={renderToolip}>
          </OverlayTrigger> */}

          <Card.Link
            href={entry.Link}
            target="_blank"
            // variant="outline-secondery"
          >
            Link api
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default EntriesItem;
