// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


async function showServerMessage() {
  const responseFromServer = await fetch('/new');
  const textFromResponse = await responseFromServer.json();

  const dateContainer = document.getElementById('messages-container');
  dateContainer.innerText = textFromResponse;
}

async function getServerMessages() {
  const responseFromServer = await fetch('/new');
  // The json() function returns an object that contains fields that we can
  // reference to create HTML.
  const messages = await responseFromServer.text();
  var arr = ["Hi", "How", "You"];
  
   //for(var i in messages){
    //arr.push(messages[i]);
    //}
  const messageListElement = document.getElementById('message-container');
  messageListElement.innerText = arr[Math.floor(Math.random() * arr.length)];
  //arr[Math.floor(Math.random() * arr.length)];
     
}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
    //toogle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

