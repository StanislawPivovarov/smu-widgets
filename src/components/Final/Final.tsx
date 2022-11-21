import { Divider, Row, Col, Alert } from "antd";
import React from "react";
import { Dividervisability, Header, IconVisability } from "../../styles/Final";
import { Buttons, ButtonsDownload, DownloadParagraph, Slash } from "../../styles/Pay";
import { FileOutlined } from "@ant-design/icons";
import Navigation from "../Navigation";
import { ContentWrapper } from "../../styles/ContractSign";

function Final() {
  return (
    <div>
      <Navigation />
      <Divider />
      <Row justify="center">
        <Col span={24}>
          <ContentWrapper>
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
            <Slash>&#160; &#160;/ &#160;</Slash>
            <a href="" className="download-contract">
              
              <ButtonsDownload className="button-filling">
              <IconVisability>
              <FileOutlined size={16} />
                </IconVisability>
                
                <DownloadParagraph>Ваша подпись</DownloadParagraph>
              </ButtonsDownload>
            </a>
            <Slash>&#160; &#160;/ &#160;</Slash>
            <a href="" className="download-contract">
              <ButtonsDownload className="button-filling">
              <IconVisability>
              <FileOutlined size={16} />
                </IconVisability>
                <DownloadParagraph>Подпись застройщика</DownloadParagraph>
              </ButtonsDownload>
            </a>
          </Buttons>
          <Dividervisability>
          <Divider/>
          </Dividervisability>
          <Buttons style={{ marginBottom: "0" }} className="buttons">
            <a href="" className="download-contract">
              <ButtonsDownload className="button-filling">
                <FileOutlined size={16} />
                <DownloadParagraph>Договор бронирования</DownloadParagraph>
              </ButtonsDownload>
            </a>
            <Slash>&#160; &#160; / &#160;</Slash>
            <a href="" className="download-contract">
              <ButtonsDownload className="button-filling">
              <IconVisability>
              <FileOutlined size={16} />
                </IconVisability>
                <DownloadParagraph>Ваша подпись</DownloadParagraph>
              </ButtonsDownload>
            </a>
            <Slash>&#160; &#160; / &#160;</Slash>
            <a href="" className="download-contract">
              <ButtonsDownload className="button-filling">
              <IconVisability>
              <FileOutlined size={16} />
                </IconVisability>
                <DownloadParagraph>Подпись застройщика</DownloadParagraph>
              </ButtonsDownload>
            </a>
          </Buttons>
          <Dividervisability>
          <Divider/>
          </Dividervisability>
          
          <Buttons style={{ marginBottom: "0" }} className="buttons">
            <a href="" className="download-contract">
              <ButtonsDownload className="button-filling">
                <FileOutlined size={16} />
                <DownloadParagraph>Договор долевого участия</DownloadParagraph>
              </ButtonsDownload>
            </a>
            <Slash>&#160; &#160;/ &#160;</Slash>
            <a href="" className="download-contract">
              <ButtonsDownload className="button-filling">
              <IconVisability>
              <FileOutlined size={16} />
                </IconVisability>
                <DownloadParagraph>Ваша подпись</DownloadParagraph>
              </ButtonsDownload>
            </a>
            <Slash>&#160; &#160;/ &#160;</Slash>
            <a href="" className="download-contract">
              <ButtonsDownload className="button-filling">
              <IconVisability>
              <FileOutlined size={16} />
                </IconVisability>
                <DownloadParagraph>Подпись застройщика</DownloadParagraph>
              </ButtonsDownload>
            </a>
          </Buttons>
          <Dividervisability>
          <Divider/>
          </Dividervisability>
          </ContentWrapper>
         
        </Col>
      </Row>
      <Divider />
    </div>
  );
}

export default Final;
