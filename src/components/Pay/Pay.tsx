import { Alert, Button, Col, Divider, Row } from "antd";
import { VerticalAlignBottomOutlined } from "@ant-design/icons";
import React from "react";
import {
  Buttons,
  ButtonsDownload,
  ContentWrapper,
  DownloadParagraph,
  PayHeader,
} from "../../styles/Pay";
import Navigation from "../Navigation";

function Pay() {
  return (
    <div>
      <Navigation />
      <Divider />
      <Row justify="center">
        <Col span={24}>
          <ContentWrapper>
            <Alert
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
            <Buttons className="buttons">
              <a href="" className="download-contract">
                <ButtonsDownload className="button-filling">
                  <VerticalAlignBottomOutlined size={16} />
                  <DownloadParagraph>
                    Скачать договор бронирования
                  </DownloadParagraph>
                </ButtonsDownload>
              </a>
              <p>&#160; / &#160;</p>
              <a href="">ваша подпись</a>
            </Buttons>
            <Button type="primary">Оплатить</Button>
          </ContentWrapper>
        </Col>
      </Row>
      <Divider />
    </div>
  );
}

export default Pay;
