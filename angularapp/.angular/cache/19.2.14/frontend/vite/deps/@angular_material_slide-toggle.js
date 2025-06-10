import {
  CheckboxRequiredValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "./chunk-7HUIPI3G.js";
import "./chunk-ZVLX4DNF.js";
import {
  FocusMonitor,
  MatCommonModule,
  Platform,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _getEventTarget,
  coerceElement,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader,
  normalizePassiveListenerOptions
} from "./chunk-MVGOXMVH.js";
import "./chunk-H3T65ING.js";
import "./chunk-FJ2LSRVL.js";
import "./chunk-3B7WPXDT.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-MTES5EJZ.js";
import {
  __spreadValues
} from "./chunk-S35MAB2V.js";

// node_modules/@angular/material/fesm2022/structural-styles-BQUT6wsL.mjs
var _StructuralStylesLoader = class __StructuralStylesLoader {
  static ɵfac = function _StructuralStylesLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __StructuralStylesLoader)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: __StructuralStylesLoader,
    selectors: [["structural-styles"]],
    decls: 0,
    vars: 0,
    template: function _StructuralStylesLoader_Template(rf, ctx) {
    },
    styles: ['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_StructuralStylesLoader, [{
    type: Component,
    args: [{
      selector: "structural-styles",
      encapsulation: ViewEncapsulation.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n']
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/scrolling-BkvA05C8.mjs
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));

// node_modules/@angular/cdk/fesm2022/platform.mjs
var PlatformModule = class _PlatformModule {
  static ɵfac = function PlatformModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PlatformModule
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/ripple-BT3tzh6F.mjs
var RippleState;
(function(RippleState2) {
  RippleState2[RippleState2["FADING_IN"] = 0] = "FADING_IN";
  RippleState2[RippleState2["VISIBLE"] = 1] = "VISIBLE";
  RippleState2[RippleState2["FADING_OUT"] = 2] = "FADING_OUT";
  RippleState2[RippleState2["HIDDEN"] = 3] = "HIDDEN";
})(RippleState || (RippleState = {}));
var RippleRef = class {
  _renderer;
  element;
  config;
  _animationForciblyDisabledThroughCss;
  /** Current state of the ripple. */
  state = RippleState.HIDDEN;
  constructor(_renderer, element, config, _animationForciblyDisabledThroughCss = false) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
  }
  /** Fades out the ripple element. */
  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }
};
var passiveCapturingEventOptions$1 = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var RippleEventManager = class {
  _events = /* @__PURE__ */ new Map();
  /** Adds an event handler. */
  addHandler(ngZone, name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (handlersForEvent) {
      const handlersForElement = handlersForEvent.get(element);
      if (handlersForElement) {
        handlersForElement.add(handler);
      } else {
        handlersForEvent.set(element, /* @__PURE__ */ new Set([handler]));
      }
    } else {
      this._events.set(name, /* @__PURE__ */ new Map([[element, /* @__PURE__ */ new Set([handler])]]));
      ngZone.runOutsideAngular(() => {
        document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
      });
    }
  }
  /** Removes an event handler. */
  removeHandler(name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (!handlersForEvent) {
      return;
    }
    const handlersForElement = handlersForEvent.get(element);
    if (!handlersForElement) {
      return;
    }
    handlersForElement.delete(handler);
    if (handlersForElement.size === 0) {
      handlersForEvent.delete(element);
    }
    if (handlersForEvent.size === 0) {
      this._events.delete(name);
      document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
    }
  }
  /** Event handler that is bound and which dispatches the events to the different targets. */
  _delegateEventHandler = (event) => {
    const target = _getEventTarget(event);
    if (target) {
      this._events.get(event.type)?.forEach((handlers, element) => {
        if (element === target || element.contains(target)) {
          handlers.forEach((handler) => handler.handleEvent(event));
        }
      });
    }
  };
};
var defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
var ignoreMouseEventsTimeout = 800;
var passiveCapturingEventOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var pointerDownEvents = ["mousedown", "touchstart"];
var pointerUpEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];
var _MatRippleStylesLoader = class __MatRippleStylesLoader {
  static ɵfac = function _MatRippleStylesLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __MatRippleStylesLoader)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: __MatRippleStylesLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["mat-ripple-style-loader", ""],
    decls: 0,
    vars: 0,
    template: function _MatRippleStylesLoader_Template(rf, ctx) {
    },
    styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatRippleStylesLoader, [{
    type: Component,
    args: [{
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "mat-ripple-style-loader": ""
      },
      styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}\n"]
    }]
  }], null, null);
})();
var RippleRenderer = class _RippleRenderer {
  _target;
  _ngZone;
  _platform;
  /** Element where the ripples are being added to. */
  _containerElement;
  /** Element which triggers the ripple elements on mouse events. */
  _triggerElement;
  /** Whether the pointer is currently down or not. */
  _isPointerDown = false;
  /**
   * Map of currently active ripple references.
   * The ripple reference is mapped to its element event listeners.
   * The reason why `| null` is used is that event listeners are added only
   * when the condition is truthy (see the `_startFadeOutTransition` method).
   */
  _activeRipples = /* @__PURE__ */ new Map();
  /** Latest non-persistent ripple that was triggered. */
  _mostRecentTransientRipple;
  /** Time in milliseconds when the last touchstart event happened. */
  _lastTouchStartEvent;
  /** Whether pointer-up event listeners have been registered. */
  _pointerUpEventsRegistered = false;
  /**
   * Cached dimensions of the ripple container. Set when the first
   * ripple is shown and cleared once no more ripples are visible.
   */
  _containerRect;
  static _eventManager = new RippleEventManager();
  constructor(_target, _ngZone, elementOrElementRef, _platform, injector) {
    this._target = _target;
    this._ngZone = _ngZone;
    this._platform = _platform;
    if (_platform.isBrowser) {
      this._containerElement = coerceElement(elementOrElementRef);
    }
    if (injector) {
      injector.get(_CdkPrivateStyleLoader).load(_MatRippleStylesLoader);
    }
  }
  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */
  fadeInRipple(x, y, config = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), config.animation);
    if (config.centered) {
      x = containerRect.left + containerRect.width / 2;
      y = containerRect.top + containerRect.height / 2;
    }
    const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;
    const enterDuration = animationConfig.enterDuration;
    const ripple = document.createElement("div");
    ripple.classList.add("mat-ripple-element");
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;
    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }
    ripple.style.transitionDuration = `${enterDuration}ms`;
    this._containerElement.appendChild(ripple);
    const computedStyles = window.getComputedStyle(ripple);
    const userTransitionProperty = computedStyles.transitionProperty;
    const userTransitionDuration = computedStyles.transitionDuration;
    const animationForciblyDisabledThroughCss = userTransitionProperty === "none" || // Note: The canonical unit for serialized CSS `<time>` properties is seconds. Additionally
    // some browsers expand the duration for every property (in our case `opacity` and `transform`).
    userTransitionDuration === "0s" || userTransitionDuration === "0s, 0s" || // If the container is 0x0, it's likely `display: none`.
    containerRect.width === 0 && containerRect.height === 0;
    const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
    ripple.style.transform = "scale3d(1, 1, 1)";
    rippleRef.state = RippleState.FADING_IN;
    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    }
    let eventListeners = null;
    if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
      this._ngZone.runOutsideAngular(() => {
        const onTransitionEnd = () => {
          if (eventListeners) {
            eventListeners.fallbackTimer = null;
          }
          clearTimeout(fallbackTimer);
          this._finishRippleTransition(rippleRef);
        };
        const onTransitionCancel = () => this._destroyRipple(rippleRef);
        const fallbackTimer = setTimeout(onTransitionCancel, enterDuration + 100);
        ripple.addEventListener("transitionend", onTransitionEnd);
        ripple.addEventListener("transitioncancel", onTransitionCancel);
        eventListeners = {
          onTransitionEnd,
          onTransitionCancel,
          fallbackTimer
        };
      });
    }
    this._activeRipples.set(rippleRef, eventListeners);
    if (animationForciblyDisabledThroughCss || !enterDuration) {
      this._finishRippleTransition(rippleRef);
    }
    return rippleRef;
  }
  /** Fades out a ripple reference. */
  fadeOutRipple(rippleRef) {
    if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
      return;
    }
    const rippleEl = rippleRef.element;
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), rippleRef.config.animation);
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = "0";
    rippleRef.state = RippleState.FADING_OUT;
    if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
      this._finishRippleTransition(rippleRef);
    }
  }
  /** Fades out all currently active ripples. */
  fadeOutAll() {
    this._getActiveRipples().forEach((ripple) => ripple.fadeOut());
  }
  /** Fades out all currently active non-persistent ripples. */
  fadeOutAllNonPersistent() {
    this._getActiveRipples().forEach((ripple) => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  /** Sets up the trigger event listeners */
  setupTriggerEvents(elementOrElementRef) {
    const element = coerceElement(elementOrElementRef);
    if (!this._platform.isBrowser || !element || element === this._triggerElement) {
      return;
    }
    this._removeTriggerEvents();
    this._triggerElement = element;
    pointerDownEvents.forEach((type) => {
      _RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
    });
  }
  /**
   * Handles all registered events.
   * @docs-private
   */
  handleEvent(event) {
    if (event.type === "mousedown") {
      this._onMousedown(event);
    } else if (event.type === "touchstart") {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    }
    if (!this._pointerUpEventsRegistered) {
      this._ngZone.runOutsideAngular(() => {
        pointerUpEvents.forEach((type) => {
          this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
        });
      });
      this._pointerUpEventsRegistered = true;
    }
  }
  /** Method that will be called if the fade-in or fade-in transition completed. */
  _finishRippleTransition(rippleRef) {
    if (rippleRef.state === RippleState.FADING_IN) {
      this._startFadeOutTransition(rippleRef);
    } else if (rippleRef.state === RippleState.FADING_OUT) {
      this._destroyRipple(rippleRef);
    }
  }
  /**
   * Starts the fade-out transition of the given ripple if it's not persistent and the pointer
   * is not held down anymore.
   */
  _startFadeOutTransition(rippleRef) {
    const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
    const {
      persistent
    } = rippleRef.config;
    rippleRef.state = RippleState.VISIBLE;
    if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
      rippleRef.fadeOut();
    }
  }
  /** Destroys the given ripple by removing it from the DOM and updating its state. */
  _destroyRipple(rippleRef) {
    const eventListeners = this._activeRipples.get(rippleRef) ?? null;
    this._activeRipples.delete(rippleRef);
    if (!this._activeRipples.size) {
      this._containerRect = null;
    }
    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    }
    rippleRef.state = RippleState.HIDDEN;
    if (eventListeners !== null) {
      rippleRef.element.removeEventListener("transitionend", eventListeners.onTransitionEnd);
      rippleRef.element.removeEventListener("transitioncancel", eventListeners.onTransitionCancel);
      if (eventListeners.fallbackTimer !== null) {
        clearTimeout(eventListeners.fallbackTimer);
      }
    }
    rippleRef.element.remove();
  }
  /** Function being called whenever the trigger is being pressed using mouse. */
  _onMousedown(event) {
    const isFakeMousedown = isFakeMousedownFromScreenReader(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  /** Function being called whenever the trigger is being pressed using touch. */
  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !isFakeTouchstartFromScreenReader(event)) {
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true;
      const touches = event.changedTouches;
      if (touches) {
        for (let i = 0; i < touches.length; i++) {
          this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
        }
      }
    }
  }
  /** Function being called whenever the trigger is being released. */
  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }
    this._isPointerDown = false;
    this._getActiveRipples().forEach((ripple) => {
      const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  _getActiveRipples() {
    return Array.from(this._activeRipples.keys());
  }
  /** Removes previously registered event listeners from the trigger element. */
  _removeTriggerEvents() {
    const trigger = this._triggerElement;
    if (trigger) {
      pointerDownEvents.forEach((type) => _RippleRenderer._eventManager.removeHandler(type, trigger, this));
      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach((type) => trigger.removeEventListener(type, this, passiveCapturingEventOptions));
        this._pointerUpEventsRegistered = false;
      }
    }
  }
};
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
var MAT_RIPPLE_GLOBAL_OPTIONS = new InjectionToken("mat-ripple-global-options");
var MatRipple = class _MatRipple {
  _elementRef = inject(ElementRef);
  _animationMode = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  /** Custom color for all ripples. */
  color;
  /** Whether the ripples should be visible outside the component's bounds. */
  unbounded;
  /**
   * Whether the ripple always originates from the center of the host element's bounds, rather
   * than originating from the location of the click event.
   */
  centered;
  /**
   * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
   * will be the distance from the center of the ripple to the furthest corner of the host element's
   * bounding rectangle.
   */
  radius = 0;
  /**
   * Configuration for the ripple animation. Allows modifying the enter and exit animation
   * duration of the ripples. The animation durations will be overwritten if the
   * `NoopAnimationsModule` is being used.
   */
  animation;
  /**
   * Whether click events will not trigger the ripple. Ripples can be still launched manually
   * by using the `launch()` method.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value) {
      this.fadeOutAllNonPersistent();
    }
    this._disabled = value;
    this._setupTriggerEventsIfEnabled();
  }
  _disabled = false;
  /**
   * The element that triggers the ripple when click events are received.
   * Defaults to the directive's host element.
   */
  get trigger() {
    return this._trigger || this._elementRef.nativeElement;
  }
  set trigger(trigger) {
    this._trigger = trigger;
    this._setupTriggerEventsIfEnabled();
  }
  _trigger;
  /** Renderer for the ripple DOM manipulations. */
  _rippleRenderer;
  /** Options that are set globally for all ripples. */
  _globalOptions;
  /** @docs-private Whether ripple directive is initialized and the input bindings are set. */
  _isInitialized = false;
  constructor() {
    const ngZone = inject(NgZone);
    const platform = inject(Platform);
    const globalOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    const injector = inject(Injector);
    this._globalOptions = globalOptions || {};
    this._rippleRenderer = new RippleRenderer(this, ngZone, this._elementRef, platform, injector);
  }
  ngOnInit() {
    this._isInitialized = true;
    this._setupTriggerEventsIfEnabled();
  }
  ngOnDestroy() {
    this._rippleRenderer._removeTriggerEvents();
  }
  /** Fades out all currently showing ripple elements. */
  fadeOutAll() {
    this._rippleRenderer.fadeOutAll();
  }
  /** Fades out all currently showing non-persistent ripple elements. */
  fadeOutAllNonPersistent() {
    this._rippleRenderer.fadeOutAllNonPersistent();
  }
  /**
   * Ripple configuration from the directive's input values.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleConfig() {
    return {
      centered: this.centered,
      radius: this.radius,
      color: this.color,
      animation: __spreadValues(__spreadValues(__spreadValues({}, this._globalOptions.animation), this._animationMode === "NoopAnimations" ? {
        enterDuration: 0,
        exitDuration: 0
      } : {}), this.animation),
      terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
    };
  }
  /**
   * Whether ripples on pointer-down are disabled or not.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleDisabled() {
    return this.disabled || !!this._globalOptions.disabled;
  }
  /** Sets up the trigger event listeners if ripples are enabled. */
  _setupTriggerEventsIfEnabled() {
    if (!this.disabled && this._isInitialized) {
      this._rippleRenderer.setupTriggerEvents(this.trigger);
    }
  }
  /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
  launch(configOrX, y = 0, config) {
    if (typeof configOrX === "number") {
      return this._rippleRenderer.fadeInRipple(configOrX, y, __spreadValues(__spreadValues({}, this.rippleConfig), config));
    } else {
      return this._rippleRenderer.fadeInRipple(0, 0, __spreadValues(__spreadValues({}, this.rippleConfig), configOrX));
    }
  }
  static ɵfac = function MatRipple_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRipple)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatRipple,
    selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
    hostAttrs: [1, "mat-ripple"],
    hostVars: 2,
    hostBindings: function MatRipple_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("mat-ripple-unbounded", ctx.unbounded);
      }
    },
    inputs: {
      color: [0, "matRippleColor", "color"],
      unbounded: [0, "matRippleUnbounded", "unbounded"],
      centered: [0, "matRippleCentered", "centered"],
      radius: [0, "matRippleRadius", "radius"],
      animation: [0, "matRippleAnimation", "animation"],
      disabled: [0, "matRippleDisabled", "disabled"],
      trigger: [0, "matRippleTrigger", "trigger"]
    },
    exportAs: ["matRipple"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRipple, [{
    type: Directive,
    args: [{
      selector: "[mat-ripple], [matRipple]",
      exportAs: "matRipple",
      host: {
        "class": "mat-ripple",
        "[class.mat-ripple-unbounded]": "unbounded"
      }
    }]
  }], () => [], {
    color: [{
      type: Input,
      args: ["matRippleColor"]
    }],
    unbounded: [{
      type: Input,
      args: ["matRippleUnbounded"]
    }],
    centered: [{
      type: Input,
      args: ["matRippleCentered"]
    }],
    radius: [{
      type: Input,
      args: ["matRippleRadius"]
    }],
    animation: [{
      type: Input,
      args: ["matRippleAnimation"]
    }],
    disabled: [{
      type: Input,
      args: ["matRippleDisabled"]
    }],
    trigger: [{
      type: Input,
      args: ["matRippleTrigger"]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/internal-form-field-grv62mCZ.mjs
var _c0 = ["mat-internal-form-field", ""];
var _c1 = ["*"];
var _MatInternalFormField = class __MatInternalFormField {
  /** Position of the label relative to the content. */
  labelPosition;
  static ɵfac = function _MatInternalFormField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __MatInternalFormField)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: __MatInternalFormField,
    selectors: [["div", "mat-internal-form-field", ""]],
    hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
    hostVars: 2,
    hostBindings: function _MatInternalFormField_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("mdc-form-field--align-end", ctx.labelPosition === "before");
      }
    },
    inputs: {
      labelPosition: "labelPosition"
    },
    attrs: _c0,
    ngContentSelectors: _c1,
    decls: 1,
    vars: 0,
    template: function _MatInternalFormField_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatInternalFormField, [{
    type: Component,
    args: [{
      selector: "div[mat-internal-form-field]",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      },
      styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"]
    }]
  }], null, {
    labelPosition: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/slide-toggle.mjs
var _c02 = ["switch"];
var _c12 = ["*"];
function MatSlideToggle_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 12);
    ɵɵelement(2, "path", 13);
    ɵɵelementEnd();
    ɵɵelementStart(3, "svg", 14);
    ɵɵelement(4, "path", 15);
    ɵɵelementEnd()();
  }
}
var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("mat-slide-toggle-default-options", {
  providedIn: "root",
  factory: () => ({
    disableToggleValue: false,
    hideIcon: false,
    disabledInteractive: false
  })
});
var MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSlideToggle),
  multi: true
};
var MatSlideToggleChange = class {
  source;
  checked;
  constructor(source, checked) {
    this.source = source;
    this.checked = checked;
  }
};
var MatSlideToggle = class _MatSlideToggle {
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  defaults = inject(MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS);
  _onChange = (_) => {
  };
  _onTouched = () => {
  };
  _validatorOnChange = () => {
  };
  _uniqueId;
  _checked = false;
  _createChangeEvent(isChecked) {
    return new MatSlideToggleChange(this, isChecked);
  }
  /** Unique ID for the label element. */
  _labelId;
  /** Returns the unique id for the visual hidden button. */
  get buttonId() {
    return `${this.id || this._uniqueId}-button`;
  }
  /** Reference to the MDC switch element. */
  _switchElement;
  /** Focuses the slide-toggle. */
  focus() {
    this._switchElement.nativeElement.focus();
  }
  /** Whether noop animations are enabled. */
  _noopAnimations;
  /** Whether the slide toggle is currently focused. */
  _focused;
  /** Name value will be applied to the input element if present. */
  name = null;
  /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
  id;
  /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */
  labelPosition = "after";
  /** Used to set the aria-label attribute on the underlying input element. */
  ariaLabel = null;
  /** Used to set the aria-labelledby attribute on the underlying input element. */
  ariaLabelledby = null;
  /** Used to set the aria-describedby attribute on the underlying input element. */
  ariaDescribedby;
  /** Whether the slide-toggle is required. */
  required;
  // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
  // the lack of type checking previously and assigning random strings.
  /**
   * Theme color of the slide toggle. This API is supported in M2 themes only,
   * it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/slide-toggle/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Whether the slide toggle is disabled. */
  disabled = false;
  /** Whether the slide toggle has a ripple. */
  disableRipple = false;
  /** Tabindex of slide toggle. */
  tabIndex = 0;
  /** Whether the slide-toggle element is checked or not. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
    this._changeDetectorRef.markForCheck();
  }
  /** Whether to hide the icon inside of the slide toggle. */
  hideIcon;
  /** Whether the slide toggle should remain interactive when it is disabled. */
  disabledInteractive;
  /** An event will be dispatched each time the slide-toggle changes its value. */
  change = new EventEmitter();
  /**
   * An event will be dispatched each time the slide-toggle input is toggled.
   * This event is always emitted when the user toggles the slide toggle, but this does not mean
   * the slide toggle's value has changed.
   */
  toggleChange = new EventEmitter();
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const defaults = this.defaults;
    const animationMode = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.color = defaults.color || "accent";
    this._noopAnimations = animationMode === "NoopAnimations";
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-slide-toggle-");
    this.hideIcon = defaults.hideIcon ?? false;
    this.disabledInteractive = defaults.disabledInteractive ?? false;
    this._labelId = this._uniqueId + "-label";
  }
  ngAfterContentInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (focusOrigin === "keyboard" || focusOrigin === "program") {
        this._focused = true;
        this._changeDetectorRef.markForCheck();
      } else if (!focusOrigin) {
        Promise.resolve().then(() => {
          this._focused = false;
          this._onTouched();
          this._changeDetectorRef.markForCheck();
        });
      }
    });
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorOnChange();
    }
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Implemented as part of ControlValueAccessor. */
  writeValue(value) {
    this.checked = !!value;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Implemented as a part of Validator. */
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  /** Implemented as a part of Validator. */
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  /** Implemented as a part of ControlValueAccessor. */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
  /** Toggles the checked state of the slide-toggle. */
  toggle() {
    this.checked = !this.checked;
    this._onChange(this.checked);
  }
  /**
   * Emits a change event on the `change` output. Also notifies the FormControl about the change.
   */
  _emitChangeEvent() {
    this._onChange(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
  }
  /** Method being called whenever the underlying button is clicked. */
  _handleClick() {
    if (!this.disabled) {
      this.toggleChange.emit();
      if (!this.defaults.disableToggleValue) {
        this.checked = !this.checked;
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
      }
    }
  }
  _getAriaLabelledBy() {
    if (this.ariaLabelledby) {
      return this.ariaLabelledby;
    }
    return this.ariaLabel ? null : this._labelId;
  }
  static ɵfac = function MatSlideToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggle)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MatSlideToggle,
    selectors: [["mat-slide-toggle"]],
    viewQuery: function MatSlideToggle_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._switchElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-slide-toggle"],
    hostVars: 13,
    hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵhostProperty("id", ctx.id);
        ɵɵattribute("tabindex", null)("aria-label", null)("name", null)("aria-labelledby", null);
        ɵɵclassMap(ctx.color ? "mat-" + ctx.color : "");
        ɵɵclassProp("mat-mdc-slide-toggle-focused", ctx._focused)("mat-mdc-slide-toggle-checked", ctx.checked)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      name: "name",
      id: "id",
      labelPosition: "labelPosition",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      required: [2, "required", "required", booleanAttribute],
      color: "color",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      checked: [2, "checked", "checked", booleanAttribute],
      hideIcon: [2, "hideIcon", "hideIcon", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change",
      toggleChange: "toggleChange"
    },
    exportAs: ["matSlideToggle"],
    features: [ɵɵProvidersFeature([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, {
      provide: NG_VALIDATORS,
      useExisting: _MatSlideToggle,
      multi: true
    }]), ɵɵNgOnChangesFeature],
    ngContentSelectors: _c12,
    decls: 13,
    vars: 27,
    consts: [["switch", ""], ["mat-internal-form-field", "", 3, "labelPosition"], ["role", "switch", "type", "button", 1, "mdc-switch", 3, "click", "tabIndex", "disabled"], [1, "mdc-switch__track"], [1, "mdc-switch__handle-track"], [1, "mdc-switch__handle"], [1, "mdc-switch__shadow"], [1, "mdc-elevation-overlay"], [1, "mdc-switch__ripple"], ["mat-ripple", "", 1, "mat-mdc-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-switch__icons"], [1, "mdc-label", 3, "click", "for"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--on"], ["d", "M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--off"], ["d", "M20 13H4v-2h16v2z"]],
    template: function MatSlideToggle_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 1)(1, "button", 2, 0);
        ɵɵlistener("click", function MatSlideToggle_Template_button_click_1_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx._handleClick());
        });
        ɵɵelement(3, "span", 3);
        ɵɵelementStart(4, "span", 4)(5, "span", 5)(6, "span", 6);
        ɵɵelement(7, "span", 7);
        ɵɵelementEnd();
        ɵɵelementStart(8, "span", 8);
        ɵɵelement(9, "span", 9);
        ɵɵelementEnd();
        ɵɵtemplate(10, MatSlideToggle_Conditional_10_Template, 5, 0, "span", 10);
        ɵɵelementEnd()()();
        ɵɵelementStart(11, "label", 11);
        ɵɵlistener("click", function MatSlideToggle_Template_label_click_11_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView($event.stopPropagation());
        });
        ɵɵprojection(12);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        const switch_r2 = ɵɵreference(2);
        ɵɵproperty("labelPosition", ctx.labelPosition);
        ɵɵadvance();
        ɵɵclassProp("mdc-switch--selected", ctx.checked)("mdc-switch--unselected", !ctx.checked)("mdc-switch--checked", ctx.checked)("mdc-switch--disabled", ctx.disabled)("mat-mdc-slide-toggle-disabled-interactive", ctx.disabledInteractive);
        ɵɵproperty("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("disabled", ctx.disabled && !ctx.disabledInteractive);
        ɵɵattribute("id", ctx.buttonId)("name", ctx.name)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx._getAriaLabelledBy())("aria-describedby", ctx.ariaDescribedby)("aria-required", ctx.required || null)("aria-checked", ctx.checked)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        ɵɵadvance(8);
        ɵɵproperty("matRippleTrigger", switch_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        ɵɵadvance();
        ɵɵconditional(!ctx.hideIcon ? 10 : -1);
        ɵɵadvance();
        ɵɵproperty("for", ctx.buttonId);
        ɵɵattribute("id", ctx._labelId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mdc-switch-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mdc-switch-track-height, 32px);border-radius:var(--mdc-switch-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-switch-track-outline-width, 2px);border-color:var(--mat-switch-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-switch-selected-track-outline-width, 2px);border-color:var(--mat-switch-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-switch-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-switch-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mdc-switch-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-switch-hidden-track-opacity, 0);transition:var(--mat-switch-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-switch-visible-track-opacity, 1);transition:var(--mat-switch-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mdc-switch-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-switch-visible-track-opacity, 1);transition:var(--mat-switch-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-switch-hidden-track-opacity, 0);transition:var(--mat-switch-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mdc-switch-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mdc-switch-handle-width);height:var(--mdc-switch-handle-height);border-radius:var(--mdc-switch-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-switch-unselected-handle-size, 16px);height:var(--mat-switch-unselected-handle-size, 16px);margin:var(--mat-switch-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-switch-selected-handle-size, 24px);height:var(--mat-switch-selected-handle-size, 24px);margin:var(--mat-switch-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-switch-with-icon-handle-size, 24px);height:var(--mat-switch-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-switch-pressed-handle-size, 28px);height:var(--mat-switch-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mdc-switch-state-layer-size, 40px);height:var(--mdc-switch-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mdc-switch-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mdc-switch-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mdc-switch-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size, 16px);height:var(--mdc-switch-unselected-icon-size, 16px);fill:var(--mdc-switch-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size, 16px);height:var(--mdc-switch-selected-icon-size, 16px);fill:var(--mdc-switch-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-switch-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-switch-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-switch-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-switch-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-switch-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-switch-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mdc-switch-disabled-label-text-color)}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggle, [{
    type: Component,
    args: [{
      selector: "mat-slide-toggle",
      host: {
        "class": "mat-mdc-slide-toggle",
        "[id]": "id",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.name]": "null",
        "[attr.aria-labelledby]": "null",
        "[class.mat-mdc-slide-toggle-focused]": "_focused",
        "[class.mat-mdc-slide-toggle-checked]": "checked",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[class]": 'color ? "mat-" + color : ""'
      },
      exportAs: "matSlideToggle",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, {
        provide: NG_VALIDATORS,
        useExisting: MatSlideToggle,
        multi: true
      }],
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition">
  <button
    class="mdc-switch"
    role="switch"
    type="button"
    [class.mdc-switch--selected]="checked"
    [class.mdc-switch--unselected]="!checked"
    [class.mdc-switch--checked]="checked"
    [class.mdc-switch--disabled]="disabled"
    [class.mat-mdc-slide-toggle-disabled-interactive]="disabledInteractive"
    [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
    [disabled]="disabled && !disabledInteractive"
    [attr.id]="buttonId"
    [attr.name]="name"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="_getAriaLabelledBy()"
    [attr.aria-describedby]="ariaDescribedby"
    [attr.aria-required]="required || null"
    [attr.aria-checked]="checked"
    [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
    (click)="_handleClick()"
    #switch>
    <span class="mdc-switch__track"></span>
    <span class="mdc-switch__handle-track">
      <span class="mdc-switch__handle">
        <span class="mdc-switch__shadow">
          <span class="mdc-elevation-overlay"></span>
        </span>
        <span class="mdc-switch__ripple">
          <span class="mat-mdc-slide-toggle-ripple mat-focus-indicator" mat-ripple
            [matRippleTrigger]="switch"
            [matRippleDisabled]="disableRipple || disabled"
            [matRippleCentered]="true"></span>
        </span>
        @if (!hideIcon) {
          <span class="mdc-switch__icons">
            <svg
              class="mdc-switch__icon mdc-switch__icon--on"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
            </svg>
            <svg
              class="mdc-switch__icon mdc-switch__icon--off"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M20 13H4v-2h16v2z" />
            </svg>
          </span>
        }
      </span>
    </span>
  </button>

  <!--
    Clicking on the label will trigger another click event from the button.
    Stop propagation here so other listeners further up in the DOM don't execute twice.
  -->
  <label class="mdc-label" [for]="buttonId" [attr.id]="_labelId" (click)="$event.stopPropagation()">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative;width:var(--mdc-switch-track-width, 52px)}.mdc-switch.mdc-switch--disabled{cursor:default;pointer-events:none}.mdc-switch.mat-mdc-slide-toggle-disabled-interactive{pointer-events:auto}.mdc-switch__track{overflow:hidden;position:relative;width:100%;height:var(--mdc-switch-track-height, 32px);border-radius:var(--mdc-switch-track-shape, var(--mat-sys-corner-full))}.mdc-switch--disabled.mdc-switch .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%;border-width:var(--mat-switch-track-outline-width, 2px);border-color:var(--mat-switch-track-outline-color, var(--mat-sys-outline))}.mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track::after{border-width:var(--mat-switch-selected-track-outline-width, 2px);border-color:var(--mat-switch-selected-track-outline-color, transparent)}.mdc-switch--disabled .mdc-switch__track::before,.mdc-switch--disabled .mdc-switch__track::after{border-width:var(--mat-switch-disabled-unselected-track-outline-width, 2px);border-color:var(--mat-switch-disabled-unselected-track-outline-color, var(--mat-sys-on-surface))}@media(forced-colors: active){.mdc-switch__track{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0);background:var(--mdc-switch-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::before{opacity:var(--mat-switch-hidden-track-opacity, 0);transition:var(--mat-switch-hidden-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::before{opacity:var(--mat-switch-visible-track-opacity, 1);transition:var(--mat-switch-visible-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color, var(--mat-sys-surface-variant))}.mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color, var(--mat-sys-surface-variant))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before,.mdc-switch.mdc-switch--disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color, var(--mat-sys-surface-variant))}.mdc-switch__track::after{transform:translateX(-100%);background:var(--mdc-switch-selected-track-color, var(--mat-sys-primary))}[dir=rtl] .mdc-switch__track::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::after{transform:translateX(0)}.mdc-switch--selected .mdc-switch__track::after{opacity:var(--mat-switch-visible-track-opacity, 1);transition:var(--mat-switch-visible-track-transition, opacity 75ms)}.mdc-switch--unselected .mdc-switch__track::after{opacity:var(--mat-switch-hidden-track-opacity, 0);transition:var(--mat-switch-hidden-track-transition, opacity 75ms)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color, var(--mat-sys-primary))}.mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color, var(--mat-sys-primary))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after,.mdc-switch.mdc-switch--disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color, var(--mat-sys-on-surface))}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0);width:calc(100% - var(--mdc-switch-handle-width))}[dir=rtl] .mdc-switch__handle-track{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto;transition:width 75ms cubic-bezier(0.4, 0, 0.2, 1),height 75ms cubic-bezier(0.4, 0, 0.2, 1),margin 75ms cubic-bezier(0.4, 0, 0.2, 1);width:var(--mdc-switch-handle-width);height:var(--mdc-switch-handle-height);border-radius:var(--mdc-switch-handle-shape, var(--mat-sys-corner-full))}[dir=rtl] .mdc-switch__handle{left:auto;right:0}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle{width:var(--mat-switch-unselected-handle-size, 16px);height:var(--mat-switch-unselected-handle-size, 16px);margin:var(--mat-switch-unselected-handle-horizontal-margin, 0 8px)}.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-unselected-with-icon-handle-horizontal-margin, 0 4px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle{width:var(--mat-switch-selected-handle-size, 24px);height:var(--mat-switch-selected-handle-size, 24px);margin:var(--mat-switch-selected-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons){margin:var(--mat-switch-selected-with-icon-handle-horizontal-margin, 0 24px)}.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons){width:var(--mat-switch-with-icon-handle-size, 24px);height:var(--mat-switch-with-icon-handle-size, 24px)}.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle{width:var(--mat-switch-pressed-handle-size, 28px);height:var(--mat-switch-pressed-handle-size, 28px)}.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-selected-pressed-handle-horizontal-margin, 0 22px)}.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle{margin:var(--mat-switch-unselected-pressed-handle-horizontal-margin, 0 2px)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-selected-handle-opacity, 1)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after{opacity:var(--mat-switch-disabled-unselected-handle-opacity, 0.38)}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media(forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color, var(--mat-sys-on-primary))}.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color, var(--mat-sys-primary-container))}.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color, var(--mat-sys-primary-container))}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after,.mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color, var(--mat-sys-surface))}.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color, var(--mat-sys-outline))}.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color, var(--mat-sys-on-surface))}.mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color)}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation-shadow)}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow,.mdc-switch.mdc-switch--disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation-shadow)}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1;width:var(--mdc-switch-state-layer-size, 40px);height:var(--mdc-switch-state-layer-size, 40px)}.mdc-switch__ripple::after{content:"";opacity:0}.mdc-switch--disabled .mdc-switch__ripple::after{display:none}.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after{display:block}.mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:75ms opacity cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after,.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after,.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background:var(--mdc-switch-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background:var(--mdc-switch-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background:var(--mdc-switch-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background:var(--mdc-switch-selected-pressed-state-layer-color, var(--mat-sys-primary));opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));transition:opacity 75ms linear}.mdc-switch__icons{position:relative;height:100%;width:100%;z-index:1;transform:translateZ(0)}.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size, 16px);height:var(--mdc-switch-unselected-icon-size, 16px);fill:var(--mdc-switch-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mat-sys-surface-variant))}.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size, 16px);height:var(--mdc-switch-selected-icon-size, 16px);fill:var(--mdc-switch-selected-icon-color, var(--mat-sys-on-primary-container))}.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color, var(--mat-sys-on-surface))}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{-webkit-user-select:none;user-select:none;display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-internal-form-field{color:var(--mat-switch-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-switch-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-switch-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-switch-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-switch-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-switch-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}.mat-mdc-slide-toggle .mdc-switch:enabled+.mdc-label{cursor:pointer}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:var(--mdc-switch-disabled-label-text-color)}\n']
    }]
  }], () => [], {
    _switchElement: [{
      type: ViewChild,
      args: ["switch"]
    }],
    name: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    toggleChange: [{
      type: Output
    }]
  });
})();
var MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MatSlideToggleRequiredValidator),
  multi: true
};
var MatSlideToggleRequiredValidator = class _MatSlideToggleRequiredValidator extends CheckboxRequiredValidator {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMatSlideToggleRequiredValidator_BaseFactory;
    return function MatSlideToggleRequiredValidator_Factory(__ngFactoryType__) {
      return (ɵMatSlideToggleRequiredValidator_BaseFactory || (ɵMatSlideToggleRequiredValidator_BaseFactory = ɵɵgetInheritedFactory(_MatSlideToggleRequiredValidator)))(__ngFactoryType__ || _MatSlideToggleRequiredValidator);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _MatSlideToggleRequiredValidator,
    selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]],
    features: [ɵɵProvidersFeature([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggleRequiredValidator, [{
    type: Directive,
    args: [{
      selector: `mat-slide-toggle[required][formControlName],
             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]`,
      providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
    }]
  }], null, null);
})();
var _MatSlideToggleRequiredValidatorModule = class __MatSlideToggleRequiredValidatorModule {
  static ɵfac = function _MatSlideToggleRequiredValidatorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __MatSlideToggleRequiredValidatorModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: __MatSlideToggleRequiredValidatorModule,
    imports: [MatSlideToggleRequiredValidator],
    exports: [MatSlideToggleRequiredValidator]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatSlideToggleRequiredValidatorModule, [{
    type: NgModule,
    args: [{
      imports: [MatSlideToggleRequiredValidator],
      exports: [MatSlideToggleRequiredValidator]
    }]
  }], null, null);
})();
var MatSlideToggleModule = class _MatSlideToggleModule {
  static ɵfac = function MatSlideToggleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggleModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatSlideToggleModule,
    imports: [MatSlideToggle, MatCommonModule],
    exports: [MatSlideToggle, MatCommonModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [MatSlideToggle, MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatSlideToggle, MatCommonModule],
      exports: [MatSlideToggle, MatCommonModule]
    }]
  }], null, null);
})();
export {
  MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,
  MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR,
  MAT_SLIDE_TOGGLE_VALUE_ACCESSOR,
  MatSlideToggle,
  MatSlideToggleChange,
  MatSlideToggleModule,
  MatSlideToggleRequiredValidator,
  _MatSlideToggleRequiredValidatorModule
};
//# sourceMappingURL=@angular_material_slide-toggle.js.map
