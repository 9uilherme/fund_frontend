
app.directive('labelSelect', function() {
  return {
    restrict: 'E',
    scope: {
      model: '=ngModel',
      placeholder: '@ngPlaceholder',
      label: '@ngLabel',
      lista: '=ngLista',
      labelClass: '@ngLabelClass',
      obrigatorio: '=ngObrigatorio'
    },
    template: '<label class="labelClass">{{label}}<span style="color:red;" ng-show="obrigatorio"> *</span></label></label>'+
                        '<select ng-options="obj.nome for obj in lista track by obj.id"'+
                        'class="form-control"'+
                        'ng-model="model">'+
                        '</select>'

};
});
