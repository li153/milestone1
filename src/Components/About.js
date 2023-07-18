import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const About = () => {
  const teamMembers = [
    {
      name: 'Likit',
      role: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:'https://w7.pngwing.com/pngs/449/734/png-transparent-businessperson-cartoon-man-hand-boy-cartoon.png'
    },
    {
      name: 'Joshua',
      role: 'Lead Developer',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij89EKhtm2Wqg5MqTLdVKC9rZvOezJ77wEhcUpFEAAg&s'
    },
    {
      name: 'Harshith',
      role: 'Lead Developer',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:'https://img.freepik.com/premium-vector/business-man-cartoon-character-smart-clothes-office-style_51635-5680.jpg?w=2000'
    },
  ];

  return (
    <Container>
      <h1>About Page</h1>

      <Row>
        {teamMembers.map((member, index) => (
          <Col key={index} md={4}>
            <Card className="mb-4">
              {member.image && (
                //<Card.Img variant="top" src={member.image} alt={member.name} />
                <Card.Img variant="top" src={member.image} alt={member.name} style={{ width: '350px', height: '350px' }} />

              )}
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                <Card.Text>{member.description}</Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default About;
