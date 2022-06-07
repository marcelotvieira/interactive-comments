import loadCommentData from "/src/comments/loadCommentData.js";
export default function repliesCardGen(
  id,
  count,
  replies,
  container,
  comment,
  replyContainer,
  currentUser,
  replybox
) {
  replies.map((reply) => {
    console.log(reply);

    let replyCard = document.createElement("div");
    replyCard.setAttribute("class", "comment-card");
    replyCard.setAttribute("id", "reply-card" + count + "");

    let replyCardHeader = document.createElement("div");
    replyCardHeader.setAttribute("class", "comment-header");

    let avatarImage = document.createElement("img");
    avatarImage.setAttribute("class", "avatar-image");
    avatarImage.setAttribute("src", reply.user.image.png);
    let userName = document.createElement("p");
    userName.setAttribute("class", "user-name");

    let createdAt = document.createElement("p");
    createdAt.setAttribute("class", "created-at");

    let replyContent = document.createElement("div");
    replyContent.setAttribute("class", "comment-content");
    let content = document.createElement("p");
    content.setAttribute("class", "content");

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

    commentScore.append(scoreInc, scoreValue, scoreDec);
    commentFooter.append(commentScore, replyButton);

    replyCardHeader.append(avatarImage, userName, createdAt);
    replyContent.append(content);
    replyCard.append(replyCardHeader, replyContent, commentFooter);
    loadCommentData(userName, createdAt, content, scoreValue, reply);
    replyContainer.append(replyCard);
    count++;
  });

  function sendComment(id) {
    let comment = document.getElementById("reply-input" + id + "").value;
    console.log(comment);

    document.getElementById("reply-input" + id + "").value = "";
  }

  function replyBox(id) {
    let replyComment = document.createElement("div");
    replyComment.setAttribute("class", "reply-comment");
    let replyInput = document.createElement("textarea");
    let replyFooter = document.createElement("div");
    replyFooter.setAttribute("class", "reply-footer");
    replyInput.setAttribute("class", "reply-input");
    replyInput.setAttribute("id", "reply-input" + id + "");
    replyInput.setAttribute("placeholder", "Add a comment...");
    let avatarUser = document.createElement("img");
    avatarUser.setAttribute("class", "avatar-image");
    avatarUser.setAttribute("src", currentUser.image.png);
    let sendButton = document.createElement("button");
    sendButton.setAttribute("class", "send-button");
    replyFooter.append(avatarUser, sendButton);
    sendButton.append("SEND");
    replyComment.append(replyInput, replyFooter);
    sendButton.addEventListener("click", () => {
      sendComment(id);
    });

    replybox.append(replyComment);
  }
  replyBox(id);
}
