function ViewModel() {
    var self = this;
    self.details = ko.observable("", false);
    self.moreDetails = function () {
        self.details(true);
    }
}
vm = new ViewModel();
ko.applyBindings(vm);
