(function() {
  function Room($firebaseArray) {
    // var ref = firebase.database().ref();
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    Room.all = rooms;
    console.log(rooms);
    Room.add = function(room) {
        rooms.$add({ $value: room }).then(function(ref) {
          var id = ref.key;
          console.log("added record with id " + id);
          console.log(rooms.$indexFor(id));
        });
    }

    return Room;
  }

  angular
    .module('chat')
    .factory('Room', ['$firebaseArray', Room]);
})();
