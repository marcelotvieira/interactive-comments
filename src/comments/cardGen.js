import loadCommentData from "./loadCommentData.js";
import repliesCardGen from "./replies/repliesCardGen.js";
import replyInfo from "./replies/repliesCardGen.js";

var container = document.getElementById("container");
const commentCardGen = fetch("src/data/data.json")
  .then((resposta) => {
    return resposta.json();
  })
  .then((jsonData) => {
    const commentData = jsonData.comments;
    var count = 0;
    var commentList = [];
    var showreply1 = false;
    var showreply2 = false;
    let commentCard = commentData.map((comment) => {
      const commentCard = document.createElement("div");
      commentCard.setAttribute("class", "comment-card");
      commentCard.setAttribute("id", "comment-card" + count + "");

      let commentHeader = document.createElement("div");
      commentHeader.setAttribute("class", "comment-header");
      let avatarImage = document.createElement("img");
      avatarImage.setAttribute("src", comment.user.image.png);
      let userName = document.createElement("p");
      userName.setAttribute("class", "user-name");
      let createdAt = document.createElement("span");
      createdAt.setAttribute("class", "created-at");

      commentHeader.append(avatarImage, userName, createdAt);

      let commentContent = document.createElement("div");
      commentContent.setAttribute("class", "comment-content");
      let content = document.createElement("p");
      content.setAttribute("class", "content");

      commentContent.append(content);

      let commentFooter = document.createElement("div");
      commentFooter.setAttribute("class", "comment-footer");
      let commentScore = document.createElement("div");
      commentScore.setAttribute("class", "comment-score");
      let scoreDec = document.createElement("button");
      scoreDec.setAttribute("class", "score-button");
      scoreDec.setAttribute("id", "score-dec");

      let scoreInc = document.createElement("button");
      scoreInc.setAttribute("class", "score-button");
      scoreInc.setAttribute("id", "score-inc");

      let scoreValue = document.createElement("span");
      scoreValue.setAttribute("class", "score-value");

      var replyButton = document.createElement("div");
      replyButton.setAttribute("class", "reply-button");
      replyButton.setAttribute("id", "reply-button" + count + "");
      let replyIcon = document.createElement("img");
      replyIcon.setAttribute("src", "src/images/icon-reply.svg");
      replyButton.append(replyIcon, "Reply");

      let replyContainer = document.createElement("div");
      replyContainer.setAttribute("class", "reply-container" + count + "");
      replyContainer.setAttribute("id", "reply-container" + count + "");

      replyButton.addEventListener("click", function toggleReplies() {
        console.log(replyButton.id[replyButton.id.length - 1]);
        if (replyButton.id[replyButton.id.length - 1] == 0) {
          let replyContainer = document.getElementById("reply-container0");
          replyContainer.classList.toggle("active");
        } else {
          let replyContainer = document.getElementById("reply-container1");
          replyContainer.classList.toggle("active");
        }
      });

      commentScore.append(scoreInc, scoreValue, scoreDec);
      commentFooter.append(commentScore, replyButton);

      commentCard.append(commentHeader, commentContent, commentFooter);
      container.append(commentCard, replyContainer);
      repliesCardGen(
        comment.id,
        count,
        comment.replies,
        container,
        replyButton.value,
        replyContainer
      );
      count++;
      commentList.push(commentCard);

      loadCommentData(userName, createdAt, content, scoreValue, comment);
    });
  });
