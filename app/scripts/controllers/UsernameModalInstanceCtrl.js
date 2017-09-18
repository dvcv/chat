(function() {
    function UsernameModalInstanceCtrl($uibModalInstance, $cookies) {
      var $ctrl = this;

      $ctrl.ok = function (name) {
        if(name!=null){
          $uibModalInstance.close($cookies.put('blocChatCurrentUser', name));
        }
      };
    }

    angular
        .module('chat')
        .controller('UsernameModalInstanceCtrl', ['$uibModalInstance','$cookies', UsernameModalInstanceCtrl]);
})();
