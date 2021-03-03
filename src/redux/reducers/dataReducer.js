import { generateID } from "../../utils";

import img1 from "../../assets/1.png";
import img2 from "../../assets/2.jpg";

const status = [
  {
    text: "Backlog",
    name: "backlog",
  },
  {
    text: "In Progress",
    name: "progress",
  },
  {
    text: "Done",
    name: "done",
  },
  {
    text: "In Review",
    name: "review",
  },
];

const initialState = [
  // каждый обьект отдельная часть
  {
    id: generateID(),
    title: "Weekly Sprint #4",
    date: "03.03.2021",
    people: [
      {
        id: generateID(),
        fullname: "Nick Sunflower",
        avatar:
          "https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_100_100/0/1613669311997?e=1620259200&v=beta&t=WytwYWBPgoC8OTiMpM2glSSKVznpbHyfiNWdwk1CiHU",
        link: "https://www.linkedin.com/in/nick-momotenko-b3963b189/",
      },
      {
        id: generateID(),
        fullname: "Nick Sunflower",
        avatar:
          "https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_100_100/0/1613669311997?e=1620259200&v=beta&t=WytwYWBPgoC8OTiMpM2glSSKVznpbHyfiNWdwk1CiHU",
        link: "https://www.linkedin.com/in/nick-momotenko-b3963b189/",
      },
      {
        id: generateID(),
        fullname: "Nick Sunflower",
        avatar:
          "https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_100_100/0/1613669311997?e=1620259200&v=beta&t=WytwYWBPgoC8OTiMpM2glSSKVznpbHyfiNWdwk1CiHU",
        link: "https://www.linkedin.com/in/nick-momotenko-b3963b189/",
      },
      {
        id: generateID(),
        fullname: "Nick Sunflower",
        avatar:
          "https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_100_100/0/1613669311997?e=1620259200&v=beta&t=WytwYWBPgoC8OTiMpM2glSSKVznpbHyfiNWdwk1CiHU",
        link: "https://www.linkedin.com/in/nick-momotenko-b3963b189/",
      },
    ],
    // data обьекты = каждая планка
    data: [
      {
        id: generateID(),
        title: "Revise Feedback",
        label: "Landing Page",
        status: "backlog",
        users: [
          {
            id: generateID(),
            fullname: "fullname1",
            avatar: "1",
          },
          {
            id: generateID(),
            fullname: "fullname2",
            avatar: "2",
          },
        ],
        attachments: [
          {
            id: generateID(),
          },
          {
            id: generateID(),
          },
        ],
        comments: [
          {
            id: generateID(),
            user: {},
            text: "Коммент 1",
          },
          {
            id: generateID(),
            user: {},
            text: "Коммент 1",
          },
        ],
      },
      {
        id: generateID(),
        title: "Revise Feedback",
        label: "Landing Page",
        status: "progress",
        image: img1,
        users: [
          {
            id: generateID(),
            fullname: "fullname1",
            avatar: "1",
          },
          {
            id: generateID(),
            fullname: "fullname2",
            avatar: "2",
          },
        ],
        attachments: [
          {
            id: generateID(),
          },
          {
            id: generateID(),
          },
        ],
        comments: [
          {
            id: generateID(),
            user: {},
            text: "Коммент 1",
          },
          {
            id: generateID(),
            user: {},
            text: "Коммент 1",
          },
        ],
      },
      {
        id: generateID(),
        title: "Revise Feedback",
        label: "Landing Page",
        status: "review",
        users: [
          {
            id: generateID(),
            fullname: "fullname1",
            avatar: "1",
          },
          {
            id: generateID(),
            fullname: "fullname2",
            avatar: "2",
          },
        ],
        attachments: [
          {
            id: generateID(),
          },
          {
            id: generateID(),
          },
        ],
        comments: [
          {
            id: generateID(),
            user: {},
            text: "Коммент 1",
          },
          {
            id: generateID(),
            user: {},
            text: "Коммент 1",
          },
        ],
      },
      {
        id: generateID(),
        title: "Revise Feedback",
        label: "Landing Page",
        status: "done",
        users: [
          {
            id: generateID(),
            fullname: "fullname1",
            avatar: "1",
          },
          {
            id: generateID(),
            fullname: "fullname2",
            avatar: "2",
          },
        ],
        attachments: [
          {
            id: generateID(),
          },
          {
            id: generateID(),
          },
        ],
        comments: [
          {
            id: generateID(),
            user: {},
            text: "Коммент 1",
          },
          {
            id: generateID(),
            user: {},
            text: "Коммент 1",
          },
        ],
      },
      {
        id: generateID(),
        title: "Revise Feedback",
        label: "Landing Page",
        status: "done",
        users: [
          {
            id: generateID(),
            fullname: "fullname1",
            avatar: "1",
          },
          {
            id: generateID(),
            fullname: "fullname2",
            avatar: "2",
          },
        ],
        attachments: [
          {
            id: generateID(),
          },
          {
            id: generateID(),
          },
        ],
        comments: [
          {
            id: generateID(),
            user: {},
            text: "Коммент 1",
          },
          {
            id: generateID(),
            user: {},
            text: "Коммент 1",
          },
        ],
      },
    ],
  },
];

export const dataReducer = (state = initialState, action) => {
  return state;
};
