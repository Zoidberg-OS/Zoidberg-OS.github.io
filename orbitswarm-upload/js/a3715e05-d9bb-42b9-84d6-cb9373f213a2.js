/* @ds-bundle: {"format":3,"namespace":"OrbitswarmDesignSystem_d371b7","components":[{"name":"Alert","sourcePath":"components/core/Alert.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Keyline","sourcePath":"components/core/Keyline.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Alert.jsx":"25f7cddc519f","components/core/Avatar.jsx":"be24a04d3697","components/core/Badge.jsx":"9db9e3c00982","components/core/Button.jsx":"50c030a97731","components/core/Card.jsx":"55327b7632dc","components/core/Input.jsx":"facce1f1978d","components/core/Keyline.jsx":"fff1ee86011d","components/core/StatCard.jsx":"4239d3314231","components/core/Tag.jsx":"ac0232032533","ui_kits/dashboard/sections.jsx":"1b3de6976abe","ui_kits/marketing/sections.jsx":"fe555f010da8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OrbitswarmDesignSystem_d371b7 = window.OrbitswarmDesignSystem_d371b7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bar: 'var(--marine-100)',
    bg: 'var(--marine-20)',
    fg: '#2f5a8a'
  },
  success: {
    bar: 'var(--success)',
    bg: '#e2f0e9',
    fg: '#2c6b4f'
  },
  warning: {
    bar: 'var(--fall-100)',
    bg: 'var(--fall-20)',
    fg: '#b5651d'
  },
  danger: {
    bar: 'var(--danger)',
    bg: '#f7e4e1',
    fg: '#a83a2c'
  }
};

/**
 * Orbitswarm Alert — inline notice with a colored leading bar.
 * Used for conjunction warnings, system notices, form feedback.
 */
function Alert({
  children,
  title,
  tone = 'info',
  icon = null,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 16px',
      background: t.bg,
      borderRadius: 'var(--radius-md)',
      borderLeft: `4px solid ${t.bar}`
    }
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      color: t.bar,
      flexShrink: 0,
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontWeight: 700,
      fontSize: 14,
      color: t.fg,
      marginBottom: children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--text-body)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Alert.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 28,
  md: 36,
  lg: 48
};

/**
 * Orbitswarm Avatar — image or initials on a Moonlit/Marine fill.
 * Optional status ring for operator presence.
 */
function Avatar({
  src,
  name = '',
  size = 'md',
  status = null,
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const initials = name.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const statusColors = {
    online: 'var(--success)',
    busy: 'var(--fall-100)',
    offline: 'var(--steel)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: px,
      height: px,
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--marine-100)',
      color: '#fff',
      fontFamily: 'var(--font-subhead)',
      fontWeight: 700,
      fontSize: px * 0.38,
      letterSpacing: '0.02em'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -1,
      bottom: -1,
      width: px * 0.3,
      height: px * 0.3,
      borderRadius: '50%',
      background: statusColors[status] || 'var(--steel)',
      border: '2px solid var(--white)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--mist)',
    fg: 'var(--graphite)',
    dot: 'var(--slate)'
  },
  primary: {
    bg: 'var(--moonlit-20)',
    fg: 'var(--moonlit-100)',
    dot: 'var(--moonlit-100)'
  },
  marine: {
    bg: 'var(--marine-20)',
    fg: '#2f5a8a',
    dot: 'var(--marine-100)'
  },
  accent: {
    bg: 'var(--fall-20)',
    fg: '#b5651d',
    dot: 'var(--fall-100)'
  },
  success: {
    bg: '#e2f0e9',
    fg: '#2c6b4f',
    dot: 'var(--success)'
  },
  warning: {
    bg: 'var(--fall-20)',
    fg: '#b5651d',
    dot: 'var(--warning)'
  },
  danger: {
    bg: '#f7e4e1',
    fg: '#a83a2c',
    dot: 'var(--danger)'
  }
};

/**
 * Orbitswarm Badge — compact status/label pill. Optional leading status dot.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-subhead)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.03em',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap'
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.dot
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '0 14px',
    height: 34,
    fontSize: 13
  },
  md: {
    padding: '0 20px',
    height: 42,
    fontSize: 14
  },
  lg: {
    padding: '0 28px',
    height: 52,
    fontSize: 16
  }
};

/**
 * Orbitswarm Button — primary action uses Fall River; the workhorse is
 * the Moonlit-outline "secondary". Subhead (Archivo) label, uppercase.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  as = 'button',
  ...rest
}) {
  const sz = SIZES[size] || SIZES.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: sz.height,
    padding: sz.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-subhead)',
    fontWeight: 700,
    fontSize: sz.fontSize,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-sm)',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    textDecoration: 'none'
  };
  const variants = {
    primary: {
      background: 'var(--fall-100)',
      color: '#fff'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--moonlit-100)',
      borderColor: 'var(--moonlit-40)'
    },
    dark: {
      background: 'var(--moonlit-100)',
      color: '#fff'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--moonlit-100)'
    },
    'on-dark': {
      background: '#fff',
      color: 'var(--moonlit-100)'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...(variants[variant] || variants.primary)
    },
    disabled: as === 'button' ? disabled : undefined,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Orbitswarm Card — white surface, hairline cool border, Moonlit-tinted shadow.
 * `tone="dark"` gives a Moonlit Ocean panel for feature/telemetry blocks.
 * `interactive` adds a hover lift.
 */
function Card({
  children,
  tone = 'light',
  interactive = false,
  padding = 24,
  style = {},
  ...rest
}) {
  const dark = tone === 'dark';
  const base = {
    background: dark ? 'var(--surface-inverse)' : 'var(--surface-card)',
    color: dark ? 'var(--text-on-dark)' : 'var(--text-body)',
    border: `1px solid ${dark ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`,
    borderRadius: 'var(--radius-card)',
    padding,
    boxShadow: dark ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    ...style
  };
  const hover = interactive ? {
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = dark ? 'var(--shadow-xl)' : 'var(--shadow-md)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = dark ? 'var(--shadow-lg)' : 'var(--shadow-sm)';
    }
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base
  }, hover, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Orbitswarm Input — labelled text field. Cool border, Marine focus ring.
 * Supports label, hint, error, and tone="dark" for panels over imagery.
 */
function Input({
  label,
  hint,
  error,
  id,
  tone = 'light',
  style = {},
  ...rest
}) {
  const dark = tone === 'dark';
  const [focus, setFocus] = React.useState(false);
  const fid = id || `os-input-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--marine-100)' : dark ? 'var(--border-on-dark)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-subhead)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.04em',
      color: dark ? 'var(--moonlit-20)' : 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      height: 44,
      padding: '0 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: dark ? '#fff' : 'var(--text-body)',
      background: dark ? 'rgba(255,255,255,0.06)' : 'var(--white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: dark ? 'var(--moonlit-40)' : 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Keyline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Orbitswarm Keyline — the brand's signature line-work header: an optional
 * heavy 2px top rule, a subhead label (left) with an optional right value,
 * and a hairline bottom rule. This is the deck's most portable device;
 * use it to head panels, sections, and list rows.
 */
function Keyline({
  label,
  right,
  heavy = false,
  tone = 'light',
  size = 'md',
  style = {},
  ...rest
}) {
  const fg = tone === 'dark' ? '#fff' : 'var(--moonlit-100)';
  const rule = tone === 'dark' ? 'rgba(255,255,255,0.45)' : 'rgba(49,68,91,0.32)';
  const fs = size === 'lg' ? 15 : size === 'sm' ? 11 : 13;
  const labelStyle = {
    fontFamily: 'var(--font-subhead)',
    fontWeight: 700,
    fontSize: fs,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: fg,
    margin: 0
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), heavy && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `2px solid ${fg}`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 16,
      padding: '9px 2px',
      borderBottom: `1px solid ${rule}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), right != null && /*#__PURE__*/React.createElement("span", {
    style: {
      ...labelStyle,
      fontWeight: 600,
      opacity: 0.8
    }
  }, right)));
}
Object.assign(__ds_scope, { Keyline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Keyline.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Orbitswarm StatCard — a labelled metric for dashboards & marketing stats.
 * Mono value, Archivo label, optional delta and unit.
 */
function StatCard({
  label,
  value,
  unit = '',
  delta = null,
  deltaTone = 'neutral',
  tone = 'light',
  ...rest
}) {
  const dark = tone === 'dark';
  const deltaColors = {
    up: 'var(--success)',
    down: 'var(--danger)',
    alert: 'var(--fall-100)',
    neutral: dark ? 'var(--moonlit-40)' : 'var(--text-muted)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: dark ? 'var(--surface-inverse)' : 'var(--surface-card)',
      border: `1px solid ${dark ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '18px 20px',
      boxShadow: dark ? 'none' : 'var(--shadow-xs)'
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: dark ? 'var(--moonlit-40)' : 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 30,
      lineHeight: 1,
      color: dark ? '#fff' : 'var(--text-strong)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: dark ? 'var(--autumn-100)' : 'var(--text-accent)'
    }
  }, unit)), delta != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-subhead)',
      fontWeight: 600,
      fontSize: 12,
      color: deltaColors[deltaTone] || deltaColors.neutral
    }
  }, delta));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Orbitswarm Tag — outline chip for categories & filters. `selected` fills it;
 * `onRemove` shows a dismiss affordance.
 */
function Tag({
  children,
  selected = false,
  onRemove,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 12px',
      fontFamily: 'var(--font-subhead)',
      fontWeight: 600,
      fontSize: 12.5,
      letterSpacing: '0.02em',
      borderRadius: 'var(--radius-pill)',
      cursor: rest.onClick ? 'pointer' : 'default',
      border: `1.5px solid ${selected ? 'var(--moonlit-100)' : 'var(--border-default)'}`,
      background: selected ? 'var(--moonlit-100)' : 'transparent',
      color: selected ? '#fff' : 'var(--text-body)',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove",
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      lineHeight: 1,
      fontSize: 14,
      color: 'inherit',
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/sections.jsx
try { (() => {
/* Orbitswarm — Mission-control dashboard sections.
   Composes design-system primitives from the compiled bundle. */
const DS = () => window.OrbitswarmDesignSystem_d371b7 || {};
const EMBLEM_WHITE = '../../assets/logos/stamp-white.png';
const mono = {
  fontFamily: 'var(--font-mono)'
};
const subh = {
  fontFamily: 'var(--font-subhead)'
};

/* ---------- Sidebar ---------- */
function Sidebar({
  active,
  setActive
}) {
  const items = ['Overview', 'Swarm', 'Orbit map', 'Conjunctions', 'Telemetry', 'Operators'];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      flexShrink: 0,
      background: 'var(--surface-inverse-2)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 8px 22px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: EMBLEM_WHITE,
    alt: "",
    style: {
      height: 26,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 19,
      textTransform: 'uppercase',
      letterSpacing: '0.02em'
    }
  }, "Orbit Swarm")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(it => {
    const on = it === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      onClick: () => setActive(it),
      style: {
        textAlign: 'left',
        border: 0,
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        padding: '10px 12px',
        ...subh,
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: '0.02em',
        background: on ? 'var(--moonlit-100)' : 'transparent',
        color: on ? '#fff' : 'var(--moonlit-40)',
        transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)'
      }
    }, it);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 12,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...subh,
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--moonlit-40)'
    }
  }, "Swarm health"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      fontSize: 22,
      color: '#fff',
      marginTop: 4
    }
  }, "98.6", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--autumn-100)',
      fontSize: 13
    }
  }, "%"))));
}

/* ---------- Topbar ---------- */
function Topbar({
  title
}) {
  const {
    Avatar,
    Badge
  } = DS();
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 66,
      flexShrink: 0,
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em',
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Live")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "UTC 14:22:07"), /*#__PURE__*/React.createElement(Avatar, {
    name: "Ada Reyes",
    status: "online"
  })));
}

/* ---------- KPI row ---------- */
function KpiRow() {
  const {
    StatCard
  } = DS();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Objects tracked",
    value: "12,904",
    delta: "+128 / 24h",
    deltaTone: "up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Active nodes",
    value: "48 / 48",
    delta: "all nominal",
    deltaTone: "up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Mean altitude",
    value: "547",
    unit: "km"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Open conjunctions",
    value: "3",
    delta: "+1 / 24h",
    deltaTone: "alert"
  }));
}

/* ---------- Orbit map (stylized) ---------- */
function OrbitMap() {
  const {
    Card,
    Tag,
    Keyline
  } = DS();
  const [layer, setLayer] = React.useState('Debris');
  return /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    padding: 0,
    style: {
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(Keyline, {
    tone: "dark",
    heavy: true,
    label: "Orbit map",
    right: "Low earth orbit"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end',
      marginTop: 12
    }
  }, ['Debris', 'Swarm', 'All'].map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    onClick: () => setLayer(l),
    style: {
      cursor: 'pointer',
      ...subh,
      fontWeight: 600,
      fontSize: 12,
      padding: '5px 12px',
      borderRadius: 999,
      border: `1.5px solid ${layer === l ? 'var(--autumn-100)' : 'var(--border-on-dark)'}`,
      color: layer === l ? 'var(--autumn-100)' : 'var(--moonlit-40)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 300,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 300",
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "planet",
    cx: "40%",
    cy: "35%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    "stop-color": "#5480b3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    "stop-color": "#31445b"
  }))), [70, 105, 140].map((r, i) => /*#__PURE__*/React.createElement("ellipse", {
    key: i,
    cx: "200",
    cy: "150",
    rx: r,
    ry: r * 0.42,
    transform: `rotate(${-18 + i * 16} 200 150)`,
    fill: "none",
    stroke: "rgba(255,255,255,0.16)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "150",
    r: "34",
    fill: "url(#planet)"
  }), layer !== 'Debris' && [[128, 132], [268, 120], [292, 176], [110, 182], [210, 74], [236, 226]].map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: 's' + i,
    cx: p[0],
    cy: p[1],
    r: "4.5",
    fill: "#ffb787"
  })), layer !== 'Swarm' && [[95, 110], [315, 150], [180, 232], [250, 90], [150, 96], [300, 210], [88, 168], [220, 205]].map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: 'd' + i,
    cx: p[0],
    cy: p[1],
    r: "2.4",
    fill: "#ed8f4c",
    opacity: "0.9"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      bottom: 14,
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 11,
      color: 'var(--autumn-100)'
    }
  }, "\u25CF swarm"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 11,
      color: 'var(--fall-100)'
    }
  }, "\u25CF debris"))));
}

/* ---------- Alerts ---------- */
function AlertsPanel() {
  const {
    Card,
    Alert,
    Keyline
  } = DS();
  const [sel, setSel] = React.useState(0);
  const alerts = [{
    tone: 'danger',
    title: 'Conjunction — Sat-07',
    body: 'Closest approach 640 m in 3h 12m. Maneuver recommended.'
  }, {
    tone: 'warning',
    title: 'Debris cluster · sector 4B',
    body: '5 uncatalogued objects entering tracked volume.'
  }, {
    tone: 'info',
    title: 'Node 21 back online',
    body: 'Telemetry nominal after scheduled reboot.'
  }];
  return /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Keyline, {
    heavy: true,
    label: "Alerts",
    right: alerts.length + ' active',
    style: {
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, alerts.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setSel(i),
    style: {
      cursor: 'pointer',
      outline: sel === i ? '2px solid var(--marine-100)' : 'none',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: a.tone,
    title: a.title
  }, a.body)))));
}

/* ---------- Satellite table ---------- */
function SatelliteTable() {
  const {
    Card,
    Badge,
    Tag,
    Keyline
  } = DS();
  const [filter, setFilter] = React.useState('All');
  const rows = [{
    id: 'OS-07',
    alt: 548,
    incl: 53.0,
    state: 'Maneuvering',
    tone: 'warning'
  }, {
    id: 'OS-12',
    alt: 551,
    incl: 53.1,
    state: 'Nominal',
    tone: 'success'
  }, {
    id: 'OS-21',
    alt: 545,
    incl: 52.9,
    state: 'Nominal',
    tone: 'success'
  }, {
    id: 'OS-33',
    alt: 552,
    incl: 53.2,
    state: 'Standby',
    tone: 'neutral'
  }, {
    id: 'OS-40',
    alt: 547,
    incl: 53.0,
    state: 'Nominal',
    tone: 'success'
  }];
  const filtered = filter === 'All' ? rows : rows.filter(r => r.state === filter);
  const th = {
    ...subh,
    fontWeight: 700,
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    textAlign: 'left',
    padding: '0 0 10px'
  };
  const td = {
    ...mono,
    fontSize: 14,
    color: 'var(--text-body)',
    padding: '12px 0',
    borderTop: '1px solid var(--border-subtle)'
  };
  return /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement(Keyline, {
    heavy: true,
    label: "Swarm nodes",
    right: "48 / 48",
    style: {
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end',
      marginBottom: 14
    }
  }, ['All', 'Nominal', 'Maneuvering'].map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Node"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Altitude"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Inclination"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "State"))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.id
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      color: 'var(--text-strong)',
      fontWeight: 500
    }
  }, r.id), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.alt, " km"), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.incl, "\xB0"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: r.tone,
    dot: true
  }, r.state)))))));
}
Object.assign(window, {
  OSSidebar: Sidebar,
  OSTopbar: Topbar,
  OSKpiRow: KpiRow,
  OSOrbitMap: OrbitMap,
  OSAlertsPanel: AlertsPanel,
  OSSatelliteTable: SatelliteTable
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/sections.jsx
try { (() => {
/* Orbitswarm — Marketing site sections.
   Composes design-system primitives from the compiled bundle. */
const DS = () => window.OrbitswarmDesignSystem_d371b7 || {};
const IMG = {
  hero: '../../assets/imagery/space-1.jpg',
  band: '../../assets/imagery/space-3.jpg',
  tile1: '../../assets/imagery/space-2.jpg',
  tile2: '../../assets/imagery/space-4.jpg'
};
const EMBLEM = '../../assets/logos/stamp-moonlit.png';
const EMBLEM_WHITE = '../../assets/logos/stamp-white.png';
const wrap = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 32px'
};
const eyebrow = {
  fontFamily: 'var(--font-subhead)',
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--text-accent)'
};
const displayH = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  textTransform: 'uppercase',
  lineHeight: 0.98,
  letterSpacing: '-0.01em',
  color: 'var(--text-strong)',
  margin: 0
};
/* Subhead tier (Archivo) — the secondary heading role from the brand deck */
const subhead = {
  fontFamily: 'var(--font-subhead)',
  fontWeight: 600,
  fontSize: 20,
  lineHeight: 1.35,
  letterSpacing: '0.01em',
  color: 'var(--text-muted)',
  margin: 0
};
function Header({
  onNav
}) {
  const {
    Button
  } = DS();
  const link = {
    fontFamily: 'var(--font-subhead)',
    fontWeight: 600,
    fontSize: 14,
    color: 'var(--text-body)',
    cursor: 'pointer',
    letterSpacing: '0.02em'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(247,249,251,0.86)',
      backdropFilter: 'var(--blur-md)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      flexShrink: 0
    },
    onClick: () => onNav('top')
  }, /*#__PURE__*/React.createElement("img", {
    src: EMBLEM,
    alt: "",
    style: {
      height: 28,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      color: 'var(--moonlit-100)',
      whiteSpace: 'nowrap'
    }
  }, "Orbit\xA0Swarm")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      alignItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...link,
      whiteSpace: 'nowrap'
    },
    onClick: () => onNav('capabilities')
  }, "Capabilities"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...link,
      whiteSpace: 'nowrap'
    },
    onClick: () => onNav('mission')
  }, "Mission"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...link,
      whiteSpace: 'nowrap'
    },
    onClick: () => onNav('numbers')
  }, "By the numbers"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    as: "a",
    onClick: () => onNav('contact')
  }, "Request access"))));
}
function Hero({
  onNav
}) {
  const {
    Button,
    Badge
  } = DS();
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 640,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.hero,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-left)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(16,23,31,0.35) 0%, rgba(16,23,31,0) 40%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "marine",
    dot: true
  }, "Space situational awareness"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...displayH,
      color: '#fff',
      fontSize: 56,
      margin: '20px 0 0'
    }
  }, "A resilient swarm for low earth orbit"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...subhead,
      color: 'var(--autumn-100)',
      fontSize: 22,
      margin: '16px 0 0'
    }
  }, "Detect debris. Navigate autonomously. Sustain orbit."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.86)',
      maxWidth: 540,
      margin: '18px 0 32px'
    }
  }, "Orbitswarm detects space debris and other satellites and provides automated navigation \u2014 a cosmic map for sustainable solutions to our most important problems."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    as: "a",
    onClick: () => onNav('contact')
  }, "Request access"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    size: "lg",
    as: "a",
    onClick: () => onNav('mission')
  }, "Our mission")))));
}
function Capabilities() {
  const {
    Card,
    Keyline
  } = DS();
  const items = [{
    t: 'Debris detection',
    k: 'Awareness',
    d: 'The swarm continuously scans low earth orbit, flagging debris and uncatalogued objects before they threaten operations.'
  }, {
    t: 'Automated navigation',
    k: 'Autonomy',
    d: 'AI-driven guidance plans and executes avoidance maneuvers across the constellation, autonomously.'
  }, {
    t: 'Conjunction alerts',
    k: 'Prediction',
    d: 'Predictive conjunction analysis gives operators time to act, with clear closest-approach windows.'
  }, {
    t: 'Swarm resilience',
    k: 'Resilience',
    d: 'A distributed architecture keeps coverage nominal even as individual satellites go offline.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "capabilities",
    style: {
      background: 'var(--surface-page)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Keyline, {
    heavy: true,
    label: "What we do",
    right: "01 \u2014 04",
    style: {
      maxWidth: 620,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...displayH,
      fontSize: 38,
      margin: '0 0 8px',
      maxWidth: 620
    }
  }, "Sharp awareness, automated action"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...subhead,
      maxWidth: 560,
      margin: '0 0 40px'
    }
  }, "Four capabilities keep every constellation safe in low earth orbit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 20
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true,
    padding: 28
  }, /*#__PURE__*/React.createElement("img", {
    src: EMBLEM,
    alt: "",
    style: {
      height: 30,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrow,
      margin: '16px 0 4px'
    }
  }, it.k), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-subhead)',
      fontWeight: 700,
      fontSize: 19,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, it.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      margin: 0
    }
  }, it.d))))));
}
function MissionBand() {
  return /*#__PURE__*/React.createElement("section", {
    id: "mission",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.band,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(16,23,31,0.9) 0%, rgba(16,23,31,0.62) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative',
      padding: '104px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrow,
      color: 'var(--autumn-100)'
    }
  }, "Our mission"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: 34,
      lineHeight: 1.06,
      letterSpacing: '-0.01em',
      color: '#fff',
      margin: '16px 0 0'
    }
  }, "Above the clouds, a solution shines\xA0\u2014 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--autumn-100)'
    }
  }, "space"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.82)',
      maxWidth: 600,
      marginTop: 20
    }
  }, "We safeguard and optimize space operations through advanced AI and satellite swarm technology \u2014 ensuring the safety, sustainability, and efficiency of the space environment for all users."))));
}
function StatsBand() {
  const {
    StatCard,
    Keyline
  } = DS();
  return /*#__PURE__*/React.createElement("section", {
    id: "numbers",
    style: {
      background: 'var(--surface-inverse-2)',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Keyline, {
    tone: "dark",
    heavy: true,
    label: "By the numbers",
    right: "Live",
    style: {
      marginBottom: 22
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...displayH,
      fontSize: 34,
      color: '#fff',
      margin: '0 0 36px'
    }
  }, "Eyes on orbit, around the clock"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    tone: "dark",
    label: "Objects tracked",
    value: "12,904",
    delta: "+128 / 24h",
    deltaTone: "up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "dark",
    label: "Swarm nodes",
    value: "48",
    delta: "all nominal",
    deltaTone: "up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "dark",
    label: "Mean altitude",
    value: "547",
    unit: "km"
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "dark",
    label: "Open conjunctions",
    value: "3",
    delta: "+1 / 24h",
    deltaTone: "alert"
  }))));
}
function ContactCTA({
  email,
  setEmail,
  submitted,
  onSubmit
}) {
  const {
    Button,
    Input,
    Card
  } = DS();
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: 'var(--surface-page)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: eyebrow
  }, "Request access"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...displayH,
      fontSize: 36,
      margin: '12px 0 14px',
      maxWidth: 460
    }
  }, "Bring your operations into the swarm"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: 440
    }
  }, "Tell us about your constellation and we'll show you how Orbitswarm keeps it safe. We'll only use your details to get in touch.")), /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '24px 8px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: EMBLEM,
    alt: "",
    style: {
      height: 44,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...displayH,
      fontSize: 26,
      margin: '14px 0 6px'
    }
  }, "Signal received"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "We'll be in touch within two working days.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@org.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    hint: "For access requests only."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Organization",
    placeholder: "e.g. Meridian Space"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onSubmit
  }, "Request access")))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--moonlit-20)',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: EMBLEM_WHITE,
    alt: "",
    style: {
      height: 24,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 17,
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      color: '#fff'
    }
  }, "Orbit Swarm")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--moonlit-40)'
    }
  }, "\xA9 2024 Orbitswarm \xB7 Safeguarding low earth orbit")));
}
Object.assign(window, {
  OSHeader: Header,
  OSHero: Hero,
  OSCapabilities: Capabilities,
  OSMissionBand: MissionBand,
  OSStatsBand: StatsBand,
  OSContactCTA: ContactCTA,
  OSFooter: Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Keyline = __ds_scope.Keyline;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tag = __ds_scope.Tag;

})();
