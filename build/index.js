/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/keyboard-return.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/keyboard-return.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const keyboardReturn = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.734 16.106l2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.157 1.093-1.027-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734z"
}));
/* harmony default export */ __webpack_exports__["default"] = (keyboardReturn);
//# sourceMappingURL=keyboard-return.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/link.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const link = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (link);
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./src/blocks/index.js":
/*!*****************************!*\
  !*** ./src/blocks/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerBlocks": function() { return /* binding */ registerBlocks; }
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg-selector */ "./src/blocks/svg-selector/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const blocks = [_svg_selector__WEBPACK_IMPORTED_MODULE_1__];

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
const registerBlock = block => {
  if (!block) {
    return;
  }
  const {
    metadata,
    settings,
    name
  } = block;
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
    ...metadata,
    ...settings
  });
};

/**
 * Function to register blocks.
 *
 */
const registerBlocks = () => {
  blocks.forEach(registerBlock);
};

/***/ }),

/***/ "./src/blocks/svg-selector/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/svg-selector/edit.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/keyboard-return.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon-component */ "./src/blocks/svg-selector/icon-component.js");

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */

const LinkURLPopover = _ref => {
  let {
    url,
    setAttributes,
    setPopover,
    popoverAnchor
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.URLPopover, {
    anchor: popoverAnchor,
    onClose: () => setPopover(false)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "block-editor-url-popover__link-editor",
    onSubmit: event => {
      event.preventDefault();
      setPopover(false);
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-editor-url-input"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.URLInput, {
    __nextHasNoMarginBottom: true,
    value: url,
    onChange: nextURL => setAttributes({
      url: nextURL
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Enter address'),
    disableSuggestions: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Apply'),
    type: "submit"
  })));
};
const SVGSelectorContainer = _ref2 => {
  let {
    attributes,
    isSelected,
    setAttributes
  } = _ref2;
  const {
    slug,
    url,
    showLabel,
    label,
    size
  } = attributes;
  const [showURLPopover, setPopover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [popoverAnchor, setPopoverAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('hrswds-svg-icon', 'hrswds-svg-icon-' + slug, {
    'has-visible-label': showLabel
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: classes
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, {
    group: "block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Add link'),
    ref: setPopoverAnchor,
    onClick: () => setPopover(true)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Icon settings')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Size'),
    onChange: newSize => setAttributes({
      size: newSize
    }),
    min: 16,
    max: 1104,
    step: 16,
    initialPosition: size,
    value: size || 48
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Label settings')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Icon label'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Add accompanying text or briefly describe the icon to help screen reader users.'),
    value: label || '',
    onChange: value => setAttributes({
      label: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show label'),
    checked: showLabel,
    onChange: () => setAttributes({
      showLabel: !showLabel
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon_component__WEBPACK_IMPORTED_MODULE_8__.IconComponent, {
    slug: slug,
    url: url,
    showLabel: showLabel,
    label: label,
    size: size
  }), isSelected && showURLPopover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LinkURLPopover, {
    url: url,
    setAttributes: setAttributes,
    setPopover: setPopover,
    popoverAnchor: popoverAnchor
  }));
};
const Placeholder = _ref3 => {
  let {
    name,
    setAttributes
  } = _ref3;
  const {
    blockType,
    defaultVariation,
    variations
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.useSelect)(select => {
    const {
      getBlockVariations,
      getBlockType,
      getDefaultBlockVariation
    } = select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.store);
    return {
      blockType: getBlockType(name),
      defaultVariation: getDefaultBlockVariation(name, 'block'),
      variations: getBlockVariations(name, 'block')
    };
  }, [name]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalBlockVariationPicker, {
    icon: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(blockType, ['icon', 'src']),
    label: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(blockType, ['title']),
    variations: variations,
    onSelect: function () {
      let nextVariation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultVariation;
      if (nextVariation.attributes) {
        setAttributes(nextVariation.attributes);
      }
    }
  }));
};
const SVGSelectorEdit = props => {
  const {
    attributes
  } = props;
  const hasSelected = attributes.slug?.length > 0;
  const Component = hasSelected ? SVGSelectorContainer : Placeholder;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, props);
};
/* harmony default export */ __webpack_exports__["default"] = (SVGSelectorEdit);

/***/ }),

/***/ "./src/blocks/svg-selector/icon-component.js":
/*!***************************************************!*\
  !*** ./src/blocks/svg-selector/icon-component.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconComponent": function() { return /* binding */ IconComponent; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/blocks/svg-selector/utils.js");

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

const preventDefault = event => event.preventDefault();
const IconComponent = props => {
  const {
    slug,
    url,
    showLabel,
    label,
    size
  } = props;
  const Icon = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getIconBySlug)(slug);
  const iconTitle = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getTitleBySlug)(slug);
  const iconLabel = label !== null && label !== void 0 ? label : iconTitle;
  const labelClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('hrswds-svg-icon-label', {
    'screen-reader-text': !showLabel
  });
  const element = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
    size: size
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: labelClassName
  }, iconLabel));
  if (url) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: url,
      onClick: preventDefault
    }, element);
  }
  return element;
};

/***/ }),

/***/ "./src/blocks/svg-selector/index.js":
/*!******************************************!*\
  !*** ./src/blocks/svg-selector/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/svg-selector/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/svg-selector/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/svg-selector/save.js");
/* harmony import */ var _svg_cougar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg/cougar */ "./src/blocks/svg-selector/svg/cougar.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variations */ "./src/blocks/svg-selector/variations.js");
/**
 * Internal dependencies
 */





const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;

const settings = {
  icon: _svg_cougar__WEBPACK_IMPORTED_MODULE_3__.CougarIcon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  variations: _variations__WEBPACK_IMPORTED_MODULE_4__["default"]
};

/***/ }),

/***/ "./src/blocks/svg-selector/save.js":
/*!*****************************************!*\
  !*** ./src/blocks/svg-selector/save.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon-component */ "./src/blocks/svg-selector/icon-component.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    slug,
    url,
    showLabel,
    label,
    size
  } = attributes;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('hrswds-svg-icon', 'hrswds-svg-icon-' + slug, {
    'has-visible-label': showLabel
  });
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: classes
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, {
    slug: slug,
    url: url,
    showLabel: showLabel,
    label: label,
    size: size
  }));
}

/***/ }),

/***/ "./src/blocks/svg-selector/svg/chain.js":
/*!**********************************************!*\
  !*** ./src/blocks/svg-selector/svg/chain.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChainIcon": function() { return /* binding */ ChainIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const ChainIcon = _ref => {
  let {
    size
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M19.647,16.706a1.134,1.134,0,0,0-.343-.833l-2.549-2.549a1.134,1.134,0,0,0-.833-.343,1.168,1.168,0,0,0-.883.392l.233.226q.2.189.264.264a2.922,2.922,0,0,1,.184.233.986.986,0,0,1,.159.312,1.242,1.242,0,0,1,.043.337,1.172,1.172,0,0,1-1.176,1.176,1.237,1.237,0,0,1-.337-.043,1,1,0,0,1-.312-.159,2.76,2.76,0,0,1-.233-.184q-.073-.068-.264-.264l-.226-.233a1.19,1.19,0,0,0-.4.895,1.134,1.134,0,0,0,.343.833L15.837,19.3a1.13,1.13,0,0,0,.833.331,1.18,1.18,0,0,0,.833-.318l1.8-1.789a1.12,1.12,0,0,0,.343-.821Zm-8.615-8.64a1.134,1.134,0,0,0-.343-.833L8.163,4.7a1.134,1.134,0,0,0-.833-.343,1.184,1.184,0,0,0-.833.331L4.7,6.473a1.12,1.12,0,0,0-.343.821,1.134,1.134,0,0,0,.343.833l2.549,2.549a1.13,1.13,0,0,0,.833.331,1.184,1.184,0,0,0,.883-.38L8.728,10.4q-.2-.189-.264-.264A2.922,2.922,0,0,1,8.28,9.9a.986.986,0,0,1-.159-.312,1.242,1.242,0,0,1-.043-.337A1.172,1.172,0,0,1,9.254,8.079a1.237,1.237,0,0,1,.337.043,1,1,0,0,1,.312.159,2.761,2.761,0,0,1,.233.184q.073.068.264.264l.226.233a1.19,1.19,0,0,0,.4-.895ZM22,16.706a3.343,3.343,0,0,1-1.042,2.488l-1.8,1.789a3.536,3.536,0,0,1-4.988-.025l-2.525-2.537a3.384,3.384,0,0,1-1.017-2.488,3.448,3.448,0,0,1,1.078-2.561l-1.078-1.078a3.434,3.434,0,0,1-2.549,1.078,3.4,3.4,0,0,1-2.5-1.029L3.029,9.794A3.4,3.4,0,0,1,2,7.294,3.343,3.343,0,0,1,3.042,4.806l1.8-1.789A3.384,3.384,0,0,1,7.331,2a3.357,3.357,0,0,1,2.5,1.042l2.525,2.537a3.384,3.384,0,0,1,1.017,2.488,3.448,3.448,0,0,1-1.078,2.561l1.078,1.078a3.551,3.551,0,0,1,5.049-.049l2.549,2.549A3.4,3.4,0,0,1,22,16.706Z"
  }));
};

/***/ }),

/***/ "./src/blocks/svg-selector/svg/cougar.js":
/*!***********************************************!*\
  !*** ./src/blocks/svg-selector/svg/cougar.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CougarIcon": function() { return /* binding */ CougarIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const CougarIcon = _ref => {
  let {
    size
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    width: size,
    height: size,
    viewBox: "0 0 70.2 69.6",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "m42.8 69.6s3.6-1.5 5.5-7.4c1 2.3 1.5 4.8 1.3 7.3-2.3 0.1-4.5 0.2-6.8 0.1zm14.9-11.8c-10.4 1.4-12.2-20.3-12.2-20.3s3.5 11.1 10.9 10.7c7.7-0.4 5.5-12.2 5.5-12.2s7.5 20.2-4.2 21.8zm-47.7-5c-3.3 1-6.6 1.8-10 2.4 0 0 5.9-4.5 10.3-18.3l4.3 3.9-0.8 2.6c1.1 1.5 1.9 3.1 2.5 4.9 1.6-3.6 1.5-7.7-0.3-11.2l-0.5 1.6-1.7-1.5-2.8-2.7c1.2-3.6 3-7 5.3-10.1l0.4 0.4 3.3 3.8-1 1.7c1.5 1.7 2.9 3.4 4.2 5.3 0.6-3.4 0.4-6.8-0.4-10.1l-1.5 1.4-3.6-4.2c4.5-4.7 10-8.2 16.2-10.3-0.4 0.4-0.7 0.8-1 1.3-2 2.9-4.1 8.1-2.4 16.4 0.3 1.3 0.7 3.2 1.1 5.1 0.9 3.8 1.9 8.2 2.2 10.9 0.7 5.7 0.1 9.4-1.8 11.4-1.3 1.4-3.5 2-6.4 1.9v-1.4c0-2.4-0.3-4.8-0.8-7.2l-0.8-2.7-1.2 2.6c-1.9 4.1-8.6 14.1-17.2 16.1 2.6-4.2 4.1-9 4.4-14zm25.4 16.4h-0.5-0.1-0.3c-0.5 0-0.8-0.1-1.2-0.1-0.7-0.1-1.6-0.2-2.6-0.4-6.4-1.1-12.9-1.7-19.4-2 6.2-3.6 10.4-9.9 12-12.5 0.2 1.3 0.3 2.5 0.3 3.8 0 0.8 0 1.6-0.1 2.2l-0.1 1.1 1.1 0.1c0.7 0.1 1.3 0.1 1.9 0.1 3.3 0 5.7-0.8 7.3-2.5 2.4-2.5 3.1-6.7 2.3-13.1-0.4-2.9-1.4-7.4-2.3-11.1-0.5-2-0.9-3.8-1.1-5-1.5-7.6 0.3-12.3 2.1-14.8 1.3-1.9 3.2-3.4 5.5-4.2h0.1l3.3-10.8h1.1l-2.3 10.3c0.7-0.1 1.2-0.2 1.7-0.3l3-9.5h1.1l-2 9.2c2.9-0.4 6.1-0.7 10.3-1 0.8 0.4 1.4 1.1 1.8 1.9l9.8-3 0.4 1.1-9.5 3.7c0.1 0.2 0.2 0.4 0.2 0.6l10.3-1.3 0.2 1.1-10 2c0 0.2 0.1 0.4 0.1 0.6l10.4 0.3v1.1l-10.2 0.4c0 1.2-0.2 2.4-0.5 3.6 0.6 2.1 0.7 4.3 0.3 6.5-1.7-3.9-3-5.1-3-5.1-1.4-0.7-2.9-1-4.5-1-2.5 0-4.8 1.1-6.4 2.9-2.3 2.6-3.5 6-3.3 9.5 0.2 2.4 0.7 5.1 1.4 8.6 0.7 3.6 1.6 8.1 2.3 13.5 0.6 4.1-0.1 7.3-1.8 9.7-1.6 2.1-4 3.4-6.5 3.8h-0.1-0.2-0.1-2.2zm10.4-51.5c-2.1-0.1-4.2 0.4-6 1.3-1.5 1-2.5 2.7-2.6 4.5-0.1 0.6-0.1 1.2 0 1.8 0.8-1.5 2-2.8 3.3-3.9 2.4-1.5 5.1-2.3 7.9-2.4h0.9 0.3c0.4 0 0.7-0.1 0.8-0.2 0-0.1-0.1-0.3-0.4-0.4-1.3-0.5-2.7-0.8-4.2-0.7z"
  }));
};

/***/ }),

/***/ "./src/blocks/svg-selector/svg/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/svg-selector/svg/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChainIcon": function() { return /* reexport safe */ _chain__WEBPACK_IMPORTED_MODULE_0__.ChainIcon; },
/* harmony export */   "CougarIcon": function() { return /* reexport safe */ _cougar__WEBPACK_IMPORTED_MODULE_1__.CougarIcon; },
/* harmony export */   "LabIcon": function() { return /* reexport safe */ _lab__WEBPACK_IMPORTED_MODULE_2__.LabIcon; },
/* harmony export */   "RocketIcon": function() { return /* reexport safe */ _rocket__WEBPACK_IMPORTED_MODULE_3__.RocketIcon; },
/* harmony export */   "TreesIcon": function() { return /* reexport safe */ _trees__WEBPACK_IMPORTED_MODULE_4__.TreesIcon; },
/* harmony export */   "WrenchIcon": function() { return /* reexport safe */ _wrench__WEBPACK_IMPORTED_MODULE_5__.WrenchIcon; }
/* harmony export */ });
/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chain */ "./src/blocks/svg-selector/svg/chain.js");
/* harmony import */ var _cougar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cougar */ "./src/blocks/svg-selector/svg/cougar.js");
/* harmony import */ var _lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lab */ "./src/blocks/svg-selector/svg/lab.js");
/* harmony import */ var _rocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rocket */ "./src/blocks/svg-selector/svg/rocket.js");
/* harmony import */ var _trees__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trees */ "./src/blocks/svg-selector/svg/trees.js");
/* harmony import */ var _wrench__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wrench */ "./src/blocks/svg-selector/svg/wrench.js");







/***/ }),

/***/ "./src/blocks/svg-selector/svg/lab.js":
/*!********************************************!*\
  !*** ./src/blocks/svg-selector/svg/lab.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabIcon": function() { return /* binding */ LabIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const LabIcon = _ref => {
  let {
    size
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M9 41q-1.6 0-2.275-1.475-.675-1.475.425-2.675l12.3-14.15V9.25H16.6q-.45 0-.775-.325T15.5 8.1q0-.45.325-.775T16.6 7h14.8q.45 0 .775.325t.325.825q0 .5-.325.8-.325.3-.775.3h-2.85V22.7l12.3 14.15q1.1 1.2.425 2.675Q40.6 41 39 41Z"
  }));
};

/***/ }),

/***/ "./src/blocks/svg-selector/svg/rocket.js":
/*!***********************************************!*\
  !*** ./src/blocks/svg-selector/svg/rocket.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RocketIcon": function() { return /* binding */ RocketIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const RocketIcon = _ref => {
  let {
    size
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "m9.5 42.6 7.75-3.05q-1.45-3.45-2.125-6.35-.675-2.9-.925-6.75l-3.05 2.05q-.8.5-1.225 1.325-.425.825-.425 1.725Zm9.2-3.8h10.6q1.4-3.4 2.15-6.85.75-3.45.75-6.9 0-5.75-2.15-10.725T24 6.2q-3.9 3.15-6.05 8.125T15.8 25.05q0 3.45.75 6.9t2.15 6.85ZM24 25.15q-1.3 0-2.225-.925T20.85 22q0-1.3.925-2.225T24 18.85q1.3 0 2.225.925T27.15 22q0 1.3-.925 2.225T24 25.15ZM38.45 42.6V31.55q0-.9-.425-1.725Q37.6 29 36.85 28.55l-3.05-2.1q-.3 3.85-.95 6.775-.65 2.925-2.1 6.325Z"
  }));
};

/***/ }),

/***/ "./src/blocks/svg-selector/svg/trees.js":
/*!**********************************************!*\
  !*** ./src/blocks/svg-selector/svg/trees.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreesIcon": function() { return /* binding */ TreesIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const TreesIcon = _ref => {
  let {
    size
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M27.85 43v-6.2h4.35V43Zm-12 0v-7.6H1.9L11 22.15H6.45L18 5.75l11.55 16.4h-4.5l9.1 13.25H20.2V43Zm20-7.6-8.1-11.85h4.5L24.85 13 30 5.75l11.55 16.4h-4.5L46.1 35.4Z"
  }));
};

/***/ }),

/***/ "./src/blocks/svg-selector/svg/wrench.js":
/*!***********************************************!*\
  !*** ./src/blocks/svg-selector/svg/wrench.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrenchIcon": function() { return /* binding */ WrenchIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const WrenchIcon = _ref => {
  let {
    size
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
    d: "M35.65 41.35 22.45 28.1q-1.15.45-2.325.75-1.175.3-2.475.3-4.65 0-7.95-3.275T6.4 17.9q0-1.35.325-2.65.325-1.3.975-2.45l7.15 7.1 5-4.8-7.2-7.25q1.15-.65 2.425-1t2.575-.35q4.75 0 8.1 3.35 3.35 3.35 3.35 8.05 0 1.35-.275 2.525-.275 1.175-.775 2.275L41.3 35.9q.45.5.45 1.2t-.45 1.15l-3.35 3.15q-.5.45-1.15.425-.65-.025-1.15-.475Z"
  }));
};

/***/ }),

/***/ "./src/blocks/svg-selector/utils.js":
/*!******************************************!*\
  !*** ./src/blocks/svg-selector/utils.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIconBySlug": function() { return /* binding */ getIconBySlug; },
/* harmony export */   "getTitleBySlug": function() { return /* binding */ getTitleBySlug; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variations */ "./src/blocks/svg-selector/variations.js");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg */ "./src/blocks/svg-selector/svg/index.js");
/**
 * WordPress dependencies
 */



const getIconBySlug = slug => {
  const variation = _variations__WEBPACK_IMPORTED_MODULE_1__["default"].find(v => v.name === slug);
  return variation ? variation.icon : _svg__WEBPACK_IMPORTED_MODULE_2__.ChainIcon;
};
const getTitleBySlug = slug => {
  const variation = _variations__WEBPACK_IMPORTED_MODULE_1__["default"].find(v => v.name === slug);
  return variation ? variation.title : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon');
};

/***/ }),

/***/ "./src/blocks/svg-selector/variations.js":
/*!***********************************************!*\
  !*** ./src/blocks/svg-selector/variations.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg */ "./src/blocks/svg-selector/svg/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const variations = [{
  name: 'cougar',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('WSU Cougar head'),
  attributes: {
    slug: 'cougar'
  },
  scope: ['block'],
  icon: _svg__WEBPACK_IMPORTED_MODULE_1__.CougarIcon
}, {
  name: 'chain',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link'),
  attributes: {
    slug: 'chain'
  },
  scope: ['block'],
  icon: _svg__WEBPACK_IMPORTED_MODULE_1__.ChainIcon
}, {
  name: 'lab',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Laboratory beaker'),
  attributes: {
    slug: 'lab'
  },
  scope: ['block'],
  icon: _svg__WEBPACK_IMPORTED_MODULE_1__.LabIcon
}, {
  name: 'rocket',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rocket'),
  attributes: {
    slug: 'rocket'
  },
  scope: ['block'],
  icon: _svg__WEBPACK_IMPORTED_MODULE_1__.RocketIcon
}, {
  name: 'trees',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Trees'),
  attributes: {
    slug: 'trees'
  },
  scope: ['block'],
  icon: _svg__WEBPACK_IMPORTED_MODULE_1__.TreesIcon
}, {
  name: 'wrench',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Wrench'),
  attributes: {
    slug: 'wrench'
  },
  scope: ['block'],
  icon: _svg__WEBPACK_IMPORTED_MODULE_1__.WrenchIcon
}];
variations.forEach(variation => {
  if (variation.isActive) return;
  variation.isActive = (blockAttributes, variationAttributes) => blockAttributes.slug === variationAttributes.slug;
});
/* harmony default export */ __webpack_exports__["default"] = (variations);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./src/blocks/svg-selector/block.json":
/*!********************************************!*\
  !*** ./src/blocks/svg-selector/block.json ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"hrswds/svg-selector","title":"SVG Selector","category":"media","description":"Insert an icon from a library of SVGs.","keywords":["img","icon","svg"],"textdomain":"default","attributes":{"slug":{"type":"string"},"size":{"type":"number","default":48},"url":{"type":"string"},"showLabel":{"type":"boolean","default":false},"label":{"type":"string"}},"supports":{"reusable":false,"html":false},"editorScript":"hrswds-blocks-script","style":"hrswds-blocks-style"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ "./src/blocks/index.js");
/**
 * Internal dependencies
 */

(0,_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlocks)();
}();
/******/ })()
;
//# sourceMappingURL=index.js.map