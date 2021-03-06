(function () {
    function chatController (Message) {
        this.Message = Message;
        this.newMessage = "";
        this.send = function (content) {
            Message.send(content);
            this.newMessage = "";
        }
        this.keypress = function (event) {
            if (event.key==="Enter") {
                this.send(this.newMessage);
            }
        }
        
        // console.log(this.Message.roomChats);
        // this console.log always an empty array, why?
        // this.roomId = Message.roomId;
        // this.roomName = Message.roomName;
        // this.roomChats = Message.roomChats;
    }
    
    angular
        .module('chateau')
        .controller('chatController', ['Message', chatController]);
})();