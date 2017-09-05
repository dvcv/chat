(function() {
    function ModalInstanceCtrl($uibModalInstance, items) {
      var $ctrl = this;
      $ctrl.items = items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };

      $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
      };

      $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }

    angular
        .module('chat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'items', ModalInstanceCtrl]);
})();
