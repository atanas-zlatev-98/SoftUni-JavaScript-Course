async function attachEvents() {
  const btnLoadPosts = document.getElementById("btnLoadPosts");
  const btnViewPosts = document.getElementById("btnViewPost");
  const postTitle = document.getElementById("post-title");
  const postBody = document.getElementById("post-body");
  const commentSection = document.getElementById("post-comments");

  const select = document.querySelector("#posts");

  btnLoadPosts.addEventListener("click", loadPost);
  btnViewPosts.addEventListener("click", viewPost);

  async function loadPost() {
    select.textContent = "";

    const postReponse = await fetch("http://localhost:3030/jsonstore/blog/posts");
    const dataPost = await postReponse.json();

    for (let data of Object.values(dataPost)) {
      const element = create("option", data.title);
      element.setAttribute("id", data.id);
      select.appendChild(element);
    }
  }

  async function viewPost() {
    commentSection.textContent = "";
    const id = select.options[select.selectedIndex].id;

    const postReponseView = await fetch(
      `http://localhost:3030/jsonstore/blog/posts/` + id
    );
    const dataPostView = await postReponseView.json();

    const commentsRespose = await fetch(
      "http://localhost:3030/jsonstore/blog/comments"
    );
    const commentsResposeData = await commentsRespose.json();

    const comments = Object.values(commentsResposeData).filter((x) => x.postId == id);

    postTitle.textContent = dataPostView.title;
    postBody.textContent = dataPostView.body;

    for (let comment of comments) {
      const li = document.createElement("li");
      li.textContent = comment.text;
      li.setAttribute('id',comment.id);
      commentSection.appendChild(li);
    }
  }

  function create(type, content) {
    const createdElement = document.createElement(type);
    createdElement.textContent = content;

    return createdElement;
  }
}

attachEvents();
