"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var index_routing_module_1 = require("./index-routing.module");
var index_component_1 = require("./index.component");
var topic_scroller_component_1 = require("../topic-scroller/topic-scroller.component");
var IndexModule = (function () {
    function IndexModule() {
    }
    return IndexModule;
}());
IndexModule = __decorate([
    core_1.NgModule({
        declarations: [
            topic_scroller_component_1.TopicScrollerComponent,
            index_component_1.IndexComponent,
        ],
        imports: [
            common_1.CommonModule,
            index_routing_module_1.IndexRoutingModule
        ],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], IndexModule);
exports.IndexModule = IndexModule;
//# sourceMappingURL=index.module.js.map