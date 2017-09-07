(function() {
    function ModalInstanceCtrl($uibModalInstance, Room) {
      var $ctrl = this;

      $ctrl.ok = function (name) {
        $uibModalInstance.close(Room.add(name));
      };

      $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }

    angular
        .module('chat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();
