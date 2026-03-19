/* 
	COMP 2681
	Final Project: Coffee Run Co. Website
	Sophia DiPietro (T00714296)
	2025-05-14

	Filename: formSubmit.js

	This program reports on a successful completion of a valid web form. When the form is submitted,
	the onsubmit event handler verifies that the form data is complete and valid. An alert box is
	displayed notifying the user. The event function returns a value of false so that the user does 
	not have to continually retype test values in the contact form (copied from Tutorial 7).
*/


window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("No invalid data detected. Contact information successfully submitted.");
      return false;
   }
}