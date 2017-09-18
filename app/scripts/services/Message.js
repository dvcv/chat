(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    Message.send = function(newMessage) {
      messages.$add({ content: newMessage.content, roomId: newMessage.roomId, sentAt: newMessage.sentAt, username: $cookies.get('blocChatCurrentUser') }).then(function(ref) {
        var id = ref.key;
        console.log("added record with id " + id);
        console.log(messages.$indexFor(id));
      });
    };

    return Message;
  }

  angular
    .module('chat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
