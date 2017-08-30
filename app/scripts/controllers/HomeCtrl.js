(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all;
    }

    angular
        .module('chat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
