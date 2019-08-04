sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("com.hcc.bk5.mdt.controller.Detail", {

		_MdtId: null,

		onInit: function() {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.getRoute("TargetDetail").attachMatched(this.__onRouteMatched, this);
		},

		__onRouteMatched: function(oEvent) {
			var that = this;
			this._MdtId = oEvent.getParameter("arguments").MdtId;
			this.getView().bindElement({
				path: "/MdtSet('" + this._MdtId + "')",
				events: {
					dataRequested: function() {
						that.getView().setBusy(true);
					},
					dataReceived: function() {
						that.getView().setBusy(false);
					}
				}
			});
		},

		/**
		 * Set the full screen mode to false and navigate to master page
		 */
		onCloseDetailPress: function() {
			this.getOwnerComponent().getRouter().navTo("TargetMaster", {}, true);
		}

	});

});