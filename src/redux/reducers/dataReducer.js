import { generateID } from "../../utils";

import { v4 as uuid } from "uuid";

import img1 from "../../assets/1.png";
// import img2 from "../../assets/2.jpg";

const initialState = [
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
    data: {
      [uuid()]: {
        color: "#d19fa5",
        title: "Backlog",
        items: [
          {
            id: uuid(),
            label: "Landing Page",
            title: "Revisit Homepage",
            people: [
              {
                id: uuid(),
                fullname: "Nick Sunflower",
                avatar:
                  "https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_100_100/0/1613669311997?e=1620259200&v=beta&t=WytwYWBPgoC8OTiMpM2glSSKVznpbHyfiNWdwk1CiHU",
                link: "https://www.linkedin.com/in/nick-momotenko-b3963b189/",
              },
              {
                id: uuid(),
                fullname: "Nick Sunflower",
                avatar:
                  "https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_100_100/0/1613669311997?e=1620259200&v=beta&t=WytwYWBPgoC8OTiMpM2glSSKVznpbHyfiNWdwk1CiHU",
                link: "https://www.linkedin.com/in/nick-momotenko-b3963b189/",
              },
            ],
            attachments: ["1", "1"],
            comments: ["1", "1"],
          },
          {
            id: uuid(),
            label: "Landing Page",
            title: "Revisit Homepage",
            people: [
              {
                id: uuid(),
                fullname: "Nick Sunflower",
                avatar:
                  "https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_100_100/0/1613669311997?e=1620259200&v=beta&t=WytwYWBPgoC8OTiMpM2glSSKVznpbHyfiNWdwk1CiHU",
                link: "https://www.linkedin.com/in/nick-momotenko-b3963b189/",
              },
              {
                id: uuid(),
                fullname: "Nick Sunflower",
                avatar:
                  "https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_100_100/0/1613669311997?e=1620259200&v=beta&t=WytwYWBPgoC8OTiMpM2glSSKVznpbHyfiNWdwk1CiHU",
                link: "https://www.linkedin.com/in/nick-momotenko-b3963b189/",
              },
            ],
            image: img1,
            attachments: ["1", "1"],
            comments: ["1", "1"],
          },
          {
            id: uuid(),
            label: "Landing Page",
            title: "Revisit Homepage",
            people: [
              {
                id: uuid(),
                fullname: "Nick Sunflower",
                avatar:
                  "https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_100_100/0/1613669311997?e=1620259200&v=beta&t=WytwYWBPgoC8OTiMpM2glSSKVznpbHyfiNWdwk1CiHU",
                link: "https://www.linkedin.com/in/nick-momotenko-b3963b189/",
              },
              {
                id: uuid(),
                fullname: "Nick Sunflower",
                avatar:
                  "https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_100_100/0/1613669311997?e=1620259200&v=beta&t=WytwYWBPgoC8OTiMpM2glSSKVznpbHyfiNWdwk1CiHU",
                link: "https://www.linkedin.com/in/nick-momotenko-b3963b189/",
              },
            ],
            attachments: ["1", "1"],
            comments: ["1", "1"],
          },
        ],
      },
      [uuid()]: {
        color: "#beb2e1",
        title: "In Progress",
        items: [],
      },
      [uuid()]: {
        color: "#e17171",
        title: "In Review",
        items: [],
      },
      [uuid()]: {
        title: "Done",
        items: [],
      },
    },
  },
];

export const dataReducer = (state = initialState, action) => {
  return state;
};
