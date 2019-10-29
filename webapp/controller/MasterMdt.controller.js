sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.hcc.bk5.mdt.controller.MasterMdt", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.hcc.bk5.mdt.view.Master
		 */
		onInit: function() {
		},

		onItemPressMdt: function(oEvent) {
			var oElement = oEvent.getSource();
			var sObjectPath = oElement.getBindingContextPath();
			var sMdtId = oElement.getModel().getData(sObjectPath).MdtId;

			this.getOwnerComponent().getRouter().navTo("TargetDetailMdt", {
				MdtId: sMdtId
			});
		}

	});

});