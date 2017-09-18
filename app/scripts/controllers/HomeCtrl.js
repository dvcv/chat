(function() {
    function HomeCtrl(Room, Modal, Message) {
      this.rooms = Room.all;
      this.open = Modal.open;
      this.room = '';
      this.setRoom = function(room){
        this.messages = Message.getByRoomId(room);
      }
    }

    angular
        .module('chat')
        .controller('HomeCtrl', ['Room', 'Modal', 'Message', HomeCtrl]);
})();
