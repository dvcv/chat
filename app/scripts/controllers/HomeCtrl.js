(function() {
    function HomeCtrl(Room, Modal) {
      this.rooms = Room.all;
      this.open = Modal.open;
    }

    angular
        .module('chat')
        .controller('HomeCtrl', ['Room', 'Modal', HomeCtrl]);
})();
