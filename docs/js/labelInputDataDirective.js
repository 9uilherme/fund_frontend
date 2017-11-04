
app.directive('labelInputData', function() {
  return {
    restrict: 'E',
    scope: {
      model: '=ngModel',
      label: '@ngLabel',
      obrigatorio: '=ngObrigatorio'
    },
    template: '<label>{{label}}<span style="color:red;" ng-show="obrigatorio"> *</span></label></label>'+
    '<input type="date" class="form-control"'+
    'ng-model="model">'

};
});