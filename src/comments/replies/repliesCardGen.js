export default function repliesCardGen(
  id,
  count,
  replies,
  container,
  comment,
  replyContainer
) {
  replies.map((reply) => {
    console.log(reply);

    let replyCard = document.createElement("div");
    replyCard.setAttribute("class", "comment-card");
    replyCard.setAttribute("id", "reply-card" + id + "");

    let replyCardHeader = document.createElement("div");
    replyCardHeader.setAttribute("class", "comment-header");

    let avatarImage = document.createElement("img");
    avatarImage.setAttribute("class", "avatar-image");
    avatarImage.setAttribute("src", reply.user.image.png);
    let userName = document.createElement("p");
    userName.setAttribute("class", "user-name");
    userName.append(reply.user.username);
    let createdAt = document.createElement("p");
    createdAt.setAttribute("class", "created-at");
    createdAt.append(reply.createdAt);

    let replyContent = document.createElement("div");
    replyContent.setAttribute("class", "comment-content");
    let content = document.createElement("p");
    content.setAttribute("class", "content");
    content.append(reply.content);

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

    replyContainer.append(replyCard);
  });
}
