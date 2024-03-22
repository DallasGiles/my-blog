const userName = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const submitButton = document.querySelector('#button');

  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
  
  const userName = document.querySelector('#username').value;
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;

    localStorage.setItem('first-name', JSON.stringify(userName));
    localStorage.setItem('last-name', JSON.stringify(title));
    localStorage.setItem('email', JSON.stringify(content)); 
  });