import { defineComponent as rt, openBlock as ge, createElementBlock as Me, Fragment as Ft, renderList as Bt, createElementVNode as Te, normalizeClass as st, nextTick as Ht, ref as Vt, reactive as je, onMounted as Wt, watch as jt, createBlock as Ut, createCommentVNode as Qt } from "vue";
const Gt = {
  class: "promotion-dialog",
  open: ""
}, zt = ["aria-label", "onClick", "onTouchstartPassive"], Zt = /* @__PURE__ */ rt({
  __name: "PromotionDialog",
  props: {
    state: {}
  },
  emits: ["promotionSelected"],
  setup(t, { emit: e }) {
    const i = t, o = [
      { name: "Queen", data: "q" },
      { name: "Knight", data: "n" },
      { name: "Rook", data: "r" },
      { name: "Bishop", data: "b" }
    ];
    function n(r) {
      i.state.callback?.(r.data), e("promotionSelected");
    }
    return (r, s) => (ge(), Me("dialog", Gt, [
      (ge(), Me(Ft, null, Bt(o, (a) => Te("button", {
        key: a.name,
        type: "button",
        class: st([a.name.toLowerCase(), r.state.color]),
        "aria-label": a.name,
        onClick: (l) => n(a),
        onTouchstartPassive: (l) => n(a)
      }, null, 42, zt)), 64))
    ]));
  }
});
/**
 * @license
 * Copyright (c) 2023, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
const A = "w", q = "b", M = "p", Ae = "n", pe = "b", se = "r", Q = "q", P = "k", we = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", x = -1, Yt = {
  NORMAL: "n",
  CAPTURE: "c",
  BIG_PAWN: "b",
  EP_CAPTURE: "e",
  PROMOTION: "p",
  KSIDE_CASTLE: "k",
  QSIDE_CASTLE: "q"
}, Xt = [
  "a8",
  "b8",
  "c8",
  "d8",
  "e8",
  "f8",
  "g8",
  "h8",
  "a7",
  "b7",
  "c7",
  "d7",
  "e7",
  "f7",
  "g7",
  "h7",
  "a6",
  "b6",
  "c6",
  "d6",
  "e6",
  "f6",
  "g6",
  "h6",
  "a5",
  "b5",
  "c5",
  "d5",
  "e5",
  "f5",
  "g5",
  "h5",
  "a4",
  "b4",
  "c4",
  "d4",
  "e4",
  "f4",
  "g4",
  "h4",
  "a3",
  "b3",
  "c3",
  "d3",
  "e3",
  "f3",
  "g3",
  "h3",
  "a2",
  "b2",
  "c2",
  "d2",
  "e2",
  "f2",
  "g2",
  "h2",
  "a1",
  "b1",
  "c1",
  "d1",
  "e1",
  "f1",
  "g1",
  "h1"
], m = {
  NORMAL: 1,
  CAPTURE: 2,
  BIG_PAWN: 4,
  EP_CAPTURE: 8,
  PROMOTION: 16,
  KSIDE_CASTLE: 32,
  QSIDE_CASTLE: 64
}, b = {
  a8: 0,
  b8: 1,
  c8: 2,
  d8: 3,
  e8: 4,
  f8: 5,
  g8: 6,
  h8: 7,
  a7: 16,
  b7: 17,
  c7: 18,
  d7: 19,
  e7: 20,
  f7: 21,
  g7: 22,
  h7: 23,
  a6: 32,
  b6: 33,
  c6: 34,
  d6: 35,
  e6: 36,
  f6: 37,
  g6: 38,
  h6: 39,
  a5: 48,
  b5: 49,
  c5: 50,
  d5: 51,
  e5: 52,
  f5: 53,
  g5: 54,
  h5: 55,
  a4: 64,
  b4: 65,
  c4: 66,
  d4: 67,
  e4: 68,
  f4: 69,
  g4: 70,
  h4: 71,
  a3: 80,
  b3: 81,
  c3: 82,
  d3: 83,
  e3: 84,
  f3: 85,
  g3: 86,
  h3: 87,
  a2: 96,
  b2: 97,
  c2: 98,
  d2: 99,
  e2: 100,
  f2: 101,
  g2: 102,
  h2: 103,
  a1: 112,
  b1: 113,
  c1: 114,
  d1: 115,
  e1: 116,
  f1: 117,
  g1: 118,
  h1: 119
}, Se = {
  b: [16, 32, 17, 15],
  w: [-16, -32, -17, -15]
}, Ue = {
  n: [-18, -33, -31, -14, 18, 33, 31, 14],
  b: [-17, -15, 17, 15],
  r: [-16, 1, 16, -1],
  q: [-17, -16, -15, 1, 17, 16, 15, -1],
  k: [-17, -16, -15, 1, 17, 16, 15, -1]
}, Jt = [
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  24,
  0,
  0,
  20,
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
  20,
  2,
  24,
  2,
  20,
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
  2,
  53,
  56,
  53,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  24,
  24,
  24,
  24,
  24,
  56,
  0,
  56,
  24,
  24,
  24,
  24,
  24,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  53,
  56,
  53,
  2,
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
  20,
  2,
  24,
  2,
  20,
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
  20,
  0,
  0,
  24,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  20
], ei = [
  17,
  0,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  17,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  16,
  0,
  0,
  15,
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
  17,
  0,
  16,
  0,
  15,
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
  17,
  16,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  -16,
  -17,
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
  -15,
  0,
  -16,
  0,
  -17,
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
  -15,
  0,
  0,
  -16,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  0,
  -17,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  0,
  0,
  -17
], ti = { p: 1, n: 2, b: 4, r: 8, q: 16, k: 32 }, ii = "pnbrqkPNBRQK", Qe = [Ae, pe, se, Q], oi = 7, ni = 6, ri = 1, si = 0, he = {
  [P]: m.KSIDE_CASTLE,
  [Q]: m.QSIDE_CASTLE
}, W = {
  w: [
    { square: b.a1, flag: m.QSIDE_CASTLE },
    { square: b.h1, flag: m.KSIDE_CASTLE }
  ],
  b: [
    { square: b.a8, flag: m.QSIDE_CASTLE },
    { square: b.h8, flag: m.KSIDE_CASTLE }
  ]
}, ai = { b: ri, w: ni }, li = ["1-0", "0-1", "1/2-1/2", "*"];
function J(t) {
  return t >> 4;
}
function ae(t) {
  return t & 15;
}
function at(t) {
  return "0123456789".indexOf(t) !== -1;
}
function N(t) {
  const e = ae(t), i = J(t);
  return "abcdefgh".substring(e, e + 1) + "87654321".substring(i, i + 1);
}
function oe(t) {
  return t === A ? q : A;
}
function ci(t) {
  const e = t.split(/\s+/);
  if (e.length !== 6)
    return {
      ok: !1,
      error: "Invalid FEN: must contain six space-delimited fields"
    };
  const i = parseInt(e[5], 10);
  if (isNaN(i) || i <= 0)
    return {
      ok: !1,
      error: "Invalid FEN: move number must be a positive integer"
    };
  const o = parseInt(e[4], 10);
  if (isNaN(o) || o < 0)
    return {
      ok: !1,
      error: "Invalid FEN: half move counter number must be a non-negative integer"
    };
  if (!/^(-|[abcdefgh][36])$/.test(e[3]))
    return { ok: !1, error: "Invalid FEN: en-passant square is invalid" };
  if (/[^kKqQ-]/.test(e[2]))
    return { ok: !1, error: "Invalid FEN: castling availability is invalid" };
  if (!/^(w|b)$/.test(e[1]))
    return { ok: !1, error: "Invalid FEN: side-to-move is invalid" };
  const n = e[0].split("/");
  if (n.length !== 8)
    return {
      ok: !1,
      error: "Invalid FEN: piece data does not contain 8 '/'-delimited rows"
    };
  for (let s = 0; s < n.length; s++) {
    let a = 0, l = !1;
    for (let c = 0; c < n[s].length; c++)
      if (at(n[s][c])) {
        if (l)
          return {
            ok: !1,
            error: "Invalid FEN: piece data is invalid (consecutive number)"
          };
        a += parseInt(n[s][c], 10), l = !0;
      } else {
        if (!/^[prnbqkPRNBQK]$/.test(n[s][c]))
          return {
            ok: !1,
            error: "Invalid FEN: piece data is invalid (invalid piece)"
          };
        a += 1, l = !1;
      }
    if (a !== 8)
      return {
        ok: !1,
        error: "Invalid FEN: piece data is invalid (too many squares in rank)"
      };
  }
  if (e[3][1] == "3" && e[1] == "w" || e[3][1] == "6" && e[1] == "b")
    return { ok: !1, error: "Invalid FEN: illegal en-passant square" };
  const r = [
    { color: "white", regex: /K/g },
    { color: "black", regex: /k/g }
  ];
  for (const { color: s, regex: a } of r) {
    if (!a.test(e[0]))
      return { ok: !1, error: `Invalid FEN: missing ${s} king` };
    if ((e[0].match(a) || []).length > 1)
      return { ok: !1, error: `Invalid FEN: too many ${s} kings` };
  }
  return Array.from(n[0] + n[7]).some((s) => s.toUpperCase() === "P") ? {
    ok: !1,
    error: "Invalid FEN: some pawns are on the edge rows"
  } : { ok: !0 };
}
function di(t, e) {
  const i = t.from, o = t.to, n = t.piece;
  let r = 0, s = 0, a = 0;
  for (let l = 0, c = e.length; l < c; l++) {
    const p = e[l].from, u = e[l].to, d = e[l].piece;
    n === d && i !== p && o === u && (r++, J(i) === J(p) && s++, ae(i) === ae(p) && a++);
  }
  return r > 0 ? s > 0 && a > 0 ? N(i) : a > 0 ? N(i).charAt(1) : N(i).charAt(0) : "";
}
function j(t, e, i, o, n, r = void 0, s = m.NORMAL) {
  const a = J(o);
  if (n === M && (a === oi || a === si))
    for (let l = 0; l < Qe.length; l++) {
      const c = Qe[l];
      t.push({
        color: e,
        from: i,
        to: o,
        piece: n,
        captured: r,
        promotion: c,
        flags: s | m.PROMOTION
      });
    }
  else
    t.push({
      color: e,
      from: i,
      to: o,
      piece: n,
      captured: r,
      flags: s
    });
}
function Ge(t) {
  let e = t.charAt(0);
  return e >= "a" && e <= "h" ? t.match(/[a-h]\d.*[a-h]\d/) ? void 0 : M : (e = e.toLowerCase(), e === "o" ? P : e);
}
function ye(t) {
  return t.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
}
function ke(t) {
  return t.split(" ").slice(0, 4).join(" ");
}
class ui {
  _board = new Array(128);
  _turn = A;
  _header = {};
  _kings = { w: x, b: x };
  _epSquare = -1;
  _halfMoves = 0;
  _moveNumber = 0;
  _history = [];
  _comments = {};
  _castling = { w: 0, b: 0 };
  // tracks number of times a position has been seen for repetition checking
  _positionCount = {};
  constructor(e = we) {
    this.load(e);
  }
  clear({ preserveHeaders: e = !1 } = {}) {
    this._board = new Array(128), this._kings = { w: x, b: x }, this._turn = A, this._castling = { w: 0, b: 0 }, this._epSquare = x, this._halfMoves = 0, this._moveNumber = 1, this._history = [], this._comments = {}, this._header = e ? this._header : {}, this._positionCount = {}, delete this._header.SetUp, delete this._header.FEN;
  }
  removeHeader(e) {
    e in this._header && delete this._header[e];
  }
  load(e, { skipValidation: i = !0, preserveHeaders: o = !1 } = {}) {
    let n = e.split(/\s+/);
    if (n.length >= 2 && n.length < 6) {
      const a = ["-", "-", "0", "1"];
      e = n.concat(a.slice(-(6 - n.length))).join(" ");
    }
    if (n = e.split(/\s+/), !i) {
      const { ok: a, error: l } = ci(e);
      if (!a)
        throw new Error(l);
    }
    const r = n[0];
    let s = 0;
    this.clear({ preserveHeaders: o });
    for (let a = 0; a < r.length; a++) {
      const l = r.charAt(a);
      if (l === "/")
        s += 8;
      else if (at(l))
        s += parseInt(l, 10);
      else {
        const c = l < "a" ? A : q;
        this._put({ type: l.toLowerCase(), color: c }, N(s)), s++;
      }
    }
    this._turn = n[1], n[2].indexOf("K") > -1 && (this._castling.w |= m.KSIDE_CASTLE), n[2].indexOf("Q") > -1 && (this._castling.w |= m.QSIDE_CASTLE), n[2].indexOf("k") > -1 && (this._castling.b |= m.KSIDE_CASTLE), n[2].indexOf("q") > -1 && (this._castling.b |= m.QSIDE_CASTLE), this._epSquare = n[3] === "-" ? x : b[n[3]], this._halfMoves = parseInt(n[4], 10), this._moveNumber = parseInt(n[5], 10), this._updateSetup(e), this._incPositionCount(e);
  }
  fen() {
    let e = 0, i = "";
    for (let r = b.a8; r <= b.h1; r++) {
      if (this._board[r]) {
        e > 0 && (i += e, e = 0);
        const { color: s, type: a } = this._board[r];
        i += s === A ? a.toUpperCase() : a.toLowerCase();
      } else
        e++;
      r + 1 & 136 && (e > 0 && (i += e), r !== b.h1 && (i += "/"), e = 0, r += 8);
    }
    let o = "";
    this._castling[A] & m.KSIDE_CASTLE && (o += "K"), this._castling[A] & m.QSIDE_CASTLE && (o += "Q"), this._castling[q] & m.KSIDE_CASTLE && (o += "k"), this._castling[q] & m.QSIDE_CASTLE && (o += "q"), o = o || "-";
    let n = "-";
    if (this._epSquare !== x) {
      const r = this._epSquare + (this._turn === A ? 16 : -16), s = [r + 1, r - 1];
      for (const a of s) {
        if (a & 136)
          continue;
        const l = this._turn;
        if (this._board[a]?.color === l && this._board[a]?.type === M) {
          this._makeMove({
            color: l,
            from: a,
            to: this._epSquare,
            piece: M,
            captured: M,
            flags: m.EP_CAPTURE
          });
          const c = !this._isKingAttacked(l);
          if (this._undoMove(), c) {
            n = N(this._epSquare);
            break;
          }
        }
      }
    }
    return [
      i,
      this._turn,
      o,
      n,
      this._halfMoves,
      this._moveNumber
    ].join(" ");
  }
  /*
   * Called when the initial board setup is changed with put() or remove().
   * modifies the SetUp and FEN properties of the header object. If the FEN
   * is equal to the default position, the SetUp and FEN are deleted the setup
   * is only updated if history.length is zero, ie moves haven't been made.
   */
  _updateSetup(e) {
    this._history.length > 0 || (e !== we ? (this._header.SetUp = "1", this._header.FEN = e) : (delete this._header.SetUp, delete this._header.FEN));
  }
  reset() {
    this.load(we);
  }
  get(e) {
    return this._board[b[e]];
  }
  put({ type: e, color: i }, o) {
    return this._put({ type: e, color: i }, o) ? (this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), !0) : !1;
  }
  _put({ type: e, color: i }, o) {
    if (ii.indexOf(e.toLowerCase()) === -1 || !(o in b))
      return !1;
    const n = b[o];
    if (e == P && !(this._kings[i] == x || this._kings[i] == n))
      return !1;
    const r = this._board[n];
    return r && r.type === P && (this._kings[r.color] = x), this._board[n] = { type: e, color: i }, e === P && (this._kings[i] = n), !0;
  }
  remove(e) {
    const i = this.get(e);
    return delete this._board[b[e]], i && i.type === P && (this._kings[i.color] = x), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), i;
  }
  _updateCastlingRights() {
    const e = this._board[b.e1]?.type === P && this._board[b.e1]?.color === A, i = this._board[b.e8]?.type === P && this._board[b.e8]?.color === q;
    (!e || this._board[b.a1]?.type !== se || this._board[b.a1]?.color !== A) && (this._castling.w &= ~m.QSIDE_CASTLE), (!e || this._board[b.h1]?.type !== se || this._board[b.h1]?.color !== A) && (this._castling.w &= ~m.KSIDE_CASTLE), (!i || this._board[b.a8]?.type !== se || this._board[b.a8]?.color !== q) && (this._castling.b &= ~m.QSIDE_CASTLE), (!i || this._board[b.h8]?.type !== se || this._board[b.h8]?.color !== q) && (this._castling.b &= ~m.KSIDE_CASTLE);
  }
  _updateEnPassantSquare() {
    if (this._epSquare === x)
      return;
    const e = this._epSquare + (this._turn === A ? -16 : 16), i = this._epSquare + (this._turn === A ? 16 : -16), o = [i + 1, i - 1];
    if (this._board[e] !== null || this._board[this._epSquare] !== null || this._board[i]?.color !== oe(this._turn) || this._board[i]?.type !== M) {
      this._epSquare = x;
      return;
    }
    const n = (r) => !(r & 136) && this._board[r]?.color === this._turn && this._board[r]?.type === M;
    o.some(n) || (this._epSquare = x);
  }
  _attacked(e, i, o) {
    const n = [];
    for (let r = b.a8; r <= b.h1; r++) {
      if (r & 136) {
        r += 7;
        continue;
      }
      if (this._board[r] === void 0 || this._board[r].color !== e)
        continue;
      const s = this._board[r], a = r - i;
      if (a === 0)
        continue;
      const l = a + 119;
      if (Jt[l] & ti[s.type]) {
        if (s.type === M) {
          if (a > 0 && s.color === A || a <= 0 && s.color === q)
            if (o)
              n.push(N(r));
            else
              return !0;
          continue;
        }
        if (s.type === "n" || s.type === "k")
          if (o) {
            n.push(N(r));
            continue;
          } else
            return !0;
        const c = ei[l];
        let p = r + c, u = !1;
        for (; p !== i; ) {
          if (this._board[p] != null) {
            u = !0;
            break;
          }
          p += c;
        }
        if (!u)
          if (o) {
            n.push(N(r));
            continue;
          } else
            return !0;
      }
    }
    return o ? n : !1;
  }
  attackers(e, i) {
    return i ? this._attacked(i, b[e], !0) : this._attacked(this._turn, b[e], !0);
  }
  _isKingAttacked(e) {
    const i = this._kings[e];
    return i === -1 ? !1 : this._attacked(oe(e), i);
  }
  isAttacked(e, i) {
    return this._attacked(i, b[e]);
  }
  isCheck() {
    return this._isKingAttacked(this._turn);
  }
  inCheck() {
    return this.isCheck();
  }
  isCheckmate() {
    return this.isCheck() && this._moves().length === 0;
  }
  isStalemate() {
    return !this.isCheck() && this._moves().length === 0;
  }
  isInsufficientMaterial() {
    const e = {
      b: 0,
      n: 0,
      r: 0,
      q: 0,
      k: 0,
      p: 0
    }, i = [];
    let o = 0, n = 0;
    for (let r = b.a8; r <= b.h1; r++) {
      if (n = (n + 1) % 2, r & 136) {
        r += 7;
        continue;
      }
      const s = this._board[r];
      s && (e[s.type] = s.type in e ? e[s.type] + 1 : 1, s.type === pe && i.push(n), o++);
    }
    if (o === 2)
      return !0;
    if (
      // k vs. kn .... or .... k vs. kb
      o === 3 && (e[pe] === 1 || e[Ae] === 1)
    )
      return !0;
    if (o === e[pe] + 2) {
      let r = 0;
      const s = i.length;
      for (let a = 0; a < s; a++)
        r += i[a];
      if (r === 0 || r === s)
        return !0;
    }
    return !1;
  }
  isThreefoldRepetition() {
    return this._getPositionCount(this.fen()) >= 3;
  }
  isDraw() {
    return this._halfMoves >= 100 || // 50 moves per side = 100 half moves
    this.isStalemate() || this.isInsufficientMaterial() || this.isThreefoldRepetition();
  }
  isGameOver() {
    return this.isCheckmate() || this.isStalemate() || this.isDraw();
  }
  moves({ verbose: e = !1, square: i = void 0, piece: o = void 0 } = {}) {
    const n = this._moves({ square: i, piece: o });
    return e ? n.map((r) => this._makePretty(r)) : n.map((r) => this._moveToSan(r, n));
  }
  _moves({ legal: e = !0, piece: i = void 0, square: o = void 0 } = {}) {
    const n = o ? o.toLowerCase() : void 0, r = i?.toLowerCase(), s = [], a = this._turn, l = oe(a);
    let c = b.a8, p = b.h1, u = !1;
    if (n)
      if (n in b)
        c = p = b[n], u = !0;
      else
        return [];
    for (let h = c; h <= p; h++) {
      if (h & 136) {
        h += 7;
        continue;
      }
      if (!this._board[h] || this._board[h].color === l)
        continue;
      const { type: g } = this._board[h];
      let f;
      if (g === M) {
        if (r && r !== g)
          continue;
        f = h + Se[a][0], this._board[f] || (j(s, a, h, f, M), f = h + Se[a][1], ai[a] === J(h) && !this._board[f] && j(s, a, h, f, M, void 0, m.BIG_PAWN));
        for (let y = 2; y < 4; y++)
          f = h + Se[a][y], !(f & 136) && (this._board[f]?.color === l ? j(s, a, h, f, M, this._board[f].type, m.CAPTURE) : f === this._epSquare && j(s, a, h, f, M, M, m.EP_CAPTURE));
      } else {
        if (r && r !== g)
          continue;
        for (let y = 0, S = Ue[g].length; y < S; y++) {
          const k = Ue[g][y];
          for (f = h; f += k, !(f & 136); ) {
            if (!this._board[f])
              j(s, a, h, f, g);
            else {
              if (this._board[f].color === a)
                break;
              j(s, a, h, f, g, this._board[f].type, m.CAPTURE);
              break;
            }
            if (g === Ae || g === P)
              break;
          }
        }
      }
    }
    if ((r === void 0 || r === P) && (!u || p === this._kings[a])) {
      if (this._castling[a] & m.KSIDE_CASTLE) {
        const h = this._kings[a], g = h + 2;
        !this._board[h + 1] && !this._board[g] && !this._attacked(l, this._kings[a]) && !this._attacked(l, h + 1) && !this._attacked(l, g) && j(s, a, this._kings[a], g, P, void 0, m.KSIDE_CASTLE);
      }
      if (this._castling[a] & m.QSIDE_CASTLE) {
        const h = this._kings[a], g = h - 2;
        !this._board[h - 1] && !this._board[h - 2] && !this._board[h - 3] && !this._attacked(l, this._kings[a]) && !this._attacked(l, h - 1) && !this._attacked(l, g) && j(s, a, this._kings[a], g, P, void 0, m.QSIDE_CASTLE);
      }
    }
    if (!e || this._kings[a] === -1)
      return s;
    const d = [];
    for (let h = 0, g = s.length; h < g; h++)
      this._makeMove(s[h]), this._isKingAttacked(a) || d.push(s[h]), this._undoMove();
    return d;
  }
  move(e, { strict: i = !1 } = {}) {
    let o = null;
    if (typeof e == "string")
      o = this._moveFromSan(e, i);
    else if (typeof e == "object") {
      const r = this._moves();
      for (let s = 0, a = r.length; s < a; s++)
        if (e.from === N(r[s].from) && e.to === N(r[s].to) && (!("promotion" in r[s]) || e.promotion === r[s].promotion)) {
          o = r[s];
          break;
        }
    }
    if (!o)
      throw typeof e == "string" ? new Error(`Invalid move: ${e}`) : new Error(`Invalid move: ${JSON.stringify(e)}`);
    const n = this._makePretty(o);
    return this._makeMove(o), this._incPositionCount(n.after), n;
  }
  _push(e) {
    this._history.push({
      move: e,
      kings: { b: this._kings.b, w: this._kings.w },
      turn: this._turn,
      castling: { b: this._castling.b, w: this._castling.w },
      epSquare: this._epSquare,
      halfMoves: this._halfMoves,
      moveNumber: this._moveNumber
    });
  }
  _makeMove(e) {
    const i = this._turn, o = oe(i);
    if (this._push(e), this._board[e.to] = this._board[e.from], delete this._board[e.from], e.flags & m.EP_CAPTURE && (this._turn === q ? delete this._board[e.to - 16] : delete this._board[e.to + 16]), e.promotion && (this._board[e.to] = { type: e.promotion, color: i }), this._board[e.to].type === P) {
      if (this._kings[i] = e.to, e.flags & m.KSIDE_CASTLE) {
        const n = e.to - 1, r = e.to + 1;
        this._board[n] = this._board[r], delete this._board[r];
      } else if (e.flags & m.QSIDE_CASTLE) {
        const n = e.to + 1, r = e.to - 2;
        this._board[n] = this._board[r], delete this._board[r];
      }
      this._castling[i] = 0;
    }
    if (this._castling[i]) {
      for (let n = 0, r = W[i].length; n < r; n++)
        if (e.from === W[i][n].square && this._castling[i] & W[i][n].flag) {
          this._castling[i] ^= W[i][n].flag;
          break;
        }
    }
    if (this._castling[o]) {
      for (let n = 0, r = W[o].length; n < r; n++)
        if (e.to === W[o][n].square && this._castling[o] & W[o][n].flag) {
          this._castling[o] ^= W[o][n].flag;
          break;
        }
    }
    e.flags & m.BIG_PAWN ? i === q ? this._epSquare = e.to - 16 : this._epSquare = e.to + 16 : this._epSquare = x, e.piece === M ? this._halfMoves = 0 : e.flags & (m.CAPTURE | m.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, i === q && this._moveNumber++, this._turn = o;
  }
  undo() {
    const e = this._undoMove();
    if (e) {
      const i = this._makePretty(e);
      return this._decPositionCount(i.after), i;
    }
    return null;
  }
  _undoMove() {
    const e = this._history.pop();
    if (e === void 0)
      return null;
    const i = e.move;
    this._kings = e.kings, this._turn = e.turn, this._castling = e.castling, this._epSquare = e.epSquare, this._halfMoves = e.halfMoves, this._moveNumber = e.moveNumber;
    const o = this._turn, n = oe(o);
    if (this._board[i.from] = this._board[i.to], this._board[i.from].type = i.piece, delete this._board[i.to], i.captured)
      if (i.flags & m.EP_CAPTURE) {
        let r;
        o === q ? r = i.to - 16 : r = i.to + 16, this._board[r] = { type: M, color: n };
      } else
        this._board[i.to] = { type: i.captured, color: n };
    if (i.flags & (m.KSIDE_CASTLE | m.QSIDE_CASTLE)) {
      let r, s;
      i.flags & m.KSIDE_CASTLE ? (r = i.to + 1, s = i.to - 1) : (r = i.to - 2, s = i.to + 1), this._board[r] = this._board[s], delete this._board[s];
    }
    return i;
  }
  pgn({ newline: e = `
`, maxWidth: i = 0 } = {}) {
    const o = [];
    let n = !1;
    for (const d in this._header)
      o.push("[" + d + ' "' + this._header[d] + '"]' + e), n = !0;
    n && this._history.length && o.push(e);
    const r = (d) => {
      const h = this._comments[this.fen()];
      if (typeof h < "u") {
        const g = d.length > 0 ? " " : "";
        d = `${d}${g}{${h}}`;
      }
      return d;
    }, s = [];
    for (; this._history.length > 0; )
      s.push(this._undoMove());
    const a = [];
    let l = "";
    for (s.length === 0 && a.push(r("")); s.length > 0; ) {
      l = r(l);
      const d = s.pop();
      if (!d)
        break;
      if (!this._history.length && d.color === "b") {
        const h = `${this._moveNumber}. ...`;
        l = l ? `${l} ${h}` : h;
      } else
        d.color === "w" && (l.length && a.push(l), l = this._moveNumber + ".");
      l = l + " " + this._moveToSan(d, this._moves({ legal: !0 })), this._makeMove(d);
    }
    if (l.length && a.push(r(l)), typeof this._header.Result < "u" && a.push(this._header.Result), i === 0)
      return o.join("") + a.join(" ");
    const c = function() {
      return o.length > 0 && o[o.length - 1] === " " ? (o.pop(), !0) : !1;
    }, p = function(d, h) {
      for (const g of h.split(" "))
        if (g) {
          if (d + g.length > i) {
            for (; c(); )
              d--;
            o.push(e), d = 0;
          }
          o.push(g), d += g.length, o.push(" "), d++;
        }
      return c() && d--, d;
    };
    let u = 0;
    for (let d = 0; d < a.length; d++) {
      if (u + a[d].length > i && a[d].includes("{")) {
        u = p(u, a[d]);
        continue;
      }
      u + a[d].length > i && d !== 0 ? (o[o.length - 1] === " " && o.pop(), o.push(e), u = 0) : d !== 0 && (o.push(" "), u++), o.push(a[d]), u += a[d].length;
    }
    return o.join("");
  }
  header(...e) {
    for (let i = 0; i < e.length; i += 2)
      typeof e[i] == "string" && typeof e[i + 1] == "string" && (this._header[e[i]] = e[i + 1]);
    return this._header;
  }
  loadPgn(e, { strict: i = !1, newlineChar: o = `\r?
` } = {}) {
    function n(v) {
      return v.replace(/\\/g, "\\");
    }
    function r(v) {
      const T = {}, C = v.split(new RegExp(n(o)));
      let Z = "", Y = "";
      for (let _ = 0; _ < C.length; _++) {
        const V = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
        Z = C[_].replace(V, "$1"), Y = C[_].replace(V, "$2"), Z.trim().length > 0 && (T[Z] = Y);
      }
      return T;
    }
    e = e.trim();
    const a = new RegExp("^(\\[((?:" + n(o) + ")|.)*\\])((?:\\s*" + n(o) + "){2}|(?:\\s*" + n(o) + ")*$)").exec(e), l = a && a.length >= 2 ? a[1] : "";
    this.reset();
    const c = r(l);
    let p = "";
    for (const v in c)
      v.toLowerCase() === "fen" && (p = c[v]), this.header(v, c[v]);
    if (!i)
      p && this.load(p, { preserveHeaders: !0 });
    else if (c.SetUp === "1") {
      if (!("FEN" in c))
        throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
      this.load(c.FEN, { preserveHeaders: !0 });
    }
    function u(v) {
      return Array.from(v).map(function(T) {
        return T.charCodeAt(0) < 128 ? T.charCodeAt(0).toString(16) : encodeURIComponent(T).replace(/%/g, "").toLowerCase();
      }).join("");
    }
    function d(v) {
      return v.length == 0 ? "" : decodeURIComponent("%" + (v.match(/.{1,2}/g) || []).join("%"));
    }
    const h = function(v) {
      return v = v.replace(new RegExp(n(o), "g"), " "), `{${u(v.slice(1, v.length - 1))}}`;
    }, g = function(v) {
      if (v.startsWith("{") && v.endsWith("}"))
        return d(v.slice(1, v.length - 1));
    };
    let f = e.replace(l, "").replace(
      // encode comments so they don't get deleted below
      new RegExp(`({[^}]*})+?|;([^${n(o)}]*)`, "g"),
      function(v, T, C) {
        return T !== void 0 ? h(T) : " " + h(`{${C.slice(1)}}`);
      }
    ).replace(new RegExp(n(o), "g"), " ");
    const y = /(\([^()]+\))+?/g;
    for (; y.test(f); )
      f = f.replace(y, "");
    f = f.replace(/\d+\.(\.\.)?/g, ""), f = f.replace(/\.\.\./g, ""), f = f.replace(/\$\d+/g, "");
    let S = f.trim().split(new RegExp(/\s+/));
    S = S.filter((v) => v !== "");
    let k = "";
    for (let v = 0; v < S.length; v++) {
      const T = g(S[v]);
      if (T !== void 0) {
        this._comments[this.fen()] = T;
        continue;
      }
      const C = this._moveFromSan(S[v], i);
      if (C == null)
        if (li.indexOf(S[v]) > -1)
          k = S[v];
        else
          throw new Error(`Invalid move in PGN: ${S[v]}`);
      else
        k = "", this._makeMove(C), this._incPositionCount(this.fen());
    }
    k && Object.keys(this._header).length && !this._header.Result && this.header("Result", k);
  }
  /*
   * Convert a move from 0x88 coordinates to Standard Algebraic Notation
   * (SAN)
   *
   * @param {boolean} strict Use the strict SAN parser. It will throw errors
   * on overly disambiguated moves (see below):
   *
   * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
   * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
   * 4. ... Ne7 is technically the valid SAN
   */
  _moveToSan(e, i) {
    let o = "";
    if (e.flags & m.KSIDE_CASTLE)
      o = "O-O";
    else if (e.flags & m.QSIDE_CASTLE)
      o = "O-O-O";
    else {
      if (e.piece !== M) {
        const n = di(e, i);
        o += e.piece.toUpperCase() + n;
      }
      e.flags & (m.CAPTURE | m.EP_CAPTURE) && (e.piece === M && (o += N(e.from)[0]), o += "x"), o += N(e.to), e.promotion && (o += "=" + e.promotion.toUpperCase());
    }
    return this._makeMove(e), this.isCheck() && (this.isCheckmate() ? o += "#" : o += "+"), this._undoMove(), o;
  }
  // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
  _moveFromSan(e, i = !1) {
    const o = ye(e);
    let n = Ge(o), r = this._moves({ legal: !0, piece: n });
    for (let d = 0, h = r.length; d < h; d++)
      if (o === ye(this._moveToSan(r[d], r)))
        return r[d];
    if (i)
      return null;
    let s, a, l, c, p, u = !1;
    if (a = o.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/), a ? (s = a[1], l = a[2], c = a[3], p = a[4], l.length == 1 && (u = !0)) : (a = o.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), a && (s = a[1], l = a[2], c = a[3], p = a[4], l.length == 1 && (u = !0))), n = Ge(o), r = this._moves({
      legal: !0,
      piece: s || n
    }), !c)
      return null;
    for (let d = 0, h = r.length; d < h; d++)
      if (l) {
        if ((!s || s.toLowerCase() == r[d].piece) && b[l] == r[d].from && b[c] == r[d].to && (!p || p.toLowerCase() == r[d].promotion))
          return r[d];
        if (u) {
          const g = N(r[d].from);
          if ((!s || s.toLowerCase() == r[d].piece) && b[c] == r[d].to && (l == g[0] || l == g[1]) && (!p || p.toLowerCase() == r[d].promotion))
            return r[d];
        }
      } else if (o === ye(this._moveToSan(r[d], r)).replace("x", ""))
        return r[d];
    return null;
  }
  ascii() {
    let e = `   +------------------------+
`;
    for (let i = b.a8; i <= b.h1; i++) {
      if (ae(i) === 0 && (e += " " + "87654321"[J(i)] + " |"), this._board[i]) {
        const o = this._board[i].type, r = this._board[i].color === A ? o.toUpperCase() : o.toLowerCase();
        e += " " + r + " ";
      } else
        e += " . ";
      i + 1 & 136 && (e += `|
`, i += 8);
    }
    return e += `   +------------------------+
`, e += "     a  b  c  d  e  f  g  h", e;
  }
  perft(e) {
    const i = this._moves({ legal: !1 });
    let o = 0;
    const n = this._turn;
    for (let r = 0, s = i.length; r < s; r++)
      this._makeMove(i[r]), this._isKingAttacked(n) || (e - 1 > 0 ? o += this.perft(e - 1) : o++), this._undoMove();
    return o;
  }
  // pretty = external move object
  _makePretty(e) {
    const { color: i, piece: o, from: n, to: r, flags: s, captured: a, promotion: l } = e;
    let c = "";
    for (const h in m)
      m[h] & s && (c += Yt[h]);
    const p = N(n), u = N(r), d = {
      color: i,
      piece: o,
      from: p,
      to: u,
      san: this._moveToSan(e, this._moves({ legal: !0 })),
      flags: c,
      lan: p + u,
      before: this.fen(),
      after: ""
    };
    return this._makeMove(e), d.after = this.fen(), this._undoMove(), a && (d.captured = a), l && (d.promotion = l, d.lan += l), d;
  }
  turn() {
    return this._turn;
  }
  board() {
    const e = [];
    let i = [];
    for (let o = b.a8; o <= b.h1; o++)
      this._board[o] == null ? i.push(null) : i.push({
        square: N(o),
        type: this._board[o].type,
        color: this._board[o].color
      }), o + 1 & 136 && (e.push(i), i = [], o += 8);
    return e;
  }
  squareColor(e) {
    if (e in b) {
      const i = b[e];
      return (J(i) + ae(i)) % 2 === 0 ? "light" : "dark";
    }
    return null;
  }
  history({ verbose: e = !1 } = {}) {
    const i = [], o = [];
    for (; this._history.length > 0; )
      i.push(this._undoMove());
    for (; ; ) {
      const n = i.pop();
      if (!n)
        break;
      e ? o.push(this._makePretty(n)) : o.push(this._moveToSan(n, this._moves())), this._makeMove(n);
    }
    return o;
  }
  /*
   * Keeps track of position occurrence counts for the purpose of repetition
   * checking. All three methods (`_inc`, `_dec`, and `_get`) trim the
   * irrelevent information from the fen, initialising new positions, and
   * removing old positions from the record if their counts are reduced to 0.
   */
  _getPositionCount(e) {
    const i = ke(e);
    return this._positionCount[i] || 0;
  }
  _incPositionCount(e) {
    const i = ke(e);
    this._positionCount[i] === void 0 && (this._positionCount[i] = 0), this._positionCount[i] += 1;
  }
  _decPositionCount(e) {
    const i = ke(e);
    this._positionCount[i] === 1 ? delete this._positionCount[i] : this._positionCount[i] -= 1;
  }
  _pruneComments() {
    const e = [], i = {}, o = (n) => {
      n in this._comments && (i[n] = this._comments[n]);
    };
    for (; this._history.length > 0; )
      e.push(this._undoMove());
    for (o(this.fen()); ; ) {
      const n = e.pop();
      if (!n)
        break;
      this._makeMove(n), o(this.fen());
    }
    this._comments = i;
  }
  getComment() {
    return this._comments[this.fen()];
  }
  setComment(e) {
    this._comments[this.fen()] = e.replace("{", "[").replace("}", "]");
  }
  deleteComment() {
    const e = this._comments[this.fen()];
    return delete this._comments[this.fen()], e;
  }
  getComments() {
    return this._pruneComments(), Object.keys(this._comments).map((e) => ({ fen: e, comment: this._comments[e] }));
  }
  deleteComments() {
    return this._pruneComments(), Object.keys(this._comments).map((e) => {
      const i = this._comments[e];
      return delete this._comments[e], { fen: e, comment: i };
    });
  }
  setCastlingRights(e, i) {
    for (const n of [P, Q])
      i[n] !== void 0 && (i[n] ? this._castling[e] |= he[n] : this._castling[e] &= ~he[n]);
    this._updateCastlingRights();
    const o = this.getCastlingRights(e);
    return (i[P] === void 0 || i[P] === o[P]) && (i[Q] === void 0 || i[Q] === o[Q]);
  }
  getCastlingRights(e) {
    return {
      [P]: (this._castling[e] & he[P]) !== 0,
      [Q]: (this._castling[e] & he[Q]) !== 0
    };
  }
  moveNumber() {
    return this._moveNumber;
  }
}
function hi(t) {
  const e = [];
  for (const i of t)
    e.push({ orig: i.to, brush: "yellow" }), i.captured && e.push({ orig: i.from, dest: i.to, brush: "red" }), i.san.includes("+") && e.push({ orig: i.from, dest: i.to, brush: "blue" });
  return e;
}
function fe(t) {
  return t === "w" ? "white" : "black";
}
function ze(t) {
  const e = /* @__PURE__ */ new Map();
  for (const i of Xt) {
    const o = t.moves({ square: i, verbose: !0 });
    o.length && e.set(
      o[0].from,
      o.map((n) => n.to)
    );
  }
  return e;
}
function fi(t, e) {
  if (e?.type !== "p")
    return !1;
  const i = e?.color === "w" ? "8" : "1";
  return t[1] === i;
}
function le(t) {
  return !!t && t instanceof Object && !(t instanceof Array) && !(t instanceof Function);
}
function me(t) {
  return le(t) ? Object.fromEntries(
    Object.entries(t).map(([e, i]) => [
      e,
      me(i)
    ])
  ) : t;
}
function lt(t, e) {
  const i = { ...t, ...e };
  for (const o in i)
    i[o] = le(t?.[o]) && le(e?.[o]) ? lt(t[o], e[o]) : me(i[o]);
  return i;
}
function ct(t, e) {
  const i = {};
  for (const o in e)
    if (le(t?.[o]) && le(e?.[o])) {
      const n = ct(
        t[o],
        e[o]
      );
      Object.keys(n).length > 0 && (i[o] = n);
    } else
      t?.[o] !== e[o] && (i[o] = e[o]);
  return i;
}
const pi = {
  p: "pawn",
  n: "knight",
  b: "bishop",
  r: "rook",
  q: "queen",
  k: "king"
}, gi = /* @__PURE__ */ new Map([
  ["b1", ["a3", "c3"]],
  ["g1", ["f3", "h3"]],
  ["a2", ["a3", "a4"]],
  ["b2", ["b3", "b4"]],
  ["c2", ["c3", "c4"]],
  ["d2", ["d3", "d4"]],
  ["e2", ["e3", "e4"]],
  ["f2", ["f3", "f4"]],
  ["g2", ["g3", "g4"]],
  ["h2", ["h3", "h4"]]
]), mi = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", bi = {
  fen: mi,
  orientation: "white",
  turnColor: "white",
  coordinates: !1,
  autoCastle: !0,
  viewOnly: !1,
  disableContextMenu: !1,
  addPieceZIndex: !1,
  blockTouchScroll: !1,
  highlight: {
    lastMove: !0,
    check: !0
  },
  animation: {
    enabled: !0,
    duration: 300
  },
  lastMove: void 0,
  movable: {
    free: !1,
    color: "white",
    showDests: !0,
    dests: gi,
    // We need to specify movable.events.after as an empty function so that we always have something to patch
    // BoardApi.changeTurn onto. Other functions need to be specifed as undefined so that BoardApi.setConfig
    // can reset values back to undefined, eg. if the user calls BoardApi.setConfig({}, true).
    //
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    events: { after: () => {
    }, afterNewPiece: void 0 },
    rookCastle: !0
  },
  premovable: {
    enabled: !0,
    showDests: !0,
    castle: !0,
    events: { set: void 0, unset: void 0 }
  },
  predroppable: {
    enabled: !1,
    events: { set: void 0, unset: void 0 }
  },
  draggable: {
    enabled: !0,
    distance: 3,
    autoDistance: !0,
    showGhost: !0,
    deleteOnDropOff: !1
  },
  selectable: {
    enabled: !0
  },
  events: {
    change: void 0,
    move: void 0,
    dropNewPiece: void 0,
    select: void 0,
    insert: void 0
  },
  drawable: {
    enabled: !0,
    visible: !0,
    defaultSnapToValidMove: !0,
    eraseOnClick: !0,
    shapes: [],
    autoShapes: [],
    brushes: {
      green: { key: "g", color: "#15781B", opacity: 1, lineWidth: 10 },
      red: { key: "r", color: "#882020", opacity: 1, lineWidth: 10 },
      blue: { key: "b", color: "#003088", opacity: 1, lineWidth: 10 },
      yellow: { key: "y", color: "#e68f00", opacity: 1, lineWidth: 10 },
      paleBlue: { key: "pb", color: "#003088", opacity: 0.4, lineWidth: 15 },
      paleGreen: { key: "pg", color: "#15781B", opacity: 0.4, lineWidth: 15 },
      paleRed: { key: "pr", color: "#882020", opacity: 0.4, lineWidth: 15 },
      paleGrey: {
        key: "pgr",
        color: "#4a4a4a",
        opacity: 0.35,
        lineWidth: 15
      }
    }
  }
}, vi = ["white", "black"], Oe = ["a", "b", "c", "d", "e", "f", "g", "h"], qe = ["1", "2", "3", "4", "5", "6", "7", "8"], _i = [...qe].reverse(), Re = Array.prototype.concat(...Oe.map((t) => qe.map((e) => t + e))), R = (t) => Re[8 * t[0] + t[1]], w = (t) => [t.charCodeAt(0) - 97, t.charCodeAt(1) - 49], dt = Re.map(w);
function wi(t) {
  let e;
  const i = () => (e === void 0 && (e = t()), e);
  return i.clear = () => {
    e = void 0;
  }, i;
}
const Si = () => {
  let t;
  return {
    start() {
      t = performance.now();
    },
    cancel() {
      t = void 0;
    },
    stop() {
      if (!t)
        return 0;
      const e = performance.now() - t;
      return t = void 0, e;
    }
  };
}, Le = (t) => t === "white" ? "black" : "white", ce = (t, e) => {
  const i = t[0] - e[0], o = t[1] - e[1];
  return i * i + o * o;
}, Ne = (t, e) => t.role === e.role && t.color === e.color, de = (t) => (e, i) => [
  (i ? e[0] : 7 - e[0]) * t.width / 8,
  (i ? 7 - e[1] : e[1]) * t.height / 8
], F = (t, e) => {
  t.style.transform = `translate(${e[0]}px,${e[1]}px)`;
}, ut = (t, e, i = 1) => {
  t.style.transform = `translate(${e[0]}px,${e[1]}px) scale(${i})`;
}, Ke = (t, e) => {
  t.style.visibility = e ? "visible" : "hidden";
}, te = (t) => {
  var e;
  if (t.clientX || t.clientX === 0)
    return [t.clientX, t.clientY];
  if (!((e = t.targetTouches) === null || e === void 0) && e[0])
    return [t.targetTouches[0].clientX, t.targetTouches[0].clientY];
}, ht = (t) => t.buttons === 2 || t.button === 2, H = (t, e) => {
  const i = document.createElement(t);
  return e && (i.className = e), i;
};
function ft(t, e, i) {
  const o = w(t);
  return e || (o[0] = 7 - o[0], o[1] = 7 - o[1]), [
    i.left + i.width * o[0] / 8 + i.width / 16,
    i.top + i.height * (7 - o[1]) / 8 + i.height / 16
  ];
}
const ee = (t, e) => Math.abs(t - e), yi = (t) => (e, i, o, n) => ee(e, o) < 2 && (t === "white" ? (
  // allow 2 squares from first two ranks, for horde
  n === i + 1 || i <= 1 && n === i + 2 && e === o
) : n === i - 1 || i >= 6 && n === i - 2 && e === o), pt = (t, e, i, o) => {
  const n = ee(t, i), r = ee(e, o);
  return n === 1 && r === 2 || n === 2 && r === 1;
}, gt = (t, e, i, o) => ee(t, i) === ee(e, o), mt = (t, e, i, o) => t === i || e === o, bt = (t, e, i, o) => gt(t, e, i, o) || mt(t, e, i, o), ki = (t, e, i) => (o, n, r, s) => ee(o, r) < 2 && ee(n, s) < 2 || i && n === s && n === (t === "white" ? 0 : 7) && (o === 4 && (r === 2 && e.includes(0) || r === 6 && e.includes(7)) || e.includes(r));
function Ci(t, e) {
  const i = e === "white" ? "1" : "8", o = [];
  for (const [n, r] of t)
    n[1] === i && r.color === e && r.role === "rook" && o.push(w(n)[0]);
  return o;
}
function vt(t, e, i) {
  const o = t.get(e);
  if (!o)
    return [];
  const n = w(e), r = o.role, s = r === "pawn" ? yi(o.color) : r === "knight" ? pt : r === "bishop" ? gt : r === "rook" ? mt : r === "queen" ? bt : ki(o.color, Ci(t, o.color), i);
  return dt.filter((a) => (n[0] !== a[0] || n[1] !== a[1]) && s(n[0], n[1], a[0], a[1])).map(R);
}
function D(t, ...e) {
  t && setTimeout(() => t(...e), 1);
}
function Pi(t) {
  t.orientation = Le(t.orientation), t.animation.current = t.draggable.current = t.selected = void 0;
}
function Ei(t, e) {
  for (const [i, o] of e)
    o ? t.pieces.set(i, o) : t.pieces.delete(i);
}
function Mi(t, e) {
  if (t.check = void 0, e === !0 && (e = t.turnColor), e)
    for (const [i, o] of t.pieces)
      o.role === "king" && o.color === e && (t.check = i);
}
function Ti(t, e, i, o) {
  z(t), t.premovable.current = [e, i], D(t.premovable.events.set, e, i, o);
}
function G(t) {
  t.premovable.current && (t.premovable.current = void 0, D(t.premovable.events.unset));
}
function Ai(t, e, i) {
  G(t), t.predroppable.current = { role: e, key: i }, D(t.predroppable.events.set, e, i);
}
function z(t) {
  const e = t.predroppable;
  e.current && (e.current = void 0, D(e.events.unset));
}
function Ni(t, e, i) {
  if (!t.autoCastle)
    return !1;
  const o = t.pieces.get(e);
  if (!o || o.role !== "king")
    return !1;
  const n = w(e), r = w(i);
  if (n[1] !== 0 && n[1] !== 7 || n[1] !== r[1])
    return !1;
  n[0] === 4 && !t.pieces.has(i) && (r[0] === 6 ? i = R([7, r[1]]) : r[0] === 2 && (i = R([0, r[1]])));
  const s = t.pieces.get(i);
  return !s || s.color !== o.color || s.role !== "rook" ? !1 : (t.pieces.delete(e), t.pieces.delete(i), n[0] < r[0] ? (t.pieces.set(R([6, r[1]]), o), t.pieces.set(R([5, r[1]]), s)) : (t.pieces.set(R([2, r[1]]), o), t.pieces.set(R([3, r[1]]), s)), !0);
}
function _t(t, e, i) {
  const o = t.pieces.get(e), n = t.pieces.get(i);
  if (e === i || !o)
    return !1;
  const r = n && n.color !== o.color ? n : void 0;
  return i === t.selected && L(t), D(t.events.move, e, i, r), Ni(t, e, i) || (t.pieces.set(i, o), t.pieces.delete(e)), t.lastMove = [e, i], t.check = void 0, D(t.events.change), r || !0;
}
function $e(t, e, i, o) {
  if (t.pieces.has(i))
    if (o)
      t.pieces.delete(i);
    else
      return !1;
  return D(t.events.dropNewPiece, e, i), t.pieces.set(i, e), t.lastMove = [i], t.check = void 0, D(t.events.change), t.movable.dests = void 0, t.turnColor = Le(t.turnColor), !0;
}
function wt(t, e, i) {
  const o = _t(t, e, i);
  return o && (t.movable.dests = void 0, t.turnColor = Le(t.turnColor), t.animation.current = void 0), o;
}
function St(t, e, i) {
  if (Fe(t, e, i)) {
    const o = wt(t, e, i);
    if (o) {
      const n = t.hold.stop();
      L(t);
      const r = {
        premove: !1,
        ctrlKey: t.stats.ctrlKey,
        holdTime: n
      };
      return o !== !0 && (r.captured = o), D(t.movable.events.after, e, i, r), !0;
    }
  } else if (xi(t, e, i))
    return Ti(t, e, i, {
      ctrlKey: t.stats.ctrlKey
    }), L(t), !0;
  return L(t), !1;
}
function yt(t, e, i, o) {
  const n = t.pieces.get(e);
  n && (Ii(t, e, i) || o) ? (t.pieces.delete(e), $e(t, n, i, o), D(t.movable.events.afterNewPiece, n.role, i, {
    premove: !1,
    predrop: !1
  })) : n && Di(t, e, i) ? Ai(t, n.role, i) : (G(t), z(t)), t.pieces.delete(e), L(t);
}
function Ie(t, e, i) {
  if (D(t.events.select, e), t.selected) {
    if (t.selected === e && !t.draggable.enabled) {
      L(t), t.hold.cancel();
      return;
    } else if ((t.selectable.enabled || i) && t.selected !== e && St(t, t.selected, e)) {
      t.stats.dragged = !1;
      return;
    }
  }
  (t.selectable.enabled || t.draggable.enabled) && (Ct(t, e) || Be(t, e)) && (kt(t, e), t.hold.start());
}
function kt(t, e) {
  t.selected = e, Be(t, e) ? t.premovable.customDests || (t.premovable.dests = vt(t.pieces, e, t.premovable.castle)) : t.premovable.dests = void 0;
}
function L(t) {
  t.selected = void 0, t.premovable.dests = void 0, t.hold.cancel();
}
function Ct(t, e) {
  const i = t.pieces.get(e);
  return !!i && (t.movable.color === "both" || t.movable.color === i.color && t.turnColor === i.color);
}
const Fe = (t, e, i) => {
  var o, n;
  return e !== i && Ct(t, e) && (t.movable.free || !!(!((n = (o = t.movable.dests) === null || o === void 0 ? void 0 : o.get(e)) === null || n === void 0) && n.includes(i)));
};
function Ii(t, e, i) {
  const o = t.pieces.get(e);
  return !!o && (e === i || !t.pieces.has(i)) && (t.movable.color === "both" || t.movable.color === o.color && t.turnColor === o.color);
}
function Be(t, e) {
  const i = t.pieces.get(e);
  return !!i && t.premovable.enabled && t.movable.color === i.color && t.turnColor !== i.color;
}
function xi(t, e, i) {
  var o, n;
  const r = (n = (o = t.premovable.customDests) === null || o === void 0 ? void 0 : o.get(e)) !== null && n !== void 0 ? n : vt(t.pieces, e, t.premovable.castle);
  return e !== i && Be(t, e) && r.includes(i);
}
function Di(t, e, i) {
  const o = t.pieces.get(e), n = t.pieces.get(i);
  return !!o && (!n || n.color !== t.movable.color) && t.predroppable.enabled && (o.role !== "pawn" || i[1] !== "1" && i[1] !== "8") && t.movable.color === o.color && t.turnColor !== o.color;
}
function Oi(t, e) {
  const i = t.pieces.get(e);
  return !!i && t.draggable.enabled && (t.movable.color === "both" || t.movable.color === i.color && (t.turnColor === i.color || t.premovable.enabled));
}
function qi(t) {
  const e = t.premovable.current;
  if (!e)
    return !1;
  const i = e[0], o = e[1];
  let n = !1;
  if (Fe(t, i, o)) {
    const r = wt(t, i, o);
    if (r) {
      const s = { premove: !0 };
      r !== !0 && (s.captured = r), D(t.movable.events.after, i, o, s), n = !0;
    }
  }
  return G(t), n;
}
function Ri(t, e) {
  const i = t.predroppable.current;
  let o = !1;
  if (!i)
    return !1;
  if (e(i)) {
    const n = {
      role: i.role,
      color: t.movable.color
    };
    $e(t, n, i.key) && (D(t.movable.events.afterNewPiece, i.role, i.key, {
      premove: !1,
      predrop: !0
    }), o = !0);
  }
  return z(t), o;
}
function He(t) {
  G(t), z(t), L(t);
}
function Ze(t) {
  t.movable.color = t.movable.dests = t.animation.current = void 0, He(t);
}
function ie(t, e, i) {
  let o = Math.floor(8 * (t[0] - i.left) / i.width);
  e || (o = 7 - o);
  let n = 7 - Math.floor(8 * (t[1] - i.top) / i.height);
  return e || (n = 7 - n), o >= 0 && o < 8 && n >= 0 && n < 8 ? R([o, n]) : void 0;
}
function Li(t, e, i, o) {
  const n = w(t), r = dt.filter((c) => bt(n[0], n[1], c[0], c[1]) || pt(n[0], n[1], c[0], c[1])), a = r.map((c) => ft(R(c), i, o)).map((c) => ce(e, c)), [, l] = a.reduce((c, p, u) => c[0] < p ? c : [p, u], [a[0], 0]);
  return R(r[l]);
}
const O = (t) => t.orientation === "white", Pt = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR", Ki = {
  p: "pawn",
  r: "rook",
  n: "knight",
  b: "bishop",
  q: "queen",
  k: "king"
}, $i = {
  pawn: "p",
  rook: "r",
  knight: "n",
  bishop: "b",
  queen: "q",
  king: "k"
};
function Et(t) {
  t === "start" && (t = Pt);
  const e = /* @__PURE__ */ new Map();
  let i = 7, o = 0;
  for (const n of t)
    switch (n) {
      case " ":
      case "[":
        return e;
      case "/":
        if (--i, i < 0)
          return e;
        o = 0;
        break;
      case "~": {
        const r = e.get(R([o - 1, i]));
        r && (r.promoted = !0);
        break;
      }
      default: {
        const r = n.charCodeAt(0);
        if (r < 57)
          o += r - 48;
        else {
          const s = n.toLowerCase();
          e.set(R([o, i]), {
            role: Ki[s],
            color: n === s ? "black" : "white"
          }), ++o;
        }
      }
    }
  return e;
}
function Fi(t) {
  return _i.map((e) => Oe.map((i) => {
    const o = t.get(i + e);
    if (o) {
      let n = $i[o.role];
      return o.color === "white" && (n = n.toUpperCase()), o.promoted && (n += "~"), n;
    } else
      return "1";
  }).join("")).join("/").replace(/1{2,}/g, (e) => e.length.toString());
}
function Mt(t, e) {
  e.animation && (Ve(t.animation, e.animation), (t.animation.duration || 0) < 70 && (t.animation.enabled = !1));
}
function Tt(t, e) {
  var i, o, n;
  if (!((i = e.movable) === null || i === void 0) && i.dests && (t.movable.dests = void 0), !((o = e.drawable) === null || o === void 0) && o.autoShapes && (t.drawable.autoShapes = []), Ve(t, e), e.fen && (t.pieces = Et(e.fen), t.drawable.shapes = ((n = e.drawable) === null || n === void 0 ? void 0 : n.shapes) || []), "check" in e && Mi(t, e.check || !1), "lastMove" in e && !e.lastMove ? t.lastMove = void 0 : e.lastMove && (t.lastMove = e.lastMove), t.selected && kt(t, t.selected), Mt(t, e), !t.movable.rookCastle && t.movable.dests) {
    const r = t.movable.color === "white" ? "1" : "8", s = "e" + r, a = t.movable.dests.get(s), l = t.pieces.get(s);
    if (!a || !l || l.role !== "king")
      return;
    t.movable.dests.set(s, a.filter((c) => !(c === "a" + r && a.includes("c" + r)) && !(c === "h" + r && a.includes("g" + r))));
  }
}
function Ve(t, e) {
  for (const i in e)
    Object.prototype.hasOwnProperty.call(e, i) && (Object.prototype.hasOwnProperty.call(t, i) && Ye(t[i]) && Ye(e[i]) ? Ve(t[i], e[i]) : t[i] = e[i]);
}
function Ye(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === Object.prototype || e === null;
}
const X = (t, e) => e.animation.enabled ? Vi(t, e) : U(t, e);
function U(t, e) {
  const i = t(e);
  return e.dom.redraw(), i;
}
const Ce = (t, e) => ({
  key: t,
  pos: w(t),
  piece: e
}), Bi = (t, e) => e.sort((i, o) => ce(t.pos, i.pos) - ce(t.pos, o.pos))[0];
function Hi(t, e) {
  const i = /* @__PURE__ */ new Map(), o = [], n = /* @__PURE__ */ new Map(), r = [], s = [], a = /* @__PURE__ */ new Map();
  let l, c, p;
  for (const [u, d] of t)
    a.set(u, Ce(u, d));
  for (const u of Re)
    l = e.pieces.get(u), c = a.get(u), l ? c ? Ne(l, c.piece) || (r.push(c), s.push(Ce(u, l))) : s.push(Ce(u, l)) : c && r.push(c);
  for (const u of s)
    c = Bi(u, r.filter((d) => Ne(u.piece, d.piece))), c && (p = [c.pos[0] - u.pos[0], c.pos[1] - u.pos[1]], i.set(u.key, p.concat(p)), o.push(c.key));
  for (const u of r)
    o.includes(u.key) || n.set(u.key, u.piece);
  return {
    anims: i,
    fadings: n
  };
}
function At(t, e) {
  const i = t.animation.current;
  if (i === void 0) {
    t.dom.destroyed || t.dom.redrawNow();
    return;
  }
  const o = 1 - (e - i.start) * i.frequency;
  if (o <= 0)
    t.animation.current = void 0, t.dom.redrawNow();
  else {
    const n = Wi(o);
    for (const r of i.plan.anims.values())
      r[2] = r[0] * n, r[3] = r[1] * n;
    t.dom.redrawNow(!0), requestAnimationFrame((r = performance.now()) => At(t, r));
  }
}
function Vi(t, e) {
  const i = new Map(e.pieces), o = t(e), n = Hi(i, e);
  if (n.anims.size || n.fadings.size) {
    const r = e.animation.current && e.animation.current.start;
    e.animation.current = {
      start: performance.now(),
      frequency: 1 / e.animation.duration,
      plan: n
    }, r || At(e, performance.now());
  } else
    e.dom.redraw();
  return o;
}
const Wi = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1, ji = ["green", "red", "blue", "yellow"];
function Ui(t, e) {
  if (e.touches && e.touches.length > 1)
    return;
  e.stopPropagation(), e.preventDefault(), e.ctrlKey ? L(t) : He(t);
  const i = te(e), o = ie(i, O(t), t.dom.bounds());
  o && (t.drawable.current = {
    orig: o,
    pos: i,
    brush: Zi(e),
    snapToValidMove: t.drawable.defaultSnapToValidMove
  }, Nt(t));
}
function Nt(t) {
  requestAnimationFrame(() => {
    const e = t.drawable.current;
    if (e) {
      const i = ie(e.pos, O(t), t.dom.bounds());
      i || (e.snapToValidMove = !1);
      const o = e.snapToValidMove ? Li(e.orig, e.pos, O(t), t.dom.bounds()) : i;
      o !== e.mouseSq && (e.mouseSq = o, e.dest = o !== e.orig ? o : void 0, t.dom.redrawNow()), Nt(t);
    }
  });
}
function Qi(t, e) {
  t.drawable.current && (t.drawable.current.pos = te(e));
}
function Gi(t) {
  const e = t.drawable.current;
  e && (e.mouseSq && Yi(t.drawable, e), It(t));
}
function It(t) {
  t.drawable.current && (t.drawable.current = void 0, t.dom.redraw());
}
function zi(t) {
  t.drawable.shapes.length && (t.drawable.shapes = [], t.dom.redraw(), xt(t.drawable));
}
function Zi(t) {
  var e;
  const i = (t.shiftKey || t.ctrlKey) && ht(t), o = t.altKey || t.metaKey || ((e = t.getModifierState) === null || e === void 0 ? void 0 : e.call(t, "AltGraph"));
  return ji[(i ? 1 : 0) + (o ? 2 : 0)];
}
function Yi(t, e) {
  const i = (n) => n.orig === e.orig && n.dest === e.dest, o = t.shapes.find(i);
  o && (t.shapes = t.shapes.filter((n) => !i(n))), (!o || o.brush !== e.brush) && t.shapes.push({
    orig: e.orig,
    dest: e.dest,
    brush: e.brush
  }), xt(t);
}
function xt(t) {
  t.onChange && t.onChange(t.shapes);
}
function Xi(t, e) {
  if (!(t.trustAllEvents || e.isTrusted) || e.button !== void 0 && e.button !== 0 || e.touches && e.touches.length > 1)
    return;
  const i = t.dom.bounds(), o = te(e), n = ie(o, O(t), i);
  if (!n)
    return;
  const r = t.pieces.get(n), s = t.selected;
  if (!s && t.drawable.enabled && (t.drawable.eraseOnClick || !r || r.color !== t.turnColor) && zi(t), e.cancelable !== !1 && (!e.touches || t.blockTouchScroll || r || s || Ji(t, o)))
    e.preventDefault();
  else if (e.touches)
    return;
  const a = !!t.premovable.current, l = !!t.predroppable.current;
  t.stats.ctrlKey = e.ctrlKey, t.selected && Fe(t, t.selected, n) ? X((u) => Ie(u, n), t) : Ie(t, n);
  const c = t.selected === n, p = Ot(t, n);
  if (r && p && c && Oi(t, n)) {
    t.draggable.current = {
      orig: n,
      piece: r,
      origPos: o,
      pos: o,
      started: t.draggable.autoDistance && t.stats.dragged,
      element: p,
      previouslySelected: s,
      originTarget: e.target,
      keyHasChanged: !1
    }, p.cgDragging = !0, p.classList.add("dragging");
    const u = t.dom.elements.ghost;
    u && (u.className = `ghost ${r.color} ${r.role}`, F(u, de(i)(w(n), O(t))), Ke(u, !0)), We(t);
  } else
    a && G(t), l && z(t);
  t.dom.redraw();
}
function Ji(t, e) {
  const i = O(t), o = t.dom.bounds(), n = Math.pow(o.width / 8, 2);
  for (const r of t.pieces.keys()) {
    const s = ft(r, i, o);
    if (ce(s, e) <= n)
      return !0;
  }
  return !1;
}
function eo(t, e, i, o) {
  const n = "a0";
  t.pieces.set(n, e), t.dom.redraw();
  const r = te(i);
  t.draggable.current = {
    orig: n,
    piece: e,
    origPos: r,
    pos: r,
    started: !0,
    element: () => Ot(t, n),
    originTarget: i.target,
    newPiece: !0,
    force: !!o,
    keyHasChanged: !1
  }, We(t);
}
function We(t) {
  requestAnimationFrame(() => {
    var e;
    const i = t.draggable.current;
    if (!i)
      return;
    !((e = t.animation.current) === null || e === void 0) && e.plan.anims.has(i.orig) && (t.animation.current = void 0);
    const o = t.pieces.get(i.orig);
    if (!o || !Ne(o, i.piece))
      be(t);
    else if (!i.started && ce(i.pos, i.origPos) >= Math.pow(t.draggable.distance, 2) && (i.started = !0), i.started) {
      if (typeof i.element == "function") {
        const r = i.element();
        if (!r)
          return;
        r.cgDragging = !0, r.classList.add("dragging"), i.element = r;
      }
      const n = t.dom.bounds();
      F(i.element, [
        i.pos[0] - n.left - n.width / 16,
        i.pos[1] - n.top - n.height / 16
      ]), i.keyHasChanged || (i.keyHasChanged = i.orig !== ie(i.pos, O(t), n));
    }
    We(t);
  });
}
function to(t, e) {
  t.draggable.current && (!e.touches || e.touches.length < 2) && (t.draggable.current.pos = te(e));
}
function io(t, e) {
  const i = t.draggable.current;
  if (!i)
    return;
  if (e.type === "touchend" && e.cancelable !== !1 && e.preventDefault(), e.type === "touchend" && i.originTarget !== e.target && !i.newPiece) {
    t.draggable.current = void 0;
    return;
  }
  G(t), z(t);
  const o = te(e) || i.pos, n = ie(o, O(t), t.dom.bounds());
  n && i.started && i.orig !== n ? i.newPiece ? yt(t, i.orig, n, i.force) : (t.stats.ctrlKey = e.ctrlKey, St(t, i.orig, n) && (t.stats.dragged = !0)) : i.newPiece ? t.pieces.delete(i.orig) : t.draggable.deleteOnDropOff && !n && (t.pieces.delete(i.orig), D(t.events.change)), (i.orig === i.previouslySelected || i.keyHasChanged) && (i.orig === n || !n) ? L(t) : t.selectable.enabled || L(t), Dt(t), t.draggable.current = void 0, t.dom.redraw();
}
function be(t) {
  const e = t.draggable.current;
  e && (e.newPiece && t.pieces.delete(e.orig), t.draggable.current = void 0, L(t), Dt(t), t.dom.redraw());
}
function Dt(t) {
  const e = t.dom.elements;
  e.ghost && Ke(e.ghost, !1);
}
function Ot(t, e) {
  let i = t.dom.elements.board.firstChild;
  for (; i; ) {
    if (i.cgKey === e && i.tagName === "PIECE")
      return i;
    i = i.nextSibling;
  }
}
function oo(t, e) {
  t.exploding = { stage: 1, keys: e }, t.dom.redraw(), setTimeout(() => {
    Xe(t, 2), setTimeout(() => Xe(t, void 0), 120);
  }, 120);
}
function Xe(t, e) {
  t.exploding && (e ? t.exploding.stage = e : t.exploding = void 0, t.dom.redraw());
}
function no(t, e) {
  function i() {
    Pi(t), e();
  }
  return {
    set(o) {
      o.orientation && o.orientation !== t.orientation && i(), Mt(t, o), (o.fen ? X : U)((n) => Tt(n, o), t);
    },
    state: t,
    getFen: () => Fi(t.pieces),
    toggleOrientation: i,
    setPieces(o) {
      X((n) => Ei(n, o), t);
    },
    selectSquare(o, n) {
      o ? X((r) => Ie(r, o, n), t) : t.selected && (L(t), t.dom.redraw());
    },
    move(o, n) {
      X((r) => _t(r, o, n), t);
    },
    newPiece(o, n) {
      X((r) => $e(r, o, n), t);
    },
    playPremove() {
      if (t.premovable.current) {
        if (X(qi, t))
          return !0;
        t.dom.redraw();
      }
      return !1;
    },
    playPredrop(o) {
      if (t.predroppable.current) {
        const n = Ri(t, o);
        return t.dom.redraw(), n;
      }
      return !1;
    },
    cancelPremove() {
      U(G, t);
    },
    cancelPredrop() {
      U(z, t);
    },
    cancelMove() {
      U((o) => {
        He(o), be(o);
      }, t);
    },
    stop() {
      U((o) => {
        Ze(o), be(o);
      }, t);
    },
    explode(o) {
      oo(t, o);
    },
    setAutoShapes(o) {
      U((n) => n.drawable.autoShapes = o, t);
    },
    setShapes(o) {
      U((n) => n.drawable.shapes = o, t);
    },
    getKeyAtDomPos(o) {
      return ie(o, O(t), t.dom.bounds());
    },
    redrawAll: e,
    dragNewPiece(o, n, r) {
      eo(t, o, n, r);
    },
    destroy() {
      Ze(t), t.dom.unbind && t.dom.unbind(), t.dom.destroyed = !0;
    }
  };
}
function ro() {
  return {
    pieces: Et(Pt),
    orientation: "white",
    turnColor: "white",
    coordinates: !0,
    ranksPosition: "right",
    autoCastle: !0,
    viewOnly: !1,
    disableContextMenu: !1,
    addPieceZIndex: !1,
    blockTouchScroll: !1,
    pieceKey: !1,
    trustAllEvents: !1,
    highlight: {
      lastMove: !0,
      check: !0
    },
    animation: {
      enabled: !0,
      duration: 200
    },
    movable: {
      free: !0,
      color: "both",
      showDests: !0,
      events: {},
      rookCastle: !0
    },
    premovable: {
      enabled: !0,
      showDests: !0,
      castle: !0,
      events: {}
    },
    predroppable: {
      enabled: !1,
      events: {}
    },
    draggable: {
      enabled: !0,
      distance: 3,
      autoDistance: !0,
      showGhost: !0,
      deleteOnDropOff: !1
    },
    dropmode: {
      active: !1
    },
    selectable: {
      enabled: !0
    },
    stats: {
      // on touchscreen, default to "tap-tap" moves
      // instead of drag
      dragged: !("ontouchstart" in window)
    },
    events: {},
    drawable: {
      enabled: !0,
      visible: !0,
      defaultSnapToValidMove: !0,
      eraseOnClick: !0,
      shapes: [],
      autoShapes: [],
      brushes: {
        green: { key: "g", color: "#15781B", opacity: 1, lineWidth: 10 },
        red: { key: "r", color: "#882020", opacity: 1, lineWidth: 10 },
        blue: { key: "b", color: "#003088", opacity: 1, lineWidth: 10 },
        yellow: { key: "y", color: "#e68f00", opacity: 1, lineWidth: 10 },
        paleBlue: { key: "pb", color: "#003088", opacity: 0.4, lineWidth: 15 },
        paleGreen: { key: "pg", color: "#15781B", opacity: 0.4, lineWidth: 15 },
        paleRed: { key: "pr", color: "#882020", opacity: 0.4, lineWidth: 15 },
        paleGrey: {
          key: "pgr",
          color: "#4a4a4a",
          opacity: 0.35,
          lineWidth: 15
        },
        purple: { key: "purp", color: "#68217a", opacity: 0.65, lineWidth: 10 },
        pink: { key: "pink", color: "#ee2080", opacity: 0.5, lineWidth: 10 },
        hilite: { key: "hilite", color: "#fff", opacity: 1, lineWidth: 1 }
      },
      prevSvgHash: ""
    },
    hold: Si()
  };
}
function so() {
  const t = E("defs"), e = I(E("filter"), { id: "cg-filter-blur" });
  return e.appendChild(I(E("feGaussianBlur"), { stdDeviation: "0.022" })), t.appendChild(e), t;
}
function ao(t, e, i) {
  var o;
  const n = t.drawable, r = n.current, s = r && r.mouseSq ? r : void 0, a = /* @__PURE__ */ new Map(), l = t.dom.bounds(), c = n.autoShapes.filter((h) => !h.piece);
  for (const h of n.shapes.concat(c).concat(s ? [s] : [])) {
    if (!h.dest)
      continue;
    const g = (o = a.get(h.dest)) !== null && o !== void 0 ? o : /* @__PURE__ */ new Set(), f = _e(ve(w(h.orig), t.orientation), l), y = _e(ve(w(h.dest), t.orientation), l);
    g.add(De(f, y)), a.set(h.dest, g);
  }
  const p = n.shapes.concat(c).map((h) => ({
    shape: h,
    current: !1,
    hash: Je(h, xe(h.dest, a), !1, l)
  }));
  s && p.push({
    shape: s,
    current: !0,
    hash: Je(s, xe(s.dest, a), !0, l)
  });
  const u = p.map((h) => h.hash).join(";");
  if (u === t.drawable.prevSvgHash)
    return;
  t.drawable.prevSvgHash = u;
  const d = e.querySelector("defs");
  lo(n, p, d), co(p, e.querySelector("g"), i.querySelector("g"), (h) => fo(t, h, n.brushes, a, l));
}
function lo(t, e, i) {
  var o;
  const n = /* @__PURE__ */ new Map();
  let r;
  for (const l of e.filter((c) => c.shape.dest && c.shape.brush))
    r = qt(t.brushes[l.shape.brush], l.shape.modifiers), !((o = l.shape.modifiers) === null || o === void 0) && o.hilite && n.set("hilite", t.brushes.hilite), n.set(r.key, r);
  const s = /* @__PURE__ */ new Set();
  let a = i.firstElementChild;
  for (; a; )
    s.add(a.getAttribute("cgKey")), a = a.nextElementSibling;
  for (const [l, c] of n.entries())
    s.has(l) || i.appendChild(mo(c));
}
function co(t, e, i, o) {
  const n = /* @__PURE__ */ new Map();
  for (const r of t)
    n.set(r.hash, !1);
  for (const r of [e, i]) {
    const s = [];
    let a = r.firstElementChild, l;
    for (; a; )
      l = a.getAttribute("cgHash"), n.has(l) ? n.set(l, !0) : s.push(a), a = a.nextElementSibling;
    for (const c of s)
      r.removeChild(c);
  }
  for (const r of t.filter((s) => !n.get(s.hash)))
    for (const s of o(r))
      s.isCustom ? i.appendChild(s.el) : e.appendChild(s.el);
}
function Je({ orig: t, dest: e, brush: i, piece: o, modifiers: n, customSvg: r, label: s }, a, l, c) {
  var p, u;
  return [
    c.width,
    c.height,
    l,
    t,
    e,
    i,
    a && "-",
    o && uo(o),
    n && ho(n),
    r && `custom-${et(r.html)},${(u = (p = r.center) === null || p === void 0 ? void 0 : p[0]) !== null && u !== void 0 ? u : "o"}`,
    s && `label-${et(s.text)}`
  ].filter((d) => d).join(",");
}
function uo(t) {
  return [t.color, t.role, t.scale].filter((e) => e).join(",");
}
function ho(t) {
  return [t.lineWidth, t.hilite && "*"].filter((e) => e).join(",");
}
function et(t) {
  let e = 0;
  for (let i = 0; i < t.length; i++)
    e = (e << 5) - e + t.charCodeAt(i) >>> 0;
  return e.toString();
}
function fo(t, { shape: e, current: i, hash: o }, n, r, s) {
  var a, l;
  const c = _e(ve(w(e.orig), t.orientation), s), p = e.dest ? _e(ve(w(e.dest), t.orientation), s) : c, u = e.brush && qt(n[e.brush], e.modifiers), d = r.get(e.dest), h = [];
  if (u) {
    const g = I(E("g"), { cgHash: o });
    h.push({ el: g }), c[0] !== p[0] || c[1] !== p[1] ? g.appendChild(go(e, u, c, p, i, xe(e.dest, r))) : g.appendChild(po(n[e.brush], c, i, s));
  }
  if (e.label) {
    const g = e.label;
    (a = g.fill) !== null && a !== void 0 || (g.fill = e.brush && n[e.brush].color);
    const f = e.brush ? void 0 : "tr";
    h.push({ el: bo(g, o, c, p, d, f), isCustom: !0 });
  }
  if (e.customSvg) {
    const g = (l = e.customSvg.center) !== null && l !== void 0 ? l : "orig", [f, y] = g === "label" ? Lt(c, p, d).map((k) => k - 0.5) : g === "dest" ? p : c, S = I(E("g"), { transform: `translate(${f},${y})`, cgHash: o });
    S.innerHTML = `<svg width="1" height="1" viewBox="0 0 100 100">${e.customSvg.html}</svg>`, h.push({ el: S, isCustom: !0 });
  }
  return h;
}
function po(t, e, i, o) {
  const n = vo(), r = (o.width + o.height) / (4 * Math.max(o.width, o.height));
  return I(E("circle"), {
    stroke: t.color,
    "stroke-width": n[i ? 0 : 1],
    fill: "none",
    opacity: Rt(t, i),
    cx: e[0],
    cy: e[1],
    r: r - n[1] / 2
  });
}
function go(t, e, i, o, n, r) {
  var s;
  function a(p) {
    var u;
    const d = wo(r && !n), h = o[0] - i[0], g = o[1] - i[1], f = Math.atan2(g, h), y = Math.cos(f) * d, S = Math.sin(f) * d;
    return I(E("line"), {
      stroke: p ? "white" : e.color,
      "stroke-width": _o(e, n) + (p ? 0.04 : 0),
      "stroke-linecap": "round",
      "marker-end": `url(#arrowhead-${p ? "hilite" : e.key})`,
      opacity: !((u = t.modifiers) === null || u === void 0) && u.hilite ? 1 : Rt(e, n),
      x1: i[0],
      y1: i[1],
      x2: o[0] - y,
      y2: o[1] - S
    });
  }
  if (!(!((s = t.modifiers) === null || s === void 0) && s.hilite))
    return a(!1);
  const l = E("g"), c = I(E("g"), { filter: "url(#cg-filter-blur)" });
  return c.appendChild(So(i, o)), c.appendChild(a(!0)), l.appendChild(c), l.appendChild(a(!1)), l;
}
function mo(t) {
  const e = I(E("marker"), {
    id: "arrowhead-" + t.key,
    orient: "auto",
    overflow: "visible",
    markerWidth: 4,
    markerHeight: 4,
    refX: t.key === "hilite" ? 1.86 : 2.05,
    refY: 2
  });
  return e.appendChild(I(E("path"), {
    d: "M0,0 V4 L3,2 Z",
    fill: t.color
  })), e.setAttribute("cgKey", t.key), e;
}
function bo(t, e, i, o, n, r) {
  var s;
  const l = 0.4 * 0.75 ** t.text.length, c = Lt(i, o, n), p = r === "tr" ? 0.4 : 0, u = I(E("g"), {
    transform: `translate(${c[0] + p},${c[1] - p})`,
    cgHash: e
  });
  u.appendChild(I(E("circle"), {
    r: 0.4 / 2,
    "fill-opacity": r ? 1 : 0.8,
    "stroke-opacity": r ? 1 : 0.7,
    "stroke-width": 0.03,
    fill: (s = t.fill) !== null && s !== void 0 ? s : "#666",
    stroke: "white"
  }));
  const d = I(E("text"), {
    "font-size": l,
    "font-family": "Noto Sans",
    "text-anchor": "middle",
    fill: "white",
    y: 0.13 * 0.75 ** t.text.length
  });
  return d.innerHTML = t.text, u.appendChild(d), u;
}
function ve(t, e) {
  return e === "white" ? t : [7 - t[0], 7 - t[1]];
}
function xe(t, e) {
  return (t && e.has(t) && e.get(t).size > 1) === !0;
}
function E(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function I(t, e) {
  for (const i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.setAttribute(i, e[i]);
  return t;
}
function qt(t, e) {
  return e ? {
    color: t.color,
    opacity: Math.round(t.opacity * 10) / 10,
    lineWidth: Math.round(e.lineWidth || t.lineWidth),
    key: [t.key, e.lineWidth].filter((i) => i).join("")
  } : t;
}
function vo() {
  return [3 / 64, 4 / 64];
}
function _o(t, e) {
  return (t.lineWidth || 10) * (e ? 0.85 : 1) / 64;
}
function Rt(t, e) {
  return (t.opacity || 1) * (e ? 0.9 : 1);
}
function wo(t) {
  return (t ? 20 : 10) / 64;
}
function _e(t, e) {
  const i = Math.min(1, e.width / e.height), o = Math.min(1, e.height / e.width);
  return [(t[0] - 3.5) * i, (3.5 - t[1]) * o];
}
function So(t, e) {
  const i = {
    from: [Math.floor(Math.min(t[0], e[0])), Math.floor(Math.min(t[1], e[1]))],
    to: [Math.ceil(Math.max(t[0], e[0])), Math.ceil(Math.max(t[1], e[1]))]
  };
  return I(E("rect"), {
    x: i.from[0],
    y: i.from[1],
    width: i.to[0] - i.from[0],
    height: i.to[1] - i.from[1],
    fill: "none",
    stroke: "none"
  });
}
function De(t, e, i = !0) {
  const o = Math.atan2(e[1] - t[1], e[0] - t[0]) + Math.PI;
  return i ? (Math.round(o * 8 / Math.PI) + 16) % 16 : o;
}
function yo(t, e) {
  return Math.sqrt([t[0] - e[0], t[1] - e[1]].reduce((i, o) => i + o * o, 0));
}
function Lt(t, e, i) {
  let o = yo(t, e);
  const n = De(t, e, !1);
  if (i && (o -= 33 / 64, i.size > 1)) {
    o -= 10 / 64;
    const r = De(t, e);
    (i.has((r + 1) % 16) || i.has((r + 15) % 16)) && r & 1 && (o -= 0.4);
  }
  return [t[0] - Math.cos(n) * o, t[1] - Math.sin(n) * o].map((r) => r + 0.5);
}
function ko(t, e) {
  t.innerHTML = "", t.classList.add("cg-wrap");
  for (const l of vi)
    t.classList.toggle("orientation-" + l, e.orientation === l);
  t.classList.toggle("manipulable", !e.viewOnly);
  const i = H("cg-container");
  t.appendChild(i);
  const o = H("cg-board");
  i.appendChild(o);
  let n, r, s;
  if (e.drawable.visible && (n = I(E("svg"), {
    class: "cg-shapes",
    viewBox: "-4 -4 8 8",
    preserveAspectRatio: "xMidYMid slice"
  }), n.appendChild(so()), n.appendChild(E("g")), r = I(E("svg"), {
    class: "cg-custom-svgs",
    viewBox: "-3.5 -3.5 8 8",
    preserveAspectRatio: "xMidYMid slice"
  }), r.appendChild(E("g")), s = H("cg-auto-pieces"), i.appendChild(n), i.appendChild(r), i.appendChild(s)), e.coordinates) {
    const l = e.orientation === "black" ? " black" : "", c = e.ranksPosition === "left" ? " left" : "";
    i.appendChild(tt(qe, "ranks" + l + c)), i.appendChild(tt(Oe, "files" + l));
  }
  let a;
  return e.draggable.enabled && e.draggable.showGhost && (a = H("piece", "ghost"), Ke(a, !1), i.appendChild(a)), {
    board: o,
    container: i,
    wrap: t,
    ghost: a,
    svg: n,
    customSvg: r,
    autoPieces: s
  };
}
function tt(t, e) {
  const i = H("coords", e);
  let o;
  for (const n of t)
    o = H("coord"), o.textContent = n, i.appendChild(o);
  return i;
}
function Co(t, e) {
  if (!t.dropmode.active)
    return;
  G(t), z(t);
  const i = t.dropmode.piece;
  if (i) {
    t.pieces.set("a0", i);
    const o = te(e), n = o && ie(o, O(t), t.dom.bounds());
    n && yt(t, "a0", n);
  }
  t.dom.redraw();
}
function Po(t, e) {
  const i = t.dom.elements.board;
  if ("ResizeObserver" in window && new ResizeObserver(e).observe(t.dom.elements.wrap), (t.disableContextMenu || t.drawable.enabled) && i.addEventListener("contextmenu", (n) => n.preventDefault()), t.viewOnly)
    return;
  const o = Mo(t);
  i.addEventListener("touchstart", o, {
    passive: !1
  }), i.addEventListener("mousedown", o, {
    passive: !1
  });
}
function Eo(t, e) {
  const i = [];
  if ("ResizeObserver" in window || i.push(ne(document.body, "chessground.resize", e)), !t.viewOnly) {
    const o = it(t, to, Qi), n = it(t, io, Gi);
    for (const s of ["touchmove", "mousemove"])
      i.push(ne(document, s, o));
    for (const s of ["touchend", "mouseup"])
      i.push(ne(document, s, n));
    const r = () => t.dom.bounds.clear();
    i.push(ne(document, "scroll", r, { capture: !0, passive: !0 })), i.push(ne(window, "resize", r, { passive: !0 }));
  }
  return () => i.forEach((o) => o());
}
function ne(t, e, i, o) {
  return t.addEventListener(e, i, o), () => t.removeEventListener(e, i, o);
}
const Mo = (t) => (e) => {
  t.draggable.current ? be(t) : t.drawable.current ? It(t) : e.shiftKey || ht(e) ? t.drawable.enabled && Ui(t, e) : t.viewOnly || (t.dropmode.active ? Co(t, e) : Xi(t, e));
}, it = (t, e, i) => (o) => {
  t.drawable.current ? t.drawable.enabled && i(t, o) : t.viewOnly || e(t, o);
};
function To(t) {
  const e = O(t), i = de(t.dom.bounds()), o = t.dom.elements.board, n = t.pieces, r = t.animation.current, s = r ? r.plan.anims : /* @__PURE__ */ new Map(), a = r ? r.plan.fadings : /* @__PURE__ */ new Map(), l = t.draggable.current, c = No(t), p = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
  let g, f, y, S, k, v, T, C, Z, Y;
  for (f = o.firstChild; f; ) {
    if (g = f.cgKey, Kt(f))
      if (y = n.get(g), k = s.get(g), v = a.get(g), S = f.cgPiece, f.cgDragging && (!l || l.orig !== g) && (f.classList.remove("dragging"), F(f, i(w(g), e)), f.cgDragging = !1), !v && f.cgFading && (f.cgFading = !1, f.classList.remove("fading")), y) {
        if (k && f.cgAnimating && S === re(y)) {
          const _ = w(g);
          _[0] += k[2], _[1] += k[3], f.classList.add("anim"), F(f, i(_, e));
        } else
          f.cgAnimating && (f.cgAnimating = !1, f.classList.remove("anim"), F(f, i(w(g), e)), t.addPieceZIndex && (f.style.zIndex = Pe(w(g), e)));
        S === re(y) && (!v || !f.cgFading) ? p.add(g) : v && S === re(v) ? (f.classList.add("fading"), f.cgFading = !0) : Ee(d, S, f);
      } else
        Ee(d, S, f);
    else if ($t(f)) {
      const _ = f.className;
      c.get(g) === _ ? u.add(g) : Ee(h, _, f);
    }
    f = f.nextSibling;
  }
  for (const [_, V] of c)
    if (!u.has(_)) {
      Z = h.get(V), Y = Z && Z.pop();
      const K = i(w(_), e);
      if (Y)
        Y.cgKey = _, F(Y, K);
      else {
        const $ = H("square", V);
        $.cgKey = _, F($, K), o.insertBefore($, o.firstChild);
      }
    }
  for (const [_, V] of n)
    if (k = s.get(_), !p.has(_))
      if (T = d.get(re(V)), C = T && T.pop(), C) {
        C.cgKey = _, C.cgFading && (C.classList.remove("fading"), C.cgFading = !1);
        const K = w(_);
        t.addPieceZIndex && (C.style.zIndex = Pe(K, e)), k && (C.cgAnimating = !0, C.classList.add("anim"), K[0] += k[2], K[1] += k[3]), F(C, i(K, e));
      } else {
        const K = re(V), $ = H("piece", K), ue = w(_);
        $.cgPiece = K, $.cgKey = _, k && ($.cgAnimating = !0, ue[0] += k[2], ue[1] += k[3]), F($, i(ue, e)), t.addPieceZIndex && ($.style.zIndex = Pe(ue, e)), o.appendChild($);
      }
  for (const _ of d.values())
    nt(t, _);
  for (const _ of h.values())
    nt(t, _);
}
function Ao(t) {
  const e = O(t), i = de(t.dom.bounds());
  let o = t.dom.elements.board.firstChild;
  for (; o; )
    (Kt(o) && !o.cgAnimating || $t(o)) && F(o, i(w(o.cgKey), e)), o = o.nextSibling;
}
function ot(t) {
  var e, i;
  const o = t.dom.elements.wrap.getBoundingClientRect(), n = t.dom.elements.container, r = o.height / o.width, s = Math.floor(o.width * window.devicePixelRatio / 8) * 8 / window.devicePixelRatio, a = s * r;
  n.style.width = s + "px", n.style.height = a + "px", t.dom.bounds.clear(), (e = t.addDimensionsCssVarsTo) === null || e === void 0 || e.style.setProperty("--cg-width", s + "px"), (i = t.addDimensionsCssVarsTo) === null || i === void 0 || i.style.setProperty("--cg-height", a + "px");
}
const Kt = (t) => t.tagName === "PIECE", $t = (t) => t.tagName === "SQUARE";
function nt(t, e) {
  for (const i of e)
    t.dom.elements.board.removeChild(i);
}
function Pe(t, e) {
  const o = t[1];
  return `${e ? 3 + 7 - o : 3 + o}`;
}
const re = (t) => `${t.color} ${t.role}`;
function No(t) {
  var e, i, o;
  const n = /* @__PURE__ */ new Map();
  if (t.lastMove && t.highlight.lastMove)
    for (const a of t.lastMove)
      B(n, a, "last-move");
  if (t.check && t.highlight.check && B(n, t.check, "check"), t.selected && (B(n, t.selected, "selected"), t.movable.showDests)) {
    const a = (e = t.movable.dests) === null || e === void 0 ? void 0 : e.get(t.selected);
    if (a)
      for (const c of a)
        B(n, c, "move-dest" + (t.pieces.has(c) ? " oc" : ""));
    const l = (o = (i = t.premovable.customDests) === null || i === void 0 ? void 0 : i.get(t.selected)) !== null && o !== void 0 ? o : t.premovable.dests;
    if (l)
      for (const c of l)
        B(n, c, "premove-dest" + (t.pieces.has(c) ? " oc" : ""));
  }
  const r = t.premovable.current;
  if (r)
    for (const a of r)
      B(n, a, "current-premove");
  else
    t.predroppable.current && B(n, t.predroppable.current.key, "current-premove");
  const s = t.exploding;
  if (s)
    for (const a of s.keys)
      B(n, a, "exploding" + s.stage);
  return t.highlight.custom && t.highlight.custom.forEach((a, l) => {
    B(n, l, a);
  }), n;
}
function B(t, e, i) {
  const o = t.get(e);
  o ? t.set(e, `${o} ${i}`) : t.set(e, i);
}
function Ee(t, e, i) {
  const o = t.get(e);
  o ? o.push(i) : t.set(e, [i]);
}
function Io(t, e, i) {
  const o = /* @__PURE__ */ new Map(), n = [];
  for (const a of t)
    o.set(a.hash, !1);
  let r = e.firstElementChild, s;
  for (; r; )
    s = r.getAttribute("cgHash"), o.has(s) ? o.set(s, !0) : n.push(r), r = r.nextElementSibling;
  for (const a of n)
    e.removeChild(a);
  for (const a of t)
    o.get(a.hash) || e.appendChild(i(a));
}
function xo(t, e) {
  const o = t.drawable.autoShapes.filter((n) => n.piece).map((n) => ({
    shape: n,
    hash: qo(n),
    current: !1
  }));
  Io(o, e, (n) => Oo(t, n, t.dom.bounds()));
}
function Do(t) {
  var e;
  const i = O(t), o = de(t.dom.bounds());
  let n = (e = t.dom.elements.autoPieces) === null || e === void 0 ? void 0 : e.firstChild;
  for (; n; )
    ut(n, o(w(n.cgKey), i), n.cgScale), n = n.nextSibling;
}
function Oo(t, { shape: e, hash: i }, o) {
  var n, r, s;
  const a = e.orig, l = (n = e.piece) === null || n === void 0 ? void 0 : n.role, c = (r = e.piece) === null || r === void 0 ? void 0 : r.color, p = (s = e.piece) === null || s === void 0 ? void 0 : s.scale, u = H("piece", `${l} ${c}`);
  return u.setAttribute("cgHash", i), u.cgKey = a, u.cgScale = p, ut(u, de(o)(w(a), O(t)), p), u;
}
const qo = (t) => {
  var e, i, o;
  return [t.orig, (e = t.piece) === null || e === void 0 ? void 0 : e.role, (i = t.piece) === null || i === void 0 ? void 0 : i.color, (o = t.piece) === null || o === void 0 ? void 0 : o.scale].join(",");
};
function Ro(t, e) {
  const i = ro();
  Tt(i, e || {});
  function o() {
    const n = "dom" in i ? i.dom.unbind : void 0, r = ko(t, i), s = wi(() => r.board.getBoundingClientRect()), a = (p) => {
      To(c), r.autoPieces && xo(c, r.autoPieces), !p && r.svg && ao(c, r.svg, r.customSvg);
    }, l = () => {
      ot(c), Ao(c), r.autoPieces && Do(c);
    }, c = i;
    return c.dom = {
      elements: r,
      bounds: s,
      redraw: Lo(a),
      redrawNow: a,
      unbind: n
    }, c.drawable.prevSvgHash = "", ot(c), a(!1), Po(c, l), n || (c.dom.unbind = Eo(c, l)), c.events.insert && c.events.insert(r), c;
  }
  return no(o(), o);
}
function Lo(t) {
  let e = !1;
  return () => {
    e || (e = !0, requestAnimationFrame(() => {
      t(), e = !1;
    }));
  };
}
class Ko {
  game;
  board;
  boardState;
  props;
  emit;
  constructor(e, i, o, n) {
    this.boardState = i, this.props = o, this.emit = n, this.game = new ui(), this.board = Ro(e), this.resetBoard();
  }
  //
  //  PRIVATE INTERAL METHODS:
  //
  /**
   * syncs chess.js state with the board
   * @private
   */
  updateGameState({ updateFen: e = !0 } = {}) {
    this.boardState.historyViewerState.isEnabled || (e && this.board.set({ fen: this.game.fen() }), this.board.state.turnColor = this.getTurnColor(), this.board.state.movable.free ? (this.board.state.movable.color = "both", this.board.state.movable.dests = /* @__PURE__ */ new Map()) : (this.board.state.movable.color = this.props.playerColor || this.board.state.turnColor, this.board.state.movable.dests = ze(this.game)), this.displayInCheck(this.game.inCheck(), this.board.state.turnColor), this.boardState.showThreats && this.drawMoves()), this.emitEvents();
  }
  /**
   * Updates the board state to display whether the king of given color is in check
   * @private
   */
  displayInCheck(e, i) {
    if (e) {
      for (const [o, n] of this.board.state.pieces)
        if (n.role === "king" && n.color === i) {
          this.board.state.check = o;
          return;
        }
    } else
      this.board.state.check = void 0;
  }
  /**
   * emits neccessary events
   * @private
   */
  emitEvents() {
    this.game.inCheck() && this.emit(
      this.game.isCheckmate() ? "checkmate" : "check",
      this.board.state.turnColor
    ), this.game.isDraw() && this.emit("draw"), this.game.isStalemate() && this.emit("stalemate");
  }
  /**
   * Changes the turn of the game, triggered by config.movable.events.after
   * @private
   */
  async changeTurn(e, i, o) {
    let n;
    fi(i, this.game.get(e)) && (n = await new Promise((r) => {
      this.boardState.promotionDialogState = {
        isEnabled: !0,
        color: this.getTurnColor(),
        callback: r
      };
    })), this.move({
      from: e,
      to: i,
      promotion: n
    });
  }
  //
  //  PUBLIC API METHODS:
  //
  /**
   * Resets the board to the initial starting configuration.
   */
  resetBoard() {
    this.setConfig(this.props.boardConfig, !0);
  }
  /**
   * undo last move, if possible
   */
  undoLastMove() {
    const e = this.game.undo();
    if (e != null && (this.boardState.historyViewerState.isEnabled && this.boardState.historyViewerState.plyViewing === this.getCurrentPlyNumber() && this.stopViewingHistory(), !this.boardState.historyViewerState.isEnabled)) {
      this.board.set({ fen: e.before }), this.updateGameState({ updateFen: !1 });
      const i = this.getLastMove();
      this.board.state.lastMove = i ? [i?.from, i?.to] : void 0;
    }
  }
  /**
   * returns the current material count for white, black and the diff.
   * If diff > 0 white is leading, else black.
   */
  getMaterialCount() {
    const e = this.board.state.pieces, i = {
      pawn: 1,
      knight: 3,
      bishop: 3,
      rook: 5,
      queen: 9,
      king: 0
    }, o = {
      materialWhite: 0,
      materialBlack: 0,
      materialDiff: 0
    };
    for (const n of e)
      n[1].color === "white" ? o.materialWhite += i[n[1].role] : o.materialBlack += i[n[1].role];
    return o.materialDiff = o.materialWhite - o.materialBlack, o;
  }
  /**
   * Finds all the captured pieces from the game history.
   *
   * Note: results may be innaccurate if game history has been lost, eg. if
   * setPosition has been called.
   *
   * @returns an object with white and black properties whose values are arrays
   * of all the pieces captured by that player this game.
   */
  getCapturedPieces() {
    const e = {
      white: [],
      black: []
    };
    for (const { color: i, captured: o } of this.getHistory(!0))
      o && e[fe(i)].push(o);
    return e;
  }
  /**
   * toggles the board orientation.
   */
  toggleOrientation() {
    this.board.toggleOrientation();
  }
  /**
   * draws arrows and circles on the board for possible moves/captures
   */
  drawMoves() {
    this.boardState.showThreats = !0, this.board.setShapes(hi(this.game.moves({ verbose: !0 })));
  }
  /**
   * removes arrows and circles from the board for possible moves/captures
   */
  hideMoves() {
    this.boardState.showThreats = !1, this.board.setShapes([]);
  }
  /**
   * draws an arrow on the board
   */
  drawMove(e, i, o) {
    this.board.setShapes([
      {
        orig: e,
        dest: i,
        brush: o
      }
    ]);
  }
  /**
   * toggle drawing of arrows and circles on the board for possible moves/captures
   */
  toggleMoves() {
    this.boardState.showThreats ? this.hideMoves() : this.drawMoves();
  }
  /**
   * returns the opening name for the current position from lichess api
   */
  async getOpeningName() {
    try {
      const e = this.game.history({ verbose: !0 }).map((n) => n.lan).join(",");
      return (await (await fetch(
        `https://explorer.lichess.ovh/masters?play=${e}`
      )).json()).opening?.name ?? null;
    } catch {
      return null;
    }
  }
  /**
   * make a move programmatically on the board
   * @param move either a string in Standard Algebraic Notation (SAN), eg. 'e4', 'exd5', 'O-O', 'Nf3' or 'e8=Q'
   * or an object of shape { from: string; to: string; promotion?: string; }, eg. { from: 'g8', to: 'f6' } or
   * { from: 'e7', to: 'e8', promotion: 'q'}
   * @returns true if the move was made, false if the move was illegal
   */
  move(e) {
    let i;
    try {
      i = this.game.move(e);
    } catch {
      return typeof e == "object" && this.board.state.movable.free && (this.board.move(e.from, e.to), this.updateGameState({ updateFen: !1 })), !1;
    }
    return this.emit("move", i), i?.promotion && this.emit("promotion", {
      color: fe(i.color),
      promotedTo: i.promotion.toUpperCase(),
      sanMove: i.san
    }), this.boardState.historyViewerState.isEnabled || (this.board.move(i.from, i.to), (i.flags === "e" || i?.promotion) && setTimeout(
      () => this.board.set({ fen: i.after }),
      this.board.state.animation.current ? this.board.state.animation.duration : 0
    ), this.updateGameState({ updateFen: !1 }), Ht(this.board.playPremove)), !0;
  }
  /**
   * returns the current turn color
   * @returns 'white' or 'black'
   */
  getTurnColor() {
    return fe(this.game.turn());
  }
  /**
   * returns all possible moves for the current position
   *
   */
  getPossibleMoves() {
    return ze(this.game);
  }
  /**
   *
   * @returns the current turn number
   * @example e4 e5 -> turn number is 2
   */
  getCurrentTurnNumber() {
    return this.game.moveNumber();
  }
  /**
   *
   * @returns the current ply number
   * @example e4 e5 Nf3 -> ply number is 3
   */
  getCurrentPlyNumber() {
    return 2 * this.getCurrentTurnNumber() - (this.getTurnColor() === "black" ? 1 : 2);
  }
  /**
   * returns the latest move made on the board
   */
  getLastMove() {
    return this.game.history({ verbose: !0 }).at(-1);
  }
  getHistory(e = !1) {
    return this.game.history({ verbose: e });
  }
  /**
   * Returns the FEN string for the current position.
   */
  getFen() {
    return this.game.fen();
  }
  /**
   * Returns the board position as a 2D array.
   */
  getBoardPosition() {
    return this.game.board();
  }
  /**
   * returns the PGN string for the current position.
   */
  getPgn() {
    return this.game.pgn();
  }
  /**
   * returns true of false depending on if the game is over
   */
  getIsGameOver() {
    return this.game.isGameOver();
  }
  /**
   * returns true or false depending on if a player is checkmated
   */
  getIsCheckmate() {
    return this.game.isCheckmate();
  }
  /**
   * returns true or false depending on if a player is in check
   */
  getIsCheck() {
    return this.game.isCheck();
  }
  /**
   * returns true or false depending on if a player is in stalemate
   */
  getIsStalemate() {
    return this.game.isStalemate();
  }
  /**
   * returns true or false depending on if a game is drawn
   */
  getIsDraw() {
    return this.game.isDraw();
  }
  /**
   * returns true or false depending on if a game is drawn by threefold repetition
   */
  getIsThreefoldRepetition() {
    return this.game.isThreefoldRepetition();
  }
  /**
   * returns true or false depending on if a game is drawn by insufficient material
   */
  getIsInsufficientMaterial() {
    return this.game.isInsufficientMaterial();
  }
  /**
   * returns the color of a given square
   */
  getSquareColor(e) {
    return this.game.squareColor(e);
  }
  /**
   * Returns the piece on the square or null if there is no piece
   */
  getSquare(e) {
    return this.game.get(e);
  }
  /**
   * loads a fen into the board
   * Caution: this will erase the game history. To set position with history call loadPgn with a pgn instead
   */
  setPosition(e) {
    this.game.load(e), this.boardState.historyViewerState = { isEnabled: !1 }, this.updateGameState();
  }
  /**
   * puts a piece on a given square on the board
   * returns true on success, else false
   */
  putPiece(e, i) {
    if (this.board.state.movable.free) {
      const o = this.board.state.pieces;
      return o.set(i, {
        color: e.color === "w" ? "white" : "black",
        role: pi[e.type]
      }), this.board.setPieces(o), !0;
    } else {
      const o = this.game.put(e, i);
      return o && this.updateGameState(), o;
    }
  }
  /**
   * Removes a piece from the board.
   * @param square - The square where the piece is located.
   */
  removePiece(e) {
    this.board.state.pieces.delete(e), this.game.remove(e);
  }
  /**
   * removes all pieces from the board
   */
  clearBoard() {
    this.game.clear(), this.boardState.historyViewerState = { isEnabled: !1 }, this.updateGameState();
  }
  /**
   * draw multiple arrows on the board
   */
  setShapes(e) {
    this.board.setShapes(e);
  }
  /**
   * loads a pgn into the board
   *
   * @param pgn - the pgn to load
   */
  loadPgn(e) {
    this.game.loadPgn(e), this.boardState.historyViewerState = { isEnabled: !1 }, this.updateGameState();
    const i = this.getLastMove();
    i && this.board.set({ lastMove: [i.from, i.to] });
  }
  /**
   * returns the header information of the current pgn, if no pgn is loaded, returns an empty object
   * @example {
   * "Event": "IBM Kasparov vs. Deep Blue Rematch",
   * "Site": "New York, NY USA",
   * "Date": "1997.05.11",
   * "Round": "6",
   * "White": "Deep Blue",
   * "Black": "Kasparov, Garry",
   * "Opening": "Caro-Kann: 4...Nd7",
   * "ECO": "B17",
   * "Result": "1-0"
   * }
   */
  getPgnInfo() {
    return this.game.header();
  }
  /**
   * Sets a header in the PGN.
   *
   * @param changes a record of key value pairs to change in the PGN, eg. `{ White: 'Deep Blue', Black: 'Kasparov, Garry' }`
   */
  setPgnInfo(e) {
    return this.game.header(...Object.entries(e).flat());
  }
  /**
   * Sets the config of the board.
   * Caution: providing a config with a fen will erase the game history and change the starting position
   * for resetBoard. To keep history and starting position: omit fen from the given config and call
   * loadPgn with a pgn instead.
   *
   * @param config - a subset of config options, eg. `{ viewOnly: true, animation: { enabled: false } }`
   * or `{ movable: { events: { after: afterFunc }, showDests: false }, drawable: { enabled: false } }`
   * @param fillDefaults - if true unprovided config options will be substituted with default values, if
   * false the unprovided options will remain unchanged.
   */
  setConfig(e, i = !1) {
    if (i && (e = lt(bi, e), this.board.state.selected = void 0), e.movable?.events && "after" in e.movable.events) {
      const r = e.movable.events.after;
      e.movable.events.after = r ? async (...s) => {
        await this.changeTurn(...s), r(...s);
      } : this.changeTurn.bind(this);
    }
    const { fen: o, ...n } = e;
    this.board.set(n), o && this.setPosition(o), this.board.redrawAll();
  }
  /**
   * Views the position at the given ply number in the game's history.
   *
   * @param ply - the ply number of the position to be viewed, where 0 is the initial position, 1 is
   * after white's first move, 2 is after black's first move and so on.
   */
  viewHistory(e) {
    const i = this.getHistory(!0);
    if (e < 0 || e > i.length)
      return;
    const o = this.board.state.animation.enabled && (this.boardState.historyViewerState.isEnabled && Math.abs(this.boardState.historyViewerState.plyViewing - e) !== 1 || !this.boardState.historyViewerState.isEnabled && e !== i.length - 1);
    if (o && this.board.set({ animation: { enabled: !1 } }), e < i.length)
      this.boardState.historyViewerState.isEnabled ? this.boardState.historyViewerState.plyViewing = e : this.boardState.historyViewerState = {
        isEnabled: !0,
        plyViewing: e,
        viewOnly: this.board.state.viewOnly
      }, this.board.set({
        fen: i[e].before,
        viewOnly: !0,
        lastMove: e > 0 ? [i[e - 1].from, i[e - 1].to] : void 0,
        selected: void 0
      }), this.displayInCheck(
        e > 0 ? "+#".includes(i[e - 1].san.at(-1)) : !1,
        fe(i[e].color)
      ), this.board.cancelPremove();
    else if (this.boardState.historyViewerState.isEnabled) {
      const n = i.at(-1);
      this.board.set({
        fen: n.after,
        viewOnly: this.boardState.historyViewerState.viewOnly,
        lastMove: [n.from, n.to]
      }), this.boardState.historyViewerState = { isEnabled: !1 }, this.updateGameState({ updateFen: !1 });
    }
    o && this.board.set({ animation: { enabled: !0 } });
  }
  /**
   * Stops viewing history and returns the board to the present position, ie. after the latest move.
   */
  stopViewingHistory() {
    this.boardState.historyViewerState.isEnabled && this.viewHistory(this.getCurrentPlyNumber());
  }
  /**
   * Views the starting position of this game.
   */
  viewStart() {
    this.viewHistory(0);
  }
  /**
   * If viewing history, views the move after the one currently being viewed.
   * If that move is the latest move, stops viewing history.
   */
  viewNext() {
    this.boardState.historyViewerState.isEnabled && this.viewHistory(this.boardState.historyViewerState.plyViewing + 1);
  }
  /**
   * If viewing history, views the previous move to the one currently being viewed.
   * Else, starts viewing history and views the move previous to the latest move.
   */
  viewPrevious() {
    const e = this.boardState.historyViewerState.isEnabled ? this.boardState.historyViewerState.plyViewing : this.getCurrentPlyNumber();
    this.viewHistory(e - 1);
  }
}
const $o = { class: "main-board" }, Bo = /* @__PURE__ */ rt({
  __name: "TheChessboard",
  props: {
    boardConfig: { default: () => ({}) },
    playerColor: {},
    reactiveConfig: { type: Boolean, default: !1 }
  },
  emits: ["boardCreated", "check", "checkmate", "stalemate", "draw", "promotion", "move"],
  setup(t, { emit: e }) {
    const i = t, o = Vt(null), n = je({
      showThreats: !1,
      promotionDialogState: { isEnabled: !1 },
      historyViewerState: { isEnabled: !1 }
    });
    return Wt(() => {
      if (o.value == null)
        throw new Error("vue3-chessboard: Failed to mount board.");
      const r = new Ko(o.value, n, i, e);
      if (e("boardCreated", r), i.reactiveConfig) {
        let s = me(i.boardConfig);
        jt(je(i.boardConfig), (a) => {
          r.setConfig(ct(s, a)), s = me(a);
        });
      }
    }), (r, s) => (ge(), Me("section", {
      class: st(["main-wrap", {
        disabledBoard: n.promotionDialogState.isEnabled,
        viewingHistory: n.historyViewerState.isEnabled
      }])
    }, [
      Te("div", $o, [
        n.promotionDialogState.isEnabled ? (ge(), Ut(Zt, {
          key: 0,
          state: n.promotionDialogState,
          onPromotionSelected: s[0] || (s[0] = (a) => n.promotionDialogState = { isEnabled: !1 })
        }, null, 8, ["state"])) : Qt("", !0),
        Te("div", {
          ref_key: "boardElement",
          ref: o
        }, null, 512)
      ])
    ], 2));
  }
});
export {
  Ko as BoardApi,
  Bo as TheChessboard
};
