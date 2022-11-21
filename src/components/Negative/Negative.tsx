import { Alert, Col, Divider, Row } from "antd";
import React from "react";
import {ContentWrapper} from "../../styles/Helpers"
import Navigation from "../Navigation";
function Negative(){
    return(
        <div>
                  <Navigation/>
            <Divider/>
            <Row justify="center">
                <Col span={24}>
                    <ContentWrapper>
                    <Alert
              message="Подписание отменено"
              description="Подписание договора было отменено в мобильном приложении Госключ"
              type="error"
              showIcon
            />
                    </ContentWrapper>
                </Col>
            </Row>
            <Divider/>

        </div>
    )
}

export default Negative