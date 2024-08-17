import { PropsWithChildren } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { EmptyRowCol } from '.';
import { Style } from './Style';

export function CommonSection({ title, children }: PropsWithChildren<{ title: string }>) {
  if (title === 'PROJECT') {
    return (
      <div className="mt-5">
        <EmptyRowCol>
          <Row className="pb-3">
            <Col>
              <h2 style={Style.blue}>
                <span>{title}</span>
              </h2>
            </Col>
            <a href="https://drive.google.com/file/d/1DLz8FZ-kCKKXAZbaFG9Flvuw1RNxj2uP/view?usp=sharing">
              {' '}
              <Button> 포트폴리오 다운받기 </Button>{' '}
            </a>
          </Row>
          {children}
        </EmptyRowCol>
      </div>
    );
  }
  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 style={Style.blue}>
              <span>{title}</span>
            </h2>
          </Col>
        </Row>
        {children}
      </EmptyRowCol>
    </div>
  );
}
