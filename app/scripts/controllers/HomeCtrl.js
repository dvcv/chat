(function() {
    function HomeCtrl(Room, $uibModal, $log) {
      this.rooms = Room.all;
      this.animationsEnabled = true;
      this.items = ['item1', 'item2', 'item3'];
      //Open a modal to add new room
      this.open = function (size) {
         var modalInstance = $uibModal.open({
           animation: this.animationsEnabled,
           ariaLabelledBy: 'modal-title',
           ariaDescribedBy: 'modal-body',
           templateUrl: '/templates/modal.html',
           controller: 'ModalInstanceCtrl',
           controllerAs: 'modal',
           size: size,
           resolve: {
             items: function () {
               return this.items;
             }
           }
         });

         modalInstance.result.then(function (selectedItem) {
           this.selected = selectedItem;
         }, function () {
           $log.info('Modal dismissed at: ' + new Date());
         });
       };

       this.toggleAnimation = function () {
         this.animationsEnabled = !this.animationsEnabled;
       };
    }

    angular
        .module('chat')
        .controller('HomeCtrl', ['Room', '$uibModal', '$log', HomeCtrl]);
})();
