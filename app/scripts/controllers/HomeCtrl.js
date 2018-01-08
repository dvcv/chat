(function() {
    function HomeCtrl(Room, Modal, Message) {
      this.rooms = Room.all;
      this.open = Modal.open;
      this.room = '';
      this.roomValue = 'Join a Room or Make a Room';
      this.setRoom = function(room){
        this.room = room;
        this.messages = Message.getByRoomId(room);
      }
      this.content = '';
      this.setMessage = function(){
        var d = new Date();
        var n = d.getTime();
        Message.send({content: this.content, sentAt: n, roomId: this.room});
      }
    }

    angular
        .module('chat')
        .controller('HomeCtrl', ['Room', 'Modal', 'Message', HomeCtrl]);
})();
