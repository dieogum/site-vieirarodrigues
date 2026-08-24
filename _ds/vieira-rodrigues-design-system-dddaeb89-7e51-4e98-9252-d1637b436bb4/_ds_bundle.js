/* @ds-bundle: {"format":4,"namespace":"VieiraRodriguesDesignSystem_dddaeb","components":[{"name":"ArticleCard","sourcePath":"components/content/ArticleCard.jsx"},{"name":"CapCard","sourcePath":"components/content/CapCard.jsx"},{"name":"ColumnCard","sourcePath":"components/content/ColumnCard.jsx"},{"name":"Declaration","sourcePath":"components/content/Declaration.jsx"},{"name":"Accent","sourcePath":"components/content/Declaration.jsx"},{"name":"InsightRow","sourcePath":"components/content/InsightRow.jsx"},{"name":"PersonCard","sourcePath":"components/content/PersonCard.jsx"},{"name":"Photo","sourcePath":"components/content/Photo.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"RuleList","sourcePath":"components/content/RuleList.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"BrandMark","sourcePath":"components/core/BrandMark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"PurpleBand","sourcePath":"components/core/PurpleBand.jsx"},{"name":"AnchorNav","sourcePath":"components/forms/AnchorNav.jsx"},{"name":"FaqItem","sourcePath":"components/forms/FaqItem.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"FilterChips","sourcePath":"components/forms/FilterChips.jsx"}],"sourceHashes":{"components/content/ArticleCard.jsx":"24cc897b2deb","components/content/CapCard.jsx":"1be1d45d1570","components/content/ColumnCard.jsx":"1a439a7faa5d","components/content/Declaration.jsx":"f4e1f05f11a1","components/content/InsightRow.jsx":"361dbd742f00","components/content/PersonCard.jsx":"a3071db23ef0","components/content/Photo.jsx":"18d1904cdadd","components/content/Quote.jsx":"45e87178a6a1","components/content/RuleList.jsx":"5b6c4584d650","components/content/SectionHeader.jsx":"6aa67227999c","components/content/Stat.jsx":"db399aa5bc63","components/core/BrandMark.jsx":"5b68be9ef166","components/core/Button.jsx":"0c5f72fc625a","components/core/Eyebrow.jsx":"1047b09ef64e","components/core/Pill.jsx":"59a7702b20ad","components/core/PurpleBand.jsx":"58049a807a56","components/forms/AnchorNav.jsx":"c5b3f6104c05","components/forms/FaqItem.jsx":"3197d19aef07","components/forms/Field.jsx":"fd3feadc81e6","components/forms/FilterChips.jsx":"35466b2ddaa5","ui_kits/carrossel/Slides.jsx":"0f710be80204","ui_kits/documentos/doc-page.js":"371bab66f42d","ui_kits/site/Bits.jsx":"06120399f5b4","ui_kits/site/Chrome.jsx":"64311604a90c","ui_kits/site/ConsultoriaScreen.jsx":"b0cb747d662e","ui_kits/site/ContatoScreen.jsx":"3250726484f1","ui_kits/site/EspecialidadesScreen.jsx":"6be9e871e0ea","ui_kits/site/HomeScreen.jsx":"031cfee5903f","ui_kits/site/JoaoPessoaScreen.jsx":"2bca06094c4f","ui_kits/site/OutrasScreens.jsx":"9b02b824a355","ui_kits/site/Shell.jsx":"34d3e9338b7e","ui_kits/site/content.js":"da07a1c44982","ui_kits/site/content2.js":"7fc95f9a5aeb","ui_kits/site/content3.js":"ceec8eaf0be5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VieiraRodriguesDesignSystem_dddaeb = window.VieiraRodriguesDesignSystem_dddaeb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Declaration.jsx
try { (() => {
function Declaration({
  children,
  tone = 'dark',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1060,
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 'var(--w-bold)',
      fontSize: 'var(--fs-decl)',
      lineHeight: 1.08,
      letterSpacing: 'var(--tr-title)',
      margin: 0,
      color: tone === 'dark' ? '#fff' : 'var(--ink)'
    }
  }, children));
}
function Accent({
  children,
  tone = 'dark'
}) {
  return /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      fontWeight: 'var(--w-bold)',
      color: tone === 'dark' ? 'var(--roxo-lt)' : 'var(--roxo-deep)'
    }
  }, children);
}
Object.assign(__ds_scope, { Declaration, Accent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Declaration.jsx", error: String((e && e.message) || e) }); }

// components/content/InsightRow.jsx
try { (() => {
function InsightRow({
  kind,
  title,
  date,
  href = '#',
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("li", {
    style: {
      borderTop: '1px solid var(--line)',
      listStyle: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gap: '8px 32px',
      gridTemplateColumns: '190px minmax(0,1fr) 120px',
      padding: '26px 0',
      alignItems: 'baseline',
      textDecoration: 'none',
      color: hover ? 'var(--roxo-deep)' : 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-tema)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: 'var(--roxo-deep)'
    }
  }, kind), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 'var(--w-bold)',
      fontSize: 20,
      letterSpacing: '-.022em',
      lineHeight: 1.24,
      color: 'inherit'
    }
  }, title), /*#__PURE__*/React.createElement("time", {
    style: {
      fontSize: 'var(--fs-meta)',
      fontWeight: 'var(--w-semibold)',
      color: 'var(--ink-3)',
      whiteSpace: 'nowrap',
      textAlign: 'right'
    }
  }, date)));
}
Object.assign(__ds_scope, { InsightRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/InsightRow.jsx", error: String((e && e.message) || e) }); }

// components/content/PersonCard.jsx
try { (() => {
function PersonCard({
  name,
  role,
  image,
  href = '#',
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'block',
      background: hover ? 'var(--roxo-deep)' : 'var(--ink)',
      color: '#fff',
      textDecoration: 'none',
      transition: 'background var(--dur-med)',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '4/5',
      objectFit: 'cover',
      filter: hover ? 'grayscale(0)' : 'var(--filter-photo)',
      transition: 'filter var(--dur-img)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 'var(--w-bold)',
      fontSize: 22,
      letterSpacing: '-.024em'
    }
  }, name), role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.7)',
      marginTop: 4
    }
  }, role)));
}
Object.assign(__ds_scope, { PersonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PersonCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Photo.jsx
try { (() => {
function Photo({
  src,
  alt = '',
  ratio = '4/3',
  treatment = 'flat',
  revealOnHover = false,
  caption,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const filter = treatment === 'hero' ? 'var(--filter-hero)' : treatment === 'band' ? 'var(--filter-band)' : revealOnHover && hover ? 'var(--filter-photo-hover)' : 'var(--filter-photo)';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      overflow: 'hidden',
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      aspectRatio: ratio,
      objectFit: 'cover',
      filter,
      transition: 'filter var(--dur-img), transform var(--dur-reveal) var(--ease)',
      transform: revealOnHover && hover ? 'scale(var(--img-zoom))' : 'none'
    }
  }), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: 'var(--fs-base)',
      color: 'var(--ink-3)',
      marginTop: 6,
      lineHeight: 'var(--lh-tight)'
    }
  }, caption));
}
Object.assign(__ds_scope, { Photo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Photo.jsx", error: String((e && e.message) || e) }); }

// components/content/ArticleCard.jsx
try { (() => {
function ArticleCard({
  topic,
  title,
  excerpt,
  date,
  image,
  href = '#',
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      color: hover ? 'var(--roxo-deep)' : 'var(--ink)',
      textDecoration: 'none',
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, image && /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: image,
    ratio: "16/10",
    revealOnHover: hover
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, topic && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-tema)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, topic), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      letterSpacing: '-.026em',
      lineHeight: 1.1,
      color: 'inherit',
      fontWeight: 'var(--w-bold)'
    }
  }, title), excerpt && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--ink-3)',
      margin: 0,
      flex: 1
    }
  }, excerpt), date && /*#__PURE__*/React.createElement("time", {
    style: {
      fontSize: 'var(--fs-base)',
      color: 'var(--ink-3)',
      fontWeight: 'var(--w-semibold)'
    }
  }, date)));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/content/CapCard.jsx
try { (() => {
function CapCard({
  title,
  children,
  image,
  imageAlt = '',
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${dark ? 'var(--line-d)' : 'var(--ink)'}`,
      paddingTop: 20,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 12,
      fontSize: 'var(--fs-h3-sm)',
      color: dark ? '#fff' : 'var(--ink)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--tr-h3)',
      lineHeight: 'var(--lh-h3)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 'var(--lh-lede)',
      margin: '0 0 22px',
      color: dark ? 'rgba(255,255,255,.6)' : 'var(--ink-3)'
    }
  }, children), image && /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: image,
    alt: imageAlt,
    revealOnHover: true,
    style: {
      marginTop: 'auto'
    }
  }));
}
Object.assign(__ds_scope, { CapCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CapCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function Quote({
  children,
  tone = 'dark',
  size = 'md',
  style
}) {
  const fs = size === 'lg' ? 'var(--fs-tese)' : size === 'sm' ? 20 : 26;
  return /*#__PURE__*/React.createElement("blockquote", {
    style: {
      borderLeft: 'var(--quote-rule) solid var(--roxo)',
      padding: '6px 0 6px var(--quote-indent)',
      margin: 0,
      maxWidth: '56ch',
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 'var(--w-bold)',
      fontSize: fs,
      lineHeight: 1.12,
      letterSpacing: '-.03em',
      margin: 0,
      color: tone === 'dark' ? '#fff' : 'var(--ink)'
    }
  }, children));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/RuleList.jsx
try { (() => {
function RuleList({
  items = [],
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: 'relative',
      paddingLeft: 16,
      fontSize: 13.5,
      marginBottom: 6,
      lineHeight: 'var(--lh-tight)',
      color: dark ? 'rgba(255,255,255,.55)' : 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 9,
      width: 'var(--tick)',
      height: 1,
      background: 'var(--roxo)'
    }
  }), it)));
}
Object.assign(__ds_scope, { RuleList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/RuleList.jsx", error: String((e && e.message) || e) }); }

// components/content/ColumnCard.jsx
try { (() => {
function ColumnCard({
  label,
  title,
  children,
  items,
  image,
  more,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${dark ? 'var(--line-d)' : 'var(--ink)'}`,
      paddingTop: 20,
      ...style
    }
  }, image && /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: image,
    revealOnHover: true,
    style: {
      marginBottom: 18
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 'var(--w-bold)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      marginBottom: 12,
      color: dark ? 'var(--roxo-lt)' : 'var(--roxo-deep)'
    }
  }, label), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 14,
      fontSize: 'var(--fs-h3-sm)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--tr-h3)',
      lineHeight: 'var(--lh-h3)',
      color: dark ? '#fff' : 'var(--ink)'
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 'var(--lh-lede)',
      margin: '0 0 14px',
      color: dark ? 'rgba(255,255,255,.66)' : 'var(--ink-3)'
    }
  }, children), items && /*#__PURE__*/React.createElement(__ds_scope.RuleList, {
    items: items,
    tone: tone
  }), more && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginTop: 14,
      fontSize: 12,
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--tr-nav)',
      textTransform: 'uppercase',
      color: dark ? 'var(--roxo-lt)' : 'var(--roxo-deep)'
    }
  }, more));
}
Object.assign(__ds_scope, { ColumnCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ColumnCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function Stat({
  value,
  description,
  tone = 'dark',
  size = 'md',
  style
}) {
  const dark = tone === 'dark';
  const fs = size === 'lg' ? 38 : size === 'sm' ? 24 : 34;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${dark ? 'var(--line-d)' : 'var(--ink)'}`,
      paddingTop: 18,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 'var(--w-bold)',
      fontSize: fs,
      letterSpacing: 'var(--tr-stat)',
      lineHeight: 1.1,
      color: dark ? '#fff' : 'var(--ink)'
    }
  }, value), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      marginTop: 10,
      lineHeight: 'var(--lh-tight)',
      color: dark ? 'rgba(255,255,255,.58)' : 'var(--ink-3)'
    }
  }, description));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/BrandMark.jsx
try { (() => {
const HY = {
  fontStyle: 'normal',
  color: 'inherit'
};
function BrandMark({
  variant = 'stacked',
  tone = 'dark',
  size = 18,
  showSquare = true,
  style
}) {
  const color = tone === 'light' ? 'var(--ink)' : tone === 'roxo' ? '#fff' : 'var(--paper-2)';
  const mono = tone === 'roxo';
  const sq = Math.max(3, Math.round(size * 0.15));
  const word = {
    fontFamily: 'var(--brand)',
    fontWeight: 'var(--w-black)',
    fontSize: size,
    lineHeight: 'var(--lh-brand)',
    letterSpacing: 'var(--tr-brand)',
    textTransform: 'uppercase',
    color,
    display: 'block'
  };
  const square = {
    width: sq,
    height: sq,
    background: mono ? '#fff' : 'var(--roxo)',
    display: 'block',
    flex: '0 0 auto',
    marginBottom: Math.max(1, Math.round(size * 0.06)),
    marginLeft: Math.round(size * 0.35)
  };
  const hy = HY;
  if (variant === 'inline') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'flex-end',
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...word,
        whiteSpace: 'nowrap'
      }
    }, "Vieira", /*#__PURE__*/React.createElement("em", {
      style: hy
    }, "-"), "Rodrigues"), showSquare && /*#__PURE__*/React.createElement("i", {
      style: square
    }));
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-end',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: word
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "Vieira", /*#__PURE__*/React.createElement("em", {
    style: hy
  }, "-")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "Rodrigues")), showSquare && /*#__PURE__*/React.createElement("i", {
    style: square
  }));
}
Object.assign(__ds_scope, { BrandMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BrandMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 12,
  fontFamily: 'var(--display)',
  fontSize: 14.5,
  fontWeight: 'var(--w-semibold)',
  padding: 'var(--btn-pad)',
  border: '1px solid transparent',
  borderRadius: 0,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  letterSpacing: '-.01em',
  transition: 'all var(--dur)',
  textDecoration: 'none',
  lineHeight: 1.2
};
const VARIANTS = {
  solid: {
    rest: {
      background: 'var(--ink)',
      color: '#fff'
    },
    hover: {
      background: 'var(--roxo-deep)',
      color: '#fff'
    }
  },
  white: {
    rest: {
      background: 'var(--paper-2)',
      color: 'var(--ink)'
    },
    hover: {
      background: 'var(--roxo)',
      color: '#fff'
    }
  },
  outline: {
    rest: {
      borderColor: 'var(--ink)',
      color: 'var(--ink)',
      background: 'transparent'
    },
    hover: {
      background: 'var(--ink)',
      color: '#fff'
    }
  },
  'outline-d': {
    rest: {
      borderColor: 'rgba(255,255,255,.4)',
      color: '#fff',
      background: 'transparent'
    },
    hover: {
      background: 'rgba(255,255,255,.12)',
      color: '#fff'
    }
  }
};
function Button({
  variant = 'solid',
  arrow = false,
  href,
  disabled,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.solid;
  const css = {
    ...BASE,
    ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    ...style
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: 15,
      transition: 'transform var(--dur)',
      transform: hover ? 'translate(2px,-2px)' : 'none'
    }
  }, "\u2197"));
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: css,
    onClick: onClick
  }, handlers, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: css,
    onClick: onClick,
    disabled: disabled
  }, handlers, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = 'light',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: tone === 'dark' ? '#fff' : 'var(--ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 'var(--sq)',
      height: 'var(--sq)',
      background: 'var(--roxo)',
      display: 'block',
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  soft,
  note,
  tone = 'light',
  actions,
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '28px 56px',
      gridTemplateColumns: 'minmax(0,1.35fr) minmax(0,.65fr)',
      alignItems: 'start',
      marginBottom: 56,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: tone
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 18,
      color: dark ? '#fff' : 'var(--ink)',
      fontSize: 'var(--fs-h2)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--tr-title)',
      fontWeight: 'var(--w-bold)'
    }
  }, title, soft && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--w-bold)',
      letterSpacing: '-.034em',
      color: dark ? 'rgba(255,255,255,.5)' : 'var(--ink-3)'
    }
  }, soft))), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 30
    }
  }, actions)), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-note)',
      maxWidth: 'var(--measure-note)',
      color: dark ? 'rgba(255,255,255,.6)' : 'var(--ink-3)'
    }
  }, note));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function Pill({
  children,
  tone = 'ink',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      padding: 'var(--pill-pad)',
      background: tone === 'dark' ? 'rgba(255,255,255,.12)' : 'var(--ink)',
      color: '#fff',
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 'var(--sq-sm)',
      height: 'var(--sq-sm)',
      background: 'var(--roxo)',
      display: 'block',
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/PurpleBand.jsx
try { (() => {
function PurpleBand({
  height = 16,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: 'var(--roxo)',
      width: '100%',
      ...style
    }
  });
}
Object.assign(__ds_scope, { PurpleBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PurpleBand.jsx", error: String((e && e.message) || e) }); }

// components/forms/AnchorNav.jsx
try { (() => {
function AnchorNav({
  label,
  items = [],
  active,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line-d)',
      paddingTop: 28,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--w-bold)',
      letterSpacing: 'var(--tr-label)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.5)',
      marginBottom: 12
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, items.map(it => {
    const on = (it.id || it.label) === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it.id || it.label,
      href: it.href || '#' + it.id,
      onClick: () => onChange && onChange(it.id || it.label),
      style: {
        border: `1px solid ${on ? 'var(--roxo)' : 'var(--line-d)'}`,
        background: on ? 'var(--roxo)' : 'transparent',
        color: '#fff',
        padding: '12px 20px',
        fontSize: 13.5,
        fontWeight: 'var(--w-semibold)',
        textDecoration: 'none',
        transition: 'all .22s'
      }
    }, it.label);
  })));
}
Object.assign(__ds_scope, { AnchorNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/AnchorNav.jsx", error: String((e && e.message) || e) }); }

// components/forms/FaqItem.jsx
try { (() => {
function FaqItem({
  question,
  children,
  defaultOpen = false,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      padding: '22px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(!open),
    style: {
      all: 'unset',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 20,
      width: '100%',
      cursor: 'pointer',
      fontFamily: 'var(--display)',
      fontWeight: 'var(--w-bold)',
      fontSize: 'var(--fs-h3-sm)',
      letterSpacing: '-.022em',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, question), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--roxo-deep)',
      fontWeight: 'var(--w-bold)',
      flex: '0 0 auto'
    }
  }, open ? '–' : '+')), open && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-3)',
      fontSize: 'var(--fs-note)',
      marginTop: 14,
      marginBottom: 0,
      maxWidth: 'var(--measure-prose)'
    }
  }, children));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LABEL = {
  display: 'block',
  fontSize: 'var(--fs-eyebrow)',
  fontWeight: 'var(--w-bold)',
  letterSpacing: 'var(--tr-nav)',
  textTransform: 'uppercase',
  marginBottom: 7
};
function Field({
  label,
  type = 'text',
  options,
  value,
  onChange,
  placeholder,
  tone = 'dark',
  rows,
  name,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const dark = tone === 'dark';
  const control = {
    width: '100%',
    background: dark ? 'rgba(0,0,0,.32)' : '#fff',
    border: `1px solid ${focus ? 'transparent' : dark ? 'var(--line-d)' : 'var(--line)'}`,
    borderRadius: 0,
    padding: 'var(--field-pad)',
    color: dark ? '#fff' : 'var(--ink)',
    fontFamily: 'var(--sans)',
    fontSize: 15,
    outline: focus ? '2px solid var(--roxo)' : 'none',
    outlineOffset: 0
  };
  const bind = {
    name,
    value,
    onChange,
    placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: control
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 15,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      ...LABEL,
      color: dark ? 'rgba(255,255,255,.55)' : 'var(--ink-3)'
    }
  }, label), type === 'textarea' ? /*#__PURE__*/React.createElement("textarea", _extends({}, bind, {
    rows: rows || 4,
    style: {
      ...control,
      minHeight: 104,
      resize: 'vertical'
    }
  })) : type === 'select' ? /*#__PURE__*/React.createElement("select", bind, (options || []).map((o, i) => /*#__PURE__*/React.createElement("option", {
    key: i,
    value: o
  }, o))) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, bind)));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterChips.jsx
try { (() => {
function FilterChips({
  items = [],
  value,
  onChange,
  tone = 'light',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      ...style
    }
  }, items.map(it => {
    const on = it === value;
    const dark = tone === 'dark';
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      type: "button",
      onClick: () => onChange && onChange(it),
      style: {
        border: `1px solid ${on ? dark ? 'var(--roxo)' : 'var(--ink)' : dark ? 'var(--line-d)' : 'var(--line)'}`,
        background: on ? dark ? 'var(--roxo)' : 'var(--ink)' : 'transparent',
        color: on ? '#fff' : dark ? '#fff' : 'var(--ink)',
        padding: '10px 18px',
        borderRadius: 0,
        fontFamily: 'var(--sans)',
        fontSize: 13,
        fontWeight: 'var(--w-semibold)',
        cursor: 'pointer',
        transition: 'all var(--dur)'
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { FilterChips });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterChips.jsx", error: String((e && e.message) || e) }); }

// ui_kits/carrossel/Slides.jsx
try { (() => {
const S = window.VieiraRodriguesDesignSystem_dddaeb;
const W = 1080,
  H = 1350;
const frame = bg => ({
  width: W,
  height: H,
  background: bg,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  flex: '0 0 auto'
});
const PAD = 88;
function SlideNumber({
  n,
  total,
  tone = 'light'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: PAD,
      bottom: 56,
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-.02em',
      color: tone === 'dark' ? 'rgba(255,255,255,.5)' : 'var(--ink-3)'
    }
  }, String(n).padStart(2, '0'), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5
    }
  }, " / ", String(total).padStart(2, '0')));
}
function CapaSlide({
  eyebrow,
  title,
  n,
  total
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: frame('var(--ink)')
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero-joao-pessoa.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'var(--filter-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: PAD,
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(S.BrandMark, {
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(S.Eyebrow, {
    tone: "dark",
    style: {
      fontSize: 20,
      letterSpacing: '.14em'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 92,
      lineHeight: 1.0,
      letterSpacing: '-.038em',
      margin: '30px 0 0',
      maxWidth: '15ch',
      fontWeight: 700
    }
  }, title))), /*#__PURE__*/React.createElement(SlideNumber, {
    n: n,
    total: total,
    tone: "dark"
  }));
}
function TextoSlide({
  label,
  title,
  body,
  tone = 'light',
  n,
  total
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: frame(dark ? 'var(--ink)' : 'var(--paper-2)')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: PAD,
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(S.Eyebrow, {
    tone: dark ? 'dark' : 'light',
    style: {
      fontSize: 19,
      letterSpacing: '.14em'
    }
  }, label), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 68,
      lineHeight: 1.04,
      letterSpacing: '-.034em',
      margin: '38px 0 30px',
      color: dark ? '#fff' : 'var(--ink)',
      maxWidth: '18ch'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 34,
      lineHeight: 1.42,
      color: dark ? 'rgba(255,255,255,.7)' : 'var(--ink-3)',
      maxWidth: '26ch',
      margin: 0
    }
  }, body)), /*#__PURE__*/React.createElement(SlideNumber, {
    n: n,
    total: total,
    tone: tone
  }));
}
function ListaSlide({
  label,
  title,
  items,
  tone = 'light',
  n,
  total
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: frame(dark ? 'var(--ink)' : 'var(--paper)')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: PAD,
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(S.Eyebrow, {
    tone: dark ? 'dark' : 'light',
    style: {
      fontSize: 19,
      letterSpacing: '.14em'
    }
  }, label), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 62,
      lineHeight: 1.05,
      letterSpacing: '-.034em',
      margin: '38px 0 46px',
      color: dark ? '#fff' : 'var(--ink)',
      maxWidth: '18ch'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      borderTop: `1px solid ${dark ? 'var(--line-d)' : 'var(--ink)'}`,
      padding: '26px 0',
      fontSize: 32,
      lineHeight: 1.3,
      color: dark ? 'rgba(255,255,255,.82)' : 'var(--ink)',
      fontWeight: 500
    }
  }, t)))), /*#__PURE__*/React.createElement(SlideNumber, {
    n: n,
    total: total,
    tone: tone
  }));
}
function NumeroSlide({
  label,
  value,
  caption,
  body,
  n,
  total
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: frame('var(--ink)')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: PAD,
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(S.Eyebrow, {
    tone: "dark",
    style: {
      fontSize: 19,
      letterSpacing: '.14em'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 210,
      fontWeight: 700,
      letterSpacing: '-.05em',
      lineHeight: .9,
      color: 'var(--roxo-lt)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 38,
      fontWeight: 700,
      letterSpacing: '-.03em',
      color: '#fff',
      marginTop: 18,
      maxWidth: '22ch'
    }
  }, caption), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 28,
      lineHeight: 1.45,
      color: 'rgba(255,255,255,.6)',
      maxWidth: '30ch',
      marginTop: 26
    }
  }, body))), /*#__PURE__*/React.createElement(SlideNumber, {
    n: n,
    total: total,
    tone: "dark"
  }));
}
function CitacaoSlide({
  quote,
  source,
  n,
  total
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: frame('var(--paper-2)')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: PAD,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      borderLeft: '8px solid var(--roxo)',
      padding: '10px 0 10px 44px',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 62,
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-.034em',
      margin: 0,
      maxWidth: '20ch'
    }
  }, quote)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--roxo-deep)',
      marginTop: 42,
      paddingLeft: 52
    }
  }, source)), /*#__PURE__*/React.createElement(SlideNumber, {
    n: n,
    total: total
  }));
}
function FinalSlide({
  cta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: frame('var(--ink)')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: PAD,
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'auto 0'
    }
  }, /*#__PURE__*/React.createElement(S.BrandMark, {
    size: 92
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16,
      background: 'var(--roxo)',
      marginBottom: 34
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 34,
      lineHeight: 1.35,
      color: '#fff',
      margin: '0 0 26px',
      maxWidth: '24ch',
      fontWeight: 700,
      letterSpacing: '-.028em'
    }
  }, cta), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 22,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,.5)',
      margin: 0,
      maxWidth: '38ch'
    }
  }, "diego@vieira-rodrigues.com \xB7 +55 83 99171-5836", /*#__PURE__*/React.createElement("br", null), "Conte\xFAdo informativo. N\xE3o constitui consulta nem oferta de servi\xE7os."))));
}
Object.assign(window, {
  CapaSlide,
  TextoSlide,
  ListaSlide,
  NumeroSlide,
  CitacaoSlide,
  FinalSlide,
  CARROSSEL_W: W,
  CARROSSEL_H: H
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/carrossel/Slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/documentos/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/documentos/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/site/Bits.jsx
try { (() => {
/* Peças compartilhadas entre telas: ícones, cartões e blocos recorrentes. */

const B = window.VieiraRodriguesDesignSystem_dddaeb;
const SV_ICON = {
  plan: `<path d="M3 5h18v14H3z" /><path d="M3 10h7v9" /><path d="M14 5v14" /><circle cx="16.5" cy="8.5" r="2.6" /><path d="M18.4 10.4 21 13" />`,
  seal: `<circle cx="12" cy="9" r="5.5" /><path d="M9.6 9.2l1.7 1.7 3.2-3.4" /><path d="M8 14.6 6.5 21l5.5-2.4L17.5 21 16 14.6" />`,
  building: `<path d="M4 21V7l8-4 8 4v14" /><path d="M9 21v-6h6v6" /><path d="M8 10h2M14 10h2" />`,
  doc: `<path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4" /><path d="M9 13.8l2 2 4-4.2" />`,
  crane: `<path d="M4 21V4h2v17" /><path d="M5 6h15" /><path d="M16 6v4h-3" /><path d="M5 6l4 4" /><path d="M11 14h8v7h-8z" />`,
  store: `<path d="M3 9h18v12H3z" /><path d="M3 9l2-5h14l2 5" /><path d="M9 21v-7h6v7" />`,
  heritage: `<path d="M3 21h18" /><path d="M4 21V9h16v12" /><path d="M4 9l8-6 8 6" /><path d="M8.5 21v-7M12 21v-7M15.5 21v-7" />`,
  green: `<path d="M3 21h18" /><path d="M12 21V9" /><path d="M12 9c0-3.6 2.4-6 6-6 0 3.6-2.4 6-6 6z" /><path d="M12 14c0-3-2-5-5-5 0 3 2 5 5 5z" />`,
  industry: `<path d="M3 21h18" /><path d="M3 21V11l5 3V11l5 3V21" /><path d="M13 21V6h5l1 15" /><path d="M16 12h2" />`,
  transfer: `<path d="M3 9h14" /><path d="M13 5l4 4-4 4" /><path d="M21 15H7" /><path d="M11 11l-4 4 4 4" />`,
  leafup: `<path d="M4 21h16" /><path d="M12 21v-8" /><path d="M12 13c0-4.4 3-7.5 8-7.5 0 4.4-3 7.5-8 7.5z" /><path d="M8 3v7" /><path d="M5.5 5.5 8 3l2.5 2.5" />`,
  percent: `<circle cx="7.5" cy="7.5" r="2.6" /><circle cx="16.5" cy="16.5" r="2.6" /><path d="M19 5 5 19" />`,
  zone: `<path d="M3 5h18v14H3z" /><path d="M3 12h9V5" /><path d="M12 12v7" /><path d="M16 8.5h5" />`,
  reserve: `<path d="M12 3l8 3v6c0 5-3.6 8-8 9-4.4-1-8-4-8-9V6z" /><path d="M12 18v-5" /><path d="M12 13c0-2.6 1.8-4.4 4.4-4.4 0 2.6-1.8 4.4-4.4 4.4z" />`
};
function SvIcon({
  name,
  size = 28
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.1",
    strokeLinecap: "square",
    strokeLinejoin: "miter",
    "aria-hidden": "true",
    style: {
      display: 'block',
      opacity: .85
    },
    dangerouslySetInnerHTML: {
      __html: SV_ICON[name] || ''
    }
  });
}

/* Tabela do sistema: sem borda externa, fio de 1 px entre linhas. */
function Table({
  head,
  rows,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  const line = dark ? 'var(--line-d)' : 'var(--line)';
  const ink = dark ? '#fff' : 'var(--ink)';
  const soft = dark ? 'rgba(255,255,255,.62)' : 'var(--ink-2, #6e6a60)';
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 14.5,
      ...style
    }
  }, head && /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, head.map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: 'left',
      padding: '0 16px 12px 0',
      borderBottom: `1px solid ${line}`,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.13em',
      textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,.45)' : 'var(--ink-3, #97928a)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, r.map((c, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      padding: '14px 16px 14px 0',
      borderBottom: `1px solid ${line}`,
      verticalAlign: 'top',
      lineHeight: 1.5,
      color: j === 0 ? ink : soft,
      fontWeight: j === 0 ? 500 : 400,
      whiteSpace: j === 0 && c.length < 14 ? 'nowrap' : 'normal'
    }
  }, c))))));
}

/* Ficha de duas colunas com fio — o padrão da identificação no kit. */
function Ficha({
  rows,
  tone = 'dark',
  labelWidth = 170,
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      borderTop: `1px solid ${dark ? 'var(--line-d)' : 'var(--line)'}`,
      ...style
    }
  }, rows.map(([k, v], i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 20,
      padding: '13px 0',
      flexWrap: 'wrap',
      borderBottom: `1px solid ${dark ? 'var(--line-d)' : 'var(--line)'}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? 'rgba(255,255,255,.45)' : 'var(--ink-3, #97928a)',
      minWidth: labelWidth,
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      paddingTop: 3
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? '#fff' : 'var(--ink)',
      flex: 1,
      minWidth: 220,
      lineHeight: 1.55,
      fontSize: 15
    }
  }, v))));
}

/* Aviso em faixa — usado para norma sub judice e página retida. */
function Aviso({
  children,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '4px solid var(--roxo)',
      padding: '18px 0 18px 22px',
      background: dark ? 'var(--ink-surf-2)' : 'rgba(75,46,131,.05)',
      paddingRight: 22,
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: dark ? 'rgba(255,255,255,.82)' : 'var(--ink)'
    }
  }, children));
}

/* Faixa de primeiro passo — fecha quase todas as páginas. */
function PrimeiroPasso({
  onNav,
  titulo = 'Uma consulta técnica antes',
  soft = 'de qualquer decisão contratual.',
  cta = 'Agendar reunião técnica'
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(B.Eyebrow, {
    tone: "dark"
  }, "Primeiro passo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '20px 0 8px',
      maxWidth: '18ch',
      color: '#fff'
    }
  }, titulo, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,.5)',
      letterSpacing: '-.034em'
    }
  }, soft)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(B.Button, {
    variant: "white",
    arrow: true,
    onClick: () => onNav('contato')
  }, cta)));
}

/* Hero interno, sem a marca empilhada. */
function HeroInterno({
  eyebrow,
  title,
  lede,
  image = '../../assets/jp-sao-francisco-aerea.jpg',
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 'min(64vh,560px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      background: 'var(--ink)',
      overflow: 'hidden',
      isolation: 'isolate'
    }
  }, image && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: -2,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'var(--filter-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: -1,
      background: 'var(--scrim-hero)'
    }
  })), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      padding: '190px 40px 76px'
    }
  }, /*#__PURE__*/React.createElement(B.Eyebrow, {
    tone: "dark"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      margin: '18px 0 20px',
      maxWidth: 814
    }
  }, title), lede && lede.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      color: 'rgba(255,255,255,.66)',
      fontSize: 'var(--fs-lede)',
      maxWidth: '58ch',
      margin: '0 0 14px'
    }
  }, p)), children));
}
Object.assign(window, {
  SvIcon,
  Table,
  Ficha,
  Aviso,
  PrimeiroPasso,
  HeroInterno
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Bits.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Chrome.jsx
try { (() => {
const DS = window.VieiraRodriguesDesignSystem_dddaeb;
const {
  BrandMark,
  Button,
  PurpleBand
} = DS;
const NAV = [['consultoria', 'A consultoria'], ['especialidades', 'Especialidades'], ['joaopessoa', 'João Pessoa'], ['analises', 'Análises'], ['contato', 'Contato']];
function Topbar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      color: 'rgba(255,255,255,.6)',
      fontSize: 'var(--fs-topbar)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px 26px',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: 'var(--wrap)',
      margin: '0 auto',
      padding: '10px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'rgba(255,255,255,.85)'
    }
  }, IDENT.email), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'rgba(255,255,255,.85)'
    }
  }, IDENT.whats)), /*#__PURE__*/React.createElement("span", null, IDENT.base)));
}
function NavLink({
  id,
  label,
  page,
  onNav
}) {
  const [hover, setHover] = React.useState(false);
  const on = page === id || typeof page === 'string' && page.indexOf(id) === 0;
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      fontSize: 'var(--fs-topbar)',
      fontWeight: 700,
      letterSpacing: 'var(--tr-nav)',
      textTransform: 'uppercase',
      color: hover || on ? 'var(--roxo-lt)' : '#fff',
      whiteSpace: 'nowrap'
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: -6,
      height: 1,
      background: 'var(--roxo)',
      right: hover || on ? 0 : '100%',
      transition: 'right var(--dur-slow) var(--ease)'
    }
  })));
}
function SiteHeader({
  page,
  onNav,
  scrolled
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: 60,
      background: scrolled ? 'var(--header-scrolled)' : 'transparent',
      backdropFilter: scrolled ? 'var(--header-blur)' : 'none',
      transition: 'background var(--dur-slow)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      maxWidth: 'var(--wrap)',
      margin: '0 auto',
      padding: '26px 40px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      marginRight: 24
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9.5,
      fontWeight: 700,
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.5)'
    }
  }, "Advocacia")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: 30,
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, NAV.map(([id, label]) => /*#__PURE__*/React.createElement(NavLink, {
    key: id,
    id: id,
    label: label,
    page: page,
    onNav: onNav
  })))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'rgba(255,255,255,.7)',
      letterSpacing: '.13em'
    }
  }, "EN")));
}
function SiteFooter({
  onNav
}) {
  const [mail, setMail] = React.useState('');
  const col = (title, links) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'rgba(255,255,255,.45)',
      margin: '0 0 18px'
    }
  }, title), links.map(([label, to]) => /*#__PURE__*/React.createElement("p", {
    key: label,
    style: {
      margin: '0 0 10px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (to) onNav(to);
    },
    style: {
      color: 'rgba(255,255,255,.8)'
    }
  }, label))));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PurpleBand, null), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: 'rgba(255,255,255,.6)',
      padding: '88px 0 32px',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--wrap)',
      margin: '0 auto',
      padding: '0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    size: 124
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr repeat(4,1fr)',
      gap: 32,
      padding: '46px 0 44px',
      borderTop: '1px solid var(--line-d)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'rgba(255,255,255,.45)',
      margin: '0 0 18px'
    }
  }, "Receba as an\xE1lises"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '38ch',
      fontSize: 14.5
    }
  }, "Uma an\xE1lise por vez, quando houver o que dizer. Sem periodicidade fixa."), /*#__PURE__*/React.createElement("input", {
    value: mail,
    onChange: e => setMail(e.target.value),
    placeholder: "seu@email.com",
    style: {
      marginTop: 16,
      width: '100%',
      maxWidth: 260,
      background: 'var(--ink-surf-2)',
      border: '1px solid var(--line-d)',
      color: '#fff',
      padding: '11px 13px',
      fontSize: 14,
      fontFamily: 'inherit',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    arrow: true,
    style: {
      marginTop: 12
    }
  }, "Quero receber")), col('Institucional', [['Termos de uso', 'termos'], ['Política de privacidade', 'privacidade'], ['Sigilo e LGPD', 'lgpd']]), col('Social', [['Instagram', null], ['LinkedIn', null], ['E-mail', null], ['WhatsApp', null]]), col('Descubra', [['Especialidades', 'especialidades'], ['João Pessoa', 'joaopessoa'], ['Análises', 'analises'], ['O advogado', 'advogado']]), col('Escritório', [['A consultoria', 'consultoria'], ['Contato', 'contato']])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      borderTop: '1px solid var(--line-d)',
      paddingTop: 28,
      fontSize: 12.5,
      color: 'rgba(255,255,255,.4)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ", IDENT.razao, " \xB7 ", IDENT.titular, ", ", IDENT.oab, " \xB7 ", IDENT.base), /*#__PURE__*/React.createElement("span", null, "Publicidade advocat\xEDcia, conforme o Provimento 205/2021 da OAB")))));
}
Object.assign(window, {
  Topbar,
  SiteHeader,
  SiteFooter,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ConsultoriaScreen.jsx
try { (() => {
const CS = window.VieiraRodriguesDesignSystem_dddaeb;
function ConsultoriaScreen({
  onNav
}) {
  const {
    SectionHeader,
    ColumnCard,
    Quote,
    Button,
    AnchorNav,
    RuleList,
    Declaration,
    Accent
  } = CS;
  const [active, setActive] = React.useState('oque');
  const c = CONSULTORIA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroInterno, {
    eyebrow: c.hero.eyebrow,
    title: c.hero.title,
    image: "../../assets/jp-skyline-mar.jpg"
  }, /*#__PURE__*/React.createElement(AnchorNav, {
    label: "Nesta p\xE1gina",
    active: active,
    onChange: setActive,
    items: c.ancoras.map(a => ({
      id: a.id,
      label: a.label,
      href: '#'
    })),
    style: {
      marginTop: 36
    }
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "O que \xE9",
    title: "Consultoria urban\xEDstica,",
    soft: "em uma defini\xE7\xE3o.",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '68ch',
      display: 'grid',
      gap: 20
    }
  }, c.oque.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontSize: i === 0 ? 20 : 16.5,
      lineHeight: 1.65,
      color: i === 0 ? 'var(--ink)' : 'var(--ink-2, #6e6a60)',
      fontWeight: i === 0 ? 500 : 400
    }
  }, p)))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(Declaration, {
    style: {
      maxWidth: 1000
    }
  }, "Um projeto, tr\xEAs perguntas: ", /*#__PURE__*/React.createElement(Accent, null, "o que"), ", ", /*#__PURE__*/React.createElement(Accent, null, "como"), " e ", /*#__PURE__*/React.createElement(Accent, null, "quanto"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 40,
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      marginTop: 60
    }
  }, c.camadas.map((cam, i) => /*#__PURE__*/React.createElement(ColumnCard, {
    key: cam.titulo,
    tone: "dark",
    label: '0' + (i + 1),
    title: cam.titulo,
    items: cam.itens
  }, cam.texto))), /*#__PURE__*/React.createElement(Quote, {
    tone: "dark",
    size: "lg",
    style: {
      marginTop: 56
    }
  }, c.camadas_sintese)), /*#__PURE__*/React.createElement(Section, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Timing",
    title: "Quando acionar a consultoria.",
    note: "Cinco momentos em que a an\xE1lise muda o resultado \u2014 e depois dos quais ela fica mais cara.",
    style: {
      marginBottom: 44
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 32,
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))'
    }
  }, c.quando.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      paddingTop: 20,
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 12px',
      fontSize: 17,
      fontWeight: 500,
      letterSpacing: '-.02em',
      textTransform: 'none',
      color: 'var(--ink)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--ink-2, #6e6a60)'
    }
  }, d)))), /*#__PURE__*/React.createElement(Quote, {
    tone: "light",
    size: "lg",
    style: {
      marginTop: 48
    }
  }, c.quando_sintese)), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "M\xE9todo",
    title: "Quatro etapas,",
    soft: "cada uma com entrega escrita.",
    note: c.metodo_nota,
    style: {
      marginBottom: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 32,
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))'
    }
  }, c.metodo.map(([n, t, d]) => /*#__PURE__*/React.createElement(ColumnCard, {
    key: n,
    label: 'ETAPA ' + n,
    title: t
  }, d)))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "dark",
    eyebrow: "Rede t\xE9cnica",
    title: "Coordena\xE7\xE3o jur\xEDdica,",
    soft: "execu\xE7\xE3o t\xE9cnica de parceiros.",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '70ch',
      display: 'grid',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16.5,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,.72)'
    }
  }, c.rede[0]), /*#__PURE__*/React.createElement(RuleList, {
    tone: "dark",
    items: [c.rede[1]]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16.5,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,.72)'
    }
  }, c.rede[2]))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Quem responde",
    title: "Diego Rodrigues Vieira",
    note: "Fundador e advogado respons\xE1vel. Antes do escrit\xF3rio, seis anos dentro de um bairro tombado de S\xE3o Paulo \u2014 restri\xE7\xE3o de interven\xE7\xE3o, potencial construtivo e preserva\xE7\xE3o patrimonial.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "solid",
      arrow: true,
      onClick: () => onNav('advogado')
    }, "Trajet\xF3ria completa")
  })), /*#__PURE__*/React.createElement(PrimeiroPasso, {
    onNav: onNav
  }));
}
Object.assign(window, {
  ConsultoriaScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ConsultoriaScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ContatoScreen.jsx
try { (() => {
const K = window.VieiraRodriguesDesignSystem_dddaeb;
function ContatoScreen({
  onNav
}) {
  const {
    Field,
    Button,
    SectionHeader,
    RuleList
  } = K;
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    assunto: 'Não sei ainda',
    msg: ''
  });
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink)',
      padding: '190px 0 104px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 72
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(K.Eyebrow, {
    tone: "dark"
  }, "Contato"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      margin: '18px 0 20px'
    }
  }, "Uma conversa antes", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,.5)',
      letterSpacing: '-.034em'
    }
  }, "de qualquer decis\xE3o.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.66)',
      fontSize: 'var(--fs-lede)',
      maxWidth: '46ch'
    }
  }, "Conte o caso em duas linhas. Respondo pessoalmente, e a primeira conversa serve para dizer se h\xE1 caminho \u2014 n\xE3o para vender servi\xE7o."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '36px 0 0',
      padding: 0
    }
  }, [['E-mail', IDENT.email], ['WhatsApp', IDENT.whats], ['Base', IDENT.base], ['Atendimento', 'Remoto em todo o país'], ['Idiomas', 'Português · Inglês · Espanhol']].map(([k, v]) => /*#__PURE__*/React.createElement("li", {
    key: k,
    style: {
      display: 'flex',
      gap: 20,
      padding: '13px 0',
      borderBottom: '1px solid var(--line-d)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,.45)',
      minWidth: 140,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 'var(--tr-nav)',
      textTransform: 'uppercase',
      paddingTop: 3
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-surf-2)',
      border: '1px solid var(--line-d)',
      padding: 34
    }
  }, sent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      marginBottom: 6
    }
  }, "Mensagem recebida."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.58)',
      fontSize: 14
    }
  }, "Respondo em at\xE9 um dia \xFAtil, do endere\xE7o ", IDENT.email, "."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-d",
    style: {
      marginTop: 14
    },
    onClick: () => setSent(false)
  }, "Enviar outra")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      marginBottom: 6
    }
  }, "Falar com o advogado"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.58)',
      fontSize: 14,
      marginBottom: 22
    }
  }, "Campos obrigat\xF3rios: nome, e-mail e uma descri\xE7\xE3o curta."), /*#__PURE__*/React.createElement(Field, {
    label: "Nome",
    value: form.nome,
    onChange: set('nome'),
    placeholder: "Seu nome"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail",
    type: "email",
    value: form.email,
    onChange: set('email'),
    placeholder: "voce@empresa.com"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Assunto",
    type: "select",
    value: form.assunto,
    onChange: set('assunto'),
    options: ['Não sei ainda', 'Potencial construtivo e TDC', 'Licenciamento e alvarás', 'Regularização e anistia', 'Centro Histórico', 'Tributação da operação', 'Outro']
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Mensagem",
    type: "textarea",
    value: form.msg,
    onChange: set('msg'),
    placeholder: "Onde est\xE1 o im\xF3vel e em que fase o projeto est\xE1?"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    style: {
      width: '100%',
      justifyContent: 'center',
      marginTop: 6
    },
    onClick: () => setSent(true)
  }, "Enviar"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'rgba(255,255,255,.48)',
      margin: '16px 0 0',
      lineHeight: 1.55
    }
  }, "O envio n\xE3o cria rela\xE7\xE3o advogado-cliente. Os dados s\xE3o usados apenas para responder ao contato, conforme a LGPD.")))))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Atendimento",
    title: "Como agendar.",
    note: "Base em Jo\xE3o Pessoa e atua\xE7\xE3o remota em todo o Brasil.",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement(RuleList, {
    items: ['Escreva por e-mail ou WhatsApp com uma descrição curta do caso e a localização do imóvel.', 'A primeira conversa é por vídeo, de 30 minutos, e serve para dizer se há caminho.', 'Havendo caminho, você recebe uma proposta de honorários com escopo, etapas e prazos.']
  })));
}
Object.assign(window, {
  ContatoScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ContatoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/EspecialidadesScreen.jsx
try { (() => {
const E = window.VieiraRodriguesDesignSystem_dddaeb;
const CAMADAS = [{
  id: 'base',
  label: 'Base',
  titulo: 'Serviços de base',
  nota: 'Todo empreendimento passa por aqui.'
}, {
  id: 'mecanismo',
  label: 'Mecanismos',
  titulo: 'Mecanismos de aproveitamento',
  nota: 'Instrumentos da legislação de João Pessoa. É onde está o diferencial de rentabilidade e de risco.'
}, {
  id: 'apoio',
  label: 'Apoio',
  titulo: 'Camadas de apoio',
  nota: 'As duas frentes que respondem "como" e "quanto".'
}];

/* ------------------------------------------------------------------ HUB */

function EspecialidadesScreen({
  onNav
}) {
  const {
    SectionHeader,
    CapCard,
    AnchorNav,
    Quote,
    Button
  } = E;
  const [active, setActive] = React.useState('base');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroInterno, {
    eyebrow: "Atua\xE7\xE3o",
    title: HUB.h1,
    lede: [HUB.lede],
    image: "../../assets/jp-centro-telhados.jpg"
  }, /*#__PURE__*/React.createElement(AnchorNav, {
    label: "Nesta p\xE1gina",
    active: active,
    onChange: setActive,
    items: CAMADAS.map(c => ({
      id: c.id,
      label: c.label,
      href: '#'
    })),
    style: {
      marginTop: 36
    }
  })), CAMADAS.map((cam, i) => {
    const dark = i === 1;
    const lista = ESPECIALIDADES.filter(e => e.camada === cam.id);
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: cam.id
    }, /*#__PURE__*/React.createElement(Section, {
      tone: dark ? 'dark' : i === 0 ? 'paper-2' : 'paper'
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      tone: dark ? 'dark' : 'light',
      eyebrow: cam.label,
      title: cam.titulo,
      note: cam.nota,
      style: {
        marginBottom: 36
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: '34px 32px',
        gridTemplateColumns: `repeat(${Math.min(3, lista.length)},minmax(0,1fr))`
      }
    }, lista.map(e => /*#__PURE__*/React.createElement("a", {
      key: e.slug,
      href: "#",
      onClick: ev => {
        ev.preventDefault();
        onNav('esp:' + e.slug);
      }
    }, /*#__PURE__*/React.createElement(CapCard, {
      tone: dark ? 'dark' : 'light',
      title: e.nome
    }, e.curto))))), i === 0 && /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
      eyebrow: "Mercado",
      title: "Quem tem potencial parado,",
      soft: "e quem precisa de potencial.",
      note: "A consultoria atende os dois lados de uma mesma opera\xE7\xE3o. Vale saber de qual lado voc\xEA est\xE1 antes de escolher o instrumento.",
      style: {
        marginBottom: 36
      }
    }), /*#__PURE__*/React.createElement(Table, {
      head: HUB.lados.head,
      rows: HUB.lados.rows
    }), /*#__PURE__*/React.createElement(Quote, {
      tone: "light",
      size: "lg",
      style: {
        marginTop: 44
      }
    }, HUB.destaque)));
  }), /*#__PURE__*/React.createElement(PrimeiroPasso, {
    onNav: onNav
  }));
}

/* --------------------------------------------------- PÁGINA DE SERVIÇO */

function EspecialidadeScreen({
  onNav,
  slug
}) {
  const {
    SectionHeader,
    ColumnCard,
    Quote,
    Button,
    CapCard
  } = E;
  const e = ESPECIALIDADES.find(x => x.slug === slug) || ESPECIALIDADES[0];
  const rel = (e.relacionados || []).map(s => ESPECIALIDADES.find(x => x.slug === s)).filter(Boolean);
  const camadaLabel = {
    base: 'Serviço de base',
    mecanismo: 'Mecanismo',
    apoio: 'Apoio'
  }[e.camada];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroInterno, {
    eyebrow: camadaLabel,
    title: e.h1,
    image: "../../assets/jp-cabo-branco-aerea.jpg"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.5)',
      fontSize: 13.5,
      margin: '10px 0 0',
      letterSpacing: '.02em'
    }
  }, e.base)), e.aviso && /*#__PURE__*/React.createElement(Section, {
    tone: "paper",
    style: {
      paddingTop: 56,
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement(Aviso, null, e.aviso)), /*#__PURE__*/React.createElement(Section, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 56,
      gridTemplateColumns: '.9fr 1.1fr',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(E.Eyebrow, null, "Para quem \xE9"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'grid',
      gap: 16
    }
  }, e.paraQuem.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.62,
      color: 'var(--ink)'
    }
  }, p)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(E.Eyebrow, null, "O que a lei permite"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 16,
      lineHeight: 1.62,
      color: 'var(--ink-2, #6e6a60)'
    }
  }, e.lei), e.tabela && /*#__PURE__*/React.createElement(Table, {
    head: e.tabela.head,
    rows: e.tabela.rows,
    style: {
      marginTop: 26
    }
  })))), e.dispositivos && /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "dark",
    eyebrow: "Base legal",
    title: "Onde est\xE1 escrito.",
    note: "Cada afirma\xE7\xE3o desta p\xE1gina tem o dispositivo ao lado.",
    style: {
      marginBottom: 32
    }
  }), /*#__PURE__*/React.createElement(Ficha, {
    rows: e.dispositivos,
    tone: "dark",
    labelWidth: 260
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 48,
      gridTemplateColumns: '1.05fr .95fr',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(ColumnCard, {
    label: "Escopo",
    title: "O que fazemos",
    items: e.escopo
  }), /*#__PURE__*/React.createElement("div", null, e.ficha && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(E.Eyebrow, null, "Na pr\xE1tica"), /*#__PURE__*/React.createElement(Ficha, {
    rows: e.ficha,
    tone: "light",
    labelWidth: 190,
    style: {
      marginTop: 18
    }
  })))), e.etapas && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(E.Eyebrow, null, "Como funciona"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: '20px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'grid',
      gap: 0,
      borderTop: '1px solid var(--line)'
    }
  }, e.etapas.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 20,
      padding: '15px 0',
      borderBottom: '1px solid var(--line)',
      fontSize: 15.5,
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--roxo)',
      fontWeight: 700,
      minWidth: 28
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", null, p)))))), (e.destaque || e.limite) && /*#__PURE__*/React.createElement(Section, {
    tone: "paper"
  }, e.destaque && /*#__PURE__*/React.createElement(Quote, {
    tone: "light",
    size: "lg"
  }, e.destaque), e.limite && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 34,
      maxWidth: '72ch',
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--ink-2, #6e6a60)'
    }
  }, e.limite)), e.tributario && /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "dark",
    eyebrow: "A conta tribut\xE1ria",
    title: e.tributario.titulo,
    style: {
      marginBottom: 30
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '72ch',
      fontSize: 16.5,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,.78)'
    }
  }, e.tributario.texto), e.tributario.abertos && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--roxo-lt)',
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.15em',
      textTransform: 'uppercase',
      margin: '42px 0 20px'
    }
  }, "O que continua em aberto"), /*#__PURE__*/React.createElement(E.RuleList, {
    tone: "dark",
    items: e.tributario.abertos
  }))), rel.length > 0 && /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Relacionados",
    title: "Continue por aqui.",
    style: {
      marginBottom: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 32,
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))'
    }
  }, rel.map(r => /*#__PURE__*/React.createElement("a", {
    key: r.slug,
    href: "#",
    onClick: ev => {
      ev.preventDefault();
      onNav('esp:' + r.slug);
    }
  }, /*#__PURE__*/React.createElement(CapCard, {
    title: r.nome
  }, r.curto))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: ev => {
      ev.preventDefault();
      onNav('joaopessoa');
    }
  }, /*#__PURE__*/React.createElement(CapCard, {
    title: "Mapa normativo de Jo\xE3o Pessoa"
  }, "A legisla\xE7\xE3o urban\xEDstica da cidade reunida, com o estado de cada norma.")))), /*#__PURE__*/React.createElement(PrimeiroPasso, {
    onNav: onNav,
    cta: "Falar sobre o caso"
  }));
}
Object.assign(window, {
  EspecialidadesScreen,
  EspecialidadeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/EspecialidadesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/HomeScreen.jsx
try { (() => {
const D = window.VieiraRodriguesDesignSystem_dddaeb;
function SectorCard({
  icon,
  title,
  profile,
  opportunity
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      paddingTop: 20,
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--roxo)'
    }
  }, /*#__PURE__*/React.createElement(SvIcon, {
    name: icon
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.15,
      letterSpacing: '-.02em',
      fontWeight: 500,
      color: 'var(--ink)',
      textTransform: 'none'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'var(--ink-2, #6e6a60)'
    }
  }, profile), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'var(--ink)'
    }
  }, opportunity));
}
function HomeScreen({
  onNav
}) {
  const {
    SectionHeader,
    ColumnCard,
    Declaration,
    Accent,
    Button,
    Quote,
    RuleList,
    PersonCard,
    CapCard,
    InsightRow,
    FaqItem
  } = D;
  const grupos = [['Serviços de base', 'base'], ['Mecanismos de aproveitamento', 'mecanismo'], ['Camadas de apoio', 'apoio']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    title: HOME.hero.title,
    eyebrow: HOME.hero.eyebrow,
    cta: HOME.hero.cta,
    onCta: () => onNav(HOME.hero.ctaTo)
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(Declaration, {
    style: {
      maxWidth: 1100
    }
  }, "Consultoria ", /*#__PURE__*/React.createElement(Accent, null, "urban\xEDstica"), ", com apoio ", /*#__PURE__*/React.createElement(Accent, null, "imobili\xE1rio"), " e ", /*#__PURE__*/React.createElement(Accent, null, "tribut\xE1rio"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      maxWidth: 520,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.62)'
    }
  }, HOME.manchete_apoio), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '40px 36px',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      marginTop: 64
    }
  }, HOME.camadas.map(c => /*#__PURE__*/React.createElement(ColumnCard, {
    key: c.label,
    tone: "dark",
    label: c.label,
    title: c.title
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      color: 'var(--roxo-lt)',
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      marginBottom: 10
    }
  }, c.foco), c.text)))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Timing",
    title: "O momento certo",
    soft: "de entrar no caso.",
    note: 'O gargalo do licenciamento raramente surge no protocolo. Ele nasce meses antes, quando se toma uma decisão de projeto sem consultar a legislação.',
    style: {
      marginBottom: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 48px'
    }
  }, /*#__PURE__*/React.createElement(RuleList, {
    items: HOME.gatilhos.slice(0, 3).map(([t, d]) => /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: 600
      }
    }, t), " \u2014 ", d))
  }), /*#__PURE__*/React.createElement(RuleList, {
    items: HOME.gatilhos.slice(3).map(([t, d]) => /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: 600
      }
    }, t), " \u2014 ", d))
  })), /*#__PURE__*/React.createElement(Quote, {
    tone: "light",
    size: "lg",
    style: {
      marginTop: 48
    }
  }, HOME.gatilho_sintese)), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "M\xE9todo",
    title: "Tr\xEAs etapas encadeadas.",
    soft: "Sem atalhos.",
    note: "Nenhuma etapa avan\xE7a sem a valida\xE7\xE3o da anterior. \xC9 o que evita o protocolo prematuro.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "solid",
      arrow: true,
      onClick: () => onNav('consultoria')
    }, "Conhe\xE7a o m\xE9todo completo")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 36,
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))'
    }
  }, HOME.etapas.map(([l, t, x]) => /*#__PURE__*/React.createElement(ColumnCard, {
    key: l,
    label: l,
    title: t
  }, x)))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "dark",
    eyebrow: "Atua\xE7\xE3o",
    title: "Solu\xE7\xF5es urban\xEDsticas",
    soft: "e regulat\xF3rias.",
    note: "Todo empreendimento demanda a base. O diferencial est\xE1 no uso dos instrumentos urban\xEDsticos de Jo\xE3o Pessoa.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "white",
      arrow: true,
      onClick: () => onNav('especialidades')
    }, "Ver todas as especialidades")
  }), grupos.map(([titulo, camada]) => /*#__PURE__*/React.createElement("div", {
    key: camada,
    style: {
      marginBottom: 46
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--roxo-lt)',
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.15em',
      textTransform: 'uppercase',
      margin: '0 0 22px'
    }
  }, titulo), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '30px 32px',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))'
    }
  }, ESPECIALIDADES.filter(e => e.camada === camada).map(e => /*#__PURE__*/React.createElement("a", {
    key: e.slug,
    href: "#",
    onClick: ev => {
      ev.preventDefault();
      onNav('esp:' + e.slug);
    },
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement(CapCard, {
    tone: "dark",
    title: e.nome
  }, e.curto))))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Mercado",
    title: "Dom\xEDnio t\xE9cnico",
    soft: "e vis\xE3o de neg\xF3cio.",
    note: "Conhecimento jur\xEDdico n\xE3o basta para viabilizar um empreendimento. \xC9 preciso dominar a linguagem da incorpora\xE7\xE3o, a l\xF3gica do projeto e a rotina do setor p\xFAblico."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '40px 32px',
      gridTemplateColumns: 'repeat(5,minmax(0,1fr))'
    }
  }, HOME.setores.map(([icon, t, p, o]) => /*#__PURE__*/React.createElement(SectorCard, {
    key: t,
    icon: icon,
    title: t,
    profile: p,
    opportunity: o
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Cen\xE1rio normativo",
    title: "Operar em Jo\xE3o Pessoa",
    soft: "com a legisla\xE7\xE3o em movimento.",
    note: "Plano Diretor recente, LUOS sob an\xE1lise judicial, a TDC regulamentada em junho e uma janela de regulariza\xE7\xE3o aberta at\xE9 2028.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "solid",
      arrow: true,
      onClick: () => onNav('joaopessoa')
    }, "Acesse o panorama legislativo")
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      borderBottom: '1px solid var(--line)'
    }
  }, HOME.normas_home.map(([k, t, d]) => /*#__PURE__*/React.createElement(InsightRow, {
    key: t,
    kind: k,
    title: t,
    date: d
  })))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Advogado respons\xE1vel",
    title: "Diego Rodrigues Vieira",
    note: "Atua\xE7\xE3o focada na articula\xE7\xE3o entre direito urban\xEDstico, imobili\xE1rio e tribut\xE1rio. Condu\xE7\xE3o direta de cada caso, do diagn\xF3stico normativo \xE0 interlocu\xE7\xE3o com os \xF3rg\xE3os p\xFAblicos.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "solid",
      arrow: true,
      onClick: () => onNav('advogado')
    }, "Conhe\xE7a a trajet\xF3ria")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 40,
      gridTemplateColumns: '360px 1fr',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(PersonCard, {
    name: "Diego Rodrigues Vieira",
    role: "Fundador e advogado respons\xE1vel",
    image: "../../assets/diego-perfil.jpeg"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.65,
      maxWidth: '54ch',
      color: 'var(--ink)'
    }
  }, "Quando a demanda exige estudo complementar, levantamento topogr\xE1fico ou laudo ambiental, engenheiros e arquitetos parceiros s\xE3o acionados sob coordena\xE7\xE3o jur\xEDdica. Os servi\xE7os t\xE9cnicos s\xE3o prestados por eles."))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Perguntas",
    title: "O que costumam perguntar.",
    note: "Respostas curtas. O mecanismo antes da conclus\xE3o.",
    style: {
      marginBottom: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 960
    }
  }, FAQ_HOME.map(([q, a], i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: q,
    question: q,
    defaultOpen: i === 0
  }, a)))), /*#__PURE__*/React.createElement(PrimeiroPasso, {
    onNav: onNav
  }));
}
Object.assign(window, {
  HomeScreen,
  SectorCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/JoaoPessoaScreen.jsx
try { (() => {
const J = window.VieiraRodriguesDesignSystem_dddaeb;
function JoaoPessoaScreen({
  onNav
}) {
  const {
    SectionHeader,
    AnchorNav,
    Quote,
    Button,
    RuleList
  } = J;
  const [active, setActive] = React.useState('roteiro');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroInterno, {
    eyebrow: "Mapa normativo",
    title: JP.h1,
    lede: JP.lede,
    image: "../../assets/jp-lagoa-aerea.jpg"
  }, /*#__PURE__*/React.createElement(AnchorNav, {
    label: "Nesta p\xE1gina",
    active: active,
    onChange: setActive,
    items: JP.ancoras.map(a => ({
      id: a.id,
      label: a.label,
      href: '#'
    })),
    style: {
      marginTop: 36
    }
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Roteiro",
    title: "Cinco perguntas,",
    soft: "nesta ordem.",
    note: "Analisar fora de ordem \xE9 a causa mais comum de retrabalho. O uso permitido n\xE3o importa se a macrozona j\xE1 limitou o aproveitamento.",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement(Table, {
    head: JP.roteiro.head,
    rows: JP.roteiro.rows
  }), /*#__PURE__*/React.createElement(Quote, {
    tone: "light",
    size: "lg",
    style: {
      marginTop: 44
    }
  }, JP.roteiro_destaque)), /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "dark",
    eyebrow: "2024 \u2013 2026",
    title: "Trinta meses",
    soft: "que reescreveram a cidade.",
    note: "A linha abaixo mostra por que operar em Jo\xE3o Pessoa hoje exige acompanhar norma e tribunal ao mesmo tempo.",
    style: {
      marginBottom: 40
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      borderTop: '1px solid var(--line-d)'
    }
  }, JP.linha.map(([quando, o_que, efeito], i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '124px 1.15fr 1fr',
      gap: 28,
      padding: '18px 0',
      borderBottom: '1px solid var(--line-d)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--roxo-lt)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      paddingTop: 3
    }
  }, quando), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontSize: 15.5,
      lineHeight: 1.5,
      fontWeight: 500
    }
  }, o_que), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,.58)',
      fontSize: 14.5,
      lineHeight: 1.5
    }
  }, efeito)))), /*#__PURE__*/React.createElement(Quote, {
    tone: "dark",
    size: "lg",
    style: {
      marginTop: 48
    }
  }, JP.linha_destaque)), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Camada 1 \xB7 Estrat\xE9gica",
    title: "O macrozoneamento.",
    note: "LC 164/2024, alterada pela LC 171/2025 \xB7 vigente. O \xEDndice de aproveitamento b\xE1sico \xE9 1,0 em todo o territ\xF3rio. Tudo acima disso depende de contrapartida.",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement(Table, {
    head: JP.macro.head,
    rows: JP.macro.rows
  }), /*#__PURE__*/React.createElement(Quote, {
    tone: "light",
    size: "lg",
    style: {
      marginTop: 44
    }
  }, JP.macro_destaque), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    arrow: true,
    onClick: () => onNav('esp:transferencia-do-direito-de-construir')
  }, "Transfer\xEAncia do direito de construir"))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Camada 2 \xB7 Uso e ocupa\xE7\xE3o",
    title: "O zoneamento.",
    soft: "Sub judice.",
    note: "LC 166/2024, alterada pela LC 169/2024. Define o que pode funcionar em cada rua e as regras de recuo e altura.",
    style: {
      marginBottom: 32
    }
  }), /*#__PURE__*/React.createElement(Aviso, {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Aten\xE7\xE3o."), " ", JP.zonas_aviso[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 48,
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Table, {
    rows: JP.zonas
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18
    }
  }, JP.zonas_aviso.slice(1).map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontSize: 15.5,
      lineHeight: 1.62,
      color: 'var(--ink-2, #6e6a60)'
    }
  }, p))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Camada 3 \xB7 Patrim\xF4nio",
    title: "O Centro Hist\xF3rico.",
    note: "Decreto estadual 25.138/2004 \xB7 Decreto municipal 10.878/2024 e a amplia\xE7\xE3o de 28/03/2025 \xB7 LC 174/2025. \xC9 onde o dever de preservar encontra o incentivo fiscal.",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement(Table, {
    rows: JP.patrimonio
  }), /*#__PURE__*/React.createElement(Quote, {
    tone: "light",
    size: "lg",
    style: {
      marginTop: 44
    }
  }, JP.patrimonio_destaque), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    arrow: true,
    onClick: () => onNav('esp:incentivos-do-centro-historico')
  }, "Incentivos do Centro Hist\xF3rico"))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "dark",
    eyebrow: "Camada 4 \xB7 Instrumentos",
    title: "Os mecanismos econ\xF4micos.",
    note: "S\xE3o eles que viabilizam financeiramente as restri\xE7\xF5es das camadas anteriores.",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '32px 32px',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))'
    }
  }, ESPECIALIDADES.filter(e => e.camada === 'mecanismo').map(e => /*#__PURE__*/React.createElement("a", {
    key: e.slug,
    href: "#",
    onClick: ev => {
      ev.preventDefault();
      onNav('esp:' + e.slug);
    }
  }, /*#__PURE__*/React.createElement(J.CapCard, {
    tone: "dark",
    title: e.nome
  }, e.curto))))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "\xCDndice",
    title: "A legisla\xE7\xE3o vigente.",
    note: "Conferido no portal do Plano Diretor da PMJP. Atualizado conforme as normas e as decis\xF5es mudam.",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement(Table, {
    head: JP.indice.head,
    rows: JP.indice.rows
  })), /*#__PURE__*/React.createElement(PrimeiroPasso, {
    onNav: onNav,
    titulo: "Uma leitura do seu terreno",
    soft: "antes de qualquer decis\xE3o.",
    cta: "Falar sobre o caso"
  }));
}
Object.assign(window, {
  JoaoPessoaScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/JoaoPessoaScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/OutrasScreens.jsx
try { (() => {
const O = window.VieiraRodriguesDesignSystem_dddaeb;

/* -------------------------------------------------------------- ADVOGADO */

function AdvogadoScreen({
  onNav
}) {
  const {
    SectionHeader,
    Photo,
    Button,
    Quote,
    RuleList
  } = O;
  const a = ADVOGADO;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink)',
      padding: '190px 0 104px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.75fr 1.25fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: "../../assets/diego-perfil.jpeg",
    alt: "Diego Rodrigues Vieira",
    ratio: "4/5"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(O.Eyebrow, {
    tone: "dark"
  }, "Advogado respons\xE1vel"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      margin: '18px 0 20px'
    }
  }, a.h1), a.lede.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      color: 'rgba(255,255,255,.66)',
      fontSize: 'var(--fs-lede)',
      maxWidth: '52ch',
      margin: '0 0 14px'
    }
  }, p)), /*#__PURE__*/React.createElement(Ficha, {
    rows: a.ficha,
    tone: "dark",
    style: {
      marginTop: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    arrow: true,
    onClick: () => onNav('contato')
  }, "Falar comigo")))))), /*#__PURE__*/React.createElement(Section, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Por que urban\xEDstico e tribut\xE1rio",
    title: "A mesma pergunta,",
    soft: "em duas cidades.",
    style: {
      marginBottom: 34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '72ch',
      display: 'grid',
      gap: 18
    }
  }, a.ponte.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontSize: 16.5,
      lineHeight: 1.65,
      color: 'var(--ink-2, #6e6a60)'
    }
  }, p))), /*#__PURE__*/React.createElement(Quote, {
    tone: "light",
    size: "lg",
    style: {
      marginTop: 44
    }
  }, a.ponte_destaque)), /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "dark",
    eyebrow: "2016 \u2013 hoje",
    title: "Seis anos dentro",
    soft: "de um bairro tombado.",
    note: "MUMBI \u2014 Museu Mem\xF3ria do Bixiga. Advogado em 2016, diretor executivo de 2017 a 2022, hoje conselheiro.",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement(Ficha, {
    rows: a.bixiga,
    tone: "dark",
    labelWidth: 230
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 34,
      maxWidth: '74ch',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,.6)'
    }
  }, "Conduzir um processo administrativo de licenciamento \xE9, em boa medida, saber falar com \xF3rg\xE3o p\xFAblico. Quem j\xE1 negociou com Conpresp, Condephat e com a rede de museus da cidade fez essa travessia antes."), /*#__PURE__*/React.createElement(Quote, {
    tone: "dark",
    size: "lg",
    style: {
      marginTop: 40
    }
  }, a.bixiga_destaque)), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Percurso",
    title: "Onde a pr\xE1tica foi constru\xEDda.",
    style: {
      marginBottom: 34
    }
  }), /*#__PURE__*/React.createElement(Table, {
    head: ['Período', 'Onde', 'O quê'],
    rows: a.trajetoria
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "M\xE9todo",
    title: "Atendimento direto,",
    soft: "sem repasse.",
    style: {
      marginBottom: 32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 48px'
    }
  }, /*#__PURE__*/React.createElement(RuleList, {
    items: a.atende.slice(0, 2)
  }), /*#__PURE__*/React.createElement(RuleList, {
    items: a.atende.slice(2)
  }))), /*#__PURE__*/React.createElement(PrimeiroPasso, {
    onNav: onNav
  }));
}

/* -------------------------------------------------------------- ANÁLISES */

function AnalisesScreen({
  onNav
}) {
  const {
    SectionHeader,
    FilterChips,
    InsightRow,
    Button,
    Field
  } = O;
  const [tema, setTema] = React.useState('Todos');
  const [mail, setMail] = React.useState('');
  const lista = ANALISES.posts.filter(p => tema === 'Todos' || p.tema === tema);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroInterno, {
    eyebrow: "Publica\xE7\xF5es",
    title: ANALISES.h1,
    lede: [ANALISES.lede],
    image: null
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "\xCDndice",
    title: "Todo o conte\xFAdo.",
    note: "Cada pe\xE7a termina com o mesmo aviso: conte\xFAdo informativo, n\xE3o constitui consulta nem oferta de servi\xE7os.",
    style: {
      marginBottom: 32
    }
  }), /*#__PURE__*/React.createElement(FilterChips, {
    items: ANALISES.filtros,
    value: tema,
    onChange: setTema
  }), lista.length > 0 ? /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '32px 0 0',
      padding: 0,
      borderBottom: '1px solid var(--line)'
    }
  }, lista.map(p => /*#__PURE__*/React.createElement(InsightRow, {
    key: p.title,
    kind: p.kind,
    title: p.title,
    date: p.date
  }))) : /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-3, #97928a)',
      paddingTop: 34,
      fontSize: 16
    }
  }, ANALISES.vazio)), /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr .8fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(O.Eyebrow, {
    tone: "dark"
  }, "Assine"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      margin: '18px 0 14px'
    }
  }, ANALISES.captura.titulo), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.66)',
      fontSize: 'var(--fs-lede)',
      maxWidth: '44ch',
      margin: 0
    }
  }, ANALISES.captura.texto)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-surf-2)',
      border: '1px solid var(--line-d)',
      padding: 30
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "E-mail",
    type: "email",
    value: mail,
    onChange: e => setMail(e.target.value),
    placeholder: "voce@empresa.com"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    style: {
      width: '100%',
      justifyContent: 'center',
      marginTop: 6
    }
  }, "Quero receber"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'rgba(255,255,255,.48)',
      margin: '16px 0 0',
      lineHeight: 1.55
    }
  }, ANALISES.captura.nota)))));
}

/* ---------------------------------------------------------------- LEGAIS */

function LegalScreen({
  onNav,
  doc
}) {
  const d = LEGAIS[doc] || LEGAIS.termos;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroInterno, {
    eyebrow: "Institucional",
    title: d.titulo,
    image: null
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '74ch'
    }
  }, d.secoes.map(([t, x], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      paddingTop: 26,
      marginBottom: 26,
      borderTop: i === 0 ? 'none' : '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontSize: 19,
      fontWeight: 500,
      letterSpacing: '-.02em',
      textTransform: 'none'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.68,
      color: 'var(--ink-2, #6e6a60)'
    }
  }, x))))));
}

/* ------------------------------------------------------------------- 404 */

function NotFoundScreen({
  onNav
}) {
  const {
    Button
  } = O;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink)',
      padding: '220px 0 160px'
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(O.Eyebrow, {
    tone: "dark"
  }, "404"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      margin: '18px 0 18px',
      maxWidth: '16ch'
    }
  }, "Esta p\xE1gina n\xE3o existe."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.6)',
      fontSize: 'var(--fs-lede)',
      maxWidth: '46ch'
    }
  }, "Talvez o endere\xE7o tenha mudado. O mapa normativo e as especialidades continuam onde estavam."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    arrow: true,
    onClick: () => onNav('home')
  }, "Ir para a home"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-d",
    arrow: true,
    onClick: () => onNav('joaopessoa')
  }, "Ver o mapa normativo"))));
}
Object.assign(window, {
  AdvogadoScreen,
  AnalisesScreen,
  LegalScreen,
  NotFoundScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/OutrasScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Shell.jsx
try { (() => {
const DS_H = window.VieiraRodriguesDesignSystem_dddaeb;
const {
  BrandMark: BM,
  Button: Btn,
  Eyebrow: Eb
} = DS_H;
function Wrap({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--wrap)',
      margin: '0 auto',
      padding: '0 40px',
      ...style
    }
  }, children);
}
function Section({
  tone = 'paper-2',
  children,
  style
}) {
  const bg = tone === 'dark' ? 'var(--ink)' : tone === 'paper' ? 'var(--paper)' : 'var(--paper-2)';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '104px 0',
      background: bg,
      color: tone === 'dark' ? '#fff' : 'var(--ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, children));
}
function Hero({
  title,
  cta,
  eyebrow,
  mark = true,
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: mark ? 'min(100vh,860px)' : 'min(70vh,620px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      background: 'var(--ink)',
      overflow: 'hidden',
      isolation: 'isolate'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/jp-tambau-aerea.jpg",
    alt: "Jo\xE3o Pessoa vista do mar",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: -2,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'var(--filter-hero)',
      transform: 'scale(1.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: -1,
      background: 'var(--scrim-hero)'
    }
  }), mark && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 'var(--wrap)',
      margin: '0 auto',
      width: '100%',
      padding: '150px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement(BM, {
    size: 104
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--wrap)',
      margin: '0 auto',
      width: '100%',
      padding: mark ? '0 40px 88px' : '180px 40px 88px'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Eb, {
    tone: "dark"
  }, eyebrow)), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      maxWidth: '20ch',
      marginBottom: 32
    }
  }, title), cta && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "white",
    arrow: true,
    onClick: onCta
  }, cta))));
}
function WhatsAppFab() {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Falar no WhatsApp",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'fixed',
      right: 20,
      bottom: 20,
      zIndex: 70,
      width: 54,
      height: 54,
      background: hover ? 'var(--paper-2)' : 'var(--roxo)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-float)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    style: {
      width: 28,
      height: 28,
      fill: hover ? 'var(--ink)' : '#fff'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.4C8.7 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.4 14.7 4 13.4 4 12 4 7.6 7.6 4 12 4s8 3.6 8 8-3.6 8-8 8z"
  })));
}
Object.assign(window, {
  Wrap,
  Section,
  Hero,
  WhatsAppFab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/content.js
try { (() => {
/* Conteúdo do site — separado dos componentes.
   O que aqui está em código vira, no site real, ou constante do repositório
   (páginas de serviço, mapa normativo) ou documento do Sanity (artigos, FAQ). */

const IDENT = {
  razao: 'Vieira-Rodrigues Advocacia — Sociedade Individual de Advocacia',
  titular: 'Diego Rodrigues Vieira',
  oab: '[OAB/PB nº]',
  base: 'João Pessoa · PB',
  email: 'diego@vieira-rodrigues.com',
  whats: '+55 83 99171-5836'
};

/* ---------------------------------------------------------------- HOME */

const HOME = {
  hero: {
    eyebrow: 'Planejamento técnico-jurídico para empreendimentos · João Pessoa',
    title: 'Todo empreendimento começa pela legislação.',
    cta: 'Entenda como funciona',
    ctaTo: 'consultoria'
  },
  manchete: 'Segurança urbanística com visão imobiliária e tributária.',
  manchete_apoio: 'Todo empreendimento esbarra nas mesmas três dúvidas. Como elas costumam ser tratadas por profissionais isolados, o projeto trava na prefeitura ou estoura o orçamento.',
  camadas: [{
    label: 'O QUE',
    title: 'O que eu posso construir?',
    foco: 'Viabilidade urbanística',
    text: 'Zoneamento, coeficiente de aproveitamento, gabarito, recuos, tombamento e restrições ambientais. O que a lei autoriza de imediato e o que exige contrapartida.'
  }, {
    label: 'COMO',
    title: 'Como viabilizar a operação?',
    foco: 'Modelagem jurídica',
    text: 'Aquisição, permuta física ou financeira, incorporação, loteamento ou cessão de direitos. O modelo escolhido define o risco e o fluxo de caixa de cada fase.'
  }, {
    label: 'QUANTO',
    title: 'Quanto vou gastar para construir?',
    foco: 'Planejamento fiscal',
    text: 'ITBI na entrada, IPTU no canteiro, outorga no licenciamento, ganho de capital na saída. A conta fiscal entra na viabilidade do negócio, não como surpresa no final.'
  }],
  gatilhos: [['Antes de fechar a compra do lote', 'para precificar o terreno com base na capacidade real de adensamento, não em estimativa.'], ['Antes do anteprojeto arquitetônico', 'a arquitetura se molda à legislação; o inverso gera refazimento de pranchas e prejuízo.'], ['Ao receber comunique-se ou indeferimento municipal', 'para decodificar a exigência técnica e dar a resposta jurídica adequada.'], ['Diante de imóvel tombado ou com restrição ambiental', 'para avaliar se a limitação do lote pode ser convertida em potencial transferível.'], ['Com a legislação em transição', 'cenário recorrente em João Pessoa, frente às mudanças no Plano Diretor e na LUOS.']],
  gatilho_sintese: 'Quem busca consultoria após o indeferimento paga duas vezes: pelo projeto feito que não avança e pelo refazimento que a lei exige.',
  etapas: [['ETAPA 01', 'Diagnóstico normativo', 'Mapeamento da legislação incidente sobre o lote: Plano Diretor, LUOS, zona, benefícios e restrições que a planta não mostra.'], ['ETAPA 02', 'Relatório de viabilidade', 'Cenários de aproveitamento, custos de contrapartida e a rota de licenciamento correspondente. Decisão embasada em número.'], ['ETAPA 03', 'Condução do licenciamento', 'Protocolo, atendimento a comunique-se e exigências, e acompanhamento do processo junto ao órgão licenciador.']],
  setores: [['crane', 'Incorporação e construção civil', 'Construtoras e incorporadoras com projeto em área consolidada.', 'Coeficiente de aproveitamento, outorga onerosa e condução das aprovações.'], ['store', 'Comércio e serviços', 'Escritórios, restaurantes e lojas em busca de sede própria.', 'Enquadramento do uso do solo, acessibilidade e regimes de incentivo.'], ['heritage', 'Imóveis tombados e históricos', 'Donos de casarões no Centro e de imóveis protegidos.', 'Análise da possibilidade de converter limitação construtiva em crédito de TDC.'], ['green', 'Áreas verdes e glebas', 'Donos de terrenos com mata, encosta ou restrição ambiental.', 'Aproveitamento econômico de áreas preservadas via bônus construtivo e RPPNM.'], ['industry', 'Indústria e logística', 'Empresas no Distrito Industrial e às margens das rodovias.', 'Parâmetros de zonas industriais, recuos regulamentares e licenciamento ambiental.']],
  normas_home: [['VIGENTE', 'Plano Diretor — LC 164/2024, alterada pela LC 171/2025', 'macroestruturação e adensamento'], ['SUB JUDICE', 'Lei de Uso e Ocupação do Solo — LC 166/2024', 'TJPB, dez/2025 · STF, mar/2026'], ['REGULAMENTADA', 'Transferência do Direito de Construir — Lei 15.409/2024', 'Decreto 11.266/2026'], ['NOVO', 'Regularização de edificações — LC 182/2026', 'janela até abril de 2028']]
};

/* -------------------------------------------------------- CONSULTORIA */

const CONSULTORIA = {
  hero: {
    eyebrow: 'A consultoria',
    title: 'A lei do terreno, lida antes do projeto.'
  },
  ancoras: [{
    id: 'oque',
    label: 'O que é'
  }, {
    id: 'camadas',
    label: 'Três camadas'
  }, {
    id: 'quando',
    label: 'Quando acionar'
  }, {
    id: 'metodo',
    label: 'Método'
  }, {
    id: 'rede',
    label: 'Rede técnica'
  }],
  oque: ['Consultoria urbanística é a identificação do potencial normativo de um imóvel e a condução do seu licenciamento até a obtenção das certidões e alvarás definitivos.', 'Não se confunde com projeto de arquitetura ou engenharia. Os profissionais técnicos desenham e edificam; a consultoria estabelece os limites e as oportunidades legais dentro dos quais o projeto pode existir.', 'Tampouco se resume a dar entrada em papéis. O protocolo é o desfecho. O valor do trabalho está no diagnóstico preventivo da legislação, na escolha da via de licenciamento e na gestão do risco regulatório.', 'Por se tratar de interpretação legislativa e de gestão de risco jurídico, a responsabilidade é do advogado.'],
  camadas: [{
    titulo: 'O que posso construir?',
    texto: 'A resposta exige pente-fino na legislação municipal e ambiental. Plano Diretor, LUOS, decretos de tombamento, condicionantes ambientais, parâmetros de infraestrutura e convenções imobiliárias, reunidos num documento só. É frequente que a análise revele diretrizes bastante distintas da expectativa inicial.',
    itens: ['Zoneamento, coeficiente de aproveitamento e gabarito permitido', 'Taxa de ocupação, recuos regulamentares e taxa de permeabilidade', 'Tombamento, áreas de preservação permanente e faixa costeira', 'Instrumentos de ampliação de potencial mediante contrapartida']
  }, {
    titulo: 'Como viabilizar a operação?',
    texto: 'O mesmo negócio admite arranjos distintos conforme a estratégia: compra e venda pura, permuta no local, incorporação, loteamento ou cessão de direitos. O modelo escolhido determina a divisão de riscos, o fluxo de caixa e o efeito de uma demora do órgão licenciador.',
    itens: ['Aquisição, permuta física ou financeira e cessão de direitos', 'Incorporação imobiliária e parcelamento do solo', 'Due diligence imobiliária e contratual', 'Modelagem societária (SPE, SCP) e proteção patrimonial']
  }, {
    titulo: 'Quanto vou gastar?',
    texto: 'ITBI no registro, IPTU no período de obra, outorga onerosa no licenciamento, e ganho de capital ou PIS/COFINS na venda, conforme o regime. Avaliados isoladamente, comprometem a margem. Calculados no estudo de viabilidade, orientam a decisão.',
    itens: ['ITBI: base de cálculo e imunidades', 'IPTU: isenções temporárias e benefícios por revitalização', 'Outorga onerosa: cálculo e modalidades de quitação', 'Tributação na alienação: ganho de capital e regimes especiais']
  }],
  camadas_sintese: 'Uma boa solução arquitetônica sobre uma premissa jurídica errada não vira obra.',
  quando: [['Antes de fechar a compra do terreno.', 'O valor do solo depende da sua capacidade de aproveitamento. Comprar sem análise urbanística prévia é adquirir uma expectativa, não um ativo definido.'], ['Antes de aprovar o projeto arquitetônico.', 'A arquitetura se molda à norma. Quando a ordem se inverte, a adequação exige alteração de plantas, atraso na aprovação e investimento perdido.'], ['Diante de exigência ou indeferimento municipal.', 'Exigências administrativas costumam ser sucintas no papel e complexas na prática. Decodificar o fundamento legal do pedido define a resposta que o órgão espera.'], ['Quando o imóvel enfrenta restrições e gera apenas despesa.', 'Casarão tombado, lote com vegetação densa, encosta. As limitações que impedem edificar no próprio terreno podem, em determinadas hipóteses, ser convertidas em potencial construtivo negociável.'], ['Em momentos de transição legislativa.', 'Em João Pessoa isso deixou de ser hipótese. Alteração em lei de uso do solo exige acompanhamento preventivo para preservar a validade dos alvarás expedidos.']],
  quando_sintese: 'Quem busca apoio técnico após o indeferimento paga duas vezes: pelo projeto que caduca e pelo novo projeto que a lei exige.',
  metodo: [['01', 'Diagnóstico normativo', 'Levantamento da matrícula, do zoneamento e da legislação aplicável. Define o potencial construtivo básico do imóvel, sem contrapartida.'], ['02', 'Estudo de viabilidade legal', 'Cenários de adensamento, instrumentos urbanísticos viáveis, estimativa de outorga e cronograma regulatório.'], ['03', 'Estratégia de protocolo', 'Sequência de licenças, órgãos intervenientes e checklist instrutório. Previne sobreposição de exigências.'], ['04', 'Condução do licenciamento', 'Acompanhamento do processo: atendimento a comunique-se, reuniões técnicas com o órgão licenciador e recursos administrativos cabíveis.']],
  metodo_nota: 'Cada etapa se encerra com um relatório escrito, com o andamento do processo.',
  rede: ['A coordenação e a responsabilidade da consultoria são jurídicas. Quando a demanda exige levantamento topográfico, simulação de gabarito ou estudo ambiental, escritórios parceiros de arquitetura e engenharia são acionados por escopo fechado, sob coordenação jurídica.', 'Você contrata a consultoria jurídica. Os serviços técnicos são prestados pelos parceiros, com escopo e custo definidos antes de começar.', 'O arranjo elimina os dois vícios mais comuns do mercado: o parecer jurídico desconectado da prancha, e o projeto elaborado à revelia da legislação urbanística.']
};
Object.assign(window, {
  IDENT,
  HOME,
  CONSULTORIA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/content.js", error: String((e && e.message) || e) }); }

// ui_kits/site/content2.js
try { (() => {
/* Conteúdo — parte 2: especialidades, mapa normativo, advogado, análises e legais. */

/* ------------------------------------------------------ ESPECIALIDADES */

const ESPECIALIDADES = [/* ---------- camada 2: mecanismos ---------- */
{
  slug: 'transferencia-do-direito-de-construir',
  camada: 'mecanismo',
  icon: 'transfer',
  nome: 'Transferência do Direito de Construir · TDC',
  curto: 'Vender o potencial construtivo de um imóvel protegido, ou comprá-lo para adensar outro terreno.',
  h1: 'O potencial que o seu imóvel não pode usar vale dinheiro em outro terreno.',
  base: 'Lei 15.409/2024 · Decreto 11.266/2026 · Estatuto da Cidade, art. 35',
  paraQuem: ['Cedente — três hipóteses, pelo art. 4º da Lei 15.409/2024 e pelo art. 4º do Decreto 11.266/2026: interesse ambiental (MPA, RPPNM ou proteção de mananciais), interesse histórico (tombado ou na poligonal do Centro Histórico) e interesse social (equipamento público, infraestrutura, sistema viário ou regularização fundiária).', 'Receptor — art. 2º, II, do Decreto 11.266/2026. Terreno apto a receber potencial adicional, tipicamente nas macrozonas adensáveis. Na MAD-1 o teto é 6,0, contra o índice básico de 1,0 em todo o território.'],
  lei: 'João Pessoa criou o instrumento pela Lei 15.409/2024. Ele só passou a operar com o Decreto 11.266/2026, publicado no Diário Oficial do Município em 29 de junho de 2026. Antes do decreto havia direito sem procedimento.',
  dispositivos: [['Cedente', 'Lei 15.409/2024, art. 4º · Decreto 11.266/2026, art. 4º'], ['Receptor', 'Decreto 11.266/2026, art. 2º, II'], ['Procedimento da CCPC', 'Decreto 11.266/2026, arts. 6º a 10 e 14 a 17'], ['Cálculo do potencial', 'Lei 15.409/2024, art. 8º'], ['Não incidência de ITBI', 'Decreto 11.266/2026, art. 19, §3º']],
  escopo: ['Verificação de enquadramento como cedente e levantamento documental', 'Cálculo do potencial transferível e acompanhamento da análise técnica municipal', 'Condução da emissão da CCPC e averbação em cartório', 'Estruturação jurídica da cessão: contrato, garantias e responsabilidades', 'Para o receptor: verificação da regularidade do crédito e requerimento da AUPC'],
  etapas: ['Enquadramento do imóvel em uma das três hipóteses de cedente', 'Aplicação da fórmula do art. 8º e análise técnica municipal', 'Emissão da CCPC — Certidão de Concessão do Potencial Construtivo', 'Averbação na matrícula do imóvel cedente', 'Venda por escritura pública, em negociação privada', 'O comprador requer a AUPC para vincular o crédito à obra'],
  ficha: [['Órgãos', 'SEPLAN · SEMAM (ambiental) · IPHAC-JP ou IPHAEP (histórico)'], ['Documentos do cedente', 'Certidão com no máximo 60 dias · último projeto aprovado · levantamento de vegetação com ART, se ambiental'], ['Validade da CCPC', 'Um ano, prorrogável pela Administração'], ['Transferência', 'Total para um receptor ou parcial para vários, com saldo controlado por sistema e averbação']],
  destaque: 'A validade de um ano reorganiza o cronograma. Emitir a certidão cedo demais, sem comprador à vista, consome o prazo — e a prorrogação depende da Administração, não do titular.',
  limite: 'O crédito supera o índice de aproveitamento, mas continua submetido ao IA máximo da macrozona e ao gabarito da LUOS. A TDC amplia o quanto se constrói, não como se constrói.',
  tributario: {
    titulo: 'ITBI: não incide',
    texto: 'Art. 19, §3º do Decreto 11.266/2026: não incidirá ITBI sobre a alienação do potencial construtivo passível de transferência. O decreto não concede isenção — declara não incidência. A diferença importa: isenção depende de lei, e um decreto não a concederia validamente.',
    abertos: ['A alienação gera ganho de capital? Apurado com qual custo de aquisição, tratando-se de direito que o proprietário nunca comprou separadamente?', 'O tratamento muda se o cedente for pessoa jurídica.', 'A não incidência resolve a transferência do crédito, não todo o desenho da operação.']
  },
  relacionados: ['reserva-particular-rppnm', 'outorga-onerosa-paga-em-obras']
}, {
  slug: 'bonus-construtivo-areas-verdes',
  camada: 'mecanismo',
  icon: 'leafup',
  nome: 'Bônus construtivo em áreas verdes · SEAV',
  curto: 'Elevar o índice de aproveitamento de lotes com vegetação, mediante preservação regrada.',
  h1: 'Preservar mais para construir mais.',
  base: 'LC 166/2024 (LUOS), art. 37 e Anexo VII · art. 39, §1º · art. 41 · LC 170/2025',
  aviso: 'O SEAV está inteiramente dentro da LUOS — a LC 166/2024, declarada inconstitucional pelo TJPB em 10/12/2025 e com a decisão suspensa em parte pelo STF em março de 2026. Quem for usar o instrumento hoje precisa saber disso antes de desenhar o projeto.',
  paraQuem: ['Dono de lote na ZEPA-2 — as encostas e os vales de João Pessoa. Terreno com vegetação, declividade ou fragilidade ambiental, onde a expectativa costuma ser de restrição total.'],
  lei: 'O Setor Especial de Áreas Verdes eleva o índice de aproveitamento de forma proporcional à área do lote efetivamente preservada. Contra o índice básico de 1,0, um lote que preserva mais de 60% da própria área dobra o que pode construir na parte remanescente.',
  tabela: {
    head: ['Área preservada do lote', 'Índice de aproveitamento'],
    rows: [['30% a 40%', '1,40'], ['40% a 50%', '1,60'], ['50% a 60%', '1,80'], ['Acima de 60%', '2,00']]
  },
  dispositivos: [['Gradação do bônus', 'LC 166/2024, Anexo VII, por remissão do art. 37'], ['Cálculo da outorga ambiental', 'LC 166/2024, art. 39, §1º — remete a lei específica; o art. 41 vincula o valor base à outorga onerosa geral'], ['Multa', 'LC 166/2024, art. 41']],
  escopo: ['Análise de enquadramento na ZEPA-2 e das condicionantes ambientais', 'Cálculo do cenário de preservação que otimiza o aproveitamento', 'Estruturação do laudo e do compromisso de preservação, com averbação', 'Condução do licenciamento', 'Desenho da obrigação de manutenção para que atravesse a entrega e o condomínio'],
  ficha: [['Onde', 'A área preservada deve estar dentro do perímetro do empreendimento'], ['Laudo', 'Apresentado pelo interessado, com ART'], ['Conferência', 'Vistoria da Prefeitura'], ['Formalização', 'Averbação obrigatória na matrícula'], ['Quem fica obrigado', 'A obrigação vincula o imóvel e se transmite a sucessores e ao condomínio']],
  destaque: 'O descumprimento da preservação custa dez vezes o valor da outorga onerosa. O bônus não é benefício que se recebe e se esquece: é obrigação permanente, com sanção multiplicada.',
  limite: 'Não há benefício de IPTU associado ao SEAV. O ganho é o bônus construtivo — as isenções de IPTU da cidade estão no regime do Centro Histórico.',
  relacionados: ['reserva-particular-rppnm', 'transferencia-do-direito-de-construir']
}, {
  slug: 'incentivos-do-centro-historico',
  camada: 'mecanismo',
  icon: 'percent',
  nome: 'Incentivos do Centro Histórico',
  curto: 'O regime tributário previsto para quem se instala na zona prioritária de reabilitação.',
  h1: 'A carga tributária de quem se instala no Centro.',
  base: 'Decreto 10.878/2024 · decreto de ampliação da poligonal, de 28/03/2025 · LC 174/2025 · Decreto estadual 25.138/2004',
  paraQuem: ['Empresa procurando sede própria, investidor comprando imóvel no Centro, prestador de serviço avaliando onde se instalar. E o proprietário na poligonal que não sabe que tem direito.'],
  lei: 'O programa Viva o Centro reúne três benefícios na zona prioritária. A poligonal foi ampliada por decreto publicado em 28 de março de 2025, alcançando cerca de 1.300 imóveis a mais, segundo a imprensa local — inclusive os com frente para as ruas que formam o limite externo.',
  dispositivos: [['Isenção de IPTU', 'Decreto 10.878/2024, art. 2º'], ['Isenção de ITBI na aquisição', 'Decreto 10.878/2024, art. 7º · art. 571-C, §3º, I'], ['ISS reduzido de 5% para 2%', 'Decreto 10.878/2024, art. 12'], ['Poligonal, APR e APE', 'Decreto estadual 25.138/2004 · LC 166/2024, Anexo V'], ['Níveis de intervenção', 'Anexo 02 da Deliberação 05/2004/CONPEC']],
  escopo: ['Verificação da localização na poligonal vigente e do nível de intervenção', 'Montagem dos processos de isenção de IPTU e de ITBI e do enquadramento no ISS reduzido', 'Condução do pedido de autorização junto ao IPHAEP', 'Análise da operação de aquisição sob a ótica do regime de incentivo', 'Acompanhamento das obrigações de manutenção do benefício'],
  ficha: [['APR', 'Preservação rigorosa. Qualquer reforma exige autorização prévia'], ['APE', 'Preservação do entorno, para proteger a escala da APR'], ['Níveis', 'CT conservação total · CP parcial · RC renovação controlada · RT total'], ['Consulta', 'Perímetro no Decreto estadual 25.138/2004; a Prefeitura mantém os dados no geoprocessamento municipal']],
  destaque: 'A isenção exige uso efetivo do imóvel. Imóvel fechado ou apenas mantido em carteira não sustenta o benefício.',
  limite: 'Em conservação total, na fachada e no interior, preservam-se paredes portantes, divisórias, cobertas e ornamentos, sem alterar estabilidade nem proporções originais. Pedido sem laudo técnico, ou que descaracterize elemento estrutural ou estilístico, costuma ser indeferido.',
  relacionados: ['outorga-onerosa-paga-em-obras', 'transferencia-do-direito-de-construir']
}, {
  slug: 'outorga-onerosa-paga-em-obras',
  camada: 'mecanismo',
  icon: 'crane',
  nome: 'Outorga onerosa paga em obras · OODCCH',
  curto: 'Converter a contrapartida devida ao município em obra de requalificação no Centro Histórico.',
  h1: 'A contrapartida devida ao município, convertida em obra.',
  base: 'LC 164/2024 · Lei da Outorga Onerosa [número a confirmar]',
  aviso: 'Página retida. O número da lei da outorga onerosa não foi localizado, e há indício de que o projeto possa não ter sido sancionado. Os valores abaixo não vão ao ar antes disso ser esclarecido.',
  paraQuem: ['Incorporadora ou construtora com projeto acima do índice básico, sobretudo em empreendimento com interface com o Centro Histórico ou disposição de executar requalificação.'],
  lei: 'Construir acima do índice básico de 1,0 depende de contrapartida ao município, paga ao FUNDURB. A fórmula é Cp = 1,6 × D × FS × FP × Vt × A, onde Vt é o valor do m² pela Planta Genérica de Valores e A é a área adicional pretendida. A conta é linear na área adicional e no valor do terreno.',
  tabela: {
    head: ['Fator de Planejamento', 'Valor'],
    rows: [['Altiplano, Bessa', '1,20'], ['Centro, Varadouro e outras áreas', '0,80'], ['Demais bairros', '1,00']]
  },
  dispositivos: [['Fórmula da outorga', 'Lei da OODC, art. 8º'], ['Fator Social e Fator de Planejamento', 'Lei da OODC, Anexos I e II'], ['Pagamento em obras', 'Lei da OODC, Seção III, arts. 11 a 14'], ['Bonificação de 25%', 'Lei da OODC, art. 14']],
  escopo: ['Cálculo da outorga devida, com os fatores aplicáveis ao caso', 'Análise comparativa entre pagamento em dinheiro e conversão em obras', 'Estruturação da proposta de obra e negociação com o município', 'Acompanhamento do licenciamento e da execução até a quitação'],
  ficha: [['Obras admitidas', 'Requalificação, revitalização e restauração de áreas públicas do Centro Histórico'], ['Avaliação', 'Orçamento aprovado pela SEPLAN'], ['Formalização', 'Termo de Transação com a SEPLAN'], ['Condição', 'O habite-se fica condicionado à quitação integral da contrapartida']],
  destaque: 'A bonificação não é desconto sobre a outorga. É acréscimo de 25% sobre o valor da obra executada, para abatimento no devido — cada R$ 100 mil de obra abatem R$ 125 mil de outorga.',
  limite: 'A obra de requalificação entra no caminho crítico do empreendimento. Atraso na contrapartida é atraso na entrega das unidades.',
  relacionados: ['incentivos-do-centro-historico', 'transferencia-do-direito-de-construir']
}, {
  slug: 'areas-especiais-ter-e-ouc',
  camada: 'mecanismo',
  icon: 'zone',
  nome: 'Áreas especiais · TER e OUC',
  curto: 'Projetos em territórios com parâmetros urbanísticos próprios, aprovados por projeto específico.',
  h1: 'Onde os parâmetros são feitos sob medida.',
  base: 'LC 164/2024, arts. 124 a 126 · Estatuto da Cidade, arts. 32 a 34',
  paraQuem: ['TER — a Ilha do Bispo, único perímetro definido até agora, pelo art. 125.', 'OUC — prioritariamente o Projeto de Reestruturação Urbana da Ilha do Bispo e os Eixos de Estruturação do Transporte Público, nos corredores das ZCS-3 e ZCS-4.'],
  lei: 'Nesses territórios os parâmetros não vêm prontos da tabela de zoneamento. São definidos em projeto próprio, com contrapartidas negociadas. É o instrumento mais flexível e o mais demorado — e o único em que se discute o parâmetro em vez de apenas aplicá-lo.',
  dispositivos: [['TER — definição e procedimento', 'LC 164/2024, arts. 124 a 126'], ['Perímetro da Ilha do Bispo', 'LC 164/2024, art. 125'], ['OUC', 'Estatuto da Cidade, arts. 32 a 34, e os perímetros do Plano Diretor']],
  escopo: ['Verificação de enquadramento em TER ou em perímetro de operação urbana', 'Estudo dos parâmetros admissíveis e do que é negociável', 'Estruturação do projeto e das contrapartidas', 'Condução da tramitação junto ao município e ao CDU'],
  ficha: [['O que se negocia', 'Índices de ocupação diferentes dos da LUOS, mediante contrapartidas'], ['Quem aprova', 'Conselho de Desenvolvimento Urbano — CDU'], ['Depois do CDU', 'Decreto do Executivo, se não alterar parâmetros básicos; lei específica, se alterar']],
  destaque: 'A diferença entre um decreto e um projeto de lei na Câmara é de meses, às vezes de mandato. Saber de que lado o projeto cai é a primeira pergunta a responder, não a última.',
  limite: 'Projeto específico não é alvará. É processo de aprovação com negociação e pauta de colegiado — o cronograma do empreendimento precisa refletir isso desde o início.',
  relacionados: ['viabilidade-urbanistica', 'licenciamento-e-alvaras']
}, {
  slug: 'reserva-particular-rppnm',
  camada: 'mecanismo',
  icon: 'reserve',
  nome: 'Reserva particular · RPPNM',
  curto: 'Transformar gleba com vegetação nativa em reserva perpétua e liberar potencial construtivo negociável.',
  h1: 'A gleba que não se pode construir, transformada em ativo.',
  base: 'Lei 15.409/2024, Seção IV, arts. 13 a 15 · LC 170/2025 · Lei federal 9.985/2000, art. 21',
  paraQuem: ['Proprietário de gleba com vegetação nativa em João Pessoa. Área grande, restrição ambiental pesada, IPTU correndo e nenhuma perspectiva de construção.'],
  lei: 'A Reserva Particular do Patrimônio Natural Municipal transforma a área privada com vegetação nativa em reserva perpétua reconhecida pelo município. O proprietário mantém a titularidade e assume a proteção. Em contrapartida, o imóvel se torna cedente de potencial construtivo. A RPPNM está na mesma lei que criou a TDC — a reserva foi desenhada já com a transferência embutida.',
  dispositivos: [['Criação e disciplina', 'Lei 15.409/2024, Seção IV, arts. 13 a 15'], ['Concessão de potencial a RPPNM reconhecida', 'Lei 15.409/2024, art. 6º, §2º, III e art. 13'], ['A RPPNM como cedente', 'Decreto 11.266/2026, art. 4º, I, "b"'], ['Base federal', 'Lei 9.985/2000, art. 21']],
  escopo: ['Análise da gleba e verificação dos requisitos de vegetação e dominialidade', 'Instrução do processo de reconhecimento junto à SEMAM', 'Averbação e constituição da perpetuidade', 'Articulação com a TDC: medição, certidão e estruturação da cessão', 'Análise dos efeitos tributários e sucessórios da decisão'],
  ficha: [['Órgão', 'SEMAM'], ['Instrução', 'Levantamento de vegetação e parecer técnico'], ['Formalização', 'Averbação da perpetuidade na matrícula'], ['Alcance', 'É possível criar a reserva em parte da gleba e transferir o potencial dessa parte']],
  destaque: 'A restrição deixa de ser o problema e passa a ser a origem do ativo. Mas a decisão é perpétua — vincula o imóvel e os herdeiros, e consta da matrícula como limitação administrativa.',
  limite: 'Por isso a conversa sobre RPPNM deveria acontecer junto com a de sucessão, não separada dela.',
  relacionados: ['transferencia-do-direito-de-construir', 'bonus-construtivo-areas-verdes']
}, /* ---------- camada 1: base ---------- */
{
  slug: 'viabilidade-urbanistica',
  camada: 'base',
  icon: 'plan',
  nome: 'Estudo de viabilidade urbanística',
  curto: 'Toda a legislação que incide sobre o imóvel reunida em um relatório, antes de o projeto avançar.',
  h1: 'Toda a legislação que incide sobre o imóvel, em um relatório.',
  base: 'LC 164/2024 · LC 166/2024 · LC 170/2025 · legislação estadual e federal aplicável',
  paraQuem: ['Quem vai comprar um terreno, quem já comprou e ainda não desenhou, e quem tem projeto pronto e quer saber se ele passa.'],
  lei: 'A resposta sobre o que um terreno permite está espalhada em pelo menos quatro normas — e às vezes numa convenção de condomínio de quarenta anos atrás que ninguém leu. Cada profissional consultado responde a sua parte; ninguém junta. O projeto avança sobre a média das respostas parciais, e a divergência aparece no protocolo.',
  escopo: ['Levantamento da matrícula e da situação dominial', 'Macrozona, zona, índice de aproveitamento, gabarito, recuos, taxa de ocupação e permeabilidade', 'Restrições: tombamento, preservação, faixa costeira, condicionantes de infraestrutura', 'Restrições privadas: loteamento, convenção, servidão', 'Instrumentos aplicáveis e o que cada um exige de contrapartida', 'Cenários de aproveitamento, com custo e via de licenciamento de cada um'],
  ficha: [['Prazo', 'De 15 a 30 dias, conforme a complexidade do imóvel'], ['Entrega', 'Relatório escrito, com os cenários lado a lado e a base normativa de cada afirmação']],
  destaque: 'O estudo custa uma fração do projeto. E é o único documento que pode dizer para não fazer o projeto.',
  relacionados: ['licenciamento-e-alvaras', 'transferencia-do-direito-de-construir']
}, {
  slug: 'licenciamento-e-alvaras',
  camada: 'base',
  icon: 'doc',
  nome: 'Licenciamento e alvarás',
  curto: 'Alvará de aprovação e de execução, habite-se, e o licenciamento ambiental quando exigido.',
  h1: 'Do protocolo ao habite-se.',
  base: 'LC 166/2024 · Código de Obras · LC 170/2025 · Resolução CONAMA 237/1997',
  paraQuem: ['Quem tem projeto e precisa aprová-lo. E quem já protocolou e recebeu comunique-se que não sabe responder.'],
  lei: 'A sequência é protocolo, diretrizes, aprovação de projeto, alvará e habite-se. Nenhuma etapa pula, e cada exigência não respondida corretamente devolve o processo à etapa anterior.',
  escopo: ['Consulta prévia e diretrizes urbanísticas', 'Alvará de aprovação e alvará de construção', 'Licenciamento ambiental, quando exigido', 'Resposta a comunique-se e a exigências do órgão licenciador', 'Recursos administrativos cabíveis', 'Habite-se e conclusão da obra'],
  ficha: [['Causas comuns de comunique-se', 'Divergência entre certidão e projeto · ausência de ART ou RRT · falta de acessibilidade'], ['Rito autodeclaratório', 'Para baixo impacto, emissão automática — com responsabilidade técnica integral do profissional, sob pena de cassação']],
  destaque: 'Aprovação não é autorização para construir. O alvará de aprovação atesta a conformidade do projeto; só o alvará de construção autoriza o início da obra.',
  limite: 'Quem usa o rito autodeclaratório está declarando conformidade com uma lei que está sub judice — e respondendo pessoalmente por essa declaração.',
  relacionados: ['viabilidade-urbanistica', 'regularizacao-e-anistia']
}, {
  slug: 'regularizacao-e-anistia',
  camada: 'base',
  icon: 'seal',
  nome: 'Regularização e anistia',
  curto: 'Adequação de imóveis consolidados, licença de funcionamento, acessibilidade e segurança.',
  h1: 'Para o que já foi construído.',
  base: 'LC 166/2024 · Código de Obras · LC 182/2026',
  paraQuem: ['Imóvel construído sem licença, com área além da aprovada, ou com uso diferente do licenciado. Quem vai vender e descobriu a divergência na matrícula. Quem vai abrir e não consegue a licença de funcionamento.'],
  lei: 'Duas vias. Regularização ordinária adequa a edificação aos parâmetros vigentes. A anistia regulariza o que não atende ao parâmetro atual, nas condições e no prazo da lei. Nem tudo cabe em anistia, e nem tudo precisa dela.',
  dispositivos: [['Anistia vigente', 'LC 182/2026 — dois anos a contar de 29/04/2026']],
  escopo: ['Diagnóstico da irregularidade e da via aplicável', 'Enquadramento na LC 182/2026 e instrução do pedido dentro do prazo', 'Regularização ordinária, quando a anistia não alcançar', 'Licença de funcionamento, locais de reunião e eventos', 'Acessibilidade e segurança contra incêndio', 'Adequação da matrícula ao construído'],
  ficha: [['O que a LC 182/2026 alcança', 'Edificações concluídas ou em estágio avançado, com excesso de até 10% do IA máximo da zona'], ['Contrapartida', 'Pagamento de sanção compensatória'], ['Prazo', 'A janela fecha em abril de 2028']],
  destaque: 'O limite de 10% define quem cabe e quem não cabe. Antes de montar processo, a primeira conta é essa — e ela depende do IA máximo da macrozona, não do que foi aprovado no projeto original.',
  relacionados: ['licenciamento-e-alvaras', 'imobiliario']
}, /* ---------- camada 3: apoio ---------- */
{
  slug: 'imobiliario',
  camada: 'apoio',
  icon: 'building',
  nome: 'Direito imobiliário aplicado',
  curto: 'Incorporação, loteamento, contratos e due diligence da operação.',
  h1: 'A forma jurídica muda o custo e o risco da operação.',
  base: 'Código Civil · Lei 4.591/1964 · Lei 6.766/1979 · Lei 6.015/1973',
  paraQuem: ['Quem está estruturando aquisição, permuta, incorporação ou loteamento — e ainda tem margem para escolher a forma.'],
  lei: 'O mesmo negócio, em duas formas diferentes, tem duas contas de imposto e dois desenhos de risco.',
  escopo: ['Aquisição, permuta física ou financeira e cessão de direitos', 'Incorporação imobiliária: memorial, registro e regime aplicável', 'Parcelamento do solo e loteamento', 'Due diligence: matrícula, ônus, ações, passivo ambiental e urbanístico', 'Contratos da operação e distribuição de riscos', 'Estrutura societária e patrimonial: SPE, SCP, holding e sucessão'],
  destaque: 'O que a matrícula não mostra: restrição de ZEPA, grau de preservação ainda não averbado, e a exposição do lote a norma sob discussão judicial. Nenhum dos três consta da certidão, e os três decidem o que se pode construir.',
  relacionados: ['tributacao-da-operacao', 'viabilidade-urbanistica']
}, {
  slug: 'tributacao-da-operacao',
  camada: 'apoio',
  icon: 'percent',
  nome: 'Tributação da operação',
  curto: 'ITBI, IPTU, outorga onerosa e ganho de capital calculados antes da decisão.',
  h1: 'A conta fiscal entra na viabilidade, não no fechamento.',
  base: 'CTN · Constituição, arts. 155 e 156 · legislação municipal de ITBI, IPTU e ISS · Lei 10.931/2004',
  paraQuem: ['Quem vai comprar, construir, alugar ou vender imóvel — e ainda não somou o que cada etapa custa em tributo.'],
  lei: 'ITBI no registro, IPTU no período de obra, outorga no licenciamento, ganho de capital na saída. Avaliados isoladamente, comprometem a margem. Calculados no estudo de viabilidade, orientam a decisão.',
  escopo: ['ITBI: base de cálculo, discussão do valor arbitrado acima da transação, imunidades e integralização de capital', 'IPTU: isenções, regimes de incentivo e revisão de lançamento', 'Outorga onerosa: cálculo, modalidades de quitação e tratamento no custo', 'Alienação: ganho de capital, regimes especiais e o RET na incorporação', 'Tributação da locação, conforme a estrutura escolhida'],
  destaque: 'Na transferência de potencial construtivo, o ITBI não incide — art. 19, §3º do Decreto 11.266/2026. É não incidência declarada, não isenção.',
  limite: 'A reforma tributária altera a tributação do setor imobiliário. Operações estruturadas agora atravessam a mudança, e a forma escolhida hoje define o tratamento depois.',
  relacionados: ['imobiliario', 'incentivos-do-centro-historico']
}];
const HUB = {
  h1: 'Do potencial construtivo ao habite-se.',
  lede: 'Onze frentes, três camadas. Todo empreendimento passa pelas três primeiras. O que separa um projeto viável de um projeto travado costuma estar nas seis do meio — instrumentos que a legislação de João Pessoa criou e que poucos operam.',
  lados: {
    head: ['', 'Tem potencial parado', 'Precisa de potencial'],
    rows: [['Quem é', 'Dono de casarão tombado, de gleba com mata, de lote com restrição ambiental', 'Incorporadora com projeto em macrozona adensável, empresa procurando sede'], ['A dor', '"Esse imóvel só me dá custo"', '"O terreno não permite o que o projeto pede"'], ['Instrumentos', 'TDC como cedente · RPPNM', 'TDC como receptor · SEAV · OODCCH · TER e OUC · Centro Histórico']]
  },
  destaque: 'Na transferência de potencial construtivo há sempre duas partes. Conhecer as duas muda a qualidade do que se negocia.'
};
Object.assign(window, {
  ESPECIALIDADES,
  HUB
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/content2.js", error: String((e && e.message) || e) }); }

// ui_kits/site/content3.js
try { (() => {
/* Conteúdo — parte 3: mapa normativo, advogado, análises, FAQ e páginas legais. */

const JP = {
  h1: 'A legislação urbanística de João Pessoa, em um lugar só.',
  lede: ['Entre 2024 e 2026, João Pessoa reescreveu o Plano Diretor, a Lei de Uso e Ocupação do Solo, o Código de Meio Ambiente e regulamentou a Transferência do Direito de Construir. Uma dessas leis está sob discussão judicial.', 'Este mapa reúne as camadas que incidem sobre um terreno e a ordem em que devem ser consultadas.'],
  ancoras: [{
    id: 'roteiro',
    label: 'Roteiro'
  }, {
    id: 'linha',
    label: 'Linha do tempo'
  }, {
    id: 'macro',
    label: 'Macrozoneamento'
  }, {
    id: 'zonas',
    label: 'Zoneamento'
  }, {
    id: 'patrimonio',
    label: 'Patrimônio'
  }, {
    id: 'instrumentos',
    label: 'Instrumentos'
  }, {
    id: 'indice',
    label: 'Índice'
  }],
  roteiro: {
    head: ['', 'Passo', 'O que se verifica', 'Onde'],
    rows: [['01', 'Macrozoneamento', 'O teto de aproveitamento do terreno.', 'LC 164/2024'], ['02', 'Uso e ocupação', 'Se o uso pretendido é permitido, e sob quais recuos e altura.', 'LC 166/2024'], ['03', 'Patrimônio', 'Se o imóvel está na poligonal e qual o grau de preservação.', 'Dec. 25.138/2004 · Dec. 10.878/2024'], ['04', 'Instrumentos', 'Se o caso permite vender TDC, pedir isenção, usar bônus ou pagar outorga.', 'Lei 15.409/2024 · Dec. 11.266/2026'], ['05', 'Sanções', 'O que o descumprimento custa, sobretudo nos regimes com contrapartida.', 'LC 166/2024 · LC 170/2025']]
  },
  roteiro_destaque: 'No SEAV, descumprir a preservação da área verde custa dez vezes o valor da outorga onerosa.',
  linha: [['abr/2024', 'LC 166/2024 — nova Lei de Uso e Ocupação do Solo. Republicada em 23/08/2024.', 'Substitui o zoneamento anterior. Muda uso, recuo e gabarito rua a rua.'], ['2024', 'LC 164/2024 — revisão do Plano Diretor Participativo', 'Novo macrozoneamento e novo teto de aproveitamento.'], ['2024', 'LC 169/2024 · LC 165/2024 · Lei 15.197/2024', 'Ajustes que já alteram a lei recém-aprovada.'], ['17/dez/2024', 'Decreto 10.878/2024 — zona prioritária do Centro Histórico', 'Isenção de IPTU e ITBI, ISS de 5% para 2%.'], ['18/dez/2024', 'Câmara aprova a TDC — Lei 15.409/2024', 'Cria o instrumento. Sem regulamento, ainda não opera.'], ['28/mar/2025', 'Decreto amplia a poligonal do Centro Histórico', 'Cerca de 1.300 imóveis a mais, segundo a imprensa local.'], ['2025', 'LC 170/2025 · LC 171/2025 · LC 174/2025 · Lei 15.609/2025', 'Quatro normas estruturais em um ano.'], ['10/dez/2025', 'TJPB declara a LUOS inconstitucional, em ADI do Ministério Público estadual', 'Vício de procedimento e limite de gabarito na faixa de 500 m da orla. Obras param.'], ['fev/2026', 'Decreto 11.235/2026', 'Editado já sob a crise judicial, cita a LC 166/2024 como base vigente.'], ['mar/2026', 'STF suspende parcialmente a decisão do TJPB', 'Quem já tinha alvará fica protegido. Quem ia protocolar, não.'], ['13/abr/2026', 'Decreto 11.266/2026 regulamenta a TDC — DOM em 29/06/2026', 'A transferência de potencial construtivo passa a operar de fato.'], ['29/abr/2026', 'LC 182/2026 — regularização de edificações', 'Janela de dois anos. Fecha em abril de 2028.']],
  linha_destaque: 'Em dezembro de 2025, a lei que define o que se pode construir em cada rua de João Pessoa foi derrubada. Três meses depois, parcialmente restabelecida. É esse o terreno em que os projetos da cidade estão sendo desenhados.',
  macro: {
    head: ['Macrozona', 'IA básico', 'IA máximo', 'Leitura prática'],
    rows: [['MAD-1 — Adensável 1', '1,0', '6,0', 'O destino principal dos créditos de TDC.'], ['MAD-2', '1,0', '4,0', 'Transição.'], ['MAD-3', '1,0', '2,0', 'Transição de baixa intensidade.'], ['MBD — Baixa Densidade', '1,0', '1,0', 'Controle rigoroso, caráter rural.'], ['MPA — Proteção Ambiental', '1,0', '1,0', 'Recarga de mananciais. Sem margem de adensamento.']]
  },
  macro_destaque: 'A diferença entre 1,0 e 6,0 não é urbanística. É financeira. E ela se compra.',
  zonas: [['ZH — Habitacionais', 'Prioridade para moradia.'], ['ZCS — Comércio e serviço', 'Da ZCS-1, no núcleo histórico, à ZCS-7, nos grandes corredores e rodovias.'], ['ZI-1 e ZI-2 — Industriais', 'Distrito Industrial e Mangabeira. Uso residencial vedado.'], ['ZEPA-1', 'Parques e reservas: Buraquinho, Lagoa, Bica.'], ['ZEPA-2', 'Encostas e vales. É onde incide o SEAV.'], ['ZEPA-3', 'Orla do Cabo Branco e falésias do Altiplano.']],
  zonas_aviso: ['A LUOS foi declarada inconstitucional pelo Órgão Especial do TJPB em 10 de dezembro de 2025, em ação direta do Ministério Público estadual. Em março de 2026 o STF suspendeu parcialmente essa decisão e preservou os alvarás expedidos.', 'Na prática: quem tem alvará expedido antes de 10/12/2025 mantém o direito de executar a obra nos termos licenciados. Quem vai protocolar agora, não tem essa proteção.', 'Dois sinais de que a lei segue sendo aplicada: os decretos municipais de fevereiro e abril de 2026 citam a LC 166/2024 como base legal vigente; e, para usos de baixo impacto, a Prefeitura adota rito autodeclaratório, em que o profissional assume responsabilidade técnica integral pela conformidade com a LUOS, sob pena de cassação imediata do alvará.', 'Não há previsão de data para o julgamento de mérito.'],
  patrimonio: [['APR — Preservação Rigorosa', 'Núcleo original. Qualquer reforma exige autorização prévia do IPHAEP.'], ['APE — Preservação do Entorno', 'Faixa de transição, para proteger a escala da APR.'], ['Níveis de intervenção', 'CT conservação total · CP parcial · RC renovação controlada · RT total. Anexo 02 da Deliberação 05/2004/CONPEC.'], ['Benefícios', 'Isenção de IPTU e de ITBI e ISS reduzido de 5% para 2% na zona prioritária.']],
  patrimonio_destaque: 'A poligonal foi ampliada por decreto publicado em 28 de março de 2025. Consultar apenas o perímetro original dá resposta errada para cerca de 1.300 imóveis.',
  indice: {
    head: ['Norma', 'Objeto', 'Status'],
    rows: [['LC 164/2024', 'Revisão do Plano Diretor Participativo', 'Vigente, alterada pela LC 171/2025'], ['LC 166/2024', 'Lei de Uso e Ocupação do Solo', 'Sub judice'], ['LC 169/2024', 'Altera a LUOS', 'Vigente'], ['LC 170/2025', 'Código de Meio Ambiente', 'Vigente'], ['LC 165/2024', 'Código de Posturas', 'Vigente'], ['LC 155/2023', 'Código de Obras', 'Vigente'], ['LC 182/2026', 'Regularização de edificações', 'Vigente até abr/2028'], ['Lei 15.409/2024', 'Transferência do Direito de Construir', 'Vigente'], ['Decreto 11.266/2026', 'Regulamenta a TDC', 'Vigente'], ['Decreto 10.878/2024', 'Centro Histórico — zona prioritária e incentivos', 'Vigente, poligonal ampliada em 28/03/2025'], ['LC 174/2025', 'Incentivos do Centro Histórico', 'Vigente'], ['Decreto estadual 25.138/2004', 'Tombamento do Centro Histórico', 'Vigente'], ['Lei da Outorga Onerosa', 'Fórmula, fatores e bonificação da OODCCH', 'Não localizada']]
  }
};

/* ------------------------------------------------------------ ADVOGADO */

const ADVOGADO = {
  h1: 'Diego Rodrigues Vieira',
  lede: ['Advogado. Atuação em direito urbanístico, imobiliário e tributário — as três camadas de uma mesma operação imobiliária.', 'Antes de abrir o escritório, passou seis anos dentro de um bairro tombado de São Paulo discutindo o que os imóveis do Bixiga podiam construir, e o que fazer com o potencial que a preservação impedia de usar.'],
  ficha: [['Inscrição', '[OAB/PB nº]'], ['Atuação', 'Urbanístico · Imobiliário · Tributário'], ['Formação', 'Direito · Faculdades Metropolitanas Unidas, FMU · 2013'], ['Complementar', 'Direito Tributário, 320h · ISE Business School · 2015'], ['', 'Extensão em Educação Museal · Pinacoteca de São Paulo'], ['Idiomas', 'Português · Inglês · Espanhol'], ['Base', 'João Pessoa · PB']],
  ponte: ['Em São Paulo, a Transferência do Direito de Construir existe desde 1984 e ganhou alcance com o Plano Diretor Estratégico de 2014. O proprietário de um imóvel tombado, que não pode construir tudo o que o terreno permitiria, transfere esse potencial para outro lote da cidade.', 'Em João Pessoa, o mesmo instrumento virou lei em dezembro de 2024 e só passou a operar com o decreto de regulamentação, em 2026.', 'São doze anos de diferença entre uma cidade e outra. E a pergunta que os dois casos fazem é idêntica: quanto vale o que não se pode construir, e como transformar isso em ativo sem perder a proteção do imóvel.'],
  ponte_destaque: 'Em São Paulo, esse trabalho era educação patrimonial. Em João Pessoa, é consultoria.',
  bixiga: [['Fábrica de Restauro', 'Laboratório criado em 2018 pela Universidade Presbiteriana Mackenzie, com coordenação da arquiteta Nadia Somekh, que teve o Bixiga como território-piloto. Capacitação de pedreiros, pintores, marceneiros e serralheiros em técnicas de conservação e restauro.'], ['Instituto Bixiga', 'Projetos educacionais em parceria com a associação de pesquisa, formação e cultura popular do bairro.'], ['Defesa do tombamento', 'Articulação junto ao Conpresp e ao Condephat, os órgãos de preservação municipal e estadual de São Paulo.'], ['APPIT', 'Parceiro jurídico da Associação dos Proprietários, Protetores e Usuários de Imóveis Tombados.'], ['Educação patrimonial sobre TDC', 'Liderança do projeto criado a partir da lei paulistana de transferência do direito de construir, para explicar a proprietários de imóveis tombados o que significa poder transferir o potencial construtivo. Inclui participação na Jornada do Patrimônio.'], ['Parque do Bixiga', 'Apoio jurídico ao movimento de moradores, coletivos e do Teatro Oficina pela transformação de um terreno de cerca de 11 mil m² em área verde pública. A prefeitura comprou a área em 2024 e oficializou o parque em 2026.'], ['Articulação institucional', 'Apresentação do projeto do museu e parcerias com o Museu da Imigração, o Museu da Pessoa e o Museu da Cidade de São Paulo.']],
  bixiga_destaque: 'Preservação e potencial construtivo não são dois assuntos. São o mesmo assunto, visto de dois lados do balcão.',
  trajetoria: [['2016 – 2022', 'MUMBI — Museu Memória do Bixiga · Advogado, depois diretor executivo', 'Patrimônio tombado, restrição de intervenção e transferência de potencial construtivo. Conselheiro desde então.'], ['2017 – 2019', 'Escudero & Ziebarth · Advogado', 'Due diligence imobiliária e análise documental de operações.'], ['2026 –', 'Vieira-Rodrigues Advocacia · Fundador e advogado responsável', 'Consultoria urbanística em João Pessoa, com apoio imobiliário e tributário.']],
  atende: ['Quem conversa com você na primeira reunião é quem conduz o caso até o fim.', 'Cada etapa termina com um documento escrito, legível por quem não é advogado.', 'Quando o caso exige planta, medição de potencial construtivo ou laudo ambiental, arquitetos e engenheiros parceiros entram por escopo fechado, sob coordenação jurídica. Os serviços técnicos são prestados por eles.', 'Reuniões por vídeo e processo administrativo eletrônico. Atendimento em português, inglês e espanhol.']
};

/* -------------------------------------------------------------- FAQ */

const FAQ_HOME = [['Quanto tempo leva um estudo de viabilidade urbanística?', 'De 15 a 30 dias, conforme a complexidade do imóvel e o número de camadas que incidem sobre ele.'], ['Anistia ainda está aberta?', 'Sim. A Lei Complementar 182/2026 foi publicada em abril de 2026 e vale por dois anos, alcançando obras concluídas ou em estágio avançado naquela data. A janela fecha em abril de 2028.'], ['Incide ITBI na transferência de potencial construtivo?', 'Não. O art. 19, §3º do Decreto 11.266/2026 afasta expressamente a incidência sobre a alienação do potencial construtivo. Trata-se de não incidência declarada, e não de isenção.'], ['Posso começar a obra com o alvará de aprovação?', 'Não. O alvará de aprovação atesta a conformidade do projeto arquitetônico. Só o alvará de construção autoriza o início da obra física.']];
const ANALISES = {
  h1: 'Análises técnicas para quem toma decisão.',
  lede: 'Aplicação prática de leis, decretos e jurisprudência à realidade dos empreendimentos de João Pessoa. Escritas para serem lidas por quem decide o investimento, não apenas por advogado.',
  filtros: ['Todos', 'Urbanístico', 'Imobiliário', 'Tributário', 'Legislação de JP'],
  vazio: 'Ainda não há análise publicada neste tema.',
  captura: {
    titulo: 'Receba as próximas.',
    texto: 'Uma análise por vez, quando houver o que dizer. Sem periodicidade fixa e sem newsletter automática.',
    nota: 'Seu e-mail é usado apenas para o envio das análises. Você pode sair a qualquer momento.'
  },
  posts: []
};
const LEGAIS = {
  termos: {
    titulo: 'Termos de uso',
    secoes: [['Quem publica', 'Vieira-Rodrigues Advocacia — Sociedade Individual de Advocacia, titular Diego Rodrigues Vieira, [OAB/PB nº], com base em João Pessoa · PB.'], ['Finalidade do site', 'Informar sobre a atuação do escritório e publicar conteúdo educativo sobre direito urbanístico, imobiliário e tributário. Não é canal de atendimento nem de consulta jurídica.'], ['O conteúdo não é consulta jurídica', 'A análise depende do caso concreto. A legislação citada pode mudar, e parte da legislação urbanística de João Pessoa está sob discussão judicial.'], ['Não formação de relação advogado-cliente', 'O envio de mensagem pelo formulário, o contato por WhatsApp e a leitura do conteúdo não criam relação profissional, que só se constitui por contrato escrito.'], ['Propriedade intelectual', 'O conteúdo pode ser citado com atribuição e link. A reprodução integral depende de autorização.'], ['Links externos', 'Links para normas e fontes oficiais não implicam responsabilidade sobre conteúdo de terceiros.'], ['Alterações', 'Estes termos podem mudar. Vale a versão publicada na data de acesso.'], ['Contato', 'diego@vieira-rodrigues.com']]
  },
  privacidade: {
    titulo: 'Política de privacidade',
    secoes: [['Controlador', 'Vieira-Rodrigues Advocacia — Sociedade Individual de Advocacia, [CNPJ].'], ['Dados coletados', 'Nome, e-mail, assunto e mensagem, pelo formulário de contato. E-mail, na captura de análises. Dados de navegação, se houver ferramenta de medição.'], ['Finalidade e base legal', 'Responder ao contato e enviar as análises solicitadas. Base: consentimento e legítimo interesse.'], ['Compartilhamento', '[listar operadores: provedor de e-mail, hospedagem, CMS e ferramenta de captura]'], ['Retenção', '[definir prazo — sugestão de 24 meses para contatos que não viraram cliente]'], ['Direitos do titular', 'Acesso, correção, exclusão, portabilidade e revogação, pelo e-mail de contato.'], ['Cookies', '[definir: apenas essenciais, ou banner se houver medição]'], ['Encarregado', '[nome e e-mail]']]
  },
  lgpd: {
    titulo: 'Sigilo profissional e LGPD',
    secoes: [['O sigilo é anterior à LGPD', 'O dever de sigilo do advogado vem do Estatuto da Advocacia e do Código de Ética. Não depende de consentimento nem de contrato.'], ['O que isso significa na prática', 'O que o cliente conta na primeira conversa já está protegido, mesmo que não haja contratação.'], ['Dados do caso', '[descrever onde ficam os documentos, quem tem acesso e o que acontece ao fim do caso]'], ['Parceiros técnicos', 'Arquitetos e engenheiros acionados por projeto assinam compromisso de confidencialidade.'], ['Retenção de documentos', '[definir prazo, observando o dever de guarda]'], ['Canal do titular', 'diego@vieira-rodrigues.com']]
  }
};
Object.assign(window, {
  JP,
  ADVOGADO,
  FAQ_HOME,
  ANALISES,
  LEGAIS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/content3.js", error: String((e && e.message) || e) }); }

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.CapCard = __ds_scope.CapCard;

__ds_ns.ColumnCard = __ds_scope.ColumnCard;

__ds_ns.Declaration = __ds_scope.Declaration;

__ds_ns.Accent = __ds_scope.Accent;

__ds_ns.InsightRow = __ds_scope.InsightRow;

__ds_ns.PersonCard = __ds_scope.PersonCard;

__ds_ns.Photo = __ds_scope.Photo;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.RuleList = __ds_scope.RuleList;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.BrandMark = __ds_scope.BrandMark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.PurpleBand = __ds_scope.PurpleBand;

__ds_ns.AnchorNav = __ds_scope.AnchorNav;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.FilterChips = __ds_scope.FilterChips;

})();
