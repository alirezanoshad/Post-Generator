'use strict'
//// Refrences

// Author refrences
const authorPic = document.querySelector('#authorPic');
const authorName = document.querySelector('#authorName');
// Article refrences
const title = document.querySelector('#title')
const createDate = document.querySelector('#createDate')
const dashLogo = document.querySelector('#dashLogo')
const category = document.querySelector('#category')
const modifyDate = document.querySelector('#modifyDate')
// Article's Body 
const firstP = document.querySelector('#firstP')
const mainImg = document.querySelector('#mainImg')
const secondP = document.querySelector('#secondP')
const thirdP = document.querySelector('#thirdP')
const quote = document.querySelector('#quote')
const quoteAuthor = document.querySelector('#quoteAuthor')
const forthP = document.querySelector('#forthP')
const fifthP = document.querySelector('#fifthP')
// Image Collection Inside Article's Body 
const secondImg = document.querySelector('#secondImg') 
const thirdImg = document.querySelector('#thirdImg')
const forthImg = document.querySelector('#forthImg')
const sixthP = document.querySelector('#sixthP')
const seventhP = document.querySelector('#seventhP')
const eighthP = document.querySelector('#eighthP')
const ninethP = document.querySelector('#ninethP')
// Article's Body Ends Here


// Like Refrences
const likeCount = document.querySelector('#likeCount')
const likeBtn = document.querySelector('.likeBtn')


// Comment Refrences
const commentInput = document.querySelector('#commentInput')
const commentSubmitBtn = document.querySelector('.commentSubmitBtn')
const addingComment = document.querySelector('.addingComment')
// Bookmark Button
const bookmarkBtn = document.querySelector('.bookmarkBtn')

// Share Button
const shareBtn = document.querySelector('.shareBtn')


// View Port Refrence
const VP = document.querySelector('.VP')

//// Refrences

console.log('Article Details: authorPic,authorName,title,createDate,dashLogo,category,modifyDate,firstP,mainImg,secondP,thirdP,quote,quoteAuthor,forthP,fifthP,secondImg,thirdImg,forthImg,sixthP,seventhP,eighthP,ninethP');
// Body's Constructor
function Article(authorPic,authorName,title,createDate,dashLogo,category,modifyDate,firstP,mainImg,secondP,thirdP,quote,quoteAuthor,forthP,fifthP,secondImg,thirdImg,forthImg,sixthP,seventhP,eighthP,ninethP) {
  this.authorPic = authorPic
  this.authorName = authorName
  this.title = title
  this.createDate = createDate
  this.dashLogo = dashLogo
  this.category = category
  this.modifyDate = modifyDate
  this.firstP = firstP
  this.mainImg = mainImg
  this.secondP = secondP
  this.thirdP = thirdP
  this.quote = quote
  this.quoteAuthor = quoteAuthor
  this.forthP = forthP
  this.fifthP = fifthP
  this.secondImg = secondImg
  this.thirdImg = thirdImg
  this.forthImg = forthImg
  this.sixthP = sixthP
  this.seventhP = seventhP
  this.eighthP = eighthP
  this.ninethP = ninethP
  articleAppend()
}





























//// Like Section
// Like Button EventListener
likeBtn.addEventListener('click' , likeCountF )
// Default Number For LikeCount
let likeCountjs = 0
// Funcntion In Order Increases LikeCount
function likeCountF() {
  likeCountjs++;
  likeCount.innerHTML = likeCountjs
}



//// Comment Section
// Comment Button EventListener
commentSubmitBtn.addEventListener('click' , commentCreate )
// Funcntion In Order Increases LikeCount
function commentCreate(event) {
  event.preventDefault()
  let person = new DefaultComment(commentInput.value)
  addingComment.append(person)
  console.log(new DefaultComment(commentInput.value));

}

// Comment Constructor
function DefaultComment(commentText) {

  this.newCommentDiv = document.createElement('div')
  this.newCommentDiv.classList.add('comment')
  this.newCommentDiv.innerHTML = `
      <div class='commentAuthor'>
      <span class='commentAuthorName'>sam</span>
      <img src="./Docs/user-regular-132.png" alt="">
      </div>
      <br>
      <span class='commentText'>${commentText}</span>
      `
      return this.newCommentDiv
}










//// Bookmark Section
bookmarkBtn.addEventListener('click' , bookmarkPage)
//function Bookmark Page
function bookmarkPage() {
  alert("To bookmark this page, press Ctrl+D (Windows) or Cmd+D (Mac).");
}

//// Share Section
shareBtn.addEventListener('click' , sharePage)
let webURL
function sharePage() {
  let webURL = document.URL
  // Clipboard Copy Code
  navigator.clipboard.writeText(webURL)
  console.log('Website URL:' + webURL);
  alert("Link Copied!")
}

