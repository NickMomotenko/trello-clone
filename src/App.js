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

  const renderStatus = (status) => {
    if (status === "backlog") {
      return `Backlog`;
    } else if (status === "review") {
      return `In review`;
    } else if (status === "progress") {
      return `In Progress`;
    } else if (status === "done") {
      return `Done`;
    } else return `Без статуса`;
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
          {project_1.data.map((task) => {
            if (task.status === "done") {
              return (
                <Row style={{ marginBottom: "23px" }}>
                  <Title
                    label={renderStatus(task.status)}
                    style={{ color: "#ff77a1", fontSize: "30px" }}
                  />
                  <ButtonCircle icon={optionDotsIcon} />
                </Row>
              );
            }
          })}
          {/* {project_1.data.map((task) => {
            if (task.status === "done") {
              return (
                <>
                  <Column key={task.id}>
                    <MiniPaper style={{ width: "300px", marginBottom: "25px" }}>
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
                            <Avatar
                              key={item.id}
                              link={item.link}
                              url={item.avatar}
                            />
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
                    <Button label="Add new task" />
                  </Column>
                </>
              );
            }
          })} */}
        </AppContent>
      </AppMain>
    </AppWrapp>
  );
};

export default App;
