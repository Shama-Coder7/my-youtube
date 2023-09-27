import React from 'react';

const commentsData = [
  {
    name: 'Shama',
    text: 'lorem ipsum dolor sot amet, lorem ipsum dolor sot amet',
    replies: [
      {
        name: 'Shama',
        text: 'comment lorem ipsum dolor',
      },
      {
        name: 'Shama',
        text: 'lorem ipsum dolor',
      },
    ],
  },
  {
    name: 'Shama',
    text: 'lorem ipsum dolor',
    replies: [],
  },
  {
    name: 'Shama',
    text: 'lorem ipsum dolor',
    replies: [],
  },
  {
    name: 'Shama',
    text: 'lorem ipsum dolor',
    replies: [],
  },
  {
    name: 'Shama',
    text: 'lorem ipsum dolor',
    replies: [
      {
        name: 'Shama',
        text: 'lorem ipsum dolor',
        replies: [{ name: 'Shama', text: 'lorem ipsum dolor', replies: [] }],
      },
    ],
  },
  { name: 'Shama', text: 'lorem ipsum dolor', replies: [] },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 my-2">
      <img
        className="h-6 w-6"
        alt="user"
        src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

// Dont use indexes as keys.
// {} - destructuring

// Recursion of componnets in itself (componnemts inside components)


// n level nesting
const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment, index) => {
        return (
          <div key={index}>
            <Comment key={index} data={comment} />
            <div className="pl-5 border border-l-black ml-5">
              <CommentsList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

//Or,

// const CommentsList = (comments) => {
//     return
//         comments.map((comment) => {
//           return <Comment data={comment} />;
//         })
//   };

const CommentsContainer = () => {
  return (
    <div className="mx-10">
      <h1 className="text-xl font-bold">Comments:</h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
