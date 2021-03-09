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
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('message-container');
  dateContainer.innerText = textFromResponse;
}

async function getServerMessages() {
  const responseFromServer = await fetch('/new');
  // The json() function returns an object that contains fields that we can
  // reference to create HTML.
  var obj, x;
  const messages = await responseFromServer.json();
  obj = JSON.parse(messages);
  for (x in obj) {
  document.getElementById("messages-container").innerHTML += x;
}
  //const messageListElement = document.getElementById('message-container');
  //messageListElement.innerHTML = arr[Math.floor(Math.random() * arr.length)];
  //arr[Math.floor(Math.random() * arr.length)];
     
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

