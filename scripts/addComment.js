const commentsBlock = document.querySelector('.comments');

let form = document.forms.comment;
let name = form.elements.name;
let date = form.elements.date;
let text = form.elements.text;

form.addEventListener('submit',appendComment);

function appendComment(){
    const comment = document.createElement('div');
    const deleteButton = document.createElement('img');
    const nameOfComment = document.createElement('span');
    const dateOfComment = document.createElement('span');
    const textOfComment = document.createElement('p');
    const currentDate = new Date(date.value);

    if (/^[a-zA-Z]/.test(name.value)) {
        deleteButton.src = './assets/delete.png';
        comment.classList.add("comment-content");

        nameOfComment.append(name.value);
        dateOfComment.append(formatDate(currentDate));
        textOfComment.append(text.value);

        comment.append(nameOfComment);
        comment.append(dateOfComment);
        comment.append(textOfComment);
        comment.append(deleteButton);
        addLikeButton(comment);

        commentsBlock.append(comment);

        clearForm();

        deleteButton.addEventListener('click',()=>{
            comment.remove();
        });
    } else {
        alert("The name must begin with the letters.");
        return false
    }
}

function clearForm(){
    name.value = "";
    text.value = "";
}

function addLikeButton(comment){
    const likeButton = document.createElement('a');
    const likeIcon = document.createElement('span');
    const likeAnimation = document.createElement('div');

    likeButton.classList.add('like-button');
    likeIcon.classList.add('like-icon');
    likeAnimation.classList.add('heart-animation-1');

    likeButton.append(likeIcon);
    likeIcon.append(likeAnimation);
    comment.append(likeButton);

    likeButton.addEventListener('click',function (){
        this.classList.toggle('liked');
    })
}

function formatDate(date) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const diff = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (date.toDateString() === today.toDateString()) {
        return "today " + getTime() + date.toLocaleDateString();
    } else if (date.toDateString() === yesterday.toDateString()) {
        return "yesterday " + getTime() + date.toLocaleDateString();
    } else if (diff <= 365) {
        return diff + " days ago " + getTime() + date.toLocaleDateString();
    } else {
        return "more than year ago " + getTime() + date.toLocaleDateString();
    }
}

function getTime(){
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if(hours < 10){
        hours = '0' + hours;
    }
    if(minutes< 10){
        minutes = '0' + minutes;
    }

    return `${hours}:${minutes} `;
}

