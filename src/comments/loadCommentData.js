export default function loadCommentData(userName, createdAt, content, scoreValue, comment) {

  userName.append(comment.user.username);
  createdAt.append(comment.createdAt);
  content.append(comment.content);
  scoreValue.append(comment.score);
}
