import { Alert, Button, Col, Divider, Row } from "antd";
import { VerticalAlignBottomOutlined } from "@ant-design/icons";
import React from "react";
import {
  ButtonsDownload,
  ContentWrapper,
  DownloadParagraph,
  DownloadSign,
  IconVisability,
  PayHeader,
  Slash,
} from "../../styles/Pay";
import Navigation from "../Navigation";

function Pay() {
  return (
    <div>
      <Navigation />
      <Divider />
      <Row justify="center">
        <Col span={23} style={{maxWidth: "600px"}} >
            <Alert
              style={{ border: "none" }}
              message="Договор бронирования подписан"
              description="Теперь можно перейти к оплате"
              type="info"
              showIcon
            />
            <PayHeader className="header">Оплата объекта</PayHeader>
            <p>
              Денежные средства не списываются с карты (оплата), а только
              резервируются, сумма будет списана после выполнения условий
              договора.
            </p>
            <p>
              Сумма будет возвращена в полном объёме, если договор не будет
              исполнен.
            </p>

            <Row>
              <Col xs={24} md={11} style={{width: "max-content"}}>
                <Button type="link" style={{ lineHeight: "0px" }}>
                  <ButtonsDownload className="button-filling">
                    <VerticalAlignBottomOutlined size={16} />
                    <DownloadParagraph>
                      Скачать договор бронирования
                    </DownloadParagraph>
                  </ButtonsDownload>
                </Button>
              </Col>
              <Col style={{width: 'max-content'}}>
                <Slash style={{paddingTop: "4px"}}>/</Slash>
              </Col>
              <Col xs={24} md={10}>
                <Button type="link" style={{ lineHeight: "0px" }}>
                  <ButtonsDownload className="button-filling">
                    <IconVisability>
                      <VerticalAlignBottomOutlined size={16} />
                    </IconVisability>
                    <DownloadSign>Ваша подпись</DownloadSign>
                  </ButtonsDownload>
                </Button>
              </Col>
            </Row>
              <Button type="primary" style={{marginTop: "10px"}}>Оплатить</Button>
        </Col>
      </Row>
      <Divider />
    </div>
  );
}

export default Pay;
