import { Accordion } from 'react-bootstrap';

function ProfileSettingSection({ title, eventKey, children }) {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>
        {children}
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default ProfileSettingSection;

