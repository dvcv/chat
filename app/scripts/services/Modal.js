(function() {
  function Modal($uibModal, $log) {
    var Modal = {};
    Modal.animationsEnabled = true;
    Modal.open = function (size) {
       var modalInstance = $uibModal.open({
         animation: Modal.animationsEnabled,
         ariaLabelledBy: 'modal-title',
         ariaDescribedBy: 'modal-body',
         templateUrl: '/templates/modal.html',
         controller: 'ModalInstanceCtrl',
         controllerAs: 'modal',
         size: size,
       });

       modalInstance.result.then(function (selectedItem) {
        // Modal.selected = selectedItem;
       }, function () {
         $log.info('Modal dismissed at: ' + new Date());
       });
     };
    return Modal;
  }

  angular
    .module('chat')
    .factory('Modal', ['$uibModal', '$log', Modal]);
})();
