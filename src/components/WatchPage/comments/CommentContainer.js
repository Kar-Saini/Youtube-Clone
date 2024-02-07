import React from "react";
const COMMENT_DATA = [
  {
    name: "Kartik Saini",
    id: Math.random(),
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dicta laborum autem magni dignissimos illo architecto suscipit sed! Non illum sequi quas explicabo. Assumenda, animi accusamus. Nesciunt saepe amet eaque aspernatur alias necessitatibus molestias.",
    replies: [
      {
        name: "Kartik Saini",
        id: Math.random(),
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dicta laborum autem magni dignissimos illo architecto suscipit sed! Non illum sequi quas explicabo. Assumenda, animi accusamus. Nesciunt saepe amet eaque aspernatur alias necessitatibus molestias.",
        replies: [],
      },
    ],
  },
  {
    name: "Kartik Saini",
    id: Math.random(),
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dicta laborum autem magni dignissimos illo architecto suscipit sed! Non illum sequi quas explicabo. Assumenda, animi accusamus. Nesciunt saepe amet eaque aspernatur alias necessitatibus molestias.",
    replies: [],
  },
  {
    name: "Kartik Saini",
    id: Math.random(),
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dicta laborum autem magni dignissimos illo architecto suscipit sed! Non illum sequi quas explicabo. Assumenda, animi accusamus. Nesciunt saepe amet eaque aspernatur alias necessitatibus molestias.",
    replies: [
      {
        name: "Kartik Saini",
        id: Math.random(),
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dicta laborum autem magni dignissimos illo architecto suscipit sed! Non illum sequi quas explicabo. Assumenda, animi accusamus. Nesciunt saepe amet eaque aspernatur alias necessitatibus molestias.",
        replies: [],
      },
      {
        name: "Kartik Saini",
        id: Math.random(),
        comment:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dicta laborum autem magni dignissimos illo architecto suscipit sed! Non illum sequi quas explicabo. Assumenda, animi accusamus. Nesciunt saepe amet eaque aspernatur alias necessitatibus molestias.",
        replies: [
          {
            name: "Kartik Saini",
            id: Math.random(),
            comment:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dicta laborum autem magni dignissimos illo architecto suscipit sed! Non illum sequi quas explicabo. Assumenda, animi accusamus. Nesciunt saepe amet eaque aspernatur alias necessitatibus molestias.",
            replies: [
              {
                name: "Kartik Saini",
                id: Math.random(),
                comment:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dicta laborum autem magni dignissimos illo architecto suscipit sed! Non illum sequi quas explicabo. Assumenda, animi accusamus. Nesciunt saepe amet eaque aspernatur alias necessitatibus molestias.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
export default function CommentContainer() {
  return (
    <div>
      <div className="font-bold text-lg">Comments:</div>
      <CommentList data={COMMENT_DATA} />
    </div>
  );
}
function CommentList({ data }) {
  console.log(data);
  return (
    <div>
      {data.map((ele) => (
        <div>
          <div>
            <Comment commentData={ele} />
          </div>
          <div className="ml-10 border-l-2 border-black">
            <CommentList data={ele.replies} />
          </div>
        </div>
      ))}
    </div>
  );
}
function Comment({ commentData }) {
  const { name, comment } = commentData;
  return (
    <div className="bg-gray-200 rounded-md p-1 mr-5 my-2">
      <div className="font-semibold">{name}:</div>
      <div>{comment}</div>
    </div>
  );
}
