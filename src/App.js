import React from "react";

import styled from "styled-components";

import { useSelector } from "react-redux";

import Title from "./UI/Title/Title";
import Label from "./UI/Title/Label";

import Paper from "./UI/Paper/Paper";
import MiniPaper from "./UI/Paper/MiniPaper";

import { Column, Row, Circle, Icon, Block, Image } from "./UI/Layout/Layout";

import Avatar from "./UI/Avatar/Avatar";
import AvatarMultiRow from "./UI/Avatar/AvatarMultiRow";

import Button from "./UI/Button/Button";
import ButtonCircle from "./UI/Button/ButtonCircle";

import DateDisplay from "./UI/DateDisplay/DateDisplay";

import optionDotsIcon from "./assets/icons/more-options.svg";
import commentsIcon from "./assets/icons/comments.svg";
import clipIcon from "./assets/icons/clip.svg";
import loupeIcon from "./assets/icons/loupe.svg";
import filterIcon from "./assets/icons/filter.svg";

const AppWrapp = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const AppSidebar = styled.div`
  width: 300px;
  background-color: #fcfbfd;
`;

const AppMain = styled.div`
  background-color: #f7f7fd;
  flex: 1;
  padding: 25px 30px;
`;

const AppContent = styled.div``;

const App = () => {
  const projects = useSelector((state) => state.data);

  const project_1 = projects[0];

  const findAllStatus = (arr) => {
    let newArr = [];

    arr.forEach((plank) => {
      if (!newArr.includes(plank.status)) {
        newArr.push(plank.status);
      }
    });

    return newArr;
  };

  const renderPlank = (status, arr) => {
    return arr
      .filter((plank) => status === plank.status)
      .map((task) => (
        <Column key={task.id} style={{ marginBottom: "20px" }}>
          <MiniPaper>
            <Row style={{ marginBottom: "10px" }}>
              <Label label={task.label} />
              <ButtonCircle icon={optionDotsIcon} />
            </Row>

            <Title
              style={{ fontSize: "20px", marginBottom: "15px" }}
              label={task.title}
            />
            <Block style={{ marginBottom: "20px" }}>
              <Image icon={task.image} />
            </Block>

            <Row style={{ marginBottom: "15px" }}>
              <AvatarMultiRow>
                {project_1.people.map((item) => (
                  <Avatar key={item.id} link={item.link} url={item.avatar} />
                ))}
              </AvatarMultiRow>
              <Circle count={project_1.people.length} />
            </Row>

            <Row>
              <Block>
                <Icon icon={commentsIcon} />
                {`${task.attachments.length} files`}
              </Block>
              <Block>
                <Icon icon={clipIcon} />
                {`${task.comments.length} comments`}
              </Block>
            </Row>
          </MiniPaper>
        </Column>
      ));
  };

  return (
    <AppWrapp>
      <AppSidebar></AppSidebar>
      <AppMain>
        <Paper>
          <Row>
            <Title label={project_1.title} style={{ marginBottom: "20px" }} />
            <Block style={{ flexDirection: "column" }}>
              <Title
                label="Date created"
                style={{
                  fontSize: "17px",
                  color: "#757ab8",
                  fontWeight: "300",
                }}
              />
              <DateDisplay date={project_1.date} />
            </Block>
          </Row>
          <Row>
            <Block>
              <AvatarMultiRow>
                {project_1.people.map((item) => (
                  <Avatar key={item.id} link={item.link} url={item.avatar} />
                ))}
              </AvatarMultiRow>
              <Button label="Invite people" style={{ marginLeft: "10px" }} />
            </Block>
            <Block>
              <ButtonCircle icon={loupeIcon} />
              <ButtonCircle icon={filterIcon} />
            </Block>
          </Row>
        </Paper>
        <AppContent>
          <Row style={{ marginRight: "-20px" }}>
            {findAllStatus(project_1.data).map((status) => (
              <Row
                key={status}
                style={{ margin: "0 20px 25px 0", width: "300px" }}
              >
                <Title
                  label={status}
                  style={{ color: "#ff77a1", fontSize: "30px" }}
                />
                <ButtonCircle icon={optionDotsIcon} />
              </Row>
            ))}
          </Row>
          <Block style={{ marginRight: "-20px", alignItems: "flex-start" }}>
            {findAllStatus(project_1.data).map((status) => (
              <Column style={{ marginRight: "20px" }}>
                <Block
                  key={status}
                  style={{
                    width: "300px",
                    display: "inline-block",
                  }}
                >
                  {renderPlank(status, project_1.data)}
                </Block>
                <Button label="Add new task" />
              </Column>
            ))}
          </Block>
        </AppContent>
      </AppMain>
    </AppWrapp>
  );
};

export default App;
