(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/usernameModal.html',
        controller: 'UsernameModalInstanceCtrl',
        controllerAs: 'modal',
        size: 'sm',
        backdrop  : 'static',
        keyboard  : false
      })





    }
  }

  angular
    .module('chat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
