import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import { Form, Button } from "react-bulma-components";

// Step 2: Define your component
const IndexPage = () => {
  const { Input, Field, Control, Label } = Form;
  const [organization, setOrganization] = useState("");
  const [opportunity, setOpportunity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [revenue, setRevenue] = useState("");
  return (
    <form className="">
      <Form.Field>
        <Form.Label>Organization / Contact</Form.Label>
        <Form.Control>
          <Form.Input
            color="success"
            value={organization}
            onChange={(e) => {
              return setOrganization(e.target.value);
            }}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>Opportunity</Form.Label>
        <Form.Control>
          <Form.Input
            color="info"
            value={opportunity}
            onChange={(e) => {
              return setOpportunity(e.target.value);
            }}
            placeholder="e.g Product Pricing"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>Email</Form.Label>
        <Form.Control>
          <Form.Input
            color="success"
            value={email}
            onChange={(e) => {
              return setEmail(e.target.value);
            }}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>Phone</Form.Label>
        <Form.Control>
          <Form.Input
            color="success"
            value={phone}
            onChange={(e) => {
              return setPhone(e.target.value);
            }}
          />
        </Form.Control>
      </Form.Field>

      <Form.Field>
        <Form.Label>Expected Revenue</Form.Label>
        <Form.Control>
          <Form.Input
            color="success"
            value={revenue}
            onChange={(e) => {
              return setRevenue(e.target.value);
            }}
            placeholder="S$0.00"
          />
        </Form.Control>
      </Form.Field>

      <Form.Field kind="group">
        <Form.Control>
          <Button color="link">Add</Button>
        </Form.Control>
        <Form.Control>
          <Button color="link">Edit</Button>
        </Form.Control>
        <Form.Control>
          <Button color="link" colorVariant="light">
            Discard
          </Button>
        </Form.Control>
      </Form.Field>
    </form>
  );
};
// Step 3: Export your component
export default IndexPage;
