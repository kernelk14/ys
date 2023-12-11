// @bun
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toCommonJS = (from) => {
  const moduleCache = __toCommonJS.moduleCache ??= new WeakMap;
  var cached = moduleCache.get(from);
  if (cached)
    return cached;
  var to = __defProp({}, "__esModule", { value: true });
  var desc = { enumerable: false };
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key))
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  moduleCache.set(from, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = (id) => {
  return import.meta.require(id);
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node:node-fetch
var exports_node_fetch = {};
__export(exports_node_fetch, {
  isRedirect: () => {
    {
      return g;
    }
  },
  fileFromSync: () => {
    {
      return B;
    }
  },
  fileFrom: () => {
    {
      return x;
    }
  },
  fetch: () => {
    {
      return r;
    }
  },
  default: () => {
    {
      return F;
    }
  },
  blobFromSync: () => {
    {
      return c;
    }
  },
  blobFrom: () => {
    {
      return a;
    }
  },
  Response: () => {
    {
      return m;
    }
  },
  Request: () => {
    {
      return h;
    }
  },
  Headers: () => {
    {
      return b;
    }
  },
  FormData: () => {
    {
      return d;
    }
  },
  File: () => {
    {
      return p;
    }
  },
  FetchError: () => {
    {
      return i;
    }
  },
  FetchBaseError: () => {
    {
      return o;
    }
  },
  Blob: () => {
    {
      return l;
    }
  },
  AbortError: () => {
    {
      return s;
    }
  }
});
var r, a, c, g, b, h, m, l, p, d, u, s, o, i, x, B, F;
var init_node_fetch = __esm(() => {
  r = function(...e) {
    return u(...e);
  };
  a = function(e, n) {
    return "Bun" in globalThis ? Promise.resolve(Bun.file(data)) : r(e, n).then((t) => t.blob());
  };
  c = function(e, n) {
    return "Bun" in globalThis ? Bun.file(data) : r(e, n).then((t) => t.blob());
  };
  g = function(e) {
    return e === 301 || e === 302 || e === 303 || e === 307 || e === 308;
  };
  ({ Headers: b, Request: h, Response: m, Blob: l, File: p = l, FormData: d, fetch: u } = globalThis);
  ("Bun" in globalThis) && (u = Bun.fetch);
  s = class extends DOMException {
    constructor(n) {
      super(n, "AbortError");
    }
  };
  o = class extends Error {
    constructor(n, t) {
      super(n), this.type = t;
    }
  };
  i = class extends o {
    constructor(n, t, f) {
      super(n, t), this.code = f?.code;
    }
  };
  x = a;
  B = c;
  F = Object.assign(r, { AbortError: s, Blob: l, FetchBaseError: o, FetchError: i, File: p, FormData: d, Headers: b, Request: h, Response: m, blobFrom: a, blobFromSync: c, fileFrom: x, fileFromSync: B, isRedirect: g, default: r, [Symbol.for("CommonJS")]: 0 });
});

// node_modules/youtubei/dist/cjs/common/shared/HTTP/HTTP.js
var require_HTTP = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.HTTP = undefined;
  var node_fetch_1 = __importDefault((init_node_fetch(), __toCommonJS(exports_node_fetch)));
  var url_1 = import.meta.require("node:url");

  class HTTP {
    constructor(options) {
      this.apiKey = options.apiKey;
      this.baseUrl = options.baseUrl;
      this.clientName = options.clientName;
      this.clientVersion = options.clientVersion;
      this.cookie = options.initialCookie || "";
      this.defaultHeaders = {
        "x-youtube-client-version": this.clientVersion,
        "x-youtube-client-name": "1",
        "content-type": "application/json",
        "accept-encoding": "gzip, deflate, br"
      };
      this.defaultFetchOptions = options.fetchOptions || {};
      this.defaultClientOptions = options.youtubeClientOptions || {};
    }
    get(url, options) {
      return __awaiter(this, undefined, undefined, function* () {
        return yield this.request(url, Object.assign(Object.assign({}, options), { params: Object.assign({ prettyPrint: "false" }, options === null || options === undefined ? undefined : options.params), method: "GET" }));
      });
    }
    post(url, options) {
      return __awaiter(this, undefined, undefined, function* () {
        return yield this.request(url, Object.assign(Object.assign({}, options), { method: "POST", params: Object.assign({ key: this.apiKey, prettyPrint: "false" }, options === null || options === undefined ? undefined : options.params), data: Object.assign({ context: {
          client: Object.assign({ clientName: this.clientName, clientVersion: this.clientVersion }, this.defaultClientOptions)
        } }, options === null || options === undefined ? undefined : options.data) }));
      });
    }
    request(url, partialOptions) {
      return __awaiter(this, undefined, undefined, function* () {
        const options = Object.assign(Object.assign(Object.assign({}, partialOptions), this.defaultFetchOptions), { headers: Object.assign(Object.assign(Object.assign(Object.assign({}, this.defaultHeaders), { cookie: this.cookie, referer: `https://${this.baseUrl}/` }), partialOptions.headers), this.defaultFetchOptions.headers), body: partialOptions.data ? JSON.stringify(partialOptions.data) : undefined });
        const finalUrl = `https://${this.baseUrl}/${url}?${new url_1.URLSearchParams(partialOptions.params)}`;
        const response = yield node_fetch_1.default(finalUrl, options);
        const data2 = yield response.json();
        this.parseCookie(response);
        return { data: data2 };
      });
    }
    parseCookie(response) {
      const cookie = response.headers.get("set-cookie");
      if (cookie)
        this.cookie = cookie;
    }
  }
  exports.HTTP = HTTP;
});

// node_modules/youtubei/dist/cjs/common/shared/HTTP/index.js
var require_HTTP2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_HTTP(), exports);
});

// node_modules/youtubei/dist/cjs/common/shared/Shelf/Shelf.js
var require_Shelf = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// node_modules/youtubei/dist/cjs/common/shared/Shelf/index.js
var require_Shelf2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_Shelf(), exports);
});

// node_modules/youtubei/dist/cjs/common/utils/decorators.js
var require_decorators = __commonJS((exports) => {
  var extendsBuiltIn = function() {
    return (target) => {
      return class extends target {
        constructor(...args) {
          super(args);
          Object.setPrototypeOf(this, target.prototype);
        }
      };
    };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.extendsBuiltIn = undefined;
  exports.extendsBuiltIn = extendsBuiltIn;
});

// node_modules/youtubei/dist/cjs/common/utils/helper.js
var require_helper = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.mapFilter = exports.getContinuationFromItems = exports.stripToInt = exports.getDuration = undefined;
  var getDuration = (s2) => {
    s2 = s2.replace(/:/g, ".");
    const spl = s2.split(".");
    if (spl.length === 0)
      return +spl;
    else {
      const sumStr = spl.pop();
      let sum = +sumStr;
      if (spl.length === 1)
        sum += +spl[0] * 60;
      if (spl.length === 2) {
        sum += +spl[1] * 60;
        sum += +spl[0] * 3600;
      }
      return sum;
    }
  };
  exports.getDuration = getDuration;
  var stripToInt = (string) => {
    if (!string)
      return null;
    return +string.replace(/[^0-9]/g, "");
  };
  exports.stripToInt = stripToInt;
  var getContinuationFromItems = (items, accessors = ["continuationEndpoint"]) => {
    const continuation = items[items.length - 1];
    const renderer = continuation === null || continuation === undefined ? undefined : continuation.continuationItemRenderer;
    if (!renderer)
      return;
    let current = renderer;
    for (const accessor of accessors) {
      current = current[accessor];
    }
    return current.continuationCommand.token;
  };
  exports.getContinuationFromItems = getContinuationFromItems;
  var mapFilter = (items, key) => {
    return items.filter((item) => item[key]).map((item) => item[key]);
  };
  exports.mapFilter = mapFilter;
});

// node_modules/youtubei/dist/cjs/common/utils/mixins.js
var require_mixins = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.applyMixins = undefined;
  var applyMixins = (derivedCtor, baseCtors) => {
    baseCtors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        if (name !== "constructor") {
          derivedCtor.prototype[name] = baseCtor.prototype[name];
        }
      });
    });
  };
  exports.applyMixins = applyMixins;
});

// node_modules/youtubei/dist/cjs/common/utils/types.js
var require_types = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// node_modules/youtubei/dist/cjs/common/utils/index.js
var require_utils = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_decorators(), exports);
  __exportStar(require_helper(), exports);
  __exportStar(require_mixins(), exports);
  __exportStar(require_types(), exports);
});

// node_modules/youtubei/dist/cjs/common/shared/Thumbnails/Thumbnails.js
var require_Thumbnails = __commonJS((exports) => {
  var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
    var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r2 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i2 = decorators.length - 1;i2 >= 0; i2--)
        if (d2 = decorators[i2])
          r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
    return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
  };
  var Thumbnails_1;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Thumbnails = undefined;
  var utils_1 = require_utils();
  var Thumbnails = Thumbnails_1 = class Thumbnails2 extends Array {
    constructor() {
      super();
    }
    get min() {
      return Thumbnails_1.parseThumbnailUrl(this[0]);
    }
    get best() {
      return Thumbnails_1.parseThumbnailUrl(this[this.length - 1]);
    }
    load(thumbnails) {
      this.push(...thumbnails);
      return this;
    }
    static parseThumbnailUrl({ url }) {
      if (url.startsWith("//"))
        return `https:${url}`;
      if (!url.startsWith("https://"))
        return `https://${url}`;
      else
        return url;
    }
  };
  Thumbnails = Thumbnails_1 = __decorate([
    utils_1.extendsBuiltIn()
  ], Thumbnails);
  exports.Thumbnails = Thumbnails;
});

// node_modules/youtubei/dist/cjs/common/shared/Thumbnails/index.js
var require_Thumbnails2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_Thumbnails(), exports);
});

// node_modules/youtubei/dist/cjs/common/shared/index.js
var require_shared = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_HTTP2(), exports);
  __exportStar(require_Shelf2(), exports);
  __exportStar(require_Thumbnails2(), exports);
});

// node_modules/youtubei/dist/cjs/music/MusicBase/MusicBase.js
var require_MusicBase = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MusicBase = undefined;

  class MusicBase {
    constructor(client) {
      this.client = client;
    }
  }
  exports.MusicBase = MusicBase;
});

// node_modules/youtubei/dist/cjs/music/MusicBase/index.js
var require_MusicBase2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_MusicBase(), exports);
});

// node_modules/youtubei/dist/cjs/music/MusicBaseAlbum/MusicBaseAlbum.js
var require_MusicBaseAlbum = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MusicBaseAlbum = undefined;
  var MusicBase_1 = require_MusicBase2();

  class MusicBaseAlbum extends MusicBase_1.MusicBase {
    constructor(attr) {
      super(attr.client);
      Object.assign(this, attr);
    }
  }
  exports.MusicBaseAlbum = MusicBaseAlbum;
});

// node_modules/youtubei/dist/cjs/music/MusicBaseAlbum/index.js
var require_MusicBaseAlbum2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_MusicBaseAlbum(), exports);
});

// node_modules/youtubei/dist/cjs/music/MusicAlbumCompact/MusicAlbumCompact.js
var require_MusicAlbumCompact = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MusicAlbumCompact = undefined;
  var MusicBaseAlbum_1 = require_MusicBaseAlbum2();

  class MusicAlbumCompact extends MusicBaseAlbum_1.MusicBaseAlbum {
    constructor(attr) {
      super(attr);
      Object.assign(this, attr);
    }
  }
  exports.MusicAlbumCompact = MusicAlbumCompact;
});

// node_modules/youtubei/dist/cjs/music/MusicAlbumCompact/index.js
var require_MusicAlbumCompact2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_MusicAlbumCompact(), exports);
});

// node_modules/youtubei/dist/cjs/music/MusicBaseArtist/MusicBaseArtist.js
var require_MusicBaseArtist = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MusicBaseArtist = undefined;
  var MusicBase_1 = require_MusicBase2();

  class MusicBaseArtist extends MusicBase_1.MusicBase {
    constructor(attr) {
      super(attr.client);
      Object.assign(this, attr);
    }
  }
  exports.MusicBaseArtist = MusicBaseArtist;
});

// node_modules/youtubei/dist/cjs/music/MusicArtistCompact/MusicArtistCompact.js
var require_MusicArtistCompact = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MusicArtistCompact = undefined;
  var MusicBaseArtist_1 = require_MusicBaseArtist();

  class MusicArtistCompact extends MusicBaseArtist_1.MusicBaseArtist {
    constructor(attr) {
      super(attr);
      Object.assign(this, attr);
    }
  }
  exports.MusicArtistCompact = MusicArtistCompact;
});

// node_modules/youtubei/dist/cjs/music/MusicArtistCompact/index.js
var require_MusicArtistCompact2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_MusicArtistCompact(), exports);
});

// node_modules/youtubei/dist/cjs/music/MusicBaseArtist/index.js
var require_MusicBaseArtist2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_MusicBaseArtist(), exports);
});

// node_modules/youtubei/dist/cjs/music/MusicBaseChannel/MusicBaseChannel.js
var require_MusicBaseChannel = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MusicBaseChannel = undefined;
  var MusicBaseArtist_1 = require_MusicBaseArtist2();

  class MusicBaseChannel extends MusicBaseArtist_1.MusicBaseArtist {
  }
  exports.MusicBaseChannel = MusicBaseChannel;
});

// node_modules/youtubei/dist/cjs/music/MusicBaseChannel/index.js
var require_MusicBaseChannel2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_MusicBaseChannel(), exports);
});

// node_modules/youtubei/dist/cjs/common/index.js
var require_common = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_shared(), exports);
  __exportStar(require_utils(), exports);
});

// node_modules/youtubei/dist/cjs/music/MusicLyrics/MusicLyrics.js
var require_MusicLyrics = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MusicLyrics = undefined;

  class MusicLyrics {
    constructor(attr) {
      Object.assign(this, attr);
    }
  }
  exports.MusicLyrics = MusicLyrics;
});

// node_modules/youtubei/dist/cjs/music/MusicLyrics/index.js
var require_MusicLyrics2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_MusicLyrics(), exports);
});

// node_modules/youtubei/dist/cjs/music/constants.js
var require_constants = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.I_END_POINT = exports.BASE_URL = exports.INNERTUBE_API_KEY = exports.INNERTUBE_CLIENT_VERSION = undefined;
  exports.INNERTUBE_CLIENT_VERSION = "1.20221219.01.00";
  exports.INNERTUBE_API_KEY = "AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30";
  exports.BASE_URL = "music.youtube.com";
  exports.I_END_POINT = "/youtubei/v1";
});

// node_modules/youtubei/dist/cjs/music/MusicPlaylistCompact/MusicPlaylistCompact.js
var require_MusicPlaylistCompact = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MusicPlaylistCompact = undefined;
  var MusicBase_1 = require_MusicBase2();

  class MusicPlaylistCompact extends MusicBase_1.MusicBase {
    constructor(attr) {
      super(attr.client);
      Object.assign(this, attr);
    }
  }
  exports.MusicPlaylistCompact = MusicPlaylistCompact;
});

// node_modules/youtubei/dist/cjs/music/MusicPlaylistCompact/index.js
var require_MusicPlaylistCompact2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_MusicPlaylistCompact(), exports);
});

// node_modules/youtubei/dist/cjs/music/MusicSongCompact/MusicSongCompact.js
var require_MusicSongCompact = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MusicSongCompact = undefined;
  var MusicBase_1 = require_MusicBase2();

  class MusicSongCompact extends MusicBase_1.MusicBase {
    constructor(attr) {
      super(attr.client);
      Object.assign(this, attr);
    }
  }
  exports.MusicSongCompact = MusicSongCompact;
});

// node_modules/youtubei/dist/cjs/music/MusicSongCompact/index.js
var require_MusicSongCompact2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_MusicSongCompact(), exports);
});

// node_modules/youtubei/dist/cjs/music/MusicVideoCompact/MusicVideoCompact.js
var require_MusicVideoCompact = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MusicVideoCompact = undefined;
  var MusicBase_1 = require_MusicBase2();

  class MusicVideoCompact extends MusicBase_1.MusicBase {
    constructor(attr) {
      super(attr.client);
      Object.assign(this, attr);
    }
  }
  exports.MusicVideoCompact = MusicVideoCompact;
});

// node_modules/youtubei/dist/cjs/music/MusicVideoCompact/index.js
var require_MusicVideoCompact2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_MusicVideoCompact(), exports);
});

// node_modules/youtubei/dist/cjs/music/MusicClient/MusicSearchResultParser.js
var require_MusicSearchResultParser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MusicSearchResultParser = undefined;
  var common_1 = require_common();
  var MusicAlbumCompact_1 = require_MusicAlbumCompact2();
  var MusicArtistCompact_1 = require_MusicArtistCompact2();
  var MusicBaseArtist_1 = require_MusicBaseArtist2();
  var MusicBaseChannel_1 = require_MusicBaseChannel2();
  var MusicPlaylistCompact_1 = require_MusicPlaylistCompact2();
  var MusicSongCompact_1 = require_MusicSongCompact2();
  var MusicVideoCompact_1 = require_MusicVideoCompact2();

  class MusicSearchResultParser {
    static parseSearchResult(data2, client) {
      const sectionListContents = data2.contents.tabbedSearchResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents;
      const shelves = sectionListContents.filter((f) => f.musicShelfRenderer).map((m2) => m2.musicShelfRenderer);
      return shelves.map((m2) => ({
        title: m2.title.runs.map((r2) => r2.text).join(),
        items: m2.contents.map((c2) => MusicSearchResultParser.parseSearchItem(c2, client))
      }));
    }
    static parseSearchItem(content, client) {
      var _a;
      const item = content.musicResponsiveListItemRenderer;
      const playEndpoint = (_a = item.overlay) === null || _a === undefined ? undefined : _a.musicItemThumbnailOverlayRenderer.content.musicPlayButtonRenderer.playNavigationEndpoint;
      if (playEndpoint === null || playEndpoint === undefined ? undefined : playEndpoint.watchEndpoint) {
        const pageType = playEndpoint.watchEndpoint.watchEndpointMusicSupportedConfigs.watchEndpointMusicConfig.musicVideoType;
        if (pageType === "MUSIC_VIDEO_TYPE_PODCAST_EPISODE")
          return;
        return MusicSearchResultParser.parseVideoItem(item, pageType, client);
      } else if (playEndpoint === null || playEndpoint === undefined ? undefined : playEndpoint.watchPlaylistEndpoint.params) {
        return MusicSearchResultParser.parsePlaylistItem(item, client);
      } else if (playEndpoint === null || playEndpoint === undefined ? undefined : playEndpoint.watchPlaylistEndpoint) {
        return MusicSearchResultParser.parseAlbumItem(item, client);
      } else {
        return MusicSearchResultParser.parseArtistItem(item, client);
      }
    }
    static parseVideoItem(item, pageType, client) {
      const [topColumn, bottomColumn] = item.flexColumns.map((c2) => c2.musicResponsiveListItemFlexColumnRenderer.text.runs);
      const id = topColumn[0].navigationEndpoint.watchEndpoint.videoId;
      const title = topColumn[0].text;
      const duration = common_1.getDuration(bottomColumn.at(-1).text) || undefined;
      const thumbnails = new common_1.Thumbnails().load(item.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails);
      const artists = MusicSearchResultParser.parseArtists(bottomColumn, client);
      if (pageType === "MUSIC_VIDEO_TYPE_ATV") {
        const rawAlbum = bottomColumn.find((r2) => {
          var _a;
          return ((_a = r2.navigationEndpoint) === null || _a === undefined ? undefined : _a.browseEndpoint.browseEndpointContextSupportedConfigs.browseEndpointContextMusicConfig.pageType) === "MUSIC_PAGE_TYPE_ALBUM";
        });
        const album = rawAlbum ? new MusicAlbumCompact_1.MusicAlbumCompact({
          client,
          id: rawAlbum.navigationEndpoint.browseEndpoint.browseId,
          title: rawAlbum.text
        }) : undefined;
        return new MusicSongCompact_1.MusicSongCompact({
          client,
          id,
          album,
          title,
          artists,
          thumbnails,
          duration
        });
      } else if (pageType === "MUSIC_VIDEO_TYPE_UGC") {
        return new MusicVideoCompact_1.MusicVideoCompact({ client, id, title, artists, thumbnails, duration });
      }
    }
    static parsePlaylistItem(item, client) {
      const [topColumn, bottomColumn] = item.flexColumns.map((c2) => c2.musicResponsiveListItemFlexColumnRenderer.text.runs);
      const id = item.overlay.musicItemThumbnailOverlayRenderer.content.musicPlayButtonRenderer.playNavigationEndpoint.watchPlaylistEndpoint.playlistId;
      const title = topColumn[0].text;
      const songCount = common_1.stripToInt(bottomColumn.at(-1).text) || undefined;
      const thumbnails = new common_1.Thumbnails().load(item.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails);
      const channel = MusicSearchResultParser.parseChannel(bottomColumn, client);
      return new MusicPlaylistCompact_1.MusicPlaylistCompact({ client, id, title, thumbnails, songCount, channel });
    }
    static parseAlbumItem(item, client) {
      const [topColumn, bottomColumn] = item.flexColumns.map((c2) => c2.musicResponsiveListItemFlexColumnRenderer.text.runs);
      const id = item.overlay.musicItemThumbnailOverlayRenderer.content.musicPlayButtonRenderer.playNavigationEndpoint.watchPlaylistEndpoint.playlistId;
      const title = topColumn[0].text;
      const year = common_1.stripToInt(bottomColumn.at(-1).text) || undefined;
      const thumbnails = new common_1.Thumbnails().load(item.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails);
      const artists = MusicSearchResultParser.parseArtists(bottomColumn, client);
      return new MusicAlbumCompact_1.MusicAlbumCompact({ client, id, title, thumbnails, artists, year });
    }
    static parseArtistItem(item, client) {
      const [topColumn] = item.flexColumns.map((c2) => c2.musicResponsiveListItemFlexColumnRenderer.text.runs);
      const id = item.navigationEndpoint.browseEndpoint.browseId;
      const name = topColumn[0].text;
      const thumbnails = new common_1.Thumbnails().load(item.thumbnail.musicThumbnailRenderer.thumbnail.thumbnails);
      return new MusicArtistCompact_1.MusicArtistCompact({ client, id, name, thumbnails });
    }
    static parseArtists(items, client) {
      return this.parseArtistOrChannel(items).map((r2) => new MusicBaseArtist_1.MusicBaseArtist({
        client,
        name: r2.text,
        id: r2.navigationEndpoint.browseEndpoint.browseId
      }));
    }
    static parseChannel(items, client) {
      const [channel] = this.parseArtistOrChannel(items).map((r2) => new MusicBaseChannel_1.MusicBaseChannel({
        client,
        name: r2.text,
        id: r2.navigationEndpoint.browseEndpoint.browseId
      }));
      return channel;
    }
    static parseArtistOrChannel(items) {
      return items.filter((r2) => {
        var _a;
        const pageType = (_a = r2.navigationEndpoint) === null || _a === undefined ? undefined : _a.browseEndpoint.browseEndpointContextSupportedConfigs.browseEndpointContextMusicConfig.pageType;
        return pageType === "MUSIC_PAGE_TYPE_ARTIST" || pageType === "MUSIC_PAGE_TYPE_USER_CHANNEL";
      });
    }
  }
  exports.MusicSearchResultParser = MusicSearchResultParser;
});

// node_modules/youtubei/dist/cjs/music/MusicClient/MusicClient.js
var require_MusicClient = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MusicClient = undefined;
  var common_1 = require_common();
  var MusicLyrics_1 = require_MusicLyrics2();
  var constants_1 = require_constants();
  var MusicSearchResultParser_1 = require_MusicSearchResultParser();

  class MusicClient {
    constructor(options = {}) {
      const fullOptions = Object.assign(Object.assign({ initialCookie: "", fetchOptions: {} }, options), { youtubeClientOptions: Object.assign({ hl: "en", gl: "US" }, options.youtubeClientOptions) });
      this.http = new common_1.HTTP(Object.assign({ apiKey: constants_1.INNERTUBE_API_KEY, baseUrl: constants_1.BASE_URL, clientName: "WEB_REMIX", clientVersion: constants_1.INNERTUBE_CLIENT_VERSION }, fullOptions));
    }
    search(query) {
      return __awaiter(this, undefined, undefined, function* () {
        const response = yield this.http.post(`${constants_1.I_END_POINT}/search`, {
          data: { query }
        });
        return MusicSearchResultParser_1.MusicSearchResultParser.parseSearchResult(response.data, this);
      });
    }
    getLyrics(id) {
      return __awaiter(this, undefined, undefined, function* () {
        const watchResponse = yield this.http.post(`${constants_1.I_END_POINT}/next`, {
          data: { videoId: id }
        });
        const lyricTab = watchResponse.data.contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[1].tabRenderer;
        if (lyricTab.unselectable)
          return;
        const lyricsBrowseId = lyricTab.endpoint.browseEndpoint.browseId;
        const lyricResponse = yield this.http.post(`${constants_1.I_END_POINT}/browse`, {
          data: { browseId: lyricsBrowseId }
        });
        const data2 = lyricResponse.data.contents.sectionListRenderer.contents[0].musicDescriptionShelfRenderer;
        const content = data2.description.runs[0].text;
        const description = data2.footer.runs[0].text;
        return new MusicLyrics_1.MusicLyrics({
          content,
          description
        });
      });
    }
  }
  exports.MusicClient = MusicClient;
});

// node_modules/youtubei/dist/cjs/music/MusicClient/index.js
var require_MusicClient2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_MusicClient(), exports);
  __exportStar(require_MusicSearchResultParser(), exports);
});

// node_modules/youtubei/dist/cjs/music/index.js
var require_music = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_MusicAlbumCompact2(), exports);
  __exportStar(require_MusicArtistCompact2(), exports);
  __exportStar(require_MusicBase2(), exports);
  __exportStar(require_MusicBaseAlbum2(), exports);
  __exportStar(require_MusicBaseArtist2(), exports);
  __exportStar(require_MusicBaseChannel2(), exports);
  __exportStar(require_MusicClient2(), exports);
  __exportStar(require_MusicLyrics2(), exports);
  __exportStar(require_MusicPlaylistCompact2(), exports);
  __exportStar(require_MusicSongCompact2(), exports);
  __exportStar(require_MusicVideoCompact2(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/Base/Base.js
var require_Base = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Base = undefined;

  class Base {
    constructor(client) {
      this.client = client;
    }
  }
  exports.Base = Base;
});

// node_modules/youtubei/dist/cjs/youtube/Base/index.js
var require_Base2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_Base(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/BaseChannel/BaseChannelParser.js
var require_BaseChannelParser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BaseChannelParser = undefined;
  var common_1 = require_common();

  class BaseChannelParser {
    static loadBaseChannel(target, data2) {
      var _a;
      const { channelId, title, thumbnail, videoCountText, subscriberCountText } = data2;
      target.id = channelId;
      target.name = title.simpleText;
      target.thumbnails = new common_1.Thumbnails().load(thumbnail.thumbnails);
      target.videoCount = common_1.stripToInt((_a = videoCountText === null || videoCountText === undefined ? undefined : videoCountText.runs) === null || _a === undefined ? undefined : _a[0].text) || 0;
      target.subscriberCount = subscriberCountText === null || subscriberCountText === undefined ? undefined : subscriberCountText.simpleText;
      return target;
    }
    static parseTabData(name, data2) {
      var _a, _b, _c, _d, _e;
      const tab = (_a = data2.contents) === null || _a === undefined ? undefined : _a.twoColumnBrowseResultsRenderer.tabs.find((t) => {
        var _a2;
        return ((_a2 = t.tabRenderer) === null || _a2 === undefined ? undefined : _a2.endpoint.browseEndpoint.params) === BaseChannelParser.TAB_TYPE_PARAMS[name];
      });
      return ((_d = (_c = (_b = tab === null || tab === undefined ? undefined : tab.tabRenderer.content.sectionListRenderer) === null || _b === undefined ? undefined : _b.contents) === null || _c === undefined ? undefined : _c[0].itemSectionRenderer.contents[0].gridRenderer) === null || _d === undefined ? undefined : _d.items) || (tab === null || tab === undefined ? undefined : tab.tabRenderer.content.richGridRenderer.contents.map((c2) => {
        var _a2;
        return ((_a2 = c2.richItemRenderer) === null || _a2 === undefined ? undefined : _a2.content) || c2;
      })) || ((_e = data2.onResponseReceivedActions) === null || _e === undefined ? undefined : _e[0].appendContinuationItemsAction.continuationItems.map((c2) => {
        var _a2;
        return ((_a2 = c2.richItemRenderer) === null || _a2 === undefined ? undefined : _a2.content) || c2;
      })) || [];
    }
  }
  exports.BaseChannelParser = BaseChannelParser;
  BaseChannelParser.TAB_TYPE_PARAMS = {
    videos: "EgZ2aWRlb3PyBgQKAjoA",
    shorts: "EgZzaG9ydHPyBgUKA5oBAA%3D%3D",
    live: "EgdzdHJlYW1z8gYECgJ6AA%3D%3D",
    playlists: "EglwbGF5bGlzdHPyBgQKAkIA"
  };
});

// node_modules/youtubei/dist/cjs/youtube/Continuable/Continuable.js
var require_Continuable = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Continuable = undefined;
  var Base_1 = require_Base2();

  class Continuable extends Base_1.Base {
    constructor({ client, strictContinuationCheck }) {
      super(client);
      this.items = [];
      this.strictContinuationCheck = !!strictContinuationCheck;
      if (this.strictContinuationCheck)
        this.continuation = null;
    }
    next(count = 1) {
      return __awaiter(this, undefined, undefined, function* () {
        const newItems = [];
        for (let i2 = 0;i2 < count || count == 0; i2++) {
          if (!this.hasContinuation)
            break;
          const { items, continuation } = yield this.fetch();
          this.continuation = continuation;
          newItems.push(...items);
        }
        this.items.push(...newItems);
        return newItems;
      });
    }
    get hasContinuation() {
      return this.strictContinuationCheck ? this.continuation !== undefined : !!this.continuation;
    }
  }
  exports.Continuable = Continuable;
});

// node_modules/youtubei/dist/cjs/youtube/Continuable/index.js
var require_Continuable2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_Continuable(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/VideoCompact/VideoCompactParser.js
var require_VideoCompactParser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.VideoCompactParser = undefined;
  var common_1 = require_common();
  var BaseChannel_1 = require_BaseChannel2();

  class VideoCompactParser {
    static loadVideoCompact(target, data2) {
      var _a, _b, _c;
      const { videoId, title, headline, lengthText, thumbnail, ownerText, shortBylineText, publishedTimeText, viewCountText, badges, thumbnailOverlays, channelThumbnailSupportedRenderers, detailedMetadataSnippets } = data2;
      target.id = videoId;
      target.title = headline ? headline.simpleText : title.simpleText || ((_a = title.runs[0]) === null || _a === undefined ? undefined : _a.text);
      target.thumbnails = new common_1.Thumbnails().load(thumbnail.thumbnails);
      target.uploadDate = publishedTimeText === null || publishedTimeText === undefined ? undefined : publishedTimeText.simpleText;
      target.description = ((_b = detailedMetadataSnippets === null || detailedMetadataSnippets === undefined ? undefined : detailedMetadataSnippets[0].snippetText.runs) === null || _b === undefined ? undefined : _b.map((r2) => r2.text).join("")) || "";
      target.duration = common_1.getDuration((lengthText === null || lengthText === undefined ? undefined : lengthText.simpleText) || ((_c = thumbnailOverlays === null || thumbnailOverlays === undefined ? undefined : thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer) === null || _c === undefined ? undefined : _c.text.simpleText) || "") || null;
      target.isLive = !!((badges === null || badges === undefined ? undefined : badges[0].metadataBadgeRenderer.style) === "BADGE_STYLE_TYPE_LIVE_NOW");
      if (ownerText || shortBylineText) {
        const browseEndpoint = (ownerText || shortBylineText).runs[0].navigationEndpoint.browseEndpoint;
        if (browseEndpoint) {
          const id = browseEndpoint.browseId;
          const thumbnails = channelThumbnailSupportedRenderers === null || channelThumbnailSupportedRenderers === undefined ? undefined : channelThumbnailSupportedRenderers.channelThumbnailWithLinkRenderer.thumbnail.thumbnails;
          target.channel = new BaseChannel_1.BaseChannel({
            id,
            name: (ownerText || shortBylineText).runs[0].text,
            thumbnails: thumbnails ? new common_1.Thumbnails().load(thumbnails) : undefined,
            client: target.client
          });
        }
      }
      target.viewCount = common_1.stripToInt((viewCountText === null || viewCountText === undefined ? undefined : viewCountText.simpleText) || (viewCountText === null || viewCountText === undefined ? undefined : viewCountText.runs[0].text));
      return target;
    }
  }
  exports.VideoCompactParser = VideoCompactParser;
});

// node_modules/youtubei/dist/cjs/youtube/VideoCompact/VideoCompact.js
var require_VideoCompact = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.VideoCompact = undefined;
  var Base_1 = require_Base2();
  var VideoCompactParser_1 = require_VideoCompactParser();

  class VideoCompact extends Base_1.Base {
    constructor(attr) {
      super(attr.client);
      Object.assign(this, attr);
    }
    get isPrivateOrDeleted() {
      return !this.duration;
    }
    load(data2) {
      VideoCompactParser_1.VideoCompactParser.loadVideoCompact(this, data2);
      return this;
    }
    getVideo() {
      return __awaiter(this, undefined, undefined, function* () {
        return yield this.client.getVideo(this.id);
      });
    }
    getTranscript() {
      return __awaiter(this, undefined, undefined, function* () {
        return this.client.getVideoTranscript(this.id);
      });
    }
  }
  exports.VideoCompact = VideoCompact;
});

// node_modules/youtubei/dist/cjs/youtube/VideoCompact/index.js
var require_VideoCompact2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_VideoCompact(), exports);
  __exportStar(require_VideoCompactParser(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/constants.js
var require_constants2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.COMMENT_END_POINT = exports.WATCH_END_POINT = exports.LIVE_CHAT_END_POINT = exports.I_END_POINT = exports.BASE_URL = exports.INNERTUBE_API_KEY = exports.INNERTUBE_CLIENT_VERSION = exports.INNERTUBE_CLIENT_NAME = undefined;
  exports.INNERTUBE_CLIENT_NAME = "WEB";
  exports.INNERTUBE_CLIENT_VERSION = "2.20201209.01.00";
  exports.INNERTUBE_API_KEY = "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8";
  exports.BASE_URL = "www.youtube.com";
  exports.I_END_POINT = "/youtubei/v1";
  exports.LIVE_CHAT_END_POINT = `${exports.I_END_POINT}/live_chat/get_live_chat`;
  exports.WATCH_END_POINT = "/watch";
  exports.COMMENT_END_POINT = "/comment_service_ajax";
});

// node_modules/youtubei/dist/cjs/youtube/BaseChannel/ChannelLive.js
var require_ChannelLive = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ChannelLive = undefined;
  var common_1 = require_common();
  var Continuable_1 = require_Continuable2();
  var VideoCompact_1 = require_VideoCompact2();
  var constants_1 = require_constants2();
  var BaseChannelParser_1 = require_BaseChannelParser();

  class ChannelLive extends Continuable_1.Continuable {
    constructor({ client, channel }) {
      super({ client, strictContinuationCheck: true });
      this.channel = channel;
    }
    fetch() {
      var _a;
      return __awaiter(this, undefined, undefined, function* () {
        const params = BaseChannelParser_1.BaseChannelParser.TAB_TYPE_PARAMS.live;
        const response = yield this.client.http.post(`${constants_1.I_END_POINT}/browse`, {
          data: { browseId: (_a = this.channel) === null || _a === undefined ? undefined : _a.id, params, continuation: this.continuation }
        });
        const items = BaseChannelParser_1.BaseChannelParser.parseTabData("live", response.data);
        const continuation = common_1.getContinuationFromItems(items);
        const data2 = common_1.mapFilter(items, "videoRenderer");
        return {
          continuation,
          items: data2.map((i2) => new VideoCompact_1.VideoCompact({ client: this.client, channel: this.channel }).load(i2))
        };
      });
    }
  }
  exports.ChannelLive = ChannelLive;
});

// node_modules/youtubei/dist/cjs/youtube/PlaylistCompact/PlaylistCompactParser.js
var require_PlaylistCompactParser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PlaylistCompactParser = undefined;
  var common_1 = require_common();
  var BaseChannel_1 = require_BaseChannel2();

  class PlaylistCompactParser {
    static loadPlaylistCompact(target, data2) {
      var _a;
      const { playlistId, title, thumbnail, shortBylineText, videoCount, videoCountShortText } = data2;
      target.id = playlistId;
      target.title = title.simpleText || title.runs[0].text;
      target.videoCount = common_1.stripToInt(videoCount || videoCountShortText.simpleText) || 0;
      target.thumbnails = new common_1.Thumbnails().load(((_a = data2.thumbnails) === null || _a === undefined ? undefined : _a[0].thumbnails) || thumbnail.thumbnails);
      if (shortBylineText && shortBylineText.simpleText !== "YouTube") {
        const shortByLine = shortBylineText.runs[0];
        target.channel = new BaseChannel_1.BaseChannel({
          id: shortByLine.navigationEndpoint.browseEndpoint.browseId,
          name: shortByLine.text,
          client: target.client
        });
      }
      return target;
    }
  }
  exports.PlaylistCompactParser = PlaylistCompactParser;
});

// node_modules/youtubei/dist/cjs/youtube/PlaylistCompact/PlaylistCompact.js
var require_PlaylistCompact = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PlaylistCompact = undefined;
  var Base_1 = require_Base2();
  var PlaylistCompactParser_1 = require_PlaylistCompactParser();

  class PlaylistCompact extends Base_1.Base {
    constructor(attr) {
      super(attr.client);
      Object.assign(this, attr);
    }
    load(data2) {
      PlaylistCompactParser_1.PlaylistCompactParser.loadPlaylistCompact(this, data2);
      return this;
    }
    getPlaylist() {
      return __awaiter(this, undefined, undefined, function* () {
        return yield this.client.getPlaylist(this.id);
      });
    }
  }
  exports.PlaylistCompact = PlaylistCompact;
});

// node_modules/youtubei/dist/cjs/youtube/PlaylistCompact/index.js
var require_PlaylistCompact2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_PlaylistCompact(), exports);
  __exportStar(require_PlaylistCompactParser(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/BaseChannel/ChannelPlaylists.js
var require_ChannelPlaylists = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ChannelPlaylists = undefined;
  var common_1 = require_common();
  var Continuable_1 = require_Continuable2();
  var PlaylistCompact_1 = require_PlaylistCompact2();
  var constants_1 = require_constants2();
  var BaseChannelParser_1 = require_BaseChannelParser();

  class ChannelPlaylists extends Continuable_1.Continuable {
    constructor({ client, channel }) {
      super({ client, strictContinuationCheck: true });
      this.channel = channel;
    }
    fetch() {
      var _a;
      return __awaiter(this, undefined, undefined, function* () {
        const params = BaseChannelParser_1.BaseChannelParser.TAB_TYPE_PARAMS.playlists;
        const response = yield this.client.http.post(`${constants_1.I_END_POINT}/browse`, {
          data: { browseId: (_a = this.channel) === null || _a === undefined ? undefined : _a.id, params, continuation: this.continuation }
        });
        const items = BaseChannelParser_1.BaseChannelParser.parseTabData("playlists", response.data);
        const continuation = common_1.getContinuationFromItems(items);
        const data2 = common_1.mapFilter(items, "gridPlaylistRenderer");
        return {
          continuation,
          items: data2.map((i2) => new PlaylistCompact_1.PlaylistCompact({ client: this.client, channel: this.channel }).load(i2))
        };
      });
    }
  }
  exports.ChannelPlaylists = ChannelPlaylists;
});

// node_modules/youtubei/dist/cjs/youtube/BaseChannel/ChannelShorts.js
var require_ChannelShorts = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ChannelShorts = undefined;
  var common_1 = require_common();
  var Continuable_1 = require_Continuable2();
  var VideoCompact_1 = require_VideoCompact2();
  var constants_1 = require_constants2();
  var BaseChannelParser_1 = require_BaseChannelParser();

  class ChannelShorts extends Continuable_1.Continuable {
    constructor({ client, channel }) {
      super({ client, strictContinuationCheck: true });
      this.channel = channel;
    }
    fetch() {
      var _a;
      return __awaiter(this, undefined, undefined, function* () {
        const params = BaseChannelParser_1.BaseChannelParser.TAB_TYPE_PARAMS.shorts;
        const response = yield this.client.http.post(`${constants_1.I_END_POINT}/browse`, {
          data: { browseId: (_a = this.channel) === null || _a === undefined ? undefined : _a.id, params, continuation: this.continuation }
        });
        const items = BaseChannelParser_1.BaseChannelParser.parseTabData("shorts", response.data);
        const continuation = common_1.getContinuationFromItems(items);
        const data2 = common_1.mapFilter(items, "reelItemRenderer");
        return {
          continuation,
          items: data2.map((i2) => new VideoCompact_1.VideoCompact({ client: this.client, channel: this.channel }).load(i2))
        };
      });
    }
  }
  exports.ChannelShorts = ChannelShorts;
});

// node_modules/youtubei/dist/cjs/youtube/BaseChannel/ChannelVideos.js
var require_ChannelVideos = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ChannelVideos = undefined;
  var common_1 = require_common();
  var Continuable_1 = require_Continuable2();
  var VideoCompact_1 = require_VideoCompact2();
  var constants_1 = require_constants2();
  var BaseChannelParser_1 = require_BaseChannelParser();

  class ChannelVideos extends Continuable_1.Continuable {
    constructor({ client, channel }) {
      super({ client, strictContinuationCheck: true });
      this.channel = channel;
    }
    fetch() {
      var _a;
      return __awaiter(this, undefined, undefined, function* () {
        const params = BaseChannelParser_1.BaseChannelParser.TAB_TYPE_PARAMS.videos;
        const response = yield this.client.http.post(`${constants_1.I_END_POINT}/browse`, {
          data: { browseId: (_a = this.channel) === null || _a === undefined ? undefined : _a.id, params, continuation: this.continuation }
        });
        const items = BaseChannelParser_1.BaseChannelParser.parseTabData("videos", response.data);
        const continuation = common_1.getContinuationFromItems(items);
        const data2 = common_1.mapFilter(items, "videoRenderer");
        return {
          continuation,
          items: data2.map((i2) => new VideoCompact_1.VideoCompact({ client: this.client, channel: this.channel }).load(i2))
        };
      });
    }
  }
  exports.ChannelVideos = ChannelVideos;
});

// node_modules/youtubei/dist/cjs/youtube/BaseChannel/BaseChannel.js
var require_BaseChannel = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BaseChannel = undefined;
  var Base_1 = require_Base2();
  var BaseChannelParser_1 = require_BaseChannelParser();
  var ChannelLive_1 = require_ChannelLive();
  var ChannelPlaylists_1 = require_ChannelPlaylists();
  var ChannelShorts_1 = require_ChannelShorts();
  var ChannelVideos_1 = require_ChannelVideos();

  class BaseChannel extends Base_1.Base {
    constructor(attr) {
      super(attr.client);
      Object.assign(this, attr);
      this.videos = new ChannelVideos_1.ChannelVideos({ channel: this, client: this.client });
      this.shorts = new ChannelShorts_1.ChannelShorts({ channel: this, client: this.client });
      this.live = new ChannelLive_1.ChannelLive({ channel: this, client: this.client });
      this.playlists = new ChannelPlaylists_1.ChannelPlaylists({ channel: this, client: this.client });
    }
    get url() {
      return `https://www.youtube.com/channel/${this.id}`;
    }
    load(data2) {
      BaseChannelParser_1.BaseChannelParser.loadBaseChannel(this, data2);
      return this;
    }
  }
  exports.BaseChannel = BaseChannel;
});

// node_modules/youtubei/dist/cjs/youtube/BaseChannel/index.js
var require_BaseChannel2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_BaseChannel(), exports);
  __exportStar(require_BaseChannelParser(), exports);
  __exportStar(require_ChannelLive(), exports);
  __exportStar(require_ChannelPlaylists(), exports);
  __exportStar(require_ChannelShorts(), exports);
  __exportStar(require_ChannelVideos(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/BaseVideo/BaseVideoParser.js
var require_BaseVideoParser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BaseVideoParser = undefined;
  var common_1 = require_common();
  var BaseChannel_1 = require_BaseChannel2();
  var PlaylistCompact_1 = require_PlaylistCompact2();
  var VideoCompact_1 = require_VideoCompact2();

  class BaseVideoParser {
    static loadBaseVideo(target, data2) {
      var _a, _b;
      const videoInfo = BaseVideoParser.parseRawData(data2);
      target.id = videoInfo.videoDetails.videoId;
      target.title = videoInfo.videoDetails.title;
      target.uploadDate = videoInfo.dateText.simpleText;
      target.viewCount = +videoInfo.videoDetails.viewCount || null;
      target.isLiveContent = videoInfo.videoDetails.isLiveContent;
      target.thumbnails = new common_1.Thumbnails().load(videoInfo.videoDetails.thumbnail.thumbnails);
      const { title, thumbnail, subscriberCountText } = videoInfo.owner.videoOwnerRenderer;
      target.channel = new BaseChannel_1.BaseChannel({
        client: target.client,
        id: title.runs[0].navigationEndpoint.browseEndpoint.browseId,
        name: title.runs[0].text,
        subscriberCount: subscriberCountText === null || subscriberCountText === undefined ? undefined : subscriberCountText.simpleText,
        thumbnails: new common_1.Thumbnails().load(thumbnail.thumbnails)
      });
      const topLevelButtons = videoInfo.videoActions.menuRenderer.topLevelButtons;
      target.likeCount = common_1.stripToInt(BaseVideoParser.parseButtonRenderer(topLevelButtons[0]));
      target.tags = ((_b = (_a = videoInfo.superTitleLink) === null || _a === undefined ? undefined : _a.runs) === null || _b === undefined ? undefined : _b.map((r2) => r2.text.trim()).filter((t) => t)) || [];
      target.description = videoInfo.videoDetails.shortDescription || "";
      const secondaryContents = data2[3].response.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results;
      if (secondaryContents) {
        target.related.items = BaseVideoParser.parseRelatedFromSecondaryContent(secondaryContents, target.client);
        target.related.continuation = common_1.getContinuationFromItems(secondaryContents);
      }
      return target;
    }
    static parseRelated(data2, client) {
      const secondaryContents = data2.onResponseReceivedEndpoints[0].appendContinuationItemsAction.continuationItems;
      return BaseVideoParser.parseRelatedFromSecondaryContent(secondaryContents, client);
    }
    static parseContinuation(data2) {
      const secondaryContents = data2.onResponseReceivedEndpoints[0].appendContinuationItemsAction.continuationItems;
      return common_1.getContinuationFromItems(secondaryContents);
    }
    static parseRawData(data2) {
      const contents = data2[3].response.contents.twoColumnWatchNextResults.results.results.contents;
      const primaryInfo = contents.find((c2) => ("videoPrimaryInfoRenderer" in c2)).videoPrimaryInfoRenderer;
      const secondaryInfo = contents.find((c2) => ("videoSecondaryInfoRenderer" in c2)).videoSecondaryInfoRenderer;
      const videoDetails = data2[2].playerResponse.videoDetails;
      return Object.assign(Object.assign(Object.assign({}, secondaryInfo), primaryInfo), { videoDetails });
    }
    static parseCompactRenderer(data2, client) {
      if ("compactVideoRenderer" in data2) {
        return new VideoCompact_1.VideoCompact({ client }).load(data2.compactVideoRenderer);
      } else if ("compactRadioRenderer" in data2) {
        return new PlaylistCompact_1.PlaylistCompact({ client }).load(data2.compactRadioRenderer);
      }
    }
    static parseRelatedFromSecondaryContent(secondaryContents, client) {
      return secondaryContents.map((c2) => BaseVideoParser.parseCompactRenderer(c2, client)).filter((c2) => c2 !== undefined);
    }
    static parseButtonRenderer(data2) {
      var _a;
      let buttonRenderer;
      if (!data2.segmentedLikeDislikeButtonRenderer) {
        buttonRenderer = data2.toggleButtonRenderer || data2.buttonRenderer;
      } else {
        const likeButton = data2.segmentedLikeDislikeButtonRenderer.likeButton;
        buttonRenderer = likeButton.toggleButtonRenderer || likeButton.buttonRenderer;
      }
      const accessibilityData = (((_a = buttonRenderer.defaultText) === null || _a === undefined ? undefined : _a.accessibility) || buttonRenderer.accessibilityData).accessibilityData;
      return accessibilityData.label;
    }
  }
  exports.BaseVideoParser = BaseVideoParser;
});

// node_modules/youtubei/dist/cjs/youtube/BaseVideo/VideoRelated.js
var require_VideoRelated = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.VideoRelated = undefined;
  var Continuable_1 = require_Continuable2();
  var constants_1 = require_constants2();
  var BaseVideoParser_1 = require_BaseVideoParser();

  class VideoRelated extends Continuable_1.Continuable {
    constructor({ video, client }) {
      super({ client });
      this.video = video;
    }
    fetch() {
      return __awaiter(this, undefined, undefined, function* () {
        const response = yield this.client.http.post(`${constants_1.I_END_POINT}/next`, {
          data: { continuation: this.continuation }
        });
        const items = BaseVideoParser_1.BaseVideoParser.parseRelated(response.data, this.client);
        const continuation = BaseVideoParser_1.BaseVideoParser.parseContinuation(response.data);
        return {
          continuation,
          items
        };
      });
    }
  }
  exports.VideoRelated = VideoRelated;
});

// node_modules/youtubei/dist/cjs/youtube/BaseVideo/BaseVideo.js
var require_BaseVideo = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BaseVideo = undefined;
  var Base_1 = require_Base2();
  var BaseVideoParser_1 = require_BaseVideoParser();
  var VideoRelated_1 = require_VideoRelated();

  class BaseVideo extends Base_1.Base {
    constructor(attr) {
      super(attr.client);
      Object.assign(this, attr);
      this.related = new VideoRelated_1.VideoRelated({ client: this.client, video: this });
    }
    load(data2) {
      BaseVideoParser_1.BaseVideoParser.loadBaseVideo(this, data2);
      return this;
    }
    get upNext() {
      return this.related.items[0];
    }
  }
  exports.BaseVideo = BaseVideo;
});

// node_modules/youtubei/dist/cjs/youtube/BaseVideo/index.js
var require_BaseVideo2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_BaseVideo(), exports);
  __exportStar(require_BaseVideoParser(), exports);
  __exportStar(require_VideoRelated(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/Channel/ChannelParser.js
var require_ChannelParser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ChannelParser = undefined;
  var common_1 = require_common();
  var BaseChannel_1 = require_BaseChannel2();
  var PlaylistCompact_1 = require_PlaylistCompact2();
  var VideoCompact_1 = require_VideoCompact2();

  class ChannelParser {
    static loadChannel(target, data2) {
      const { channelId, title, avatar, subscriberCountText } = data2.header.c4TabbedHeaderRenderer;
      target.id = channelId;
      target.name = title;
      target.thumbnails = new common_1.Thumbnails().load(avatar.thumbnails);
      target.videoCount = 0;
      target.subscriberCount = subscriberCountText === null || subscriberCountText === undefined ? undefined : subscriberCountText.simpleText;
      const { tvBanner, mobileBanner, banner } = data2.header.c4TabbedHeaderRenderer;
      target.banner = new common_1.Thumbnails().load((banner === null || banner === undefined ? undefined : banner.thumbnails) || []);
      target.tvBanner = new common_1.Thumbnails().load((tvBanner === null || tvBanner === undefined ? undefined : tvBanner.thumbnails) || []);
      target.mobileBanner = new common_1.Thumbnails().load((mobileBanner === null || mobileBanner === undefined ? undefined : mobileBanner.thumbnails) || []);
      target.shelves = ChannelParser.parseShelves(target, data2);
      return target;
    }
    static parseShelves(target, data2) {
      const shelves = [];
      const rawShelves = data2.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents;
      for (const rawShelf of rawShelves) {
        const shelfRenderer = rawShelf.itemSectionRenderer.contents[0].shelfRenderer;
        if (!shelfRenderer)
          continue;
        const { title, content, subtitle } = shelfRenderer;
        if (!content.horizontalListRenderer)
          continue;
        const items = content.horizontalListRenderer.items.map((i2) => {
          if (i2.gridVideoRenderer)
            return new VideoCompact_1.VideoCompact({ client: target.client }).load(i2.gridVideoRenderer);
          if (i2.gridPlaylistRenderer)
            return new PlaylistCompact_1.PlaylistCompact({ client: target.client }).load(i2.gridPlaylistRenderer);
          if (i2.gridChannelRenderer)
            return new BaseChannel_1.BaseChannel({ client: target.client }).load(i2.gridChannelRenderer);
          return;
        }).filter((i2) => i2 !== undefined);
        const shelf = {
          title: title.runs[0].text,
          subtitle: subtitle === null || subtitle === undefined ? undefined : subtitle.simpleText,
          items
        };
        shelves.push(shelf);
      }
      return shelves;
    }
  }
  exports.ChannelParser = ChannelParser;
});

// node_modules/youtubei/dist/cjs/youtube/Channel/Channel.js
var require_Channel = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Channel = undefined;
  var BaseChannel_1 = require_BaseChannel2();
  var ChannelParser_1 = require_ChannelParser();

  class Channel extends BaseChannel_1.BaseChannel {
    constructor(attr) {
      super(attr);
      this.shelves = [];
      Object.assign(this, attr);
    }
    load(data2) {
      ChannelParser_1.ChannelParser.loadChannel(this, data2);
      return this;
    }
  }
  exports.Channel = Channel;
});

// node_modules/youtubei/dist/cjs/youtube/Channel/index.js
var require_Channel2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_Channel(), exports);
  __exportStar(require_ChannelParser(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/Chat/ChatParser.js
var require_ChatParser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ChatParser = undefined;
  var BaseChannel_1 = require_BaseChannel2();

  class ChatParser {
    static loadChat(target, data2) {
      const { id, message, authorName, authorPhoto, timestampUsec, authorExternalChannelId } = data2;
      target.id = id;
      target.message = message.runs.map((r2) => r2.text).join("");
      target.author = new BaseChannel_1.BaseChannel({
        id: authorExternalChannelId,
        name: authorName.simpleText,
        thumbnails: authorPhoto.thumbnails,
        client: target.client
      });
      target.timestamp = +timestampUsec;
      return target;
    }
  }
  exports.ChatParser = ChatParser;
});

// node_modules/youtubei/dist/cjs/youtube/Chat/Chat.js
var require_Chat = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Chat = undefined;
  var Base_1 = require_Base2();
  var ChatParser_1 = require_ChatParser();

  class Chat extends Base_1.Base {
    constructor(attr) {
      super(attr.client);
      Object.assign(this, attr);
    }
    load(data2) {
      ChatParser_1.ChatParser.loadChat(this, data2);
      return this;
    }
  }
  exports.Chat = Chat;
});

// node_modules/youtubei/dist/cjs/youtube/Chat/index.js
var require_Chat2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_Chat(), exports);
  __exportStar(require_ChatParser(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/LiveVideo/LiveVideoParser.js
var require_LiveVideoParser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.LiveVideoParser = undefined;
  var BaseVideo_1 = require_BaseVideo2();

  class LiveVideoParser {
    static loadLiveVideo(target, data2) {
      var _a;
      const videoInfo = BaseVideo_1.BaseVideoParser.parseRawData(data2);
      target.watchingCount = +videoInfo.viewCount.videoViewCountRenderer.viewCount.runs.map((r2) => r2.text).join(" ").replace(/[^0-9]/g, "");
      target.chatContinuation = (_a = data2[3].response.contents.twoColumnWatchNextResults.conversationBar.liveChatRenderer) === null || _a === undefined ? undefined : _a.continuations[0].reloadContinuationData.continuation;
      return target;
    }
    static parseChats(data2) {
      var _a;
      return ((_a = data2.continuationContents.liveChatContinuation.actions) === null || _a === undefined ? undefined : _a.flatMap((a2) => {
        var _a2;
        return ((_a2 = a2.addChatItemAction) === null || _a2 === undefined ? undefined : _a2.item.liveChatTextMessageRenderer) || [];
      })) || [];
    }
    static parseContinuation(data2) {
      const continuation = data2.continuationContents.liveChatContinuation.continuations[0];
      const continuationData = continuation.timedContinuationData || continuation.invalidationContinuationData;
      return {
        timeout: continuationData.timeoutMs,
        continuation: continuationData.continuation
      };
    }
  }
  exports.LiveVideoParser = LiveVideoParser;
});

// node_modules/youtubei/dist/cjs/youtube/LiveVideo/LiveVideo.js
var require_LiveVideo = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.LiveVideo = undefined;
  var events_1 = import.meta.require("node:events");
  var common_1 = require_common();
  var BaseVideo_1 = require_BaseVideo2();
  var Chat_1 = require_Chat2();
  var constants_1 = require_constants2();
  var LiveVideoParser_1 = require_LiveVideoParser();

  class LiveVideo extends BaseVideo_1.BaseVideo {
    constructor(attr) {
      super(attr);
      this._delay = 0;
      this._timeoutMs = 0;
      this._isChatPlaying = false;
      this._chatQueue = [];
      Object.assign(this, attr);
    }
    load(data2) {
      super.load(data2);
      LiveVideoParser_1.LiveVideoParser.loadLiveVideo(this, data2);
      return this;
    }
    playChat(delay = 0) {
      if (this._isChatPlaying)
        return;
      this._delay = delay;
      this._isChatPlaying = true;
      this.pollChatContinuation();
    }
    stopChat() {
      if (!this._chatRequestPoolingTimeout)
        return;
      this._isChatPlaying = false;
      clearTimeout(this._chatRequestPoolingTimeout);
    }
    pollChatContinuation() {
      return __awaiter(this, undefined, undefined, function* () {
        const response = yield this.client.http.post(constants_1.LIVE_CHAT_END_POINT, {
          data: { continuation: this.chatContinuation }
        });
        if (!response.data.continuationContents)
          return;
        const chats = LiveVideoParser_1.LiveVideoParser.parseChats(response.data);
        for (const c2 of chats) {
          const chat = new Chat_1.Chat({ client: this.client }).load(c2);
          if (this._chatQueue.find((c3) => c3.id === chat.id))
            continue;
          this._chatQueue.push(chat);
          const timeout2 = chat.timestamp / 1000 - (new Date().getTime() - this._delay);
          setTimeout(() => this.emit("chat", chat), timeout2);
        }
        const { timeout, continuation } = LiveVideoParser_1.LiveVideoParser.parseContinuation(response.data);
        this._timeoutMs = timeout;
        this.chatContinuation = continuation;
        this._chatRequestPoolingTimeout = setTimeout(() => this.pollChatContinuation(), this._timeoutMs);
      });
    }
  }
  exports.LiveVideo = LiveVideo;
  common_1.applyMixins(LiveVideo, [events_1.EventEmitter]);
});

// node_modules/youtubei/dist/cjs/youtube/LiveVideo/index.js
var require_LiveVideo2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_LiveVideo(), exports);
  __exportStar(require_LiveVideoParser(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/MixPlaylist/MixPlaylistParser.js
var require_MixPlaylistParser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MixPlaylistParser = undefined;
  var VideoCompact_1 = require_VideoCompact2();

  class MixPlaylistParser {
    static loadMixPlaylist(target, data2) {
      const twoColumnWatchNextResults = data2.contents.twoColumnWatchNextResults;
      const playlist = twoColumnWatchNextResults.playlist.playlist;
      target.title = playlist.titleText.simpleText;
      target.id = playlist.playlistId;
      target.videoCount = playlist.contents.length;
      target.videos = MixPlaylistParser.parseVideos(playlist.contents, target.client);
      return target;
    }
    static parseVideos(data2, client) {
      const videosRenderer = data2.map((c2) => c2.playlistPanelVideoRenderer);
      const videos = [];
      for (const videoRenderer of videosRenderer) {
        if (!videoRenderer)
          continue;
        const video = new VideoCompact_1.VideoCompact({ client }).load(videoRenderer);
        videos.push(video);
      }
      return videos;
    }
  }
  exports.MixPlaylistParser = MixPlaylistParser;
});

// node_modules/youtubei/dist/cjs/youtube/MixPlaylist/MixPlaylist.js
var require_MixPlaylist = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MixPlaylist = undefined;
  var Base_1 = require_Base2();
  var MixPlaylistParser_1 = require_MixPlaylistParser();

  class MixPlaylist extends Base_1.Base {
    constructor(attr) {
      super(attr.client);
      this.videos = [];
      Object.assign(this, attr);
    }
    load(data2) {
      MixPlaylistParser_1.MixPlaylistParser.loadMixPlaylist(this, data2);
      return this;
    }
  }
  exports.MixPlaylist = MixPlaylist;
});

// node_modules/youtubei/dist/cjs/youtube/MixPlaylist/index.js
var require_MixPlaylist2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_MixPlaylist(), exports);
  __exportStar(require_MixPlaylistParser(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/Playlist/PlaylistParser.js
var require_PlaylistParser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PlaylistParser = undefined;
  var common_1 = require_common();
  var BaseChannel_1 = require_BaseChannel2();
  var VideoCompact_1 = require_VideoCompact2();

  class PlaylistParser {
    static loadPlaylist(target, data2) {
      var _a, _b, _c;
      const sidebarRenderer = data2.sidebar.playlistSidebarRenderer.items;
      const primaryRenderer = sidebarRenderer[0].playlistSidebarPrimaryInfoRenderer;
      const metadata = data2.metadata.playlistMetadataRenderer;
      target.id = (_a = Object.values(metadata).find((v) => v.includes("playlist?list="))) === null || _a === undefined ? undefined : _a.split("=")[1];
      target.title = metadata.title;
      target.thumbnails = new common_1.Thumbnails().load(primaryRenderer.thumbnailRenderer.playlistVideoThumbnailRenderer.thumbnail.thumbnails);
      const { stats } = primaryRenderer;
      if (primaryRenderer.stats.length === 3) {
        target.videoCount = PlaylistParser.parseSideBarInfo(stats[0], true);
        target.viewCount = PlaylistParser.parseSideBarInfo(stats[1], true);
        target.lastUpdatedAt = PlaylistParser.parseSideBarInfo(stats[2], false);
      } else if (stats.length === 2) {
        target.videoCount = PlaylistParser.parseSideBarInfo(stats[0], true);
        target.lastUpdatedAt = PlaylistParser.parseSideBarInfo(stats[1], false);
      }
      const playlistContents = ((_b = data2.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer) === null || _b === undefined ? undefined : _b.contents) || [];
      const videoOwner = (_c = sidebarRenderer[1]) === null || _c === undefined ? undefined : _c.playlistSidebarSecondaryInfoRenderer.videoOwner;
      if (videoOwner) {
        const { title, thumbnail } = videoOwner.videoOwnerRenderer;
        target.channel = new BaseChannel_1.BaseChannel({
          id: title.runs[0].navigationEndpoint.browseEndpoint.browseId,
          name: title.runs[0].text,
          thumbnails: new common_1.Thumbnails().load(thumbnail.thumbnails),
          client: target.client
        });
      }
      target.videos.items = PlaylistParser.parseVideos(playlistContents, target);
      target.videos.continuation = common_1.getContinuationFromItems(playlistContents);
      return target;
    }
    static parseVideoContinuation(data2) {
      const playlistContents = data2.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems;
      return common_1.getContinuationFromItems(playlistContents);
    }
    static parseContinuationVideos(data2, client) {
      const playlistContents = data2.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems;
      const videos = common_1.mapFilter(playlistContents, "playlistVideoRenderer");
      return videos.map((video) => new VideoCompact_1.VideoCompact({ client }).load(video));
    }
    static parseVideos(playlistContents, playlist) {
      const videosRenderer = playlistContents.map((c2) => c2.playlistVideoRenderer);
      const videos = [];
      for (const videoRenderer of videosRenderer) {
        if (!videoRenderer)
          continue;
        const video = new VideoCompact_1.VideoCompact({ client: playlist.client }).load(videoRenderer);
        videos.push(video);
      }
      return videos;
    }
    static parseSideBarInfo(stats, parseInt2) {
      let data2;
      if ("runs" in stats)
        data2 = stats.runs.map((r2) => r2.text).join("");
      else
        data2 = stats.simpleText.replace(/[^0-9]/g, "");
      if (parseInt2)
        data2 = +data2.replace(/[^0-9]/g, "");
      return data2;
    }
  }
  exports.PlaylistParser = PlaylistParser;
});

// node_modules/youtubei/dist/cjs/youtube/Playlist/PlaylistVideos.js
var require_PlaylistVideos = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PlaylistVideos = undefined;
  var Continuable_1 = require_Continuable2();
  var constants_1 = require_constants2();
  var PlaylistParser_1 = require_PlaylistParser();

  class PlaylistVideos extends Continuable_1.Continuable {
    constructor({ client, playlist }) {
      super({ client, strictContinuationCheck: true });
      this.playlist = playlist;
    }
    fetch() {
      return __awaiter(this, undefined, undefined, function* () {
        const response = yield this.client.http.post(`${constants_1.I_END_POINT}/browse`, {
          data: { continuation: this.continuation }
        });
        const items = PlaylistParser_1.PlaylistParser.parseContinuationVideos(response.data, this.client);
        const continuation = PlaylistParser_1.PlaylistParser.parseVideoContinuation(response.data);
        return { continuation, items };
      });
    }
  }
  exports.PlaylistVideos = PlaylistVideos;
});

// node_modules/youtubei/dist/cjs/youtube/Playlist/Playlist.js
var require_Playlist = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Playlist = undefined;
  var Base_1 = require_Base2();
  var PlaylistParser_1 = require_PlaylistParser();
  var PlaylistVideos_1 = require_PlaylistVideos();

  class Playlist extends Base_1.Base {
    constructor(attr) {
      super(attr.client);
      Object.assign(this, attr);
      this.videos = new PlaylistVideos_1.PlaylistVideos({ client: attr.client, playlist: this });
    }
    load(data2) {
      PlaylistParser_1.PlaylistParser.loadPlaylist(this, data2);
      return this;
    }
  }
  exports.Playlist = Playlist;
});

// node_modules/youtubei/dist/cjs/youtube/Playlist/index.js
var require_Playlist2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_Playlist(), exports);
  __exportStar(require_PlaylistParser(), exports);
  __exportStar(require_PlaylistVideos(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/SearchResult/SearchResultParser.js
var require_SearchResultParser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SearchResultParser = undefined;
  var common_1 = require_common();
  var BaseChannel_1 = require_BaseChannel2();
  var PlaylistCompact_1 = require_PlaylistCompact2();
  var VideoCompact_1 = require_VideoCompact2();

  class SearchResultParser {
    static parseInitialSearchResult(data2, client) {
      const sectionListContents = data2.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents;
      return {
        data: SearchResultParser.parseSearchResult(sectionListContents, client),
        continuation: common_1.getContinuationFromItems(sectionListContents)
      };
    }
    static parseContinuationSearchResult(data2, client) {
      const sectionListContents = data2.onResponseReceivedCommands[0].appendContinuationItemsAction.continuationItems;
      return {
        data: SearchResultParser.parseSearchResult(sectionListContents, client),
        continuation: common_1.getContinuationFromItems(sectionListContents)
      };
    }
    static parseSearchResult(sectionListContents, client) {
      const rawContents = sectionListContents.filter((c2) => ("itemSectionRenderer" in c2)).at(-1).itemSectionRenderer.contents;
      const contents = [];
      for (const c2 of rawContents) {
        if ("playlistRenderer" in c2)
          contents.push(new PlaylistCompact_1.PlaylistCompact({ client }).load(c2.playlistRenderer));
        else if ("videoRenderer" in c2)
          contents.push(new VideoCompact_1.VideoCompact({ client }).load(c2.videoRenderer));
        else if ("channelRenderer" in c2)
          contents.push(new BaseChannel_1.BaseChannel({ client }).load(c2.channelRenderer));
      }
      return contents;
    }
  }
  exports.SearchResultParser = SearchResultParser;
});

// node_modules/@protobufjs/aspromise/index.js
var require_aspromise = __commonJS((exports, module) => {
  var asPromise = function(fn, ctx) {
    var params = new Array(arguments.length - 1), offset = 0, index = 2, pending = true;
    while (index < arguments.length)
      params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
      params[offset] = function callback(err) {
        if (pending) {
          pending = false;
          if (err)
            reject(err);
          else {
            var params2 = new Array(arguments.length - 1), offset2 = 0;
            while (offset2 < params2.length)
              params2[offset2++] = arguments[offset2];
            resolve.apply(null, params2);
          }
        }
      };
      try {
        fn.apply(ctx || null, params);
      } catch (err) {
        if (pending) {
          pending = false;
          reject(err);
        }
      }
    });
  };
  module.exports = asPromise;
});

// node_modules/@protobufjs/base64/index.js
var require_base64 = __commonJS((exports) => {
  var base64 = exports;
  base64.length = function length(string) {
    var p2 = string.length;
    if (!p2)
      return 0;
    var n = 0;
    while (--p2 % 4 > 1 && string.charAt(p2) === "=")
      ++n;
    return Math.ceil(string.length * 3) / 4 - n;
  };
  var b64 = new Array(64);
  var s64 = new Array(123);
  for (i2 = 0;i2 < 64; )
    s64[b64[i2] = i2 < 26 ? i2 + 65 : i2 < 52 ? i2 + 71 : i2 < 62 ? i2 - 4 : i2 - 59 | 43] = i2++;
  var i2;
  base64.encode = function encode(buffer, start, end) {
    var parts = null, chunk = [];
    var i3 = 0, j = 0, t;
    while (start < end) {
      var b2 = buffer[start++];
      switch (j) {
        case 0:
          chunk[i3++] = b64[b2 >> 2];
          t = (b2 & 3) << 4;
          j = 1;
          break;
        case 1:
          chunk[i3++] = b64[t | b2 >> 4];
          t = (b2 & 15) << 2;
          j = 2;
          break;
        case 2:
          chunk[i3++] = b64[t | b2 >> 6];
          chunk[i3++] = b64[b2 & 63];
          j = 0;
          break;
      }
      if (i3 > 8191) {
        (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
        i3 = 0;
      }
    }
    if (j) {
      chunk[i3++] = b64[t];
      chunk[i3++] = 61;
      if (j === 1)
        chunk[i3++] = 61;
    }
    if (parts) {
      if (i3)
        parts.push(String.fromCharCode.apply(String, chunk.slice(0, i3)));
      return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i3));
  };
  var invalidEncoding = "invalid encoding";
  base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, t;
    for (var i3 = 0;i3 < string.length; ) {
      var c2 = string.charCodeAt(i3++);
      if (c2 === 61 && j > 1)
        break;
      if ((c2 = s64[c2]) === undefined)
        throw Error(invalidEncoding);
      switch (j) {
        case 0:
          t = c2;
          j = 1;
          break;
        case 1:
          buffer[offset++] = t << 2 | (c2 & 48) >> 4;
          t = c2;
          j = 2;
          break;
        case 2:
          buffer[offset++] = (t & 15) << 4 | (c2 & 60) >> 2;
          t = c2;
          j = 3;
          break;
        case 3:
          buffer[offset++] = (t & 3) << 6 | c2;
          j = 0;
          break;
      }
    }
    if (j === 1)
      throw Error(invalidEncoding);
    return offset - start;
  };
  base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
  };
});

// node_modules/@protobufjs/eventemitter/index.js
var require_eventemitter = __commonJS((exports, module) => {
  var EventEmitter = function() {
    this._listeners = {};
  };
  module.exports = EventEmitter;
  EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
      fn,
      ctx: ctx || this
    });
    return this;
  };
  EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
      this._listeners = {};
    else {
      if (fn === undefined)
        this._listeners[evt] = [];
      else {
        var listeners = this._listeners[evt];
        for (var i2 = 0;i2 < listeners.length; )
          if (listeners[i2].fn === fn)
            listeners.splice(i2, 1);
          else
            ++i2;
      }
    }
    return this;
  };
  EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
      var args = [], i2 = 1;
      for (;i2 < arguments.length; )
        args.push(arguments[i2++]);
      for (i2 = 0;i2 < listeners.length; )
        listeners[i2].fn.apply(listeners[i2++].ctx, args);
    }
    return this;
  };
});

// node_modules/@protobufjs/float/index.js
var require_float = __commonJS((exports, module) => {
  var factory = function(exports2) {
    if (typeof Float32Array !== "undefined")
      (function() {
        var f32 = new Float32Array([-0]), f8b = new Uint8Array(f32.buffer), le = f8b[3] === 128;
        function writeFloat_f32_cpy(val, buf, pos) {
          f32[0] = val;
          buf[pos] = f8b[0];
          buf[pos + 1] = f8b[1];
          buf[pos + 2] = f8b[2];
          buf[pos + 3] = f8b[3];
        }
        function writeFloat_f32_rev(val, buf, pos) {
          f32[0] = val;
          buf[pos] = f8b[3];
          buf[pos + 1] = f8b[2];
          buf[pos + 2] = f8b[1];
          buf[pos + 3] = f8b[0];
        }
        exports2.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        exports2.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
        function readFloat_f32_cpy(buf, pos) {
          f8b[0] = buf[pos];
          f8b[1] = buf[pos + 1];
          f8b[2] = buf[pos + 2];
          f8b[3] = buf[pos + 3];
          return f32[0];
        }
        function readFloat_f32_rev(buf, pos) {
          f8b[3] = buf[pos];
          f8b[2] = buf[pos + 1];
          f8b[1] = buf[pos + 2];
          f8b[0] = buf[pos + 3];
          return f32[0];
        }
        exports2.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        exports2.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
      })();
    else
      (function() {
        function writeFloat_ieee754(writeUint, val, buf, pos) {
          var sign = val < 0 ? 1 : 0;
          if (sign)
            val = -val;
          if (val === 0)
            writeUint(1 / val > 0 ? 0 : 2147483648, buf, pos);
          else if (isNaN(val))
            writeUint(2143289344, buf, pos);
          else if (val > 340282346638528860000000000000000000000)
            writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
          else if (val < 0.000000000000000000000000000000000000011754943508222875)
            writeUint((sign << 31 | Math.round(val / 0.000000000000000000000000000000000000000000001401298464324817)) >>> 0, buf, pos);
          else {
            var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
            writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
          }
        }
        exports2.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports2.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
        function readFloat_ieee754(readUint, buf, pos) {
          var uint = readUint(buf, pos), sign = (uint >> 31) * 2 + 1, exponent = uint >>> 23 & 255, mantissa = uint & 8388607;
          return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 0.000000000000000000000000000000000000000000001401298464324817 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }
        exports2.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports2.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
      })();
    if (typeof Float64Array !== "undefined")
      (function() {
        var f64 = new Float64Array([-0]), f8b = new Uint8Array(f64.buffer), le = f8b[7] === 128;
        function writeDouble_f64_cpy(val, buf, pos) {
          f64[0] = val;
          buf[pos] = f8b[0];
          buf[pos + 1] = f8b[1];
          buf[pos + 2] = f8b[2];
          buf[pos + 3] = f8b[3];
          buf[pos + 4] = f8b[4];
          buf[pos + 5] = f8b[5];
          buf[pos + 6] = f8b[6];
          buf[pos + 7] = f8b[7];
        }
        function writeDouble_f64_rev(val, buf, pos) {
          f64[0] = val;
          buf[pos] = f8b[7];
          buf[pos + 1] = f8b[6];
          buf[pos + 2] = f8b[5];
          buf[pos + 3] = f8b[4];
          buf[pos + 4] = f8b[3];
          buf[pos + 5] = f8b[2];
          buf[pos + 6] = f8b[1];
          buf[pos + 7] = f8b[0];
        }
        exports2.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        exports2.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
        function readDouble_f64_cpy(buf, pos) {
          f8b[0] = buf[pos];
          f8b[1] = buf[pos + 1];
          f8b[2] = buf[pos + 2];
          f8b[3] = buf[pos + 3];
          f8b[4] = buf[pos + 4];
          f8b[5] = buf[pos + 5];
          f8b[6] = buf[pos + 6];
          f8b[7] = buf[pos + 7];
          return f64[0];
        }
        function readDouble_f64_rev(buf, pos) {
          f8b[7] = buf[pos];
          f8b[6] = buf[pos + 1];
          f8b[5] = buf[pos + 2];
          f8b[4] = buf[pos + 3];
          f8b[3] = buf[pos + 4];
          f8b[2] = buf[pos + 5];
          f8b[1] = buf[pos + 6];
          f8b[0] = buf[pos + 7];
          return f64[0];
        }
        exports2.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        exports2.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
      })();
    else
      (function() {
        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
          var sign = val < 0 ? 1 : 0;
          if (sign)
            val = -val;
          if (val === 0) {
            writeUint(0, buf, pos + off0);
            writeUint(1 / val > 0 ? 0 : 2147483648, buf, pos + off1);
          } else if (isNaN(val)) {
            writeUint(0, buf, pos + off0);
            writeUint(2146959360, buf, pos + off1);
          } else if (val > 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
            writeUint(0, buf, pos + off0);
            writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
          } else {
            var mantissa;
            if (val < 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022250738585072014) {
              mantissa = val / 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005;
              writeUint(mantissa >>> 0, buf, pos + off0);
              writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
            } else {
              var exponent = Math.floor(Math.log(val) / Math.LN2);
              if (exponent === 1024)
                exponent = 1023;
              mantissa = val * Math.pow(2, -exponent);
              writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
              writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
            }
          }
        }
        exports2.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports2.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
          var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
          var sign = (hi >> 31) * 2 + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (hi & 1048575) + lo;
          return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }
        exports2.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports2.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
      })();
    return exports2;
  };
  var writeUintLE = function(val, buf, pos) {
    buf[pos] = val & 255;
    buf[pos + 1] = val >>> 8 & 255;
    buf[pos + 2] = val >>> 16 & 255;
    buf[pos + 3] = val >>> 24;
  };
  var writeUintBE = function(val, buf, pos) {
    buf[pos] = val >>> 24;
    buf[pos + 1] = val >>> 16 & 255;
    buf[pos + 2] = val >>> 8 & 255;
    buf[pos + 3] = val & 255;
  };
  var readUintLE = function(buf, pos) {
    return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
  };
  var readUintBE = function(buf, pos) {
    return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
  };
  module.exports = factory(factory);
});

// node_modules/@protobufjs/inquire/index.js
var require_inquire = __commonJS((exports, module) => {
  var inquire = function(moduleName) {
    try {
      var mod = (0, eval)("quire".replace(/^/, "re"))(moduleName);
      if (mod && (mod.length || Object.keys(mod).length))
        return mod;
    } catch (e) {
    }
    return null;
  };
  module.exports = inquire;
});

// node_modules/@protobufjs/utf8/index.js
var require_utf8 = __commonJS((exports) => {
  var utf8 = exports;
  utf8.length = function utf8_length(string) {
    var len = 0, c2 = 0;
    for (var i2 = 0;i2 < string.length; ++i2) {
      c2 = string.charCodeAt(i2);
      if (c2 < 128)
        len += 1;
      else if (c2 < 2048)
        len += 2;
      else if ((c2 & 64512) === 55296 && (string.charCodeAt(i2 + 1) & 64512) === 56320) {
        ++i2;
        len += 4;
      } else
        len += 3;
    }
    return len;
  };
  utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
      return "";
    var parts = null, chunk = [], i2 = 0, t;
    while (start < end) {
      t = buffer[start++];
      if (t < 128)
        chunk[i2++] = t;
      else if (t > 191 && t < 224)
        chunk[i2++] = (t & 31) << 6 | buffer[start++] & 63;
      else if (t > 239 && t < 365) {
        t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 65536;
        chunk[i2++] = 55296 + (t >> 10);
        chunk[i2++] = 56320 + (t & 1023);
      } else
        chunk[i2++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
      if (i2 > 8191) {
        (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
        i2 = 0;
      }
    }
    if (parts) {
      if (i2)
        parts.push(String.fromCharCode.apply(String, chunk.slice(0, i2)));
      return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i2));
  };
  utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset, c1, c2;
    for (var i2 = 0;i2 < string.length; ++i2) {
      c1 = string.charCodeAt(i2);
      if (c1 < 128) {
        buffer[offset++] = c1;
      } else if (c1 < 2048) {
        buffer[offset++] = c1 >> 6 | 192;
        buffer[offset++] = c1 & 63 | 128;
      } else if ((c1 & 64512) === 55296 && ((c2 = string.charCodeAt(i2 + 1)) & 64512) === 56320) {
        c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
        ++i2;
        buffer[offset++] = c1 >> 18 | 240;
        buffer[offset++] = c1 >> 12 & 63 | 128;
        buffer[offset++] = c1 >> 6 & 63 | 128;
        buffer[offset++] = c1 & 63 | 128;
      } else {
        buffer[offset++] = c1 >> 12 | 224;
        buffer[offset++] = c1 >> 6 & 63 | 128;
        buffer[offset++] = c1 & 63 | 128;
      }
    }
    return offset - start;
  };
});

// node_modules/@protobufjs/pool/index.js
var require_pool = __commonJS((exports, module) => {
  var pool = function(alloc, slice, size) {
    var SIZE = size || 8192;
    var MAX = SIZE >>> 1;
    var slab = null;
    var offset = SIZE;
    return function pool_alloc(size2) {
      if (size2 < 1 || size2 > MAX)
        return alloc(size2);
      if (offset + size2 > SIZE) {
        slab = alloc(SIZE);
        offset = 0;
      }
      var buf = slice.call(slab, offset, offset += size2);
      if (offset & 7)
        offset = (offset | 7) + 1;
      return buf;
    };
  };
  module.exports = pool;
});

// node_modules/protobufjs/src/util/longbits.js
var require_longbits = __commonJS((exports, module) => {
  var LongBits = function(lo, hi) {
    this.lo = lo >>> 0;
    this.hi = hi >>> 0;
  };
  module.exports = LongBits;
  var util = require_minimal();
  var zero = LongBits.zero = new LongBits(0, 0);
  zero.toNumber = function() {
    return 0;
  };
  zero.zzEncode = zero.zzDecode = function() {
    return this;
  };
  zero.length = function() {
    return 1;
  };
  var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
  LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
      return zero;
    var sign = value < 0;
    if (sign)
      value = -value;
    var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
      hi = ~hi >>> 0;
      lo = ~lo >>> 0;
      if (++lo > 4294967295) {
        lo = 0;
        if (++hi > 4294967295)
          hi = 0;
      }
    }
    return new LongBits(lo, hi);
  };
  LongBits.from = function from(value) {
    if (typeof value === "number")
      return LongBits.fromNumber(value);
    if (util.isString(value)) {
      if (util.Long)
        value = util.Long.fromString(value);
      else
        return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
  };
  LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
      var lo = ~this.lo + 1 >>> 0, hi = ~this.hi >>> 0;
      if (!lo)
        hi = hi + 1 >>> 0;
      return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  };
  LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned)) : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
  };
  var charCodeAt = String.prototype.charCodeAt;
  LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
      return zero;
    return new LongBits((charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0, (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0);
  };
  LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
  };
  LongBits.prototype.zzEncode = function zzEncode() {
    var mask = this.hi >> 31;
    this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo = (this.lo << 1 ^ mask) >>> 0;
    return this;
  };
  LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi = (this.hi >>> 1 ^ mask) >>> 0;
    return this;
  };
  LongBits.prototype.length = function length() {
    var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
    return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
  };
});

// node_modules/protobufjs/src/util/minimal.js
var require_minimal = __commonJS((exports) => {
  var merge = function(dst, src, ifNotSet) {
    for (var keys = Object.keys(src), i2 = 0;i2 < keys.length; ++i2)
      if (dst[keys[i2]] === undefined || !ifNotSet)
        dst[keys[i2]] = src[keys[i2]];
    return dst;
  };
  var newError = function(name) {
    function CustomError(message, properties) {
      if (!(this instanceof CustomError))
        return new CustomError(message, properties);
      Object.defineProperty(this, "message", { get: function() {
        return message;
      } });
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, CustomError);
      else
        Object.defineProperty(this, "stack", { value: new Error().stack || "" });
      if (properties)
        merge(this, properties);
    }
    CustomError.prototype = Object.create(Error.prototype, {
      constructor: {
        value: CustomError,
        writable: true,
        enumerable: false,
        configurable: true
      },
      name: {
        get: function get() {
          return name;
        },
        set: undefined,
        enumerable: false,
        configurable: true
      },
      toString: {
        value: function value() {
          return this.name + ": " + this.message;
        },
        writable: true,
        enumerable: false,
        configurable: true
      }
    });
    return CustomError;
  };
  var util = exports;
  util.asPromise = require_aspromise();
  util.base64 = require_base64();
  util.EventEmitter = require_eventemitter();
  util.float = require_float();
  util.inquire = require_inquire();
  util.utf8 = require_utf8();
  util.pool = require_pool();
  util.LongBits = require_longbits();
  util.isNode = Boolean(typeof global !== "undefined" && global && global.process && global.process.versions && global.process.versions.node);
  util.global = util.isNode && global || typeof window !== "undefined" && window || typeof self !== "undefined" && self || exports;
  util.emptyArray = Object.freeze ? Object.freeze([]) : [];
  util.emptyObject = Object.freeze ? Object.freeze({}) : {};
  util.isInteger = Number.isInteger || function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
  };
  util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
  };
  util.isObject = function isObject(value) {
    return value && typeof value === "object";
  };
  util.isset = util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop))
      return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
  };
  util.Buffer = function() {
    try {
      var Buffer2 = util.inquire("buffer").Buffer;
      return Buffer2.prototype.utf8Write ? Buffer2 : null;
    } catch (e) {
      return null;
    }
  }();
  util._Buffer_from = null;
  util._Buffer_allocUnsafe = null;
  util.newBuffer = function newBuffer(sizeOrArray) {
    return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
  };
  util.Array = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  util.Long = util.global.dcodeIO && util.global.dcodeIO.Long || util.global.Long || util.inquire("long");
  util.key2Re = /^true|false|0|1$/;
  util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
  util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
  util.longToHash = function longToHash(value) {
    return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
  };
  util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
      return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
  };
  util.merge = merge;
  util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
  };
  util.newError = newError;
  util.ProtocolError = newError("ProtocolError");
  util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i2 = 0;i2 < fieldNames.length; ++i2)
      fieldMap[fieldNames[i2]] = 1;
    return function() {
      for (var keys = Object.keys(this), i3 = keys.length - 1;i3 > -1; --i3)
        if (fieldMap[keys[i3]] === 1 && this[keys[i3]] !== undefined && this[keys[i3]] !== null)
          return keys[i3];
    };
  };
  util.oneOfSetter = function setOneOf(fieldNames) {
    return function(name) {
      for (var i2 = 0;i2 < fieldNames.length; ++i2)
        if (fieldNames[i2] !== name)
          delete this[fieldNames[i2]];
    };
  };
  util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
  };
  util._configure = function() {
    var Buffer2 = util.Buffer;
    if (!Buffer2) {
      util._Buffer_from = util._Buffer_allocUnsafe = null;
      return;
    }
    util._Buffer_from = Buffer2.from !== Uint8Array.from && Buffer2.from || function Buffer_from(value, encoding) {
      return new Buffer2(value, encoding);
    };
    util._Buffer_allocUnsafe = Buffer2.allocUnsafe || function Buffer_allocUnsafe(size) {
      return new Buffer2(size);
    };
  };
});

// node_modules/protobufjs/src/writer.js
var require_writer = __commonJS((exports, module) => {
  var Op = function(fn, len, val) {
    this.fn = fn;
    this.len = len;
    this.next = undefined;
    this.val = val;
  };
  var noop = function() {
  };
  var State = function(writer) {
    this.head = writer.head;
    this.tail = writer.tail;
    this.len = writer.len;
    this.next = writer.states;
  };
  var Writer = function() {
    this.len = 0;
    this.head = new Op(noop, 0, 0);
    this.tail = this.head;
    this.states = null;
  };
  var writeByte = function(val, buf, pos) {
    buf[pos] = val & 255;
  };
  var writeVarint32 = function(val, buf, pos) {
    while (val > 127) {
      buf[pos++] = val & 127 | 128;
      val >>>= 7;
    }
    buf[pos] = val;
  };
  var VarintOp = function(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
  };
  var writeVarint64 = function(val, buf, pos) {
    while (val.hi) {
      buf[pos++] = val.lo & 127 | 128;
      val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
      val.hi >>>= 7;
    }
    while (val.lo > 127) {
      buf[pos++] = val.lo & 127 | 128;
      val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
  };
  var writeFixed32 = function(val, buf, pos) {
    buf[pos] = val & 255;
    buf[pos + 1] = val >>> 8 & 255;
    buf[pos + 2] = val >>> 16 & 255;
    buf[pos + 3] = val >>> 24;
  };
  module.exports = Writer;
  var util = require_minimal();
  var BufferWriter;
  var LongBits = util.LongBits;
  var base64 = util.base64;
  var utf8 = util.utf8;
  var create = function create() {
    return util.Buffer ? function create_buffer_setup() {
      return (Writer.create = function create_buffer() {
        return new BufferWriter;
      })();
    } : function create_array() {
      return new Writer;
    };
  };
  Writer.create = create();
  Writer.alloc = function alloc(size) {
    return new util.Array(size);
  };
  if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
  Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
  };
  VarintOp.prototype = Object.create(Op.prototype);
  VarintOp.prototype.fn = writeVarint32;
  Writer.prototype.uint32 = function write_uint32(value) {
    this.len += (this.tail = this.tail.next = new VarintOp((value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5, value)).len;
    return this;
  };
  Writer.prototype.int32 = function write_int32(value) {
    return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) : this.uint32(value);
  };
  Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
  };
  Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
  };
  Writer.prototype.int64 = Writer.prototype.uint64;
  Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
  };
  Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
  };
  Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
  };
  Writer.prototype.sfixed32 = Writer.prototype.fixed32;
  Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
  };
  Writer.prototype.sfixed64 = Writer.prototype.fixed64;
  Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
  };
  Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
  };
  var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
    buf.set(val, pos);
  } : function writeBytes_for(val, buf, pos) {
    for (var i2 = 0;i2 < val.length; ++i2)
      buf[pos + i2] = val[i2];
  };
  Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
      return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
      var buf = Writer.alloc(len = base64.length(value));
      base64.decode(value, buf, 0);
      value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
  };
  Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
  };
  Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
  };
  Writer.prototype.reset = function reset() {
    if (this.states) {
      this.head = this.states.head;
      this.tail = this.states.tail;
      this.len = this.states.len;
      this.states = this.states.next;
    } else {
      this.head = this.tail = new Op(noop, 0, 0);
      this.len = 0;
    }
    return this;
  };
  Writer.prototype.ldelim = function ldelim() {
    var head = this.head, tail = this.tail, len = this.len;
    this.reset().uint32(len);
    if (len) {
      this.tail.next = head.next;
      this.tail = tail;
      this.len += len;
    }
    return this;
  };
  Writer.prototype.finish = function finish() {
    var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
    while (head) {
      head.fn(head.val, buf, pos);
      pos += head.len;
      head = head.next;
    }
    return buf;
  };
  Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
    Writer.create = create();
    BufferWriter._configure();
  };
});

// node_modules/protobufjs/src/writer_buffer.js
var require_writer_buffer = __commonJS((exports, module) => {
  var BufferWriter = function() {
    Writer.call(this);
  };
  var writeStringBuffer = function(val, buf, pos) {
    if (val.length < 40)
      util.utf8.write(val, buf, pos);
    else if (buf.utf8Write)
      buf.utf8Write(val, pos);
    else
      buf.write(val, pos);
  };
  module.exports = BufferWriter;
  var Writer = require_writer();
  (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
  var util = require_minimal();
  BufferWriter._configure = function() {
    BufferWriter.alloc = util._Buffer_allocUnsafe;
    BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
      buf.set(val, pos);
    } : function writeBytesBuffer_copy(val, buf, pos) {
      if (val.copy)
        val.copy(buf, pos, 0, val.length);
      else
        for (var i2 = 0;i2 < val.length; )
          buf[pos++] = val[i2++];
    };
  };
  BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
      value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
      this._push(BufferWriter.writeBytesBuffer, len, value);
    return this;
  };
  BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = util.Buffer.byteLength(value);
    this.uint32(len);
    if (len)
      this._push(writeStringBuffer, len, value);
    return this;
  };
  BufferWriter._configure();
});

// node_modules/protobufjs/src/reader.js
var require_reader = __commonJS((exports, module) => {
  var indexOutOfRange = function(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
  };
  var Reader = function(buffer) {
    this.buf = buffer;
    this.pos = 0;
    this.len = buffer.length;
  };
  var readLongVarint = function() {
    var bits = new LongBits(0, 0);
    var i2 = 0;
    if (this.len - this.pos > 4) {
      for (;i2 < 4; ++i2) {
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i2 * 7) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
      }
      bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
      bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
      if (this.buf[this.pos++] < 128)
        return bits;
      i2 = 0;
    } else {
      for (;i2 < 3; ++i2) {
        if (this.pos >= this.len)
          throw indexOutOfRange(this);
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i2 * 7) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
      }
      bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i2 * 7) >>> 0;
      return bits;
    }
    if (this.len - this.pos > 4) {
      for (;i2 < 5; ++i2) {
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i2 * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
      }
    } else {
      for (;i2 < 5; ++i2) {
        if (this.pos >= this.len)
          throw indexOutOfRange(this);
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i2 * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
      }
    }
    throw Error("invalid varint encoding");
  };
  var readFixed32_end = function(buf, end) {
    return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
  };
  var readFixed64 = function() {
    if (this.pos + 8 > this.len)
      throw indexOutOfRange(this, 8);
    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
  };
  module.exports = Reader;
  var util = require_minimal();
  var BufferReader;
  var LongBits = util.LongBits;
  var utf8 = util.utf8;
  var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
    if (buffer instanceof Uint8Array || Array.isArray(buffer))
      return new Reader(buffer);
    throw Error("illegal buffer");
  } : function create_array(buffer) {
    if (Array.isArray(buffer))
      return new Reader(buffer);
    throw Error("illegal buffer");
  };
  var create = function create() {
    return util.Buffer ? function create_buffer_setup(buffer) {
      return (Reader.create = function create_buffer(buffer2) {
        return util.Buffer.isBuffer(buffer2) ? new BufferReader(buffer2) : create_array(buffer2);
      })(buffer);
    } : create_array;
  };
  Reader.create = create();
  Reader.prototype._slice = util.Array.prototype.subarray || util.Array.prototype.slice;
  Reader.prototype.uint32 = function read_uint32_setup() {
    var value = 4294967295;
    return function read_uint32() {
      value = (this.buf[this.pos] & 127) >>> 0;
      if (this.buf[this.pos++] < 128)
        return value;
      value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
      if (this.buf[this.pos++] < 128)
        return value;
      value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
      if (this.buf[this.pos++] < 128)
        return value;
      value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
      if (this.buf[this.pos++] < 128)
        return value;
      value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
      if (this.buf[this.pos++] < 128)
        return value;
      if ((this.pos += 5) > this.len) {
        this.pos = this.len;
        throw indexOutOfRange(this, 10);
      }
      return value;
    };
  }();
  Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
  };
  Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
  };
  Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
  };
  Reader.prototype.fixed32 = function read_fixed32() {
    if (this.pos + 4 > this.len)
      throw indexOutOfRange(this, 4);
    return readFixed32_end(this.buf, this.pos += 4);
  };
  Reader.prototype.sfixed32 = function read_sfixed32() {
    if (this.pos + 4 > this.len)
      throw indexOutOfRange(this, 4);
    return readFixed32_end(this.buf, this.pos += 4) | 0;
  };
  Reader.prototype.float = function read_float() {
    if (this.pos + 4 > this.len)
      throw indexOutOfRange(this, 4);
    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
  };
  Reader.prototype.double = function read_double() {
    if (this.pos + 8 > this.len)
      throw indexOutOfRange(this, 4);
    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
  };
  Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(), start = this.pos, end = this.pos + length;
    if (end > this.len)
      throw indexOutOfRange(this, length);
    this.pos += length;
    if (Array.isArray(this.buf))
      return this.buf.slice(start, end);
    return start === end ? new this.buf.constructor(0) : this._slice.call(this.buf, start, end);
  };
  Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
  };
  Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
      if (this.pos + length > this.len)
        throw indexOutOfRange(this, length);
      this.pos += length;
    } else {
      do {
        if (this.pos >= this.len)
          throw indexOutOfRange(this);
      } while (this.buf[this.pos++] & 128);
    }
    return this;
  };
  Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
      case 0:
        this.skip();
        break;
      case 1:
        this.skip(8);
        break;
      case 2:
        this.skip(this.uint32());
        break;
      case 3:
        while ((wireType = this.uint32() & 7) !== 4) {
          this.skipType(wireType);
        }
        break;
      case 5:
        this.skip(4);
        break;
      default:
        throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
  };
  Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;
    Reader.create = create();
    BufferReader._configure();
    var fn = util.Long ? "toLong" : "toNumber";
    util.merge(Reader.prototype, {
      int64: function read_int64() {
        return readLongVarint.call(this)[fn](false);
      },
      uint64: function read_uint64() {
        return readLongVarint.call(this)[fn](true);
      },
      sint64: function read_sint64() {
        return readLongVarint.call(this).zzDecode()[fn](false);
      },
      fixed64: function read_fixed64() {
        return readFixed64.call(this)[fn](true);
      },
      sfixed64: function read_sfixed64() {
        return readFixed64.call(this)[fn](false);
      }
    });
  };
});

// node_modules/protobufjs/src/reader_buffer.js
var require_reader_buffer = __commonJS((exports, module) => {
  var BufferReader = function(buffer) {
    Reader.call(this, buffer);
  };
  module.exports = BufferReader;
  var Reader = require_reader();
  (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
  var util = require_minimal();
  BufferReader._configure = function() {
    if (util.Buffer)
      BufferReader.prototype._slice = util.Buffer.prototype.slice;
  };
  BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
  };
  BufferReader._configure();
});

// node_modules/protobufjs/src/rpc/service.js
var require_service = __commonJS((exports, module) => {
  var Service = function(rpcImpl, requestDelimited, responseDelimited) {
    if (typeof rpcImpl !== "function")
      throw TypeError("rpcImpl must be a function");
    util.EventEmitter.call(this);
    this.rpcImpl = rpcImpl;
    this.requestDelimited = Boolean(requestDelimited);
    this.responseDelimited = Boolean(responseDelimited);
  };
  module.exports = Service;
  var util = require_minimal();
  (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
  Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
    if (!request)
      throw TypeError("request must be specified");
    var self2 = this;
    if (!callback)
      return util.asPromise(rpcCall, self2, method, requestCtor, responseCtor, request);
    if (!self2.rpcImpl) {
      setTimeout(function() {
        callback(Error("already ended"));
      }, 0);
      return;
    }
    try {
      return self2.rpcImpl(method, requestCtor[self2.requestDelimited ? "encodeDelimited" : "encode"](request).finish(), function rpcCallback(err, response) {
        if (err) {
          self2.emit("error", err, method);
          return callback(err);
        }
        if (response === null) {
          self2.end(true);
          return;
        }
        if (!(response instanceof responseCtor)) {
          try {
            response = responseCtor[self2.responseDelimited ? "decodeDelimited" : "decode"](response);
          } catch (err2) {
            self2.emit("error", err2, method);
            return callback(err2);
          }
        }
        self2.emit("data", response, method);
        return callback(null, response);
      });
    } catch (err) {
      self2.emit("error", err, method);
      setTimeout(function() {
        callback(err);
      }, 0);
      return;
    }
  };
  Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
      if (!endedByRPC)
        this.rpcImpl(null, null, null);
      this.rpcImpl = null;
      this.emit("end").off();
    }
    return this;
  };
});

// node_modules/protobufjs/src/rpc.js
var require_rpc = __commonJS((exports) => {
  var rpc = exports;
  rpc.Service = require_service();
});

// node_modules/protobufjs/src/roots.js
var require_roots = __commonJS((exports, module) => {
  module.exports = {};
});

// node_modules/protobufjs/src/index-minimal.js
var require_index_minimal = __commonJS((exports) => {
  var configure = function() {
    protobuf.util._configure();
    protobuf.Writer._configure(protobuf.BufferWriter);
    protobuf.Reader._configure(protobuf.BufferReader);
  };
  var protobuf = exports;
  protobuf.build = "minimal";
  protobuf.Writer = require_writer();
  protobuf.BufferWriter = require_writer_buffer();
  protobuf.Reader = require_reader();
  protobuf.BufferReader = require_reader_buffer();
  protobuf.util = require_minimal();
  protobuf.rpc = require_rpc();
  protobuf.roots = require_roots();
  protobuf.configure = configure;
  configure();
});

// node_modules/@protobufjs/codegen/index.js
var require_codegen = __commonJS((exports, module) => {
  var codegen = function(functionParams, functionName) {
    if (typeof functionParams === "string") {
      functionName = functionParams;
      functionParams = undefined;
    }
    var body = [];
    function Codegen(formatStringOrScope) {
      if (typeof formatStringOrScope !== "string") {
        var source = toString();
        if (codegen.verbose)
          console.log("codegen: " + source);
        source = "return " + source;
        if (formatStringOrScope) {
          var scopeKeys = Object.keys(formatStringOrScope), scopeParams = new Array(scopeKeys.length + 1), scopeValues = new Array(scopeKeys.length), scopeOffset = 0;
          while (scopeOffset < scopeKeys.length) {
            scopeParams[scopeOffset] = scopeKeys[scopeOffset];
            scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
          }
          scopeParams[scopeOffset] = source;
          return Function.apply(null, scopeParams).apply(null, scopeValues);
        }
        return Function(source)();
      }
      var formatParams = new Array(arguments.length - 1), formatOffset = 0;
      while (formatOffset < formatParams.length)
        formatParams[formatOffset] = arguments[++formatOffset];
      formatOffset = 0;
      formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
        var value = formatParams[formatOffset++];
        switch ($1) {
          case "d":
          case "f":
            return String(Number(value));
          case "i":
            return String(Math.floor(value));
          case "j":
            return JSON.stringify(value);
          case "s":
            return String(value);
        }
        return "%";
      });
      if (formatOffset !== formatParams.length)
        throw Error("parameter count mismatch");
      body.push(formatStringOrScope);
      return Codegen;
    }
    function toString(functionNameOverride) {
      return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
    }
    Codegen.toString = toString;
    return Codegen;
  };
  module.exports = codegen;
  codegen.verbose = false;
});

// node_modules/@protobufjs/fetch/index.js
var require_fetch = __commonJS((exports, module) => {
  var fetch = function(filename2, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = {};
    } else if (!options)
      options = {};
    if (!callback)
      return asPromise(fetch, this, filename2, options);
    if (!options.xhr && fs && fs.readFile)
      return fs.readFile(filename2, function fetchReadFileCallback(err, contents) {
        return err && typeof XMLHttpRequest !== "undefined" ? fetch.xhr(filename2, options, callback) : err ? callback(err) : callback(null, options.binary ? contents : contents.toString("utf8"));
      });
    return fetch.xhr(filename2, options, callback);
  };
  module.exports = fetch;
  var asPromise = require_aspromise();
  var inquire = require_inquire();
  var fs = inquire("fs");
  fetch.xhr = function fetch_xhr(filename2, options, callback) {
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function fetchOnReadyStateChange() {
      if (xhr.readyState !== 4)
        return;
      if (xhr.status !== 0 && xhr.status !== 200)
        return callback(Error("status " + xhr.status));
      if (options.binary) {
        var buffer = xhr.response;
        if (!buffer) {
          buffer = [];
          for (var i2 = 0;i2 < xhr.responseText.length; ++i2)
            buffer.push(xhr.responseText.charCodeAt(i2) & 255);
        }
        return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
      }
      return callback(null, xhr.responseText);
    };
    if (options.binary) {
      if ("overrideMimeType" in xhr)
        xhr.overrideMimeType("text/plain; charset=x-user-defined");
      xhr.responseType = "arraybuffer";
    }
    xhr.open("GET", filename2);
    xhr.send();
  };
});

// node_modules/@protobufjs/path/index.js
var require_path = __commonJS((exports) => {
  var path = exports;
  var isAbsolute = path.isAbsolute = function isAbsolute(path2) {
    return /^(?:\/|\w+:)/.test(path2);
  };
  var normalize = path.normalize = function normalize(path2) {
    path2 = path2.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
    var parts = path2.split("/"), absolute = isAbsolute(path2), prefix = "";
    if (absolute)
      prefix = parts.shift() + "/";
    for (var i2 = 0;i2 < parts.length; ) {
      if (parts[i2] === "..") {
        if (i2 > 0 && parts[i2 - 1] !== "..")
          parts.splice(--i2, 2);
        else if (absolute)
          parts.splice(i2, 1);
        else
          ++i2;
      } else if (parts[i2] === ".")
        parts.splice(i2, 1);
      else
        ++i2;
    }
    return prefix + parts.join("/");
  };
  path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
    if (!alreadyNormalized)
      includePath = normalize(includePath);
    if (isAbsolute(includePath))
      return includePath;
    if (!alreadyNormalized)
      originPath = normalize(originPath);
    return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
  };
});

// node_modules/protobufjs/src/types.js
var require_types2 = __commonJS((exports) => {
  var bake = function(values, offset) {
    var i2 = 0, o2 = {};
    offset |= 0;
    while (i2 < values.length)
      o2[s2[i2 + offset]] = values[i2++];
    return o2;
  };
  var types = exports;
  var util = require_util();
  var s2 = [
    "double",
    "float",
    "int32",
    "uint32",
    "sint32",
    "fixed32",
    "sfixed32",
    "int64",
    "uint64",
    "sint64",
    "fixed64",
    "sfixed64",
    "bool",
    "string",
    "bytes"
  ];
  types.basic = bake([
    1,
    5,
    0,
    0,
    0,
    5,
    5,
    0,
    0,
    0,
    1,
    1,
    0,
    2,
    2
  ]);
  types.defaults = bake([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    false,
    "",
    util.emptyArray,
    null
  ]);
  types.long = bake([
    0,
    0,
    0,
    1,
    1
  ], 7);
  types.mapKey = bake([
    0,
    0,
    0,
    5,
    5,
    0,
    0,
    0,
    1,
    1,
    0,
    2
  ], 2);
  types.packed = bake([
    1,
    5,
    0,
    0,
    0,
    5,
    5,
    0,
    0,
    0,
    1,
    1,
    0
  ]);
});

// node_modules/protobufjs/src/field.js
var require_field = __commonJS((exports, module) => {
  var Field = function(name, id, type, rule, extend, options, comment) {
    if (util.isObject(rule)) {
      comment = extend;
      options = rule;
      rule = extend = undefined;
    } else if (util.isObject(extend)) {
      comment = options;
      options = extend;
      extend = undefined;
    }
    ReflectionObject.call(this, name, options);
    if (!util.isInteger(id) || id < 0)
      throw TypeError("id must be a non-negative integer");
    if (!util.isString(type))
      throw TypeError("type must be a string");
    if (rule !== undefined && !ruleRe.test(rule = rule.toString().toLowerCase()))
      throw TypeError("rule must be a string rule");
    if (extend !== undefined && !util.isString(extend))
      throw TypeError("extend must be a string");
    if (rule === "proto3_optional") {
      rule = "optional";
    }
    this.rule = rule && rule !== "optional" ? rule : undefined;
    this.type = type;
    this.id = id;
    this.extend = extend || undefined;
    this.required = rule === "required";
    this.optional = !this.required;
    this.repeated = rule === "repeated";
    this.map = false;
    this.message = null;
    this.partOf = null;
    this.typeDefault = null;
    this.defaultValue = null;
    this.long = util.Long ? types.long[type] !== undefined : false;
    this.bytes = type === "bytes";
    this.resolvedType = null;
    this.extensionField = null;
    this.declaringField = null;
    this._packed = null;
    this.comment = comment;
  };
  module.exports = Field;
  var ReflectionObject = require_object();
  ((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";
  var Enum = require_enum();
  var types = require_types2();
  var util = require_util();
  var Type;
  var ruleRe = /^required|optional|repeated$/;
  Field.fromJSON = function fromJSON(name, json) {
    return new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
  };
  Object.defineProperty(Field.prototype, "packed", {
    get: function() {
      if (this._packed === null)
        this._packed = this.getOption("packed") !== false;
      return this._packed;
    }
  });
  Field.prototype.setOption = function setOption(name, value, ifNotSet) {
    if (name === "packed")
      this._packed = null;
    return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
  };
  Field.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
      "rule",
      this.rule !== "optional" && this.rule || undefined,
      "type",
      this.type,
      "id",
      this.id,
      "extend",
      this.extend,
      "options",
      this.options,
      "comment",
      keepComments ? this.comment : undefined
    ]);
  };
  Field.prototype.resolve = function resolve() {
    if (this.resolved)
      return this;
    if ((this.typeDefault = types.defaults[this.type]) === undefined) {
      this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
      if (this.resolvedType instanceof Type)
        this.typeDefault = null;
      else
        this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
    } else if (this.options && this.options.proto3_optional) {
      this.typeDefault = null;
    }
    if (this.options && this.options["default"] != null) {
      this.typeDefault = this.options["default"];
      if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string")
        this.typeDefault = this.resolvedType.values[this.typeDefault];
    }
    if (this.options) {
      if (this.options.packed === true || this.options.packed !== undefined && this.resolvedType && !(this.resolvedType instanceof Enum))
        delete this.options.packed;
      if (!Object.keys(this.options).length)
        this.options = undefined;
    }
    if (this.long) {
      this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");
      if (Object.freeze)
        Object.freeze(this.typeDefault);
    } else if (this.bytes && typeof this.typeDefault === "string") {
      var buf;
      if (util.base64.test(this.typeDefault))
        util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);
      else
        util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
      this.typeDefault = buf;
    }
    if (this.map)
      this.defaultValue = util.emptyObject;
    else if (this.repeated)
      this.defaultValue = util.emptyArray;
    else
      this.defaultValue = this.typeDefault;
    if (this.parent instanceof Type)
      this.parent.ctor.prototype[this.name] = this.defaultValue;
    return ReflectionObject.prototype.resolve.call(this);
  };
  Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {
    if (typeof fieldType === "function")
      fieldType = util.decorateType(fieldType).name;
    else if (fieldType && typeof fieldType === "object")
      fieldType = util.decorateEnum(fieldType).name;
    return function fieldDecorator(prototype, fieldName) {
      util.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, { default: defaultValue }));
    };
  };
  Field._configure = function configure(Type_) {
    Type = Type_;
  };
});

// node_modules/protobufjs/src/oneof.js
var require_oneof = __commonJS((exports, module) => {
  var OneOf = function(name, fieldNames, options, comment) {
    if (!Array.isArray(fieldNames)) {
      options = fieldNames;
      fieldNames = undefined;
    }
    ReflectionObject.call(this, name, options);
    if (!(fieldNames === undefined || Array.isArray(fieldNames)))
      throw TypeError("fieldNames must be an Array");
    this.oneof = fieldNames || [];
    this.fieldsArray = [];
    this.comment = comment;
  };
  var addFieldsToParent = function(oneof) {
    if (oneof.parent) {
      for (var i2 = 0;i2 < oneof.fieldsArray.length; ++i2)
        if (!oneof.fieldsArray[i2].parent)
          oneof.parent.add(oneof.fieldsArray[i2]);
    }
  };
  module.exports = OneOf;
  var ReflectionObject = require_object();
  ((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";
  var Field = require_field();
  var util = require_util();
  OneOf.fromJSON = function fromJSON(name, json) {
    return new OneOf(name, json.oneof, json.options, json.comment);
  };
  OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
      "options",
      this.options,
      "oneof",
      this.oneof,
      "comment",
      keepComments ? this.comment : undefined
    ]);
  };
  OneOf.prototype.add = function add(field) {
    if (!(field instanceof Field))
      throw TypeError("field must be a Field");
    if (field.parent && field.parent !== this.parent)
      field.parent.remove(field);
    this.oneof.push(field.name);
    this.fieldsArray.push(field);
    field.partOf = this;
    addFieldsToParent(this);
    return this;
  };
  OneOf.prototype.remove = function remove(field) {
    if (!(field instanceof Field))
      throw TypeError("field must be a Field");
    var index = this.fieldsArray.indexOf(field);
    if (index < 0)
      throw Error(field + " is not a member of " + this);
    this.fieldsArray.splice(index, 1);
    index = this.oneof.indexOf(field.name);
    if (index > -1)
      this.oneof.splice(index, 1);
    field.partOf = null;
    return this;
  };
  OneOf.prototype.onAdd = function onAdd(parent) {
    ReflectionObject.prototype.onAdd.call(this, parent);
    var self2 = this;
    for (var i2 = 0;i2 < this.oneof.length; ++i2) {
      var field = parent.get(this.oneof[i2]);
      if (field && !field.partOf) {
        field.partOf = self2;
        self2.fieldsArray.push(field);
      }
    }
    addFieldsToParent(this);
  };
  OneOf.prototype.onRemove = function onRemove(parent) {
    for (var i2 = 0, field;i2 < this.fieldsArray.length; ++i2)
      if ((field = this.fieldsArray[i2]).parent)
        field.parent.remove(field);
    ReflectionObject.prototype.onRemove.call(this, parent);
  };
  OneOf.d = function decorateOneOf() {
    var fieldNames = new Array(arguments.length), index = 0;
    while (index < arguments.length)
      fieldNames[index] = arguments[index++];
    return function oneOfDecorator(prototype, oneofName) {
      util.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
      Object.defineProperty(prototype, oneofName, {
        get: util.oneOfGetter(fieldNames),
        set: util.oneOfSetter(fieldNames)
      });
    };
  };
});

// node_modules/protobufjs/src/namespace.js
var require_namespace = __commonJS((exports, module) => {
  var arrayToJSON = function(array, toJSONOptions) {
    if (!(array && array.length))
      return;
    var obj = {};
    for (var i2 = 0;i2 < array.length; ++i2)
      obj[array[i2].name] = array[i2].toJSON(toJSONOptions);
    return obj;
  };
  var Namespace = function(name, options) {
    ReflectionObject.call(this, name, options);
    this.nested = undefined;
    this._nestedArray = null;
  };
  var clearCache = function(namespace) {
    namespace._nestedArray = null;
    return namespace;
  };
  module.exports = Namespace;
  var ReflectionObject = require_object();
  ((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";
  var Field = require_field();
  var util = require_util();
  var OneOf = require_oneof();
  var Type;
  var Service;
  var Enum;
  Namespace.fromJSON = function fromJSON(name, json) {
    return new Namespace(name, json.options).addJSON(json.nested);
  };
  Namespace.arrayToJSON = arrayToJSON;
  Namespace.isReservedId = function isReservedId(reserved, id) {
    if (reserved) {
      for (var i2 = 0;i2 < reserved.length; ++i2)
        if (typeof reserved[i2] !== "string" && reserved[i2][0] <= id && reserved[i2][1] > id)
          return true;
    }
    return false;
  };
  Namespace.isReservedName = function isReservedName(reserved, name) {
    if (reserved) {
      for (var i2 = 0;i2 < reserved.length; ++i2)
        if (reserved[i2] === name)
          return true;
    }
    return false;
  };
  Object.defineProperty(Namespace.prototype, "nestedArray", {
    get: function() {
      return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
    }
  });
  Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
    return util.toObject([
      "options",
      this.options,
      "nested",
      arrayToJSON(this.nestedArray, toJSONOptions)
    ]);
  };
  Namespace.prototype.addJSON = function addJSON(nestedJson) {
    var ns = this;
    if (nestedJson) {
      for (var names = Object.keys(nestedJson), i2 = 0, nested;i2 < names.length; ++i2) {
        nested = nestedJson[names[i2]];
        ns.add((nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : nested.id !== undefined ? Field.fromJSON : Namespace.fromJSON)(names[i2], nested));
      }
    }
    return this;
  };
  Namespace.prototype.get = function get(name) {
    return this.nested && this.nested[name] || null;
  };
  Namespace.prototype.getEnum = function getEnum(name) {
    if (this.nested && this.nested[name] instanceof Enum)
      return this.nested[name].values;
    throw Error("no such enum: " + name);
  };
  Namespace.prototype.add = function add(object) {
    if (!(object instanceof Field && object.extend !== undefined || object instanceof Type || object instanceof OneOf || object instanceof Enum || object instanceof Service || object instanceof Namespace))
      throw TypeError("object must be a valid nested object");
    if (!this.nested)
      this.nested = {};
    else {
      var prev = this.get(object.name);
      if (prev) {
        if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
          var nested = prev.nestedArray;
          for (var i2 = 0;i2 < nested.length; ++i2)
            object.add(nested[i2]);
          this.remove(prev);
          if (!this.nested)
            this.nested = {};
          object.setOptions(prev.options, true);
        } else
          throw Error("duplicate name '" + object.name + "' in " + this);
      }
    }
    this.nested[object.name] = object;
    object.onAdd(this);
    return clearCache(this);
  };
  Namespace.prototype.remove = function remove(object) {
    if (!(object instanceof ReflectionObject))
      throw TypeError("object must be a ReflectionObject");
    if (object.parent !== this)
      throw Error(object + " is not a member of " + this);
    delete this.nested[object.name];
    if (!Object.keys(this.nested).length)
      this.nested = undefined;
    object.onRemove(this);
    return clearCache(this);
  };
  Namespace.prototype.define = function define(path, json) {
    if (util.isString(path))
      path = path.split(".");
    else if (!Array.isArray(path))
      throw TypeError("illegal path");
    if (path && path.length && path[0] === "")
      throw Error("path must be relative");
    var ptr3 = this;
    while (path.length > 0) {
      var part = path.shift();
      if (ptr3.nested && ptr3.nested[part]) {
        ptr3 = ptr3.nested[part];
        if (!(ptr3 instanceof Namespace))
          throw Error("path conflicts with non-namespace objects");
      } else
        ptr3.add(ptr3 = new Namespace(part));
    }
    if (json)
      ptr3.addJSON(json);
    return ptr3;
  };
  Namespace.prototype.resolveAll = function resolveAll() {
    var nested = this.nestedArray, i2 = 0;
    while (i2 < nested.length)
      if (nested[i2] instanceof Namespace)
        nested[i2++].resolveAll();
      else
        nested[i2++].resolve();
    return this.resolve();
  };
  Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {
    if (typeof filterTypes === "boolean") {
      parentAlreadyChecked = filterTypes;
      filterTypes = undefined;
    } else if (filterTypes && !Array.isArray(filterTypes))
      filterTypes = [filterTypes];
    if (util.isString(path) && path.length) {
      if (path === ".")
        return this.root;
      path = path.split(".");
    } else if (!path.length)
      return this;
    if (path[0] === "")
      return this.root.lookup(path.slice(1), filterTypes);
    var found = this.get(path[0]);
    if (found) {
      if (path.length === 1) {
        if (!filterTypes || filterTypes.indexOf(found.constructor) > -1)
          return found;
      } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true)))
        return found;
    } else
      for (var i2 = 0;i2 < this.nestedArray.length; ++i2)
        if (this._nestedArray[i2] instanceof Namespace && (found = this._nestedArray[i2].lookup(path, filterTypes, true)))
          return found;
    if (this.parent === null || parentAlreadyChecked)
      return null;
    return this.parent.lookup(path, filterTypes);
  };
  Namespace.prototype.lookupType = function lookupType(path) {
    var found = this.lookup(path, [Type]);
    if (!found)
      throw Error("no such type: " + path);
    return found;
  };
  Namespace.prototype.lookupEnum = function lookupEnum(path) {
    var found = this.lookup(path, [Enum]);
    if (!found)
      throw Error("no such Enum '" + path + "' in " + this);
    return found;
  };
  Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
    var found = this.lookup(path, [Type, Enum]);
    if (!found)
      throw Error("no such Type or Enum '" + path + "' in " + this);
    return found;
  };
  Namespace.prototype.lookupService = function lookupService(path) {
    var found = this.lookup(path, [Service]);
    if (!found)
      throw Error("no such Service '" + path + "' in " + this);
    return found;
  };
  Namespace._configure = function(Type_, Service_, Enum_) {
    Type = Type_;
    Service = Service_;
    Enum = Enum_;
  };
});

// node_modules/protobufjs/src/mapfield.js
var require_mapfield = __commonJS((exports, module) => {
  var MapField = function(name, id, keyType, type, options, comment) {
    Field.call(this, name, id, type, undefined, undefined, options, comment);
    if (!util.isString(keyType))
      throw TypeError("keyType must be a string");
    this.keyType = keyType;
    this.resolvedKeyType = null;
    this.map = true;
  };
  module.exports = MapField;
  var Field = require_field();
  ((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";
  var types = require_types2();
  var util = require_util();
  MapField.fromJSON = function fromJSON(name, json) {
    return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
  };
  MapField.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
      "keyType",
      this.keyType,
      "type",
      this.type,
      "id",
      this.id,
      "extend",
      this.extend,
      "options",
      this.options,
      "comment",
      keepComments ? this.comment : undefined
    ]);
  };
  MapField.prototype.resolve = function resolve() {
    if (this.resolved)
      return this;
    if (types.mapKey[this.keyType] === undefined)
      throw Error("invalid key type: " + this.keyType);
    return Field.prototype.resolve.call(this);
  };
  MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {
    if (typeof fieldValueType === "function")
      fieldValueType = util.decorateType(fieldValueType).name;
    else if (fieldValueType && typeof fieldValueType === "object")
      fieldValueType = util.decorateEnum(fieldValueType).name;
    return function mapFieldDecorator(prototype, fieldName) {
      util.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
    };
  };
});

// node_modules/protobufjs/src/method.js
var require_method = __commonJS((exports, module) => {
  var Method = function(name, type, requestType, responseType, requestStream, responseStream, options, comment, parsedOptions) {
    if (util.isObject(requestStream)) {
      options = requestStream;
      requestStream = responseStream = undefined;
    } else if (util.isObject(responseStream)) {
      options = responseStream;
      responseStream = undefined;
    }
    if (!(type === undefined || util.isString(type)))
      throw TypeError("type must be a string");
    if (!util.isString(requestType))
      throw TypeError("requestType must be a string");
    if (!util.isString(responseType))
      throw TypeError("responseType must be a string");
    ReflectionObject.call(this, name, options);
    this.type = type || "rpc";
    this.requestType = requestType;
    this.requestStream = requestStream ? true : undefined;
    this.responseType = responseType;
    this.responseStream = responseStream ? true : undefined;
    this.resolvedRequestType = null;
    this.resolvedResponseType = null;
    this.comment = comment;
    this.parsedOptions = parsedOptions;
  };
  module.exports = Method;
  var ReflectionObject = require_object();
  ((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";
  var util = require_util();
  Method.fromJSON = function fromJSON(name, json) {
    return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment, json.parsedOptions);
  };
  Method.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
      "type",
      this.type !== "rpc" && this.type || undefined,
      "requestType",
      this.requestType,
      "requestStream",
      this.requestStream,
      "responseType",
      this.responseType,
      "responseStream",
      this.responseStream,
      "options",
      this.options,
      "comment",
      keepComments ? this.comment : undefined,
      "parsedOptions",
      this.parsedOptions
    ]);
  };
  Method.prototype.resolve = function resolve() {
    if (this.resolved)
      return this;
    this.resolvedRequestType = this.parent.lookupType(this.requestType);
    this.resolvedResponseType = this.parent.lookupType(this.responseType);
    return ReflectionObject.prototype.resolve.call(this);
  };
});

// node_modules/protobufjs/src/service.js
var require_service2 = __commonJS((exports, module) => {
  var Service = function(name, options) {
    Namespace.call(this, name, options);
    this.methods = {};
    this._methodsArray = null;
  };
  var clearCache = function(service) {
    service._methodsArray = null;
    return service;
  };
  module.exports = Service;
  var Namespace = require_namespace();
  ((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";
  var Method = require_method();
  var util = require_util();
  var rpc = require_rpc();
  Service.fromJSON = function fromJSON(name, json) {
    var service = new Service(name, json.options);
    if (json.methods)
      for (var names = Object.keys(json.methods), i2 = 0;i2 < names.length; ++i2)
        service.add(Method.fromJSON(names[i2], json.methods[names[i2]]));
    if (json.nested)
      service.addJSON(json.nested);
    service.comment = json.comment;
    return service;
  };
  Service.prototype.toJSON = function toJSON(toJSONOptions) {
    var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
      "options",
      inherited && inherited.options || undefined,
      "methods",
      Namespace.arrayToJSON(this.methodsArray, toJSONOptions) || {},
      "nested",
      inherited && inherited.nested || undefined,
      "comment",
      keepComments ? this.comment : undefined
    ]);
  };
  Object.defineProperty(Service.prototype, "methodsArray", {
    get: function() {
      return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
    }
  });
  Service.prototype.get = function get(name) {
    return this.methods[name] || Namespace.prototype.get.call(this, name);
  };
  Service.prototype.resolveAll = function resolveAll() {
    var methods = this.methodsArray;
    for (var i2 = 0;i2 < methods.length; ++i2)
      methods[i2].resolve();
    return Namespace.prototype.resolve.call(this);
  };
  Service.prototype.add = function add(object) {
    if (this.get(object.name))
      throw Error("duplicate name '" + object.name + "' in " + this);
    if (object instanceof Method) {
      this.methods[object.name] = object;
      object.parent = this;
      return clearCache(this);
    }
    return Namespace.prototype.add.call(this, object);
  };
  Service.prototype.remove = function remove(object) {
    if (object instanceof Method) {
      if (this.methods[object.name] !== object)
        throw Error(object + " is not a member of " + this);
      delete this.methods[object.name];
      object.parent = null;
      return clearCache(this);
    }
    return Namespace.prototype.remove.call(this, object);
  };
  Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
    var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
    for (var i2 = 0, method;i2 < this.methodsArray.length; ++i2) {
      var methodName = util.lcFirst((method = this._methodsArray[i2]).resolve().name).replace(/[^$\w_]/g, "");
      rpcService[methodName] = util.codegen(["r", "c"], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
        m: method,
        q: method.resolvedRequestType.ctor,
        s: method.resolvedResponseType.ctor
      });
    }
    return rpcService;
  };
});

// node_modules/protobufjs/src/message.js
var require_message = __commonJS((exports, module) => {
  var Message = function(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i2 = 0;i2 < keys.length; ++i2)
        this[keys[i2]] = properties[keys[i2]];
  };
  module.exports = Message;
  var util = require_minimal();
  Message.create = function create(properties) {
    return this.$type.create(properties);
  };
  Message.encode = function encode(message, writer) {
    return this.$type.encode(message, writer);
  };
  Message.encodeDelimited = function encodeDelimited(message, writer) {
    return this.$type.encodeDelimited(message, writer);
  };
  Message.decode = function decode(reader) {
    return this.$type.decode(reader);
  };
  Message.decodeDelimited = function decodeDelimited(reader) {
    return this.$type.decodeDelimited(reader);
  };
  Message.verify = function verify(message) {
    return this.$type.verify(message);
  };
  Message.fromObject = function fromObject(object) {
    return this.$type.fromObject(object);
  };
  Message.toObject = function toObject(message, options) {
    return this.$type.toObject(message, options);
  };
  Message.prototype.toJSON = function toJSON() {
    return this.$type.toObject(this, util.toJSONOptions);
  };
});

// node_modules/protobufjs/src/decoder.js
var require_decoder = __commonJS((exports, module) => {
  var missing = function(field) {
    return "missing required '" + field.name + "'";
  };
  var decoder = function(mtype) {
    var gen = util.codegen(["r", "l"], mtype.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function(field2) {
      return field2.map;
    }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
    if (mtype.group)
      gen("if((t&7)===4)")("break");
    gen("switch(t>>>3){");
    var i2 = 0;
    for (;i2 < mtype.fieldsArray.length; ++i2) {
      var field = mtype._fieldsArray[i2].resolve(), type = field.resolvedType instanceof Enum ? "int32" : field.type, ref = "m" + util.safeProp(field.name);
      gen("case %i: {", field.id);
      if (field.map) {
        gen("if(%s===util.emptyObject)", ref)("%s={}", ref)("var c2 = r.uint32()+r.pos");
        if (types.defaults[field.keyType] !== undefined)
          gen("k=%j", types.defaults[field.keyType]);
        else
          gen("k=null");
        if (types.defaults[type] !== undefined)
          gen("value=%j", types.defaults[type]);
        else
          gen("value=null");
        gen("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", field.keyType)("case 2:");
        if (types.basic[type] === undefined)
          gen("value=types[%i].decode(r,r.uint32())", i2);
        else
          gen("value=r.%s()", type);
        gen("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
        if (types.long[field.keyType] !== undefined)
          gen("%s[typeof k===\"object\"?util.longToHash(k):k]=value", ref);
        else
          gen("%s[k]=value", ref);
      } else if (field.repeated) {
        gen("if(!(%s&&%s.length))", ref, ref)("%s=[]", ref);
        if (types.packed[type] !== undefined)
          gen("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", ref, type)("}else");
        if (types.basic[type] === undefined)
          gen(field.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", ref, i2);
        else
          gen("%s.push(r.%s())", ref, type);
      } else if (types.basic[type] === undefined)
        gen(field.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", ref, i2);
      else
        gen("%s=r.%s()", ref, type);
      gen("break")("}");
    }
    gen("default:")("r.skipType(t&7)")("break")("}")("}");
    for (i2 = 0;i2 < mtype._fieldsArray.length; ++i2) {
      var rfield = mtype._fieldsArray[i2];
      if (rfield.required)
        gen("if(!m.hasOwnProperty(%j))", rfield.name)("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
    }
    return gen("return m");
  };
  module.exports = decoder;
  var Enum = require_enum();
  var types = require_types2();
  var util = require_util();
});

// node_modules/protobufjs/src/verifier.js
var require_verifier = __commonJS((exports, module) => {
  var invalid = function(field, expected) {
    return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:" + field.keyType + "}" : "") + " expected";
  };
  var genVerifyValue = function(gen, field, fieldIndex, ref) {
    if (field.resolvedType) {
      if (field.resolvedType instanceof Enum) {
        gen("switch(%s){", ref)("default:")("return%j", invalid(field, "enum value"));
        for (var keys = Object.keys(field.resolvedType.values), j = 0;j < keys.length; ++j)
          gen("case %i:", field.resolvedType.values[keys[j]]);
        gen("break")("}");
      } else {
        gen("{")("var e=types[%i].verify(%s);", fieldIndex, ref)("if(e)")("return%j+e", field.name + ".")("}");
      }
    } else {
      switch (field.type) {
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
          gen("if(!util.isInteger(%s))", ref)("return%j", invalid(field, "integer"));
          break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          gen("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)("return%j", invalid(field, "integer|Long"));
          break;
        case "float":
        case "double":
          gen("if(typeof %s!==\"number\")", ref)("return%j", invalid(field, "number"));
          break;
        case "bool":
          gen("if(typeof %s!==\"boolean\")", ref)("return%j", invalid(field, "boolean"));
          break;
        case "string":
          gen("if(!util.isString(%s))", ref)("return%j", invalid(field, "string"));
          break;
        case "bytes":
          gen("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", ref, ref, ref)("return%j", invalid(field, "buffer"));
          break;
      }
    }
    return gen;
  };
  var genVerifyKey = function(gen, field, ref) {
    switch (field.keyType) {
      case "int32":
      case "uint32":
      case "sint32":
      case "fixed32":
      case "sfixed32":
        gen("if(!util.key32Re.test(%s))", ref)("return%j", invalid(field, "integer key"));
        break;
      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        gen("if(!util.key64Re.test(%s))", ref)("return%j", invalid(field, "integer|Long key"));
        break;
      case "bool":
        gen("if(!util.key2Re.test(%s))", ref)("return%j", invalid(field, "boolean key"));
        break;
    }
    return gen;
  };
  var verifier = function(mtype) {
    var gen = util.codegen(["m"], mtype.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
    var oneofs = mtype.oneofsArray, seenFirstField = {};
    if (oneofs.length)
      gen("var p={}");
    for (var i2 = 0;i2 < mtype.fieldsArray.length; ++i2) {
      var field = mtype._fieldsArray[i2].resolve(), ref = "m" + util.safeProp(field.name);
      if (field.optional)
        gen("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name);
      if (field.map) {
        gen("if(!util.isObject(%s))", ref)("return%j", invalid(field, "object"))("var k=Object.keys(%s)", ref)("for(var i=0;i<k.length;++i){");
        genVerifyKey(gen, field, "k[i]");
        genVerifyValue(gen, field, i2, ref + "[k[i]]")("}");
      } else if (field.repeated) {
        gen("if(!Array.isArray(%s))", ref)("return%j", invalid(field, "array"))("for(var i=0;i<%s.length;++i){", ref);
        genVerifyValue(gen, field, i2, ref + "[i]")("}");
      } else {
        if (field.partOf) {
          var oneofProp = util.safeProp(field.partOf.name);
          if (seenFirstField[field.partOf.name] === 1)
            gen("if(p%s===1)", oneofProp)("return%j", field.partOf.name + ": multiple values");
          seenFirstField[field.partOf.name] = 1;
          gen("p%s=1", oneofProp);
        }
        genVerifyValue(gen, field, i2, ref);
      }
      if (field.optional)
        gen("}");
    }
    return gen("return null");
  };
  module.exports = verifier;
  var Enum = require_enum();
  var util = require_util();
});

// node_modules/protobufjs/src/converter.js
var require_converter = __commonJS((exports) => {
  var genValuePartial_fromObject = function(gen, field, fieldIndex, prop) {
    var defaultAlreadyEmitted = false;
    if (field.resolvedType) {
      if (field.resolvedType instanceof Enum) {
        gen("switch(d%s){", prop);
        for (var values = field.resolvedType.values, keys = Object.keys(values), i2 = 0;i2 < keys.length; ++i2) {
          if (values[keys[i2]] === field.typeDefault && !defaultAlreadyEmitted) {
            gen("default:")("if(typeof(d%s)===\"number\"){m%s=d%s;break}", prop, prop, prop);
            if (!field.repeated)
              gen("break");
            defaultAlreadyEmitted = true;
          }
          gen("case%j:", keys[i2])("case %i:", values[keys[i2]])("m%s=%j", prop, values[keys[i2]])("break");
        }
        gen("}");
      } else
        gen("if(typeof d%s!==\"object\")", prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", prop, fieldIndex, prop);
    } else {
      var isUnsigned = false;
      switch (field.type) {
        case "double":
        case "float":
          gen("m%s=Number(d%s)", prop, prop);
          break;
        case "uint32":
        case "fixed32":
          gen("m%s=d%s>>>0", prop, prop);
          break;
        case "int32":
        case "sint32":
        case "sfixed32":
          gen("m%s=d%s|0", prop, prop);
          break;
        case "uint64":
          isUnsigned = true;
        case "int64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          gen("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)("else if(typeof d%s===\"string\")", prop)("m%s=parseInt(d%s,10)", prop, prop)("else if(typeof d%s===\"number\")", prop)("m%s=d%s", prop, prop)("else if(typeof d%s===\"object\")", prop)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
          break;
        case "bytes":
          gen("if(typeof d%s===\"string\")", prop)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)("else if(d%s.length >= 0)", prop)("m%s=d%s", prop, prop);
          break;
        case "string":
          gen("m%s=String(d%s)", prop, prop);
          break;
        case "bool":
          gen("m%s=Boolean(d%s)", prop, prop);
          break;
      }
    }
    return gen;
  };
  var genValuePartial_toObject = function(gen, field, fieldIndex, prop) {
    if (field.resolvedType) {
      if (field.resolvedType instanceof Enum)
        gen("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", prop, fieldIndex, prop, prop, fieldIndex, prop, prop);
      else
        gen("d%s=types[%i].toObject(m%s,o)", prop, fieldIndex, prop);
    } else {
      var isUnsigned = false;
      switch (field.type) {
        case "double":
        case "float":
          gen("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
          break;
        case "uint64":
          isUnsigned = true;
        case "int64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          gen("if(typeof m%s===\"number\")", prop)("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true" : "", prop);
          break;
        case "bytes":
          gen("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
          break;
        default:
          gen("d%s=m%s", prop, prop);
          break;
      }
    }
    return gen;
  };
  var converter = exports;
  var Enum = require_enum();
  var util = require_util();
  converter.fromObject = function fromObject(mtype) {
    var fields = mtype.fieldsArray;
    var gen = util.codegen(["d"], mtype.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
    if (!fields.length)
      return gen("return new this.ctor");
    gen("var m=new this.ctor");
    for (var i2 = 0;i2 < fields.length; ++i2) {
      var field = fields[i2].resolve(), prop = util.safeProp(field.name);
      if (field.map) {
        gen("if(d%s){", prop)("if(typeof d%s!==\"object\")", prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s={}", prop)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
        genValuePartial_fromObject(gen, field, i2, prop + "[ks[i]]")("}")("}");
      } else if (field.repeated) {
        gen("if(d%s){", prop)("if(!Array.isArray(d%s))", prop)("throw TypeError(%j)", field.fullName + ": array expected")("m%s=[]", prop)("for(var i=0;i<d%s.length;++i){", prop);
        genValuePartial_fromObject(gen, field, i2, prop + "[i]")("}")("}");
      } else {
        if (!(field.resolvedType instanceof Enum))
          gen("if(d%s!=null){", prop);
        genValuePartial_fromObject(gen, field, i2, prop);
        if (!(field.resolvedType instanceof Enum))
          gen("}");
      }
    }
    return gen("return m");
  };
  converter.toObject = function toObject(mtype) {
    var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
    if (!fields.length)
      return util.codegen()("return {}");
    var gen = util.codegen(["m", "o"], mtype.name + "$toObject")("if(!o)")("o={}")("var d={}");
    var repeatedFields = [], mapFields = [], normalFields = [], i2 = 0;
    for (;i2 < fields.length; ++i2)
      if (!fields[i2].partOf)
        (fields[i2].resolve().repeated ? repeatedFields : fields[i2].map ? mapFields : normalFields).push(fields[i2]);
    if (repeatedFields.length) {
      gen("if(o.arrays||o.defaults){");
      for (i2 = 0;i2 < repeatedFields.length; ++i2)
        gen("d%s=[]", util.safeProp(repeatedFields[i2].name));
      gen("}");
    }
    if (mapFields.length) {
      gen("if(o.objects||o.defaults){");
      for (i2 = 0;i2 < mapFields.length; ++i2)
        gen("d%s={}", util.safeProp(mapFields[i2].name));
      gen("}");
    }
    if (normalFields.length) {
      gen("if(o.defaults){");
      for (i2 = 0;i2 < normalFields.length; ++i2) {
        var field = normalFields[i2], prop = util.safeProp(field.name);
        if (field.resolvedType instanceof Enum)
          gen("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault);
        else if (field.long)
          gen("if(util.Long){")("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", prop)("}else")("d%s=o.longs===String?%j:%i", prop, field.typeDefault.toString(), field.typeDefault.toNumber());
        else if (field.bytes) {
          var arrayDefault = "[" + Array.prototype.slice.call(field.typeDefault).join(",") + "]";
          gen("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field.typeDefault))("else{")("d%s=%s", prop, arrayDefault)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)("}");
        } else
          gen("d%s=%j", prop, field.typeDefault);
      }
      gen("}");
    }
    var hasKs2 = false;
    for (i2 = 0;i2 < fields.length; ++i2) {
      var field = fields[i2], index = mtype._fieldsArray.indexOf(field), prop = util.safeProp(field.name);
      if (field.map) {
        if (!hasKs2) {
          hasKs2 = true;
          gen("var ks2");
        }
        gen("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)("d%s={}", prop)("for(var j=0;j<ks2.length;++j){");
        genValuePartial_toObject(gen, field, index, prop + "[ks2[j]]")("}");
      } else if (field.repeated) {
        gen("if(m%s&&m%s.length){", prop, prop)("d%s=[]", prop)("for(var j=0;j<m%s.length;++j){", prop);
        genValuePartial_toObject(gen, field, index, prop + "[j]")("}");
      } else {
        gen("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field.name);
        genValuePartial_toObject(gen, field, index, prop);
        if (field.partOf)
          gen("if(o.oneofs)")("d%s=%j", util.safeProp(field.partOf.name), field.name);
      }
      gen("}");
    }
    return gen("return d");
  };
});

// node_modules/protobufjs/src/wrappers.js
var require_wrappers = __commonJS((exports) => {
  var wrappers = exports;
  var Message = require_message();
  wrappers[".google.protobuf.Any"] = {
    fromObject: function(object) {
      if (object && object["@type"]) {
        var name = object["@type"].substring(object["@type"].lastIndexOf("/") + 1);
        var type = this.lookup(name);
        if (type) {
          var type_url = object["@type"].charAt(0) === "." ? object["@type"].slice(1) : object["@type"];
          if (type_url.indexOf("/") === -1) {
            type_url = "/" + type_url;
          }
          return this.create({
            type_url,
            value: type.encode(type.fromObject(object)).finish()
          });
        }
      }
      return this.fromObject(object);
    },
    toObject: function(message, options) {
      var googleApi = "type.googleapis.com/";
      var prefix = "";
      var name = "";
      if (options && options.json && message.type_url && message.value) {
        name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
        prefix = message.type_url.substring(0, message.type_url.lastIndexOf("/") + 1);
        var type = this.lookup(name);
        if (type)
          message = type.decode(message.value);
      }
      if (!(message instanceof this.ctor) && message instanceof Message) {
        var object = message.$type.toObject(message, options);
        var messageName = message.$type.fullName[0] === "." ? message.$type.fullName.slice(1) : message.$type.fullName;
        if (prefix === "") {
          prefix = googleApi;
        }
        name = prefix + messageName;
        object["@type"] = name;
        return object;
      }
      return this.toObject(message, options);
    }
  };
});

// node_modules/protobufjs/src/type.js
var require_type = __commonJS((exports, module) => {
  var Type = function(name, options) {
    Namespace.call(this, name, options);
    this.fields = {};
    this.oneofs = undefined;
    this.extensions = undefined;
    this.reserved = undefined;
    this.group = undefined;
    this._fieldsById = null;
    this._fieldsArray = null;
    this._oneofsArray = null;
    this._ctor = null;
  };
  var clearCache = function(type) {
    type._fieldsById = type._fieldsArray = type._oneofsArray = null;
    delete type.encode;
    delete type.decode;
    delete type.verify;
    return type;
  };
  module.exports = Type;
  var Namespace = require_namespace();
  ((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";
  var Enum = require_enum();
  var OneOf = require_oneof();
  var Field = require_field();
  var MapField = require_mapfield();
  var Service = require_service2();
  var Message = require_message();
  var Reader = require_reader();
  var Writer = require_writer();
  var util = require_util();
  var encoder = require_encoder();
  var decoder = require_decoder();
  var verifier = require_verifier();
  var converter = require_converter();
  var wrappers = require_wrappers();
  Object.defineProperties(Type.prototype, {
    fieldsById: {
      get: function() {
        if (this._fieldsById)
          return this._fieldsById;
        this._fieldsById = {};
        for (var names = Object.keys(this.fields), i2 = 0;i2 < names.length; ++i2) {
          var field = this.fields[names[i2]], id = field.id;
          if (this._fieldsById[id])
            throw Error("duplicate id " + id + " in " + this);
          this._fieldsById[id] = field;
        }
        return this._fieldsById;
      }
    },
    fieldsArray: {
      get: function() {
        return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
      }
    },
    oneofsArray: {
      get: function() {
        return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
      }
    },
    ctor: {
      get: function() {
        return this._ctor || (this.ctor = Type.generateConstructor(this)());
      },
      set: function(ctor) {
        var prototype = ctor.prototype;
        if (!(prototype instanceof Message)) {
          (ctor.prototype = new Message).constructor = ctor;
          util.merge(ctor.prototype, prototype);
        }
        ctor.$type = ctor.prototype.$type = this;
        util.merge(ctor, Message, true);
        this._ctor = ctor;
        var i2 = 0;
        for (;i2 < this.fieldsArray.length; ++i2)
          this._fieldsArray[i2].resolve();
        var ctorProperties = {};
        for (i2 = 0;i2 < this.oneofsArray.length; ++i2)
          ctorProperties[this._oneofsArray[i2].resolve().name] = {
            get: util.oneOfGetter(this._oneofsArray[i2].oneof),
            set: util.oneOfSetter(this._oneofsArray[i2].oneof)
          };
        if (i2)
          Object.defineProperties(ctor.prototype, ctorProperties);
      }
    }
  });
  Type.generateConstructor = function generateConstructor(mtype) {
    var gen = util.codegen(["p"], mtype.name);
    for (var i2 = 0, field;i2 < mtype.fieldsArray.length; ++i2)
      if ((field = mtype._fieldsArray[i2]).map)
        gen("this%s={}", util.safeProp(field.name));
      else if (field.repeated)
        gen("this%s=[]", util.safeProp(field.name));
    return gen("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
  };
  Type.fromJSON = function fromJSON(name, json) {
    var type = new Type(name, json.options);
    type.extensions = json.extensions;
    type.reserved = json.reserved;
    var names = Object.keys(json.fields), i2 = 0;
    for (;i2 < names.length; ++i2)
      type.add((typeof json.fields[names[i2]].keyType !== "undefined" ? MapField.fromJSON : Field.fromJSON)(names[i2], json.fields[names[i2]]));
    if (json.oneofs)
      for (names = Object.keys(json.oneofs), i2 = 0;i2 < names.length; ++i2)
        type.add(OneOf.fromJSON(names[i2], json.oneofs[names[i2]]));
    if (json.nested)
      for (names = Object.keys(json.nested), i2 = 0;i2 < names.length; ++i2) {
        var nested = json.nested[names[i2]];
        type.add((nested.id !== undefined ? Field.fromJSON : nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : Namespace.fromJSON)(names[i2], nested));
      }
    if (json.extensions && json.extensions.length)
      type.extensions = json.extensions;
    if (json.reserved && json.reserved.length)
      type.reserved = json.reserved;
    if (json.group)
      type.group = true;
    if (json.comment)
      type.comment = json.comment;
    return type;
  };
  Type.prototype.toJSON = function toJSON(toJSONOptions) {
    var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
      "options",
      inherited && inherited.options || undefined,
      "oneofs",
      Namespace.arrayToJSON(this.oneofsArray, toJSONOptions),
      "fields",
      Namespace.arrayToJSON(this.fieldsArray.filter(function(obj) {
        return !obj.declaringField;
      }), toJSONOptions) || {},
      "extensions",
      this.extensions && this.extensions.length ? this.extensions : undefined,
      "reserved",
      this.reserved && this.reserved.length ? this.reserved : undefined,
      "group",
      this.group || undefined,
      "nested",
      inherited && inherited.nested || undefined,
      "comment",
      keepComments ? this.comment : undefined
    ]);
  };
  Type.prototype.resolveAll = function resolveAll() {
    var fields = this.fieldsArray, i2 = 0;
    while (i2 < fields.length)
      fields[i2++].resolve();
    var oneofs = this.oneofsArray;
    i2 = 0;
    while (i2 < oneofs.length)
      oneofs[i2++].resolve();
    return Namespace.prototype.resolveAll.call(this);
  };
  Type.prototype.get = function get(name) {
    return this.fields[name] || this.oneofs && this.oneofs[name] || this.nested && this.nested[name] || null;
  };
  Type.prototype.add = function add(object) {
    if (this.get(object.name))
      throw Error("duplicate name '" + object.name + "' in " + this);
    if (object instanceof Field && object.extend === undefined) {
      if (this._fieldsById ? this._fieldsById[object.id] : this.fieldsById[object.id])
        throw Error("duplicate id " + object.id + " in " + this);
      if (this.isReservedId(object.id))
        throw Error("id " + object.id + " is reserved in " + this);
      if (this.isReservedName(object.name))
        throw Error("name '" + object.name + "' is reserved in " + this);
      if (object.parent)
        object.parent.remove(object);
      this.fields[object.name] = object;
      object.message = this;
      object.onAdd(this);
      return clearCache(this);
    }
    if (object instanceof OneOf) {
      if (!this.oneofs)
        this.oneofs = {};
      this.oneofs[object.name] = object;
      object.onAdd(this);
      return clearCache(this);
    }
    return Namespace.prototype.add.call(this, object);
  };
  Type.prototype.remove = function remove(object) {
    if (object instanceof Field && object.extend === undefined) {
      if (!this.fields || this.fields[object.name] !== object)
        throw Error(object + " is not a member of " + this);
      delete this.fields[object.name];
      object.parent = null;
      object.onRemove(this);
      return clearCache(this);
    }
    if (object instanceof OneOf) {
      if (!this.oneofs || this.oneofs[object.name] !== object)
        throw Error(object + " is not a member of " + this);
      delete this.oneofs[object.name];
      object.parent = null;
      object.onRemove(this);
      return clearCache(this);
    }
    return Namespace.prototype.remove.call(this, object);
  };
  Type.prototype.isReservedId = function isReservedId(id) {
    return Namespace.isReservedId(this.reserved, id);
  };
  Type.prototype.isReservedName = function isReservedName(name) {
    return Namespace.isReservedName(this.reserved, name);
  };
  Type.prototype.create = function create(properties) {
    return new this.ctor(properties);
  };
  Type.prototype.setup = function setup() {
    var fullName = this.fullName, types = [];
    for (var i2 = 0;i2 < this.fieldsArray.length; ++i2)
      types.push(this._fieldsArray[i2].resolve().resolvedType);
    this.encode = encoder(this)({
      Writer,
      types,
      util
    });
    this.decode = decoder(this)({
      Reader,
      types,
      util
    });
    this.verify = verifier(this)({
      types,
      util
    });
    this.fromObject = converter.fromObject(this)({
      types,
      util
    });
    this.toObject = converter.toObject(this)({
      types,
      util
    });
    var wrapper = wrappers[fullName];
    if (wrapper) {
      var originalThis = Object.create(this);
      originalThis.fromObject = this.fromObject;
      this.fromObject = wrapper.fromObject.bind(originalThis);
      originalThis.toObject = this.toObject;
      this.toObject = wrapper.toObject.bind(originalThis);
    }
    return this;
  };
  Type.prototype.encode = function encode_setup(message, writer) {
    return this.setup().encode(message, writer);
  };
  Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
  };
  Type.prototype.decode = function decode_setup(reader, length) {
    return this.setup().decode(reader, length);
  };
  Type.prototype.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof Reader))
      reader = Reader.create(reader);
    return this.decode(reader, reader.uint32());
  };
  Type.prototype.verify = function verify_setup(message) {
    return this.setup().verify(message);
  };
  Type.prototype.fromObject = function fromObject(object) {
    return this.setup().fromObject(object);
  };
  Type.prototype.toObject = function toObject(message, options) {
    return this.setup().toObject(message, options);
  };
  Type.d = function decorateType(typeName) {
    return function typeDecorator(target) {
      util.decorateType(target, typeName);
    };
  };
});

// node_modules/protobufjs/src/root.js
var require_root = __commonJS((exports, module) => {
  var Root = function(options) {
    Namespace.call(this, "", options);
    this.deferred = [];
    this.files = [];
  };
  var SYNC = function() {
  };
  var tryHandleExtension = function(root, field) {
    var extendedType = field.parent.lookup(field.extend);
    if (extendedType) {
      var sisterField = new Field(field.fullName, field.id, field.type, field.rule, undefined, field.options);
      if (extendedType.get(sisterField.name)) {
        return true;
      }
      sisterField.declaringField = field;
      field.extensionField = sisterField;
      extendedType.add(sisterField);
      return true;
    }
    return false;
  };
  module.exports = Root;
  var Namespace = require_namespace();
  ((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";
  var Field = require_field();
  var Enum = require_enum();
  var OneOf = require_oneof();
  var util = require_util();
  var Type;
  var parse;
  var common;
  Root.fromJSON = function fromJSON(json, root) {
    if (!root)
      root = new Root;
    if (json.options)
      root.setOptions(json.options);
    return root.addJSON(json.nested);
  };
  Root.prototype.resolvePath = util.path.resolve;
  Root.prototype.fetch = util.fetch;
  Root.prototype.load = function load(filename2, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = undefined;
    }
    var self2 = this;
    if (!callback)
      return util.asPromise(load, self2, filename2, options);
    var sync = callback === SYNC;
    function finish(err, root) {
      if (!callback)
        return;
      var cb = callback;
      callback = null;
      if (sync)
        throw err;
      cb(err, root);
    }
    function getBundledFileName(filename3) {
      var idx = filename3.lastIndexOf("google/protobuf/");
      if (idx > -1) {
        var altname = filename3.substring(idx);
        if (altname in common)
          return altname;
      }
      return null;
    }
    function process2(filename3, source) {
      try {
        if (util.isString(source) && source.charAt(0) === "{")
          source = JSON.parse(source);
        if (!util.isString(source))
          self2.setOptions(source.options).addJSON(source.nested);
        else {
          parse.filename = filename3;
          var parsed = parse(source, self2, options), resolved2, i3 = 0;
          if (parsed.imports) {
            for (;i3 < parsed.imports.length; ++i3)
              if (resolved2 = getBundledFileName(parsed.imports[i3]) || self2.resolvePath(filename3, parsed.imports[i3]))
                fetch(resolved2);
          }
          if (parsed.weakImports) {
            for (i3 = 0;i3 < parsed.weakImports.length; ++i3)
              if (resolved2 = getBundledFileName(parsed.weakImports[i3]) || self2.resolvePath(filename3, parsed.weakImports[i3]))
                fetch(resolved2, true);
          }
        }
      } catch (err) {
        finish(err);
      }
      if (!sync && !queued)
        finish(null, self2);
    }
    function fetch(filename3, weak) {
      filename3 = getBundledFileName(filename3) || filename3;
      if (self2.files.indexOf(filename3) > -1)
        return;
      self2.files.push(filename3);
      if (filename3 in common) {
        if (sync)
          process2(filename3, common[filename3]);
        else {
          ++queued;
          setTimeout(function() {
            --queued;
            process2(filename3, common[filename3]);
          });
        }
        return;
      }
      if (sync) {
        var source;
        try {
          source = util.fs.readFileSync(filename3).toString("utf8");
        } catch (err) {
          if (!weak)
            finish(err);
          return;
        }
        process2(filename3, source);
      } else {
        ++queued;
        self2.fetch(filename3, function(err, source2) {
          --queued;
          if (!callback)
            return;
          if (err) {
            if (!weak)
              finish(err);
            else if (!queued)
              finish(null, self2);
            return;
          }
          process2(filename3, source2);
        });
      }
    }
    var queued = 0;
    if (util.isString(filename2))
      filename2 = [filename2];
    for (var i2 = 0, resolved;i2 < filename2.length; ++i2)
      if (resolved = self2.resolvePath("", filename2[i2]))
        fetch(resolved);
    if (sync)
      return self2;
    if (!queued)
      finish(null, self2);
    return;
  };
  Root.prototype.loadSync = function loadSync(filename2, options) {
    if (!util.isNode)
      throw Error("not supported");
    return this.load(filename2, options, SYNC);
  };
  Root.prototype.resolveAll = function resolveAll() {
    if (this.deferred.length)
      throw Error("unresolvable extensions: " + this.deferred.map(function(field) {
        return "'extend " + field.extend + "' in " + field.parent.fullName;
      }).join(", "));
    return Namespace.prototype.resolveAll.call(this);
  };
  var exposeRe = /^[A-Z]/;
  Root.prototype._handleAdd = function _handleAdd(object) {
    if (object instanceof Field) {
      if (object.extend !== undefined && !object.extensionField) {
        if (!tryHandleExtension(this, object))
          this.deferred.push(object);
      }
    } else if (object instanceof Enum) {
      if (exposeRe.test(object.name))
        object.parent[object.name] = object.values;
    } else if (!(object instanceof OneOf)) {
      if (object instanceof Type)
        for (var i2 = 0;i2 < this.deferred.length; )
          if (tryHandleExtension(this, this.deferred[i2]))
            this.deferred.splice(i2, 1);
          else
            ++i2;
      for (var j = 0;j < object.nestedArray.length; ++j)
        this._handleAdd(object._nestedArray[j]);
      if (exposeRe.test(object.name))
        object.parent[object.name] = object;
    }
  };
  Root.prototype._handleRemove = function _handleRemove(object) {
    if (object instanceof Field) {
      if (object.extend !== undefined) {
        if (object.extensionField) {
          object.extensionField.parent.remove(object.extensionField);
          object.extensionField = null;
        } else {
          var index = this.deferred.indexOf(object);
          if (index > -1)
            this.deferred.splice(index, 1);
        }
      }
    } else if (object instanceof Enum) {
      if (exposeRe.test(object.name))
        delete object.parent[object.name];
    } else if (object instanceof Namespace) {
      for (var i2 = 0;i2 < object.nestedArray.length; ++i2)
        this._handleRemove(object._nestedArray[i2]);
      if (exposeRe.test(object.name))
        delete object.parent[object.name];
    }
  };
  Root._configure = function(Type_, parse_, common_) {
    Type = Type_;
    parse = parse_;
    common = common_;
  };
});

// node_modules/protobufjs/src/util.js
var require_util = __commonJS((exports, module) => {
  var util = module.exports = require_minimal();
  var roots = require_roots();
  var Type;
  var Enum;
  util.codegen = require_codegen();
  util.fetch = require_fetch();
  util.path = require_path();
  util.fs = util.inquire("fs");
  util.toArray = function toArray(object) {
    if (object) {
      var keys = Object.keys(object), array = new Array(keys.length), index = 0;
      while (index < keys.length)
        array[index] = object[keys[index++]];
      return array;
    }
    return [];
  };
  util.toObject = function toObject(array) {
    var object = {}, index = 0;
    while (index < array.length) {
      var key = array[index++], val = array[index++];
      if (val !== undefined)
        object[key] = val;
    }
    return object;
  };
  var safePropBackslashRe = /\\/g;
  var safePropQuoteRe = /"/g;
  util.isReserved = function isReserved(name) {
    return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name);
  };
  util.safeProp = function safeProp(prop) {
    if (!/^[$\w_]+$/.test(prop) || util.isReserved(prop))
      return "[\"" + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, "\\\"") + "\"]";
    return "." + prop;
  };
  util.ucFirst = function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  };
  var camelCaseRe = /_([a-z])/g;
  util.camelCase = function camelCase(str) {
    return str.substring(0, 1) + str.substring(1).replace(camelCaseRe, function($0, $1) {
      return $1.toUpperCase();
    });
  };
  util.compareFieldsById = function compareFieldsById(a2, b2) {
    return a2.id - b2.id;
  };
  util.decorateType = function decorateType(ctor, typeName) {
    if (ctor.$type) {
      if (typeName && ctor.$type.name !== typeName) {
        util.decorateRoot.remove(ctor.$type);
        ctor.$type.name = typeName;
        util.decorateRoot.add(ctor.$type);
      }
      return ctor.$type;
    }
    if (!Type)
      Type = require_type();
    var type = new Type(typeName || ctor.name);
    util.decorateRoot.add(type);
    type.ctor = ctor;
    Object.defineProperty(ctor, "$type", { value: type, enumerable: false });
    Object.defineProperty(ctor.prototype, "$type", { value: type, enumerable: false });
    return type;
  };
  var decorateEnumIndex = 0;
  util.decorateEnum = function decorateEnum(object) {
    if (object.$type)
      return object.$type;
    if (!Enum)
      Enum = require_enum();
    var enm = new Enum("Enum" + decorateEnumIndex++, object);
    util.decorateRoot.add(enm);
    Object.defineProperty(object, "$type", { value: enm, enumerable: false });
    return enm;
  };
  util.setProperty = function setProperty(dst, path, value) {
    function setProp(dst2, path2, value2) {
      var part = path2.shift();
      if (part === "__proto__" || part === "prototype") {
        return dst2;
      }
      if (path2.length > 0) {
        dst2[part] = setProp(dst2[part] || {}, path2, value2);
      } else {
        var prevValue = dst2[part];
        if (prevValue)
          value2 = [].concat(prevValue).concat(value2);
        dst2[part] = value2;
      }
      return dst2;
    }
    if (typeof dst !== "object")
      throw TypeError("dst must be an object");
    if (!path)
      throw TypeError("path must be specified");
    path = path.split(".");
    return setProp(dst, path, value);
  };
  Object.defineProperty(util, "decorateRoot", {
    get: function() {
      return roots["decorated"] || (roots["decorated"] = new (require_root()));
    }
  });
});

// node_modules/protobufjs/src/object.js
var require_object = __commonJS((exports, module) => {
  var ReflectionObject = function(name, options) {
    if (!util.isString(name))
      throw TypeError("name must be a string");
    if (options && !util.isObject(options))
      throw TypeError("options must be an object");
    this.options = options;
    this.parsedOptions = null;
    this.name = name;
    this.parent = null;
    this.resolved = false;
    this.comment = null;
    this.filename = null;
  };
  module.exports = ReflectionObject;
  ReflectionObject.className = "ReflectionObject";
  var util = require_util();
  var Root;
  Object.defineProperties(ReflectionObject.prototype, {
    root: {
      get: function() {
        var ptr3 = this;
        while (ptr3.parent !== null)
          ptr3 = ptr3.parent;
        return ptr3;
      }
    },
    fullName: {
      get: function() {
        var path = [this.name], ptr3 = this.parent;
        while (ptr3) {
          path.unshift(ptr3.name);
          ptr3 = ptr3.parent;
        }
        return path.join(".");
      }
    }
  });
  ReflectionObject.prototype.toJSON = function toJSON() {
    throw Error();
  };
  ReflectionObject.prototype.onAdd = function onAdd(parent) {
    if (this.parent && this.parent !== parent)
      this.parent.remove(this);
    this.parent = parent;
    this.resolved = false;
    var root = parent.root;
    if (root instanceof Root)
      root._handleAdd(this);
  };
  ReflectionObject.prototype.onRemove = function onRemove(parent) {
    var root = parent.root;
    if (root instanceof Root)
      root._handleRemove(this);
    this.parent = null;
    this.resolved = false;
  };
  ReflectionObject.prototype.resolve = function resolve() {
    if (this.resolved)
      return this;
    if (this.root instanceof Root)
      this.resolved = true;
    return this;
  };
  ReflectionObject.prototype.getOption = function getOption(name) {
    if (this.options)
      return this.options[name];
    return;
  };
  ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
    if (!ifNotSet || !this.options || this.options[name] === undefined)
      (this.options || (this.options = {}))[name] = value;
    return this;
  };
  ReflectionObject.prototype.setParsedOption = function setParsedOption(name, value, propName) {
    if (!this.parsedOptions) {
      this.parsedOptions = [];
    }
    var parsedOptions = this.parsedOptions;
    if (propName) {
      var opt = parsedOptions.find(function(opt2) {
        return Object.prototype.hasOwnProperty.call(opt2, name);
      });
      if (opt) {
        var newValue = opt[name];
        util.setProperty(newValue, propName, value);
      } else {
        opt = {};
        opt[name] = util.setProperty({}, propName, value);
        parsedOptions.push(opt);
      }
    } else {
      var newOpt = {};
      newOpt[name] = value;
      parsedOptions.push(newOpt);
    }
    return this;
  };
  ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
    if (options)
      for (var keys = Object.keys(options), i2 = 0;i2 < keys.length; ++i2)
        this.setOption(keys[i2], options[keys[i2]], ifNotSet);
    return this;
  };
  ReflectionObject.prototype.toString = function toString() {
    var className = this.constructor.className, fullName = this.fullName;
    if (fullName.length)
      return className + " " + fullName;
    return className;
  };
  ReflectionObject._configure = function(Root_) {
    Root = Root_;
  };
});

// node_modules/protobufjs/src/enum.js
var require_enum = __commonJS((exports, module) => {
  var Enum = function(name, values, options, comment, comments, valuesOptions) {
    ReflectionObject.call(this, name, options);
    if (values && typeof values !== "object")
      throw TypeError("values must be an object");
    this.valuesById = {};
    this.values = Object.create(this.valuesById);
    this.comment = comment;
    this.comments = comments || {};
    this.valuesOptions = valuesOptions;
    this.reserved = undefined;
    if (values) {
      for (var keys = Object.keys(values), i2 = 0;i2 < keys.length; ++i2)
        if (typeof values[keys[i2]] === "number")
          this.valuesById[this.values[keys[i2]] = values[keys[i2]]] = keys[i2];
    }
  };
  module.exports = Enum;
  var ReflectionObject = require_object();
  ((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";
  var Namespace = require_namespace();
  var util = require_util();
  Enum.fromJSON = function fromJSON(name, json) {
    var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
    enm.reserved = json.reserved;
    return enm;
  };
  Enum.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util.toObject([
      "options",
      this.options,
      "valuesOptions",
      this.valuesOptions,
      "values",
      this.values,
      "reserved",
      this.reserved && this.reserved.length ? this.reserved : undefined,
      "comment",
      keepComments ? this.comment : undefined,
      "comments",
      keepComments ? this.comments : undefined
    ]);
  };
  Enum.prototype.add = function add(name, id, comment, options) {
    if (!util.isString(name))
      throw TypeError("name must be a string");
    if (!util.isInteger(id))
      throw TypeError("id must be an integer");
    if (this.values[name] !== undefined)
      throw Error("duplicate name '" + name + "' in " + this);
    if (this.isReservedId(id))
      throw Error("id " + id + " is reserved in " + this);
    if (this.isReservedName(name))
      throw Error("name '" + name + "' is reserved in " + this);
    if (this.valuesById[id] !== undefined) {
      if (!(this.options && this.options.allow_alias))
        throw Error("duplicate id " + id + " in " + this);
      this.values[name] = id;
    } else
      this.valuesById[this.values[name] = id] = name;
    if (options) {
      if (this.valuesOptions === undefined)
        this.valuesOptions = {};
      this.valuesOptions[name] = options || null;
    }
    this.comments[name] = comment || null;
    return this;
  };
  Enum.prototype.remove = function remove(name) {
    if (!util.isString(name))
      throw TypeError("name must be a string");
    var val = this.values[name];
    if (val == null)
      throw Error("name '" + name + "' does not exist in " + this);
    delete this.valuesById[val];
    delete this.values[name];
    delete this.comments[name];
    if (this.valuesOptions)
      delete this.valuesOptions[name];
    return this;
  };
  Enum.prototype.isReservedId = function isReservedId(id) {
    return Namespace.isReservedId(this.reserved, id);
  };
  Enum.prototype.isReservedName = function isReservedName(name) {
    return Namespace.isReservedName(this.reserved, name);
  };
});

// node_modules/protobufjs/src/encoder.js
var require_encoder = __commonJS((exports, module) => {
  var genTypePartial = function(gen, field, fieldIndex, ref) {
    return field.resolvedType.group ? gen("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0) : gen("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
  };
  var encoder = function(mtype) {
    var gen = util.codegen(["m", "w"], mtype.name + "$encode")("if(!w)")("w=Writer.create()");
    var i2, ref;
    var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
    for (var i2 = 0;i2 < fields.length; ++i2) {
      var field = fields[i2].resolve(), index = mtype._fieldsArray.indexOf(field), type = field.resolvedType instanceof Enum ? "int32" : field.type, wireType = types.basic[type];
      ref = "m" + util.safeProp(field.name);
      if (field.map) {
        gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", ref, field.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
        if (wireType === undefined)
          gen("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref);
        else
          gen(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
        gen("}")("}");
      } else if (field.repeated) {
        gen("if(%s!=null&&%s.length){", ref, ref);
        if (field.packed && types.packed[type] !== undefined) {
          gen("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", ref)("w.%s(%s[i])", type, ref)("w.ldelim()");
        } else {
          gen("for(var i=0;i<%s.length;++i)", ref);
          if (wireType === undefined)
            genTypePartial(gen, field, index, ref + "[i]");
          else
            gen("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);
        }
        gen("}");
      } else {
        if (field.optional)
          gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", ref, field.name);
        if (wireType === undefined)
          genTypePartial(gen, field, index, ref);
        else
          gen("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);
      }
    }
    return gen("return w");
  };
  module.exports = encoder;
  var Enum = require_enum();
  var types = require_types2();
  var util = require_util();
});

// node_modules/protobufjs/src/index-light.js
var require_index_light = __commonJS((exports, module) => {
  var load = function(filename2, root, callback) {
    if (typeof root === "function") {
      callback = root;
      root = new protobuf.Root;
    } else if (!root)
      root = new protobuf.Root;
    return root.load(filename2, callback);
  };
  var loadSync = function(filename2, root) {
    if (!root)
      root = new protobuf.Root;
    return root.loadSync(filename2);
  };
  var protobuf = module.exports = require_index_minimal();
  protobuf.build = "light";
  protobuf.load = load;
  protobuf.loadSync = loadSync;
  protobuf.encoder = require_encoder();
  protobuf.decoder = require_decoder();
  protobuf.verifier = require_verifier();
  protobuf.converter = require_converter();
  protobuf.ReflectionObject = require_object();
  protobuf.Namespace = require_namespace();
  protobuf.Root = require_root();
  protobuf.Enum = require_enum();
  protobuf.Type = require_type();
  protobuf.Field = require_field();
  protobuf.OneOf = require_oneof();
  protobuf.MapField = require_mapfield();
  protobuf.Service = require_service2();
  protobuf.Method = require_method();
  protobuf.Message = require_message();
  protobuf.wrappers = require_wrappers();
  protobuf.types = require_types2();
  protobuf.util = require_util();
  protobuf.ReflectionObject._configure(protobuf.Root);
  protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);
  protobuf.Root._configure(protobuf.Type);
  protobuf.Field._configure(protobuf.Type);
});

// node_modules/protobufjs/src/tokenize.js
var require_tokenize = __commonJS((exports, module) => {
  var unescape = function(str) {
    return str.replace(unescapeRe, function($0, $1) {
      switch ($1) {
        case "\\":
        case "":
          return $1;
        default:
          return unescapeMap[$1] || "";
      }
    });
  };
  var tokenize = function(source, alternateCommentMode) {
    source = source.toString();
    var offset = 0, length = source.length, line = 1, lastCommentLine = 0, comments = {};
    var stack = [];
    var stringDelim = null;
    function illegal(subject) {
      return Error("illegal " + subject + " (line " + line + ")");
    }
    function readString() {
      var re = stringDelim === "'" ? stringSingleRe : stringDoubleRe;
      re.lastIndex = offset - 1;
      var match = re.exec(source);
      if (!match)
        throw illegal("string");
      offset = re.lastIndex;
      push(stringDelim);
      stringDelim = null;
      return unescape(match[1]);
    }
    function charAt(pos) {
      return source.charAt(pos);
    }
    function setComment(start, end, isLeading) {
      var comment = {
        type: source.charAt(start++),
        lineEmpty: false,
        leading: isLeading
      };
      var lookback;
      if (alternateCommentMode) {
        lookback = 2;
      } else {
        lookback = 3;
      }
      var commentOffset = start - lookback, c2;
      do {
        if (--commentOffset < 0 || (c2 = source.charAt(commentOffset)) === "\n") {
          comment.lineEmpty = true;
          break;
        }
      } while (c2 === " " || c2 === "\t");
      var lines = source.substring(start, end).split(setCommentSplitRe);
      for (var i2 = 0;i2 < lines.length; ++i2)
        lines[i2] = lines[i2].replace(alternateCommentMode ? setCommentAltRe : setCommentRe, "").trim();
      comment.text = lines.join("\n").trim();
      comments[line] = comment;
      lastCommentLine = line;
    }
    function isDoubleSlashCommentLine(startOffset) {
      var endOffset = findEndOfLine(startOffset);
      var lineText = source.substring(startOffset, endOffset);
      var isComment = /^\s*\/{1,2}/.test(lineText);
      return isComment;
    }
    function findEndOfLine(cursor) {
      var endOffset = cursor;
      while (endOffset < length && charAt(endOffset) !== "\n") {
        endOffset++;
      }
      return endOffset;
    }
    function next() {
      if (stack.length > 0)
        return stack.shift();
      if (stringDelim)
        return readString();
      var repeat, prev, curr, start, isDoc, isLeadingComment = offset === 0;
      do {
        if (offset === length)
          return null;
        repeat = false;
        while (whitespaceRe.test(curr = charAt(offset))) {
          if (curr === "\n") {
            isLeadingComment = true;
            ++line;
          }
          if (++offset === length)
            return null;
        }
        if (charAt(offset) === "/") {
          if (++offset === length) {
            throw illegal("comment");
          }
          if (charAt(offset) === "/") {
            if (!alternateCommentMode) {
              isDoc = charAt(start = offset + 1) === "/";
              while (charAt(++offset) !== "\n") {
                if (offset === length) {
                  return null;
                }
              }
              ++offset;
              if (isDoc) {
                setComment(start, offset - 1, isLeadingComment);
                isLeadingComment = true;
              }
              ++line;
              repeat = true;
            } else {
              start = offset;
              isDoc = false;
              if (isDoubleSlashCommentLine(offset)) {
                isDoc = true;
                do {
                  offset = findEndOfLine(offset);
                  if (offset === length) {
                    break;
                  }
                  offset++;
                  if (!isLeadingComment) {
                    break;
                  }
                } while (isDoubleSlashCommentLine(offset));
              } else {
                offset = Math.min(length, findEndOfLine(offset) + 1);
              }
              if (isDoc) {
                setComment(start, offset, isLeadingComment);
                isLeadingComment = true;
              }
              line++;
              repeat = true;
            }
          } else if ((curr = charAt(offset)) === "*") {
            start = offset + 1;
            isDoc = alternateCommentMode || charAt(start) === "*";
            do {
              if (curr === "\n") {
                ++line;
              }
              if (++offset === length) {
                throw illegal("comment");
              }
              prev = curr;
              curr = charAt(offset);
            } while (prev !== "*" || curr !== "/");
            ++offset;
            if (isDoc) {
              setComment(start, offset - 2, isLeadingComment);
              isLeadingComment = true;
            }
            repeat = true;
          } else {
            return "/";
          }
        }
      } while (repeat);
      var end = offset;
      delimRe.lastIndex = 0;
      var delim = delimRe.test(charAt(end++));
      if (!delim)
        while (end < length && !delimRe.test(charAt(end)))
          ++end;
      var token = source.substring(offset, offset = end);
      if (token === "\"" || token === "'")
        stringDelim = token;
      return token;
    }
    function push(token) {
      stack.push(token);
    }
    function peek() {
      if (!stack.length) {
        var token = next();
        if (token === null)
          return null;
        push(token);
      }
      return stack[0];
    }
    function skip(expected, optional) {
      var actual = peek(), equals = actual === expected;
      if (equals) {
        next();
        return true;
      }
      if (!optional)
        throw illegal("token '" + actual + "', '" + expected + "' expected");
      return false;
    }
    function cmnt(trailingLine) {
      var ret = null;
      var comment;
      if (trailingLine === undefined) {
        comment = comments[line - 1];
        delete comments[line - 1];
        if (comment && (alternateCommentMode || comment.type === "*" || comment.lineEmpty)) {
          ret = comment.leading ? comment.text : null;
        }
      } else {
        if (lastCommentLine < trailingLine) {
          peek();
        }
        comment = comments[trailingLine];
        delete comments[trailingLine];
        if (comment && !comment.lineEmpty && (alternateCommentMode || comment.type === "/")) {
          ret = comment.leading ? null : comment.text;
        }
      }
      return ret;
    }
    return Object.defineProperty({
      next,
      peek,
      push,
      skip,
      cmnt
    }, "line", {
      get: function() {
        return line;
      }
    });
  };
  module.exports = tokenize;
  var delimRe = /[\s{}=;:[\],'"()<>]/g;
  var stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
  var stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
  var setCommentRe = /^ *[*/]+ */;
  var setCommentAltRe = /^\s*\*?\/*/;
  var setCommentSplitRe = /\n/g;
  var whitespaceRe = /\s/;
  var unescapeRe = /\\(.?)/g;
  var unescapeMap = {
    "0": "\0",
    r: "\r",
    n: "\n",
    t: "\t"
  };
  tokenize.unescape = unescape;
});

// node_modules/protobufjs/src/parse.js
var require_parse = __commonJS((exports, module) => {
  var parse = function(source, root, options) {
    if (!(root instanceof Root)) {
      options = root;
      root = new Root;
    }
    if (!options)
      options = parse.defaults;
    var preferTrailingComment = options.preferTrailingComment || false;
    var tn = tokenize(source, options.alternateCommentMode || false), next = tn.next, push = tn.push, peek = tn.peek, skip = tn.skip, cmnt = tn.cmnt;
    var head = true, pkg, imports, weakImports, syntax, isProto3 = false;
    var ptr3 = root;
    var applyCase = options.keepCase ? function(name) {
      return name;
    } : util.camelCase;
    function illegal(token2, name, insideTryCatch) {
      var filename2 = parse.filename;
      if (!insideTryCatch)
        parse.filename = null;
      return Error("illegal " + (name || "token") + " '" + token2 + "' (" + (filename2 ? filename2 + ", " : "") + "line " + tn.line + ")");
    }
    function readString() {
      var values = [], token2;
      do {
        if ((token2 = next()) !== "\"" && token2 !== "'")
          throw illegal(token2);
        values.push(next());
        skip(token2);
        token2 = peek();
      } while (token2 === "\"" || token2 === "'");
      return values.join("");
    }
    function readValue(acceptTypeRef) {
      var token2 = next();
      switch (token2) {
        case "'":
        case "\"":
          push(token2);
          return readString();
        case "true":
        case "TRUE":
          return true;
        case "false":
        case "FALSE":
          return false;
      }
      try {
        return parseNumber(token2, true);
      } catch (e) {
        if (acceptTypeRef && typeRefRe.test(token2))
          return token2;
        throw illegal(token2, "value");
      }
    }
    function readRanges(target, acceptStrings) {
      var token2, start;
      do {
        if (acceptStrings && ((token2 = peek()) === "\"" || token2 === "'"))
          target.push(readString());
        else
          target.push([start = parseId(next()), skip("to", true) ? parseId(next()) : start]);
      } while (skip(",", true));
      skip(";");
    }
    function parseNumber(token2, insideTryCatch) {
      var sign = 1;
      if (token2.charAt(0) === "-") {
        sign = -1;
        token2 = token2.substring(1);
      }
      switch (token2) {
        case "inf":
        case "INF":
        case "Inf":
          return sign * Infinity;
        case "nan":
        case "NAN":
        case "Nan":
        case "NaN":
          return NaN;
        case "0":
          return 0;
      }
      if (base10Re.test(token2))
        return sign * parseInt(token2, 10);
      if (base16Re.test(token2))
        return sign * parseInt(token2, 16);
      if (base8Re.test(token2))
        return sign * parseInt(token2, 8);
      if (numberRe.test(token2))
        return sign * parseFloat(token2);
      throw illegal(token2, "number", insideTryCatch);
    }
    function parseId(token2, acceptNegative) {
      switch (token2) {
        case "max":
        case "MAX":
        case "Max":
          return 536870911;
        case "0":
          return 0;
      }
      if (!acceptNegative && token2.charAt(0) === "-")
        throw illegal(token2, "id");
      if (base10NegRe.test(token2))
        return parseInt(token2, 10);
      if (base16NegRe.test(token2))
        return parseInt(token2, 16);
      if (base8NegRe.test(token2))
        return parseInt(token2, 8);
      throw illegal(token2, "id");
    }
    function parsePackage() {
      if (pkg !== undefined)
        throw illegal("package");
      pkg = next();
      if (!typeRefRe.test(pkg))
        throw illegal(pkg, "name");
      ptr3 = ptr3.define(pkg);
      skip(";");
    }
    function parseImport() {
      var token2 = peek();
      var whichImports;
      switch (token2) {
        case "weak":
          whichImports = weakImports || (weakImports = []);
          next();
          break;
        case "public":
          next();
        default:
          whichImports = imports || (imports = []);
          break;
      }
      token2 = readString();
      skip(";");
      whichImports.push(token2);
    }
    function parseSyntax() {
      skip("=");
      syntax = readString();
      isProto3 = syntax === "proto3";
      if (!isProto3 && syntax !== "proto2")
        throw illegal(syntax, "syntax");
      skip(";");
    }
    function parseCommon(parent, token2) {
      switch (token2) {
        case "option":
          parseOption(parent, token2);
          skip(";");
          return true;
        case "message":
          parseType(parent, token2);
          return true;
        case "enum":
          parseEnum(parent, token2);
          return true;
        case "service":
          parseService(parent, token2);
          return true;
        case "extend":
          parseExtension(parent, token2);
          return true;
      }
      return false;
    }
    function ifBlock(obj, fnIf, fnElse) {
      var trailingLine = tn.line;
      if (obj) {
        if (typeof obj.comment !== "string") {
          obj.comment = cmnt();
        }
        obj.filename = parse.filename;
      }
      if (skip("{", true)) {
        var token2;
        while ((token2 = next()) !== "}")
          fnIf(token2);
        skip(";", true);
      } else {
        if (fnElse)
          fnElse();
        skip(";");
        if (obj && (typeof obj.comment !== "string" || preferTrailingComment))
          obj.comment = cmnt(trailingLine) || obj.comment;
      }
    }
    function parseType(parent, token2) {
      if (!nameRe.test(token2 = next()))
        throw illegal(token2, "type name");
      var type = new Type(token2);
      ifBlock(type, function parseType_block(token3) {
        if (parseCommon(type, token3))
          return;
        switch (token3) {
          case "map":
            parseMapField(type, token3);
            break;
          case "required":
          case "repeated":
            parseField(type, token3);
            break;
          case "optional":
            if (isProto3) {
              parseField(type, "proto3_optional");
            } else {
              parseField(type, "optional");
            }
            break;
          case "oneof":
            parseOneOf(type, token3);
            break;
          case "extensions":
            readRanges(type.extensions || (type.extensions = []));
            break;
          case "reserved":
            readRanges(type.reserved || (type.reserved = []), true);
            break;
          default:
            if (!isProto3 || !typeRefRe.test(token3))
              throw illegal(token3);
            push(token3);
            parseField(type, "optional");
            break;
        }
      });
      parent.add(type);
    }
    function parseField(parent, rule, extend) {
      var type = next();
      if (type === "group") {
        parseGroup(parent, rule);
        return;
      }
      while (type.endsWith(".") || peek().startsWith(".")) {
        type += next();
      }
      if (!typeRefRe.test(type))
        throw illegal(type, "type");
      var name = next();
      if (!nameRe.test(name))
        throw illegal(name, "name");
      name = applyCase(name);
      skip("=");
      var field = new Field(name, parseId(next()), type, rule, extend);
      ifBlock(field, function parseField_block(token2) {
        if (token2 === "option") {
          parseOption(field, token2);
          skip(";");
        } else
          throw illegal(token2);
      }, function parseField_line() {
        parseInlineOptions(field);
      });
      if (rule === "proto3_optional") {
        var oneof = new OneOf("_" + name);
        field.setOption("proto3_optional", true);
        oneof.add(field);
        parent.add(oneof);
      } else {
        parent.add(field);
      }
      if (!isProto3 && field.repeated && (types.packed[type] !== undefined || types.basic[type] === undefined))
        field.setOption("packed", false, true);
    }
    function parseGroup(parent, rule) {
      var name = next();
      if (!nameRe.test(name))
        throw illegal(name, "name");
      var fieldName = util.lcFirst(name);
      if (name === fieldName)
        name = util.ucFirst(name);
      skip("=");
      var id = parseId(next());
      var type = new Type(name);
      type.group = true;
      var field = new Field(fieldName, id, name, rule);
      field.filename = parse.filename;
      ifBlock(type, function parseGroup_block(token2) {
        switch (token2) {
          case "option":
            parseOption(type, token2);
            skip(";");
            break;
          case "required":
          case "repeated":
            parseField(type, token2);
            break;
          case "optional":
            if (isProto3) {
              parseField(type, "proto3_optional");
            } else {
              parseField(type, "optional");
            }
            break;
          case "message":
            parseType(type, token2);
            break;
          case "enum":
            parseEnum(type, token2);
            break;
          default:
            throw illegal(token2);
        }
      });
      parent.add(type).add(field);
    }
    function parseMapField(parent) {
      skip("<");
      var keyType = next();
      if (types.mapKey[keyType] === undefined)
        throw illegal(keyType, "type");
      skip(",");
      var valueType = next();
      if (!typeRefRe.test(valueType))
        throw illegal(valueType, "type");
      skip(">");
      var name = next();
      if (!nameRe.test(name))
        throw illegal(name, "name");
      skip("=");
      var field = new MapField(applyCase(name), parseId(next()), keyType, valueType);
      ifBlock(field, function parseMapField_block(token2) {
        if (token2 === "option") {
          parseOption(field, token2);
          skip(";");
        } else
          throw illegal(token2);
      }, function parseMapField_line() {
        parseInlineOptions(field);
      });
      parent.add(field);
    }
    function parseOneOf(parent, token2) {
      if (!nameRe.test(token2 = next()))
        throw illegal(token2, "name");
      var oneof = new OneOf(applyCase(token2));
      ifBlock(oneof, function parseOneOf_block(token3) {
        if (token3 === "option") {
          parseOption(oneof, token3);
          skip(";");
        } else {
          push(token3);
          parseField(oneof, "optional");
        }
      });
      parent.add(oneof);
    }
    function parseEnum(parent, token2) {
      if (!nameRe.test(token2 = next()))
        throw illegal(token2, "name");
      var enm = new Enum(token2);
      ifBlock(enm, function parseEnum_block(token3) {
        switch (token3) {
          case "option":
            parseOption(enm, token3);
            skip(";");
            break;
          case "reserved":
            readRanges(enm.reserved || (enm.reserved = []), true);
            break;
          default:
            parseEnumValue(enm, token3);
        }
      });
      parent.add(enm);
    }
    function parseEnumValue(parent, token2) {
      if (!nameRe.test(token2))
        throw illegal(token2, "name");
      skip("=");
      var value = parseId(next(), true), dummy = {
        options: undefined
      };
      dummy.setOption = function(name, value2) {
        if (this.options === undefined)
          this.options = {};
        this.options[name] = value2;
      };
      ifBlock(dummy, function parseEnumValue_block(token3) {
        if (token3 === "option") {
          parseOption(dummy, token3);
          skip(";");
        } else
          throw illegal(token3);
      }, function parseEnumValue_line() {
        parseInlineOptions(dummy);
      });
      parent.add(token2, value, dummy.comment, dummy.options);
    }
    function parseOption(parent, token2) {
      var isCustom = skip("(", true);
      if (!typeRefRe.test(token2 = next()))
        throw illegal(token2, "name");
      var name = token2;
      var option = name;
      var propName;
      if (isCustom) {
        skip(")");
        name = "(" + name + ")";
        option = name;
        token2 = peek();
        if (fqTypeRefRe.test(token2)) {
          propName = token2.slice(1);
          name += token2;
          next();
        }
      }
      skip("=");
      var optionValue = parseOptionValue(parent, name);
      setParsedOption(parent, option, optionValue, propName);
    }
    function parseOptionValue(parent, name) {
      if (skip("{", true)) {
        var objectResult = {};
        while (!skip("}", true)) {
          if (!nameRe.test(token = next())) {
            throw illegal(token, "name");
          }
          var value;
          var propName = token;
          skip(":", true);
          if (peek() === "{")
            value = parseOptionValue(parent, name + "." + token);
          else if (peek() === "[") {
            value = [];
            var lastValue;
            if (skip("[", true)) {
              do {
                lastValue = readValue(true);
                value.push(lastValue);
              } while (skip(",", true));
              skip("]");
              if (typeof lastValue !== "undefined") {
                setOption(parent, name + "." + token, lastValue);
              }
            }
          } else {
            value = readValue(true);
            setOption(parent, name + "." + token, value);
          }
          var prevValue = objectResult[propName];
          if (prevValue)
            value = [].concat(prevValue).concat(value);
          objectResult[propName] = value;
          skip(",", true);
          skip(";", true);
        }
        return objectResult;
      }
      var simpleValue = readValue(true);
      setOption(parent, name, simpleValue);
      return simpleValue;
    }
    function setOption(parent, name, value) {
      if (parent.setOption)
        parent.setOption(name, value);
    }
    function setParsedOption(parent, name, value, propName) {
      if (parent.setParsedOption)
        parent.setParsedOption(name, value, propName);
    }
    function parseInlineOptions(parent) {
      if (skip("[", true)) {
        do {
          parseOption(parent, "option");
        } while (skip(",", true));
        skip("]");
      }
      return parent;
    }
    function parseService(parent, token2) {
      if (!nameRe.test(token2 = next()))
        throw illegal(token2, "service name");
      var service = new Service(token2);
      ifBlock(service, function parseService_block(token3) {
        if (parseCommon(service, token3))
          return;
        if (token3 === "rpc")
          parseMethod(service, token3);
        else
          throw illegal(token3);
      });
      parent.add(service);
    }
    function parseMethod(parent, token2) {
      var commentText = cmnt();
      var type = token2;
      if (!nameRe.test(token2 = next()))
        throw illegal(token2, "name");
      var name = token2, requestType, requestStream, responseType, responseStream;
      skip("(");
      if (skip("stream", true))
        requestStream = true;
      if (!typeRefRe.test(token2 = next()))
        throw illegal(token2);
      requestType = token2;
      skip(")");
      skip("returns");
      skip("(");
      if (skip("stream", true))
        responseStream = true;
      if (!typeRefRe.test(token2 = next()))
        throw illegal(token2);
      responseType = token2;
      skip(")");
      var method = new Method(name, type, requestType, responseType, requestStream, responseStream);
      method.comment = commentText;
      ifBlock(method, function parseMethod_block(token3) {
        if (token3 === "option") {
          parseOption(method, token3);
          skip(";");
        } else
          throw illegal(token3);
      });
      parent.add(method);
    }
    function parseExtension(parent, token2) {
      if (!typeRefRe.test(token2 = next()))
        throw illegal(token2, "reference");
      var reference = token2;
      ifBlock(null, function parseExtension_block(token3) {
        switch (token3) {
          case "required":
          case "repeated":
            parseField(parent, token3, reference);
            break;
          case "optional":
            if (isProto3) {
              parseField(parent, "proto3_optional", reference);
            } else {
              parseField(parent, "optional", reference);
            }
            break;
          default:
            if (!isProto3 || !typeRefRe.test(token3))
              throw illegal(token3);
            push(token3);
            parseField(parent, "optional", reference);
            break;
        }
      });
    }
    var token;
    while ((token = next()) !== null) {
      switch (token) {
        case "package":
          if (!head)
            throw illegal(token);
          parsePackage();
          break;
        case "import":
          if (!head)
            throw illegal(token);
          parseImport();
          break;
        case "syntax":
          if (!head)
            throw illegal(token);
          parseSyntax();
          break;
        case "option":
          parseOption(ptr3, token);
          skip(";");
          break;
        default:
          if (parseCommon(ptr3, token)) {
            head = false;
            continue;
          }
          throw illegal(token);
      }
    }
    parse.filename = null;
    return {
      package: pkg,
      imports,
      weakImports,
      syntax,
      root
    };
  };
  module.exports = parse;
  parse.filename = null;
  parse.defaults = { keepCase: false };
  var tokenize = require_tokenize();
  var Root = require_root();
  var Type = require_type();
  var Field = require_field();
  var MapField = require_mapfield();
  var OneOf = require_oneof();
  var Enum = require_enum();
  var Service = require_service2();
  var Method = require_method();
  var types = require_types2();
  var util = require_util();
  var base10Re = /^[1-9][0-9]*$/;
  var base10NegRe = /^-?[1-9][0-9]*$/;
  var base16Re = /^0[x][0-9a-fA-F]+$/;
  var base16NegRe = /^-?0[x][0-9a-fA-F]+$/;
  var base8Re = /^0[0-7]+$/;
  var base8NegRe = /^-?0[0-7]+$/;
  var numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
  var nameRe = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
  var typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
  var fqTypeRefRe = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
});

// node_modules/protobufjs/src/common.js
var require_common2 = __commonJS((exports, module) => {
  var common = function(name, json) {
    if (!commonRe.test(name)) {
      name = "google/protobuf/" + name + ".proto";
      json = { nested: { google: { nested: { protobuf: { nested: json } } } } };
    }
    common[name] = json;
  };
  module.exports = common;
  var commonRe = /\/|\./;
  common("any", {
    Any: {
      fields: {
        type_url: {
          type: "string",
          id: 1
        },
        value: {
          type: "bytes",
          id: 2
        }
      }
    }
  });
  var timeType;
  common("duration", {
    Duration: timeType = {
      fields: {
        seconds: {
          type: "int64",
          id: 1
        },
        nanos: {
          type: "int32",
          id: 2
        }
      }
    }
  });
  common("timestamp", {
    Timestamp: timeType
  });
  common("empty", {
    Empty: {
      fields: {}
    }
  });
  common("struct", {
    Struct: {
      fields: {
        fields: {
          keyType: "string",
          type: "Value",
          id: 1
        }
      }
    },
    Value: {
      oneofs: {
        kind: {
          oneof: [
            "nullValue",
            "numberValue",
            "stringValue",
            "boolValue",
            "structValue",
            "listValue"
          ]
        }
      },
      fields: {
        nullValue: {
          type: "NullValue",
          id: 1
        },
        numberValue: {
          type: "double",
          id: 2
        },
        stringValue: {
          type: "string",
          id: 3
        },
        boolValue: {
          type: "bool",
          id: 4
        },
        structValue: {
          type: "Struct",
          id: 5
        },
        listValue: {
          type: "ListValue",
          id: 6
        }
      }
    },
    NullValue: {
      values: {
        NULL_VALUE: 0
      }
    },
    ListValue: {
      fields: {
        values: {
          rule: "repeated",
          type: "Value",
          id: 1
        }
      }
    }
  });
  common("wrappers", {
    DoubleValue: {
      fields: {
        value: {
          type: "double",
          id: 1
        }
      }
    },
    FloatValue: {
      fields: {
        value: {
          type: "float",
          id: 1
        }
      }
    },
    Int64Value: {
      fields: {
        value: {
          type: "int64",
          id: 1
        }
      }
    },
    UInt64Value: {
      fields: {
        value: {
          type: "uint64",
          id: 1
        }
      }
    },
    Int32Value: {
      fields: {
        value: {
          type: "int32",
          id: 1
        }
      }
    },
    UInt32Value: {
      fields: {
        value: {
          type: "uint32",
          id: 1
        }
      }
    },
    BoolValue: {
      fields: {
        value: {
          type: "bool",
          id: 1
        }
      }
    },
    StringValue: {
      fields: {
        value: {
          type: "string",
          id: 1
        }
      }
    },
    BytesValue: {
      fields: {
        value: {
          type: "bytes",
          id: 1
        }
      }
    }
  });
  common("field_mask", {
    FieldMask: {
      fields: {
        paths: {
          rule: "repeated",
          type: "string",
          id: 1
        }
      }
    }
  });
  common.get = function get(file) {
    return common[file] || null;
  };
});

// node_modules/protobufjs/src/index.js
var require_src = __commonJS((exports, module) => {
  var protobuf = module.exports = require_index_light();
  protobuf.build = "full";
  protobuf.tokenize = require_tokenize();
  protobuf.parse = require_parse();
  protobuf.common = require_common2();
  protobuf.Root._configure(protobuf.Type, protobuf.parse, protobuf.common);
});

// node_modules/youtubei/dist/cjs/youtube/SearchResult/proto/index.js
var require_proto = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.optionsToProto = exports.SearchProto = undefined;
  var protobufjs_1 = __importDefault(require_src());
  exports.SearchProto = protobufjs_1.default.parse(`
	message SearchOptions {
		message Options {
			optional int32 uploadDate = 1;
			optional int32 type = 2;
			optional int32 duration = 3;
			optional int32 hd = 4;
			optional int32 subtitles = 5;
			optional int32 creativeCommons = 6;
			optional int32 live = 8;
			optional int32 _4k = 14;
			optional int32 _360 = 15;
			optional int32 location = 23;
			optional int32 hdr = 25;
			optional int32 vr180 = 26;
		}

		optional int32 sortBy = 1;
		optional Options options = 2;
	}
`).root.lookupType("SearchOptions");
  var searchUploadDateProto = {
    all: 0,
    hour: 1,
    today: 2,
    week: 3,
    month: 4,
    year: 5
  };
  var searchTypeProto = {
    all: 0,
    video: 1,
    channel: 2,
    playlist: 3
  };
  var searchDurationProto = {
    all: 0,
    short: 1,
    long: 2,
    medium: 3
  };
  var searchSortProto = {
    relevance: 0,
    rating: 1,
    date: 2,
    view: 3
  };
  var optionsToProto = (options) => {
    var _a;
    const featuresRecord = ((_a = options.features) === null || _a === undefined ? undefined : _a.reduce((acc, val) => {
      if (val)
        acc[val] = 1;
      return acc;
    }, {})) || {};
    return {
      sortBy: options.sortBy && searchSortProto[options.sortBy],
      options: Object.assign({ duration: options.duration && searchDurationProto[options.duration], type: options.type && searchTypeProto[options.type], uploadDate: options.uploadDate && searchUploadDateProto[options.uploadDate] }, featuresRecord)
    };
  };
  exports.optionsToProto = optionsToProto;
});

// node_modules/youtubei/dist/cjs/youtube/SearchResult/SearchResult.js
var require_SearchResult = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SearchResult = exports.SearchEnum = undefined;
  var Continuable_1 = require_Continuable2();
  var constants_1 = require_constants2();
  var SearchResultParser_1 = require_SearchResultParser();
  var proto_1 = require_proto();
  var SearchEnum;
  (function(SearchEnum2) {
    let UploadDate;
    (function(UploadDate2) {
      UploadDate2["All"] = "all";
      UploadDate2["Hour"] = "hour";
      UploadDate2["Today"] = "today";
      UploadDate2["Week"] = "week";
      UploadDate2["Month"] = "month";
      UploadDate2["Year"] = "year";
    })(UploadDate = SearchEnum2.UploadDate || (SearchEnum2.UploadDate = {}));
    let Type;
    (function(Type2) {
      Type2["Video"] = "video";
      Type2["Playlist"] = "playlist";
      Type2["Channel"] = "channel";
      Type2["All"] = "all";
    })(Type = SearchEnum2.Type || (SearchEnum2.Type = {}));
    let Duration;
    (function(Duration2) {
      Duration2["All"] = "all";
      Duration2["Short"] = "short";
      Duration2["Medium"] = "medium";
      Duration2["Long"] = "long";
    })(Duration = SearchEnum2.Duration || (SearchEnum2.Duration = {}));
    let Sort;
    (function(Sort2) {
      Sort2["Relevance"] = "relevance";
      Sort2["Rating"] = "rating";
      Sort2["Date"] = "date";
      Sort2["View"] = "view";
    })(Sort = SearchEnum2.Sort || (SearchEnum2.Sort = {}));
    let Feature;
    (function(Feature2) {
      Feature2["Live"] = "live";
      Feature2["4K"] = "4k";
      Feature2["UHD"] = "4k";
      Feature2["HD"] = "hd";
      Feature2["Subtitles"] = "subtitles";
      Feature2["CreativeCommons"] = "creativeCommons";
      Feature2["Spherical"] = "360";
      Feature2["VR180"] = "vr180";
      Feature2["3D"] = "3d";
      Feature2["ThreeDimensions"] = "3d";
      Feature2["HDR"] = "hdr";
      Feature2["Location"] = "location";
    })(Feature = SearchEnum2.Feature || (SearchEnum2.Feature = {}));
  })(SearchEnum = exports.SearchEnum || (exports.SearchEnum = {}));

  class SearchResult extends Continuable_1.Continuable {
    constructor({ client }) {
      super({ client });
    }
    search(query, options) {
      return __awaiter(this, undefined, undefined, function* () {
        this.items = [];
        this.estimatedResults = 0;
        const bufferParams = proto_1.SearchProto.encode(proto_1.optionsToProto(options)).finish();
        const response = yield this.client.http.post(`${constants_1.I_END_POINT}/search`, {
          data: {
            query,
            params: Buffer.from(bufferParams).toString("base64")
          }
        });
        this.estimatedResults = +response.data.estimatedResults;
        if (this.estimatedResults > 0) {
          const { data: data2, continuation } = SearchResultParser_1.SearchResultParser.parseInitialSearchResult(response.data, this.client);
          this.items.push(...data2);
          this.continuation = continuation;
        }
        return this;
      });
    }
    fetch() {
      return __awaiter(this, undefined, undefined, function* () {
        const response = yield this.client.http.post(`${constants_1.I_END_POINT}/search`, {
          data: { continuation: this.continuation }
        });
        const { data: data2, continuation } = SearchResultParser_1.SearchResultParser.parseContinuationSearchResult(response.data, this.client);
        return {
          items: data2,
          continuation
        };
      });
    }
  }
  exports.SearchResult = SearchResult;
});

// node_modules/youtubei/dist/cjs/youtube/SearchResult/index.js
var require_SearchResult2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_SearchResult(), exports);
  __exportStar(require_SearchResultParser(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/Transcript/proto/TranscriptParamsProto.js
var require_TranscriptParamsProto = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TranscriptParamsProto = undefined;
  var protobufjs_1 = __importDefault(require_src());
  exports.TranscriptParamsProto = protobufjs_1.default.parse(`
	message TranscriptParams {
		optional string videoId = 1;
	}
`).root.lookupType("TranscriptParams");
});

// node_modules/youtubei/dist/cjs/youtube/Transcript/proto/index.js
var require_proto2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_TranscriptParamsProto(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/Transcript/TranscriptParser.js
var require_TranscriptParser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TranscriptParser = undefined;

  class TranscriptParser {
    static loadTranscript(target, data2) {
      const { cue, startOffsetMs, durationMs } = data2;
      target.text = cue.simpleText;
      target.duration = +durationMs;
      target.start = +startOffsetMs;
      return target;
    }
  }
  exports.TranscriptParser = TranscriptParser;
});

// node_modules/youtubei/dist/cjs/youtube/Transcript/Transcript.js
var require_Transcript = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Transcript = undefined;
  var TranscriptParser_1 = require_TranscriptParser();

  class Transcript {
    constructor(attr) {
      Object.assign(this, attr);
    }
    get end() {
      return this.start + this.duration;
    }
    load(data2) {
      TranscriptParser_1.TranscriptParser.loadTranscript(this, data2);
      return this;
    }
  }
  exports.Transcript = Transcript;
});

// node_modules/youtubei/dist/cjs/youtube/Transcript/index.js
var require_Transcript2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_proto2(), exports);
  __exportStar(require_Transcript(), exports);
  __exportStar(require_TranscriptParser(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/Reply/ReplyParser.js
var require_ReplyParser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ReplyParser = undefined;
  var common_1 = require_common();
  var BaseChannel_1 = require_BaseChannel2();

  class ReplyParser {
    static loadReply(target, data2) {
      const { authorText, authorThumbnail, authorEndpoint, contentText, publishedTimeText, commentId, likeCount, authorIsChannelOwner } = data2;
      target.id = commentId;
      target.content = contentText.runs.map((r2) => r2.text).join("");
      target.publishDate = publishedTimeText.runs.shift().text;
      target.likeCount = likeCount;
      target.isAuthorChannelOwner = authorIsChannelOwner;
      const { browseId } = authorEndpoint.browseEndpoint;
      target.author = new BaseChannel_1.BaseChannel({
        id: browseId,
        name: authorText.simpleText,
        thumbnails: new common_1.Thumbnails().load(authorThumbnail.thumbnails),
        client: target.client
      });
      return target;
    }
  }
  exports.ReplyParser = ReplyParser;
});

// node_modules/youtubei/dist/cjs/youtube/Reply/Reply.js
var require_Reply = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Reply = undefined;
  var Base_1 = require_Base2();
  var ReplyParser_1 = require_ReplyParser();

  class Reply extends Base_1.Base {
    constructor(attr) {
      super(attr.client);
      Object.assign(this, attr);
    }
    load(data2) {
      ReplyParser_1.ReplyParser.loadReply(this, data2);
      return this;
    }
  }
  exports.Reply = Reply;
});

// node_modules/youtubei/dist/cjs/youtube/Reply/index.js
var require_Reply2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_Reply(), exports);
  __exportStar(require_ReplyParser(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/Comment/CommentParser.js
var require_CommentParser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CommentParser = undefined;
  var common_1 = require_common();
  var BaseChannel_1 = require_BaseChannel2();
  var Reply_1 = require_Reply2();

  class CommentParser {
    static loadComment(target, data2) {
      const { authorText, authorThumbnail, authorEndpoint, contentText, publishedTimeText, commentId, voteCount, authorIsChannelOwner, pinnedCommentBadge, replyCount } = data2.comment.commentRenderer;
      target.id = commentId;
      target.content = contentText.runs.map((r2) => r2.text).join("");
      target.publishDate = publishedTimeText.runs.shift().text;
      target.likeCount = +((voteCount === null || voteCount === undefined ? undefined : voteCount.simpleText) || 0);
      target.isAuthorChannelOwner = authorIsChannelOwner;
      target.isPinned = !!pinnedCommentBadge;
      target.replyCount = replyCount;
      target.replies.continuation = data2.replies ? common_1.getContinuationFromItems(data2.replies.commentRepliesRenderer.contents) : undefined;
      const { browseId } = authorEndpoint.browseEndpoint;
      target.author = new BaseChannel_1.BaseChannel({
        id: browseId,
        name: authorText.simpleText,
        thumbnails: new common_1.Thumbnails().load(authorThumbnail.thumbnails),
        client: target.client
      });
      return target;
    }
    static parseContinuation(data2) {
      const continuationItems = data2.onResponseReceivedEndpoints[0].appendContinuationItemsAction.continuationItems;
      return common_1.getContinuationFromItems(continuationItems, ["button", "buttonRenderer", "command"]);
    }
    static parseReplies(data2, comment) {
      const continuationItems = data2.onResponseReceivedEndpoints[0].appendContinuationItemsAction.continuationItems;
      const rawReplies = common_1.mapFilter(continuationItems, "commentRenderer");
      return rawReplies.map((i2) => new Reply_1.Reply({ video: comment.video, comment, client: comment.client }).load(i2));
    }
  }
  exports.CommentParser = CommentParser;
});

// node_modules/youtubei/dist/cjs/youtube/Comment/CommentReplies.js
var require_CommentReplies = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.CommentReplies = undefined;
  var Continuable_1 = require_Continuable2();
  var constants_1 = require_constants2();
  var CommentParser_1 = require_CommentParser();

  class CommentReplies extends Continuable_1.Continuable {
    constructor({ client, comment }) {
      super({ client, strictContinuationCheck: true });
      this.comment = comment;
    }
    fetch() {
      return __awaiter(this, undefined, undefined, function* () {
        const response = yield this.client.http.post(`${constants_1.I_END_POINT}/next`, {
          data: { continuation: this.continuation }
        });
        const continuation = CommentParser_1.CommentParser.parseContinuation(response.data);
        const items = CommentParser_1.CommentParser.parseReplies(response.data, this.comment);
        return { continuation, items };
      });
    }
  }
  exports.CommentReplies = CommentReplies;
});

// node_modules/youtubei/dist/cjs/youtube/Comment/Comment.js
var require_Comment = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Comment = undefined;
  var Base_1 = require_Base2();
  var CommentParser_1 = require_CommentParser();
  var CommentReplies_1 = require_CommentReplies();

  class Comment extends Base_1.Base {
    constructor(attr) {
      super(attr.client);
      Object.assign(this, attr);
      this.replies = new CommentReplies_1.CommentReplies({ client: attr.client, comment: this });
    }
    load(data2) {
      CommentParser_1.CommentParser.loadComment(this, data2);
      return this;
    }
    get url() {
      return `https://www.youtube.com/watch?v=${this.video.id}&lc=${this.id}`;
    }
  }
  exports.Comment = Comment;
});

// node_modules/youtubei/dist/cjs/youtube/Comment/index.js
var require_Comment2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_Comment(), exports);
  __exportStar(require_CommentReplies(), exports);
  __exportStar(require_CommentParser(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/Video/VideoParser.js
var require_VideoParser = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.VideoParser = undefined;
  var common_1 = require_common();
  var BaseVideo_1 = require_BaseVideo2();
  var Comment_1 = require_Comment2();

  class VideoParser {
    static loadVideo(target, data2) {
      var _a, _b, _c;
      const videoInfo = BaseVideo_1.BaseVideoParser.parseRawData(data2);
      target.duration = +videoInfo.videoDetails.lengthSeconds;
      const itemSectionRenderer = (_a = data2[3].response.contents.twoColumnWatchNextResults.results.results.contents.reverse().find((c2) => c2.itemSectionRenderer)) === null || _a === undefined ? undefined : _a.itemSectionRenderer;
      target.comments.continuation = common_1.getContinuationFromItems((itemSectionRenderer === null || itemSectionRenderer === undefined ? undefined : itemSectionRenderer.contents) || []);
      const chapters = (_c = (_b = data2[3].response.playerOverlays.playerOverlayRenderer.decoratedPlayerBarRenderer) === null || _b === undefined ? undefined : _b.decoratedPlayerBarRenderer.playerBar.multiMarkersPlayerBarRenderer.markersMap) === null || _c === undefined ? undefined : _c[0].value.chapters;
      target.chapters = (chapters === null || chapters === undefined ? undefined : chapters.map(({ chapterRenderer: c2 }) => ({
        title: c2.title.simpleText,
        start: c2.timeRangeStartMillis,
        thumbnails: new common_1.Thumbnails().load(c2.thumbnail.thumbnails)
      }))) || [];
      return target;
    }
    static parseComments(data2, video) {
      const endpoints = data2.onResponseReceivedEndpoints.at(-1);
      const continuationItems = (endpoints.reloadContinuationItemsCommand || endpoints.appendContinuationItemsAction).continuationItems;
      const comments = common_1.mapFilter(continuationItems, "commentThreadRenderer");
      return comments.map((c2) => new Comment_1.Comment({ video, client: video.client }).load(c2));
    }
    static parseCommentContinuation(data2) {
      const endpoints = data2.onResponseReceivedEndpoints.at(-1);
      const continuationItems = (endpoints.reloadContinuationItemsCommand || endpoints.appendContinuationItemsAction).continuationItems;
      return common_1.getContinuationFromItems(continuationItems);
    }
  }
  exports.VideoParser = VideoParser;
});

// node_modules/youtubei/dist/cjs/youtube/Video/VideoComments.js
var require_VideoComments = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.VideoComments = undefined;
  var Continuable_1 = require_Continuable2();
  var constants_1 = require_constants2();
  var VideoParser_1 = require_VideoParser();

  class VideoComments extends Continuable_1.Continuable {
    constructor({ client, video }) {
      super({ client, strictContinuationCheck: true });
      this.video = video;
    }
    fetch() {
      return __awaiter(this, undefined, undefined, function* () {
        const response = yield this.client.http.post(`${constants_1.I_END_POINT}/next`, {
          data: { continuation: this.continuation }
        });
        const items = VideoParser_1.VideoParser.parseComments(response.data, this.video);
        const continuation = VideoParser_1.VideoParser.parseCommentContinuation(response.data);
        return { continuation, items };
      });
    }
  }
  exports.VideoComments = VideoComments;
});

// node_modules/youtubei/dist/cjs/youtube/Video/Video.js
var require_Video = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Video = undefined;
  var BaseVideo_1 = require_BaseVideo2();
  var VideoComments_1 = require_VideoComments();
  var VideoParser_1 = require_VideoParser();

  class Video extends BaseVideo_1.BaseVideo {
    constructor(attr) {
      super(attr);
      Object.assign(this, attr);
      this.comments = new VideoComments_1.VideoComments({ client: attr.client, video: this });
    }
    load(data2) {
      super.load(data2);
      VideoParser_1.VideoParser.loadVideo(this, data2);
      return this;
    }
    getTranscript() {
      return __awaiter(this, undefined, undefined, function* () {
        return this.client.getVideoTranscript(this.id);
      });
    }
  }
  exports.Video = Video;
});

// node_modules/youtubei/dist/cjs/youtube/Video/index.js
var require_Video2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_Video(), exports);
  __exportStar(require_VideoComments(), exports);
  __exportStar(require_VideoParser(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/Client/Client.js
var require_Client = __commonJS((exports) => {
  var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Client = undefined;
  var common_1 = require_common();
  var Channel_1 = require_Channel2();
  var LiveVideo_1 = require_LiveVideo2();
  var MixPlaylist_1 = require_MixPlaylist2();
  var Playlist_1 = require_Playlist2();
  var SearchResult_1 = require_SearchResult2();
  var Transcript_1 = require_Transcript2();
  var Video_1 = require_Video2();
  var constants_1 = require_constants2();

  class Client {
    constructor(options = {}) {
      const fullOptions = Object.assign(Object.assign({ initialCookie: "", fetchOptions: {} }, options), { youtubeClientOptions: Object.assign({ hl: "en", gl: "US" }, options.youtubeClientOptions) });
      this.http = new common_1.HTTP(Object.assign({ apiKey: constants_1.INNERTUBE_API_KEY, baseUrl: constants_1.BASE_URL, clientName: constants_1.INNERTUBE_CLIENT_NAME, clientVersion: constants_1.INNERTUBE_CLIENT_VERSION }, fullOptions));
    }
    search(query, options) {
      return __awaiter(this, undefined, undefined, function* () {
        const result = new SearchResult_1.SearchResult({ client: this });
        yield result.search(query, options || {});
        return result;
      });
    }
    findOne(query, options) {
      return __awaiter(this, undefined, undefined, function* () {
        const result = yield this.search(query, options);
        return result.items[0] || undefined;
      });
    }
    getPlaylist(playlistId) {
      var _a, _b, _c;
      return __awaiter(this, undefined, undefined, function* () {
        if (playlistId.startsWith("RD")) {
          const response2 = yield this.http.post(`${constants_1.I_END_POINT}/next`, {
            data: { playlistId }
          });
          if (response2.data.error) {
            return;
          }
          return new MixPlaylist_1.MixPlaylist({ client: this }).load(response2.data);
        }
        const response = yield this.http.post(`${constants_1.I_END_POINT}/browse`, {
          data: { browseId: `VL${playlistId}` }
        });
        if (response.data.error || ((_c = (_b = (_a = response.data.alerts) === null || _a === undefined ? undefined : _a.shift()) === null || _b === undefined ? undefined : _b.alertRenderer) === null || _c === undefined ? undefined : _c.type) === "ERROR") {
          return;
        }
        return new Playlist_1.Playlist({ client: this }).load(response.data);
      });
    }
    getVideo(videoId) {
      return __awaiter(this, undefined, undefined, function* () {
        const response = yield this.http.get(`${constants_1.WATCH_END_POINT}`, {
          params: { v: videoId, pbj: "1" }
        });
        if (!response.data[3].response.contents)
          return;
        return !response.data[2].playerResponse.playabilityStatus.liveStreamability ? new Video_1.Video({ client: this }).load(response.data) : new LiveVideo_1.LiveVideo({ client: this }).load(response.data);
      });
    }
    getChannel(channelId) {
      var _a, _b, _c;
      return __awaiter(this, undefined, undefined, function* () {
        const response = yield this.http.post(`${constants_1.I_END_POINT}/browse`, {
          data: { browseId: channelId }
        });
        if (response.data.error || ((_c = (_b = (_a = response.data.alerts) === null || _a === undefined ? undefined : _a.shift()) === null || _b === undefined ? undefined : _b.alertRenderer) === null || _c === undefined ? undefined : _c.type) === "ERROR") {
          return;
        }
        return new Channel_1.Channel({ client: this }).load(response.data);
      });
    }
    getVideoTranscript(videoId) {
      return __awaiter(this, undefined, undefined, function* () {
        const bufferParams = Transcript_1.TranscriptParamsProto.encode({ videoId }).finish();
        const response = yield this.http.post(`${constants_1.I_END_POINT}/get_transcript`, {
          data: { params: Buffer.from(bufferParams).toString("base64") }
        });
        if (!response.data.actions)
          return;
        return response.data.actions[0].updateEngagementPanelAction.content.transcriptRenderer.body.transcriptBodyRenderer.cueGroups.map((t) => t.transcriptCueGroupRenderer.cues[0].transcriptCueRenderer).map((t) => new Transcript_1.Transcript().load(t));
      });
    }
  }
  exports.Client = Client;
});

// node_modules/youtubei/dist/cjs/youtube/Client/index.js
var require_Client2 = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_Client(), exports);
});

// node_modules/youtubei/dist/cjs/youtube/index.js
var require_youtube = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_Base2(), exports);
  __exportStar(require_BaseChannel2(), exports);
  __exportStar(require_BaseVideo2(), exports);
  __exportStar(require_Channel2(), exports);
  __exportStar(require_Chat2(), exports);
  __exportStar(require_Client2(), exports);
  __exportStar(require_Comment2(), exports);
  __exportStar(require_Continuable2(), exports);
  __exportStar(require_LiveVideo2(), exports);
  __exportStar(require_MixPlaylist2(), exports);
  __exportStar(require_Playlist2(), exports);
  __exportStar(require_PlaylistCompact2(), exports);
  __exportStar(require_Reply2(), exports);
  __exportStar(require_SearchResult2(), exports);
  __exportStar(require_Transcript2(), exports);
  __exportStar(require_Video2(), exports);
  __exportStar(require_VideoCompact2(), exports);
});

// node_modules/youtubei/dist/cjs/index.js
var require_cjs = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    Object.defineProperty(o2, k2, { enumerable: true, get: function() {
      return m2[k];
    } });
  } : function(o2, m2, k, k2) {
    if (k2 === undefined)
      k2 = k;
    o2[k2] = m2[k];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_shared(), exports);
  __exportStar(require_music(), exports);
  __exportStar(require_youtube(), exports);
});

// node_modules/bun-promptx/dist/index.mjs
import {ptr} from "bun:ffi";
import {dlopen, FFIType, suffix} from "bun:ffi";
import {CString} from "bun:ffi";
import {ptr as ptr2} from "bun:ffi";
var { platform, arch } = process;
var filename;
if (arch === "x64") {
  filename = `../release/promptx-${platform}-amd64.${suffix}`;
} else {
  filename = `../release/promptx-${platform}-${arch}.${suffix}`;
}
var location = new URL(filename, import.meta.url).pathname;
var { symbols } = dlopen(location, {
  CreateSelection: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.int],
    returns: FFIType.ptr
  },
  CreatePrompt: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.bool, FFIType.int],
    returns: FFIType.ptr
  },
  FreeString: {
    args: [FFIType.ptr],
    returns: FFIType.void
  }
});
var utf8e = new TextEncoder;

// main.js
var { Client, MusicClient } = require_cjs();
var youtube = new Client;
var music = new MusicClient;
