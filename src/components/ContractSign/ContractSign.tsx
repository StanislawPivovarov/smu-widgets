import { Button, Checkbox, Col, Divider, Row } from "antd";
import { VerticalAlignBottomOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import googleplay from "../../assets/imgs/googlePlay-black.svg";
import applestore from "../../assets/imgs/appStore-black.svg";
import huaweistore from "../../assets/imgs/appGallery-black.svg";
import rustore from "../../assets/imgs/rustore-black.svg";
import {
  AppsLinks,
  Content,
  ContentList,
  ContentWrapper,
  Download,
  GosKeyLink,
  Header,
  Store,
  UlList,
} from "../../styles/ContractSign";
import Navigation from "../Navigation";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
function ContractSign() {
  const [disabled, setDisabled] = useState(true);


  const handleChange = (e: CheckboxChangeEvent) =>{
    if(e.target.checked){
      setDisabled(false)
    } else{
      setDisabled(true)
    }
  }

  return (
    <div>
      <Navigation />
      <Divider />
      <Row justify="center">
        <Col span={24}>
          <ContentWrapper>
            <Header className="header">Подписание договора</Header>
            <Content className="content">
              1. Нажмите "скачать договор" и проверьте сформированный договор
              бронирования
            </Content>
            <Content className="content">
              2. После вашей проверки отправьте его в приложение Госключ с этой
              страницы
            </Content>
            <Content className="content">
              3. Подпишите договор бронирования у себя в мобильном приложении
              Госключ
            </Content>
            <Header className="header">
              Для работы с приложением Госключ необходимы следующие условия
            </Header>
            <UlList>
              <ContentList className="content">
                Установленное мобильное приложение Госключ
              </ContentList>
              <ContentList className="content">
                Наличие подтвержденной учетной записи Госуслуг
              </ContentList>
              <ContentList className="content">
                Загранпаспорт нового поколения
              </ContentList>
              <ContentList className="content">
                Смартфон с NFC-модулем
              </ContentList>
            </UlList>
            <GosKeyLink href="https://www.gosuslugi.ru/goskey" target="_blank" className="goskey">
              Что такое Госключ?
            </GosKeyLink>
            <UlList>
              <ContentList className="content">
                Госключ отдельное мобильное приложение на платформах iOS и
                Android
              </ContentList>
              <ContentList className="content">
                Мобильное средство электронной подписи и средство
                криптографической защиты информации, сертифицированное ФСБ
                России
              </ContentList>
              <ContentList className="content">
                Идентификация при получении квалифицированного сертификата на
                основании загранпаспорта нового поколения.
              </ContentList>
            </UlList>
            <Header className="download">
              Скачать приложение Госключ можно по этим ссылкам
            </Header>
            <AppsLinks className="appstore-links">
              <a href="#" className="image-link">
                <Store src={googleplay} alt="" className="store" />
              </a>
              <a href="#" className="image-link">
                <Store src={applestore} alt="" className="store" />
              </a>
              <a href="#" className="image-link">
                <Store src={huaweistore} alt="" className="store" />
              </a>
              <a href="#" className="image-link">
                <Store src={rustore} alt="" className="store" />
              </a>
            </AppsLinks>
            <Download className="download-contract">
              <VerticalAlignBottomOutlined color="1890FF" />
              <a className="link-to-download">Скачать договор</a>
            </Download>
            <div>
              <Checkbox onChange={handleChange}>Договор прочитал, согласен, готов подписать</Checkbox>
              <br />
              <Button disabled={disabled} style={{ marginTop: "20px" }} type="primary">
                Отправить договор в Госключ
              </Button>
            </div>
          </ContentWrapper>
        </Col>
      </Row>
    </div>
  );
}

export default ContractSign;
