webpackHotUpdate("main",{

/***/ "./src/components/ag-grid/DeploymentDownloadCellRenderer/DeploymentDownloadCellRenderer.tsx":
/*!**************************************************************************************************!*\
  !*** ./src/components/ag-grid/DeploymentDownloadCellRenderer/DeploymentDownloadCellRenderer.tsx ***!
  \**************************************************************************************************/
/*! exports provided: COMPONENT_NAME, DeploymentDownloadCellRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_NAME", function() { return COMPONENT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentDownloadCellRenderer", function() { return DeploymentDownloadCellRenderer; });
/* harmony import */ var _DeploymentDownloadCellRenderer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeploymentDownloadCellRenderer.scss */ "./src/components/ag-grid/DeploymentDownloadCellRenderer/DeploymentDownloadCellRenderer.scss");
/* harmony import */ var _DeploymentDownloadCellRenderer_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_DeploymentDownloadCellRenderer_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/cjs/index.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blueprintjs_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/icons */ "./node_modules/@blueprintjs/icons/lib/cjs/index.js");
/* harmony import */ var _blueprintjs_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_generated_code_api_deploymentApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/generated-code/api/deploymentApi */ "./src/generated-code/api/deploymentApi.ts");
/* harmony import */ var ts_enum_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ts-enum-util */ "./node_modules/ts-enum-util/dist/commonjs/index.js");
/* harmony import */ var ts_enum_util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ts_enum_util__WEBPACK_IMPORTED_MODULE_6__);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * Defines the {@link DeploymentDownloadCellRenderer} namespace.
 * @module
 */









/**
 * The name of this component.
 */

var COMPONENT_NAME = "DeploymentDownloadCellRenderer";
/**
 * Used to create an AgGrid cell renderer component that will present
 * UI controls for downloading Config Release information. Only works
 * with ConfigDataUtil.ConfigReleaseRowData row data
 * See {@link DeploymentDownloadCellRenderer.create} for details.
 */

var DeploymentDownloadCellRenderer;

(function (DeploymentDownloadCellRenderer) {
  /**
   * Creates a React Component class that can be used as a cell renderer for
   * AgGrid to render UI controls for downloading Config Release information.
   *
   * Only works on fields where row data adheres to ConfigDataUtil.ConfigReleaseRowData interface
   *
   * @param params - Params for configuring the cell renderer component class.
   * @return A new React ComponentClass that can be used as an AgGrid cell renderer.
   */
  function create(params) {
    return (
      /** @class */
      function (_super) {
        __extends(class_1, _super);
        /**
         * @inheritDoc
         */


        function class_1(props) {
          var _this = _super.call(this, props) || this;
          /**
           * @inheritDoc
           */


          _this.displayName = COMPONENT_NAME;
          _this.state = {};
          return _this;
        }
        /**
         * @inheritDoc
         */


        class_1.prototype.render = function () {
          var rowData = this.props.data;
          var popoverContent = rowData.states ? this.renderPopoverContent() : undefined;
          return rowData.states ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
            className: COMPONENT_NAME
          }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
            content: popoverContent,
            position: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Position"].BOTTOM,
            // Optimize rendering when not in a unit test,
            // because there may be MANY cells rendered on screen
            // at once.
            lazy: !params.isUnitTest,
            // Force the popover open for unit tests so that the
            // contents can be inspected.
            isOpen: params.isUnitTest || undefined
          }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
            className: COMPONENT_NAME + "__download-icon",
            icon: _blueprintjs_icons__WEBPACK_IMPORTED_MODULE_4__["IconNames"].CLOUD_DOWNLOAD,
            iconSize: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Icon"].SIZE_LARGE,
            title: "Download"
          }))) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null);
        };
        /**
         * Renders content for this cell's popover.
         * @return an Element containing the popover content for this cell.
         */


        class_1.prototype.renderPopoverContent = function () {
          var otaStates = this.props.data.states;
          var popoverItems = this.renderPopoverItems(otaStates);
          return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Menu"], null, popoverItems);
        };
        /**
         * Renders each popover item dynamically
         * @param otaStates - The different file data
         * @returns an array of menu items
         */


        class_1.prototype.renderPopoverItems = function (otaStates) {
          return lodash__WEBPACK_IMPORTED_MODULE_2___default()(otaStates).map(function (state, idx) {
            var _a;

            var fileDownloadText = ts_enum_util__WEBPACK_IMPORTED_MODULE_6__["$enum"].visitValue(idx).with((_a = {}, _a[src_generated_code_api_deploymentApi__WEBPACK_IMPORTED_MODULE_5__["deploymentApi"].models.OtaStates.FieldName.SignedSoftwareUpload] = "Signed Software Upload", _a[src_generated_code_api_deploymentApi__WEBPACK_IMPORTED_MODULE_5__["deploymentApi"].models.OtaStates.FieldName.SignedManifestUpload] = "Signed Manifest Upload", _a[src_generated_code_api_deploymentApi__WEBPACK_IMPORTED_MODULE_5__["deploymentApi"].models.OtaStates.FieldName.ManifestUpload] = "Manifest Upload", _a));
            return state ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
              key: idx,
              icon: _blueprintjs_icons__WEBPACK_IMPORTED_MODULE_4__["IconNames"].CLOUD_DOWNLOAD,
              className: COMPONENT_NAME + "__file-menu-item",
              disabled: false,
              // TODO-i18n
              text: idx,
              onClick: function () {
                params.onRequestDownload(state.fileInfo.path, state.fileInfo.containerName);
              }
            }) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null);
          }).value();
        };

        return class_1;
      }(react__WEBPACK_IMPORTED_MODULE_1__["Component"])
    );
  }

  DeploymentDownloadCellRenderer.create = create;
})(DeploymentDownloadCellRenderer || (DeploymentDownloadCellRenderer = {}));

try {
  // @ts-ignore
  COMPONENT_NAME.displayName = "COMPONENT_NAME"; // @ts-ignore

  COMPONENT_NAME.__docgenInfo = {
    "description": "The name of this component.",
    "displayName": "COMPONENT_NAME",
    "props": {}
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/components/ag-grid/DeploymentDownloadCellRenderer/DeploymentDownloadCellRenderer.tsx#COMPONENT_NAME"] = {
      docgenInfo: COMPONENT_NAME.__docgenInfo,
      name: "COMPONENT_NAME",
      path: "src/components/ag-grid/DeploymentDownloadCellRenderer/DeploymentDownloadCellRenderer.tsx#COMPONENT_NAME"
    };
} catch (__react_docgen_typescript_loader_error) {}

try {
  // @ts-ignore
  DeploymentDownloadCellRenderer.displayName = "DeploymentDownloadCellRenderer"; // @ts-ignore

  DeploymentDownloadCellRenderer.__docgenInfo = {
    "description": "Used to create an AgGrid cell renderer component that will present\nUI controls for downloading Config Release information. Only works\nwith ConfigDataUtil.ConfigReleaseRowData row data\nSee {@link DeploymentDownloadCellRenderer.create} for details.",
    "displayName": "DeploymentDownloadCellRenderer",
    "props": {}
  }; // @ts-ignore

  if (typeof STORYBOOK_REACT_CLASSES !== "undefined") // @ts-ignore
    STORYBOOK_REACT_CLASSES["src/components/ag-grid/DeploymentDownloadCellRenderer/DeploymentDownloadCellRenderer.tsx#DeploymentDownloadCellRenderer"] = {
      docgenInfo: DeploymentDownloadCellRenderer.__docgenInfo,
      name: "DeploymentDownloadCellRenderer",
      path: "src/components/ag-grid/DeploymentDownloadCellRenderer/DeploymentDownloadCellRenderer.tsx#DeploymentDownloadCellRenderer"
    };
} catch (__react_docgen_typescript_loader_error) {}

/***/ })

})
//# sourceMappingURL=main.c7ed0e70ec4b4b13bba3.hot-update.js.map