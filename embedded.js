window.HTMLFormElement.prototype.wforigsubmit = window.HTMLFormElement.prototype.submit;
window.HTMLFormElement.prototype.submit = function() {
    var event = new CustomEvent("wfSubmit", {
        bubbles: true,
        cancelable: false
    });
    this.dispatchEvent(event);
    //var formElement = this;
    //setTimeout(function(){formElement.wforigsubmit()},3000);
    this.wforigsubmit();
}