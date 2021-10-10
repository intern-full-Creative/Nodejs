const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");
const deleteBtn = document.querySelector(".delete");
const likeBtn = document.querySelector(".like");

const renderDetails = async () => {
  const res = await fetch("http://localhost:3000/posts/" + id);
  const post = await res.json();

  const template = `
  <h1>${post.title}</h1>
  <p><small>${post.likes} likes</small></p>
  <p>${post.body}</p>
  `;

  container.innerHTML = template;
};

const deletePost = async () => {
  const res = await fetch("http://localhost:3000/posts/" + id, {
    method: "DELETE",
  });

  window.location.replace("/");
};

const likePlus = async () => {
  const response = await fetch("http://localhost:3000/posts/" + id);
  const post = await response.json();
  let numLike = post.likes + 1;

  const doc = {
    title: post.title,
    body: post.body,
    likes: numLike,
  };

  const res = await fetch("http://localhost:3000/posts/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(doc),
  });
};

window.addEventListener("DOMContentLoaded", () => renderDetails());

deleteBtn.addEventListener("click", () => deletePost);

likeBtn.addEventListener("click", likePlus);
