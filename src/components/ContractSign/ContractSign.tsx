import { Button, Checkbox, Col, Divider, Row } from "antd";
import { VerticalAlignBottomOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import googleplay from "../../assets/imgs/googlePlay-black.svg";
import applestore from "../../assets/imgs/appStore-black.svg";
import huaweistore from "../../assets/imgs/appGallery-black.svg";
import rustore from "../../assets/imgs/rustore-black.svg";
import {
  AppsLinks,
  AppStore,
  ContentList,
  Download,
  GosKeyLink,
  UlList,
} from "../../styles/ContractSign";
import { ContentWrapper } from "../../styles/Helpers";
import Navigation from "../Navigation";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { Header } from "../../styles/Helpers";
function ContractSign() {
  const [isDisabled, setDisabled] = useState(true);

  const handleChange = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div>
      <Navigation />
      <Divider />
      <Row justify="center">
        <Col xs={23} style={{ maxWidth: "600px" }}>
          <Header className="header">Подписание договора</Header>
          <p className="content">
            1. Нажмите "скачать договор" и проверьте сформированный договор
            бронирования
          </p>
          <p>
            2. После вашей проверки отправьте его в приложение Госключ с этой
            страницы
          </p>
          <p>
            3. Подпишите договор бронирования у себя в мобильном приложении
            Госключ
          </p>
          <Header>
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
          <Button type="link" href="https://www.gosuslugi.ru/goskey" style={{lineHeight: "0px"}}>
            Что такое Госключ?
          </Button>
          <UlList>
            <ContentList className="content">
              Госключ отдельное мобильное приложение на платформах iOS и Android
            </ContentList>
            <ContentList className="content">
              Мобильное средство электронной подписи и средство
              криптографической защиты информации, сертифицированное ФСБ России
            </ContentList>
            <ContentList className="content">
              Идентификация при получении квалифицированного сертификата на
              основании загранпаспорта нового поколения.
            </ContentList>
          </UlList>
          <Header className="download">
            Скачать приложение Госключ можно по этим ссылкам
          </Header>

          <Row justify="center" gutter={[10, 10]}>
            <Col xs={{ span: 12 }} sm={{ span: 6 }}>
              <Button type="link" href="https://play.google.com/store/apps/details?id=ru.gosuslugi.goskey&pli=1" style={{height: "max-content", width: "100%"}}>
                <AppStore src={googleplay} alt="" className="store" />
              </Button>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 6 }}>
              <Button type="link" href="https://apps.apple.com/ru/app/id1566096745" style={{height: "max-content", width: "100%"}}>
                <AppStore src={applestore} alt="" className="store" />
              </Button>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 6 }}>
              <Button type="link" href="https://appgallery.huawei.com/#/app/C104297607" style={{height: "max-content", width: "100%"}}>
                <AppStore src={huaweistore} alt="" className="store" />
              </Button>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 6 }}>
              <Button type="link" href="https://apps.rustore.ru/app/ru.gosuslugi.goskey" style={{height: "max-content", width: "100%"}}>
                <AppStore src={rustore} alt="" className="store" />
              </Button>
            </Col>
          </Row>
          <Download className="download-contract">
            <VerticalAlignBottomOutlined color="1890FF" />
            <a className="link-to-download">Скачать договор</a>
          </Download>
          <div>
            <Checkbox onChange={handleChange}>
              Договор прочитал, согласен, готов подписать
            </Checkbox>
            <br />
            <Button
              disabled={isDisabled}
              style={{ marginTop: "20px" }}
              type="primary"
            >
              Отправить договор в Госключ
            </Button>
          </div>
        </Col>
      </Row>
      <Divider/>
    </div>
  );
}

export default ContractSign;
