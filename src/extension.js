"use strict";

console.log("Extension loading...");
const jQuery = require("jquery");
const $ = jQuery;
const GmailFactory = require("gmail-js");
const gmail = new GmailFactory.Gmail($);
window.gmail = gmail;

gmail.observe.on("load", function () {
    const userEmail = gmail.get.user_email();
    const emails = gmail.get.visible_emails();
    console.log(emails)
    console.log("Hello, " + userEmail + ". This is your extension talking!");

});


gmail.observe.on("open_email", function (id, url, body, xhr) {
    const data = gmail.get.email_data(id);
    console.log("Subject: ", data.subject);
    console.log("To: ", data.people_involved[1]);
    console.log("Date: ", data.threads[id].datetime);

    var emailDom = gmail.dom.email(id);
  // Text
    // console.log(emailDom);
  
    // console.log(emailDom.$el.prevObject["0"].innerText);


})
gmail.observe.on("open_email", function (id) {

    $('a').click(function () {
        const url = $(this).attr('href');
        let endUrl = urlConverter(url);
        console.log("New link", endUrl)
        alert("You are going to"+ endUrl)
        $(this).attr("target",endUrl);

    });

    function urlConverter(url) {
        let urlX = url.substring(0, 5);
        let ressOf = url.substring(6);
        let resOf = url.substring(5);
      
        if (urlX = "https") {
            let newUrl = " https://proxy.playposit.com/ssl" + ressOf;
            return newUrl;

           
        } else {
            let newUrl = " https://proxy.playposit.com/http/www." + resOf;  
            return newUrl;

         }
    }

});