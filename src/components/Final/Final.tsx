import { Divider, Row, Col, Alert } from "antd";
import React from "react";
import { Header } from "../../styles/Final";
import { Buttons, ButtonsDownload, DownloadParagraph } from "../../styles/Pay";
import { FileOutlined } from "@ant-design/icons";
import Navigation from "../Navigation";

function Final() {
  return (
    <div>
      <Navigation />
      <Divider />
      <Row justify="center">
        <Col flex="600px">
          <Alert
            style={{ height: "56px", border: "none" }}
            message="Документы успешно подписаны"
            type="success"
            showIcon
          />
          <Header>
            Документы ожидают отправки в Росреестр, <br />в течении 24 часов с
            вами свяжется наш представитель
          </Header>
          <Buttons style={{ marginBottom: "0" }} className="buttons">
            <a href="" className="download-contract">
              <ButtonsDownload className="button-filling">
                <FileOutlined size={16} />
                <DownloadParagraph>Акт бронирования</DownloadParagraph>
              </ButtonsDownload>
            </a>
            <p>&#160; / &#160;</p>
            <a href="">ваша подпись</a>
            <p>&#160; / &#160;</p>
            <a href="">подпись застройщика</a>
          </Buttons>
          <Buttons style={{ marginBottom: "0" }} className="buttons">
            <a href="" className="download-contract">
              <ButtonsDownload className="button-filling">
                <FileOutlined size={16} />
                <DownloadParagraph>Договор бронирования</DownloadParagraph>
              </ButtonsDownload>
            </a>
            <p>&#160; / &#160;</p>
            <a href="">ваша подпись</a>
            <p>&#160; / &#160;</p>
            <a href="">подпись застройщика</a>
          </Buttons>
          <Buttons style={{ marginBottom: "0" }} className="buttons">
            <a href="" className="download-contract">
              <ButtonsDownload className="button-filling">
                <FileOutlined size={16} />
                <DownloadParagraph>Договор долевого участия</DownloadParagraph>
              </ButtonsDownload>
            </a>
            <p>&#160; / &#160;</p>
            <a href="">ваша подпись</a>
            <p>&#160; / &#160;</p>
            <a href="">подпись застройщика</a>
          </Buttons>
        </Col>
      </Row>
      <Divider />
    </div>
  );
}

export default Final;
