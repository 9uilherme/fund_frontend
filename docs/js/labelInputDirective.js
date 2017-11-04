
app.directive('labelInput', function() {
  return {
    restrict: 'E',
    scope: {
      model: '=ngModel',
      placeholder: '@ngPlaceholder',
      label: '@ngLabel',
      labelClass: '@ngLabelClass',
      obrigatorio: '=ngObrigatorio'
    },
    template: '<label ng-class="labelClass">{{label}}<span style="color:red;" ng-show="obrigatorio"> *</span></label>'+
    '<input type="type" class="form-control"'+
    'placeholder="{{placeholder}}"'+
    'ng-model="model">'

};
});