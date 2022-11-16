import { Col, Divider, Row, Spin } from "antd";
import Countdown from "antd/lib/statistic/Countdown";
import React from "react";
import { ContentWrapper, Subheader } from "../../styles/SubscriptionWaiting";
import Navigation from "../Navigation";

function SubscriptionWaiting() {
  return (
    <div>
        <Navigation/>
      <Divider />
      <Row justify="center">
        <Col span={24}>
          <ContentWrapper>
            <Spin />
            <Countdown value={Date.now() + 14400 * 1000} />
            <Subheader className="subheader">
              Договор направлен в мобильное приложение Госключ, подпишите его в
              мобильном приложении. Документ будет доступен в мобильном
              приложении Госключ в течение 24 часов, по истечении этого времени
              документ нужно будет направить повторно, начав процедуру
              бронирования заново.
            </Subheader>
          </ContentWrapper>
        </Col>
      </Row>
      <Divider/>

    </div>
  );
}

export default SubscriptionWaiting;
