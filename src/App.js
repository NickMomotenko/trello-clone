import React from "react";

import styled from "styled-components";

import { v4 as uuid } from "uuid";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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
import AlertBox from "./UI/AlertBox/AlertBox";
import MessageDisplay from "./UI/MessageDisplay/MessageDisplay";

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

  const messages = useSelector((state) => state.messages);

  console.log(messages);

  const [columns, setColumns] = React.useState(project_1.data);

  const renderPlank = (task, provided, snapshot) => {
    return (
      <MiniPaper
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
          userSelect: "none",
          padding: 16,
          margin: "0 0 8px 0",
          minHeight: "50px",
          backgroundColor: snapshot.isDragging ? "#f2e0e0" : "#fff",
          color: "white",
          ...provided.draggableProps.style,
        }}
      >
        <Row style={{ marginBottom: "10px" }}>
          <Label label={task.label} />
          <ButtonCircle icon={optionDotsIcon} />
        </Row>

        <Title
          style={{ fontSize: "20px", marginBottom: "15px" }}
          label={task.title}
        />
        {task.image && (
          <Block style={{ marginBottom: "20px" }}>
            <Image icon={task.image} />
          </Block>
        )}

        <Row style={{ marginBottom: "15px" }}>
          <AvatarMultiRow>
            {task.people.map((item) => (
              <Avatar key={item.id} link={item.link} url={item.avatar} />
            ))}
          </AvatarMultiRow>
          <Circle count={task.people.length} />
        </Row>

        <Row>
          <Block style={{ color: "black" }}>
            <Icon icon={commentsIcon} />
            {`${task.attachments.length} files`}
          </Block>
          <Block style={{ color: "black" }}>
            <Icon icon={clipIcon} />
            {`${task.comments.length} comments`}
          </Block>
        </Row>
      </MiniPaper>
    );
  };

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
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
                  fontSize: "13px",
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
                  <Avatar
                    key={item.id}
                    link={item.link}
                    url={item.avatar}
                    fullname={item.fullname}
                  />
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
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            style={{ minHeight: "50px" }}
          >
            <Row style={{ alignItems: "flex-start" }}>
              {Object.entries(columns).map(([columnId, column]) => {
                return (
                  <Column key={columnId} style={{ margin: 10 }}>
                    <Title
                      label={column.title}
                      style={{
                        color: `${column.color}`,
                        marginBottom: "25px",
                        fontSize: "40px",
                        textAlign: "center",
                      }}
                    />
                    <Block>
                      <Droppable droppableId={columnId} key={columnId}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              style={{
                                background:
                                  snapshot.isDraggingOver && "#f2f2f8",
                                padding: 4,
                                width: `100%`,
                                minHeight: 0,
                                borderRadius: `20px`,
                              }}
                            >
                              {column.items.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                  >
                                    {(provided, snapshot) => {
                                      return renderPlank(
                                        item,
                                        provided,
                                        snapshot
                                      );
                                    }}
                                  </Draggable>
                                );
                              })}
                              {provided.placeholder}
                            </div>
                          );
                        }}
                      </Droppable>
                    </Block>
                    <Button label="Add new task" />
                  </Column>
                );
              })}
            </Row>
          </DragDropContext>
        </AppContent>
      </AppMain>
      {messages?.map((item) => (
        <MessageDisplay key={item.id} {...item} />
      ))}
    </AppWrapp>
  );
};

export default App;
